// চেক করা ইউজার লগইন আছে কিনা
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// লগইন করা ইউজারের নাম্বার আনা
let currentPhone = localStorage.getItem("currentUser");

if (!currentPhone) {
    alert("ইউজার পাওয়া যায়নি! আবার লগইন করুন।");
    window.location.href = "login.html";
}

// সব ইউজারদের লিস্ট আনা
let users = JSON.parse(localStorage.getItem("users")) || [];

// লগইন করা ইউজার খোঁজা
let userIndex = users.findIndex(u => u.phone === currentPhone);

if (userIndex === -1) {
    alert("ইউজার পাওয়া যায়নি!");
    window.location.href = "login.html";
}

// ইউজারের পূর্ণ ডেটা
let userData = users[userIndex];

// ওয়েলকাম টেক্সট
document.getElementById("welcomeText").innerText = "স্বাগতম, " + userData.phone;

// ব্যালেন্স দেখানো
let balance = userData.balance ? userData.balance : 0;
document.getElementById("balance").innerText = balance + " ৳";

// লগআউট
function logoutUser() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}
