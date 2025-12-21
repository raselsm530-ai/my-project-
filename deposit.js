const fixedNumbers = {
    "bkash": "01797632229",
    "nagad": "01797632229",
    "rocket": "01797632229"
};

function depositMoney() {
    const amount = document.getElementById("depositAmount").value;
    const method = document.getElementById("paymentMethod").value;
    const trxid = document.getElementById("trxid").value;

    if (!amount || !method || !trxid) {
        alert("সব তথ্য দিন");
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUserData"));

    if (!currentUser) {
        alert("Please Login First!");
        return;
    }

    const deposit = {
        user: currentUser.phone,
        amount: Number(amount),
        method: method,
        number: fixedNumbers[method],  // FIXED
        trxid: trxid,                  // FIXED
        status: "pending",
        date: new Date().toLocaleString()
    };

    let pending = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    pending.push(deposit);

    localStorage.setItem("pendingDeposits", JSON.stringify(pending));

    alert("ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে (Pending)");

    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("trxid").value = "";
}
