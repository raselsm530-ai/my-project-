import { db } from "./firebase-config.js";
import { ref, get, child } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `users/${phone}`));

    if (!snapshot.exists()) {
        alert("এই নম্বরে কোনো অ্যাকাউন্ট নেই!");
        return;
    }

    const data = snapshot.val();

    if (data.password !== password) {
        alert("পাসওয়ার্ড ভুল!");
        return;
    }

    localStorage.setItem("currentUser", phone);

    alert("লগইন সফল 🎉");
    window.location.href = "home.html";
});