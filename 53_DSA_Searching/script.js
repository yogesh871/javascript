<<<<<<< HEAD
//  Linear Serching 

let arr =  [11, 45, 32, 56, 23, 12, 76]

function Linearserch( arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] ==  elem){
            return  i;
        }
    }
    return -1
}
 console.log(Linearserch(arr, (12)))


// Binary Seaching 

let  a =  [13, 24, 25, 27, 47, 57, 64, 74, 99]

 function Binaryserch (a, elem){
    let left = 0;
    let right = a.length - 1;     

    let mid =  Math.floor((left + right) / 2) 

     while(left <= right) {
         if(a[mid] ==  elem){
          return mid
         } else if (a[mid] < elem){
            right = mid + 1;
         }
         else if (a[mid] > elem){
            left = mid - 1;
         }
     }

     return -1
 }
 console.log(Binaryserch(a,(47)))


//  Two pointer 

let array =  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function TwoPointer(array, target){
    let left =  0;
    let right  = array.length - 1

    result  = [];

    for(let i = 0; i< array.length; i++) {
        if((array[left] + array[right]) ==  target){
            result.push([left, right])
            right--
            left++
        }
        else if((array[left] + array[right]) > target){
            right--
        }
        else{
            left++
        }
    }
    return result
}

console.log(TwoPointer(array, (70)))
=======
//  Linear Serching 

let arr =  [11, 45, 32, 56, 23, 12, 76]

function Linearserch( arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] ==  elem){
            return  i;
        }
    }
    return -1
}
 console.log(Linearserch(arr, (12)))


// Binary Seaching 

let  a =  [13, 24, 25, 27, 47, 57, 64, 74, 99]

 function Binaryserch (a, elem){
    let left = 0;
    let right = a.length - 1;     

    let mid =  Math.floor((left + right) / 2) 

     while(left <= right) {
         if(a[mid] ==  elem){
          return mid
         } else if (a[mid] < elem){
            right = mid + 1;
         }
         else if (a[mid] > elem){
            left = mid - 1;
         }
     }

     return -1
 }
 console.log(Binaryserch(a,(47)))


//  Two pointer 

let array =  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function TwoPointer(array, target){
    let left =  0;
    let right  = array.length - 1

    result  = [];

    for(let i = 0; i< array.length; i++) {
        if((array[left] + array[right]) ==  target){
            result.push([left, right])
            right--
            left++
        }
        else if((array[left] + array[right]) > target){
            right--
        }
        else{
            left++
        }
    }
    return result
}

console.log(TwoPointer(array, (70)))
>>>>>>> 908c77e02cb1f142f92dd8f526ad377acc3da395
