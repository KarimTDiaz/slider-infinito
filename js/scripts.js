const slider = document.getElementById("slider");
const nextButton = document.getElementById("button-right");
const previousButton = document.getElementById("button-left");
const allSliderElements = Array.from(
  document.querySelectorAll(".slider__element")
);

const rootStyles = document.documentElement.style;

let sliderCounter = 0;

const sliderMovingNext = () => {
  //   rootStyles.setProperty("--translate-slider", -100 + "%");
  if (sliderCounter === allSliderElements.length - 2) {
    slider.append(slider.firstElementChild);
  } else {
    sliderCounter++;
  }
  rootStyles.setProperty("--translate-slider", sliderCounter * 100 * -1 + "%");
};

nextButton.addEventListener("click", sliderMovingNext);

const sliderMovingPrevious = () => {
  if (sliderCounter === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    sliderCounter--;
  }
  rootStyles.setProperty("--translate-slider", sliderCounter * 100 * -1 + "%");
};

slider.prepend(slider.lastElementChild);
sliderMovingNext();

previousButton.addEventListener("click", sliderMovingPrevious);
