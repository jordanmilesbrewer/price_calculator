"use strict";

let pageViews = document.querySelector("#pageviews");
let pirce = document.querySelector("#price");
let slider = document.querySelector("#slider");
let checkbox = document.querySelector("#checkbox");

let views = [
  {
    view: "10k",
    price: 8,
  },
  {
    view: "50k",
    price: 12,
  },
  {
    view: "100k",
    price: 16,
  },
  {
    view: "500k",
    price: 24,
  },
  {
    view: "1 mil",
    price: 36,
  },
];

slider.addEventListener("change", displayPrice);
checkbox.addEventListener("change", displayPrice);

function displayPrice() {
  if (checkbox.checked) {
    pageViews.innerHTML = views[slider.value].view;
    price.innerHTML = "$" + views[slider.value].price * 0.75 * 12;
  } else {
    pageViews.innerHTML = views[slider.value].view;
    price.innerHTML = "$" + views[slider.value].price;
  }
}
