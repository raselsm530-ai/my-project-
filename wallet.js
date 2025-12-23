// ===== FIXED PAYMENT NUMBERS =====
const fixedNumbers = {
    bkash: "01797632229",
    nagad: "01797632229",
    rocket: "01797632229"
};

// ===== SHOW NUMBER =====
function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    const box = document.getElementById("fixedNumberText");

    if (!method) {
        box.innerHTML = "01797632229";
        return;
    }

    box.innerText = fixedNumbers[method];
}

// ===== COPY NUMBER =====
function copyNumber() {
    const text = document.getElementById("fixedNumberText").innerText;

    const temp = document.createElement("input");
    temp.value = text;
    document.body.appendChild(temp);

    temp.select();
    temp.setSelectionRange(0, 99999);
    document.execCommand("copy");

    document.body.removeChild(temp);
    alert("✅ নাম্বার কপি হয়েছে\nবিকাশ / নগদ অ্যাপে Paste করুন");
}

// ===== SELECT AMOUNT =====
function selectAmount(amount) {
    document.getElementById("showAmount").innerText = amount;
    document.getElementById("depositAmount").value = amount;
}

// ===== DEPOSIT REQUEST =====
function submitDeposit() {
    const amount = document.getElementById("showAmount").innerText;
    const method = document.getElementById("paymentMethod").value;
    const trxid = document.getElementById("trxid").value || "N/A";

    if (!amount || !method) {
        alert("এমাউন্ট ও মেথড দিন");
        return;
    }

    const user = localStorage.getItem("user");
    if (!user) {
        alert("Login করুন");
        return;
    }

    const deposit = {
        user,
        amount: Number(amount),
        method,
        number: fixedNumbers[method],
        trxid,
        status: "pending",
        date: new Date().toLocaleString()
    };

    let pending = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    pending.push(deposit);
    localStorage.setItem("pendingDeposits", JSON.stringify(pending));

    alert("✅ ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে");

    document.getElementById("showAmount").innerText = "0";
    document.getElementById("trxid").value = "";
}         
