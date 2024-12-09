

// ---- OUTPUT OF JAVASCRIPT ---


// // console.log Methods
// console.log("jenish")
// console.log(20)
// console.log("jenish", 99 + 1)
// console.warn("warning")
// console.error("error")

// // document.write Methods
// // document.write("jenish world")
// // document.write(10) 
// // document.write("jenish world", 10 + 32)

// // inter HTML Methods
document.getElementById("text").innerHTML = "hellow"

// // alert Methods
// alert("jenish")



// ---- VARIABLE N JAVASCRIPT

// < ----- var - variable  ---- >

  var a = 7;
//  console.log(a)

  var a = "javascript"
  console.log(a)

//  var - global scope 
var  b =  123
console.log(b)
{
    var b = "global scope"
    console.log(b)
}
console.log(b)



// < ----- let - variable  ---- >

let c = 10
console.log(c)

// Same variable can not declerd becouse let is block scope
//  let c = 10 


// let - block scope
let d = 20
console.log(d)
{
    let d = "hello"
    console.log(d)
}
console.log(d)


// < ----- const - variable  ---- >
const e = 30
console.log(e)

//  value is constent not be change in const varable 

const f = 31
console.log(f)
{
    const f = "const"
    console.log(f)
}
console.log(f)
// Same variable can not declerd becouse let is block scope
