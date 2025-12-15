/* লগইন চেক */
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

if (!userData) {
    alert("ইউজার পাওয়া যায়নি!");
    window.location.href = "login.html";
}

/* ডাটা দেখানো */
document.getElementById("profilePhone").innerText =
    "মোবাইল: " + userData.phone;

document.getElementById("profileBalance").innerText =
    "ব্যালেন্স: " + (userData.balance || 0) + " ৳";

document.getElementById("profilePin").innerText =
    "উত্তোলন পিন: " + userData.withdrawPin;

/* হোম */
function goHome() {
    window.location.href = "home.html";
}
