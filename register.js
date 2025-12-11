// REGISTER USER
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let withdrawPin = document.getElementById("withdrawPin").value.trim();
    let invite = document.getElementById("inviteCode").value.trim();

    if (phone === "" || password === "" || confirmPassword === "" || withdrawPin === "" || invite === "") {
        alert("সব ফিল্ড পূরণ করুন!");
        return;
    }

    if (password !== confirmPassword) {
        alert("পাসওয়ার্ড মিলছে না!");
        return;
    }

    if (withdrawPin.length !== 4 || isNaN(withdrawPin)) {
        alert("উত্তোলন পিন অবশ্যই ৪ সংখ্যার হতে হবে!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userExists = users.find(u => u.phone === phone);
    if (userExists) {
        alert("এই নম্বর দিয়ে আগে অ্যাকাউন্ট খোলা হয়েছে!");
        return;
    }

    let newUser = {
        phone: phone,
        password: password,
        withdrawPin: withdrawPin,
        invite: invite,
        balance: 0,
        group: ""
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", phone);

    alert("রেজিস্ট্রেশন সফল হয়েছে!");
    window.location.href = "login.html";
});
