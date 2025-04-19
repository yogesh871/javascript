 
 console.log("Question No. 01")
 
 class school {

    student(name, email, contactNum){
        console.log("Name : ", name)
        console.log("Email : ", email)
        console.log("Contact Number: ", contactNum)

    }

    faculty(name, email, contactNum){
        console.log("Name : ", name)
        console.log("Email : ", email)
        console.log("Contact Number: ", contactNum)

    }

 }

 let obj = new  school();
 obj.student("Aman", "aman@9008gmail.com",9876543210)
 obj.student("Niraj", "niraj@0308gmail.com", 6543210987)


 console.log("Question No. 02")

  
 class person {
    constructor (name , age){
        this.name = name;
        this.age = age;
    }
 }

 class employee extends person{
    employeeinfo(){
        return ` Employee name ${this.name} and his age is ${this.age}`
    }
 }

 let emp = new employee("yogesh", 22);
 console.log(emp.employeeinfo());



 console.log("Question No .03")

 class Employee {
     constructor (){
        console.log("constructor called .....!")
     }
 }

 let Emp  = new Employee();


  console.log("Question No .04")


  class shape{
     circle(r){
        console.log("area of circle is : " ,3.14 * r *r )
     }

    rectangle(w, h){
        console.log("area of rectangle is :" ,w * h)

     }
  }
  let shap  = new shape();
  shap.circle(15);
  shap.rectangle(20, 12);

