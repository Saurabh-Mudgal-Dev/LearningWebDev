const headingElement = document.getElementById('myHeading');

headingElement.textContent = "New Heading Text";
headingElement.style.color = "tomato";
headingElement.style.backgroundColor = "black";

const elements = document.getElementsByClassName("myClass");

// this does not work
// elements.style.color = "blue";
Array.from(elements).forEach(element => {
    element.style.color = "blue";
});

const paragraph = document.querySelector("#content p");
paragraph.textContent = "This paragraph has been updated using querySelector.";
paragraph.style.color = "blue";