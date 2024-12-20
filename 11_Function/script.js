

//  Four Way Of Function :

//  1. No Argument No Return:
console.log(" 1. No Argument No Return:")
function addition1(){
    let a = 10, b = 20;
    console.log(" addition of a and b", a + b)
}
addition1();


//  2. No Argument With Return:

console.log(" 2. No Argument With Return:")
    function Multipliction1(){
        let x = 10, y = 20, total;
        total = x * y;
        return total;
    }
      console.log("Multipliction of x and y", Multipliction1())


//  3. With Argument No Return:

console.log(" 3. With Argument No Return:")
    function addition2(c,d){
         console.log("Addition of c and d", c+d)
    }
    addition2(15, 20)


//  4. With Argument With Return:

console.log(" 4. with Argument with Return:")
    function Multipliction2(m,n){
          return m * n
    }
     console.log("Multipliction of m and n", Multipliction2(15, 20))


//  SwichCase In Function:

let choice = +prompt("Enter Your Choice:")
switch (choice) {
    case 1:
       addition1();
        break;
    case 2:
        console.log("Multiplication of x and y:",Multipliction1());
        break;
    case 3:
        addition2(15, 20);
        break;
    case 4:
        console.log("Multipliction of m and n:", Multipliction2(15, 20));
        break;
    default:
        console.log("Invalid Choice")
        break;
}

