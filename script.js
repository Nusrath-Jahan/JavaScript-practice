console.log("Hello World");

//forEach function
const fruits = ["apple", "banana", "cherry"];
let result = "";
fruits.forEach((fruits) => (result += fruits + " "));
console.log(result.trim()); //[trim() removes whitespace from both ends of a string]
// Output: apple banana cherry

//Map function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]

// Filter function
const mixedNumbers = [1, -2, 3, -4, 5];
const positiveNumbers = mixedNumbers.filter((num) => num > 0);
console.log(positiveNumbers);
// Output: [1, 3, 5]
