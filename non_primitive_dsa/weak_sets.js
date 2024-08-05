// Create a WeakSet
const weakSet = new WeakSet();

// Create some objects
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 3 };

// Add objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

// Check if objects are in the WeakSet
console.log('Has obj1:', weakSet.has(obj1)); // Output: true
console.log('Has obj2:', weakSet.has(obj2)); // Output: true
console.log('Has obj3:', weakSet.has(obj3)); // Output: false

// Remove obj1 from the WeakSet
weakSet.delete(obj1);
console.log('Has obj1 after deletion:', weakSet.has(obj1)); // Output: false

// Use case: Tracking objects with weak references
class Cache {
  constructor() {
    this.cache = new WeakSet();
  }

  add(object) {
    this.cache.add(object);
  }

  has(object) {
    return this.cache.has(object);
  }
}

const cache = new Cache();
const cachedItem = { data: 'important data' };

cache.add(cachedItem);
console.log('Cache has item:', cache.has(cachedItem)); // Output: true

// If cachedItem is no longer referenced elsewhere, it will be garbage collected
