document.addEventListener("DOMContentLoaded", () => {
    const pendingList = document.getElementById("pendingList");
    let deposits = JSON.parse(localStorage.getItem("pendingDeposits") || "[]");

    if (deposits.length === 0) {
        pendingList.innerHTML = "<p>No Pending Deposits</p>";
        return;
    }

    deposits.forEach((item, index) => {
        const box = document.createElement("div");
        box.classList.add("deposit-box");
        box.innerHTML = `
            <p><strong>User:</strong> ${item.user}</p>
            <p><strong>Amount:</strong> ${item.amount}</p>
            <button class="approve" onclick="approve(${index})">Approve</button>
            <button class="reject" onclick="reject(${index})">Reject</button>
        `;
        pendingList.appendChild(box);
    });
});

function approve(i) {
    let deposits = JSON.parse(localStorage.getItem("pendingDeposits") || "[]");
    let users = JSON.parse(localStorage.getItem("users") || "{}");

    const dep = deposits[i];
    users[dep.user].balance += dep.amount;

    deposits.splice(i, 1);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("pendingDeposits", JSON.stringify(deposits));

    location.reload();
}

function reject(i) {
    let deposits = JSON.parse(localStorage.getItem("pendingDeposits") || "[]");

    deposits.splice(i, 1);

    localStorage.setItem("pendingDeposits", JSON.stringify(deposits));

    location.reload();
}
