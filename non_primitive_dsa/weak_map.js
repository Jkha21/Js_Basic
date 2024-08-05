// Create a WeakMap
const weakMap = new WeakMap();

// Create some objects to use as keys
const obj1 = {};
const obj2 = {};

// Set values in the WeakMap
weakMap.set(obj1, 'value1');
weakMap.set(obj2, 'value2');

// Get values from the WeakMap
console.log(weakMap.get(obj1)); // Output: 'value1'
console.log(weakMap.get(obj2)); // Output: 'value2'

// Check if a key exists
console.log(weakMap.has(obj1)); // Output: true
console.log(weakMap.has(obj2)); // Output: true

// Delete a key-value pair
weakMap.delete(obj1);
console.log(weakMap.has(obj1)); // Output: false
