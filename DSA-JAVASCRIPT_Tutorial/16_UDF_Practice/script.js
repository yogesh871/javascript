//  Arrow Function

// Example 1.
let add = (a, b) => a + b;
console.log(add(18, 2));

let sub = (a, b) => a - b;
console.log(sub(18, 2));

let multi = (a, b) => a * b;
console.log(multi(18, 2));

let divi = (a, b) => a / b;
console.log(divi(18, 2));

let hello = () => console.log("Arrow function called...")
hello();

let sum = ( x, y, z = 30 ) => {
    console.log( x + " " + y + " " + z);
}

sum( 10, 20 );


//  Nested Function :

//  Example 1.
function  a(x){
    function b(y){
        return x * y;
    }
    return b;
}
console.log(a(3)(4));

//  Example 2.
let pet = function (name) {
    let  getname = function ()  {
         return name;
    }
    return getname;
}
let  mypet =  pet("Rahul");

console.log(mypet());


// practice of four way of function 

//  No Argument No Return

function addition (){
    let a = 12, b = 20
    console.log("Addition of a and b is :", a + b)
}
addition();

//  No Argument With Return
