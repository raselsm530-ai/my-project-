let list = document.getElementById("depositList");
let deposits = JSON.parse(localStorage.getItem("pendingDeposits")) || [];

list.innerHTML = "";

deposits.forEach((d, i) => {
    if (d.status === "pending") {
        let div = document.createElement("div");
        div.className = "info-box";

        div.innerHTML = `
            <p>User: ${d.user}</p>
            <p>Amount: ${d.amount} ৳</p>
            <p>Method: ${d.method}</p>
            <p>${d.time}</p>
            <button onclick="approve(${i})">Approve</button>
        `;

        list.appendChild(div);
    }
});

function approve(index) {
    let d = deposits[index];
    let key = "balance_" + d.user;

    let balance = Number(localStorage.getItem(key)) || 0;
    balance += d.amount;

    localStorage.setItem(key, balance);

    // history
    let history = JSON.parse(localStorage.getItem("history_" + d.user)) || [];
    history.push({
        type: "Deposit",
        amount: d.amount,
        time: new Date().toLocaleString()
    });

    localStorage.setItem("history_" + d.user, JSON.stringify(history));

    deposits[index].status = "approved";
    localStorage.setItem("pendingDeposits", JSON.stringify(deposits));

    alert("Deposit Approved");
    location.reload();
}
