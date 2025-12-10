/* ---------- SIGNUP SYSTEM ---------- */
function signupUser() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    if (!name || !phone || !password) {
        alert("All fields are required!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // চেক ইউজার আগেই আছে কিনা
    if (users.some(u => u.phone === phone)) {
        alert("Phone number already registered!");
        return;
    }

    users.push({ name, phone, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    window.location.href = "login.html";
}

/* ---------- LOGIN SYSTEM ---------- */
function loginUser() {
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.phone === phone && u.password === password);

    if (!user) {
        alert("Phone or password incorrect!");
        return;
    }

    // Logged in user save
    localStorage
