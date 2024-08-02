class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new node at the end
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Print all nodes
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Delete a node by value
    deleteValue(value) {
        if (!this.head) return;

        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    // Find a node by value
    find(value) {
        let current = this.head;
        while (current) {
            if (current.data === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.printList(); // Output: 1 2 3

list.deleteValue(2);
list.printList(); // Output: 1 3

const foundNode = list.find(3);
console.log(foundNode ? foundNode.data : 'Not found'); // Output: 3
