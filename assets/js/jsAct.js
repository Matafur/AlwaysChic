// en construcción

document.getElementById("actForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("Token");

    const usuarioActualizado = {
        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        genero: document.getElementById("genero").value,
        telefono: document.getElementById("telefono").value,
        direccion: document.getElementById("direccion").value,
        ciudad: document.getElementById("ciudad").value
    };
    alert ("Servicio en construcción")
    // try {
    //     const response = await fetch("http://localhost:4000/api/usuario", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ correo, password }),
    //     });
    //     if (!response.ok) {
    //         throw new Error("Error al iniciar sesión");
    //     }
    //     const data = await response.json();
    //     localStorage.setItem("Token", data.accessToken);
    //     response.ok
    //         ? (window.location.href = "./User/user.html")
    //         : alert("Login failed. Invalid Password");
    // } catch {
    //     console.error("Error:", error);
    // }
});
