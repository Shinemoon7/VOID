/* =========================================================
   VOID STUDIO — script.js
   VISUAL ERAS slider (index.html)
   3 slides, navigation by left/right arrows
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  var slider = document.getElementById("slider");
  if (!slider) return;

  var slides = slider.querySelectorAll(".slider-slide");
  var prevBtn = document.getElementById("sliderPrev");
  var nextBtn = document.getElementById("sliderNext");

  if (slides.length === 0) return;

  var currentSlide = 0;

  function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
      if (i === index) {
        slides[i].classList.add("slider-slide-active");
      } else {
        slides[i].classList.remove("slider-slide-active");
      }
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  }

});
