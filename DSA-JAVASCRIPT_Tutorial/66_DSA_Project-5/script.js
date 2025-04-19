console.log("Question No.01 Write a program for Circular Queue")


class CircularQueue {
    constructor(size) {
      this.size = size;
      this.queue = new Array(size);
      this.front = -1;
      this.rear = -1;
    }
  
    isEmpty() {
      return this.front === -1;
    }
  
    isFull() {
      return (this.rear + 1) % this.size === this.front;
    }
  
    enqueue(element) {
      if (this.isFull()) {
        console.log("Queue is full!");
        return;
      }
      if (this.isEmpty()) {
        this.front = 0;
        this.rear = 0;
      } else {
        this.rear = (this.rear + 1) % this.size;
      }
      this.queue[this.rear] = element;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty!");
        return;
      }
      let dequeuedElement = this.queue[this.front];
      if (this.front === this.rear) {
        this.front = -1;
        this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.size;
      }
      console.log("remove element in queue is:" , dequeuedElement);
      return dequeuedElement;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Queue is empty!");
        return;
      }
      console.log("peak element is:" ,this.queue[this.front]);
      return this.queue[this.front];
    }
  
    display() {
      let i = this.front;
      let elements = [];
      while (i !== this.rear) {
        elements.push(this.queue[i]);
        i = (i + 1) % this.size;
      }
      elements.push(this.queue[this.rear]);
      console.log(elements);
    }
  }
  
  const cq = new CircularQueue(5);
  
  cq.enqueue(10);
  cq.enqueue(20);
  cq.enqueue(30);
  cq.enqueue(40);
  cq.enqueue(50);
  cq.enqueue(60);
  cq.display();


  cq.dequeue();
  cq.dequeue();
  cq.display();

  cq.peek();
  cq.display();

//   Output :-

// [ 10, 20, 30, 40, 50 ]
// remove element in queue : 10
// remove element in queue : 20
// [ 30, 40, 50 ]
// peak element is: 30
// [ 30, 40, 50 ]
   


console.log("Question No.02 write a program Queue using two stacks.")

class queue {
    constructor() {
        this.s1 = []
        this.s2 = []
    }

    enqueue (val) {
        this.s1.push(val)
    }

    dequeue(){
        while(this.s1.length > 1){
            this.s2.push(this.s1.pop())
        }

        let dequeueEle = this.s1.pop()

        while(this.s2.length > 0){
            this.s1.push(this.s2.pop())
        }

        console.log("remove element in queue is:", dequeueEle)
    }

    peakEle(){
        while(this.s1.length > 1){
            this.s2.push(this.s1.pop())
        }

        let dequeuepeak = this.s1[0];

        while(this.s2.length > 0){
            this.s1.push(this.s2.pop())
        }

        console.log("queue peak element is:", dequeuepeak)
    }

    isEmpty() {
        if(this.s1.length == 0) {
            console.log("queue is Empty...")
        }
        else{
            console.log("queue is Not Empty")
        }
    }

    display(){
        console.log(this.s1)
    }
}

let q = new queue();

q.enqueue(11);
q.enqueue(12);
q.enqueue(13);
q.enqueue(14);
q.enqueue(15);
q.display()

q.dequeue()
q.dequeue()
q.display()

q.peakEle()
q.display()

q.isEmpty()
q.display()


// Output :-

// [ 11, 12, 13, 14, 15 ]
// queue remove element is: 11
// queue remove element is: 12
// [ 13, 14, 15 ]
// queue peak element is: 13
// [ 13, 14, 15 ]
// queue is Not Empty
// [ 13, 14, 15 ]


console.log("Question No. 03 write a program check first string swap can make strings equal. (leetcode question no 1790)")
let areAlmostEqual = function(s1, s2) {
    if (s1 === s2){
        return true;
    } 
   let result = [];

   for (let i = 0; i < s1.length; i++) {
       if (s1[i] !== s2[i]){
           result.push(i);
       } 
        
       if (result.length > 2){
           return false;
       } 
   }
   return result.length === 2 
};

let s1 = "bank";
let s2 = "kanb";

console.log(areAlmostEqual(s1, s2))

// output =  true


