document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector(".banner");
    const btn = document.getElementById("toggleBtn");
    const mapDiv = document.getElementById("map");

    // Inisialisasi peta
    const map = L.map('map').setView([-6.200000, 106.816666], 13); // contoh: Jakarta
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Marker lokasi
    L.marker([-6.200000, 106.816666]).addTo(map)
        .bindPopup("<b>Toko Karya Indah</b><br>Lokasi di sini.")
        .openPopup();

    // Saat tombol diklik → sembunyikan banner, tampilkan peta
    btn.addEventListener("click", function() {
        banner.style.display = "none";       // sembunyikan banner
        mapDiv.style.display = "block";      // tampilkan map
        map.invalidateSize();                // refresh peta biar muncul
    });
});
