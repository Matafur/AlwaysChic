document.getElementById("regForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const acceptTerms = document.getElementById("gridCheck").checked;
    const errorMessage = document.getElementById("error-message");
    const valPass = document.getElementById("error-pass");
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    const errorPass = document.getElementById("error-pass");

    errorPass.style.display = "none";
    
    if (!acceptTerms) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        try {
            const response = await fetch( baseUrl + "/api/login/signUp",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ correo, password }),
                }
            );
            const result = await response.json();
            if (response.ok) {
                alert("Registro exitoso!. Ingresa con tu correo y clave registrados.");
                localStorage.setItem("nombre","No olvides actualizar tus datos.");
                window.location.href = "../index.html#login";
            } else {
                //alert(`El registro falló : statsus : ${result.status} ${result.name} ${result.code}`);
                throw new Error(result.code);
            }
        } catch (error) {
            errorPass.textContent = error.message;
            errorPass.style.display = "block";
            console.error(error.message);
        }
    }
});

document.getElementById("contactar").addEventListener("click", function () {
    window.location.href = "../pages/contactar.html";
});
