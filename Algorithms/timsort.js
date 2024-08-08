function insertionSort(arr, left, right) {
    for (let i = left + 1; i <= right; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= left && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

function merge(arr, l, m, r) {
    let len1 = m - l + 1;
    let len2 = r - m;

    let left = new Array(len1);
    let right = new Array(len2);

    for (let i = 0; i < len1; i++) left[i] = arr[l + i];
    for (let j = 0; j < len2; j++) right[j] = arr[m + 1 + j];

    let i = 0, j = 0, k = l;

    while (i < len1 && j < len2) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }

    while (i < len1) arr[k++] = left[i++];
    while (j < len2) arr[k++] = right[j++];
}

function timSort(arr) {
    let n = arr.length;
    let run = 32;

    for (let i = 0; i < n; i += run) {
        insertionSort(arr, i, Math.min(i + run - 1, n - 1));
    }

    for (let size = run; size < n; size *= 2) {
        for (let left = 0; left < n; left += 2 * size) {
            let mid = Math.min(left + size - 1, n - 1);
            let right = Math.min(left + 2 * size - 1, n - 1);
            if (mid < right) merge(arr, left, mid, right);
        }
    }
}

// Example usage:
let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
timSort(arr);
console.log(arr);
