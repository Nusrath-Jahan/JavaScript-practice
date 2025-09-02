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

// Reduce function
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);
// Output: 15

//[.reduce() method is used on arrays to reduce all the elements to a single value by applying a function you provide.
//.reduce() হলো একটা Array method, যা পুরো array-এর উপাদানগুলোকে (elements) একসাথে মিলিয়ে একটা একক (single) value তৈরি করে।]
// উদাহরণ: 5টা সংখ্যার array আছে, [1, 2, 3, 4, 5]. এই array-এর সবগুলো সংখ্যার যোগফল বের করতে চাইলে আমরা .reduce() method ব্যবহার করতে পারি।


//Real example for fetch API

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json()) 
//.then((data) => console.log(data))
.then((data) => {
    const dataTitles = data.map((post) => post.id);
    console.log(dataTitles);
})
.catch((error) => console.error("Error fetching data:", error));