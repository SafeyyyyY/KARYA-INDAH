document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("toggleBtn");
    const banner = document.querySelector(".banner");
    const content = document.querySelector(".content");
    const footer = document.querySelector(".footer");
    const mapDiv = document.getElementById("map");

    let mapInitialized = false;
    let showingMap = false;

    btn.addEventListener("click", function() {
        if (!showingMap) {
            // Sembunyikan banner, content, footer
            banner.classList.add("hide");
            content.classList.add("hide");
            footer.classList.add("hide");

            // Tampilkan Map
            setTimeout(() => {
                banner.style.display = "none";
                content.style.display = "none";
                footer.style.display = "none";
                mapDiv.style.display = "block";
            }, 600);

            btn.textContent = "Kembali ke Tampilan Awal";

            if (!mapInitialized) {
                const lat = -0.637827;
                const lng = 123.947821;

                const map = L.map("map").setView([lat, lng], 15);

                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                }).addTo(map);

                const marker = L.marker([lat, lng]).addTo(map)
                    .bindPopup("<b>Toko Karya Indah</b><br>Soguo, Bolaang Mongondow Selatan");

                marker.on("click", function() {
                    window.open(
                        "https://www.google.com/maps/place/Toko+Karya+Indah,+Soguo,+Bolaang+Mongondow+Selatan,+Sulawesi+Utara",
                        "_blank"
                    );
                });

                mapInitialized = true;
            }

            showingMap = true;
        } else {
            // Sembunyikan Map, tampilkan kembali konten awal
            mapDiv.style.display = "none";
            banner.style.display = "block";
            content.style.display = "block";
            footer.style.display = "block";

            setTimeout(() => {
                banner.classList.remove("hide");
                content.classList.remove("hide");
                footer.classList.remove("hide");
            }, 50);

            btn.textContent = "Klik Disini Untuk Melihat Lokasi";

            showingMap = false;
        }
    });
});
