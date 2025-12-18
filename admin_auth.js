function adminLogin() {
    let user = document.getElementById("adminUser").value.trim();
    let pass = document.getElementById("adminPass").value.trim();

    // Default Admin Credentials (hard-coded)
    const defaultUser = "admin";
    const defaultPass = "1234";

    if (user === defaultUser && pass === defaultPass) {
        localStorage.setItem("adminLoggedIn", "true");
        alert("Admin Login Successful!");
        window.location.href = "admin.html"; // Redirect to admin dashboard
    } else {
        alert("Wrong Username or Password!");
    }
}

// Admin Logout Function
function adminLogout() {
    localStorage.removeItem("adminLoggedIn");
    alert("Logged Out");
    window.location.href = "admin_login.html";
}
