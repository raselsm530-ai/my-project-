// Fixed Deposit Numbers
const fixedNumbers = {
    "bkash": "01797632229",
    "nagad": "01797632229",
    "rocket": "01797632229"
};

function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    const paymentNumber = document.getElementById("paymentNumber");

    if (!method) {
        paymentNumber.textContent = "মেথড নির্বাচন করুন";
        return;
    }

    paymentNumber.textContent = method + ": " + fixedNumbers[method];
}

function depositMoney() {
    const amount = document.getElementById("depositAmount").value;
    const method = document.getElementById("paymentMethod").value;
    const user = localStorage.getItem("currentUser");

    if (!amount || amount <= 0) {
        alert("সঠিক এমাউন্ট লিখুন");
        return;
    }

    if (!method) {
        alert("পেমেন্ট মেথড নির্বাচন করুন");
        return;
    }

    const deposit = {
        user: user,  // ⭐ USER TRACKING
        amount: amount,
        method: method,
        status: "Pending",
        date: new Date().toLocaleString()
    };

    let allDeposits = JSON.parse(localStorage.getItem("deposits")) || [];
    allDeposits.push(deposit);

    localStorage.setItem("deposits", JSON.stringify(allDeposits));

    alert("ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে!\nস্ট্যাটাস: Pending");

    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("paymentNumber").textContent = "মেথড নির্বাচন করুন";
}
