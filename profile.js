// লগইন চেক
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

if (!userData) {
    alert("ইউজার পাওয়া যায়নি! আবার লগইন করুন।");
    window.location.href = "login.html";
}

// প্রোফাইল ডাটা দেখানো
document.getElementById("userName").innerText = userData.name || "নাম নেই";
document.getElementById("userPhone").innerText = userData.phone;
document.getElementById("userBalance").innerText = (userData.balance || 0) + " ৳";
document.getElementById("userEmail").innerText = userData.email || "ইমেইল নেই";

// হোমে ফেরত
function goHome() {
    window.location.href = "home.html";
}
