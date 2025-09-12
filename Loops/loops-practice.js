//For loop practice
let fruits = ["apple", "banana", "mango", "orange", "grape"];
for (let i = 1; i <= fruits.length; i++) {
  console.log(i + ". " + fruits[i - 1]);
}

//Loop backwards through an array
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(i + "." + fruits[i]);
}

//print even numbers from 2 to 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
//Sum of all numbers in an array
let numbers = [5, 10, 15, 20];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum:", sum);

//Multiplication table of 7
for (let i = 1; i <= 10; i++) {
  console.log("7 * " + i + " = " + 7 * i);
}

//...........................................................
//for in loop practice
let person = {
  name: "John",
  age: 30,
  city: "New York",
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}
