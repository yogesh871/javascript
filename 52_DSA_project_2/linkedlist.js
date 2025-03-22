<<<<<<< HEAD

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        let another = new Node(data);
        if (!this.head) {
            this.head = another;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = another;
    }

    display() {
        let current = this.head;
        let result = [];

        while (current != null) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> ") + " -> NULL");
    }

// Question No 1. WAP for Reverse Link List

    reverse() {
        let current = this.head;
        let prev = null;
        let temp;

        while (current != null) {
            temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        this.head = prev;
    }

// Quetion No 2. WAP for Given Link List is Palindrome or not

    palindrome() {
        let current = this.head;
        let add = [];
        while (current) {
            add.push(current.data);
            current = current.next;
        }
        let start = 0;
        let end = add.length - 1;
        while (start < end) {
            if (add[start] !== add[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

// Question No 3. WAP for Removing Node Element at any Position in given Link list.  

removeAt(position) {
    if (!this.head)
     return null;
    
    let current = this.head;
    if (position === 0) {
        this.head = this.head.next;
        return current.data;
    }

    let prev = null;
    let index = 0;
    while (current && index < position) {
        prev = current;
        current = current.next;
        index++;
    }

    if (!current) return null; 

    prev.next = current.next;
    return current.data;
}

   }

let list = new LinkedList();
list.add(11);
list.add(12);
list.add(13);
list.add(14);
list.display(); 
// output =  11 -> 12 -> 13 -> 14 -> NULL

console.log("Question No 1. WAP for Reverse Linked List");
list.reverse();
list.display(); 
// output =  14 -> 13 -> 12 -> 11 -> NULL

console.log("Question No 2. WAP for Given Link List is Palindrome or not")
console.log("linked list is Palindrome  true / false -> ", list.palindrome());
// output =  linked list is Palindrome  true / false ->  false 

console.log("Question No 3. WAP for Removing Node Element at any Position in given Link list.")
list.removeAt(1)
list.display()
// output =  14 -> 12 -> 11 -> NULL
=======

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        let another = new Node(data);
        if (!this.head) {
            this.head = another;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = another;
    }

    display() {
        let current = this.head;
        let result = [];

        while (current != null) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> ") + " -> NULL");
    }

// Question No 1. WAP for Reverse Link List

    reverse() {
        let current = this.head;
        let prev = null;
        let temp;

        while (current != null) {
            temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        this.head = prev;
    }

// Quetion No 2. WAP for Given Link List is Palindrome or not

    palindrome() {
        let current = this.head;
        let add = [];
        while (current) {
            add.push(current.data);
            current = current.next;
        }
        let start = 0;
        let end = add.length - 1;
        while (start < end) {
            if (add[start] !== add[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

// Question No 3. WAP for Removing Node Element at any Position in given Link list.  

removeAt(position) {
    if (!this.head)
     return null;
    
    let current = this.head;
    if (position === 0) {
        this.head = this.head.next;
        return current.data;
    }

    let prev = null;
    let index = 0;
    while (current && index < position) {
        prev = current;
        current = current.next;
        index++;
    }

    if (!current) return null; 

    prev.next = current.next;
    return current.data;
}

   }

let list = new LinkedList();
list.add(11);
list.add(12);
list.add(13);
list.add(14);
list.display(); 
// output =  11 -> 12 -> 13 -> 14 -> NULL

console.log("Question No 1. WAP for Reverse Linked List");
list.reverse();
list.display(); 
// output =  14 -> 13 -> 12 -> 11 -> NULL

console.log("Question No 2. WAP for Given Link List is Palindrome or not")
console.log("linked list is Palindrome  true / false -> ", list.palindrome());
// output =  linked list is Palindrome  true / false ->  false 

console.log("Question No 3. WAP for Removing Node Element at any Position in given Link list.")
list.removeAt(1)
list.display()
// output =  14 -> 12 -> 11 -> NULL
>>>>>>> 908c77e02cb1f142f92dd8f526ad377acc3da395
