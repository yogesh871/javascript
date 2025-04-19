// Timimg_Function :

//  1. setTimeOut Function :   Only executed one time
setTimeout(() => {
    console.log("Settimeout called ....!")
}, 3000);

//  2. setInterval Function :  executed every set Inter time
setInterval(() => {
    console.log("SetInterval called ....!")
}, 5000);

//  3. clearTimeOut function 
let id = setTimeout(() => {
     console.log("Hello , good morning")
}, 3000);
console.log("setTimeOut :" , id)
clearTimeout(id)


//  3. clearTimeOut function 
let ID = setInterval(() => {
     console.log("Hello , good morning")
}, 3000);
console.log("setinterval :" , ID)
clearInterval(ID)