const sliderLine = document.querySelector(".image-line");
const sliderImg = document.querySelectorAll(".image-slid");
const sliderControl = document.querySelectorAll(".control");
const sliderControls = document.querySelectorAll(".controls");
const sliderText = document.querySelectorAll(".text");

let sliderCount = 0;
let sliderWidth;

window.addEventListener("resize", showSlide);

function showSlide() {
  sliderWidth = document.querySelector(".image-wrapper").offsetWidth;
  sliderLine.computedStyleMap.width = sliderWidth * sliderImg.length + "px";
  sliderImg.forEach((item) => (item.style.width = sliderWidth + "px"));
}

showSlide();

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisText(index) {
  sliderText.forEach((item) => item.classList.remove("active-text"));
  sliderText[index].classList.add("active-text");
}

function thisSlide(index) {
  sliderControl.forEach((item) => item.classList.remove("active-control"));
  sliderControl[index].classList.add("active-control");
}

sliderControls.forEach((control, index) => {
  control.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
    thisText(sliderCount);
  });
});
