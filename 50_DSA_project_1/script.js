console.log("1. WAP for array data sorting descending order using selection sort.")

let arr = [2, 43, 54, 12, 34, 65, 88]
console.log("before array")
console.log(arr)

for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i] < arr[j]){
            let c = arr[i];
            arr[i] = arr[j];
            arr[j] = c;
        }
    }   
}
console.log("After array")
console.log(arr)
// output = [88, 65, 54, 43, 34, 12,  2]  


console.log(" 2. WAP for array data sorting ascending order using Merge sort.")
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

// output = [ 2, 12, 34, 43, 54, 65, 88 ]



console.log("3. WAP for 2-D array print and also print it's square array.")
let a  = [

    [12, 14, 16],
    [34, 36, 38],
    [7, 2, 9]
]

console.log("Normal 2D array")
for (let i = 0; i < a.length; i++) {
      let result = " "
      for (let j = 0; j < a.length; j++) {
        result += a[i][j] + "  "
      }
    console.log(result)
}

//   output -  12 14 16
//             34 36 38
//             7  2  9
   
console.log("Normal 2D array with square")
for (let i = 0; i < a.length; i++) {
      let result = " "
      for (let j = 0; j < a.length; j++) {
        result += a[i][j]*a[i][j] + "  "
      }
    console.log(result)
}

// output =  144   196   256
//           1156  1296  1444
//           49    4     81


console.log(" 4. WAP for array operations (like push and pop, slice) without its method")

let b = [1, 2, 3 ]

console.log("Push Method")
 function add (b,n) {
   b[b.length] = n;
   return n;
 }
 add(b,11)
 add(b,15)
 console.log(b)
//  output = [1, 2, 3, 11, 15]


console.log("pop method")
function remove (){
    b.length = b.length - 1
}
remove(b)
console.log(b)
// output = [1, 2, 3, 11]

console.log("slice method");

function view(b, start, end) {
    let views = "";
    for (let i = 0; i < b.length; i++) {
        if (b[i] >= start && b[i] <= end) {
            views += b[i] + " ";
        }
    }
    console.log(views);
}
view(b, 2, 4);
// output = [ 2, 3] 

 


