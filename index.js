document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    // Redireciona para a página de produtos
    window.location.href = "produtos.html";
  }
});

