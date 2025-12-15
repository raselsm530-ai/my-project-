function loginUser() {
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    let userData = localStorage.getItem(phone);

    if (!userData) {
        alert("এই নম্বরে কোনো অ্যাকাউন্ট নেই");
        return;
    }

    let user = JSON.parse(userData);

    if (user.password !== password) {
        alert("পাসওয়ার্ড ভুল");
        return;
    }

    // ✅ লগইন স্টেট
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", phone);

    alert("লগইন সফল 🎉");
    window.location.href = "dashboard.html";
}
