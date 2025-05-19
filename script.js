// Dados das questões
const questions = [
    "Posso me magoar profundamente com a menor crítica.",
    "Tendo a levar as coisas muito a sério e reagir exageradamente a pequenos problemas.",
    "Prefiro trabalhar sozinho(a) para evitar distrações e manter o controle da situação.",
    "Frequentemente me preocupo com o que os outros pensam de mim.",
    "Sou uma pessoa que busca constantemente novas experiências e aventuras.",
    "Tenho dificuldade em tomar decisões sem consultar outras pessoas.",
    "Sou extremamente organizado(a) e metódico(a) em tudo que faço.",
    "Costumo adiar tarefas importantes até o último momento.",
    "Tenho facilidade em perceber as necessidades emocionais dos outros.",
    "Prefiro liderar do que ser liderado(a) em situações de grupo.",
    "Sou perfeccionista e frequentemente me cobro demais.",
    "Evito conflitos a todo custo, mesmo quando isso significa ceder em questões importantes.",
    "Tenho dificuldade em expressar minhas emoções abertamente.",
    "Sou uma pessoa que valoriza a independência acima de tudo.",
    "Frequentemente me sinto responsável pelo bem-estar dos outros.",
    "Tenho uma forte necessidade de ser reconhecido(a) e admirado(a).",
    "Sou muito observador(a) e analítico(a) antes de tomar decisões.",
    "Costumo ser o(a) mediador(a) em situações de conflito.",
    "Tenho dificuldade em relaxar e aproveitar o momento presente.",
    "Sou uma pessoa que preza pela autenticidade e detesto falsidade.",
    "Tenho tendência a ser pessimista e antecipar problemas.",
    "Sou naturalmente entusiasmado(a) e motivado(a) por novas ideias.",
    "Valorizo a estabilidade e a segurança acima da aventura.",
    "Tenho facilidade em me adaptar a diferentes ambientes e pessoas.",
    "Sou extremamente leal às pessoas que considero importantes.",
    "Tenho dificuldade em estabelecer limites e dizer \"não\" aos outros.",
    "Sou uma pessoa que busca constantemente o autoconhecimento e crescimento pessoal.",
    "Tendo a ser competitivo(a) mesmo em situações triviais.",
    "Prefiro planejar com antecedência a improvisar no último momento.",
    "Sou uma pessoa que valoriza mais a harmonia do que ter razão em discussões."
];

// Mapeamento das questões para os tipos do Eneagrama
const questionTypeMapping = {
    0: 4,  // Questão 1 -> Tipo 4
    1: 6,  // Questão 2 -> Tipo 6
    2: 5,  // Questão 3 -> Tipo 5
    3: 3,  // Questão 4 -> Tipo 3
    4: 7,  // Questão 5 -> Tipo 7
    5: 6,  // Questão 6 -> Tipo 6
    6: 1,  // Questão 7 -> Tipo 1
    7: 9,  // Questão 8 -> Tipo 9
    8: 2,  // Questão 9 -> Tipo 2
    9: 8,  // Questão 10 -> Tipo 8
    10: 1, // Questão 11 -> Tipo 1
    11: 9, // Questão 12 -> Tipo 9
    12: 5, // Questão 13 -> Tipo 5
    13: 8, // Questão 14 -> Tipo 8
    14: 2, // Questão 15 -> Tipo 2
    15: 3, // Questão 16 -> Tipo 3
    16: 5, // Questão 17 -> Tipo 5
    17: 9, // Questão 18 -> Tipo 9
    18: 1, // Questão 19 -> Tipo 1
    19: 4, // Questão 20 -> Tipo 4
    20: 6, // Questão 21 -> Tipo 6
    21: 7, // Questão 22 -> Tipo 7
    22: 6, // Questão 23 -> Tipo 6
    23: 3, // Questão 24 -> Tipo 3
    24: 2, // Questão 25 -> Tipo 2
    25: 2, // Questão 26 -> Tipo 2
    26: 4, // Questão 27 -> Tipo 4
    27: 8, // Questão 28 -> Tipo 8
    28: 1, // Questão 29 -> Tipo 1
    29: 9  // Questão 30 -> Tipo 9
};

