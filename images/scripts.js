// Mostrar/ocultar la contraseña
const showPassword = document.getElementById('showPassword');
const passwordField = document.getElementById('password');

showPassword.addEventListener('change', () => {
    if (showPassword.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

// Redirigir a la página del grupo
function goToGroupPage(group) {
    // Aquí podrías hacer la redirección a la página correspondiente
    alert('Redirigiendo al grupo ' + group);
}

// Cerrar sesión
function logout() {
    window.location.href = 'index.html';
}
