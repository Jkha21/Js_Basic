class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Insert at the end of the list
    append(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  
    // Insert at the beginning of the list
    prepend(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }
  
    // Delete a node by value
    delete(value) {
      let current = this.head;
  
      while (current !== null) {
        if (current.value === value) {
          if (current.prev) {
            current.prev.next = current.next;
          } else {
            this.head = current.next; // Node to delete is the head
          }
  
          if (current.next) {
            current.next.prev = current.prev;
          } else {
            this.tail = current.prev; // Node to delete is the tail
          }
          return;
        }
        current = current.next;
      }
    }
  
    // Traverse the list forward
    traverseForward() {
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }
  
    // Traverse the list backward
    traverseBackward() {
      let current = this.tail;
      while (current !== null) {
        console.log(current.value);
        current = current.prev;
      }
    }
  }
  
    const list = new DoublyLinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.prepend(0);
    
    console.log("Forward traversal:");
    list.traverseForward();
    // Output:
    // 0
    // 1
    // 2
    // 3
    
    console.log("Backward traversal:");
    list.traverseBackward();
    // Output:
    // 3
    // 2
    // 1
    // 0
    
    list.delete(2);
    console.log("After deleting 2:");
    list.traverseForward();
    // Output:
    // 0
    // 1
    // 3
    
