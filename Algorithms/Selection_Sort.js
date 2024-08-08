function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([3, 2, 4, 5, 1, 7, 0]));