class BinarySearch {
    constructor(array) {
        this.array = array;
    }

    // Binary search method
    search(target) {
        let left = 0;
        let right = this.array.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (this.array[mid] === target) {
                return mid; // Target found at index mid
            }
            if (this.array[mid] < target) {
                left = mid + 1; // Narrow search to the right half
            } else {
                right = mid - 1; // Narrow search to the left half
            }
        }

        return -1; // Target not found
    }
}

// Example usage:
try {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const binarySearch = new BinarySearch(sortedArray);

    const index = binarySearch.search(5);
    if (index !== -1) {
        console.log(`Element found at index ${index}`);
    } else {
        console.log('Element not found');
    }
} catch (error) {
    console.error(error.message);
}
