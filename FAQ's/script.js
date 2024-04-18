// Selecionando todas as perguntas
const questions = document.querySelectorAll('.question');

// Iterando sobre cada pergunta
questions.forEach(question => {
    // Adicionando um ouvinte de evento de clique a cada pergunta
    question.addEventListener('click', () => {
        // Selecionando a resposta associada à pergunta clicada
        const answer = question.nextElementSibling;

        // Alternando a visibilidade da resposta ao clicar na pergunta
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            // Selecionando o ícone dentro da pergunta
            const toggleIcon = question.querySelector('.toggle-icon img');
            // Alterando o atributo src do ícone de minus para plus
            toggleIcon.src = 'icon-plus.svg';
        } else {
            answer.style.display = 'block';
            // Selecionando o ícone dentro da pergunta
            const toggleIcon = question.querySelector('.toggle-icon img');
            // Alterando o atributo src do ícone de plus para minus
            toggleIcon.src = 'icon-minus.svg';
        }
    });
});
