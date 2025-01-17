
//  class & object
class Test{
    //  variable
    value = 17;

    //  No Argument No Return 
    name() {
        console.log("hello")
    }

    // using this keyword
    // No Argument With Return
    any(){
        return "say anything";
    }
    // with Argument No return 
    subject(keys) {
        console.log(`Chemistry, Biology, Physics,  ${keys}` )
    }

    // this keyword also
    // With Argument With Return
    sayHello(key){
         return  `my age is : ${key}, ${this.any()}`
    } 
}

//  new keyword
let obj = new Test();

console.log(obj.value)
obj.name()


// Argument & parameters    
console.log(obj.sayHello(23))
obj.subject(3)