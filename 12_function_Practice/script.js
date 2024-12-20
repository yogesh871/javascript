

function addition(){
    let a = +prompt("Enter a value of a:");
    let b = +prompt("Enter a value of b:");
    let total = a + b;
    console.log("Addition of a and b:", total);
}

function subtraction(){
    let a = +prompt("Enter a value of a:");
    let b = +prompt("Enter a value of b:");
    let total = a - b;
    console.log("subtraction of a and b:", total);
}

function Multiplication(){
    let a = +prompt("Enter a value of a:");
    let b = +prompt("Enter a value of b:");
    let total = a * b;
    console.log("Multiplication of a and b:", total);
}

function Division(){
    let a = +prompt("Enter a value of a:");
    let b = +prompt("Enter a value of b:");
    let total = a / b;
    console.log("Division of a and b:", total);
}

console.log("Press 1 for - Addition Number:")
console.log("Press 2 for - Subtraction Number:")
console.log("Press 3 for - Multiplication  Number:")
console.log("Press 4 for - Division Number:")

let choice = +prompt("Enter Your Choice :")
 switch (choice) {
    case 1:
        addition();
        break;
    case 1:
        subtraction();
        break;
    case 1:
        Multiplication();
        break;
    case 1:
        Division();
        break;
    default:
        console.log("Invalid Choice")
        break;
 }
