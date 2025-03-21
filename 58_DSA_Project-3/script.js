console.log("Question No. 01 Write a program to implement binary search to find the index of a target element in a sorted array")

function BinarySerch(arr, target) {
    let left = 0;
    let right =  arr.length -1;
    
    while(left <= right) {
        let mid = Math.floor((left + right ) / 2)

           if(arr[mid] == target){
            return mid
           }
           else if (arr[mid] < target){
            left =  mid + 1
    }
           else {
            right = mid - 1 
           }
    }

    return -1
}

let arr  = [12, 13, 15, 63, 74, 88]
console.log(BinarySerch(arr, 74))

// output =  index 4


console.log("Question No.02 write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences")

function lower(data, target){

    let low = 0;
    let high =  data.length - 1; 

    while(low <= high){
        let mid =  Math.floor((low + high) / 2)
        if(data[mid] >= target ){
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }

    return low
}


function upper(data, target) {

    let low = 0;
    let high =  data.length - 1; 

    while(low < high){
        let mid =  Math.floor((low + high) / 2)
        if( data[mid] > target ){
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }

    return low
}

let data = [4, 5, 5, 7, 7, 7, 7, 8, 11]
let lowerBound = lower(data,7)
console.log("Lower Bound is :" , lowerBound)
let upperBound = upper(data,7)
console.log("Upper bound is :" , upperBound)

function Numoccurrence (lowerBound, upperBound) {
    console.log("Number of occurrence :" , (upperBound - lowerBound))
}
Numoccurrence(lowerBound, upperBound)

// output =  Lower Bound =  3
// output =  Upper Bound =  7
// output =  Number of occurrence = 4


console.log("Question No .03  Write a program to find the pivot index where the rotation occurs in a rotated sorted array.")

function rotated(num) {
    let left = 0;
    let right = num.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (num[mid] > num[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

let num = [3, 4, 5, 6, 1, 2];
console.log(rotated(num));


// output =  index 4


