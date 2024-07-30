let arr = [1, 2, 3, 4, 5];

// Simple Array 

let arr_1 = [1, 2, 3];
arr_1.push(4); // arr is now [1, 2, 3, 4]   

let arr_2 = [1, 2, 3];
arr_2.pop(); // arr is now [1, 2]

let arr_3 = [1, 2, 3];
arr_3.shift(); // arr is now [2, 3]

let arr_4 = [1, 2, 3];
arr_4.unshift(0); // arr is now [0, 1, 2, 3]

let arr_5 = [1, 2, 3, 4];
arr_4.splice(2, 1, 'a', 'b'); // arr is now [1, 2, 'a', 'b', 4]

let arr_6 = [1, 2, 3, 4];
let newArr = arr_6.slice(1, 3); // newArr is [2, 3]

let arr_7 = [1, 2, 3];
let squared = arr_7.map(x => x * x); // squared is [1, 4, 9]


let arr_8 = [1, 2, 3, 4, 5];
let even = arr_8.filter(x => x % 2 === 0); // even is [2, 4]


let arr_9 = [1, 2, 3, 4];
let sum = arr_9.reduce((acc, val) => acc + val, 0); // sum is 10









