// function handleClick() {

//     const a = document.createElement("span");
//     const b = document.createElement("img");

//     a.textContent = "span element";

//     b.setAttribute("src", "image.jpg");
//     b.setAttribute("alt", "an image");
//     document.getElementById("abc").textContent = "Change detected";

//     const c = document.getElementById("def");
//     c.appendChild(a);
//     c.appendChild(b);

// }

const buttonElement = document.getElementById("abc");
buttonElement.addEventListener("click", function () {
    const a = document.createElement("span");
    const b = document.createElement("img");

    a.textContent = "span element";

    b.setAttribute("src", "image.jpg");
    b.setAttribute("alt", "an image");
    document.getElementById("abc").textContent = "Change detected";

    const c = document.getElementById("def");
    c.appendChild(a);
    c.appendChild(b);
});