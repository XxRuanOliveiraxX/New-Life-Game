// signup.js

document.getElementById('signupForm').onsubmit = function(e) {
    e.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: newUsername, password: newPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "Usuário criado com sucesso!") {
            alert(data.message);
            window.location.href = 'login.html';
        } else {
            alert(data.message);
        }
    })
    .catch(err => console.error('Erro ao criar usuário:', err));
}
