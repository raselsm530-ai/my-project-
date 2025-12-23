 import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-storage.js";
import { app } from "./firebase-config.js";

// Firebase instances
const db = getDatabase(app);
const storage = getStorage(app);

// ===== FIXED PAYMENT NUMBERS =====
const fixedNumbers = {
    bkash: "01797632229",
    nagad: "01797632229",
    rocket: "01797632229"
};

// ===== SHOW NUMBER =====
function updateNumber() {
    const method = document.getElementById("method").value;
    const box = document.getElementById("paymentNumber");

    if (!method) {
        box.innerHTML = "মেথড নির্বাচন করুন";
        return;
    }

    box.innerHTML = `
        <div class="fixed-number">
            <span id="fixedNumberText">${fixedNumbers[method]}</span>
            <button class="copy-btn" onclick="copyNumber()">কপি</button>
        </div>
    `;
}

// ===== COPY NUMBER =====
function copyNumber() {
    const text = document.getElementById("fixedNumberText").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("✅ নাম্বার কপি হয়েছে\nবিকাশ / নগদ অ্যাপে Paste করুন");
    });
}

// ===== SELECT AMOUNT BUTTON =====
window.selectAmount = (amount) => {
    document.getElementById("depositAmount").value = amount;
    document.getElementById("showAmount").innerText = amount;
}

// ===== SUBMIT DEPOSIT =====
window.submitDeposit = async () => {
    const amount = document.getElementById("depositAmount").value;
    const method = document.getElementById("method").value;
    const trxid = document.getElementById("trxid").value || "N/A";
    const screenshot = document.getElementById("screenshot").files[0];

    if (!amount || !method) {
        alert("এমাউন্ট ও মেথড নির্বাচন করুন");
        return;
    }

    const user = localStorage.getItem("user");
    if (!user) {
        alert("Login করুন");
        return;
    }

    let screenshotURL = "";
    if (screenshot) {
        const storageRef = sRef(storage, `deposits/${user}_${Date.now()}_${screenshot.name}`);
        await uploadBytes(storageRef, screenshot);
        screenshotURL = await getDownloadURL(storageRef);
    }

    // Save deposit request in Firebase Realtime Database
    const depositRef = push(ref(db, "deposits"));
    await set(depositRef, {
        user,
        amount: Number(amount),
        method,
        number: fixedNumbers[method],
        trxid,
        screenshot: screenshotURL,
        status: "pending",
        date: new Date().toLocaleString()
    });

    alert("✅ ডিপোজিট রিকোয়েস্ট পাঠানো হয়েছে");
    document.getElementById("depositAmount").value = "";
    document.getElementById("trxid").value = "";
    document.getElementById("screenshot").value = "";
    document.getElementById("showAmount").innerText = 0;
};   
