document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let fullName = document.getElementById("fullName").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let password = document.getElementById("password").value.trim();

        if (!fullName || !phone || !password) {
            alert("Please fill all fields!");
            return;
        }

        let user = { fullName, phone, password };
        localStorage.setItem("user", JSON.stringify(user));

        alert("Account created successfully!");
    });
});
