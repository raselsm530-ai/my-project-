function loadPendingDeposits() {
    const table = document.getElementById("pendingTable");

    let pending = JSON.parse(localStorage.getItem("pendingDeposits")) || [];

    table.innerHTML = "";

    pending.forEach((d, index) => {
        table.innerHTML += `
        <tr>
            <td>${d.user}</td>
            <td>${d.amount}</td>
            <td>${d.method}</td>
            <td>${d.trxid}</td>
            <td>${d.date}</td>
            <td><button onclick="approveDeposit(${index})">Approve</button></td>
        </tr>`;
    });
}

function approveDeposit(index) {
    let pending = JSON.parse(localStorage.getItem("pendingDeposits")) || [];
    const deposit = pending[index];

    let balances = JSON.parse(localStorage.getItem("balances")) || {};
    balances[deposit.user] = (balances[deposit.user] || 0) + deposit.amount;

    localStorage.setItem("balances", JSON.stringify(balances));

    pending.splice(index, 1);
    localStorage.setItem("pendingDeposits", JSON.stringify(pending));

    alert("Deposit Approved & Balance Added!");

    loadPendingDeposits();
}

loadPendingDeposits();
