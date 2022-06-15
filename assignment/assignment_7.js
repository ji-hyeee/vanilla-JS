// form
const generate = document.querySelector("#generateNumber");
const guess = document.querySelector("#guessNumber");

// input
const firstNum = document.querySelector("#generateNumber #firstNumber");
const secondNum = document.querySelector("#guessNumber #secondNumber");

// button
const button = document.querySelector("button");

// p
const choseNum = document.querySelector("#choseNumber");
const result = document.querySelector("#result");

// function
function guessNumber(yourNum, machingNum) {
  choseNum.innerText = `You chose: ${yourNum}, the machine chose ${machingNum}.`;
  yourNum = parseInt(yourNum);
  if (yourNum === machingNum) {
    result.innerText = `You won!`;
  } else {
    result.innerText = `You lose!`;
  }
}

// event
function randomNumber(event) {
  event.preventDefault();
  const yourNum = secondNum.value;
  const machingNum = firstNum.value;
  // random
  const randomNum = Math.ceil(Math.random() * machingNum);

  guessNumber(yourNum, randomNum);
}

function handleRandom() {
  guess.addEventListener("submit", randomNumber);
}

// 실시간
function gameResult() {
  firstNum.oninput = handleRandom;
}

gameResult();


// 정답 해설
// (1)
// 먼저 html 요소들을 js에서 사용할 수 있도록 선언해 줍니다.
// e.preventDefault();
// 입력이 제출되며 브라우저가 초기화되는 고유 동작을 막기 위한 코드입니다.

// (2)
// const guessInput = guessForm.querySelector("input");
// 사용자가 선택한 숫자를 입력하는 요소를 js에서 사용할 수 있게 선언해 줍니다.

// (3)
// guessInput과 maxNumber이 모두 입력이 없어 값이 비었을 땐 handleGuessSubmit함수를 빠져나옵니다.
if(guessInput.value === '' && maxNumber === ''){
  return;
}

// (4)
// const max = maxNumber.value;
// maxNumber의 값을 변수 max로 선언해 줍니다.

// (5)
// const random = Math.ceil(Math.random() * max);
// Math.random()함수로 랜덤으로 숫자를 생성합니다. 이때 Math.random()은 0에서 1보다 작은 숫자를 생성하므로 숫자가 생성되는 범위는 max를 넘지 못합니다.
// 필요한 값은 정수 형태의 숫자이기 때문에 Math.ceil()함수를 통해 값을 올림하고 소수점 이하를 없애 줍니다.
// 여기서 버림이 아닌 올림을 하는 이유는 올림을 함으로써 max까지의 수를 얻을 수 있기 때문입니다.

// (6)
// const userGuess = parseInt(guessInput.value, 10);
// <input>과 <form>태그를 통해 제출된 값은 문자열형태로 저장됩니다. guessInput.value의 타입은 현재 문자열입니다. 위 코드는 문자열 형태의 입력 값을 숫자 비교를 하기 위해 정수 형태로 바꿔주는 코드입니다.
// parseInt()함수는 문자열을 정수 형태로 바꿔주는 함수입니다. 맨 마지막의 10은 10진수로 변경하라는 의미입니다.

// (7)
// 게임의 결과를 출력하기 위한 코드입니다. html에서 작성해 둔 span태그의 innerHTML프로퍼티를 사용해 출력할 내용을 작성해 줍니다.

const resultSapn = result.querySelector("span");

resultSapn.innerHTML = 
`You chose: ${userGuess}, the machine chose: ${random}.<br/>
<strong> ${userGuess === random ? "You won!" : "You lost!"} </strong>`;