document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Trocar a imagem do olho (aberto ou fechado)
    const eyeIcon = document.getElementById('togglePassword');
    if (type === 'password') {
        eyeIcon.innerHTML = '<img src="../img/icons8-trancar.svg" alt="Olho Fechado">';
    } else {
        eyeIcon.innerHTML = '<img src="../img/icons8-fechadura-aberta.svg" alt="Olho Aberto">';
    }
});
