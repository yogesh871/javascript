//  Make queue using two stack  =>


class queue {
    constructor () {
        this.s1 = [];
        this.s2 = [];
    }

   insert(val){
    this.s1.push(val)
   }

   delete(){
    while(this.s1.length > 1){
        this.s2.push(this.s1.pop())
    }

    let deleteEle =  this.s1.pop();
    
    while(this.s2.length > 0){
        this.s1.push(this.s2.pop())
    }
    console.log("remove Element is", deleteEle)
   }

   peakEle() {
    while(this.s1.length > 1){
        this.s2.push(this.s1.pop())
    }

    let peakElem =  this.s1.pop();
 
    while(this.s2.length > 0){
        this.s1.push(this.s2.pop())
    }
    console.log("peak Element is",peakElem )
   }

   isEmpty() {
    if(this.s1.length == 0){
        console.log("Queue is Empty...")
    }
    else{
        console.log("Queue is Not Empty...")
    }
   }

   display() {
    console.log(this.s1)
   }

}

let s = new queue();


s.insert(100)
s.insert(200)
s.insert(300)
s.insert(400)
s.display()

s.delete()
s.delete()
s.delete()

s.peakEle()
s.display()

s.isEmpty()
s.display()