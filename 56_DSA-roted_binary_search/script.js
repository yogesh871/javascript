<<<<<<< HEAD
// sorted and roted => Binary Searching


function rotedSeach(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        let mid =  Math.floor((low + high) / 2);

        if(arr[mid] == target) {
            return mid;
        }

        if(arr[low] <= arr[mid]) {
            if(arr[low] <= target && target < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if(arr[mid] < target && target <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}

let arr = [4, 5, 6, 7, 8, 1, 2, 3];

console.log(rotedSeach(arr, 2)); 
=======
// sorted and roted => Binary Searching


function rotedSeach(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        let mid =  Math.floor((low + high) / 2);

        if(arr[mid] == target) {
            return mid;
        }

        if(arr[low] <= arr[mid]) {
            if(arr[low] <= target && target < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if(arr[mid] < target && target <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}

let arr = [4, 5, 6, 7, 8, 1, 2, 3];

console.log(rotedSeach(arr, 2)); 
>>>>>>> 908c77e02cb1f142f92dd8f526ad377acc3da395
