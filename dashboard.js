// লগইন চেক
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

let currentUser = localStorage.getItem("currentUser");

// সব ইউজার লোড
let users = JSON.parse(localStorage.getItem("users")) || [];

// ইউজার খুঁজে বের করা
let user = users.find(u => u.phone === currentUser);

if (!user) {
    alert("ইউজার পাওয়া যায়নি!");
    window.location.href = "login.html";
}

// ব্যালেন্স লোড
let balances = JSON.parse(localStorage.getItem("balances")) || {};

let balance = balances[currentUser] || 0;

// UI তে দেখানো
document.getElementById("welcomeText").innerText = "স্বাগতম, " + user.phone;
document.getElementById("balance").innerText = balance + " ৳";

// logout
function logoutUser() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}
