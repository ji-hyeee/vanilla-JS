const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const body = document.querySelector("body");
const btn = document.querySelector("button");

function change() {
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundImage = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
}

btn.addEventListener("click", change);

// 솔루션
// const colors = [
//   "#ef5777",
//   "#575fcf",
//   "#4bcffa",
//   "#34e7e4",
//   "#0be881",
//   "#f53b57",
//   "#3c40c6",
//   "#0fbcf9",
//   "#00d8d6",
//   "#05c46b",
//   "#ffc048",
//   "#ffdd59",
//   "#ff5e57",
//   "#d2dae2",
//   "#485460",
//   "#ffa801",
//   "#ffd32a",
//   "#ff3f34"
// ];
// const btn = document.querySelector("button");

// function handleClick() {
//   const a = colors[Math.floor(Math.random() * colors.length)];
//   const b = colors[Math.floor(Math.random() * colors.length)];
//   if (a === b) {
//     return handleClick();
//   }
//   document.body.style.background = `linear-gradient(to left, ${a}, ${b})`;
// }

// btn.addEventListener("click", handleClick);

// 정답 해설
// (1)
// const btn = document.querySelector("button");
// 먼저 btn태그를 js에서 사용할 수 있도록 선언해 줍니다.

// (2)
// const a = colors[Math.floor(Math.random() * colors.length)];
// colors 배열에서 색상을 선택하기 위한 코드입니다. 현재colors.length는 18입니다.
// 색상을 랜덤으로 선택하기 위해 Math.random()함수를 사용합니다. colors.length을 최댓값으로 사용해 Math.random() * colors.length으로 작성하면 0~17까지의 난수를 얻을 수 있습니다. (Math.random()함수의 범위에 1이 포함되지 않아 18을 얻을 수 없습니다.)
// Math.random()함수는 부동소수점을 반환하기 때문에 소수점이 존재합니다. Math.floor()함수를 사용해 소수점을 없애 줍니다.

// (3)
// const b = colors[Math.floor(Math.random() * colors.length)];
// 위와 동일한 코드입니다. 두 가지 색상을 선택해야 하므로 선택된 색상을 각각 변수 a와b로 선언해 줍니다.

// (4)
// 선택된 두 가지 색상이 겹치는 것을 방지하기 위한 코드입니다. 변수 a와b가 동일할 경우 handleClick함수를 다시 실행합니다. 이렇게 함수 내부에 자기 자신을 호출하는 함수를 재귀 함수라 합니다. 참고 자료 - recursion
// if (a === b) {
//   return handleClick();
// }

// (5)
// document.body.style.background = `linear-gradient(to left, ${a}, ${b})`;
// 최종적으로 선택된 두 가지 색상을 사용해 body태그의 배경을 linear-gradient로 바꿔줍니다. body의 style객체의 background프로퍼티를 이용합니다. `linear-gradient(to left, ${a}, ${b})`는 템플릿 리터럴이라고 하는 문자열 표기법입니다.
// 참고 자료 - template literal

// (6)
// btn.addEventListener("click", handleClick);
// 작성한 함수를 사용해 이벤트 핸들러를 등록합니다. btn에 click이벤트가 발생할 때 handleClick함수가 실행되어야 합니다.
