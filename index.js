const numbersBefore = document.querySelectorAll(".number-before");
const numbersAfter = document.querySelectorAll(".number-after");

const hourBefore = document.querySelectorAll(".hour-before");
const hourAfter = document.querySelectorAll(".hour-after");

const minutesBefore = document.querySelectorAll(".minutes-before");
const minutesAfter = document.querySelectorAll(".minutes-after");

const secondsBefore = document.querySelectorAll(".seconds-before");
const secondsAfter = document.querySelectorAll(".seconds-after");

numbersBefore.forEach((time) => (time.style.visibility = time.value < 0 && 'hidden'));

const scrollHours = function(event) {
  const inputHours = document.querySelector(".input-hours");
  if (event.deltaY < 0 && inputHours.value < 24) {
    // Scroll para cima
    inputHours.value++;
    hourBefore.forEach((hour) => hour.value++);
    hourAfter.forEach((hour) => hour.value++);
  } else if (event.deltaY > 0 && inputHours.value > 0) {
    // Scroll para baixo
    inputHours.value--;
    hourBefore.forEach((hour) => hour.value--);
    hourAfter.forEach((hour) => hour.value--);
  }
  hourBefore.forEach((hour) => hour.value < 0 ? (hour.style.visibility = 'hidden') : (hour.style.visibility = 'visible'));
  hourAfter.forEach((hour) => hour.value > 24 ? (hour.style.visibility = 'hidden') : (hour.style.visibility = 'visible'));
}
const scrollMinutes = function(event) {
  const inputMinutes = document.querySelector(".input-minutes");
  if (event.deltaY < 0 && inputMinutes.value < 60) {
    // Scroll para cima
    inputMinutes.value++;
    minutesBefore.forEach((hour) => hour.value++);
    minutesAfter.forEach((hour) => hour.value++);
  } else if (event.deltaY > 0 && inputMinutes.value > 0) {
    // Scroll para baixo
    inputMinutes.value--;
    minutesBefore.forEach((hour) => hour.value--);
    minutesAfter.forEach((hour) => hour.value--);
  }
  minutesBefore.forEach((hour) => hour.value < 0 ? (hour.style.visibility = 'hidden') : (hour.style.visibility = 'visible'));
  minutesAfter.forEach((hour) => hour.value > 60 ? (hour.style.visibility = 'hidden') : (hour.style.visibility = 'visible'));
}
const scrollSeconds = function(event) {
  const inputSeconds = document.querySelector(".input-seconds");
  if (event.deltaY < 0 && inputSeconds.value < 60) {
    // Scroll para cima
    inputSeconds.value++;
    secondsBefore.forEach((hour) => hour.value++);
    secondsAfter.forEach((hour) => hour.value++);
  } else if (event.deltaY > 0 && inputSeconds.value > 0) {
    // Scroll para baixo
    inputSeconds.value--;
    secondsBefore.forEach((hour) => hour.value--);
    secondsAfter.forEach((hour) => hour.value--);
  }
  secondsBefore.forEach((hour) => hour.value < 0 ? (hour.style.visibility = 'hidden') : (hour.style.visibility = 'visible'));
  secondsAfter.forEach((hour) => hour.value > 60 ? (hour.style.visibility = 'hidden') : (hour.style.visibility = 'visible'));
}

// Eventos scroll do mouse
document.querySelector(".container-hours").addEventListener("wheel", scrollHours);
document.querySelector(".container-minutes").addEventListener("wheel", scrollMinutes);
document.querySelector(".container-seconds").addEventListener("wheel", scrollSeconds);

