import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const register = () => {

    const phone = document.getElementById("phone").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (phone === "" || pass === "") {
        alert("সব ঘর পূরণ করুন");
        return;
    }

    // Firebase email trick
    const email = phone + "@app.com";

    createUserWithEmailAndPassword(auth, email, pass)
        .then(user => {

            set(ref(db, "users/" + phone), {
                phone: phone,
                balance: 0,
                joined: new Date().toLocaleString()
            });

            alert("রেজিস্ট্রেশন সফল 👍");
            location.href = "login.html";
        })
        .catch(err => {
            alert("Error: " + err.message);
        });
};

window.register = register;