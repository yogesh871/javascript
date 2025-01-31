
let editfirstname = document.getElementById("editfirstname");
let editlastname = document.getElementById("editlastname");
let editemail = document.getElementById("editemail");
let editpassword = document.getElementById("editpassword");

let addEmployeeDiv = document.querySelector("#loginForm")
let editEmployeeDiv = document.querySelector("#EditForm")

let Updateindex = null;

document.querySelector("#loginForm").addEventListener("submit",(event) => {
    event.preventDefault(); 

   
    document.getElementById("firstnameError").innerHTML = "";
    document.getElementById("lastnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";


    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    
  console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(password);

    let formData = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,

    };
  
    let employee = JSON.parse(localStorage.getItem("employee")) || [];
    employee.push(formData);
  
    localStorage.setItem("employee", JSON.stringify(employee));
    document.querySelector("form").reset()

    loadData();

  });

  function loadData() {
    let allData = JSON.parse(localStorage.getItem("employee"))
    // console.log(allData)

    let result = "";
    allData.forEach((record, index) => {
      let row = ` <tr> 
      <td> ${index + 1}</td>
      <td> ${record.firstname}</td>
      <td> ${record.lastname}</td>
      <td> ${record.email}</td>
      <td><button onclick="DeleteData(${index})"><img src="img/trash.png" alt="" width="15px" padding-left="10px"></button> </td>
      <td><button onclick="EditData(${index})"><img src="img/edit.png" alt="" width="15px"></button></td> 
      </tr>`

      result = result + row;
      
    });
    document.querySelector("tbody").innerHTML = result;
  }

  function DeleteData (index){
    let allData = JSON.parse(localStorage.getItem("employee"))
   allData.splice(index, 1);
   localStorage.setItem("employee", JSON.stringify(allData));
     loadData()
  }
 loadData();
 


 function EditData(index) {
  let allData = JSON.parse(localStorage.getItem('employee'))
  // console.log(allData[index])
  let record = allData[index]

  editfirstname.value = record.firstname
  editlastname.value = record.lastname
  editemail.value = record.email
  editpassword.value = record.password
  

  Updateindex = index

  addEmployeeDiv.style.display = "none"
  editEmployeeDiv.style.display = "block"
}

document.querySelector("#EditForm").addEventListener("submit",(event) => {
  event.preventDefault(); 

  let allData = JSON.parse(localStorage.getItem('employee'))

  allData[Updateindex] = {
      firstname: editfirstname.value,
      lastname: editlastname.value,
      email: editemail.value,
      password: editpassword.value,
  }

  localStorage.setItem("employee", JSON.stringify(allData));
  loadData();

  addEmployeeDiv.style.display = "block"
  editEmployeeDiv.style.display = "none"
});