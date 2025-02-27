// 6. Array.isArray : 
let data = [11, 22, 33, 44, 55, 66, 77];
console.log(Array.isArray(data));


//  7. includes Methoed :
console.log(data.includes(13));   // element is there not in array  - return false
console.log(data.includes(22));   // element is there  in array  - return true

//  8. ForEach Methoed : 
data.forEach((value, index) => {
    console.log(index, "=> ", value);
})

// 9. filter Methoed : 
let element = [12, 32, 34, 21, 56, 92, 45]
let a = element.filter((value, index) => {
    return 20 < value ;
})
console.log(a)


//  10. evary Methoed :
let b = element.every((value, index) => {
    return value % 2 === 0
})
console.log(b)


//  11. evary Methoed :
let c = element.some((value, index) => {
    return value % 2 === 0
})
console.log(c)


// 12. indexOf Methoed : 
console.log(element.indexOf(21));   // index = 3
console.log(element.indexOf(23));   // index = -1


// 13. Map Methoed : 
let d = element.map((value, index) => {
    return value * 2
})
console.log(d)  //  Update Array
console.log(element)  // old Array