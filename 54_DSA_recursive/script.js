//  Recursive Funaction 

// Question No.01 => factorial

 function factorial (num) {

    if(num <=  0){
        return 0
    }
    else if(num === 1){
        return 1
    }
    else{
        return  num * factorial(num -1)
    }
}
console.log(factorial(3))


//  Question no. 02 => fabbonaci series 

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
n = 10

for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
};


//  Question no. 03 => Binnary Serching
