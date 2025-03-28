// Balance Paranthisis => 

function balance(str) {
    let stack = [];
    let pair = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    };

    for (let char of str) {
        if (char == '{' || char == '[' || char == '(') {
            stack.push(char);
        } else if (char == '}' || char == ']' || char == ')') {
            if (stack.length == 0 || pair[stack.pop()] != char) {
                return false;
            }
        }
    }

    return stack.length == 0;
}

let str = '{[()]}';
console.log(balance(str)); 


//  Reverse string in stack =>

    function reverseString(string) {
        let newString = " ";
        for (var i = string.length - 1; i >= 0; i--) {
            newString += string[i];
        }
        return newString;
    }

    let string = "yogesh"
    console.log(reverseString(string));



    // Next grater in stack =>
    

