//  Question No.1
{

    console.log("Question no.1")
    
    let i = 1, n ;
    
    n = +prompt("Enter your number")
    
    while(i <= 10){
        console.log(n, "x", i ,"=", i*n);
        i++;
    }
}

// output 
// n = 5
//  5 x 1 = 5  to 5 x 10 = 50

//  question N0.2
{
    console.log("Question No. 2")
    let  i = 1, j =  4;
    let fact = 1;
    while (i <= j)
    {
        fact *= i; 
        i++;
    }
    console.log("your fact", fact)
}
// output : 24   


// Question No.3
console.log("Question no. 3");

let sum = 0;
let num = +prompt('Enter  three-digit number: '); 

let i = num; 

while (num > 0) {
    let rem = num % 10; 
    sum = sum + (rem ** 3); 
    num = Math.floor(num / 10); 
}

if (sum === i) {
    console.log("The number is an Armstrong number.");
} else {
    console.log("The number is not an Armstrong number.");
}

//  num = 153 
//  number is an armstrong number 


// Question No.4
{
    console.log("Question no. 4");

    let sum = 0;
    let num = +prompt("Enter three-digit number: "); 
    
    let i = num; 
    
    while (num > 0) {
        let rem = num % 10; 
        sum = rem + (sum * 10); 
        num = Math.floor(num / 10); 
    }
    
    if (sum === i) {
        console.log("The number is a palindrome.");
    } else {
        console.log("The number is not a palindrome.");
    }
    
}
    //  //  num = 121 
//  number is an palidrome number 
    
// Question no. 5
{
    console.log("Question no. 5")
    let a = 0, b = 1, c;
    let i =1 ;
while(i <= 10){
    console.log(a)
    c = a + b;
    a = b;
    b = c;
    i++;
}
}
//  0, 1, 1, 2, 3, 5, 8, 13, 21, .......

// Question no. 6
{
    console.log("Question no. 6")
    let sum = 0;
    let n = 1;
    do {
        console.log("number:", n)
        sum = sum + n ;
        n++
    } while (n <= 30);
    
    console.log("sum of all 1 to 30", sum)
}
//   1 to 30  
//   sum = 465


// Question no. 7
{
    console.log("Question no. 7")
    let n = 1;
do {
    if (n % 3 == 0){
        if(n % 5 == 0){
            console.log("FizzBuzz")         
        }
        else{
            console.log("Fizz")
        }
    }
    else if(n % 5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(n)
    }
    n++;
} while (n <= 100);

}
// output   1 2 fizz 4 buzz ....14 fizzbuzz ..16......


//  Question no. 8
{
    console.log("Question no. 8")
    let i = 1
    let sum = 0;
    for(let i = 1; i*i <= 100; i++){
        console.log(i*i);
        sum = sum + i* i
    }
    console.log(" sum of all digit :", sum)
}
//  output   1, 4, 9, 16, ......100  
//  sum = 385

//  question no. 9

{
    console.log("Question no. 9")
    let i,j ;
    
    for(i=5 ; i>=1 ; i--){
        let data = ""
        for(j=5; j>=i ; j--){
            data += j + " ";
        }
        console.log(data ," ");
    }
}

//  question no. 10
console.log("question no. 10")
{
    let i , j, data , value = 1;
    
    for (i =1; i <= 5; i++ ){
        data = " "
        for (j =1; j <= i; j++){
            data += value + " "
            value++
        }
        console.log(data)
    }
}  
