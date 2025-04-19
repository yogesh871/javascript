
// 1.

let units = 50, bill, finalbill;

if(units <= 100){
    bill = units * 0.6 + 50;
    console.log("The electric bill is:", bill,  "Rs")
}
else if( units <= 200){
    bill =( units * 0.6 ) + (units - 100 * 0.8) + 50;
    console.log("The electric bill is:", bill,  "Rs")
}
else if( units <= 300){
    bill =( units * 0.6 ) + (units - 100 * 0.8) + (units - 200* 0.9) + 50;
    console.log("The electric bill is:", bill,  "Rs")
}
else if( units > 300){
    bill = ( units * 0.6 ) + (units - 100 * 0.8) + (units - 200* 0.9) + 50;
    extracharge =  bill * 0.15
    console.log("extracharge:", extracharge)

    finalbill = extracharge + bill
    console.log("The electric finalbill is:", finalbill,  "Rs")
    console.log("The electric bill is:", bill,  "Rs")
}



//2.  Check wether a person is eligible for voting or not? 
console.log("2. program Check wether a person is eligible for voting or not")

let  age = 19;

if(age >= 18){
    console.log("you are eligible for vating")
}
else{
    console.log("you are not eligible for vating")
}


// 3. employee gross salary to caculate HRA and DA"
console.log("3. employee gross salary to caculate HRA and DA")

let Basicsalary = 14000, hra, da, grossSalary


if(Basicsalary > 0 && Basicsalary <= 5000){
hra = (Basicsalary * 0.08)
da  =  (Basicsalary * 0.2)
    grossSalary = Basicsalary + hra + da;
    console.log("grossSalay is:", grossSalary)
}
else if(Basicsalary > 5000 && Basicsalary <= 10000){
    hra = (Basicsalary * 0.12)
da  =  (Basicsalary * 0.3)
    grossSalary = Basicsalary + hra + da;
    console.log("grossSalay is:", grossSalary)
}
else if(Basicsalary > 10000 && Basicsalary <= 15000){
    hra = (Basicsalary * 0.15)
da  =  (Basicsalary * 0.4)
    grossSalary = Basicsalary + hra + da;
    console.log("grossSalay is:", grossSalary)
}
else{
    hra = (Basicsalary * 0.2)
    da  =  (Basicsalary * 0.5)
        grossSalary = Basicsalary + hra + da;
        console.log("grossSalay is:", grossSalary)

}

// 4.computer taxes for a  income with tax slab rated as follow...
console.log("4 .computer taxes for a  income with tax slab rated as follow")

let income = 15000, totalincome , tax, firsttax, sectax, five;

if(income > 0 && income <= 2500){
    tax =  income * 0;
    console.log("below to 2500 No tax .....")
}
else if(income > 2500 && income <= 5000){
    
    tax = (income * 0.10)
    console.log("Your tax amount is :", tax)

}
else if(income > 5000 && income <= 10000){
    
    if (income > 5000) {
        pritax = income - 5000 ;
        sectax = (pritax * 0.2) ;
    }
    firesttax = 5000 * 0.10
    tax = (firesttax + sectax);
    console.log("Your tax amount is :", tax)
}
else{
    if (income > 10000) {
        pritax = income - 10000 ;
        thirdtax = (pritax * 0.3) ;
    
    }
    firesttax = 5000 * 0.10
    sectax = 5000 * 0.20
    tax = (firesttax + sectax + thirdtax);
    console.log("Your tax amount is :", tax)
}


// 5 write a program to evulate the total, precentage, grede of a  student for the following constraints

console.log("5. write a program to evulate the total, precentage, grede of a  student for the following constraints")

let mark ;
 mark = +prompt("Enter your mark:" )

 if(mark > 75 && mark < 100)
 {
  console.log("A  grade ")
 }
 else if(mark < 75 && 60 < mark )
 {
  console.log("B  grade ")
 }
 else if(mark < 60 && mark > 45)
 {
  console.log("C  grade ")
 }
 else if(mark < 45 && mark > 35)
 {
  console.log("D  grade ")
 }
 else if(mark < 35){
    console.log("FAIL")
 }
 else {
    console.log("Invalid Mark")

 }



//  Declare two variable x and y. Assign value to these variables. Number x should be prited  
//  if itis less then 2000 and greter then  3000, and  number y should be printed only if it  is between 100 and 500.

let x = 3200;

if(x < 2000 || x > 3000){
    console.log("X",x)
}
else{
    console.log("Value is unvaliade")
}


let y = 200;
if(y < 500 && y > 100){
    console.log("Y", y)
}
else{
    console.log("Value is unvaliade")
}