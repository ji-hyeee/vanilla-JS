//// #4.0 Input Values
// const loginForm = document.querySelector("#login-form")
// querySelector() 를 사용할 때는 대상이 id 인지 명확히 해주기
// querySelector 는 classname, tagname 모두 검색이 가능하므로

// const loginForm = document.getElementById("login-form");

// input, buttom 끌어오기
// HTML element 안에 있는 element 가져오기
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 또 다른 방법
// const loginInput = document.querySelector("#login-form input");

// input 에 이름을 적고 button 을 click 했을 때 console.log() 하기
// click event 를 loginButton 에 연결해보자

// function loginBtnClick(){
//     console.dir("hello", loginInput.value); // input 에 작성하는 텍스트를 출력하자
//     // console.log("click!") / 잘 실행되는지 확인해보자
// }

// loginButton.addEventListener("click", loginBtnClick);

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





//// #4.1 Form Submission
// username 유효성 검사
// username 이 비어있으면 안되고,
// 너무 긴 username 이어도 안된다

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function loginBtnClick(){
//     // console.dir("hello", loginInput.value); 
//     // 기존에 있던 걸 변수에 담아주자
//     const username = loginInput.value;

//     if(username === ''){
//         // console.log('please write your name'); // 확인용
//         alert('please write your name'); // 사용자가 볼 수 있게 바꿔주자
//     } else if(username.length > 15){ // 문자열 길이 구하기 string.length
//         alert('Your name is too long');
//     }
// }

// loginButton.addEventListener("click", loginBtnClick);

// 조건문을 사용해도 되지만 유효성 검사는 브라우저 자체 기능을 사용할 수도 있다 !
// 그것은 바로바로 input >> go to html

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function loginBtnClick(){
//     const username = loginInput.value;
//     console.log(username);
// }

// loginButton.addEventListener("click", loginBtnClick);

// Log in 을 클릭하면 URL 에 이상한게 따라붙는다
// http://127.0.0.1:5500/index.html?
// 값을 입력하고 버튼을 누르면 새로고침이 실행된다. 값이 사라져버려.
// 웹사이트를 재시작시키고 있는 것. 
// 이유는 form 이 submit 되고 있기 때문이다

// input 안에 있는 button 을 누르거나 
// type 이 submit 이 input 을 클릭하면 내가 작성한 form 이 submit 된다
// 이제 버튼 클릭에 신경쓰지 않아도 돼. enter 를 눌러도 submit 이 되거든
// form 안에서 enter 를 누르고 input 이 더 존재하지 않는다면 자동으로 submit 된다
// form 안에 있는 버튼을 눌렀을 때도 자동으로 submit 된다

// 더 이상 click 에 신경 쓸 필요가 없다
// 우리의 관심사는 form 을 submit 하는 것
// 우리는 브라우저가 새로고침하지 않고 user 정보를 저장하도록 하고 싶엉





//// #4.2 Events
// submit 이라는 event 가 발생하는 걸 아예 막거나 중간에 개입해서
// submit event 가 발생했다는 걸 파악하고 싶어

// const loginForm = document.querySelector("#login-form"); // 로그인 폼 가져오기
// const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit(event){ // 인자 적어주기
//     // 이게 뭐냐면 event 의 기본 동작(새로고침) 발생을 막는 함수
//     // 이제 버튼을 클릭해도 새로고침이 안된다구 !
//     event.preventDefault();
//     console.log(loginInput.value); // 원래 event 였다
// }

// loginForm.addEventListener('submit', onLoginSubmit);

// form 의 submit event 를 감지하고 있는데
// submit 은 enter 를 누르거나 버튼을 클릭할 때 발생한다는 사실 기억하기
// 브라우저에서 실행하면 Log in 버튼을 눌렀을 때 잠깐 나타나고 바로 사라져버렸다
// 우리가 목표의 절반만 달성했다구
// form 을 submit 할 때 입력값을 받아내는 것 >>> submit event 감지 완료
// 우리가 못한 것은 새로고침을 막는 것 >>> 새로고침은 form submit 의 기본 동작

// 우리가 addEventListener 를 작성할 때 함수를 실행하지 않아  / ()를 안 쓴다고
// submit evnet 가 발생하면 브라우저가 알아서 function 을 실행시켜 준다 >>> 중요
// 정확히는 브라우저가 실행시키는 게 아니야
// 브라우저에서는 onLoginSubmit function (함수) 를 호출하고
// 브라우저가 function 을 실행시키고 있기는 하지만 onLoginSubmit() 소괄호 안에서 우리에게 정보를 주고 있다
// 브라우저는 브라우저 내에서 Event 로부터 정보를 잡아내서 함수 실행버튼을 누르고 있다 

// 이벤트 발생시 브라우저가 함수를 호출하게 되는데
// 첫번째 인자로써 추가적인 정보를 가진채로 호출하게 된다
// 인자를 직접 적어보자구 >>> event
// 일단 이것도 한 번 적어보자 >>> event.preventDefault();
// 콘솔을 확인했을 때 확인했을 때 정보를 얻을 수 있다

// 우리가 지금 하고 있는 건 onLoginSubmit 이라는 함수를 만들고
// 이 함수가 하나의 인자(argument)를 받도록 하고 있는 것
// 끝
// 함수가 하나의 인자를 받고록 하고 그걸 자바스크립트에 넘겨주고 있다
// 모든 eventListener function 의 첫번째 argument 는 항상 지금 막 벌어진 일들에 대한 정보가 될 것이다
// 자바스크립트는 그 정보를 무료로 제공한다 우리는 공간만 제어하면 된다
// argument 공간만 제공하면 JS 가 알아서 방금 일어난 event 에 대한 정보를 지닌 argument 를 채워넣을 것이다
 
// 그렇다면 preventDefault 함수는 뭘까?
// event 의 기본행동 발생을 막는 것 ! (새로고침) 

// eventListener 에 어떤 함수를 추가하던 간에
// 자바스크립트는 첫번째 인자로 발생된 event 에 대한 정보를 줄 것이다

// function onLoginSubmit(){  // 이렇게 아무것도 안 쓰면 어떤 정보도 받지 않겠다는 것
//     event.preventDefault();
//     console.log(event);
// }

// 하지만 여기에 공간을 만들어주면 자바스크립트에서 event 를 채워준다
// function onLoginSubmit(event){ 
//     event.preventDefault();
//     console.log(event);
// }





//// #4.3 Events part Two
// 링크의 기본동작을 막아보자

// const loginForm = document.querySelector("#login-form"); 
// const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit(event){ 
//     event.preventDefault();
//     console.log(loginInput.value); 
// }

// loginForm.addEventListener('submit', onLoginSubmit);

// // 연습 예제 a 태그
// const link = document.querySelector("a");

// function handleLinkClick(event){ // 자리만 제공해주자구
//     // alert 으로 page 의 다른 동작을 막았다
//     // alert 의 ok 를 누르면 다시 기본 동작이 실행된다
//     // alert('clicked!')
//     event.preventDefault();
//     console.dir(event) // event 내부를 확인해보자
// }

// link.addEventListener('click', handleLinkClick);

// 이전에도 말했듯 JS가 이벤트 함수를 보게 된다면
// 링크를 클릭했을 때 함수를 실행시켜준다
// handleLinkClick( 어쩌구 )

// 우린 가끔 기본 동작을 막고 싶을 때가 있다
// 그럴때 JS 는 함수 실행 + 함수의 첫번째 인자로 object 를 넣어준다
// handleLinkClick({ 어쩌구 }) <<< 규칙
// 이 object 안에는 우리가 정해준 event 에 대한 여러 정보가 담겨있다
// handleLinkClick({ information about the event that just happened })
// 우리는 자리만 제공해주면 돼 / 공간을 만들고 받기만 하면된다고

// console 로 확인하면 MouseEvent 객체를 볼 수 있다 / click event
// 좌표를 확인할 수 있다 <<< 유저가 어디를 클릭했는지 알 수 있음

// 기본 동작을 막아보자
// 더 이상 다음 페이지로 이동하지 않는다
// event.preventDefault();

// 이벤트 내부를 확인해보자
// console.dir(event)
// 좌표, path, type 등 다양한 정보가 있다

// addEventListener 직접 실행하지 않기 중요중요
// event.preventDefault(); 기본 동작 멈추기





//// #4.4 Getting Username
// 유저가 이름을 제출하면 form 을 없애고 싶어
// 방법 2개
// html 요소 자체를 없애버려
// css 를 이용해서 숨겨 >>> css 사용해보자 >>> go to css

// const loginForm = document.querySelector("#login-form"); 
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting") // id 찾아주기
// const HIDDEN_CLASSNAME = "hidden"; // classname 변수에 할당

// function onLoginSubmit(event){ 
//     event.preventDefault();
//     // classname 추가
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     // 콘솔로 확인
//     // console.log(username); 
//     // h1 텍스트 추가
//     // greeting.innerText = "Hello " + username;
//     greeting.innerText = `Hello ${username}`; // 백틱 사용
//     // h1 classname 제거 
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener('submit', onLoginSubmit);

// classname 을 추가해주고 브라우저에서 값 입력후 버튼을 누르면
// Form 은 사라졌지만 입력값은 콘솔에 기록된다

// 다음 단계 !
// 다른 HTML 요소 추가하기 >>> go to html

// 우리가 할 일 !
// 기본 동작 막아주기
// event.preventDefault();
// hidden classname 을 더해줘서 form 을 숨기고
// loginForm.classList.add("hidden");
// 유저의 이름을 변수로 저장해주고, 그 이름을 h1 안에 넣어주자 >> go to html again

// h1 안에 greeting 에 있는 텍스트를 추가해주자 
// greeting.innerText = "Hello " + username;

// 우리가 하나 안 해준게 있어
// 바로 h1 에 classname 을 제거하는 것 ! // 그래야 화면에 hello + 이름 이 나오겠지?
// greeting.classList.remove("hidden");

// 우리는 hidden 을 2번 쓰고 있으니까 변수로 지정해주자
// const HIDDEN_CLASSNAME = "hidden";
// 변수명은 왜 다 대문자 인가용? >>> its 관습
// string 만 포함된 변수는 대문자로 표기하고 string 을 저장하고 싶을 때 사용

// 미션 성공 유저한테 인사하기
// 문제는 유저를 기억하지 못하는 것
// 새로고침 할 때마다 새로 로그인 해야 한다 >>> 계속 이름이 저장되어 있으면 좋겠어





//// #4.5 Saving Username
// value 를 저장하는 방법을 배워보자 / user 에게 매번 질문하기 번거로우니까
// 기억하기 !
// 이 작업 역시 자주 하는 작업이다 classname을 추가하고 삭제하는 것 처럼

// API !
// 브라우저에 무언가를 기억하게 해주는 기능 >>> localStorage
// 개발자도구 Application > Local Storage 에서 확인 가능

// localStorage 의 멋진 method 들 중
// selItem 을 활용하자 >>> 정보 저장
// localStorage.setItem 사용하기
// localStorage.setItem("저장할 값의 이름", "저장할 값")

// 값을 저장했으니까 가져올 수도 있다구
// localStorage.getItem("저장한 값의 이름")

// 지울수도 있다
// localStorage.removeItem("저장한 값의 이름")

// 이제 우리가 할 일 >>> 유저가 이름을 제출하면 저장하기

// const loginForm = document.querySelector("#login-form"); 
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting") 
// const HIDDEN_CLASSNAME = "hidden"; 

// function onLoginSubmit(event){ 
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     // 키 이름 : username, 값 : 우리가 만들어준 변수 username / 둘이 다른겨 !
//     localStorage.setItem("username", username);
//     greeting.innerText = `Hello ${username}`; 
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener('submit', onLoginSubmit);

// 하지만 아직도 새로고침하면 form 이 표시된다





//// #4.6 Loading Username
// form 을 보여주기 전에, addEventListener 를 하기 전에
// localStorage 가 비어있는지 확인하자
// 정보가 있다면 form 을 보여주면 안돼

// 우리가 할 일
// local storage 에 유저 정보 유무를 확인하기
// 정보가 없으면 결과는 null

// const loginForm = document.querySelector("#login-form"); 
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting") 

// const HIDDEN_CLASSNAME = "hidden"; 
// const USERNAME_KEY = "username"

// function onLoginSubmit(event){ 
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     localStorage.setItem(USERNAME_KEY, username);
//     paintGreetings(savedUsername);
// }

// // 동일한 코드를 함수로 맹글어 버리자
// function paintGreetings(name){
//     greeting.innerText = `Hello ${name}`; 
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY); // string 변수 설정

// if(savedUsername === null){
//     // show the form
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener('submit', onLoginSubmit);
// } else {
//     // show the h1(greetings)
//     paintGreetings(savedUsername);
// }

// form 과 h1 이 모두 숨은 상태로 시작해야할 것 같아 >>> go to html

// function paintGreetings(username){
//     greeting.innerText = `Hello ${username}`; 
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }
// username 을 인자로 받는 함수를 만들었다
// 어디서 호출되느냐에 따라 rname 은 달라질겨
// local storage 에 유저 정보가 있으면 거기서 받아서 인자로 넣어줄거다
// 없다면 input 에서 받은 user 를 가진 paintGreetings 를 호출할거야 

