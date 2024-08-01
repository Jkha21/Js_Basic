const { reject } = require("assert");
const { error } = require("console");
const { resolve } = require("path");

Promise.resolve('Success').then(result => {
    console.log(result);
})

// Created a promise that is resolved with the given value

Promise.reject('Error occurred').catch(error => {
    console.log(error);
})

// Created a Promise that is rejected with the given reason.

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
Promise.all([p1, p2, p3]).then(results => {
    console.log(results);
    }).catch(error => {
        console.log(error);
    });

// Promise.all iterable 

const p1_ = Promise.resolve(1);
const p2_ = Promise.reject('Error');
const p3_ = Promise.resolve(3);

Promise.allSettled([p1, p2, p3]).then(results => {
    console.log(results);
})

/*
    Outputs:
    [
      { status: 'fulfilled', value: 1 },
      { status: 'rejected', reason: 'Error' },
      { status: 'fulfilled', value: 3 }
    ]
*/

// Promise.allSettled iterable

const a1 = Promise.reject('Error 1');
const a2 = Promise.reject('Error 2');
const a3 = Promise.resolve('Success');

Promise.any([a1, a2, a3]).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

// Promise.any iterable 

const b1 = new Promise((resolve, reject) =>
    setTimeout(resolve, 500, 'First')
)

const b2 = new Promise((resolve, reject) => 
    setTimeout(resolve, 100, 'Second')
);

Promise.race([b1, b2]).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})

// Promise.race iterable

const c = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done'), 1000);
});

c.then(result => {
    console.log(result); // Outputs: 'Done'
}).catch(error => {
    console.log(error);
});

// Promise.prototype.then(onFulfilled, onRejected)


const d = new Promise((resolve, reject) => {
    setTimeout(() => reject('Failed'), 1000);
}) ;

d.catch(error => {
    console.log(error);
});

// Promise.prototype.catch(onRejected)

const e = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Completed'), 1000);
});

e.finally(() => {
    console.log('Promise is settled');
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});


// Promise.prototype.finally(onFinally)