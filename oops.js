function makeCounter() {
    let count = 0; // `count` is a local variable in the `makeCounter` scope
    return function() {
      count += 1; // The returned function has access to `count`
      return count;
    };
  }
  
  const counter = makeCounter(); // `counter` is now a closure
  console.log(counter()); // Outputs: 1
  console.log(counter()); // Outputs: 2
  console.log(counter()); // Outputs: 3

// Give closure example

function createPerson(name) {
    let age = 0; // `age` is private to `createPerson`
    
    return {
      getName: function() {
        return name;
      },
      getAge: function() {
        return age;
      },
      setAge: function(newAge) {
        if (newAge >= 0) {
          age = newAge;
        }
      }
    };
  }
  
  const person = createPerson('Alice');
  console.log(person.getName()); // Outputs: Alice
  console.log(person.getAge()); // Outputs: 0
  
  person.setAge(30);
  console.log(person.getAge()); // Outputs: 30

// Create private variables using Closure 

function multiplyBy(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const double = multiplyBy(2); // `factor` is 2
  const triple = multiplyBy(3); // `factor` is 3
  
  console.log(double(5)); // Outputs: 10
  console.log(triple(5)); // Outputs: 15

  // Create a Function Factories using Closure 

  