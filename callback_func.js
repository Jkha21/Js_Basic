// Uses of Callback Functions

setTimeout(function() {
    console.log('Delayed message');
}, 1000);

//Asynchronous Functions

document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button clicked');
});

// Event Handling 


let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num * 2);
});

// Iterating Arrays

function fetchData(callback) {
    // Simulate fetching data from a server
    setTimeout(function() {
        let data = { name: 'Alice', age: 30 };
        callback(data);
    }, 2000);
}

fetchData(function(data) {
    console.log('Data received:', data);
});


// Callback in Functions 

function readFile(path, callback) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
}

readFile('example.txt', function(err, data) {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
});

// Error Handling 

