// ==============================
// MOSTRAR ROTEIRO
// ==============================

const btnRoteiro = document.getElementById("btnRoteiro");
const roteiro = document.getElementById("roteiro");

btnRoteiro.addEventListener("click", function () {

    roteiro.classList.toggle("escondido");

    if (roteiro.classList.contains("escondido")) {

        btnRoteiro.textContent = "Ver ideia do roteiro";

    } else {

        btnRoteiro.textContent = "Ocultar roteiro";

    }

});


// ==============================
// FINALIZAR PROJETO
// ==============================

const btnConclusao = document.getElementById("btnConclusao");
const mensagem = document.getElementById("mensagem");

btnConclusao.addEventListener("click", function () {

    mensagem.textContent =
        "🎉 Projeto concluído! A IA pode ser uma ótima parceira para a criatividade.";

    btnConclusao.textContent = "Projeto concluído ✓";

    btnConclusao.style.background = "#27ae60";

});
