document.addEventListener("DOMContentLoaded", () => {

    // -------- SIGNUP SYSTEM --------
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("fullName").value;
            const email = document.getElementById("email").value;
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (!name || !email || !username || !password) {
                alert("All fields are required!");
                return;
            }

            // Save user in localStorage
            const user = { name, email, username, password };
            localStorage.setItem("user", JSON.stringify(user));

            alert("Account created successfully!");
            window.location.href = "login.html";
        });
    }

    // -------- LOGIN SYSTEM --------
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;

            const savedUser = JSON.parse(localStorage.getItem("user"));

            if (!savedUser) {
                alert("No account found! Please sign up first.");
                return;
            }

            if (username === savedUser.username && password === savedUser.password) {
                alert("Login Successful!");
                localStorage.setItem("loggedIn", "true");
                window.location.href = "dashboard.html";
            } else {
                alert("Incorrect username or password!");
            }
        });
    }

    // -------- DASHBOARD PROTECTION --------
    if (window.location.pathname.includes("dashboard.html")) {
        if (localStorage.getItem("loggedIn") !== "true") {
            window.location.href = "login.html";
        }
    }

});
