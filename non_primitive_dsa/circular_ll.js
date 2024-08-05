class CircularLinkedList {
    constructor() {
        this.head = null; // Pointer to the first node
        this.tail = null; // Pointer to the last node
        this.size = 0;    // Number of nodes in the list
    }

    // Add a new node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            // If the list is empty, initialize head and tail
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head; // Point the tail to head
        } else {
            // Otherwise, append to the end and update tail
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head; // Maintain circular link
        }
        this.size++;
    }

    // Remove the first node with the given data
    remove(data) {
        if (!this.head) return; // Empty list

        let current = this.head;
        let previous = null;
        do {
            if (current.data === data) {
                if (current === this.head) {
                    // Removing head
                    this.head = this.head.next;
                    this.tail.next = this.head; // Update tail's next
                    if (this.head === this.tail) this.tail = null; // List is empty
                } else {
                    // Removing node other than head
                    previous.next = current.next;
                    if (current === this.tail) this.tail = previous; // Update tail
                }
                this.size--;
                return;
            }
            previous = current;
            current = current.next;

            
        } while (current !== this.head);
    }

    // Print all nodes in the list
    print() {
        if (!this.head) return 'List is empty';

        let current = this.head;
        let result = '';
        do {
            result += `${current.data} -> `;
            current = current.next;
        } while (current !== this.head);

        return result + '(head)';
    }

    // Search for a node with specific data
    search(data) {
        if (!this.head) return false;

        let current = this.head;
        do {
            if (current.data === data) return true;
            current = current.next;
        } while (current !== this.head);

        return false;
    }
}


const list = new CircularLinkedList();

// Adding nodes
list.append(1);
list.append(2);
list.append(3);

console.log(list.print()); // Output: "1 -> 2 -> 3 -> (head)"

// Searching for a node
console.log(list.search(2)); // Output: true
console.log(list.search(4)); // Output: false

// Removing a node
list.remove(2);
console.log(list.print()); // Output: "1 -> 3 -> (head)"

// Removing the remaining nodes
list.remove(1);
list.remove(3);
console.log(list.print()); // Output: "List is empty"
