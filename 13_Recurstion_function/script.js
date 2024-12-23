
//  Recurstion_Function  

function hello (n){
    console.log("Write a javascript program", n);
    if(n > 0){
        hello (--n);
    }
}
 hello(5)



//   Recursion_function for factorail :-

function fact(n) {
    if(n == 1){
        return 1;
    }
    else{
        return n * fact(n - 1)
    };
}
console.log(fact(5))



// Recursion_function for fibonacci series :- 

function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let num = 10;
console.log("Fibonacci series:");
for (let i = 0; i < num; i++) {
    console.log(fibonacci(i));
}
