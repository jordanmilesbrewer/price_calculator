"use strict";

// const tenBtn = document.querySelector("#10k");
// const fiftyBtn = document.querySelector("#50k");
// const OneHundredBtn = document.querySelector("#100k");
// const fiveHundredBtn = document.querySelector("#500k");
// const oneMilBtn = document.querySelector("#1mil");

const selectForm = document.querySelector("#form");
const subscriptionPrice = document.querySelector("#subscription-price");
const paymentPeriod = document.querySelector("#check");
const slider = document.querySelector("#slider");

// selectForm.addEventListener("change", (e) => {
//   subscriptionPrice.textContent = `$${e.target.value}.00 Per Month`;
//   if (paymentPeriod.checked) {
//     subscriptionPrice.textContent = `$${
//       e.target.value * 0.75 * 12
//     }.00 Per Year`;
//   }
// });

function displayPrice(value) {
  subscriptionPrice.textContent = `$${value}.00`;
}

slider.addEventListener("change", (e) => {
  if (slider.value == 0) {
    displayPrice(8);
  } else if (slider.value == 25) {
    displayPrice(12);
  } else if (slider.value == 50) {
    displayPrice(16);
  } else if (slider.value == 75) {
    displayPrice(24);
  } else if (slider.value == 100) {
    displayPrice(36);
  }
});
