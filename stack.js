class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return 'Stack is empty';
      }
      return this.items.pop();
    }
  
    // Peek at the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return 'Stack is empty';
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }

    contains(element) {
        return this.items.includes(element);
    }
      
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  console.log(stack.peek()); // Output: 2
  console.log(stack.pop());  // Output: 2
  console.log(stack.peek()); // Output: 1
  console.log(stack.size()); // Output: 1
  stack.clear();
  console.log(stack.isEmpty()); // Output: true
  console.log(stack.contains(1)); // Output: true
  console.log(stack.contains(3)); // Output: false


  