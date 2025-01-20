// Construtor
//  No retutn type

class Test {

    //  1. Default Constructor
    constructor() {
        console.log("Constructor called .....")
    }

    name() {
        console.log("hello' my self Mr_Rathod")
    }
}

let obj = new Test()
obj.name()


class info {

    // 2. Parameterise Constructor
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }

    hello() {
        return `${this.name} is live in ${this.city}`
    }

}
let virat = new info("virat", "New Delhi")
virat.hello()



//  Using Prompt with parameter Constructor

// parameter constructor
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`${this.name} my age is  ${this.age} `)

    }
}

//  daynamic value get by user
let name = prompt("Enter your name ....");
let age = +prompt("Enter your age ....");


let self = new person(name, age)
self.info()