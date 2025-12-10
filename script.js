document.addEventListener("DOMContentLoaded", () => {

    // ---------- SIGNUP ----------
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const phone = document.getElementById("phone").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            let users = JSON.parse(localStorage.getItem("users")) || [];

            // check if phone exists
            if (users.some(user => user.phone === phone)) {
                alert("Phone number already registered!");
                return;
            }

            users.push({ phone, password });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Signup successful!");
            window.location.href = "login.html";
        });
    }

    // ---------- LOGIN ----------
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const phone = document.getElementById("loginPhone").value;
            const password = document.getElementById("loginPassword").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];

            const user = users.find(user => user.phone === phone && user.password === password);

            if (user) {
                localStorage.setItem("loggedInUser", phone);
                alert("Login successful!");
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid phone or password!");
            }
        });
    }

});
