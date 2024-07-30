//ES6 (ECMAScript 2015)

let x = 1, y = 2;
let obj = { x, y }; // Equivalent to { x: x, y: y }

// Property Shorthand

let obj_1 = {
    greet() {
      console.log('Hello');
    }
  };

// Method Defintion 


let propName = 'foo';
let obj_2 = {
  [propName]: 'bar'
}; // Equivalent to { foo: 'bar' }

//Computed Property Names

let { a, b } = { a: 1, b: 2 };

// Object Destructuring

let target = { a: 1 };
let source = { b: 2 };
Object.assign(target, source); // target is now { a: 1, b: 2 }

// Object.assign()

let sym = Symbol('description');
let obj_3 = {
  [sym]: 'value'
};

// Symbols

// ES7 (ECMAScript 2016)


let obj_4 = { a: 1, b: 2 };
Object.values(obj_4); // [1, 2]

// Object.values()

let obj_5 = { a: 1, b: 2 };
Object.entries(obj_5); // [['a', 1], ['b', 2]]

// Object.entries()


// ES8 (ECMAScript 2017)

let obj_6 = { a: 1 };
Object.getOwnPropertyDescriptors(obj_6); // { a: { value: 1, writable: true, enumerable: true, configurable: true } }

// Object.getOwnPropertyDescriptors()

let obj_7 = {};
Object.defineProperty(obj_7, 'a', {
  value: 1,
  writable: false,
  enumerable: true,
  configurable: true
});

// Object.defineProperty() and Object.defineProperties()

// ES9 (ECMAScript 2018)

async function processData() {
    const asyncIterable = {
      async *[Symbol.asyncIterator]() {
        yield 'a';
        yield 'b';
        yield 'c';
      }
    };
  
    for await (const item of asyncIterable) {
      console.log(item); // 'a', 'b', 'c'
    }
  }
  processData();
  
// Asynchronous Iteration

const obj_8 = { a_: 1, b: 2, c: 3 };
const { a_, ...rest } = obj;
console.log(a_);   // 1
console.log(rest); // { b: 2, c: 3 }

const obj_9 = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 };
console.log(newObj); // { a: 1, b: 2, c: 3 }

// Rest/Spread Properties for Objects

fetch('https://api.example.com')
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .finally(() => console.log('Request completed'));

// Promise.prototype.finally()



