function loginUser() {
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    // রেজিস্টারের সময় যে key ব্যবহার হয়েছে — মোবাইল নম্বর
    let savedUser = JSON.parse(localStorage.getItem(phone));

    if (!savedUser) {
        alert("কোনো অ্যাকাউন্ট পাওয়া যায়নি! আগে রেজিস্টার করুন।");
        return;
    }

    if (password === savedUser.password) {
        alert("লগইন সফল! 🎉");

        // লগইন স্ট্যাটাস সেভ করা
        localStorage.setItem("loggedIn", phone);

        // ড্যাশবোর্ড এ পাঠানো
        window.location.href = "dashboard.html";
    } else {
        alert("মোবাইল নম্বর বা পাসওয়ার্ড ভুল!");
    }
}
