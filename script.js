"use strict";

// const tenBtn = document.querySelector("#10k");
// const fiftyBtn = document.querySelector("#50k");
// const OneHundredBtn = document.querySelector("#100k");
// const fiveHundredBtn = document.querySelector("#500k");
// const oneMilBtn = document.querySelector("#1mil");

const selectForm = document.querySelector("#form");
const subscriptionPrice = document.querySelector("#subscription-price");
const paymentPeriod = document.querySelector("#check");

selectForm.addEventListener("change", (e) => {
  subscriptionPrice.textContent = `${e.target.value}`;
  if (paymentPeriod.checked) {
    subscriptionPrice.textContent = `${e.target.value * 2}`;
  }
});
