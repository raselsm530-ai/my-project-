import { db } from "./firebase-config.js";
import { ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let withdrawPin = document.getElementById("withdrawPin").value.trim();
    let refCode = document.getElementById("inviteCode").value.trim();

    if (phone.length !== 11 || !phone.startsWith("01")) {
        alert("সঠিক মোবাইল নম্বর দিন!");
        return;
    }

    if (password !== confirmPassword) {
        alert("পাসওয়ার্ড মিলছে না!");
        return;
    }

    if (withdrawPin.length !== 4) {
        alert("৪ সংখ্যার উত্তোলন পিন দিন!");
        return;
    }

    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `users/${phone}`));

    if (snapshot.exists()) {
        alert("এই নম্বরে আগেই অ্যাকাউন্ট আছে!");
        return;
    }

    const userData = {
        phone,
        password,
        withdrawPin,
        refCode: refCode || "NO-REF",
        balance: 0
    };

    await set(ref(db, `users/${phone}`), userData);

    alert("রেজিস্ট্রেশন সফল 🎉 এখন লগইন করুন");

    window.location.href = "login.html";
});