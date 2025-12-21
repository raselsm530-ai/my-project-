document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    if (phone.length !== 11 || !phone.startsWith("01")) {
        alert("সঠিক মোবাইল নম্বর দিন!");
        return;
    }

    // Firebase DB Reference
    const userRef = window.ref(window.db, "users/" + phone);

    try {
        const module = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js");
        const snapshot = await module.get(userRef);

        if (!snapshot.exists()) {
            alert("এই নম্বরে কোনো অ্যাকাউন্ট নেই!");
            return;
        }

        const userData = snapshot.val();

        if (userData.password !== password) {
            alert("পাসওয়ার্ড ভুল!");
            return;
        }

        // Login success
        localStorage.setItem("currentUser", phone);
        localStorage.setItem("currentUserData", JSON.stringify(userData));

        alert("Login Success 🎉");
        window.location.href = "home.html";

    } catch (error) {
        console.log(error);
        alert("সার্ভারে সমস্যা হয়েছে!");
    }
});