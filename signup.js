document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signup-form").addEventListener("submit", function(event) {
      event.preventDefault();
      
      // Get form values
      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      
      // Perform form validation (you can add more complex validation logic here)
      if (!username || !email || !password) {
        alert("Please fill in all fields.");
        return;
      }
      
      // Create an object to store user data
      var userData = {
        username: username,
        email: email,
        password: password
      };
      
      // You can perform further processing here, such as sending the data to a server
      
      // For demonstration purposes, log the user data to the console
      console.log("User data:", userData);
      
      // Optionally, redirect the user to another page after sign-up
      // window.location.href = "welcome.html";
    });
  });
  