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

/* Withdraw Function */
function withdrawMoney() {

    let amount = parseInt(document.getElementById("withdrawAmount").value);
    let method = document.getElementById("paymentMethod").value;
    let account = document.getElementById("accountNumber").value.trim();
    let pin = document.getElementById("withdrawPin").value.trim();

    if (!amount || amount <= 0) {
        alert("সঠিক এমাউন্ট লিখুন!");
        return;
    }

    if (!method) {
        alert("পেমেন্ট মেথড নির্বাচন করুন!");
        return;
    }

    if (!account || account.length < 11) {
        alert("সঠিক মোবাইল নাম্বার দিন!");
        return;
    }

    if (pin !== userData.withdrawPin) {
        alert("ভুল উত্তোলন পিন!");
        return;
    }

    if (userData.balance < amount) {
        alert("পর্যাপ্ত ব্যালেন্স নেই!");
        return;
    }

    /* ব্যালেন্স আপডেট */
    userData.balance -= amount;

    /* ট্রানজেকশন হিস্টরি */
    if (!userData.transactions) {
        userData.transactions = [];
    }

    userData.transactions.push({
        type: "Withdraw",
        amount: amount,
        method: method,
        account: account,
        status: "Pending",
        date: new Date().toLocaleString()
    });

    localStorage.setItem(currentPhone, JSON.stringify(userData));

    alert("উত্তোলন রিকুয়েস্ট পাঠানো হয়েছে ⏳");

    window.location.href = "home.html";
}
