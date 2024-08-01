const person = {
  name: 'Alice',
  age: 30,
  greet() {
    console.log('Hello!');
  }
};
person.greet(); // Outputs: Hello!

// Creating Object 

const person_1 = new Object();
person_1.name = 'Alice';
person_1.age = 30;
person_1.greet = function() {
  console.log('Hello!');
};
person_1.greet(); // Outputs: Hello!

// Creating new Instance of Object using new Object() method.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const alice = new Person('Alice', 30);
alice.greet(); // Outputs: Hello, my name is Alice

// Class prototype


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Outputs: Rex barks.

// Inheritance Feature 





