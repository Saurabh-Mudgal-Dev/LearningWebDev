// const demo = () => {
//     console.log("demo");
// }
// demo()

// const demo = () => "returned this"

// callback function is asyncronous as we move to another task befor the previous one finished
// function sample(callback){
//     console.log("sample");
//     callback()
// }
// function test(){
//     console.log("test");
// }
// sample(test)

/* Take an array of length 10 and find pass/fail corresponding to marks */

let arr = [23,40,21,15,0,17,34,36,8,9];
let new_arr = arr.filter( x => {
    if (x >= 16){
        console.log( x, "pass" );
    }
    else{
        console.log( x, "fail" )
    }
});
