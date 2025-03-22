<<<<<<< HEAD
class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newnode = new node(data);
        if (!this.head) {
            this.head = newnode;
            this.tail = newnode;
            newnode.next = this.head; 

        } else {
            this.tail.next = newnode;
            this.tail = newnode;
            this.tail.next = this.head;
        }
    }

    remove(data) {
        if (!this.head) return;
        
        let current = this.head;
        let prev = this.tail;
        
        do {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = this.head.next;
                    this.tail.next = this.head;
                } else if (current === this.tail) {
                    this.tail = prev;
                    this.tail.next = this.head;
                } else {
                    prev.next = current.next;
                }
                return;
            }
            prev = current;
            current = current.next;
        } while (current !== this.head);
    }

    display() {
        if (!this.head) return console.log("List is empty");
        let current = this.head;
        let result = [];
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);
        console.log(result.join(" -> "));
    }
}


const CList = new CircularLinkedList();

console.log("Question No 4. WAP for Circular Link list. (append, remove functionality)")
CList.append(100);
CList.append(200);
CList.append(300);
CList.append(400);
CList.append(500);
CList.append(600);
CList.display(); 
// output = 100 -> 200 -> 300 -> 400 -> 500 -> 500 

CList.remove(200);
CList.display(); 

// output =  100 -> 300 -> 400 -> 500 -> 600
=======
class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newnode = new node(data);
        if (!this.head) {
            this.head = newnode;
            this.tail = newnode;
            newnode.next = this.head; 

        } else {
            this.tail.next = newnode;
            this.tail = newnode;
            this.tail.next = this.head;
        }
    }

    remove(data) {
        if (!this.head) return;
        
        let current = this.head;
        let prev = this.tail;
        
        do {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = this.head.next;
                    this.tail.next = this.head;
                } else if (current === this.tail) {
                    this.tail = prev;
                    this.tail.next = this.head;
                } else {
                    prev.next = current.next;
                }
                return;
            }
            prev = current;
            current = current.next;
        } while (current !== this.head);
    }

    display() {
        if (!this.head) return console.log("List is empty");
        let current = this.head;
        let result = [];
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);
        console.log(result.join(" -> "));
    }
}


const CList = new CircularLinkedList();

console.log("Question No 4. WAP for Circular Link list. (append, remove functionality)")
CList.append(100);
CList.append(200);
CList.append(300);
CList.append(400);
CList.append(500);
CList.append(600);
CList.display(); 
// output = 100 -> 200 -> 300 -> 400 -> 500 -> 500 

CList.remove(200);
CList.display(); 

// output =  100 -> 300 -> 400 -> 500 -> 600
>>>>>>> 908c77e02cb1f142f92dd8f526ad377acc3da395
