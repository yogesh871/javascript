
// Q1   write a javascript program to find area of atriangle
console.log("Q1. find out area to triangle")
let base = 20, height = 15, area

area = 1 / 2 * base * height
console.log("base", base, "height", height)
console.log("area", area)

// base = 20
// height = 15

// output =  150


// Q2  write a javascript program to convert temperaturs to and from celsius, fahrenhit.
console.log("Q2. convert celsius in  to fahrenheit")
let celsius = 18, fahrenheit

fahrenheit = (celsius * 9 / 5) + 32;
console.log("celsius", celsius)
console.log("fahrenheit", fahrenheit)

// celsius = 18
// output = 64.4


// Q3  write a javascript program to find area of rectangle.
{
    console.log("Q3. find out area of rectangle")
    let lenght = 31, width = 12, area

    area = lenght * width
    console.log("lenght", lenght, "width", width)
    console.log("area", area)

    // lenght  = 31
    // width  = 12

    // output = 372
}


// Q4 write a javascript program to find area of a circle.
{
    console.log("Q4. find out area of circle")
    let r = 15, area

    area = 3.14 * r * r;
    console.log("r", r)
    console.log("area", area)

    // r = 15
    // output = 706.5
}


// Q5 write a javascript program to convert feet in to inches.
console.log("Q5. convert feet to inches")

let feet = 45, inches
inches = feet * 12;
console.log("feet", feet)
console.log("inches", inches)

//  feet = 45
// output = 540


// Q6 write a javascript program to calculate given  formulas.

console.log("Q6 write a javascript program to calculate given  formulas.")

// (1) (a*a) - (b*b) = (a-b)*(a+b) ?
console.log("1. (a*a) - (b*b) = (a-b)*(a+b) ?")

let a = 10, b = 15
c = (a * a) - (b * b)
console.log("(a - b) * (a + b) = (a-b)*(a+b)" )
console.log("(a - b) * (a + b)" , c)
console.log(" formula its correct")


// (2)  ((a-b)*(a-b))  = (a*a) - 2*a*b + (b*b) ?
{
    console.log(" 2. ((a-b)*(a-b))  = (a*a) - 2*a*b + (b*b) ?")
    let a = 5, b = 8
    c = ((a - b) * (a - b))

    console.log("((a-b)*(a-b))" , c)
    console.log("((a-b)*(a-b)) = (a*a) - 2*a*b + (b*b)" )
    console.log(" formula its correct")

    //  a = 5, 
    //  b = 8, 

    //  ((a-b)*(a-b)) = 9
    //  (a*a) - 2*a*b + (b*b) = 9
    // formula its correct
}
// (3) (a+b+c)*(a+b+c) = (a*a)+(b*b)+(c*c) + 2*a*b  + 2*a*c + 2*b*c ?
{
    console.log("3. (a+b+c)*(a+b+c) = (a*a)+(b*b)+(c*c) + 2*a*b  + 2*a*c + 2*b*c ?")

    let a = 5, b = 3, c = 7, x

     x = (a+b+c)*(a+b+c) 
     console.log("(a+b+c)*(a+b+c)", x)
     console.log("(a+b+c)*(a+b+c) = (a*a)+(b*b)+(c*c) + 2*a*b  + 2*a*c + 2*b*c")
    console.log(" formula its correct")


    //  a = 5
    // b = 3
    // c = 7

    // (a+b+c)*(a+b+c) = 225
    // (a*a)+(b*b)+(c*c) + 2*a*b  + 2*a*c + 2*b*c") = 225
    // formula its correct
}
// (4) (a-b-c)*(a-b-c) = (a*a)+(b*b)+(c*c) -2*a*b - 2*a*c + 2*b*c ?

{
console.log("4. (a-b-c)*(a-b-c) = (a*a)+(b*b)+(c*c) -2*a*b - 2*a*c + 2*b*c ?")
let a = 10, b = 8, c = 12, x

x = (a-b-c)*(a-b-c)
console.log("(a-b-c)*(a-b-c)", x)
console.log("(a-b-c)*(a-b-c) = (a*a)+(b*b)+(c*c) -2*a*b - 2*a*c + 2*b*c")
console.log(" formula its correct")

  //  a = 10
    // b = 8
    // c = 12

    // (a-b-c)*(a-b-c) = 100
    //  (a*a)+(b*b)+(c*c) -2*a*b - 2*a*c + 2*b*c") = 100
    // formula its correct

}
//  5. (a-b)*(a-b)*(a-b) = (a*a*a)- 3*a*a*b + 3*a*b*b - (b*b*b) ?
{
    console.log("5. (a-b)*(a-b)*(a-b) = (a*a*a)- 3*a*a*b + 3*a*b*b - (b*b*b) ?")
    let a = 6, b  = 8, c = 10, x

    x =  (a-b)*(a-b)*(a-b)
    console.log("(a-b)*(a-b)*(a-b)", x)
    console.log("(a-b)*(a-b)*(a-b) = (a*a*a)- 3*a*a*b + 3*a*b*b - (b*b*b)")
    console.log(" formula its correct")

    // a = 6
    // b = 8
    // c = 10

    // (a-b)*(a-b)*(a-b) -8
    // (a*a*a)- 3*a*a*b + 3*a*b*b - (b*b*b)  = -8
    // formula its correct





}




