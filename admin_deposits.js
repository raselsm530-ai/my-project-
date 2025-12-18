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
        <div class="card">
            <p>📌 User: ${d.user}</p>
            <p>💰 Amount: ${d.amount} ৳</p>
            <p>💳 Method: ${d.method}</p>
            <p>⏱ Date: ${d.time}</p>

            <button onclick="approveDeposit('${d.user}', ${i})">Approve</button>
        </div>
        `;
    });

    document.getElementById("depositList").innerHTML = html;
}

function approveDeposit(phone, i) {
    let deposits = JSON.parse(localStorage.getItem("deposits")) || [];
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let pending = deposits.filter(d => d.status === "Pending");

    let dep = pending[i];

    // update status
    let actualIndex = deposits.findIndex(d => d.time === dep.time && d.user === dep.user);
    deposits[actualIndex].status = "Approved";

    let user = users.find(u => u.phone === phone);

    user.balance += dep.amount;

    localStorage.setItem("deposits", JSON.stringify(deposits));
    localStorage.setItem("users", JSON.stringify(users));

    alert("Deposit Approved!");
    loadDeposits();
}

loadDeposits();
