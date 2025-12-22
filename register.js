import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { set, ref } 
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

window.register = function () {
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;
    const pin = document.getElementById("pin").value;
    const refer = document.getElementById("refer").value;

    if (!phone || !password || !cpassword || !pin) {
        alert("সব ঘর পূরণ করুন!");
        return;
    }

    if (password !== cpassword) {
        alert("পাসওয়ার্ড মেলেনি!");
        return;
    }

    createUserWithEmailAndPassword(auth, `${phone}@gmail.com`, password)
        .then(userCredential => {
            const uid = userCredential.user.uid;

            set(ref(db, "users/" + uid), {
                phone,
                pin,
                refer,
                balance: 0
            });

            alert("রেজিস্ট্রেশন সফল!");
            window.location.href = "login.html";
        })
        .catch(err => {
            alert("ত্রুটি: " + err.message);
        });
}