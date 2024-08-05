// Creating Objects

// 1. Object Literal
const personLiteral = {
    name: 'Alice',
    age: 30,
    greet: function() {
      console.log('Hello from Object Literal!');
    }
  };
  
  // 2. Using new Object()
  const personNewObject = new Object();
  personNewObject.name = 'Bob';
  personNewObject.age = 25;
  personNewObject.greet = function() {
    console.log('Hello from new Object()!');
  };
  
  // 3. Using Constructor Function
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log('Hello from Constructor Function!');
    };
  }
  const personConstructor = new Person('Charlie', 40);
  
  // 4. Using Object.create()
  const proto = {
    greet: function() {
      console.log('Hello from Object.create()!');
    }
  };
  const personCreate = Object.create(proto);
  personCreate.name = 'Diana';
  personCreate.age = 35;
  
  // Object Methods
  
  // 1. Object.keys()
  console.log('Object.keys():', Object.keys(personLiteral)); // ['name', 'age', 'greet']
  
  // 2. Object.values()
  console.log('Object.values():', Object.values(personLiteral)); // ['Alice', 30, [Function: greet]]
  
  // 3. Object.entries()
  console.log('Object.entries():', Object.entries(personLiteral)); // [['name', 'Alice'], ['age', 30], ['greet', [Function: greet]]]
  
  // 4. Object.assign()
  const target = { a: 1 };
  const source = { b: 2, c: 3 };
  Object.assign(target, source);
  console.log('Object.assign():', target); // { a: 1, b: 2, c: 3 }
  
  // 5. Object.freeze()
  const personFreeze = Object.freeze({ name: 'Edward' });
  personFreeze.name = 'Fiona'; // No change
  console.log('Object.freeze():', personFreeze.name); // 'Edward'
  
  // 6. Object.seal()
  const personSeal = Object.seal({ name: 'Gina' });
  personSeal.name = 'Hannah'; // Change allowed
  console.log('Object.seal():', personSeal.name); // 'Hannah'
  
  // 7. Object.hasOwn()
  console.log('Object.hasOwn():', personLiteral.hasOwn('name')); // true
  
  // 8. Object.getPrototypeOf()
  console.log('Object.getPrototypeOf():', Object.getPrototypeOf(personCreate)); // { greet: [Function: greet] }
  
  // 9. Object.setPrototypeOf()
  const newProto = { sayGoodbye: () => console.log('Goodbye!') };
  Object.setPrototypeOf(personCreate, newProto);
  personCreate.sayGoodbye(); // 'Goodbye!'
  
  // 10. Object.create()
  const newPerson = Object.create(null); // Creates an object without a prototype
  newPerson.customProperty = 'Custom Value';
  console.log('Object.create(null):', newPerson.customProperty); // 'Custom Value'
  
  // 11. Object.defineProperty()
  const personDefine = {};
  Object.defineProperty(personDefine, 'name', {
    value: 'Ivy',
    writable: false,
    configurable: true
  });
  console.log('Object.defineProperty():', personDefine.name); // 'Ivy'
  
  // 12. Object.defineProperties()
  const personDefineMultiple = {};
  Object.defineProperties(personDefineMultiple, {
    'name': {
      value: 'Jack',
      writable: false
    },
    'age': {
      value: 45,
      writable: true
    }
  });
  console.log('Object.defineProperties():', personDefineMultiple); // { name: 'Jack', age: 45 }
  
  // 13. Object.getOwnPropertyDescriptor()
  console.log('Object.getOwnPropertyDescriptor():', Object.getOwnPropertyDescriptor(personDefineMultiple, 'name'));
  // { value: 'Jack', writable: false, enumerable: false, configurable: false }
  
  // 14. Object.getOwnPropertyDescriptors()
  console.log('Object.getOwnPropertyDescriptors():', Object.getOwnPropertyDescriptors(personDefineMultiple));
  // { name: { value: 'Jack', writable: false, enumerable: false, configurable: false },
  //   age: { value: 45, writable: true, enumerable: false, configurable: false } }
  
  // 15. Object.is()
  console.log('Object.is():', Object.is('foo', 'foo')); // true
  console.log('Object.is():', Object.is('foo', 'bar')); // false
  
  // 16. Object.isSealed()
  console.log('Object.isSealed():', Object.isSealed(personSeal)); // true
  
  // 17. Object.isFrozen()
  console.log('Object.isFrozen():', Object.isFrozen(personFreeze)); // true
  
  // 18. Object.isExtensible()
  console.log('Object.isExtensible():', Object.isExtensible(personLiteral)); // true
  