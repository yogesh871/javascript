
console.log("Question No. 01 WAP to check array is palindrome or not using JavaScript (only with Numbers)")

let arr = [15, 20, 15];

function palindrome(arr) {
    let reverseArr = [...arr].reverse();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === reverseArr[i]) {
            return true;
        }
        else{
            return false
        }
    }
}
console.log(palindrome(arr));

// Output:-
// true

console.log("Question No. 02 WAP to Merge two array in single Array using JavaScript. ")

let num1 = [13, 56, 89]
let num2 = [14, 57, 90]

function merge (num1, num2){

    let finalArr = num1.concat(num2)
    console.log("finalArr is :" , finalArr)
}

console.log(merge(num1, num2))

// Output :- 
// finalArr is : [ 13, 56, 89, 14, 57, 90 ]


console.log("Quetion No. 03 WAP to implements Quick Sort using JavaScript.")

function Quick(array) {
    if (array.length <= 1) {
        return array;
    }

    let pevot = array[array.length - 1];
    let left = [];
    let right = [];
    
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pevot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...Quick(left), pevot, ...Quick(right)];
}

let array = [12, 13, 17, 83, 65, 47];
console.log(Quick(array));

// Output :-
// [ 12, 13, 17, 47, 65, 83 ]


console.log(" Question No. 04 WAP to implements Create singly Linked list, adding a new Elements, and Delete node from singly linked list (Without any pre-defined function) ")

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SingleList {
    constructor() {
      this.head = null;
    }

   
    add(data) {
      let newNode = new Node(data);

      if (this.head === null) {
        this.head = newNode;
      } 
      else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }


    delete(value) {
      if (this.head === null) {
        console.log('List is empty');
        return;
      }
    
      if (this.head.data === value) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let previous = null;
  
     
      while (current !== null && current.data !== value) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

  
    display() {
      if (this.head === null) {
        console.log('List is empty');
        return;
      }
  
      let current = this.head;
      let list = '';
      while (current !== null) {
        list += current.data + ' -> ';
        current = current.next;
      }
      console.log(list.slice(0, -4));
    }
  }
  

  let list = new SingleList();
  list.add(11);  
  list.add(12);  
  list.add(13);
  list.add(14);
  list.add(15);
  list.display(); 
  
  list.delete(11);   
  list.delete(14); 
  list.display();  

//   Output :-
// 11 -> 12 -> 13 -> 14 -> 15  
// 12 -> 13 -> 15   
  

console.log(" Question No. 05 WAP to implement insert and remove element from Queue using JavaScript")

class Queue {
    constructor () {
        this.data = []
    }

    insert(val) {
        // this.data.push(val)
        this.data[this.data.length] =  val 
    }

    remove(){
       this.data.shift()
    }

    peakEle(){
        return this.data[0]
    }

    isEmpty(){
        if(this.data.length == 0){
            console.log("Queue in Empty...")
        }
        else{
           console.log("Queue is Not Empty...")
        }
    }

    display() {
        console.log(this.data)
    }

}

let q = new Queue();
 
q.insert(11)
q.insert(12)
q.insert(13)
q.insert(14)
q.insert(15)

q.display()

q.remove()
q.remove()
q.display()

console.log("Queue peak Element is :", q.peakEle())

q.isEmpty()
q.display()

// Output :-
// [ 11, 12, 13, 14, 15 ]
// [ 13, 14, 15 ]
// Queue peak Element is : 13
// Queue is Not Empty...
// [ 13, 14, 15 ]

