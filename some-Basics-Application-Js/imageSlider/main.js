function showSlides(n) {
    let slides = document.querySelectorAll(".slider");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}
//display first slide
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function slides(n) {
    showSlides(slideIndex += n);
}