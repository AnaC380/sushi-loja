document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const loginMessage = document.getElementById("login-message");


    // Credenciais (Exemplo de login)
    const userCredentials = {
        username: "ajnklioio@gmail.com",
        password: "abcd1234"
    };


    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();


        // Captura valores dos campos
        const enteredUsername = document.getElementById("username").value;
        const enteredPassword = document.getElementById("password").value;


        // Regex para validar formato de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        // Validação
        if (!emailRegex.test(enteredUsername)) {
            loginMessage.textContent = "Por favor, insira um e-mail válido.";
            loginMessage.style.color = "red";
            return;
        }
        if (enteredPassword.length < 8) {
            loginMessage.textContent = "A senha deve ter pelo menos 8 caracteres.";
            loginMessage.style.color = "red";
            return;
        }


        // Verificação de credenciais
        if (enteredUsername === userCredentials.username && enteredPassword === userCredentials.password) {
            loginMessage.textContent = "Login bem-sucedido! Redirecionando...";
            loginMessage.style.color = "green";
            setTimeout(() => {
                window.location.href = "pagina-sushi.html"; // Página de destino
            }, 1500);
        } else {
            loginMessage.textContent = "Usuário ou senha incorretos. Tente novamente.";
            loginMessage.style.color = "red";
        }


        loginForm.reset();
    });
});
