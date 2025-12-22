let selectedAmount = 0;

const paymentNumbers = {
    bKash: "01797632229",
    Nagad: "01797632229",
    Rocket: "01797632229"
};

document.querySelectorAll(".amount-card").forEach(card => {
    card.addEventListener("click", () => {

        document.querySelectorAll(".amount-card")
            .forEach(el => el.classList.remove("active"));

        card.classList.add("active");

        selectedAmount = card.getAttribute("data-amount");

        document.getElementById("selectedAmount").innerText = selectedAmount;
    });
});

document.getElementById("methodSelect").addEventListener("change", (e) => {
    document.getElementById("selectedMethod").innerText = e.target.value;
});

window.makeDeposit = () => {

    if (selectedAmount == 0) {
        alert("অনুগ্রহ করে একটি অ্যামাউন্ট সিলেক্ট করুন!");
        return;
    }

    const method = document.getElementById("selectedMethod").innerText;
    const number = paymentNumbers[method];

    alert(
        `ডিপোজিট তথ্য\n\n` +
        `Amount: ৳${selectedAmount}\n` +
        `Method: ${method}\n` +
        `Send Money To: ${number}\n\n` +
        `টাকা পাঠানোর পর স্ক্রিনশট জমা দিন।`
    );
};
