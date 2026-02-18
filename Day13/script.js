function login(usname, cb) {
    setTimeout(() => {
        cb({ usname: usname, isloggrdin: true, message: "login successful" });
    }, 5000);
}

// converting previous program into promise form
function loginPromise(usname, id) {
    return new Promise((res, rej) => {
        login(usname, userdata => {
            if (!userdata) {
                rej("login failed");
            } else {
                res(userdata);
            }
        });
    });
}

// throwing errors
fetch("<something>")
    .then((resp) => {
        if (!resp.ok) {
            throw new Error("network response was not ok");
        } else {
            return resp.json();
        }
    });

// add the fetch and all in a function so it only runs when we want it to
function getData(url) {
    fetch(url)
        .then(resp => resp.json())
        .then(data => console.log(data));
}
getData("<some url>");

// making function itself asyncronous so we can use await instead of .then
async function getData(url) {
    let resp = await fetch(url);
    let data = await resp.json();
    return data;
}
getData("<some url>")
    .then(data => console.log(data));

// when async. function is called, data is NOT returned, promises are returned and they have data.