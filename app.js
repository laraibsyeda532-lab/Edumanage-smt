document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const message = document.getElementById("loginMessage");

            if (username === "admin" && password === "admin123") {

                localStorage.setItem("isLoggedIn", "true");

                message.style.color = "green";
                message.textContent = "Login successful!";

                setTimeout(function () {
                    window.location.href = "dashboard.html";
                }, 500);

            } else {

                message.style.color = "red";
                message.textContent = "Invalid username or password.";

            }

        });

    }

});