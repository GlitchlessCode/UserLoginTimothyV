// User Login Script by Timothy V

// Initialize Variables
let userIn = document.getElementById("userIn");
let passIn = document.getElementById("passIn");
let loginBtn = document.getElementById("loginBtn");

// Add Event Listener
loginBtn.addEventListener("click", checkLogin);

// Functions
function checkLogin() {

    // Process & Output
    if (userIn.value !== "admin") {
        alert("Invalid Username");

    } else if (passIn.value !== "1234") {
        alert("Invalid Password");

    } else {
        alert("Login Successful");

    }
}