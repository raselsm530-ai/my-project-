/* লগইন চেক */
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

/* ইউজার লোড */
let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

document.getElementById("welcomeText").innerText =
    "স্বাগতম, " + userData.phone;

/* প্যাকেজ সিলেক্ট */
function selectPackage(name, price) {
    alert(
        "আপনি নির্বাচন করেছেন:\n" +
        name + " Package\n" +
        "মূল্য: ৳" + price
    );

    // ভবিষ্যতে এখানে পেমেন্ট / অ্যাক্টিভেশন যোগ হবে
}

/* লগআউট */
function logoutUser() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}