// 헷갈릴까봐 가져온 똑똑이들의 답변
// 이 두 개에 들어간 'username' 때문에
// 저처럼 헷갈리신 분들 있을 것 같아서 공유해봅니다.
// function paintGreetings(username) {
// greeting.innerText = `Hello ${username}`;

// 결론은, 이 함수 한정, username을 아무거나로 바꿔도 됩니다.
// 저는 abc로 바꿔놨어요.

// 여기서 abc는 단순 '매개변수(parameter)'입니다.
// 완성된 함수를 써먹을 때 괄호 안에 입력한 값들을
// 함수 안에 실행되어야 하는 식에 대입해주는 역활이에요.

// function plus(a, b) { console.log(a + b);}
// plus(2, 3); 여기서 괄호 안 2, 3은 '인자(Argument)'입니다.
// 함수 속 식으로 전달되는 값들이죠.
// 그러면 a + b 자리에 2 + 3이 되서 콘솔 로그에 5가 표시 되겠죠?

// 즉, 자바스크립트한테 이렇게 알려주는 거죠.

// function paintGreetings(abc) =====>
// 이 함수 안에 만들어야 되는 식이 있으니,
// 함수가 호출 될 때 입력된 '인자'를 받아서
// 식에 대입해 줄 '매개변수'를 abc 라고 하겠습니다.

