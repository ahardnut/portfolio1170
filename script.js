// Show browser notification
document.getElementById("notifyButton").addEventListener("click", function() {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
          new Notification("This is a browser notification!");
        }
      });
    } else {
      new Notification("This is a browser notification!");
    }
  });
  
  // Change color scheme
  document.getElementById("colorScheme1").addEventListener("click", function() {
    document.body.style.backgroundColor = "#B0E0E6";
    document.body.style.color = "#333";
  });
  
  document.getElementById("colorScheme2").addEventListener("click", function() {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  });

  // Event Handler for "Click Me" button
document.getElementById("eventButton").addEventListener("mouseover", function() {
    alert("You hovered over the button!");
  });
  
  // Conditional Feature
  var conditionalDiv = document.getElementById("conditionalFeature");
  
  var currentTime = new Date().getHours();
  var greeting;
  
  if (currentTime < 12) {
    greeting = "Good morning!";
  } else if (currentTime < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }
  
  conditionalDiv.innerHTML = "<p>" + greeting + "</p>";

  // Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Validate first name and last name format
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var namePattern = /^[A-Za-z]+$/;
  if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
      alert("First name and last name should only contain alphabetical characters (A-Z, a-z).");
      return;
  }
  
  // Validate email format
  var email = document.getElementById("email").value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email) || !email.endsWith("@dal.ca")) {
      alert("Please enter a valid Dalhousie University email address.");
      return;
  }

  // Validate password length
  var password = document.getElementById("password").value;
  if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
  }

  // If both email and password are valid, you can proceed with form submission or any other action
  alert("Form submitted successfully!");
});
  