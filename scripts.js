// calculates how much item is after the discount is applied.

const discount = function(a, b) {
  return a * (b / 100);
};
const price = function(num1, discount) {
  return num1 - discount;
};

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const output = document.querySelector("output");

//callback function
form.addEventListener("submit", function(event) {
  //Prevent the default browser behavior - DON"T SUBMIT
  event.preventDefault();

  // form inputs have a property called value
  console.log(discount);
  output.textContent = price(num1.value, num2.value);
});
