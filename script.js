document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("toggleBtn");
    const banner = document.querySelector(".banner");
    const content = document.querySelector(".content");
    const mapDiv = document.getElementById("map");

    let mapInitialized = false;
    let showingMap = false; // status tampilan

    btn.addEventListener("click", function() {
        if (!showingMap) {
            // ==== Tampilkan MAP ====
            banner.style.display = "none";
            content.style.display = "none";
            mapDiv.style.display = "block";
            btn.textContent = "Kembali ke Tampilan Awal";
            
            // Inisialisasi map sekali saja
            if (!mapInitialized) {
                const map = L.map("map").setView([-0.637827, 123.947821], 15);

                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                }).addTo(map);

                const marker = L.marker([-0.637827, 123.947821]).addTo(map)
                    .bindPopup("<b>Toko Karya Indah</b><br>Soguo, Bolaang Mongondow Selatan");

                // Klik marker → buka Google Maps
                marker.on("click", function() {
                    window.open("https://www.google.com/maps/place/Toko+Karya+Indah,+Soguo,+Bolaang+Mongondow+Selatan,+Sulawesi+Utara", "_blank");
                });

                mapInitialized = true;
            }

            showingMap = true;
        } else {
            // ==== Kembali ke Tampilan Awal ====
            banner.style.display = "block";
            content.style.display = "block";
            mapDiv.style.display = "none";
            btn.textContent = "Klik Disini Untuk Melihat Lokasi";

            showingMap = false;
        }
    });
});
