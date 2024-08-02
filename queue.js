class Queue {
    constructor() {
        this.items = [];
    }

    // Add an item to the back of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove an item from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Get the front item of the queue
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Print the queue
    print() {
        console.log(this.items.toString());
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // Output: 1
queue.print(); // Output: 1,2,3

queue.dequeue();
console.log(queue.peek()); // Output: 2
queue.print(); // Output: 2,3

console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false
