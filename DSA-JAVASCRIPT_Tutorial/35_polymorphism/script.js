// polymorphism : 

//  Method overloding  -  compiler time ploymorthism
console.log(" 01. Method overloding")

class hello{ 
     add(a, b, c = 0){
    }
}

class test extends hello {
    add(a, b, c = 0 ){
        return a + b + c; 
    }
    
 }


 let obj = new test();
console.log(obj.add(11, 22))
console.log(obj.add(11, 22, 33))


//  Method Overriding -  run time polymorthism
console.log(" 02. Method overriding")

class  rahul {
       name(){
        console.log("student 01 is rahul ")
       }
}

class rohit extends rahul{
    name(){
        console.log("student 02 is rohit")
    }
}

let obj_1  = new rahul();
obj_1.name();

let obj_2  = new rohit();
obj_2.name();