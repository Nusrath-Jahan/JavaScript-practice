//For
//for of
//for in
//do-while
//while

//...........................................................
//For loop

//print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

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
//for of loop
let color = ["red", "green", "blue", "yellow"];
for (let col of color) {
  console.log(col);
}

//...........................................................
//for in loop

let person = {
  name: "John",
  age: 30,
  city: "New York",
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}
//...........................................................
//do-while loop

let count = 1;
do {
  console.log("Count is: : " + count);
  count++;
} while (count <= 5);

//password checker

let password = 123456;
let userInput;
do {
  userInput = prompt("Enter your password:");
} while (userInput != password);
console.log("Access granted!");

// do {
//   userInput = prompt("Enter your password:");
//   if (userInput === null) {
//     alert("Cancelled");
//     break;
//   }
//   if (userInput != password){
//     alert("Wrong password")
//   }
// } while (userInput != password);
// if (userInput === password) {
//   console.log("Access granted!");
// }


//...........................................................
//while loop
let num = 1;
while (num <= 5) {
  console.log("Number is: " + num);
  num++;
}