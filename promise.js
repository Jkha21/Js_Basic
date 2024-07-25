const fetchData = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Data fetched successfully');
        } else {
            reject('Error fetching data');
        }
    }, 1000); // Simulating a delay of 1 second
});

// Creating a Promise

fetchData
    .then((data) => {
        console.log(data); // Output: "Data fetched successfully"
    })
    .catch((error) => {
        console.error(error); // Output: "Error fetching data"
    });

// Consuming a Promise

fetchData
    .then((data) => {
        return processData(data); // Returns another promise
    })
    .then((processedData) => {
        console.log('Processed data:', processedData);
        return updateDatabase(processedData); // Returns another promise
    })
    .then(() => {
        console.log('Database updated successfully');
    })
    .catch((error) => {
        console.error('Error:', error);
    });

//  Chaining a Promise

const promise1 = fetch('/api/data1');
const promise2 = fetch('/api/data2');

Promise.all([promise1, promise2])
    .then((responses) => {
        // Both promises resolved successfully
        const [response1, response2] = responses;
        console.log('Data 1:', response1);
        console.log('Data 2:', response2);
    })
    .catch((error) => {
        // One or more promises rejected
        console.error('Error:', error);
    });

//  Using Promise.all()