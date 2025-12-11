function register() {

    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let pin = document.getElementById("pin").value;
    let referral = document.getElementById("referral").value;

    // Validation
    if (phone.length < 10) {
        alert("সঠিক ফোন নম্বর দিন!");
        return;
    }

    if (password.length < 4) {
        alert("পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে!");
        return;
    }

    if (password !== confirmPassword) {
        alert("পাসওয়ার্ড মিলছে না!");
        return;
    }

    if (pin.length !== 4) {
        alert("৪ ডিজিটের উত্তোলন পিন দিন!");
        return;
    }

    // Save user data
    let userData = {
        phone: phone,
        password: password,
        pin: pin,
        referral: referral
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("নিবন্ধন সফল! লগইন করুন।");

    window.location.href = "login.html";
}
