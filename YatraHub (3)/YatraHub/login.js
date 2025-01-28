// Simulated user data
const user = {
    username: "admin",
    password: "admin123",
  };
  
  // Handle login process
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
  
    const enteredUsername = document.getElementById("username").value.trim();
    const enteredPassword = document.getElementById("password").value;
  
    const errorMsg = document.getElementById("error-msg");
  
    // Basic validation
    if (enteredPassword.length < 6) {
      errorMsg.textContent = "Password must be at least 6 characters long.";
      errorMsg.style.display = "block";
      return;
    }
  
    if (enteredUsername === user.username && enteredPassword === user.password) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "index.html";
    } else {
      errorMsg.textContent = "Invalid username or password.";
      errorMsg.style.display = "block";
  
      // Clear the inputs
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  });
  
  // Dynamic background change
  document.body.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
  
    document.body.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
  });
  