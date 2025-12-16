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

function submitDeposit() {
    let amount = parseInt(document.getElementById("depositAmount").value);
    let trxId = document.getElementById("trxId").value.trim();

    if (!amount || amount <= 0) {
        alert("সঠিক ডিপোজিট এমাউন্ট লিখুন!");
        return;
    }

    if (trxId === "") {
        alert("Transaction ID দিন!");
        return;
    }

    // Pending deposit array
    if (!userData.pendingDeposits) {
        userData.pendingDeposits = [];
    }

    userData.pendingDeposits.push({
        amount: amount,
        trxId: trxId,
        number: "01797632229",
        method: "Bkash/Nagad/Rocket",
        status: "Pending",
        date: new Date().toLocaleString()
    });

    // Transaction history
    if (!userData.transactions) {
        userData.transactions = [];
    }

    userData.transactions.push({
        type: "Deposit Request",
        amount: amount,
        trxId: trxId,
        status: "Pending",
        date: new Date().toLocaleString()
    });

    localStorage.setItem(currentPhone, JSON.stringify(userData));

    alert("✅ ডিপোজিট রিকোয়েস্ট সফলভাবে সাবমিট হয়েছে\nঅ্যাডমিন কনফার্ম করার পর ব্যালেন্স যোগ হবে");

    window.location.href = "home.html";
}
