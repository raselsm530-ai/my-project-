/* লগইন চেক */
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

if (!userData) {
    alert("ইউজার পাওয়া যায়নি!");
    window.location.href = "login.html";
}

function buyPackage(price, name) {

    /* ব্যালেন্স না থাকলে 0 ধরবে */
    if (!userData.balance) {
        userData.balance = 0;
    }

    /* ব্যালেন্স চেক */
    if (userData.balance < price) {
        alert("পর্যাপ্ত ব্যালেন্স নেই! আগে ডিপোজিট করুন।");
        return;
    }

    /* ব্যালেন্স কাট */
    userData.balance -= price;

    /* প্যাকেজ লিস্ট */
    if (!userData.packages) {
        userData.packages = [];
    }

    userData.packages.push({
        name: name,
        price: price,
        date: new Date().toLocaleString()
    });

    /* ট্রানজেকশন হিস্টরি */
    if (!userData.transactions) {
        userData.transactions = [];
    }

    userData.transactions.push({
        type: "Package Buy",
        amount: price,
        details: name,
        date: new Date().toLocaleString()
    });

    /* সেভ */
    localStorage.setItem(currentPhone, JSON.stringify(userData));

    alert(name + " সফলভাবে কেনা হয়েছে 🎉");

    window.location.href = "home.html";
}
