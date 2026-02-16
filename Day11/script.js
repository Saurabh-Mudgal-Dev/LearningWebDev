console.log("start...");
function a(){
    setTimeout(() =>{
        console.log("hello");
    }, 5000);
}
a();

// if return "hello" inside setTimeout and console.log(a()), then won't work
function b(cb){
    setTimeout(() =>{
        cb("hello");
    }, 5000);
}
b((data)=>{
    console.log(data);
});

function login(usname, passwd, cb){
    setTimeout(()=>{
        cb({usname: usname, isloggrdin: true, message: "login successful"});
    }, 5000);
}
function getvideo(email, cb){
    setTimeout(() => {
        cb([{title: "video 1"}, {title: "video 2"}]);
    }, 2000);
}
function getvideodetail(video, cb){
    setTimeout(()=>{
        cb({title: video.title, description: "this is " + video.title});
    }, 2000);
}

login("abc.com", 123, (userdata)=>{
    console.log(userdata);
    getvideo(userdata.usname, (video)=>{
        console.log(video);
        getvideodetail(video[1], (videodetail)=>{  // `this is callback hell
            console.log(videodetail);
        });
    });
});
console.log("end...");