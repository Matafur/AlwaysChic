// ESTABA SALIENDO UN ERROR porque el botón con  el "id" llamado "contactar" está en comentario
// document.getElementById("contactar").addEventListener("click", function () {
//     window.location.href = "../pages/contactar.html";
// });

const nombre = localStorage.getItem("nombre");
document.getElementById("nomUsr").textContent = "BIENVENIDO!! "+nombre;