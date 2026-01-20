// remove all duplicates in an array

function RemoveDuplicatesArray() {
    let arr = [1, 2, 2, 3, 3, 4, 5];
    let arr2 = [];
    while (arr.length > 0) {
        let x = arr.pop();
        found = false;
        for (let i = 0; i < arr2.length; i++) {
            if (x === arr2[i]) {
                found = true;
            }
        }
        if (!found){
            arr2.push(x);
        }
    }
    return arr2;
}
console.log(RemoveDuplicatesArray());

// move all the zeroes to front of array

function MoveZeroes(){
    let arr = [1,2,0,0,3];
    for (let i = arr.length - 1; i > -1; i--) {
       if (arr[i] !== 0){
        let x = arr.pop();
        arr.unshift(x);
       }
       else {
        continue;
       }
    }
    return arr;
}
console.log(MoveZeroes());