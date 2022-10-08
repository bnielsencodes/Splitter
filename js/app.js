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

/* 
To get the value for each button, store the value inside 
a global variable. Utilize foreach loop on the target, 
ie buttons. Use a function with another foreach loop.
Make a conditional statement that states, if the clicked
button matches the innerHTML of the clicked button, then
rewrite the value of the global variable.
*/

button.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
function handleClick(event) {
  button.forEach((btn) => {
    event.preventDefault();
    reset.classList.add("active");
    btn.classList.remove("active");
    if (event.target.innerHTML === btn.innerHTML) {
      btn.classList.add("active");
      tipValue = parseFloat(btn.innerHTML) / 100;
      console.log(tipValue);
    }
  });
  customTip.value = "";
  calculate();
}

customTip.addEventListener("input", tipCustomValue);
function tipCustomValue() {
  reset.classList.add("active");
  tipValue = parseFloat(customTip.value / 100);
  button.forEach((btn) => {
    btn.classList.remove("active");
  });
  if (customTip.value !== 0) {
    calculate();
  }
  console.log(tipValue);
  return customTip.innerText + "%";
}

people.addEventListener("input", setPeopleValue);
function setPeopleValue() {
  if (people.value >= 1) {
    reset.classList.add("active");
  }
  peopleValue = parseFloat(people.value);
  if (peopleValue <= 0) {
    error.innerHTML = "number must be greater than zero";
    setTimeout(function () {
      error.innerHTML = "";
    }, 2000);
  }
  console.log(peopleValue);
  calculate();
}

reset.addEventListener("click", handleReset);
function handleReset() {
  billAmount.value = 0.0;
  validateBill();

  button[2].click();
  people.value = 1;
  setPeopleValue();
}
