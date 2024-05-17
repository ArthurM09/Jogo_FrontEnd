const palavraSecreta = "morango";
const dica = document.getElementById("dica");
const palavraInput = document.getElementById("palavra");
const verificarBtn = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

let tentativas = 0;

// Função para verificar a palavra
function verificarPalavra() {
    tentativas++;

    const palavraDigitada = palavraInput.value.trim().toLowerCase(); // Remove espaços em branco e converte para minúsculas

    if (palavraDigitada === palavraSecreta) {
        resultado.textContent = "Parabéns! Você acertou!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Errado! Tente novamente.";
        resultado.style.color = "red";

        if (tentativas === 3 && !dica.classList.contains("mostrar")) {
        dica.classList.add("mostrar");
        }
    }

    palavraInput.value = ""; // Limpa o campo de entrada
}

// Adiciona evento de clique ao botão
verificarBtn.addEventListener("click", verificarPalavra);

// Adiciona evento de troca de linha ao campo de entrada
palavraInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Impede o comportamento padrão do Enter (quebrar a linha)
    verificarPalavra();
  }
});