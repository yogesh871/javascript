

document.querySelector("form").addEventListener("submit",(event) => {
    event.preventDefault(); 

   
    $("#firstnameError").html( " ");
    $("#lastnameError").html( " ");
    $("#emailError").html( " ");
    $("#passwordError").html( " ");
    $("#genderError").html( " ");


    const firstname = $("#firstname").val();
    const lastname = $("#lastname").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const gender = $('input[name="gender"]:checked').val();

    
  console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(password);
  console.log(gender);


    if (firstname == "") {
      $("#firstnameError").html( "First name is required.");
    }

    if (lastname == "") {
      $("#lastnameError").html("Last name is required.");
    }
    
    if (email == "") {
      $("#emailError").html( "Email is required.");
 }

 if (!password) {
  $("#passwordError").html("Password is required.");
 
} else {
  const message = [];
  if (password.length < 8) message.push("Minimum 8 characters");
  if (!/[A-Z]/.test(password)) message.push("An uppercase letter");
  if (!/[a-z]/.test(password)) message.push("A lowercase letter");
  if (!/[0-9]/.test(password)) message.push("A number");
  if (!/[!@#$%*(){}><?.,|]/.test(password)) message.push("A special symbol");
  if (message.length > 0) {
    $("#passwordError").html("Password must required: " + message.join(", "));
    
  }
}


   
  

    if (!gender) {
      $("#genderError").html("Please select your gender.");
    }
  });