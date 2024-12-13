console.log("Question N0. 1")

let units = 250, bill, finalbill;

if(units <= 50){
    bill = units * 1;
    console.log("The electric bill is:", bill,  "Rs")
}
else if( units <= 150){
    bill =((units - 50) * 2 ) + ((units - 100) * 1);
    console.log("The electric bill is:", bill,  "Rs")
}
else if( units <= 250){
    bill =( (units - 150) * 3 ) + ((units - 150) * 2) + ((units - 200) * 1);
    console.log("The electric bill is:", bill,  "Rs")

    extracharge =  bill * 0.2
    console.log("extracharge:", extracharge)

    finalbill = extracharge + bill
    console.log("The electric bill is:", bill,  "Rs")
    console.log("The electric finalbill is:", finalbill,  "Rs")

}
else if( units > 250){
    bill = ((units - 250) * 4 ) + ((units - 250) * 3) + ((units - 150) * 2) + ((units - 200)* 1)
    console.log("The electric bill is:", bill,  "Rs")

    extracharge =  bill * 0.2
    console.log("extracharge:", extracharge)


    finalbill = extracharge + bill
    console.log("The electric bill is:", bill,  "Rs")
    console.log("The electric finalbill is:", finalbill,  "Rs")
}


//   Units : 250 Rs;
//   bill : 550 Rs; 

//  extracharge : 110 Rs; 
//  finalbill: 660 Rs



//  2 

console.log("Question N0. 2")

let sub ;
sub = +(prompt("Enter sub:", sub));

switch(sub){
    case 1:
    console.log("Winter")
    break;
    case 2:
    console.log("Winter")
    break;
    case 3:
    console.log("Winter")
    break;
    case 4:
    console.log("Winter")
    break;
    case 5:
    console.log("Summer")
    break;
    case 6:
    console.log("Summer")
    break;
    case 7:
    console.log("Summer")
    break;
    case 8:
    console.log("Summer")
    break;
    case 9:
    console.log("Monsoon")
    break;
    case 10:
    console.log("Monsoon")
    break;
    case 11:
    console.log("Monsoon")
    break;
    case 12:
    console.log("Monsoon")
    break;
    default:
        console.log("Invalid Input")
}

//  sub =  11;
//  "Monsoon"



// 3
console.log("Question N0. 3")

let amount, year, rate, interest;

amount = 10000;
year = 6;

if(year < 3){
    console.log("Invalid input")
}
else if(year > 3 && year <= 5){
    interest = amount * year * 3 / 100 
    console.log("Interest :", interest)
}
else if(year > 5 && year <= 8){
    interest = amount * year * 5 / 100 
    console.log("Interest :", interest)
}
else if(year > 8  && year <= 12){
    interest = amount * year * 12 / 100 
    console.log("Interest :", interest)
}
else {
    interest = amount * year * 15 / 100 
    console.log("Interest :", interest)
}

//  Amount : 10000;
// year : 6;
// intarest: 3000;

// 4

console.log("Question N0. 4")
let currentage ;

currentage = +(prompt("Enter your current age:", currentage));

if(currentage >= 18){
    console.log("You Are Eligibal For Voting")
}
else{
    console.log("You Are Not Eligibal For Voting")
}

//  currentage = 18
// result = You are Eligibal for vaoting

// 5.

console.log("Question N0. 5")

let age;
age = +(prompt("Enter your  age:", age));


if(age > 0 && age < 14){
    console.log("You are a child")
}
else if(age > 14 && age < 18){
    console.log("You are a teenager")
}
else if(age > 18 && age < 30){
    console.log("You are a young")
}
else if(age > 30 && age < 64){
    console.log("you are adult")
}
else{
    console.log("You are a Senior citizen")
}

//  age = 22
//  result = You are a young 