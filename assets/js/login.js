// assets/js/login.js

document.addEventListener("DOMContentLoaded", () => {

    // Password Show / Hide
    const togglePassword = document.getElementById("togglePassword");
    const password = document.getElementById("password");

    togglePassword.addEventListener("click", () => {

        if (password.type === "password") {

            password.type = "text";

            togglePassword.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            password.type = "password";

            togglePassword.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

    });

    // Login

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        loading();

        const email = document.getElementById("email").value.trim();

        const pass = document.getElementById("password").value.trim();

        try {

            const { error } = await db.auth.signInWithPassword({

                email: email,

                password: pass

            });

            if (error) throw error;

            closeLoading();

            success("Login Successful");

            setTimeout(() => {

                window.location.href = "admin.html";

            }, 1200);

        } catch (err) {

            closeLoading();

            failed(err.message);

        }

    });

});

// Already Logged In

(async () => {

    const {

        data: {

            session

        }

    } = await db.auth.getSession();

    if (session) {

        window.location.href = "admin.html";

    }

})();
