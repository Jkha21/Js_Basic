console.log(greet()); // Outputs: "Hello, world!"

function greet() {
    return "Hello, world!";
}

// Function Hoisting

console.log(myVar); // Outputs: undefined
var myVar = 5;
console.log(myVar); // Outputs: 5

var myVar; // Declaration is hoisted
console.log(myVar); // Outputs: undefined
myVar = 5; // Assignment
console.log(myVar); // Outputs: 5

// Variable Hoisting 


console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

// "var" declarations 

