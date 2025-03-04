console.log("Array")
let arr = [12, 32, 45, 78, 2, 44, 80, 33];
console.log(arr)


//  Bubble Sort 
console.log(" 1. Array sorted using  bubble sort")
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
            let result = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = result;
        }
    }
}

console.log(arr);


//  selection sort
 console.log(" 2. Array sorted using selection sort")
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i] > arr[j]){
            let c = arr[i];
            arr[i] = arr[j];
            arr[j] = c;
        }
    }   
}
console.log(arr);


// marge sort
console.log("3. Array sorted using marge sort")
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftside = arr.slice(0, mid);
    let rightside = arr.slice(mid);

    let Left = mergeSort(leftside);
    let Right = mergeSort(rightside);

    return merge(Left, Right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    result = result.concat(left.slice(i));
    result = result.concat(right.slice(j));

    return result;
}

let sortedArr = mergeSort(arr);
console.log(sortedArr);


//Queck sort 
console.log("5. Array sorted using Queck sort");
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quicksort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quicksort(arr, low, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, high);
    }
}

quicksort(arr);
console.log( arr);