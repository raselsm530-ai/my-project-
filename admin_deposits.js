function loadDeposits() {
    let deposits = JSON.parse(localStorage.getItem("deposits")) || [];
    let pending = deposits.filter(d => d.status === "Pending");

    let html = "";

    if (pending.length === 0) {
        document.getElementById("depositList").innerHTML = "<p>No Pending Deposits</p>";
        return;
    }

    pending.forEach((d, i) => {
        html += `
        <div style="padding:10px;border:1px solid #999;margin:10px;color:white;">
            <p>📌 ইউজার: ${d.user}</p>
            <p>💰 Amount: ${d.amount}৳</p>
            <p>💳 Method: ${d.method}</p>
            <p>⏱ Date: ${d.time}</p>

            <button onclick="approveDeposit('${d.user}', ${d.amount}, ${i})" style="background:green;color:white;padding:5px 10px;">
                Approve
            </button>
        </div>`;
    });

    document.getElementById("depositList").innerHTML = html;
}

function approveDeposit(userPhone, amount, index) {
    let deposits = JSON.parse(localStorage.getItem("deposits")) || [];
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // deposit index খুঁজে বের করা
    let depIndex = deposits.findIndex(d => d.user === userPhone && d.amount === amount && d.status === "Pending");

    if (depIndex !== -1) {
        deposits[depIndex].status = "Approved";
    }

    let user = users.find(u => u.phone === userPhone);

    if (user) {
        user.balance = (user.balance || 0) + Number(amount);
    }

    localStorage.setItem("deposits", JSON.stringify(deposits));
    localStorage.setItem("users", JSON.stringify(users));

    alert("Deposit Approved!");
    loadDeposits();
}

// First time load
loadDeposits();
