import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";

document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const phone = document.getElementById("phone").value;
    const pass = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPassword").value;
    const pin = document.getElementById("pin").value;
    const refer = document.getElementById("refer").value;

    if (pass !== confirmPass) {
        alert("Password mismatch!");
        return;
    }

    const email = phone + "@gmail.com";

    createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            const user = userCredential.user;

            set(ref(db, "users/" + user.uid), {
                phone: phone,
                pin: pin,
                refer: refer,
                balance: 0
            });

            alert("Registration Successful!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});