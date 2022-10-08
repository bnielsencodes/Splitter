const billAmount = document.getElementById("bill-amount");
const button = document.querySelectorAll(".btn");
const customTip = document.getElementById("custom-tip");
const people = document.getElementById("people");
const error = document.getElementById("error");
const total = document.querySelectorAll(".total");
const reset = document.querySelector(".reset-btn");
let billValue = 0;
let peopleValue = 0;
let tipValue = 0;

billAmount.addEventListener("input", validateBill);
function validateBill() {
  if (billAmount.value.length >= 1) {
    reset.classList.add("active");
  }
  if (billAmount.value.includes(",")) {
    billAmount.value.replace(",", ".");
  }
  billValue = parseFloat(billAmount.value);
  calculate();
  console.log(billValue);
}

