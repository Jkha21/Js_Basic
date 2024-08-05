// Create a new Map
const myMap = new Map();

// Add key-value pairs
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set('city', 'New York');

// Retrieve a value
console.log(myMap.get('name')); // Output: Alice

// Check if a key exists
console.log(myMap.has('age')); // Output: true

// Iterate over entries
for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

// Delete a key-value pair
myMap.delete('city');

// Get the size of the Map
console.log(myMap.size); // Output: 2

// Clear all entries
myMap.clear();
console.log(myMap.size); // Output: 0
