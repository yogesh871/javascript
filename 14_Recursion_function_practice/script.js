
// 1. Sum all values from 0 to given number.
function sum(number) {
    if (number === 0) {
        return 0;
    }
    return number + sum(number-1);
}

console.log(sum(10));

// 2. Sum all even numbers from 0 to given number
function sumEven(number) {
    if (number === 0) {
        return 0;
    } else if (number%2 !== 0) {
        return sumEven(number-1);
    }
    return number + sumEven(number-1);
}

console.log(sumEven(10));


// 3. Returns the value of exponent operation from given number and grade.
function pow(number, power) {
    if (power === 1) {
        return number;
    }
    return number * pow(number, power-1);
}

console.log(pow(4,4));


// 4. Returns the product of a given number from 1 to N.
function factorial(number) {
    if (number === 1) {
        return 1;
    }
    return number*factorial(number-1);
}

console.log(factorial(4));

