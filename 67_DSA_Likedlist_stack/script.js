class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    add(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    delete(){
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

let stack = new Stack();
stack.add(11);
stack.add(22);
stack.add(33);
stack.add(44);

stack.display();

stack.delete()
stack.delete()
stack.display()
