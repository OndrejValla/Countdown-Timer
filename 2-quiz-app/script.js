const quizData = [{
    question: 'How old is Ondrej?',
    a: '25',
    b: '32',
    c: '39',
    d: '46',
    correct: 'b',
}, {
    question: 'What was the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
}, {
    question: 'Who is the President of the USA?',
    a: 'Donald Trump',
    b: 'Bill Clinton',
    c: 'Joe Biden',
    d: 'George Bush',
    correct: 'c',
}, {
    question: 'What does HTML stands for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'JASON Object Notation',
    d: 'Health technical memoranda',
    correct: 'a',
}, {
    question: 'What year was JavaScript launched?',
    a: '1994',
    b: '1995',
    c: '1996',
    d: 'None of the above',
    correct: 'b',
}];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}


submitBtn.addEventListener('click', () => {
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        //TO DO show results
        alert('You have finished!')
    }
});