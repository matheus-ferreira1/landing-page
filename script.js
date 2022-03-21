let slideIndex = 1;
showSlides(slideIndex);

function changeSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    clearTimeout(automaticSlide)
    let i;
    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll('.dot');

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace("active","")
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active"
}

let automaticIndex = 0;

automaticSlide();

function automaticSlide() {
    let i;
    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll('.dot');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace("active","")
    }
    automaticIndex++;
    if (automaticIndex > slides.length) {
        automaticIndex = 1
    }
    slides[automaticIndex - 1].style.display = "block";
    dots[automaticIndex - 1].className += " active"
    setTimeout(automaticSlide, 5000);
}