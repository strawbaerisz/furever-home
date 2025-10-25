document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logout-btn");

  // If user is not signed in, redirect them back to login
  if (sessionStorage.getItem("signedIn") !== "true") {
    alert("Please sign in first before accessing this page.");
    window.location.href = "index.html";
    return;
  }

  // Show the logout button if signed in
  logoutBtn.style.display = "inline-flex";

  // Handle logout
  logoutBtn.addEventListener("click", function () {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      sessionStorage.removeItem("signedIn");
      alert("You have successfully logged out.");
      window.location.href = "index.html";
    }
  });
});
