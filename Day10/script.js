// const textInput = document.getElementById("myInput");
// textInput.addEventListener("change", (event) => {

//     event.preventDefault()
//     // here event is targetting entire element object node and event.target is targetting the particular element    
//     console.log(event);
//     // event.target gives the input element 
//     console.log(event.target);
//     // event.target.id gives the id and event.target.value gives the value

// })

const form = document.getElementById("formInput");
const textInput = document.getElementById("myInput");
const courseInput = document.getElementById("course");
const output = document.getElementById("output");

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    // get user input values
    const name = textInput.value
    const course = courseInput.value
    console.log(name);
// name and course values are put inside the output
    output.innerText = name + "  " + course;
})