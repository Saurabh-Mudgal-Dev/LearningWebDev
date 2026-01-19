// reversing an array by using push and pop

let arr = [1, 2, 3, 4, 5];
let arr2 = [];
while (arr.length !== 0) {
    arr2.push(arr.pop());
}
console.log(arr2);

// remove all -ve numbers from array using push, pop, shift, unshift

arr = [1, 2, 3, -3, -5, -7];
arr2 = [];
while (arr.length !== 0) {
    let x = arr.shift();
    if (x > 0) {
        arr2.push(x);
    }
}
console.log(arr2);

// check array is palindrome or not
function palindrome() {
    arr = [2, 2, 3, 4, 2];
    arr2 = [];
    for (let i = arr.length - 1; i > -1; i--) {
        arr2.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== arr2[i]){
            return false
        }
    }
    return true
    }
console.log(palindrome())