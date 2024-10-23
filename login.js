document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validação simples
    if (username === "user" && password === "password") {
        // Redireciona para a página do jogo após login bem-sucedido
        window.open('./html/game.html', '_blank', 'fullscreen=yes'); // Caminho atualizado
    } else {
        alert('Credenciais Inválidas');
    }
// Quando a página carregar
window.onload = function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').value = username;
        document.getElementById('rememberMe').checked = true;
    }
}

// Quando o formulário for enviado
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();  // Evita o comportamento padrão de envio do formulário

    const username = document.getElementById('username').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    if (rememberMe) {
        // Salvar apenas o username no Local Storage
        localStorage.setItem('username', username);
    } else {
        // Limpar o Local Storage
        localStorage.removeItem('username');
    }

    // Aqui você pode adicionar o código de autenticação (chamadas de API)
    console.log('Login com:', username);

    // Redirecionar para a página principal após login (exemplo)
    window.location.href = '/pagina_principal';
}

});
	