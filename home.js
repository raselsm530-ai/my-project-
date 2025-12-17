// User check
let user = localStorage.getItem("currentUser");

if (!user) {
    // যদি লগইন না থাকে
    window.location.href = "login.html";
}

// Welcome text
document.getElementById("welcomeText").innerText =
    "স্বাগতম, " + user;

// Balance show
let balance = localStorage.getItem("balance_" + user);
balance = balance ? parseFloat(balance) : 0;

document.getElementById("balance").innerText =
    balance + " ৳";

// Logout
function logoutUser() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}
