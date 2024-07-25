
let name  = "World";
function greet(name) {
    return `Hello, ${name}!`;
}
 // Named Functions


 let greet = function(name) {
    return `Hello, ${name}!`;
};

// Anonymous functions 


let greet = (name) => {
    return `Hello, ${name}!`;
};

// Arrow Functions 


(function() {
    let name = "Hello";
    console.log(`Hello, ${name}`);
})();

//  Immediately Invoked Function Expression (IIFE)

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = generateSequence();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3

// Generator Functions 

