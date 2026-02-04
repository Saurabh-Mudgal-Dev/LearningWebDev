// create a new element - p tag
const New = document.createElement("p");
New.textContent = "paragraph";

// append child paragraph
const P = document.getElementById("abc");
P.appendChild(New);

// remove the element
// also variable does not have to be assigned, you can directly remove
const target = document.querySelector("#abc p");
target.remove();

// add an image inside html without writing html - this is more flexible
const image = document.createElement("img");
image.setAttribute("src", "image.jpg");
image.setAttribute("alt", "an image");

const gal = document.getElementById("gallery");
gal.appendChild(image);

// some time related things
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();