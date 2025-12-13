 /* লগইন চেক */
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

/* ইউজার লোড */
let currentPhone = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentPhone));

if (!userData) {
    alert("ইউজার পাওয়া যায়নি!");
    window.location.href = "login.html";
}

/* Withdraw Function */
function withdrawMoney() {
    let amount = parseInt(document.getElementById("withdrawAmount").value);
    let pin = document.getElementById("withdrawPin").value.trim();

    if (!amount || amount <= 0) {
        alert("সঠিক এমাউন্ট লিখুন!");
        return;
    }

    if (!pin || pin.length !== 4) {
        alert("৪ সংখ্যার পিন দিন!");
        return;
    }

    if (pin !== userData.withdrawPin) {
        alert("ভুল পিন!");
        return;
    }

    if (userData.balance < amount) {
        alert("পর্যাপ্ত ব্যালেন্স নেই!");
        return;
    }

    userData.balance -= amount;

    if (!userData.transactions) {
        userData.transactions = [];
    }

    userData.transactions.push({
        type: "Withdraw",
        amount: amount,
        date: new Date().toLocaleString()
    });

    localStorage.setItem(currentPhone, JSON.stringify(userData));

    alert("উত্তোলন সফল হয়েছে ✅");
    window.location.href = "home.html";
}
