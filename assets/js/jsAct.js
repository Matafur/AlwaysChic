// Lleno los campos del usuario si existe en la BD. Si no existe los deja en blanco
function llenaCampos() {
    if (!(localStorage.getItem("nombre") === "No olvides actualizar tus datos.")) {  // si existen datos para ese usuario
        const id = localStorage.getItem("auth_user_id");
        var settings = {
            url: baseUrl + "/api/usuarios/" + id,
            method: "GET",
            timeout: 0,
        };
        $.ajax(settings).done(function (response) {
            $("#nombre").val(response[0].nombre);
            $("#edad").val(response[0].edad);
            $("#genero").val(response[0].genero);
            $("#telefono").val(response[0].telefono);
            $("#direccion").val(response[0].direccion);
            $("#ciudad").val(response[0].ciudad);
        });
    }
}

llenaCampos()

// Actualizo la info de la tabla usuarios en Supabase
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
    try {
        const response = await fetch( baseUrl + "/api/usuarios",
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ usuarioActualizado }),
            }
        );
        const result = await response.json();
        if (response.ok) {
            alert("Actualización de datos exitosa!.");
            localStorage.setItem("nombre",document.getElementById("nombre").value);
            window.location.href = "../User/user.html";
        } else {
            //alert(`La actualización falló : statsus : ${result.status} name : ${result.name} code:${result.code}`);
            throw new Error("Error al actualizar los datos. Vuelva a ingresar.");
        }
    } catch (error) {
        alert("Error Actualización:" + error);
        console.error("Error de Actualización:", error);
    }
});

document.getElementById("logout").addEventListener("click", async (event) => {
    event.preventDefault();
    localStorage.clear();
    window.location.href = "../index.html";
});
