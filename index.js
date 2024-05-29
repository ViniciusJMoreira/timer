const numbersBefore = document.querySelectorAll(".number-before");
const numbersAfter = document.querySelectorAll(".number-after");

const hourBefore = document.querySelectorAll(".hour-before");
const hourAfter = document.querySelectorAll(".hour-after");

const minutesBefore = document.querySelectorAll(".minutes-before");
const minutesAfter = document.querySelectorAll(".minutes-after");

const secondsBefore = document.querySelectorAll(".seconds-before");
const secondsAfter = document.querySelectorAll(".seconds-after");

numbersBefore.forEach((time) => (time.style.visibility = time.value < 0 && 'hidden'));

// instructions for scroll events
const scrollEventHours = function(event) {
  const inputHours = document.querySelector(".input-hours");
  if (event.deltaY < 0 && inputHours.value < 24) {
    // Scroll para cima
    inputHours.value++;
    hourBefore.forEach((time) => time.value++);
    hourAfter.forEach((time) => time.value++);
  } else if (event.deltaY > 0 && inputHours.value > 0) {
    // Scroll para baixo
    inputHours.value--;
    hourBefore.forEach((time) => time.value--);
    hourAfter.forEach((time) => time.value--);
  }
  hourBefore.forEach((time) => time.value < 0 ? (time.style.visibility = 'hidden') : (time.style.visibility = 'visible'));
  hourAfter.forEach((time) => time.value > 24 ? (time.style.visibility = 'hidden') : (time.style.visibility = 'visible'));
}
const scrollEventMinutes = function(event) {
  const inputMinutes = document.querySelector(".input-minutes");
  if (event.deltaY < 0 && inputMinutes.value < 60) {
    // Scroll para cima
    inputMinutes.value++;
    minutesBefore.forEach((time) => time.value++);
    minutesAfter.forEach((time) => time.value++);
  } else if (event.deltaY > 0 && inputMinutes.value > 0) {
    // Scroll para baixo
    inputMinutes.value--;
    minutesBefore.forEach((time) => time.value--);
    minutesAfter.forEach((time) => time.value--);
  }
  minutesBefore.forEach((time) => time.value < 0 ? (time.style.visibility = 'hidden') : (time.style.visibility = 'visible'));
  minutesAfter.forEach((time) => time.value > 60 ? (time.style.visibility = 'hidden') : (time.style.visibility = 'visible'));
}
const scrollEventSeconds = function(event) {
  const inputSeconds = document.querySelector(".input-seconds");
  if (event.deltaY < 0 && inputSeconds.value < 60) {
    // Scroll para cima
    inputSeconds.value++;
    secondsBefore.forEach((time) => time.value++);
    secondsAfter.forEach((time) => time.value++);
  } else if (event.deltaY > 0 && inputSeconds.value > 0) {
    // Scroll para baixo
    inputSeconds.value--;
    secondsBefore.forEach((time) => time.value--);
    secondsAfter.forEach((time) => time.value--);
  }
  secondsBefore.forEach((time) => time.value < 0 ? (time.style.visibility = 'hidden') : (time.style.visibility = 'visible'));
  secondsAfter.forEach((time) => time.value > 60 ? (time.style.visibility = 'hidden') : (time.style.visibility = 'visible'));
}

// instructions for touch events
let startY = 0;
const touchEventHours = function (event) {
  event.preventDefault();
  const currentY = event.touches[0].clientY;
  const diffY = currentY - startY;
  const inputHours = document.querySelector(".input-hours");
  if (Math.abs(diffY) > 10) {
    // Detecta um arrasto mínimo de 10 pixels
    if (diffY < 0 && inputHours.value > 0) {
      // arrastar para cima aqui
      inputHours.value--;
      hourBefore.forEach((time) => time.value--);
      hourAfter.forEach((time) => time.value--);
    } else if (inputHours.value < 24) {
      // arrastar para baixo aqui
      inputHours.value++;
      hourBefore.forEach((time) => time.value++);
      hourAfter.forEach((time) => time.value++);
    }
    hourBefore.forEach((time) => time.value < 0 ? (time.style.visibility = 'hidden') : (time.style.visibility = 'visible'));
    hourAfter.forEach((time) => time.value > 24 ? (time.style.visibility = 'hidden') : (time.style.visibility = 'visible'));
    startY = currentY;
  }
};
const touchEventMinutes = function (event) {
  event.preventDefault();
  const currentY = event.touches[0].clientY;
  const diffY = currentY - startY;
  const inputMinutes = document.querySelector(".input-minutes");
  if (Math.abs(diffY) > 10) {
    // Detecta um arrasto mínimo de 10 pixels
    if (diffY < 0 && inputMinutes.value > 0) {
      // arrastar para cima aqui
      inputMinutes.value--;
      minutesBefore.forEach((time) => time.value--);
      minutesAfter.forEach((time) => time.value--);
    } else if (inputMinutes.value < 60) {
      // arrastar para baixo aqui
      inputMinutes.value++;
      minutesBefore.forEach((time) => time.value++);
      minutesAfter.forEach((time) => time.value++);
    }
    minutesBefore.forEach((time) => time.value < 0 ? (time.style.visibility = 'hidden') : (time.style.visibility = 'visible'));
    minutesAfter.forEach((time) => time.value > 60 ? (time.style.visibility = 'hidden') : (time.style.visibility = 'visible'));
    startY = currentY;
  }
};
const touchEventSeconds = function (event) {
  event.preventDefault();
  const currentY = event.touches[0].clientY;
  const diffY = currentY - startY;
  const inputSeconds = document.querySelector(".input-seconds");
  if (Math.abs(diffY) > 10) {
    // Detecta um arrasto mínimo de 10 pixels
    if (diffY < 0 && inputSeconds.value > 0) {
      // arrastar para cima aqui
      inputSeconds.value--;
      secondsBefore.forEach((time) => time.value--);
      secondsAfter.forEach((time) => time.value--);
    } else if (inputSeconds.value < 60) {
      // arrastar para baixo aqui
      inputSeconds.value++;
      secondsBefore.forEach((time) => time.value++);
      secondsAfter.forEach((time) => time.value++);
    }
    secondsBefore.forEach((time) => time.value < 0 ? (time.style.visibility = 'hidden') : (time.style.visibility = 'visible'));
    secondsAfter.forEach((time) => time.value > 60 ? (time.style.visibility = 'hidden') : (time.style.visibility = 'visible'));
    startY = currentY;
  }
};

const containerHours = document.querySelector(".container-hours");
const containerMinutes = document.querySelector(".container-minutes");
const containerSeconds = document.querySelector(".container-seconds");

// scroll events
containerHours.addEventListener("wheel", scrollEventHours);
containerMinutes.addEventListener("wheel", scrollEventMinutes);
containerSeconds.addEventListener("wheel", scrollEventSeconds);

// touch events
containerHours.addEventListener("touchmove", touchEventHours, {passive:false});
containerMinutes.addEventListener("touchmove", touchEventMinutes, {passive:false});
containerSeconds.addEventListener("touchmove", touchEventSeconds, {passive:false});
