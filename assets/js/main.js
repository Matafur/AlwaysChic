document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch("https://back-end-cyan-seven.vercel.app/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ correo, password }),
        })
        if (!response.ok) {
            throw new Error('Error al iniciar sesión')
        }
        const data = await response.json()
        localStorage.setItem("Token", data.accessToken);
        response.ok ? (window.location.href = "./User/user.html")
                    : alert("Login failed. Invalid Password")
    } catch {
        console.error('Error:', error)
    }

}); 

function registro(){
    window.location.href = './Auth/register.html'
}

function contactar(){
    window.location.href = './Auth/register.html'
}


document.getElementById("contactar").addEventListener("click", function () {
    window.location.href = "pages/contactar.html";
});