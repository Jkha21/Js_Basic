// Explicit type declaration
let age: number = 25;
let name_: string = "Alice";

// Function with type annotations
function greet(person: string): string {
    return `Hello, ${person}!`;
}

console.log(greet(name_)); // Works fine
// console.log(greet(age)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Static Typing

// Explicit type annotation
let message: string = "Hello, world!";

// Type inference
let greeting = "Hello, world!"; // TypeScript infers `greeting` to be of type `string`

// Function with inferred return type
function multiply(x: number, y: number) {
    return x * y; // TypeScript infers the return type to be `number`
}

let result = multiply(5, 10); // TypeScript infers `result` to be of type `number`

// Defining a type alias
type Person_1 = {
    name: string;
    age: number;
};

// Using the type alias in a variable
const person: Person = {
    name: "Alice",
    age: 30
};

// Union types
type Status = "active" | "inactive" | "pending";

const status_: Status = "active"; // Works fine
// const status: Status = "completed"; // Error: Type '"completed"' is not assignable to type 'Status'

// Intersection types
type Address = {
    street: string;
    city: string;
};

type Contact = Person & Address;

const contact: Contact = {
    name: "Alice",
    age: 30,
    street: "123 Main St",
    city: "Wonderland"
};

// Generic function example
function identity<T>(arg: T): T {
    return arg;
}

let num = identity(5); // Type is inferred as number
let str = identity("hello"); // Type is inferred as string

// Generic class example
class GenericStack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }
}

let numberStack = new GenericStack<number>();
numberStack.push(1);
numberStack.push(2);
let num_ = numberStack.pop(); // Type is number

let stringStack = new GenericStack<string>();
stringStack.push("hello");
stringStack.push("world");
let str_ = stringStack.pop(); // Type is string

// Array examples
let numbers: number[] = [1, 2, 3, 4];
let strings: string[] = ["apple", "banana", "cherry"];

// Tuple type
let personTuple: [string, number] = ["Alice", 30];

// Accessing tuple elements
let name_1 = personTuple[0]; // "Alice"
let age_ = personTuple[1]; // 30

// Define an interface
interface Person_ {
    name: string;
    age: number;
    isEmployed?: boolean; // Optional property
}

// Use the interface to type an object
const person_1: Person_ = {
    name: "Alice",
    age: 30,
};

// Optional property can be omitted
const anotherPerson: Person_ = {
    name: "Bob",
    age: 25,
    isEmployed: true
};

// Extending an interface
interface Employee extends Person_ {
    employeeId: number;
}

const employee: Employee = {
    name: "Charlie",
    age: 40,
    employeeId: 12345
};

// Define a type alias
type Person = {
    name: string;
    age: number;
    isEmployed?: boolean; // Optional property
};

// Use the type alias to type an object
const personAlias: Person = {
    name: "Alice",
    age: 30,
};

// Optional property can be omitted
const anotherPersonAlias: Person = {
    name: "Bob",
    age: 25,
    isEmployed: true
};

// Intersection types
type EmployeeAlias = Person & {
    employeeId: number;
};

const employeeAlias: EmployeeAlias = {
    name: "Charlie",
    age: 40,
    employeeId: 12345
};

enum Direction {
    Up1,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

let direction_: Direction = Direction.Up1;

console.log(direction_); // Outputs: 0
console.log(Direction[0]); // Outputs: "Up"

// Example of Numeric enums

enum Direction_ {
    Up_,    // 0
    Down_,  // 1
    Left_,  // 2
    Right_  // 3
}

let direction: Direction_ = Direction_.Up_;

console.log(direction); // Outputs: 0
console.log(Direction[0]); // Outputs: "Up"


function greet_(name: string): string {
    return `Hello, ${name}!`;
}

let greeting_ = greet("Alice");
console.log(greeting); // Outputs: Hello, Alice!
