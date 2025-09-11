function changeTheme() {
  document.body.classList.toggle("dark-theme");
}

function changeText() {
  const heading = document.getElementById("myfirst");
  heading.innerText = "Text changed using DOM";
  heading.style.color = "black";
  heading.style.backgroundColor = "yellow";
}

function changeColour() {
  const heading = document.getElementById("myfirst");
  if (heading.style.color === "blue") {
    heading.style.color = "black";
  } else {
    heading.style.color = "blue";
  }
}

function addElement() {
  if (!document.getElementById("uniqueParagraph")) {
    const newElement = document.createElement("p");
    newElement.id = "uniqueParagraph"; // Set a unique id for the new element
    newElement.innerText = "This is a new paragraph added using DOM.";
    document.body.appendChild(newElement);
  }
}
