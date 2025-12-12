function loginUser() {
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    // লোকালস্টোরেজে ফোন নম্বর অনুযায়ী ইউজার আছে কিনা
    let savedUser = JSON.parse(localStorage.getItem(phone));

    if (!savedUser) {
        alert("এই নম্বরে কোনো অ্যাকাউন্ট নেই! আগে রেজিস্টার করুন।");
        return;
    }

    // পাসওয়ার্ড চেক
    if (password === savedUser.password) {

        // লগইন সফল
        alert("লগইন সফল! 🎉");

        // গুরুত্বপূর্ণ: বর্তমান ইউজার সেভ
        localStorage.setItem("currentUser", phone);

        // লগইন স্ট্যাটাস সেভ
        localStorage.setItem("loggedIn", "true");

        // ড্যাশবোর্ডে নিয়ে যাওয়া
        window.location.href = "dashboard.html";

    } else {
        alert("পাসওয়ার্ড ভুল!");
    }
}
