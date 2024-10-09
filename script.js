// Liste des questions du quiz
const quizData = [
    {
        question: "Quel est le principal avantage de l'intelligence artificielle dans l'éducation ?",
        answers: [
            "A) Remplacer les enseignants",
            "B) Personnaliser l'apprentissage",
            "C) Augmenter les coûts",
            "D) Réduire les interactions sociales"
        ],
        correct: 1 // index de la bonne réponse (B)
    },
    {
        question: "Qu'est-ce que la pensée visuelle ?",
        answers: [
            "A) Une forme d'apprentissage uniquement par la lecture",
            "B) Une manière différente de spatialiser l’information",
            "C) Un rébus en mode pictos",
            "D) Une pensée ignorant les émotions"
        ],
        correct: 1 // index de la bonne réponse (B)
    },
    {
        question: "Comment les cartes visuelles peuvent-elles aider à développer la pensée systémique ?",
        answers: [
            "A) En simplexifiant des problèmes complexes",
            "B) En fournissant des analyses de données approfondies",
            "C) En donnant une vision globale au sujet",
            "D) En limitant les options d'apprentissage"
        ],
        correct: 2 // index de la bonne réponse (C)
    },
    {
        question: "Quelle a été la seconde révolution du savoir ?",
        answers: [
            "A) Ordinateur connecté",
            "B) Imprimerie",
            "C) IA",
            "D) l’écriture"
        ],
        correct: 1 // index de la bonne réponse (B)
    },
    {
        question: "Quel aspect de l'intelligence artificielle est particulièrement pertinent pour l'éducation ?",
        answers: [
            "A) Capacité à remplacer des manuels",
            "B) Capacité à affiner des parcours individuels",
            "C) Capacité à générer du contenu sans supervision",
            "D) Capacité à surveiller les élèves"
        ],
        correct: 1 // index de la bonne réponse (B)
    },
    {
        question: "En quoi la pensée systémique est-elle bénéfique pour résoudre des problèmes complexes ?",
        answers: [
            "A) Elle ignore les interactions entre les éléments",
            "B) Elle simplifie les problèmes à des solutions uniques",
            "C) Elle prend en compte les relations et interactions entre différents éléments",
            "D) Elle ne s'applique qu'aux sciences exactes"
        ],
        correct: 2 // index de la bonne réponse (C)
    },
    {
        question: "Quel rôle jouent les visualisations de données dans la pensée systémique ?",
        answers: [
            "A) Elles rendent les données plus confuses",
            "B) Elles aident à voir les patterns et relations",
            "C) Elles sont inutiles dans l'analyse",
            "D) Elles remplacent les données quantitatives"
        ],
        correct: 1 // index de la bonne réponse (B)
    },
    {
        question: "Qui a écrit le livre 'Les petites bulles de l’attention' ?",
        answers: [
            "A) Philippe Lachaux",
            "B) Jean Lachaux",
            "C) Jean-Philippe Lachaux",
            "D) Phil Lachaux"
        ],
        correct: 2 // index de la bonne réponse (C)
    },
    {
        question: "Pourquoi ce meuble contient des volets ?",
        answers: [
            "A) Pour faire joli",
            "B) Pour créer du mouvement",
            "C) Pour inciter le questionnement en amont d’une lecture",
            "D) Pour faire ludique"
        ],
        correct: 2 // index de la bonne réponse (C)
    },
    {
        question: "Un enseignant de CM2 qui démarre à 23 ans aujourd’hui, enseignera la dernière année de sa carrière à des jeunes qui commenceront à travailler approximativement en ?",
        answers: [
            "A) 2055",
            "B) 2060",
            "C) 2080",
            "D) 2095"
        ],
        correct: 2 // index de la bonne réponse (C)
    }
];

let currentQuestionIndex = 0;  // Index de la question actuelle
let score = 0;  // Score de l'utilisateur

// Sélectionne les éléments HTML
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('nextBtn');
const restartButton = document.getElementById('restartBtn');

// Charge une question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    // Vide les réponses précédentes
    answersElement.innerHTML = '';
    resultElement.textContent = '';
    nextButton.style.display = 'none';

    // Affiche les réponses
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersElement.appendChild(button);
    });
}

// Vérifie la réponse sélectionnée
function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        resultElement.textContent = "Bonne réponse !";
        resultElement.style.color = "green";
        score++;
    } else {
        resultElement.textContent = `Mauvaise réponse. La bonne réponse était : ${currentQuestion.answers[currentQuestion.correct]}`;
        resultElement.style.color = "red";
    }

    nextButton.style.display = 'inline-block'; // Affiche le bouton "Suivant"
}

// Passe à la question suivante
nextButton.onclick = () => {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion(); // Charge la question suivante
    } else {
        showFinalScore(); // Affiche le score final si toutes les questions sont terminées
    }
};

// Affiche le score final
function showFinalScore() {
    questionElement.textContent = `Quiz terminé ! Vous avez obtenu ${score} sur ${quizData.length}.`;
    answersElement.innerHTML = ''; // Cache les boutons de réponse
    nextButton.style.display = 'none'; // Cache le bouton "Suivant"
    restartButton.style.display = 'inline-block'; // Affiche le bouton "Recommencer"
}

// Recommencer le quiz
restartButton.onclick = () => {
    currentQuestionIndex = 0;
    score = 0;
    restartButton.style.display = 'none'; // Cache le bouton "Recommencer"
    loadQuestion(); // Recharge la première question
};

// Démarre le quiz en chargeant la première question
loadQuestion();
