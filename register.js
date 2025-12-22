import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

window.register = async () => {

    const phone = document.getElementById("phone").value.trim();
    const pass = document.getElementById("password").value.trim();
    const cpass = document.getElementById("cpassword").value.trim();
    const pin = document.getElementById("pin").value.trim();
    const refer = document.getElementById("refer").value.trim();

    // ================= VALIDATION =================
    if (!phone || !pass || !cpass || !pin) {
        alert("সব ঘর পূরণ করুন");
        return;
    }

    if (pass !== cpass) {
        alert("পাসওয়ার্ড মিলছে না");
        return;
    }

    if (pin.length !== 4) {
        alert("উইথড্র পিন ৪ সংখ্যা হতে হবে");
        return;
    }

    // Firebase email trick
    const email = phone + "@app.com";

    try {
        // ================= CREATE USER =================
        await createUserWithEmailAndPassword(auth, email, pass);

        // ================= SAVE USER DATA =================
        await set(ref(db, "users/" + phone), {
            phone: phone,
            balance: 0,
            pin: pin,
            refer: refer || "",
            joined: new Date().toLocaleString()
        });

        alert("রেজিস্ট্রেশন সফল 🎉");
        location.href = "login.html";

    } catch (err) {
        alert("⚠️ রেজিস্ট্রেশন ব্যর্থ: " + err.message);
    }
};