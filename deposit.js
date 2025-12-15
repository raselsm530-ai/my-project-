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
    let amount = document.getElementById("depositAmount").value.trim();
    let trxId = document.getElementById("trxId").value.trim();
    let screenshot = document.getElementById("screenshot").files[0];

    if (!amount || amount <= 0) {
        alert("সঠিক এমাউন্ট দিন!");
        return;
    }

    if (!trxId) {
        alert("Transaction ID দিন!");
        return;
    }

    if (!screenshot) {
        alert("স্ক্রিনশট আপলোড করুন!");
        return;
    }

    /* Pending Deposit List */
    let deposits = JSON.parse(localStorage.getItem("pendingDeposits")) || [];

    deposits.push({
        phone: currentPhone,
        amount: amount,
        trxId: trxId,
        time: new Date().toLocaleString(),
        status: "Pending"
    });

    localStorage.setItem("pendingDeposits", JSON.stringify(deposits));

    alert("ডিপোজিট সাবমিট হয়েছে ✅\nঅ্যাডমিন ভেরিফাই করলে ব্যালেন্স যোগ হবে");

    window.location.href = "home.html";
}
