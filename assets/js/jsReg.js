document.getElementById("regForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const acceptTerms = document.getElementById("gridCheck").checked;
    const errorMessage = document.getElementById("error-message");
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    console.log("reg:acceptTerms->",acceptTerms);
    console.log("reg:errorMessage->", errorMessage);
    console.log("reg:correo->",correo);
    console.log("reg:password->", password);

    if (!acceptTerms) {
        console.log("NO acepto terminos y condiciones")
        errorMessage.style.display = "block";
    } else {
        console.log("SI acepto terminos y condiciones")
        errorMessage.style.display = "none";
        try {
            // const response = await fetch("http://localhost:4000/api/login/signUp",{   //dev
            const response = await fetch(
                "https://back-end-cyan-seven.vercel.app/api/login/signUp",  //prod
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ correo, password }),
                }
            );
            const result = await response.json();
            console.log("reg:response->", response); //borrar
            console.log("reg:result->", result); //borrar
            if (response.ok) {
                alert("Registro exitoso!. Ingresa con tu correo y clave registrados.");
                window.location.href = "../index.html#login";
            } else {
                alert(`El registro falló : statsus : ${result.status} ${result.name} ${result.code}`);
                throw new Error("Error al registrar el usuario.");
            }
        } catch (error) {
			alert("Error Reg:" + error);
            console.error("Error de registro:", error);
        }
    }
});

document.getElementById("contactar").addEventListener("click", function () {
    window.location.href = "../pages/contactar.html";
});
