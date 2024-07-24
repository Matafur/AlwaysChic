// ESTABA SALIENDO UN ERROR porque el botón con  el "id" llamado "contactar" está en comentario
// document.getElementById("contactar").addEventListener("click", function () {
//     window.location.href = "../pages/contactar.html";
// });

const nombre = localStorage.getItem("nombre");
document.getElementById("nomUsr").textContent = "BIENVENIDA!! "+nombre;

document.getElementById('consultarOutfit').addEventListener('click', function() {
    
    const ciudadEntrega = document.getElementById('ciudadEntrega').value;
    const direccionEntrega = document.getElementById('direccionEntrega').value;
    const fechaEvento = document.getElementById('estacion').value;
    const tipoEvento = document.getElementById('tipoEvento').value;

    if (ciudadEntrega && direccionEntrega && fechaEvento && tipoEvento && 
        ciudadEntrega !== "Selecciona la ciudad de entrega" && 
        tipoEvento !== "Selecciona el tipo de evento") {
        sessionStorage.setItem('ciudadEntrega', ciudadEntrega);
        sessionStorage.setItem('direccionEntrega', direccionEntrega);
        sessionStorage.setItem('fechaEvento', fechaEvento);
        sessionStorage.setItem('tipoEvento', tipoEvento);
        window.location.href = './outfit.html';  
    } else {
        alert("Por favor, completa todos los campos del formulario.");
    }
});