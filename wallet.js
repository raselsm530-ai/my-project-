const fixedNumbers = {
    "Bkash": "01797632229",
    "Nagad": "01797632229",
    "Rocket": "01797632229"
};

function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    const paymentNumber = document.getElementById("paymentNumber");

    if (!method) {
        paymentNumber.textContent = "মেথড নির্বাচন করুন";
        return;
    }

    const num = fixedNumbers[method];
    paymentNumber.textContent = method + ": " + num;
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

    const deposit = {
        amount: amount,
        method: method,
        status: "Pending",
        date: new Date().toLocaleString()
    };

    let allDeposits = JSON.parse(localStorage.getItem("userDeposits")) || [];
    allDeposits.push(deposit);

    localStorage.setItem("userDeposits", JSON.stringify(allDeposits));

    alert("আপনার ডিপোজিট Pending দেখাচ্ছে");

    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("paymentNumber").textContent = "মেথড নির্বাচন করুন";
}
