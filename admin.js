import { db } from "./firebase-config.js";
import { ref, onValue, get, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const tableBody = document.querySelector("#pendingTable tbody");

window.loadPending = () => {
    tableBody.innerHTML="";
    onValue(ref(db, "deposits"), snapshot => {
        const data = snapshot.val();
        if(!data) return;
        Object.keys(data).forEach(key=>{
            const dep = data[key];
            if(dep.status !== "pending") return;
            const tr = document.createElement("tr");
            tr.innerHTML=`
                <td>${dep.user}</td>
                <td>${dep.amount}</td>
                <td>${dep.method}</td>
                <td>${dep.trxid}</td>
                <td>${dep.date}</td>
                <td>${dep.status}</td>
                <td>${dep.screenshot ? `<a href="${dep.screenshot}" target="_blank">View</a>`:"N/A"}</td>
                <td>
                    <button onclick="approveDeposit('${key}')">Approve</button>
                    <button onclick="rejectDeposit('${key}')">Reject</button>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    });
};

window.approveDeposit = async (key) => {
    const depositSnap = await get(ref(db, `deposits/${key}`));
    const dep = depositSnap.val();
    const userSnap = await get(ref(db, `users/${dep.user}`));
    const userData = userSnap.val() || {balance:0};
    const newBalance = Number(userData.balance)+Number(dep.amount);
    await update(ref(db, `users/${dep.user}`), {balance:newBalance});
    await update(ref(db, `deposits/${key}`), {status:"approved"});
    alert(`Deposit Approved ✅ New Balance: ${newBalance}`);
};

window.rejectDeposit = (key) => {
    update(ref(db, `deposits/${key}`), {status:"rejected"});
    alert("Deposit Rejected ❌");
};

window.loadPending();