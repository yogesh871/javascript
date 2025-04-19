

//  Pattents: 
 
console.log("patternts:")

console.log("square patternt" )
let  i, j, data;
 
for(i = 1; i <=5; i++){
    data = " ";
    for(j = 1; j <= 5; j++){
        data += i + " ";
    }
    console.log(data)
}


// //  Triangle Pattern - 1:
console.log("Triangle Pattern - 1")
{
    let i , j, data;
    
    for (i =1; i <= 5; i++ ){
        data = " "
        for (j =1; j <= i; j++){
            data += i + " "
        }
        console.log(data)
    }
}  

// //  Triangle Pattern - 2
console.log("Triangle Pattern - 2")
{
    let i , j, data , variable = 1;
    
    for (i =1; i <= 5; i++ ){
        data = " "
        for (j =1; j <= i; j++){
            data += variable + " "
            variable++
        }
        console.log(data)
    }
}  

//  Triangle Pattern - 3
console.log("Triangle Pattern - 3")
{
    let i,j ;
    
    for(i=4 ; i>=1 ; i--){
        let data = ""
        for(j=i; j>=1 ; j--){
            data += j + " ";
        }
        console.log(data ," ");
    }
}


//  Triangle Pattern - 4
console.log("Triangle Pattern - 4")
{
    let i , j;
    
    let data = " ";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 6 - i ; j++) {
            data += j;
            
        }
        console.log(data ," ")
    }
}

//  Triangle Pattern - 5
console.log("Triangle Pattern - 5")
{
    let data = "";
    for (let i = 1; i <= 5; i++ ) {
        for (let j = 1; j <= 5 - i; j++) {
      data += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        data += k;
    }
    data += "\n";
}
console.log(data);
}
    
