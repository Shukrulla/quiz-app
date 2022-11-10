const quizData = [
    {
        question: "Futbol bo'yicha Jahon Chempionati 2014-yil G'olibi?",
        a: "Fransiya",
        b: "Ispaniya",
        c: "Germaniya",
        d: "Uzbekistan",
        correct: "c",
    },
    {
        question: "Shimoliy Amerikadagi eng katta mamlakat qaysi?",
        a: "AQSH",
        b: "Kanada",
        c: "Grenlandiya",
        d: "Brazilya",
        correct: "b",
    },
    {
        question: "Dunyodagi eng katta okean?",
        a: "Hind okeani",
        b: "Antarktida",
        c: "Tinch okeani",
        d: "Qora dengiz",
        correct: "c",
    },
    {
        question: "Birinchi velosiped qayerda ixtiro qilingan?",
        a: "Germaniya",
        b: "Niderlandiya",
        c: "Fransiya",
        d: "Mayli hay O'zbekiston",
        correct: "a",
    },
    {
        question: "Inson tanasidagi eng kuchli mushak qaysi?",
        a: "Til",
        b: "Bo'yin",
        c: "Yelka",
        d: "Oyoq",
        correct: "a",
    },
    {
        question: "Dunyodagi eng uzun daryo?",
        a: "Nil",
        b: "Amazonka",
        c: "Volva",
        d: "Niagara",
        correct: "a",
    },
    {
        question: "Dunyoning qaysi davlatida velosiped eng katta tarqalgan transport turi hisoblanadi?",
        a: "Amerika",
        b: "Niderlandiya",
        c: "Xitoy",
        d: "Polsha",
        correct: "c",
    },
    {
        question: "2021-yilda Olimpiada o'yinlari qayerda o'tkazildi?",
        a: "Qatar",
        b: "London",
        c: "Tokio",
        d: "Rim",
        correct: "c",
    },
    {
        question: "Boshu boru miyasi yoq?",
        a: "Toshbaqa",
        b: "Qiz",
        c: "Shoshoncha",
        d: "Ikkalasi ham to'g'ri",
        correct: "c",
    },
    
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});