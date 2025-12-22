const fixedNumber = "01797632229";

let selectedAmount = 0;

function selectAmount(amount) {
    selectedAmount = amount;
    document.getElementById("paymentMethod").value = "bkash"; // Default method auto
    alert(amount + " টাকা সিলেক্ট হয়েছে। পেমেন্ট মেথড Bkash সিলেক্ট করা হয়েছে।");
}

function depositMoney() {
    const method = document.getElementById("paymentMethod").value;
    const trxid = document.getElementById("trxid").value.trim();
    const user = localStorage.getItem("currentUser");

    if (!user) { alert("লগইন করুন!"); return; }
    if (!selectedAmount || !method || !trxid) { alert("সব তথ্য দিন!"); return; }

    const deposit = {
        user: user,
        amount: selectedAmount,
        method: method,
        number: fixedNumber,
        trxid: trxid,
        status: "pending",
        date: new Date().toLocaleString()
    };

    let pending = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    pending.push(deposit);
    localStorage.setItem("pendingDeposits", JSON.stringify(pending));

    alert("ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে (Pending)");
    selectedAmount = 0;
    document.getElementById("trxid").value = "";
    document.getElementById("paymentMethod").value = "";
}        
