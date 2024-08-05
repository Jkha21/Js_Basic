// Example 1: Creating a Set

// Create an empty Set
const mySet = new Set();

// Create a Set with initial values
const numbers = new Set([1, 2, 3, 4, 5]);

console.log('Initial Set:', numbers); // Output: Set { 1, 2, 3, 4, 5 }

// Example 2: Adding Values

mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log('\nSet after adding values:', mySet); // Output: Set { 1, 2, 3 }

// Example 3: Checking for Existence

console.log('Set has 2:', mySet.has(2)); // Output: true
console.log('Set has 4:', mySet.has(4)); // Output: false

// Example 4: Removing Values

mySet.delete(2);
console.log('\nSet after removing 2:', mySet); // Output: Set { 1, 3 }

// Example 5: Clearing All Values

mySet.clear();
console.log('\nSet after clearing:', mySet); // Output: Set {}

// Example 6: Iterating Over a Set

const mySet2 = new Set([1, 2, 3]);

// Using forEach
console.log('\nIterating using forEach:');
mySet2.forEach(value => console.log(value));

// Using for...of
console.log('\nIterating using for...of:');
for (const value of mySet2) {
  console.log(value);
}

// Example 7: Removing Duplicates from an Array

const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbersWithDuplicates);

console.log('\nUnique numbers from array:', [...uniqueNumbers]); // Output: [1, 2, 3, 4, 5]

// Example 8: Using a Set with Objects

const setOfObjects = new Set();
const obj1 = { id: 1 };
const obj2 = { id: 2 };

setOfObjects.add(obj1);
setOfObjects.add(obj2);
setOfObjects.add(obj1); // Duplicate object, will not be added

console.log('\nSet with objects:', setOfObjects); // Output: Set { { id: 1 }, { id: 2 } }
