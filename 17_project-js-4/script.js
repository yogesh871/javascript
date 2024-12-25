//  Question  no. 01
console.log("Question no. 01");
function message() {
    console.log("good morning:")
}
message()

// output 
// good morning 


//  Question  no. 02
console.log("Question no. 02")
    function area(pi, r){
          return   pi*r*r;
    }
     console.log("area of circle is: ",area(3.14,5))

// output 
// pi = 3.14, r = 5
// area of circle is =  15.70


//  Question  no. 03
console.log("Question no. 03")
    function area(l, h){
          return   (l * h)/2;
    }
     console.log("area of triangle is: ",area(5,12))

// output 
// l = 5, h = 14
// area of triangle is =  60

//  Question  no. 04
console.log("Question no. 04")
    function area(l, h){
          return   l * h;
    }
     console.log("area of rectangle is: ",area(9,5))

     // output 
    // l = 9, h = 5
    // area of rectangle  is =  45

//  Question  no. 05
console.log("Question no. 05")
    function result(a,b,c){
        let answer;
          answer =  ((b*b)*(4*a*c))/(2*a);
          return answer;
    }
     let answer = result(5,8,2);
     console.log("The result is:", answer);

    // output 
    // a = 5, b = 8, c = 2
    // The result is =  256

//  Question  no. 06
console.log("Question no. 06")
   function result2 (a, b, c,){
    let answer2;
    answer2 = (a*a)+(2*a*b)+(b*b);
    return answer2;
   }
   let answer2 = result2(5,8,2);
   console.log("The result is:", answer2);

   
    // output 
    // a = 5, b = 8, c = 2
    // The result is =  169


//  Question  no. 07
console.log("Question no. 07")
function celsius (f){
    return (f-32)/1.8
}
console.log("Fahrenheit to celsius : ", celsius(73))

    // output 
    // Fahrenheit = 73
    // Fahrenheit to celsius =  22.77


// Question no. 08
console.log("Question no. 08")
function  Fahrenheit(c) {
    return (c*1.8)+32
}
console.log(" celsius to Fahrenheit : ", Fahrenheit(23))

    // output 
    // celsius = 23
    // celsius to Fahrenheit  =  73.4


// Question no.09
console.log("Question no. 09")
function number(num) {
    if(num % 2 === 0){
        console.log("number is even number: ")
    }
    else{
        console.log("number is odd number: ")
    }
}
number(6);

// output 
// num = 6
// number is even number

// Question no. 10
console.log("Question no. 10")
function swap (a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("Swaping value is:", a, b)
}
swap(5,6)

// output
//  a = 5, b = 6
//  Swaping value is a = 6, b = 5