function greet(greeting, name) {
    console.log(`${greeting}, ${name}! My name is ${this.name}.`);
  }
  
  const person = { name: 'Alice' };
  
  greet.call(person, 'Hello', 'Bob'); 
  // Outputs: 'Hello, Bob! My name is Alice.'

// call method 


function greet(greeting, name) {
    console.log(`${greeting}, ${name}! My name is ${this.name}.`);
  }
  
  const person_1 = { name: 'Alice' };
  
  greet.apply(person_1, ['Hello', 'Bob']);
  // Outputs: 'Hello, Bob! My name is Alice.'

// Apply method

function greet(greeting, name) {
    console.log(`${greeting}, ${name}! My name is ${this.name}.`);
  }
  
  const person_2 = { name: 'Alice' };
  
  const greetPerson = greet.bind(person_2, 'Hello');
  greetPerson('Bob'); 
  // Outputs: 'Hello, Bob! My name is Alice.'


// Bind Method

