console.log(" Quetion No.01 Write a program for Stack Operation Program (Insert, Delete, isEmpty, TopElement, Length)")

class Stack {

    constructor () {
        this.data =  []
    }


    add(elem) {
       return this.data[this.data.length] = elem
    }

    delete() {
       return this.data[this.data.length = this.data.length -1]
    }

    peak(){
        return this.data[this.data.length -1 ]
    }

    isEmpty(){
        if(this.data.length == 0){
            console.log("Stack is empty...")
        }else{
            console.log("Stack is not empty...")
        }
    }

    Length() {
        return this.data.length
    }

    display(){
        console.log(this.data)
    }
}

let obj  =  new Stack ();

obj.add(100)
obj.add(200)
obj.add(300)
obj.add(400)
obj.add(500)
obj.display()
console.log("stack length is:" , obj.Length())

obj.delete()
obj.delete()
obj.display()

console.log("your stack peak element is : ", obj.peak())

obj.delete()
obj.isEmpty()

//  output :-
//  add element : [ 100, 200, 300, 400, 500]
//  delete element : [ 100 , 200, 300]
//  stack length : [ 100 , 200, 300]
//  Top Element :  your stack peak element is :  100
//  isEmpty :  Stack is empty...


console.log("Quetion No .02  Write a program for Next Greater Element using Stack")
class stackGreater {
    constructor(){
        this.stack = [];
    }

    greaterElem(arr) {
        let result = new Array(arr.length).fill(-1);
        
        for (let i = 0; i < arr.length; i++) {
            while (this.stack.length > 0 && arr[this.stack[this.stack.length - 1]] < arr[i]) {
                result[this.stack.pop()] = arr[i];
            }
            this.stack.push(i);
        }
        
        return result;
    }
}

let arr = [3, 5, 9, 2, 7, 6];
let greater = new stackGreater();
console.log(greater.greaterElem(arr));

// output :- [ 5, 9, -1, 7, -1, -1 ]


console.log("Question No.03  Write a program for a reverse string using Stack.")

class StackReverse {

    constructor () {
        this.arr= []
    }

    reverseString(str) {

        for (let i = 0; i < str.length; i++) {
            this.arr.push(str[i]);
        }
    
        let result = '';
        while (this.arr.length > 0) {
            result += this.arr.pop();
        }
    
        return result;
    }
    
}

let str = 'Rathod Yogesh';
let reverse =  new StackReverse();
console.log(reverse.reverseString(str)); 
//  output :- hsegoY dohtaR
