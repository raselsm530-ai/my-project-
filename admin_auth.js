function adminLogin() {
    let u = document.getElementById("adminUser").value;
    let p = document.getElementById("adminPass").value;

    // FIXED ADMIN LOGIN
    const adminUser = "admin";
    const adminPass = "12345";

    if (u === adminUser && p === adminPass) {
        localStorage.setItem("adminLogged", "true");
        window.location.href = "admin.html";
    } else {
        alert("❌ ভুল Username বা Password");
    }
}

function checkAdmin() {
    if (localStorage.getItem("adminLogged") !== "true") {
        window.location.href = "admin_login.html"; 
    }
}

function adminLogout() {
    localStorage.removeItem("adminLogged");
    window.location.href = "admin_login.html";
}
