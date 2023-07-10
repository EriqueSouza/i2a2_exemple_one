document.getElementById("resetForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  var email = document.getElementById("email").value;

  if (email === "") {
    alert("Por favor, preencha o campo de e-mail.");
  } else {
    alert("O link para redefinição de senha foi enviado para o endereço informado.");
    window.location.href = "index.html";
  }
});

