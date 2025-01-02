
//  Object in Object & Array

let person = {
    name : "joun piter",
    age : 26,
    gender : "male",
    hobbies : ["reading", "Music", "Plying Cricket"],
    address : {
        line1: "Royal arcade",
        line2: "sarthana jakatnaka",
        city: "surat", 
        pincode : 364295
    }
}

//  Dot Notation 
console.log(person.name)
console.log(person.gender)

// Breket ["kay"] Nonation 
console.log(person["age"])

// Dot Nonation Array
console.log(person.hobbies)
console.log(person.hobbies[2])

// Brecket ["Key"] Notation Array
console.log(person["hobbies"]) 
console.log(person["hobbies"][1]) 

// Dot Notation Object
console.log(person.address)
console.log(person.address.line1)

// Brecket ["Key"] Notation Object
console.log(person["address"])
console.log(person["address"]["city"])



//  For in loop ( object)

// only vaule
 for (let i in person) {
    console.log(person[i])
 } 

// key & value 
 for (let i in person) {
    console.log(i, person[i])
 } 


//  For in loop (Array)
   let data  = [12, 34, 43, 67, 85, 98]

// only vaule
  for( let i in data) {
    console.log(data[i])
  }

// index & value
  for( let i in data) {
    console.log(i, data[i])
  }


//  For of loop (only use in  array)

// only vaule get
for (let i of data) {
    console.log(i)
}


// Break and countinue  in  for of loop

//  Break :
for(let i of data){
    if(i == 43){
        break
    }
    console.log(i)
}
//  BCountinue :
for(let i of data){
    if(i == 43){
        continue   //   43 is sceep
    }
    console.log(i)
}



//  02/01/2025   = >  Task 

    let object = {
        name: "jack kallis",
        age: 46,
        jobs: ["cricketer", "commentator", "coach", "mentor"],
        gender: "male"
    }
    
    for (let i in object) {
        if (i == "jobs") {
            console.log(`${i} =>`);
            for (let job of object[i]) {
                console.log(`${job}`);
            }
        } else {
            console.log(`${i} => ${object[i]}`);
        }
    }

