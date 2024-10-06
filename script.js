"use strict";

let pageViews = document.querySelector("#pageviews");
let pirce = document.querySelector("#price");
let slider = document.querySelector("#slider");
let checkbox = document.querySelector("#checkbox");
let paymentPeriod = document.querySelector(".payment-period");

let views = [
  {
    view: "10k PAGEVIEWS /month",
    price: 8,
  },
  {
    view: "50k PAGEVIEWS /month",
    price: 12,
  },
  {
    view: "100k PAGEVIEWS /month",
    price: 16,
  },
  {
    view: "500k PAGEVIEWS /month",
    price: 24,
  },
  {
    view: "1 MIL PAGEVIEWS /month",
    price: 36,
  },
];

slider.addEventListener("change", displayPrice);
checkbox.addEventListener("change", displayPrice);

function displayPrice() {
  if (checkbox.checked) {
    pageViews.innerHTML = views[slider.value].view;
    price.innerHTML = "$" + views[slider.value].price * 0.75 * 12;
    paymentPeriod.textContent = "/year";
  } else {
    pageViews.innerHTML = views[slider.value].view;
    price.innerHTML = "$" + views[slider.value].price;
    paymentPeriod.textContent = "/month";
  }
}
