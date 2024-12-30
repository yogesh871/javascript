//   String Methoeds 

// 1. slice  -  (start index, end index) - 2,3,4,5

let a = `javascript tutorial`
console.log(a.slice(2, 6));

// 2. substr - (strat index, length) - 2, 3, 4, 5, 6, 7  (6 char)
console.log(a.substr(2, 6));

// 3. toUppercase -  text convert to upper-case
console.log(a.toUpperCase())

// 4. toLowercase -  text convert to Lower-case
console.log(a.toLowerCase())


// 6. trim - remove extra space in string  (start trim , end trim )
let b = `    javascript tutorial    `
console.log(b.trim())

// 7. pad - 4223 xxxx xxxx  (padStart, padEnd)
let aadhar = `203439902125`;
let first4Digits = aadhar.slice(-4);
let aadharNumber = first4Digits.padEnd(aadhar.length, 'x');
// let aadharNumber = first4Digits.padStart(aadhar.length, 'x');

console.log(aadharNumber);
// output is = 2034 xxxx xxxx


// Date Methoeds 

// 1. current date : 
//   let date = new Date()
//   console.log(date);

//  menauly set date :
let date = new Date(2020, 3, 23, 12, 34)
console.log(date);

console.log(date.getFullYear())
console.log(date.getMonth())

// 2. get date and set date : 
let d = new Date('August 19, 1975 23:15:30 GMT-3:00');
console.log(d)

console.log(d.getUTCDate());
d.setUTCDate(19);

console.log(d.getUTCDate());

// 3. get time and set time : 
console.log(d.getTime());


// Math Function (Methoed) : 

// 1. Math.floor methoed :
console.log(Math.floor(2.6));  //  Lower number put

// 2. Math.ceil
console.log(Math.ceil(2.6));  //  high number put

// 3. Math.round
console.log(Math.round(2.6));  //  2.0 - 2.5 Lower number put  &&  2.5 - 3.0 High number put

// 4. Math.random
console.log(Math.random() * 10) //  random number ganret between  0 to givan number
//  Defult value is between  0 to 1 number 

// 5. Math.sqrt 
console.log(Math.sqrt(81))  // given number squre root as a example 81 - 9

// 6. Math.power
console.log(Math.pow(3,5))  //  3*3*3*3*3  (3,5) - 243 