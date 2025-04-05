// Make satck using two queue

class stack  {
      constructor () {
        this.q1 = [];
        this.q2 = [];
      }

      intert(val){
        this.q1.push(val)
      }

      removedata(){
        while(this.q1.length > 1){
            this.q2.push(this.q1.shift())        
        }
            let removeElm = this.q1.shift();
            console.log("remove element is", removeElm);
            
           [this.q2, this.q1] =  [this.q1, this.q2];
    }

    peakEle() {
      return this.q1[0]
    }

    isEmpty() {
        if(this.q1.length == 0){
            console.log("Stack is Empty...")
        }
        else{
            console.log("Stack is Not Empty...")
        }
    }

      display(){
        console.log(this.q1);
      }
}

let q = new stack();

q.intert(100);
q.intert(200);
q.intert(300);
q.intert(400);
q.display()

q.removedata();
q.display()

console.log("Queue peak Element is: ", q.peakEle())
q.display()

q.isEmpty();
q.display()