let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, World!`;

// Simple String
// abaabab
// Methods of String

let str = "Hello, World!";
console.log(str.length); // Outputs: 13

// Length of the string

let str_1 = "Hello";
console.log(str_1.charAt(0)); // Outputs: 'H'

//  Use of charAt method 

let str1 = "Hello";
let str2 = "World";
let result = str1.concat(" ", str2);
console.log(result); // Outputs: 'Hello World'

// Use of concate method for concatenation 

let str_2 = "Hello, World!";
console.log(str_2.includes("World")); // Outputs: true

// Use of includes method that checks whether a string is in the given string.

let str_3 = "Hello, World!";
console.log(str_3.indexOf("World")); // Outputs: 7

// Use of indexOf method to find the start index of the given string

let str_4 = "Hello, World!";
let newStr = str_4.replace("World", "Universe");
console.log(newStr); // Outputs: 'Hello, Universe!'

// Use of replace method

let str_5 = "Hello, World!";
let parts = str.split(", ");
console.log(parts); // Outputs: ['Hello', 'World!']

// Use of split method 

let str_6 = "Hello, World!";
console.log(str.toLowerCase()); // Outputs: 'hello, world!'

// Use of toLowerCase method 

let str_7 = "Hello, World!";
console.log(str.toUpperCase()); // Outputs: 'HELLO, WORLD!'

// Use of toUpperCase method 

let str_8 = "  Hello, World!  ";
console.log(str.trim()); // Outputs: 'Hello, World!'

// Use of trim method 

let str_9 = "Hello, World!";
console.log(str.substring(0, 5)); // Outputs: 'Hello'

// Use of the substring method

let str_10 = "Hello, World!";
console.log(str.slice(-6, -1)); // Outputs: 'World'

// Use of slice method

let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`; // Using template literals
console.log(fullName); // Outputs: 'John Doe'

let email = " john.doe@example.com ";
let cleanedEmail = email.trim().toLowerCase();
console.log(cleanedEmail); // Outputs: 'john.doe@example.com'

// Use Case Example 





