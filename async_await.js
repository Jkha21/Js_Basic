async function fetchData() {
    // Simulate fetching data from an API
    return new Promise((resolve) => {
      setTimeout(() => resolve('Data fetched!'), 2000);
    });
  }
  
  async function processData() {
    console.log('Fetching data...');
    const result = await fetchData();
    console.log(result); // Output: Data fetched!
  }
  
  processData();

  // Basic Example 


  async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Failed to fetch data')), 2000);
    });
  }
  
  async function processData() {
    try {
      const result = await fetchData();
      console.log(result); // This line will not be reached
    } catch (error) {
      console.error(error.message); // Output: Failed to fetch data
    }
  }
  
  processData();

// Error Handling

async function getUser() {
    return { id: 1, username: 'john_doe' };
  }
  
  async function displayUser() {
    const user = await getUser();
    console.log(`User ID: ${user.id}, Username: ${user.username}`); // Output: User ID: 1, Username: john_doe
  }
  
  displayUser();

// Async Function Returning Value

async function step1() {
    console.log('Step 1');
    return 'Result from Step 1';
  }
  
  async function step2(input) {
    console.log('Step 2 with input:', input);
    return 'Result from Step 2';
  }
  
  async function executeSteps() {
    const result1 = await step1();
    const result2 = await step2(result1);
    console.log('Final results:', result1, result2);
  }
  
  executeSteps();
  
// Sequential Execution

async function fetchResource(resource) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Data from ${resource}`), 2000);
    });
  }
  
  async function parallelExecution() {
    const promise1 = fetchResource('Resource 1');
    const promise2 = fetchResource('Resource 2');
    
    const result1 = await promise1;
    const result2 = await promise2;
    
    console.log(result1); // Output after 2 seconds: Data from Resource 1
    console.log(result2); // Output after 2 seconds: Data from Resource 2
  }
  
  parallelExecution();

  // Parallel Execution 