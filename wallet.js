let selectedAmount = 0;

// আপনার ফিক্সড নাম্বার গুলো
const numbers = {
    "বিকাশ": "01797632229",
    "নগদ": "01797632229",
    "রকেট": "01797632229"
};

document.querySelectorAll(".amount").forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelectorAll(".amount").forEach(a => a.classList.remove("active"));
        btn.classList.add("active");

        selectedAmount = btn.dataset.amount;
        document.getElementById("selectedAmountText").innerText = selectedAmount;
    });
});

window.startDeposit = () => {
    
    if (selectedAmount == 0) {
        alert("দয়া করে একটি এমাউন্ট সিলেক্ট করুন");
        return;
    }

    const method = document.getElementById("method").value;

    const paymentNumber = numbers[method];

    alert(`
আপনি ${method} এর মাধ্যমে ${selectedAmount} টাকা ডিপোজিট করতে যাচ্ছেন।

📌 পেমেন্ট নাম্বার:
${paymentNumber}

টাকা পাঠানোর পরে স্ক্রিনশট আপলোড করুন।
    `);

    // Future: screenshot system & firebase insert
};
