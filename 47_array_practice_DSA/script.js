// 1. Find A Maximum Number In Array : 

let arr = [12, 34, 65, 78, 2, 32, 99, 54]

function Maxvalue() {

    let max =  [0]    
    for(let i = 0; i < arr.length ; i++ ){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

let value  =  Maxvalue(arr)
console.log("Maximum value in array is: " ,value)


// 2. remove same element in array: 
let a =  [1, 2, 3, 4, 5, 6, 6, 4, 4, 8, 9]

function remove (){
   let  same = []
    for(let i=0; i<a.length; i++){
        if(!same.includes(a[i])){
            same.push(a[i])
        }
    }
    return same
}

let result =  remove(a)
console.log(result)


// 3. revers order  array
let b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function Revers() {
    let newRevers = [];
    for (let i = b.length - 1; i >= 0; i--) {
        newRevers.push(b[i]);
    }
    return newRevers;
}

let res = Revers();
console.log(res);


// 4. count search element (linear search)

function countarr(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

const num  = [1, 2, 3, 4, 2, 5, 2, 6, 2, 5];
const target = 5;
console.log(`The number ${target} appears ${countarr(num , target)} times.`);
