const question = document.getElementById("question");
const daButton = document.getElementById("daButton");
const nuButton = document.getElementById("nuButton");

const questions = [
    "Vrei să îmi dai bani?",
    "Ești sigură?",
    "Ești foarte sigură?",
    "Chiar nu vrei să îmi dai bani?",
    "Ultima șansă...",
];

let currentQuestionIndex = 0;

nuButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        question.textContent = questions[currentQuestionIndex];
        nuButton.style.transform = `scale(${1 - currentQuestionIndex * 0.2})`;
        daButton.style.transform = `scale(${1 + currentQuestionIndex * 0.2})`;
    } else {
        nuButton.style.display = "none";
    }
});

daButton.addEventListener("click", () => {
    alert("Mulțumesc! 🎉");
});