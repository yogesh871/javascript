//  Lower Bounds 

let arr = [1, 2, 4, 6, 6, 6, 6, 7, 9]

function lower(arr, target) {
    let low = 0;
    let high = arr.length - 1; 

    while(low <= high){
        let mid = Math.floor((low + high) /2)
        if(arr[mid] >= target){
            high =  mid - 1
        }
        else{
            low = mid + 1
        }
    }
    return low;
}
console.log("Lower Bounds is : " , lower(arr, 6))

// Upper Bounds
function upper(arr, target) {
    let low = 0;
    let high = arr.length - 1; 

    while(low <= high){
        let mid = Math.floor((low + high) /2)
        if(arr[mid] > target){
            high =  mid - 1
        }
        else{
            low = mid + 1
        }
    }
    return low;
}
console.log("Upper Bounds is : " , upper(arr, 6))


let a = lower(arr, 6)
let b = upper(arr, 6)


//  OccurNumber 
function number() {
    console.log("Total number repited as :", b - a, "times")
}

 number()



