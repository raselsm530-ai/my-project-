/* =========================
   লগইন চেক
========================= */
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

/* =========================
   ইউজার লোড
========================= */
let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

if (!userData) {
    alert("ইউজার পাওয়া যায়নি!");
    window.location.href = "login.html";
}

/* =========================
   Deposit Request
========================= */
function depositRequest() {
    let amount = parseInt(document.getElementById("depositAmount").value);
    let method = document.getElementById("depositMethod").value;
    let trx = document.getElementById("trxId").value.trim();

    if (!amount || amount <= 0) {
        alert("সঠিক এমাউন্ট লিখুন!");
        return;
    }

    if (!method) {
        alert("ডিপোজিট মেথড সিলেক্ট করুন!");
        return;
    }

    if (!trx) {
        alert("TRX ID দিন!");
        return;
    }

    if (!userData.depositRequests) {
        userData.depositRequests = [];
    }

    userData.depositRequests.push({
        amount: amount,
        method: method,
        trx: trx,
        status: "Pending",
        date: new Date().toLocaleString()
    });

    localStorage.setItem(currentPhone, JSON.stringify(userData));

    alert("ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে ⏳");

    document.getElementById("depositAmount").value = "";
    document.getElementById("trxId").value = "";

    window.location.href = "home.html";
}
