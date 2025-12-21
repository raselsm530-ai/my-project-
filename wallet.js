// FIXED PAYMENT NUMBERS
const fixedNumbers = {
    "bkash": "01797632229",
    "nagad": "01797632229",
    "rocket": "01797632229"
};

// UPDATE NUMBER WHEN METHOD CHANGES
function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    const numberBox = document.getElementById("paymentNumber");

    if (fixedNumbers[method]) {
        numberBox.innerText = `${method}: ${fixedNumbers[method]}`;
    } else {
        numberBox.innerText = "মেথড নির্বাচন করুন";
    }
}

// MAIN DEPOSIT FUNCTION
function depositMoney() {
    const amount = document.getElementById("depositAmount").value.trim();
    const method = document.getElementById("paymentMethod").value.trim();
    const trxidInput = document.getElementById("trxid").value.trim();

    // validate
    if (!amount || !method) {
        alert("Amount এবং Method দিতে হবে!");
        return;
    }

    // trx optional
    const trxid = trxidInput !== "" ? trxidInput : "N/A";

    // GET LOGGED IN USER
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
        alert("Please login first!");
        return;
    }

    // CREATE DEPOSIT OBJECT
    const depositData = {
        user: currentUser,                     // phone number saved
        amount: Number(amount),
        method: method,
        number: fixedNumbers[method],          // fixed wallet number
        trxid: trxid,
        status: "pending",
        date: new Date().toLocaleString()
    };

    // PUSH TO LOCAL STORAGE
    let pendingDeposits = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    pendingDeposits.push(depositData);

    localStorage.setItem("pendingDeposits", JSON.stringify(pendingDeposits));

    alert("ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে!");

    // reset
    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("trxid").value = "";
    updateNumber();
}
