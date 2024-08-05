// Example 1: Basic Array Creation and Access
const fruits = ['apple', 'banana', 'cherry'];
console.log('Basic Array Creation and Access:');
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
fruits[1] = 'blueberry';
console.log(fruits[1]); // Output: 'blueberry'

// Example 2: Array Methods
const numbers = [1, 2, 3, 4, 5];
console.log('\nArray Methods:');
numbers.push(6); // Adds 6 to the end
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

const last = numbers.pop(); // Removes the last element
console.log(last); // Output: 6
console.log(numbers); // Output: [1, 2, 3, 4, 5]

numbers.unshift(0); // Adds 0 to the beginning
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5]

const first = numbers.shift(); // Removes the first element
console.log(first); // Output: 0
console.log(numbers); // Output: [1, 2, 3, 4, 5]

const sliced = numbers.slice(1, 4); // Extracts elements from index 1 to 3
console.log(sliced); // Output: [2, 3, 4]

numbers.splice(2, 1, 'a', 'b'); // Removes 1 element at index 2 and adds 'a' and 'b'
console.log(numbers); // Output: [1, 2, 'a', 'b', 4, 5]

// Example 3: Iterating Over Arrays
const colors = ['red', 'green', 'blue'];
console.log('\nIterating Over Arrays:');
colors.forEach(color => console.log(color));

const uppercasedColors = colors.map(color => color.toUpperCase());
console.log(uppercasedColors); // Output: ['RED', 'GREEN', 'BLUE']

for (const color of colors) {
  console.log(color);
}

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Example 4: Array Destructuring
const point = [10, 20];
console.log('\nArray Destructuring:');
const [x, y] = point;
console.log(x); // Output: 10
console.log(y); // Output: 20

const [, second] = point;
console.log(second); // Output: 20

// Example 5: Nested Arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log('\nNested Arrays:');
console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][2]); // Output: 6

matrix.forEach(row => {
  row.forEach(value => {
    console.log(value);
  });
});

// Example 6: Array of Objects
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
console.log('\nArray of Objects:');
console.log(people[0].name); // Output: 'Alice'
console.log(people[1].age); // Output: 30

const names = people.map(person => person.name);
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
