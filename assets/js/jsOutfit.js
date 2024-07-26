const outfits = {
    primavera: {
        cita: ["../assets/Fotos_resultados/SprBuss1.jpg", "../assets/Fotos_resultados/SprBuss2.jpg", "../assets/Fotos_resultados/SprBuss3.jpg", "../assets/Fotos_resultados/SprBuss4.jpg", "../assets/Fotos_resultados/SprBuss5.jpg", "../assets/Fotos_resultados/SprBuss6.jpg"],
        tarde: ["../assets/Fotos_resultados/SprDay1.jpg", "../assets/Fotos_resultados/SprDay2.jpg", "../assets/Fotos_resultados/SprDay3.jpg", "../assets/Fotos_resultados/SprDay4.jpg", "../assets/Fotos_resultados/SprDay5.jpg", "../assets/Fotos_resultados/SprDay6.jpg"],
        nocturna: ["../assets/Fotos_resultados/SprNight1.jpg", "../assets/Fotos_resultados/SprNight2.jpg", "../assets/Fotos_resultados/SprNight3.jpg", "../assets/Fotos_resultados/SprNight4.jpg", "../assets/Fotos_resultados/SprNight5.jpg", "../assets/Fotos_resultados/SprNight6.jpg"]
    },
    verano: {
        cita: ["../assets/Fotos_resultados/SumBuss1.jpg", "../assets/Fotos_resultados/SumBuss2.jpg", "../assets/Fotos_resultados/SumBuss3.jpg", "../assets/Fotos_resultados/SumBuss4.jpg", "../assets/Fotos_resultados/SumBuss5.jpg", "../assets/Fotos_resultados/SumBuss6.jpg"],
        tarde: ["../assets/Fotos_resultados/SumDay1.jpg", "../assets/Fotos_resultados/SumDay2.jpg", "../assets/Fotos_resultados/SumDay3.jpg", "../assets/Fotos_resultados/SumDay4.jpg", "../assets/Fotos_resultados/SumDay5.jpg", "../assets/Fotos_resultados/SumDay6.jpg"],
        nocturna: ["../assets/Fotos_resultados/SumNight1.jpg", "../assets/Fotos_resultados/SumNight2.jpg", "../assets/Fotos_resultados/SumNight3.jpg", "../assets/Fotos_resultados/SumNight4.jpg", "../assets/Fotos_resultados/SumNight5.jpg", "../assets/Fotos_resultados/SumNight6.jpg"]
    },
    otoño: {
        cita: ["../assets/Fotos_resultados/AutBuss1.jpg", "../assets/Fotos_resultados/AutBuss2.jpg", "../assets/Fotos_resultados/AutBuss3.jpg", "../assets/Fotos_resultados/AutBuss4.jpg", "../assets/Fotos_resultados/AutBuss5.jpg", "../assets/Fotos_resultados/AutBuss6.jpg"],
        tarde: ["../assets/Fotos_resultados/AutDay1.jpg", "../assets/Fotos_resultados/AutDay2.jpg", "../assets/Fotos_resultados/AutDay3.jpg", "../assets/Fotos_resultados/AutDay4.jpg", "../assets/Fotos_resultados/AutDay5.jpg", "../assets/Fotos_resultados/AutDay6.jpg"],
        nocturna: ["../assets/Fotos_resultados/AutNight1.jpg", "../assets/Fotos_resultados/AutNight2.jpg", "../assets/Fotos_resultados/AutNight3.jpg", "../assets/Fotos_resultados/AutNight4.jpg", "../assets/Fotos_resultados/AutNight5.jpg", "../assets/Fotos_resultados/AutNight6.jpg"]
    },
    invierno: {
        cita: ["../assets/Fotos_resultados/WinBuss1.jpg", "../assets/Fotos_resultados/WinBuss2.jpg", "../assets/Fotos_resultados/WinBuss3.jpg", "../assets/Fotos_resultados/WinBuss4.jpg", "../assets/Fotos_resultados/WinBuss5.jpg", "../assets/Fotos_resultados/WinBuss6.jpg"],
        tarde: ["../assets/Fotos_resultados/WinDay1.jpg", "../assets/Fotos_resultados/WinDay2.jpg", "../assets/Fotos_resultados/WinDay3.jpg", "../assets/Fotos_resultados/WinDay4.jpg", "../assets/Fotos_resultados/WinDay5.jpg", "../assets/Fotos_resultados/WinDay6.jpg"],
        nocturna: ["../assets/Fotos_resultados/WinNight1.jpg", "../assets/Fotos_resultados/WinNight2.jpg", "../assets/Fotos_resultados/WinNight3.jpg", "../assets/Fotos_resultados/WinNight4.jpg", "../assets/Fotos_resultados/WinNight5.jpg", "../assets/Fotos_resultados/WinNight6.jpg"]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const estacion = sessionStorage.getItem('fechaEvento');
    const tipoEvento = sessionStorage.getItem('tipoEvento');
    
     console.log( estacion);
     console.log( tipoEvento);
    
    const imagesContainer = document.getElementById('imagesContainer');

    if (estacion && tipoEvento) {
        const outfit = outfits[estacion][tipoEvento];

        function randomOutfit(array, numero) {
            const arrayNuevo = array.sort(() => 0.5 - Math.random());
            return arrayNuevo.slice(0, numero);
        }

        const OutfitAzar = randomOutfit(outfit, 3);

        console.log(OutfitAzar);


        const cards = imagesContainer.querySelectorAll('.card');
        OutfitAzar.forEach((image, index) => {
            const imagenCard = cards[index].querySelector('.card-img-top');
            imagenCard.src = image;
        });

    } 
});

document.getElementById("logout").addEventListener("click", async (event) => {
    event.preventDefault();
    localStorage.clear();
    window.location.href = "../index.html";
});

document.getElementById("newOpt").addEventListener("click", function () {
    location.reload();
});