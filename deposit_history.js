document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("historyTable");

    // ডিপোজিট ডাটা LocalStorage থেকে আনো
    let deposits = JSON.parse(localStorage.getItem("userDeposits")) || [];

    deposits.forEach(deposit => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${deposit.amount} ৳</td>
            <td>${deposit.method}</td>
            <td class="${deposit.status.toLowerCase()}">${deposit.status}</td>
            <td>${deposit.date}</td>
        `;

        table.appendChild(row);
    });
});
