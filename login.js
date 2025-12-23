import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

window.loginUser = () => {
    const phone = document.getElementById("phone").value.trim();
    const pass = document.getElementById("password").value.trim();

    if(!phone || !pass) {
        alert("সব ফিল্ড পূরণ করুন");
        return;
    }

    const email = phone + "@smartplatform.com";

    signInWithEmailAndPassword(auth, email, pass)
        .then(() => {
            localStorage.setItem("loggedInUser", phone);
            alert("লগইন সফল 🎉");
            window.location.href = "home.html";
        })
        .catch(err => {
            alert("ভুল নাম্বার বা পাসওয়ার্ড");
        });
}
