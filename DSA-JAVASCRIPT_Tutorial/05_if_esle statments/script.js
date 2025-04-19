  
// 1.  Enter two value find smallest.
console.log("1. Enter two value find smallest")

let x, y;
x = 12;
y = 6;

if(x < y ){
    console.log("x value minimum : ", x)
}
else{
    console.log("y value minimum :", y)
}


// 2. Enter one value find its positive or negative.
console.log("2. Enter one value find its positive or negative")

let z;

z = -12;

if( 0 < z){
    console.log(" value is positive :", z)
}
else{
    console.log("value is negative; ", z)
}

// 3. Enter one value find its divisible by 5 or not.
console.log("3. Enter one value find its divisible by 5 or not")

let num = 18;

if(num % 5 == 0){
    console.log("value is divisible by 5")
}
else{
    console.log("value is not divisible by 5 ")
}

//4. Enter one value find its divisible by 5 and 3 or not
console.log("4. Enter one value find its divisible by 5 and 3 or not")

let d = 15;

if((d %3 == 0 ) && (d %5 == 0)){
    console.log("value is divisible by 5 and 3")
}
else{
    console.log("value is not  divisible by 5 and 3")
}

// 5. Enter Students marks wheather pass or not.
console.log("5. Enter Students marks wheather pass or not")

let  mark = 78; 

if(mark > 33){
    console.log("student is pass :", mark)
}
else{
    console.log("student is fail :", mark)
}


// 6. Enter year find its leap year or not
console.log("6. Enter year find its leap year or not")

let year = 2024;

if(year % 4 == 0){
    console.log(" this year will be leap year :", year)
}
else{
    console.log("this year will be not leap year :", year)
}


// 7. Enter a, b, c find largest among them
console.log("7. Enter a, b, c find largest among them")
let a , b, c;

a = 10;
b = 4;
c = 6;

if(a > b){
     if(a > c){
        console.log("a value is maximum:" ,a)
     }
     else{
        console.log("c value is maximum: ",c)
     }
}
else{
    if(b > c){
        console.log("b value is maximum:", b)
    }
    else{
        console.log("c value is maximum:", c)
    }
}