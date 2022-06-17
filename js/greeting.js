// // #4.6 Loading Username
// form 을 보여주기 전에, addEventListener 를 하기 전에
// localStorage 가 비어있는지 확인하자
// 정보가 있다면 form 을 보여주면 안돼

// 우리가 할 일
// local storage 에 유저 정보 유무를 확인하기
// 정보가 없으면 결과는 null

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(savedUsername);
}

// 동일한 코드를 함수로 맹글어 버리자
function paintGreetings(name) {
  greeting.innerText = `Hello ${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // string 변수 설정

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the h1(greetings)
  paintGreetings(savedUsername);
}

// form 과 h1 이 모두 숨은 상태로 시작해야할 것 같아 >>> go to html

// function paintGreetings(username){
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }
// username 을 인자로 받는 함수를 만들었다
// 어디서 호출되느냐에 따라 rname 은 달라질겨
// local storage 에 유저 정보가 있으면 거기서 받아서 인자로 넣어줄거다
// 없다면 input 에서 받은 user 를 가진 paintGreetings 를 호출할거야
