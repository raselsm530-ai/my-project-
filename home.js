/* ইউজার লগইন আছে কিনা চেক */
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

/* ইউজার ডাটা লোড করা */
let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

if (!userData) {
    alert("ইউজার পাওয়া যায়নি! আবার লগইন করুন।");
    window.location.href = "login.html";
}

/* ওয়েলকাম টেক্সট সেট */
document.getElementById("welcomeText").innerText =
    "স্বাগতম, " + userData.phone + " 🎉";

/* ব্যালেন্স দেখানো */
let balance = userData.balance ? userData.balance : 0;
document.getElementById("balanceText").innerText = balance + " ৳";

/* লগআউট ফাংশন */
function logoutUser() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}
