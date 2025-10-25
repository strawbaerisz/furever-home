document.addEventListener("DOMContentLoaded", function () {
  const signinBtn = document.getElementById("signin-btn");
  const navLinks = document.querySelectorAll("nav a");
  const signinBox = document.getElementById("signin-box");
  const loggedInContent = document.getElementById("logged-in-content");
  const logoutBtn = document.getElementById("logout-btn");
  let signedIn = false;

  // Disable all nav links except Home until signed in
  navLinks.forEach((link) => {
    if (!link.classList.contains("home-btn")) {
      link.addEventListener("click", function (e) {
        if (!signedIn) {
          e.preventDefault();
          alert("Please sign in first before accessing other pages.");
        }
      });
    }
  });

  // Email validation
  function isValidEmail(email) {
    if (!email.includes("@")) return false;
    const parts = email.split("@");
    if (parts.length !== 2) return false;

    const localPart = parts[0];
    const domainPart = parts[1];
    if (localPart.length === 0 || domainPart.length === 0) return false;
    if (!domainPart.includes(".")) return false;
    if (domainPart.startsWith(".") || domainPart.endsWith(".")) return false;
    if (email.includes(" ")) return false;
    return true;
  }

  // Handle sign-in
  signinBtn.addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "") {
      alert("Please enter your name.");
      return;
    }
    if (email === "") {
      alert("Please enter your email.");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address (e.g. name@example.com).");
      return;
    }
    if (password === "") {
      alert("Please enter your password.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    alert("Welcome, " + name + "! You can now navigate to other pages.");
    signedIn = true;

    signinBox.style.display = "none";
    loggedInContent.style.display = "block";
    logoutBtn.style.display = "inline-flex";

    // Save login session
    sessionStorage.setItem("signedIn", "true");
  });

  // If already logged in
  if (sessionStorage.getItem("signedIn") === "true") {
    signedIn = true;
    signinBox.style.display = "none";
    loggedInContent.style.display = "block";
    logoutBtn.style.display = "inline-flex";
  }

  // Handle logout
  logoutBtn.addEventListener("click", function () {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      sessionStorage.removeItem("signedIn");
      signedIn = false;
      signinBox.style.display = "block";
      loggedInContent.style.display = "none";
      logoutBtn.style.display = "none";
      alert("You have successfully logged out.");
    }
  });
});
