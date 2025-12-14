document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let withdrawPin = document.getElementById("withdrawPin").value.trim();
    let inviteCode = document.getElementById("inviteCode").value.trim();

    if (!phone || phone.length < 10) {
        alert("সঠিক মোবাইল নাম্বার দিন");
        return;
    }

    if (!password || password.length < 4) {
        alert("পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে");
        return;
    }

    if (password !== confirmPassword) {
        alert("পাসওয়ার্ড মিলছে না");
        return;
    }

    if (!withdrawPin || withdrawPin.length !== 4) {
        alert("৪ সংখ্যার উত্তোলন পিন দিন");
        return;
    }

    // 🔴 সবচেয়ে গুরুত্বপূর্ণ লাইন
    if (localStorage.getItem(phone)) {
        alert("এই নম্বরে আগেই একাউন্ট আছে");
        return;
    }

    let userData = {
        phone: phone,
        password: password,
        withdrawPin: withdrawPin,
        balance: 0,
        transactions: []
    };

    // ✅ ফোন নাম্বারকেই key হিসেবে সেভ
    localStorage.setItem(phone, JSON.stringify(userData));

    alert("রেজিস্ট্রেশন সফল ✅ এখন লগইন করুন");

    window.location.href = "login.html";
});
