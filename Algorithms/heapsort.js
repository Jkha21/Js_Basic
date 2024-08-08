// Heap Sort 

function heapsort(arr){
    let len = arr.length;

    function heapify(arr, length, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < length && arr[left] > arr[largest]) largest = left;
        if (right < length && arr[right] > arr[largest]) largest = right;

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, length, largest);
        }
    }

    for (let i = Math.floor(len/2); i >= 0; i--) {
        heapify(arr, len, i);
    }

    for (let i = len - 1; i > 0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

console.log(heapsort([9, 8, 6, 3, 14, 4]))