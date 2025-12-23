window.adminLogin = function() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(username === "adminl" && password === "lami") {
        localStorage.setItem("isAdmin", "true");
        alert("Login Successful ✅");
        location.href = "admin.html";
    } else {
        alert("❌ Invalid Credentials");
    }
}
