document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;
    const answers = {
        question1: "A",
        question2: "C",
        question3: "B"
    };

    for (let question in answers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }

    let resultMessage = "";
    if (score === 3) {
        resultMessage = "Parabéns! Você acertou todas as perguntas!";
    } else if (score === 2) {
        resultMessage = "Muito bom! Você acertou 2 de 3 perguntas.";
    } else if (score === 1) {
        resultMessage = "Você acertou 1 pergunta. Continue estudando!";
    } else {
        resultMessage = "Infelizmente, você não acertou nenhuma pergunta. Tente novamente!";
    }

    document.getElementById("result").innerHTML = `
        <div class="alert alert-info">${resultMessage}</div>
        <p>Sua pontuação: ${score} de 3</p>
    `;
});
