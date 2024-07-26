document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    try {
        //const response = await fetch("http://localhost:4000/api/login", // dev
        const response = await fetch("https://back-end-cyan-seven.vercel.app/api/login",  //prod
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ correo, password }),
            }
        )
        const result = await response.json();
        if (response.ok) {
            localStorage.setItem("Token", result.session.access_token);
            localStorage.setItem("auth_user_id", result.user.id);
            localStorage.setItem("correo", result.user.email);
            localStorage.setItem("nombre", result.nombre);
            window.location.href = "./User/user.html"
        } else {
            throw new Error("Ingrese Usuario y Password válidos.");
        }
    } catch (error) {
        alert(error);
        console.error(error);
    }
});

function registro() {
    window.location.href = "./Auth/register.html";
}

function contactar() {
    window.location.href = "./Auth/register.html";
}

document.getElementById("contactar").addEventListener("click", function () {
    window.location.href = "pages/contactar.html";
});
