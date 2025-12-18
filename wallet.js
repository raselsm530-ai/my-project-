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

    if (!amount || amount <= 0) {
        alert("সঠিক এমাউন্ট লিখুন");
        return;
    }

    if (!method) {
        alert("পেমেন্ট মেথড নির্বাচন করুন");
        return;
    }

    // Corrected:
    const user = localStorage.getItem("currentUser");

    const deposit = {
        user,
        amount: Number(amount),
        method,
        status: "pending",
        date: new Date().toLocaleString()
    };

    let allDeposits = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    allDeposits.push(deposit);

    localStorage.setItem("pendingDeposits", JSON.stringify(allDeposits));

    alert("ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে (Pending)");

    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("paymentNumber").textContent = "মেথড নির্বাচন করুন";
}
