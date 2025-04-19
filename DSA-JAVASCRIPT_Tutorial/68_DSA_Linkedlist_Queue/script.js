class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    } 

    enqueue(val) {
        let newNode =  new Node(val)
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next =  newNode;
            this.last =  newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first){
            return null
        }
        let temp =  this.first;
        if(this.first == this.last){
            this.last=  null;
        }

        this.first = this.first.next;
        this.size--
        return temp.val
    }


    
    display() {
        let current = this.first;
        let stackValues = [];
        while (current) {
            stackValues.push(current.value);
            current = current.next;
        }
        console.log(stackValues.join(" -> "));
    }

}

let queue =  new Queue();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.display()

queue.dequeue()
queue.dequeue()
queue.display()


