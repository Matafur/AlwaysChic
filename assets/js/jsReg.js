document.getElementById("formReg").addEventListener("submit", (event) => {
    event.preventDefault(); 
    const acceptTerms = document.getElementById("gridCheck").checked;
    const errorMessage = document.getElementById("error-message");
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    if (!acceptTerms) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none"; 
        fetch("http://localhost:4000/api/login/signUp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ correo, password }),
        })
        .then((response) => {
            console.log(response)
            response.ok
                ? (window.location.href = "../index.html#login")
                : alert("Cli : Error en el registro del usuario.")
        })
        .catch(() =>
            alert("Cli : Ha ocurrido un error en el registro de tu cuenta.")
        );
    }
});

document.getElementById("contactar").addEventListener("click", function () {
    window.location.href = "../pages/contactar.html";
});
