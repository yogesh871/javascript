//  Inhiretance 


// 1.  single inheritance 

class perent {
      perentname(){
        console.log("Rajeshbhai")
      }
}

class child extends perent{
    childname(){
        console.log("Sohil")
        this.perentname();
    } 
}

let obj  = new child();
obj.childname()



// 2. Multilevel inhiretance 

class A{
    showA(){
        console.log("Class A Called....")
    }
}
class B extends A{
    showB(){
        this.showA();
        console.log("Class B Called....")
    }
}
class C extends B{
    showC(){
        this.showB()
        console.log("Class C Called....")
    }
}

let obj_C = new C();
obj_C.showC();



// 3. herichical inheritance

class vehicle{
    hello() {
        console.log("Vehicle Name is :")
    }
}

class car extends vehicle{
    carname(){
        this.hello()
        console.log("creta")
    }
}

class bike extends vehicle{
    bikename(){
        this.hello();
        console.log("Honda Drean New")
    }
}

let obj_1 = new car();
obj_1.carname()

let obj_2 = new bike();
obj_2.bikename()



//  inheritance with perameteries contructor   

//  1 single inheritance : 
class addition {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

}

class addchild  extends addition{

    //  this work behinde this program
    constructor (a,b){
        super(a, b);
    }

    add() {
      console.log (this.a +  this.b)
    }
}

let objadd = new addchild(12, 45);
objadd.add()



//   2 Multilevel inheritance : 

class multipication {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class addmulti1 extends multipication{      
        constructor (x,y){
            super(x, y);
        }

        main(){
            console.log("this is work....!")
        }
}

class addmulti extends addmulti1{
    //  this work behinde this program
    constructor (x,y){
        super(x, y);
    }

    multi() {
        this.main();
      console.log (this.x *  this.y)
    }
}

let objmulti = new addmulti(12, 45);
objmulti.multi();



// herichical inheritance 

class devison  {
    constructor (p, q){
        this.p = p;
        this.q = q;
    }
}

class devison_1 extends devison{
    constructor(p, q){
        super(p,q)
    }
    
    divi_1(){
        return (this.p / this.q)
    }
}

class devison_2 extends devison{
    constructor(p, q){
        super(p,q)
    }

    divi_2(){
        return (this.p / this.q)
    }
}

let divi1 = new devison_1(12,3);
console.log(divi1.divi_1())

let divi2 = new devison_2(15,3);
console.log(divi2.divi_2())