// Descrições dos tipos do Eneagrama
const eneagramTypes = {
    1: {
        name: "Tipo 1 - O Perfeccionista",
        description: "Pessoas do tipo 1 são éticas, dedicadas e confiáveis. Elas têm um forte senso de certo e errado e são professores naturais. Elas se esforçam para melhorar o mundo, para evitar erros e para serem corretas em tudo o que fazem."
    },
    2: {
        name: "Tipo 2 - O Prestativo",
        description: "Pessoas do tipo 2 são prestativas, atenciosas e interpessoais. Elas são movidas pelo desejo de serem amadas e necessárias, e expressam seus sentimentos positivos para os outros. Elas se sentem compelidas a ajudar os outros e costumam ser generosas com seu tempo e energia."
    },
    3: {
        name: "Tipo 3 - O Realizador",
        description: "Pessoas do tipo 3 são seguras, ambiciosas e energéticas. Elas se preocupam com sua imagem e com o que os outros pensam delas. Elas são orientadas para o sucesso e se adaptam para se destacar. São frequentemente exemplos de sucesso em nossa cultura."
    },
    4: {
        name: "Tipo 4 - O Individualista",
        description: "Pessoas do tipo 4 são sensíveis, introspectivas e expressivas. Elas são autênticas, pessoais e sinceras, mas também podem ser temperamentais e autocentradas. Elas são movidas pela necessidade de se sentirem únicas e de encontrar significado em suas vidas."
    },
    5: {
        name: "Tipo 5 - O Investigador",
        description: "Pessoas do tipo 5 são perceptivas, inovadoras e isoladas. Elas são capazes de concentração e foco intensos em desenvolver ideias complexas e habilidades. Independentes e analíticas, elas podem se tornar preocupadas com seus pensamentos."
    },
    6: {
        name: "Tipo 6 - O Leal",
        description: "Pessoas do tipo 6 são comprometidas, orientadas para a segurança e engajadas. Elas são confiáveis, trabalhadoras e responsáveis, mas também podem ser defensivas e ansiosas. Elas se preocupam com segurança e com o que pode dar errado."
    },
    7: {
        name: "Tipo 7 - O Entusiasta",
        description: "Pessoas do tipo 7 são ocupadas, divertidas e espontâneas. Elas são versáteis, otimistas e produtivas, mas podem se dispersar e ser impulsivas. Elas buscam experiências positivas e estimulantes e são capazes de planejar atividades agradáveis."
    },
    8: {
        name: "Tipo 8 - O Desafiador",
        description: "Pessoas do tipo 8 são poderosas, dominantes e confiantes. Elas se protegem e protegem os outros. Elas são decisivas e assertivas, mas também podem ser confrontadoras e intimidadoras. Elas têm uma forte necessidade de controlar seu ambiente."
    },
    9: {
        name: "Tipo 9 - O Pacificador",
        description: "Pessoas do tipo 9 são receptivas, tranquilas e complacentes. Elas são confiáveis, de bom temperamento e agradáveis, mas também podem ser muito teimosas, embora de forma passiva. Elas buscam paz e harmonia, evitando conflitos."
    }
};

// Variáveis globais
let currentQuestion = 0;
const totalQuestions = questions.length;
const answers = Array(totalQuestions).fill(null);

