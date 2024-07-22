document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    console.log("login:correo->", correo);
    console.log("login:password->", password);
    try {
        console.log("login:entra al fetch");
        // const response = await fetch("http://localhost:4000/api/login", {
        const response = await fetch(
            "https://back-end-cyan-seven.vercel.app/api/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ correo, password }),
            }
        );
        const result = await response.json();
        console.log("login:response->", response); //borrar
        console.log("login:result->", result); //borrar
        if (response.ok) {
            localStorage.setItem("Token", result.session.access_token);
            localStorage.setItem("auth_user_id", result.user.id);
            localStorage.setItem("correo", result.user.email);
            localStorage.setItem("nombre", "No olvides actualizar tus datos.");
            window.location.href = "./User/user.html";
        } else {
            alert(
                `El registro falló : statsus : ${result.status} name:${result.name} code:${result.code}`
            );  //borrar
            throw new Error("Posibles soluciones:\n1. Ingrese Usuario y Password válidos. \n2. No ha verificado su cuenta de correo para validar su correo como usuario.");
        }
    } catch (error) {
        alert(error);
        console.error(error);
    }
});

function registro(){
    window.location.href = './Auth/register.html'
}

function contactar(){
    window.location.href = './Auth/register.html'
}


document.getElementById("contactar").addEventListener("click", function () {
    window.location.href = "pages/contactar.html";
});