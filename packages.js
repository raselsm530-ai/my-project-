/* লগইন চেক */
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

function buyPackage(price, name) {

    if (userData.balance < price) {
        alert("পর্যাপ্ত ব্যালেন্স নেই!");
        return;
    }

    /* ব্যালেন্স কাট */
    userData.balance -= price;

    /* প্যাকেজ হিস্টরি */
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
        date: new Date().toLocaleString()
    });

    localStorage.setItem(currentPhone, JSON.stringify(userData));

    alert(name + " প্যাকেজ সফলভাবে কেনা হয়েছে 🎉");

    window.location.href = "home.html";
}
