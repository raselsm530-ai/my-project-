function updateNumber() {
    const method = document.getElementById("paymentMethod").value;
    const numberBox = document.getElementById("paymentNumber");

    if (method === "বিকাশ") {
        numberBox.innerText = "📱 বিকাশ নাম্বার: 01797632229";
    } 
    else if (method === "নগদ") {
        numberBox.innerText = "📱 নগদ নাম্বার: 01797632229";
    } 
    else if (method === "রকেট") {
        numberBox.innerText = "📱 রকেট নাম্বার: 01797632229";
    } 
    else {
        numberBox.innerText = "মেথড নির্বাচন করুন";
    }
}

function depositMoney() {
    let amount = document.getElementById("depositAmount").value;
    let method = document.getElementById("paymentMethod").value;

    if (!amount || !method) {
        alert("এমাউন্ট ও পেমেন্ট মেথড নির্বাচন করুন");
        return;
    }

    let user = localStorage.getItem("currentUser");
    let deposits = JSON.parse(localStorage.getItem("deposits")) || [];

    deposits.push({
        user: user,
        amount: Number(amount),
        method: method,
        number: "01797632229",
        status: "Pending",
        time: new Date().toLocaleString()
    });

    localStorage.setItem("deposits", JSON.stringify(deposits));

    alert("✅ ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে\n(Admin যাচাই করবে)");

    document.getElementById("depositAmount").value = "";
    document.getElementById("paymentMethod").value = "";
    document.getElementById("paymentNumber").innerText = "মেথড নির্বাচন করুন";
}
