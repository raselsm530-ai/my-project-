import { db } from "./firebase-config.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const pendingList = document.getElementById("pendingList");

const pendingRef = ref(db, "deposits/");

onValue(pendingRef, (snapshot) => {

    pendingList.innerHTML = ""; // Clear first

    if (!snapshot.exists()) {
        pendingList.innerHTML = `<p style="text-align:center;color:white;">❌ No Pending Deposits</p>`;
        return;
    }

    const data = snapshot.val();

    Object.keys(data).forEach(id => {
        const dep = data[id];

        if (dep.status === "pending") {
            pendingList.innerHTML += `
                <div class="pending-box">
                    <p><strong>Phone:</strong> ${dep.phone}</p>
                    <p><strong>Amount:</strong> ${dep.amount} ৳</p>
                    <p><strong>Method:</strong> ${dep.method}</p>
                    <p><strong>TrxID:</strong> ${dep.trxid}</p>
                    <p><strong>Status:</strong> Pending</p>
                </div>
            `;
        }
    });

});