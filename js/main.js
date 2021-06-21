'use strict'

const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲームは次のうちどれ？',
    answers: [
    'スーパーファミコン', 
    'プレイステーション２',
    'Nintendo Switch',
    '任天堂DS'
    ],
    correct: '任天堂DS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [
    'MOTHER2', 
    'スーパーマリオブラザーズ３',
    'スーパードンキーコング',
    '星のカービィ'
    ],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーⅣの主人公は？',
    answers: [
    'フリオニール', 
    'クラウド',
    'ティーダ',
    'セシル'
    ],
    correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// const question = 'ゲーム市場、最も売れたゲームは次のうちどれ？';
// const answers = [
//   'スーパーファミコン', 
//   'プレイステーション２',
//   'Nintendo Switch',
//   '任天堂DS'];
//   const correct = '任天堂DS';

  document.getElementById('js-question').textContent = quiz[quizIndex].question;

  const $button = document.getElementsByTagName('button');
  let buttonLength = $button.length;

  // $button[0].textContent = answers[0];
  // $button[1].textContent = answers[1];
  // $button[2].textContent = answers[2];
  // $button[3].textContent = answers[3];


  // クイズの問題文、選択肢を定義
  const setupQuiz = () => {
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
    }
  }
  setupQuiz();


  const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
      window.alert('正解');
      score++;
    } else {
      window.alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quizLength) {
      setupQuiz();
    }else {
      window.alert('終了、あなたの正解数は' +  score + '/' + quizLength + 'です。');
    }
  };

// ボタンクリックの正誤判定

let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};



  // $button[0].addEventListener('click', (e) => {
  //   clickHandler(e);
  // });

  // $button[1].addEventListener('click', (e) => {
  //   clickHandler(e);
  // });

  // $button[2].addEventListener('click', (e) => {
  //   clickHandler(e);
  // });

  // $button[3].addEventListener('click', (e) => {
  //   clickHandler(e);
  // });