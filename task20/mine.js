
let slideIndex = 1;
let btn = document.querySelector('.next');
let btn2 = document.querySelector('.previous');

showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("item");

  if (n >= slides.length) {
    slideIndex = slides.length;
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }

  if (n <= 1) {
    slideIndex = 1;
    btn2.style.display = "none";
  } else {
    btn2.style.display = "block";
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}