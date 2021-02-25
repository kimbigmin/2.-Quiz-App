'use strict'

const quizData = [
  {
    question: '1. 민규의 휴대폰 번호는 무엇일까요?',
    a: '010-7948-2918',
    b: '010-7938-2928',
    c: '010-7948-2198',
    d: '010-7938-2918',
    correct: 'd'
  }, {
    question: '2. 민규가 일 한 돈부리 집 이름은?',
    a: '돈부리가게',
    b: '돈부리집',
    c: '돈부리돈부리',
    d: '돈까스와 돈부리',
    correct: 'a'
  }, {
    question: '3. 강철이의 성은 무엇일까?',
    a: "김씨",
    b: "임씨",
    c: "이씨",
    d: "최씨",
    correct: 'b',
  }
];


const questionEl = document.getElementById('question');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById('quiz');


const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');


let currentQuiz = 0;
let score = 0;


loadQuiz();


submitBtn.addEventListener("click", () => {
  //check to see the answer
    const answer = getSelected();

    if(answer) {
      if(answer === quizData[currentQuiz].correct) {
        score++;
      }
      console.log(answer);
      currentQuiz++;
      if (currentQuiz < quizData.length) {
          loadQuiz();
        } else {
          quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick ="location.reload()">Reload</button>`;
        }
      }    
});



function loadQuiz() {
  deselectAnswer();

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
      if(answerEl.checked) {
          answer = answerEl.id;
      }
    });

    return answer;
}


function deselectAnswer() {
answerEls.forEach((answerEl) => {
      answerEl.checked = false;
  }
);

}