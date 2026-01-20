// find number is even or odd

let number = 90;
let eveodd = number % 2 === 0 ? "even":"odd";
console.log(eveodd);

// year is leap year or not

let yr = 2016;
let isleap = (yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0) ? "leap":"not leap";
console.log(isleap);

// return a function

function sample(){
    console.log("sample");
    return function demo(){
        console.log("demo");
        return function test(){
            console.log("test");
        }
    }
}

sample()()()

var value = sample()
let value2 = value()
value2()