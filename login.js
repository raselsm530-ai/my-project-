document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // ⛔ ফর্ম reload বন্ধ

    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    let savedUser = JSON.parse(localStorage.getItem(phone));

    if (!savedUser) {
        alert("এই নম্বরে কোনো অ্যাকাউন্ট নেই!");
        return;
    }

    if (password !== savedUser.password) {
        alert("পাসওয়ার্ড ভুল!");
        return;
    }

    // ✅ লগইন সফল
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", phone);

    window.location.href = "home.html";
});
