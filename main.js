// sum of inputs
// let arr = prompt('enter a numbers with "," ').split(",");
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += +arr[i];
// }
// document.querySelector("p").innerHTML = `${sum}`;

// sum of positive inputs
// let arr = prompt('enter a numbers with "," ').split(",");
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     sum += +arr[i];
//   } else {
//     alert("enter positive numbers");
//   }
// }
// document.querySelector("p").innerHTML = `positive number's sum = ${sum}`;

// compare a to zero
// let a = +prompt('enter a numbers with "," ');
// let number;
// if (a > 0) {
//   number = `${a} is positive number`;
// } else if (a < 0) {
//   number = `${a} is negative number`;
// } else {
//   number = `${a} is equal to zero`;
// }
// document.querySelector("p").innerHTML = `${number}`;

// biggest number between 2 inputs
// let a = +prompt("enter first number");
// let b = +prompt("enter second number");
// let number;
// if (a > b) {
//   number = `${a} is biggest`;
// } else if (a < b) {
//   number = `${b} is biggest`;
// } else {
//   number = `${a} is equal to ${b}`;
// }
// document.querySelector("p").innerHTML = `${number}`;

diskriminant
let a = +prompt("enter a");
let b = +prompt("enter b");
let c = +prompt("enter c");
let result;
let result2;
let d = b ** 2 - 4 * a * c;
if (d > 0) {
  result = (-b + d ** 0.5) / (2 * a);
  result2 = (-b - d ** 0.5) / (2 * a);
} else if ((d = 0)) {
  result = -b / (2 * a);
  result2 = result;
} else {
  result = "həqiqi ədədlər çoxluğunda kökü yoxdur";
  result2 = result;
}
document.querySelector("p").innerHTML = `x1 = ${result} <br> x2 = ${result2}`;
