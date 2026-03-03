// let pro = new Promise((resolve, reject) => {
// 	let a = 10;
// 	if (a>5){
// 		resolve()
// 	} else {
// 		reject()
// 	}
// })

// pro
// 	.then(() => console.log("Promise resolved"))
// 	.catch((err) => console.error(err, "Promise rejected"));

function pro(num){
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(num)
            res();
        }, 1000)
    })
}

// pro()
//     .then(() => console.log("Resolved")); 
// if chained .then for console.log every time, after 1 second, then all will be resolved

// multiple .then means promise chaining
// in callback hell, we did the samee task but code is harder to debug and code structure is not good
pro(1)
    .then(() => pro(2))
    .then(() => pro(3))
    .then(() => pro(4))
    .then(() => pro(5))
    .catch(() => console.log("Error"))

// Disadvantages: to perform certain task, we need to call a callback function multiple times.
// More functions for smaller task means more complexity and time for execution and function calls
// will be more