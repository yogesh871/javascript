// Queue  =>   line 
        //    Method => equeue(insert), dequeue(delete), isEmpty, isFull, TopElement


        class Queue {
            constructor () {
                this.data = [];
            }

            enqueue(val){
                this.data.push(val)
            }

            dequeue() {
                if(this.data.length === 0) 
                {
                    console.log("Queue is Empty")
                }
                this.data.shift()
            }

            isEmpty(){
                if(this.data.length === 0) 
                {
                    console.log("Queue is Empty")
                }
                else{
                    console.log("Queue is not Empty")
                }
            }

            topElem() {
                this.data.length[0]
            }

            diplay() {
                console.log(this.data)
            }
        }

        let q = new  Queue();

        q.enqueue(11)
        q.enqueue(12)
        q.enqueue(13)
        q.enqueue(14)
        q.diplay()

        q.dequeue()
        q.dequeue()
        q.diplay()

        q.topElem()
        q.diplay()

        q.dequeue()
        q.isEmpty()
        q.diplay()

        q.dequeue()
        q.isEmpty()