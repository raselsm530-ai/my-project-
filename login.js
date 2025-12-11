function loginUser() {
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    // লোকালস্টোরেজ থেকে ইউজার ডাটা আনা
    let savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        alert("কোনো অ্যাকাউন্ট পাওয়া যায়নি! আগে রেজিস্টার করুন।");
        return;
    }

    if (phone === savedUser.phone && password === savedUser.password) {
        alert("লগইন সফল! 🎉");

        // লগইন স্ট্যাটাস সেভ করা
        localStorage.setItem("loggedIn", "true");

        // ড্যাশবোর্ডে পাঠানো
        window.location.href = "dashboard.html";
    } else {
        alert("মোবাইল নম্বর বা পাসওয়ার্ড ভুল!");
    }
}
