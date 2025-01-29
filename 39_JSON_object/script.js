// JSON => Javascript Object Notation 


//  javascript object => 
console.log("01. javascript object")
let jsobj = {
    name : "umesh",
    email : "umesh@0308gmail.com",
    age: 22
}
console.log(jsobj)


//  json object => 
console.log("02. json object")
let jsonobj = `{
    "name" : "sanjay",
    "email": "sanjay@0202gmail.com",
    "age" : 22}`
console.log(jsonobj)


//  javascript object convert to json object :
console.log("03. javascript object convert to json object")
let jsonobj_1 = JSON.stringify(jsobj)

console.log(jsobj)
console.log(jsonobj_1)


//  json object convert to javascript object :
console.log("04. json object convert to javascript object")
let jsobj_1 = JSON.parse(jsonobj);

console.log(jsonobj);
console.log(jsobj_1);



// localSotrage :-

localStorage.setItem("Henil", "Today i am bored....");

let obj = [{
    title: "Gita",
    category: "Holybook",
    pages: 700,
}]
localStorage.setItem("Book", JSON.stringify(obj) )

let data = JSON.parse(localStorage.getItem('Book'))
console.log(data);
document.querySelector('h3').innerHTML = data[0].category