document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
  
    xhr.open("POST", "contact.php", true);
    
    xhr.onload = function() {
      if (xhr.status == 200) {
        document.getElementById("status").innerHTML = "Thank you! Your message has been sent.";
        document.getElementById("contact-form").reset();
      } else {
        document.getElementById("status").innerHTML = "Error occurred. Please try again later.";
      }
    };
  
    xhr.send(formData);
  });
  