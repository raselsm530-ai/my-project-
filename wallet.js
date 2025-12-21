const fixedNumbers = {
    "bkash": "01797632229",
    "nagad": "01797632229",
    "rocket": "01797632229"
};

function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    const numberBox = document.getElementById("paymentNumber");

    if (fixedNumbers[method]) {
        numberBox.innerText = `${method}: ${fixedNumbers[method]}`;
    } else {
        numberBox.innerText = "মেথড নির্বাচন করুন";
    }
}

function depositMoney() {
    const amount = document.getElementById("depositAmount").value;
    const method = document.getElementById("paymentMethod").value;
    const trxid = document.getElementById("trxid").value;

    if (!amount || !method) {
        alert("Amount ও Method দিন!");
        return;
    }

    const user = localStorage.getItem("currentUser");

    if (!user) {
        alert("Login First!");
        return;
    }

    const deposit = {
        user: user,
        amount: Number(amount),
        method: method,
        trxid: trxid || "Not Provided",
        number: fixedNumbers[method],
        status: "pending",
        date: new Date().toLocaleString()
    };

    let pending = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    pending.push(deposit);

    localStorage.setItem("pendingDeposits", JSON.stringify(pending));

    alert("Deposit request sent!");

    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("trxid").value = "";
    updateNumber();
}
