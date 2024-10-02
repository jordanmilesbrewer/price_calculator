"use strict";

const selectForm = document.querySelector("#form");
let subscriptionPrice = document.querySelector("#subscription-price");
const paymentPeriod = document.querySelector("#check");
const slider = document.querySelector("#slider");
const views = document.querySelector("#views");

function displayPrice(value) {
  if (!paymentPeriod.checked) {
    subscriptionPrice.textContent = `$${value}.00 per month`;
  } else {
    let newSubPrice = value * 12 * 0.75;
    subscriptionPrice.textContent = `$${newSubPrice}.00 per year`;
  }
}

let monthlyRate = 36;

slider.addEventListener("change", (e) => {
  if (slider.value == 0) {
    monthlyRate = 8;
    views.textContent = "10k views per month";
  } else if (slider.value == 25) {
    monthlyRate = 12;
    views.textContent = "50k views per month";
  } else if (slider.value == 50) {
    monthlyRate = 16;
    views.textContent = "100k views per month";
  } else if (slider.value == 75) {
    monthlyRate = 24;
    views.textContent = "500k views per month";
  } else if (slider.value == 100) {
    monthlyRate = 36;
    views.textContent = "1 Million views per month";
  }
  displayPrice(monthlyRate);
});

paymentPeriod.addEventListener("change", (e) => {
  displayPrice(monthlyRate);
});
