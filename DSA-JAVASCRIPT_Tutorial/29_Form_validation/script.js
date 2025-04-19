document.querySelector("form").addEventListener("submit",(event) => {
    event.preventDefault(); 

   
    document.getElementById("firstnameError").innerHTML = "";
    document.getElementById("lastnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";


    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    
  console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(password);
  console.log(gender);


    if (firstname == "") {
      document.getElementById("firstnameError").innerHTML = "First name is required.";
    }

    if (lastname == "") {
      document.getElementById("lastnameError").innerHTML = "Last name is required.";
    }
    
    if (email == "") {
      document.getElementById("emailError").innerHTML = "Email is required.";
 }

 if (password === "") {
  document.getElementById("passwordError").innerHTML = "Password is required.";
} else {
  const message = []; 

  if (password.length < 8) {
    message.push("Minimum 8 characters");
  }
  if (!/[A-Z]/.test(password)) {
    message.push("An uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    message.push("A lowercase letter");
  }
  if (!/[0-9]/.test(password)) {
    message.push("A number");
  }
  if (!/[!@#$%*(){}><?.,|]/.test(password)) {
    message.push("A special symbol");
  }
  if (message.length > 0) {
    document.getElementById("passwordError").innerHTML = "Password must include: " + message.join(", ");
  }
}

    if (!gender) {
      document.getElementById("genderError").innerHTML = "Please select your gender.";
    }
  });


