import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault(); // STOP reload

    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    const email = phone + "@app.com";

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            set(ref(db, "users/" + phone), {
                phone: phone,
                password: password,
                balance: 0
            });

            alert("রেজিস্ট্রেশন সফল");
            location.href = "login.html";
        })
        .catch(err => {
            alert(err.message);
        });
});