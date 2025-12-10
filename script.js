document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    // ---------------------------
    // SIGNUP FORM
    // ---------------------------
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value; // optional
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (phone === "" || password === "" || confirmPassword === "") {
                alert("Please fill required fields!");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            // Save user data
            localStorage.setItem("userPhone", phone);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);

            alert("Signup successful!");
            window.location.href = "login.html";
        });
    }

    // ---------------------------
    // LOGIN FORM
    // ---------------------------
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const phone = document.getElementById("loginPhone").value;
            const password = document.getElementById("loginPassword").value;

            const savedPhone = localStorage.getItem("userPhone");
            const savedPassword = localStorage.getItem("userPassword");

            if (phone === savedPhone && password === savedPassword) {
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect after login
            } else {
                alert("Invalid phone or password!");
            }
        });
    }
});
