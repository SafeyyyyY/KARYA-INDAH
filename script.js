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

    // ambil elemen footer extra
    const footerExtra = document.querySelector(".footer .extra-text");

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        slides.forEach(slide => slide.style.color = '');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');

        if (currentSlide === 1) {
            slides[currentSlide].style.color = 'rgb(231, 123, 46)';
            if (footerExtra) footerExtra.style.display = "block";  // ✅ tampilkan
        } else {
            if (footerExtra) footerExtra.style.display = "none";   // ✅ sembunyikan
        }
    }

    const btn = document.getElementById("toggleBtn");
    btn.addEventListener("click", function() {
        document.body.classList.toggle("alt");
        nextSlide();
    });
});
