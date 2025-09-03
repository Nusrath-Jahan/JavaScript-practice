console.log("Event Listener practice");
//Mouse Events
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button was clicked!");
})

button.addEventListener("mousemover", function() {
    alert("Mouse moved over the button!");
})
//keyboard Events
const inputField = document.getElementById("myInput");
inputField.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
})

//Form Events
// Form submission
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    alert("Form submitted!");
})
//change event
const selectField = document.getElementById("mySelect");
selectField.addEventListener("change", function(car) {
    alert("Selected car: "+ car.target.value);
})