// Elementos DOM
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-test');
    const introSection = document.getElementById('intro-section');
    const testForm = document.getElementById('test-form');
    const questionsContainer = document.getElementById('questions-container');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const submitButton = document.getElementById('submit-btn');
    const progressBar = document.getElementById('progress-bar');
    const currentQuestionElement = document.getElementById('current-question');
    const totalQuestionsElement = document.getElementById('total-questions');

    // Inicializar o número total de questões
    totalQuestionsElement.textContent = totalQuestions;

    // Iniciar o teste
    startButton.addEventListener('click', function() {
        introSection.style.display = 'none';
        testForm.style.display = 'block';
        showQuestion(currentQuestion);
    });

    // Botão anterior
    prevButton.addEventListener('click', function() {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion(currentQuestion);
        }
    });

    // Botão próximo
    nextButton.addEventListener('click', function() {
        // Verificar se uma opção foi selecionada
        const selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
        
        if (selectedOption) {
            // Salvar resposta
            answers[currentQuestion] = parseInt(selectedOption.value);
            
            // Avançar para a próxima questão
            if (currentQuestion < totalQuestions - 1) {
                currentQuestion++;
                showQuestion(currentQuestion);
            }
        } else {
            alert('Por favor, selecione uma opção antes de continuar.');
        }
    });

    // Enviar formulário
    testForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Verificar se todas as questões foram respondidas
        const unanswered = answers.findIndex(answer => answer === null);
        
        if (unanswered !== -1) {
            alert(`Por favor, responda a questão ${unanswered + 1} antes de ver o resultado.`);
            currentQuestion = unanswered;
            showQuestion(currentQuestion);
            return;
        }
        
        // Calcular resultado
        const result = calculateResult();
        
        // Redirecionar para a página de resultado com os dados
        localStorage.setItem('eneagramResult', JSON.stringify(result));
        window.location.href = 'resultado.html';
    });

    // Função para mostrar a questão atual
    function showQuestion(index) {
        // Atualizar o número da questão atual
        currentQuestionElement.textContent = index + 1;
        
        // Atualizar a barra de progresso
        const progress = ((index + 1) / totalQuestions) * 100;
        progressBar.style.width = `${progress}%`;
        
        // Habilitar/desabilitar botões de navegação
        prevButton.disabled = index === 0;
        
        if (index === totalQuestions - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'block';
        } else {
            nextButton.style.display = 'block';
            submitButton.style.display = 'none';
        }
        
        // Criar o HTML da questão
        questionsContainer.innerHTML = `
            <div class="question-container">
                <div class="question-text">${index + 1}. ${questions[index]}</div>
                <div class="options-container">
                    <label class="option-label">
                        <input type="radio" name="q${index}" value="4" class="option-radio" ${answers[index] === 4 ? 'checked' : ''}>
                        <span class="option-circle option-4"></span>
                        <span class="option-text">Concordo</span>
                    </label>
                    <label class="option-label">
                        <input type="radio" name="q${index}" value="3" class="option-radio" ${answers[index] === 3 ? 'checked' : ''}>
                        <span class="option-circle option-3"></span>
                        <span class="option-text">Concordo Parcialmente</span>
                    </label>
                    <label class="option-label">
                        <input type="radio" name="q${index}" value="2" class="option-radio" ${answers[index] === 2 ? 'checked' : ''}>
                        <span class="option-circle option-2"></span>
                        <span class="option-text">Discordo Parcialmente</span>
                    </label>
                    <label class="option-label">
                        <input type="radio" name="q${index}" value="1" class="option-radio" ${answers[index] === 1 ? 'checked' : ''}>
                        <span class="option-circle option-1"></span>
                        <span class="option-text">Discordo</span>
                    </label>
                </div>
            </div>
        `;
    }

    // Função para calcular o resultado
    function calculateResult() {
        // Inicializar contadores para cada tipo
        const typeScores = {
            1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
        };
        
        // Somar pontos para cada tipo com base nas respostas
        for (let i = 0; i < answers.length; i++) {
            const type = questionTypeMapping[i];
            typeScores[type] += answers[i];
        }
        
        // Encontrar os três tipos com maior pontuação
        const sortedTypes = Object.entries(typeScores)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(entry => ({
                type: parseInt(entry[0]),
                score: entry[1],
                percentage: Math.round((entry[1] / (4 * Object.values(questionTypeMapping).filter(t => t === parseInt(entry[0])).length)) * 100)
            }));
        
        return {
            primaryType: sortedTypes[0].type,
            allTypes: sortedTypes,
            typeScores: typeScores
        };
    }
});
