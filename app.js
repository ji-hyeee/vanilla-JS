//// #3.0 The Document Object
// 자바스크립트가 브라우저에 어떻게 움직이는지 확인해보자

// 자바크스립트를 사용하는 이유는, HTML과 상호작용하기 위해서!
// 그 말은 HTML Element들을 JavaScript를 통해 변경하고, 읽을 수 있다는 말씀

// 브라우저의 핵심 Object 를 보여줄게
// document === HTML을 가리키는 객체(object)
// 자바스크립트 관점으로 보여준다

// console.log(document.title) // Momentum

// 이걸 보면 알 수 있듯이
// 자바스크립트는 HTML 을 읽어오는 것

// 변경도 가능
// document.title = "hi"





//// #3.1 HTML in Javascript
// 특정한 무언가를 가져오기
// id로 어떻게 가지고 올 수 있을까?

// getElementById 함수
// HTML 에서 id 를 통해 element 를 찾아준다
// const title = document.getElementById("title");
// console.log(title);
// console.dir(title); // element 를 더 자세히 확인해보자

// 중요한 것 / 나중에 배울 것
// textContent
// outerHTML, outerText
// localName
// innerHTML, innerText
// id
// hidden
// autofocus

// 자바스크립트로 html 변경하기 ~
// title.innerText = "Got you!"

// getElementById 함수
// HTML 에서 id 를 통해 element 를 찾아준다

// 우리가 할 수 있는 것
// document 항목들을 가지고 오기
// document 항목들을 변경하기





//// #3.2 Searching For Elements 
// 저번 시간엔 HTML코드와 HTML element를 JS로 접근하는 방법을 배웠다
// id 를 사용해서 말이지
// 보통은 className 을 사용

// class 로 바꿔주면 에러가 발생한다
// Uncaught TypeError: Cannot set properties of null (setting 'innerText')at app.js:43:17
// null 의 innerText property 를 바꿀 수 없다 는 오류
// 왜 이런 에러가 생겼을 까
// 코드 내에 어떤 값이 null 이라는 뜻
// 아무것도 없는 값에 innterText 에 접근하려고 한 것 !

// 이런 에러가 발생하면 어떻게 하는지 알겠죠?
// 찾아오려는 id 가 없으니까 생기는 오류입니다

// getElementsByClassName 함수
// Element 를 한 번에 많이 가져와햐 하는 경우
// const hellos = document.getElementsByClassName("hello");
// console.log(hellos); // array 로 값이 보여준다 [h1, h1, h1]

// div 안에 있는 h1 가져오기
// <div class="hello">
//     <h1>Grab me!</h1>
// </div>

// 가져오기 위해서 함수를 만들어보자
// h1 하나만 가져오고 싶어
// const title = document.getElementsByTagName("h1");
// console.log(title); // 좋지 않아 이것도 배열로 가져오기 때문이지 [h1] / 우리가 만들 배열로 뭘 해줄 수가 없엉

// 니코가 생각하는 element 를 가지고 오는 가장 멋진 방법
// querySelector / querySelectorAll
// element 를 CSS 방식으로 검색할 수 있다

// const title = document.querySelectorAll(".hello h1");
// console.log(title); 

// 똑같은 태그들이 있다면 어떤 걸 출력해줄까?
// <div class="hello">
//     <h1>Grab me!</h1>
// </div> X 3

const title = document.querySelector(".hello h1");
console.log(title); // 맨 첫번째 요소만 출력합니당

// 같은 코드
// const title = document.querySelector("#hello"); === 
// const title = document.getElementById("hello");


// 함수 정리
// getElementsByClassName 함수
// Element 를 한 번에 많이 가져와햐 하는 경우

// getElementsByTagName 함수
// tag name 을 입력해서 Element 를 가져올 수 있다

// querySelector 함수
// element 를 CSS 방식으로 검색할 수 있다
// 하나의 element 를 return 해준다 / 맨 첫번째 요소만 출력합니당

// querySelectorAll 함수
// selector 안의 조건에 부합하는 모든 Element 를 가져다준다 // 배열로 !





//// #3.3 Events
// app.js 가 있기 때문에 js 를 통해 HTML 의 내용을 가져올 수 있어
// html에 app.js 를 import 해주었기 때문이지

// Element 의 내부를 보고 싶다면 console.dir 를 사용해보자
// object 로 표시한 element 를 보여준다

// 많은 property 중에 sytle을 알아보자
// xx.style.color
// title.style.color = "blue"

// 우리가 자바스크립트에서 대부분 작업할 일은 event를 listen 하는 것!
// on 으로 시작하는 것들 === event

// what is event?
// 내가 click 하면 its event
// mouse 가 tag 위로 올라가도 event
// 입력을 끝내거나 이름을 적거나 enter 를 눌러도 event

// click event 를 배워보자
function handleTitleClick(){
    console.log("title was clicked");
    title.style.color = "blue"
}

title.addEventListener("click", handleTitleClick); // 이벤트가 발생하면 함수를 실행시켜줘라 
// 두번째 인자로 넣는 함수는 함수() 실행시키면 안된다 ! 괄호 넣지 말기 !

// 정리
// addEventListener 이벤트함수
// 말 그대로 event 를 listen 한다

// click
// 클릭하면 이벤트 발생 !





//// #3.4 Events part Two
// event 찾아보기
// 1. mdn
// 2. console.dir(element) // on 시작하는 것들 !

// ouseenter 이벤트함수 를 사용해보자
function handleMouseEnter(){
    console.log("mouse is here")
    title.innerText = "Mouse is here"
}

title.addEventListener("mouseenter", handleMouseEnter)

// mouseleave 를 사용해보자
function handleMouseLeave(){
    title.innerText = "Mouse is gone"
}

title.addEventListener("mouseleave", handleMouseLeave)

// mouseenter
// 마우스가 해당 요소에 올려지면 이벤트 발생!

// mouseleave
// 마우스가 해당 요소에서 떨어지면 이벤트 발생!





//// #3.5 More Events
// event 를 사용하는 두 가지 방법
// 1. title.addEventListener() / title.addEventListener("click", handleTitleClick)
// 2. title.onclick() / title.onclick = handleTitleClick;

// 니코가 addEventListener 를 더 선호하는 이유
// 나중에 removeEventListener 를 통해서 이벤트를 제거할 수 있다

// window 의 event 를 더 알아보자
// resize event 알아보자
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"; // window 의 화면크기가 바뀔 경우에 스타일을 줄겨
}

window.addEventListener("resize", handleWindowResize);

// copy event 를 알아보자
function handleWindowCopy(){
    alert("copier!");
}

window.addEventListener("copy", handleWindowCopy);

// offline event
function handleWindowOffline(){
    alert("SOS no WIFI");
}

window.addEventListener("offline", handleWindowOffline);

// online event
function handleWindowOnline(){
    alert("ALL GOOOOOOD");
}

window.addEventListener("online", handleWindowOnline);

// event 정리
// resize
// window 화면이 바뀔 때 이벤트 발생 !

// copy
// window 화면이 복사를 할 때 (ctrl + c)이벤트 발생 !

// offline
// wifi가 연결이 안되어있을 때 이벤트 발생 !

// online
// wifi가 연결 되어있을 때 이벤트 발생 !