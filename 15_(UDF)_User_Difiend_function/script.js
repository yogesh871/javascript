
// 1. Function As a Variable : 

let a = function (){
    console.log("function as a variable")
}
 a();


// 2. Arrow Function :

let hello = () => {
    console.log("hello world")
}
hello ();

    //  one line function   
       let sum  = (x, y) =>  x + y
       console.log(sum(10,20));


// 3. IIFE (Immidatly In Wocking Function Exprestion):
// only without return function creating

(function (){
    console.log(" IIFC  called ");
}) ();


// 4. Nested Function : 

function outer (){
    console.log("Outer function called ....")
     function inner (){
         console.log("Inner function called ...")
     }
 inner();
}
outer();


// 5. Clouser Concept : 

function Outer () {
    console.log("Outer function called ...")
    function Inner (){
        console.log("Inner function called ...")
    };
};
outer();