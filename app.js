//// #4.0 Input Values
// const loginForm = document.querySelector("#login-form")
// querySelector() 를 사용할 때는 대상이 id 인지 명확히 해주기
// querySelector 는 classname, tagname 모두 검색이 가능하므로
const loginForm = document.getElementById("login-form");

// input, buttom 끌어오기
// HTML element 안에 있는 element 가져오기
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// 또 다른 방법
// const loginInput = document.querySelector("#login-form input");

// input 에 이름을 적고 button 을 click 했을 때 console.log() 하기
// click event 를 loginButton 에 연결해보자

function loginBtnClick(){
    console.dir("hello", loginInput.value); // input 에 작성하는 텍스트를 출력하자
    // console.log("click!") / 잘 실행되는지 확인해보자
}

loginButton.addEventListener("click", loginBtnClick);

// 콘솔에 잘 나와
// 우린 이제 입력되는 value 를 얻고 싶어
// 내가 입력한 텍스트를 보고싶엉

// 우선 콘솔로 input 의 내부 내용을 확인해보자
// console.dir(loginInput);

// 많은 정보 중에 우리가 확인하고 싶은 건 value!
// value === input 안에 있는 텍스트
// 우린 이제 input 의 내용을 가져오려면 어떤 property 를 찾아봐야 하는지 알게 됐어 value !
// console.dir(loginInput.value);

// 문제 발생
// console.dir("hello", loginInput.value);
// input 입력이 없으면 hello 만 보여준다
// 입력값이 있을 때만 발생했으면 좋겠다 / 냅다 인사 싫다
// if else 로 관리해보자