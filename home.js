window.onload = () => {
    const user = localStorage.getItem("user");

    if(!user){
        location.href = "login.html";
    }

    document.getElementById("welcomeUser").innerText = "স্বাগতম " + user;

    // later firebase balance দেখানোর কোড যোগ হবে
};

window.logoutUser = () => {
    localStorage.removeItem("user");
    location.href = "login.html";
};
