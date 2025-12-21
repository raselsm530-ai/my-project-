function loadPendingDeposits() {
    let pending = JSON.parse(localStorage.getItem("pendingDeposits")) || [];

    const list = document.getElementById("depositList");
    list.innerHTML = "";

    if (pending.length === 0) {
        list.innerHTML = "<p>No Pending Deposits</p>";
        return;
    }

    pending.forEach((deposit, index) => {
        list.innerHTML += `
        <div class="box">
            <p>📱 User: ${deposit.user}</p>
            <p>💰 Amount: ${deposit.amount} ৳</p>
            <p>🏦 Method: ${deposit.method}</p>
            <p>📝 TrxID: ${deposit.trxid}</p>
            <p>⏱ Date: ${deposit.date}</p>

            <button class="approve" onclick="approveDeposit(${index})">Approve</button>
        </div>`;
    });
}

function approveDeposit(index) {
    let pending = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const deposit = pending[index];

    const userIndex = users.findIndex(user => user.phone == deposit.user);

    if (userIndex !== -1) {

        users[userIndex].balance = Number(users[userIndex].balance || 0) + Number(deposit.amount);

        localStorage.setItem("users", JSON.stringify(users));

        pending.splice(index, 1);
        localStorage.setItem("pendingDeposits", JSON.stringify(pending));

        alert("✔ Deposit Approved & Balance Updated!");

        loadPendingDeposits();
    } else {
        alert("❌ User Not Found! (Check signup / currentUser)");
    }
}

loadPendingDeposits();