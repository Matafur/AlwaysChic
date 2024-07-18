
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    fetch('https://back-end-cyan-seven.vercel.app/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, password })
    })
    .then(response => response.ok ? window.location.href = './User/user.html' : alert('Login failed'))
    .catch(() => alert('An error occurred'))
});

function registro(){
    window.location.href = './Auth/register.html'
}

