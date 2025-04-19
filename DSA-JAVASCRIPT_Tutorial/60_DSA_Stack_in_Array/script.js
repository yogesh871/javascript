// Satck in array => add, delete

class Stack {

    constructor () {
        this.data =  []
    }


    add(ele) {
       //  this.data.push(ele)
       return this.data[this.data.length] = ele
    }

    pop() {
    //    this.data.pop()
       return this.data[this.data.length = this.data.length -1]
    }

    peak(){
        return this.data[this.data.length -1 ]
    }

    isEmpty(){
        if(this.data.length == 0){
            console.log("Stack in empty...")
        }
    }


    display(){
        console.log(this.data)
    }
}

let obj  =  new Stack ();

obj.add(100)
obj.add(200)
obj.add(300)
obj.display()

obj.pop()
obj.pop()
obj.display()


console.log("your stack peak element is : ", obj.peak())
obj.isEmpty()