// greeting.innerText = `Hello ${abc}`; =====>
// 나중에 이 함수가 호출되면 `Hello ${abc}`라는
// 식 속에 입력된 '인자'를 넣으세요.

// paintGreetings(username); 이면 상수 username의 loginInput.value가
// abc 자리로 가는 거고, paintGreetings(savedUsername);이면 localStorage에서
// 꺼내오는 상수 USERNAME_KEY에 대응하는 키 username의 입력된 이름 value가 abc 자리로 가는 거죠.





//// #4.7 Super Recap
// 리팩토링
const loginForm = document.querySelector("#login-form"); 
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting") 

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username"

function onLoginSubmit(event){ 
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(); // 인자 지움
}

// 동일한 코드를 함수로 맹글어 버리자
function paintGreetings(){ // 인자 지움
    // 변수를 만들고 local storage 에 있는 username 을 찾도록 작성해주자
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // string 변수 설정

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // show the h1(greetings)
    paintGreetings(); // 인자 지움
}

// paintGreetings 함수는 따로 인자를 받을 필요가 없다
// 왜냐면 우리는 local storage 에 유저정보가 존재하는 걸 알고 있잖니
// 이렇게 코드를 쓰면 로컬스토리지 조회를 두 번 한다 / 전 코드가 더 낫다//...?