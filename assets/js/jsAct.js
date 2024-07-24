document.getElementById("actForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const usuarioActualizado = {
        auth_user_id: localStorage.getItem("auth_user_id"),
        token: localStorage.getItem("Token"),
        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        genero: document.getElementById("genero").value,
        telefono: document.getElementById("telefono").value,
        direccion: document.getElementById("direccion").value,
        ciudad: document.getElementById("ciudad").value,
        correo: localStorage.getItem("correo"),
    };
    console.log("act:usractualizado->", usuarioActualizado); //borrar
    try {
        // const response = await fetch("http://localhost:4000/api/usuarios", {   //dev
        const response = await fetch(
            "https://back-end-cyan-seven.vercel.app/api/usuarios",  //prod
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ usuarioActualizado }),
            }
        );
        const result = await response.json();
        console.log("Act :response->", response); //borrar
        console.log("result->", result); //borrar
        if (response.ok) {
            alert("Actualización de datos exitosa!.");
            localStorage.setItem(
                "nombre",
                document.getElementById("nombre").value
            );
            window.location.href = "../User/user.html";
        } else {
            alert(
                `La actualización falló : statsus : ${result.status} name : ${result.name} code:${result.code}`
            );
            throw new Error(
                "Error al actualizar los datos. Vuelva a ingresar."
            );
        }
    } catch (error) {
        alert("Error Act:" + error);
        console.error("Error de Actualizacion:", error);
    }
});

document.getElementById("logout").addEventListener("click", async (event) => {
    event.preventDefault();
    localStorage.clear()
    window.location.href = "../index.html";
});