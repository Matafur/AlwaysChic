const nombre = localStorage.getItem("nombre");
document.getElementById("nomUsr").textContent = "CORDIAL SALUDO!! "+nombre;

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

document.getElementById("logout").addEventListener("click", async (event) => {
    event.preventDefault();
    localStorage.clear();
    window.location.href = "../index.html";
});