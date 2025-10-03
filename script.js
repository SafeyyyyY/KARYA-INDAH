document.addEventListener("DOMContentLoaded", function() {
    const images = ["karyaindah.jpg", "karyaindah2.jpg", "karyaindah5.jpg","karyaindah6.jpg"];
    let currentIndex = 0;
    const banner = document.querySelector(".banner");
    const mapDiv = document.getElementById("map");

    // Slideshow banner
    function changeBanner() {
        currentIndex = (currentIndex + 1) % images.length;
        banner.style.backgroundImage = `url(${images[currentIndex]})`;
    }
    setInterval(changeBanner, 4000);

    // Inisialisasi peta Leaflet
    let map;
    function initMap() {
        if (!map) {
            map = L.map('map').setView([-7.782893, 110.366328], 15); // ganti koordinat sesuai lokasi toko
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);
            L.marker([-7.782893, 110.366328]).addTo(map)
              .bindPopup("Lokasi Toko Karya Indah")
              .openPopup();
        }
    }

    // Tombol toggle
    const btn = document.getElementById("toggleBtn");
    btn.addEventListener("click", function() {
        if (banner.style.display !== "none") {
            banner.style.display = "none";
            mapDiv.style.display = "block";
            initMap();
            btn.textContent = "Kembali ke Tampilan Awal";
        } else {
            banner.style.display = "block";
            mapDiv.style.display = "none";
            btn.textContent = "Klik Disini Untuk Melihat Selengkapnya";
        }
    });
});
