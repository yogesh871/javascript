
// Object 

let person = {
    name : "kartik",
    age :  22,
    email : "Kartik9081@gmail.com",
    contact : "+91 9824816754",

    // No Argument No Return Function in Object
    sentance : function () {
         console.log("hello' my dear freinds ... .. .")
    },

    // No Argument with Return Function in Object
    hello : function () {
         return " hello world !"
    },

    // With Agument No Return Function in object
    world : function (a, b) {
        console.log(a)
        console.log(b)
    },

    // With Argument With Return Function in Object
    addNumbers: function(num1, num2) {
      return num1 * num2;
    }
  
}

//  1. Dot Notation 
console.log(" Dot Notation ")
console.log(person)
console.log(person.name)
console.log(person.age)

//  2. Breket ["key"] Notation
console.log("Breckrt ['key'] Notation") 
console.log(person["email"])
console.log(person["contact"])



//  Function calling in Object
console.log("Function Calling in Object")

//  No Argument No Return Function 
person["sentance"]()

//  No Argument with Return Function 
console.log(person.hello())

// With Argument No Return Function
let say = person.world("Naitik", "Harshil")

// With Argument With Return Function
let result = person.addNumbers(25, 5);
console.log(result); // Output: 125





//  Object Methoed :

// 1. object Proparty { vaule }  Update
console.log("Object value Upadte")
person.age = 24 ;
console.log(person);

// 2. Object property { key : value } Insert 
console.log("Object key & value Insert")
person.nationallty = "indian";
console.log(person)

// 3. Object Property { key : value } Delete
console.log("Object key & value delete")
delete person.email
console.log(person)