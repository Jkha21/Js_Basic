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



class BankAccount {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log('Deposit amount must be positive.');
    }
  }

  // Public method to withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log('Invalid withdrawal amount.');
    }
  }

  // Public method to check balance
  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);  // Deposited 50. New balance: 150
myAccount.withdraw(20); // Withdrew 20. New balance: 130
console.log(myAccount.getBalance()); // 130
// console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

// Encapsulation Using Priavte variables 

class Animal {
  speak() {
    console.log('The animal makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log('The dog barks.');
  }
}

class Cat extends Animal {
  speak() {
    console.log('The cat meows.');
  }
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => {
  animal.speak(); // Output will vary based on the object's class
});

// Polymorphism 

class Car {
  #engine; // Private field

  constructor(engine) {
    this.#engine = engine;
  }

  start() {
    this.#engine.start();
    console.log('Car has started.');
  }

  stop() {
    this.#engine.stop();
    console.log('Car has stopped.');
  }
}

class Engine {
  start() {
    console.log('Engine started.');
  }

  stop() {
    console.log('Engine stopped.');
  }
}

const engine = new Engine();
const car = new Car(engine);

car.start(); // Output: Engine started. Car has started.
car.stop();  // Output: Engine stopped. Car has stopped.

// Abstraction 

