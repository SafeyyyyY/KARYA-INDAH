document.addEventListener("DOMContentLoaded", function() {
    const images = ["karyaindah.jpg", "karyaindah2.jpg", "karyaindah5.jpg","karyaindah6.jpg"];
    let currentIndex = 0;
    const banner = document.querySelector(".banner");

    function changeBanner() {
        currentIndex = (currentIndex + 1) % images.length;
        banner.style.backgroundImage = `url(${images[currentIndex]})`;
    }

    setInterval(changeBanner, 4000);

    const slides = document.querySelectorAll('.slogan li.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        slides.forEach(slide => slide.style.color = '');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        if (currentSlide === 1) {
            slides[currentSlide].style.color = 'rgb(231, 123, 46)';
        }
    }

    const btn = document.getElementById("toggleBtn");
    btn.addEventListener("click", function() {
        document.body.classList.toggle("alt");
        nextSlide();

        // tampilkan map
        const mapContainer = document.getElementById("map");
        mapContainer.style.display = "block";

        // inisialisasi hanya sekali
        if (!mapContainer.classList.contains("loaded")) {
            const map = L.map('map').setView([-0.502106, 117.153709], 15); // koordinat bisa diganti
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            }).addTo(map);

            // marker lokasi toko
            L.marker([-0.502106, 117.153709]).addTo(map)
                .bindPopup("<b>Toko Karya Indah</b><br>Lokasi toko.")
                .openPopup();

            mapContainer.classList.add("loaded");
        }
    });
});
