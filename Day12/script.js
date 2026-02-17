// pending, resolved, rejected are types of promises
let myPromise = new Promise((res, rej) => {
    let data = "huefihe";
    if (data) {
        res(data);
    } else {
        rej("error");
    }
});

myPromise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    }); //resolved or rejected in order: cb

let resp = fetch("<something>"); // this is a promise state pending at just fetch
resp.then((robj) => {
    // console.log(robj);
    // console.log(robj.json());
    robj.json().then((data) => {
        console.log(data);
    });
});

// second way to write
fetch("<something>")
    .then((robj) => {                     // promise hell: nested handling
        robj.json().then((data) => {
            console.log(data);
        });
    });

fetch("<something>")                // promise chaining to fix promise hell
    .then((robj) => {
        return robj.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

fetch("<something>")
    .then(robj => robj.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

console.log(myPromise);