// Fixed Deposit Numbers
const fixedNumbers = {
    "bkash": "01797632229",
    "nagad": "01797632229",
    "rocket": "01797632229"
};

// Update number when method selected
function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    const paymentNumber = document.getElementById("paymentNumber");

    if (!method) {
        paymentNumber.textContent = "মেথড নির্বাচন করুন";
        return;
    }

    paymentNumber.textContent = `${method}: ${fixedNumbers[method]}`;
}

// Deposit request
function depositMoney() {
    let amount = document.getElementById("depositAmount").value;
    let method = document.getElementById("paymentMethod").value;

    if (!amount || !method) {
        alert("পরিমাণ ও মেথড নির্বাচন করুন!");
        return;
    }

    let deposits = JSON.parse(localStorage.getItem("pendingDeposits")) || [];

    deposits.push({
        user: localStorage.getItem("username"),
        amount,
        method,
        number: fixedNumbers[method],
        time: new Date().toLocaleString()
    });

    localStorage.setItem("pendingDeposits", JSON.stringify(deposits));

    alert("ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে!");

    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("paymentNumber").textContent = "মেথড নির্বাচন করুন";
}
