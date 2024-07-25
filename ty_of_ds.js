let numbers = [1, 2, 3, 4, 5];
let names = ['Alice', 'Bob', 'Charlie'];

// Array

let person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

// Object 

let map = new Map();
map.set('name', 'Alice');
map.set('age', 30);

// Map

let set = new Set([1, 2, 3, 4, 4, 5]);

// Set 

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'some value');

// WeakMap and WeakSet

let buffer = new ArrayBuffer(16); // Allocate 16 bytes
let int32View = new Int32Array(buffer); // View it as 4 32-bit integers
int32View[0] = 42;

// Typed Arrays

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data fetched'), 2000);
});

promise.then(data => console.log(data)).catch(error => console.error(error));

// Promise

