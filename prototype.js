// Constructor function
function Person(name) {
    this.name = name;
}

// Adding a method to the prototype
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Creating an instance
const john = new Person('John');
john.sayHello(); // Output: Hello, my name is John

// Accessing the prototype property directly
console.log(john.__proto__ === Person.prototype); // Output: true

// Example of use of Prototype

function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(`${this.name} is eating`);
};

function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor
    this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.name} is barking`);
};

const myDog = new Dog('Rex', 'Labrador');
myDog.eat();  // Output: Rex is eating
myDog.bark(); // Output: Rex is barking

// Inheritance 

function Car(model) {
    this.model = model;
}

Car.prototype.start = function() {
    console.log(`${this.model} is starting`);
};

const car1 = new Car('Toyota');
const car2 = new Car('Honda');

console.log(car1.start === car2.start); // Output: true (same method is shared)

// Method Sharing

// Adding a method to the Array prototype
Array.prototype.first = function() {
    return this[0];
};

const arr = [1, 2, 3];
console.log(arr.first()); // Output: 1

// Adding Methods to Built-in Objects

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking`);
    }
}

const dog = new Dog('Buddy');
dog.eat();  // Output: Buddy is eating
dog.bark(); // Output: Buddy is barking

// Prototype Inheritance in ES6 Classes