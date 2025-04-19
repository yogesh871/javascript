// Linklist 

class Node{
    constructor (data) {
        this.data = data;
        this.next =  null;
    }
}

class singlylinklist {

    constructor () {
        this.head = null
    }

    add(data){
        let another =  new Node(data)

        if(!this.head){
            this.head = another
            return
        }
        let current=this.head
        while(current.next)
        {
            current=current.next
        }
        current.next = another 
    }

    delete () {
       let current = this.head
        let prev

        while(current.next){
            prev = current
            current =  current.next
        }
        prev.next = null
    }

    firstadd(data){
        current = this.head

        while(current != null){
           current.next = current
           let prev = current.data          
        } 
        this.head = prav
    }

    firstremove(){
     this.head = this.head.next
    }


    display () {
        let current = this.head
        let ans = []
        
        while(current){
            ans = ans + current.data+ "-> "
            current = current.next
        }
        console.log(ans + "null")
    }

    /* 
    prav
    12 ->  11 ->  null

 -> 13 -> 14 -> 15 -> Null
    tamp
    
    */

    reverse() {
        let  current = this.head
         let prav = null
         let tamp 

         while(current != null){
            tamp = current.next
            current.next = prav
            prav = current
            current = tamp
         }
         this.head = prav
        
    }
}

let list  = new singlylinklist()
list.add(11)
list.add(12)
list.add(13)
list.add(14)
list.add(15)
list.display()

// list.delete()
// list.display()

// list.firstremove()
// list.display()

list.reverse()
list.display()
// list.firstadd(22)
// list.display()