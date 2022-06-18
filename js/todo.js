// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

////////// #7.0 Setup
// // greeting 했을 때랑 똑같이 할겨
// // form 은 submit 이벤트를 가져서 우린 기본 동작(새로고침)을 막아줄거야 (함수로)

// function handleToDoSubmit(event) {
//   event.preventDefault(); // 엔터 입력시 새로고침 방지
//   // console.log(toDoInput.value); // 잘 가져와지는 지 확인하자 / 엔터치면 잘 동작함
//   const newTodo = toDoInput.value;
//   // console.log(toDoInput);
//   toDoInput.value = "";
//   // console.log(newTodo, toDoInput.value);
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// input 의 value 를 얻어내자
// const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input")
// console.log(toDoInput.value); // 잘 가져와지는 지 확인하자 / 엔터치면 잘 동작함

// 우리는 이제 input 의 값을 넣고 엔터를 치면 사라지게 하고 싶어
// toDoInput 의 value 의 빈 값 ("") 을 넣는겨
// toDoInput.value = "";
// 근데 input value 를 비우기 전에 그 값을 저장해보자
// const newTodo = toDoInput.value; / 새로운 변수에 저장

// const newTodo = toDoInput.value; // 내가 안녕을 쓰면
// console.log(toDoInput); // 안녕
// toDoInput.value = "";
// console.log(newTodo, toDoInput.value); // 안녕 """

////////// #7.1 Adding ToDos
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// function paintToDo(newTodo) {
//   // 파라미터 이름이 newTodo 인것입니다 헷갈리기 금지
//   // console.log("i will paint", newTodo); / 확인용
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   li.appendChild(span);
//   span.innerText = newTodo; // input value
//   // console.log(li); // li 확인하기
//   toDoList.appendChild(li);
// }

// // 함수를 만들겨 / paintToDo
// // todo list 를 만들어주는 역할
// // function paintToDo(newTodo) 여기 인자는 text 가 될 거야
// // handleToDoSubmit function 이 paintToDo 를 사용하게 될거야

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   paintToDo(newTodo); // input 의 value 값을 완전히 복사한 newTodo
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// 이제 우리가 할 일은 ul에 li를 js 로 추가해주는 것
// background 할 때 배웠던 createElement 활용해서 만들자
// const li = document.createElement("li");
// 변수명은 아무거나 해줘도 상관없어 대신 태그는 확실하게 적어주자 !

// li 말고 li 안에 span 으로 만들어주고 싶어 나중에 삭제 버튼도 같이 넣어주고 싶거든
// const span = document.createComment("span");
// li.appendChild(span); / 자식 요소로 추가해주기 / appendChild

// wow
// 우리는 li 를 만들었고 span 을 만들었어
// span 을 li 에 자식요소로 맨들어주고
// span 에는 text 를 주었지
// 그 text 는 사용자가 form 에서 우리에게 준 newTodo 값이야

// 이제 해야 하는 건 li 를 ul(toDoLis) 에 추가하는 것
// toDoList.appendChild(li);
// 그냥 완전히 신나버린 걸이세요 todo list 만들어버린 걸이세요.

// 근데 문제가 있다
// 1. todo list 못 지움
// 2. 새로고침하면 다 사라짐

////////// #7.2 Deleting To Dos
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// function deleteToDo(event) {
//   // 버튼 이벤트 클릭시 li 삭제 !
//   const li = event.target.parentElement;
//   li.remove();
// }

// function paintToDo(newTodo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   span.innerText = newTodo;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   paintToDo(newTodo);
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   li.remove();
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   paintToDo(newTodo);
// }
// toDoForm.addEventListener("submit", handleToDoSubmit);

// todo 를 삭제하는 btn 만들기
// button 은 click event 를 기다리고 있어야한다 / 삭제 해줘야 하니까요
// 우선 버튼을 만들자
// const button = document.createElement("button");
// 삭제하는 이모지를 넣어주자
// button.innerText = "🔥"
// li 에 button 을 자식요소로 추가해주자
// li.appendChild(button);

// 버튼에게 일을 시켜보자 (이벤트 맹글기)
// button.addEventListener("click", deleteToDo);

// 이벤트리스너에 들어가는 함수를 맹글자
// function deleteToDo

// 문제 !
// 콘솔에 간단하게 확인해봤을 때 생기는 문제 === 어디를 클릭한 건지 알 수 없다.
// button 이 클릭됐다는 건 알아
// 어떤 li 를 제거해야하는 지 몰라

// 여러 button 들이 같은 event 를 기다리고 있고 , 같은 function 을 실행시키고 있어
// 그래서 어떤 button이 클릭됐는지 몰라

// 우리는 클릭에 대한 정보를 가지고 있어
// 우리에겐 click event 에 대한 정보를 알고 있어
// function deleteToDo(event) 인자로 event 를 넣어주자
// 콘솔로 클릭된 button 이 어떤 건지에 대한 단서를 얻을 수 있는지 확인해보자
// onsole.log(event);

// path 를 확인해보면 어떤 element 에서 클릭이 일어났는지 확인할 수 있어
// 클릭은 button 에서 일어났지만 button 은 li 안에 있다
// 클릭 target 이 무엇인지 체크할 수 있다구
// console.log(event.target);

// button 안을 확인해보자
// console.dir(event.target);
// 많은 정보들 중 parentNode 를 살펴보자
// button 의 부모가 누구냐 >>> li

// button 의 부모를 선택해보자구
// console.dir(event.target.parentElement);

// 어떤 text 가 들어있는지 확인할 수도 있다구
// console.dir(event.target.parentElement.innerText);

// console.log 에 넣으면 li 를 볼 수 있셔
// console.log(event.target.parentElement);

// 정리해볼까?
// 우린 Event 에 대한 유용한 정보를 얻고 있어
// 하지만 event 자체로는 많은 정보를 주지 않아 >>> event.target
// target 은 클릭된 HTML element
// 모든 HTML element 에는 하나 이상의 property 가 있어 >>> 그 중에 parentElement
// parentElement 은 클릭된 element 의 부모 element
// button 의 부모는 li

// now we know, who should we delete
// li !

// li 변수에 넣어주기
// const li = event.target.parentElement;
// li 지워주기
// li.remove();

////////// #7.3 Saving To Dos
// Todo 를 저장해보자
// 새로고침을 하면 todo list 가 다 사라진다
// 브라우저에 저장하려면? >>> loacl storage !

// 단계별로 시작해보자
// todo 저장하기
// todo 불러오기
// 목록을 입력하면 로컬 스토리지에 저장을 먼저하고 새로고침하면 로컬 스토리지에서 불러오는겨

// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// // 배열
// const toDos = [];

// // localStorage 에 저장
// function saveToDos() {
//   localStorage.setItem("todos", JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   // 버튼 이벤트 클릭시 li 삭제 !
//   const li = event.target.parentElement;
//   li.remove();
// }

// function paintToDo(newTodo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   span.innerText = newTodo;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   toDos.push(newTodo); // array push
//   paintToDo(newTodo);
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// 저장 먼저해보자
// array 를 만들어주자
// const toDos = [];

// newTodo 가 그려질 때 마다 그 텍스트를 array 에 push 하고 싶어
// paintToDo 에서 newTodo 가 실행되기 전에 먼저 배열에 저장할겨
// toDos.push(newTodo);

// 이제 localStorage 에 저장하자
// 근데 localStorage 에는 텍스트만 저장할 수 있어 ( X array )
// 그래도 함 해보자
// 함수를 하나 만들어줄겨
// function saveToDos(){}
// 이 함수의 역할은 toDos array 의 내용을 로컬 스토리지에 넣는 것
// function saveToDos(){
//   localStorage.setItem("todos", toDos);
// }

// 정리
// 사용자가 form 을 submit 하면
// 우리는 input 을 비우고 newTodo 에 값을 복사
// (newTodo value)text 를 toDos array 에 push 하고
// 화면에 todo 를 그려주고
// 그 다음에 todo 들을 저장하자
// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   toDos.push(newTodo); // array push
//   paintToDo(newTodo);
//   saveToDos();
// }

// 새로고침하면 로컬스토리지에는 저장되어 있지만 화면에 보이지 않아
// 새로고침 후 다시 value 를 입력하면 저장된 값이 바뀐다

// 기존에 있던 todo 들을 화면에 보여주자
// 근데 로컬스토리지에 텍스트 말고 배열로 저장됐으면 좋겠어
// localStorage.getItem("todos")
// "[\"a\",\"b\",\"c\",\"d\"]" // Text 지만 array 처럼 보여

// 브라우저의 기능을 사용해보자
// 자바스크립트의 object, array 들 어떤 것이든 string 으로 바꿔주는 기능
// stringfy()
// 예시
// const player = { name: "hye" };
// JSON.stringify(player) >>> '{"name":"hye"}';

// toDos 를 텍스트로 만들어주자구
// localStorage.setItem("todos", JSON.stringify(toDos));

////////// #7.4 Loading To Dos part One
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// // 변수에 로컬스토리지 이름 저장
// const TODOS_KEY = "todos";

// // 배열
// const toDos = [];

// // localStorage 에 저장
// function saveToDos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   // 버튼 이벤트 클릭시 li 삭제 !
//   const li = event.target.parentElement;
//   li.remove();
// }

// function paintToDo(newTodo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   span.innerText = newTodo;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   toDos.push(newTodo); // array push
//   paintToDo(newTodo);
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// const savedToDos = localStorage.getItem(TODOS_KEY);
// // console.log(savedToDos); / 확인용 ["d","d"] / 문자열

// if (savedToDos !== null) {
//   const parsedToDos = JSON.parse(savedToDos);
//   // console.log(parsedToDos); / 확인용 ['d', 'd'] / 배열
//   parsedToDos.forEach((el) => console.log("hello", el));
// }

// string 을 배열로 만들어보자
// JSON.parse
// JSON.stringify([1, 2, 3, 4]); // "[1,2,3,4]"
// JSON.parse("[1,2,3,4]"); // [1,2,3,4]

// 우린 이제 지루한 문자열을 배열로 만들 수 있어
// localStorage.getItem("todos")
// "[\"a\",\"b\",\"c\",\"d\"]"
// JSON.parse(localStorage.getItem("todos"))
// ["a","b","c"];

// 이제 해보자구 / 뭘
// savedToDos 라는 변수로 로컬스토리지 에 있는 정보 얻기
// "todos" 가 여러번 쓰이므로 변수에 담아주자
// const TODOS_KEY = "todos";

// 우린 가끔 saveToDos 가 null 이 될 때도 있다는 걸 안다
// 바로 로컬스토리지가 텅텅 비어있을때 !

// 만약 saveToDos 가 로컬스토리지에 존재하면 / if (saveToDos !== null)
// saveToDos 를 배열로 바꿔줘라 ~ / 왜냐면 우리가 배열같은 문자열로 만들어줬음
// const parsedToDos = JSON.parse(saveToDos);

// 배열은 똒똑이야
// 자바스크립트에서 정말 중요한 Data Structure 야
// 각각의 배열 요소들에 함수를 실행시켜주자 / 화면에 보여주거나 텍스트를 바꾸거나 등
// forEach() 메소드 사용 !
// 배열 요소 갯수만큼 콘솔로 hello 가 찍힐거야 알겠지 ~
// parsedToDos.forEach((el) => console.log("hello");
// 하지만 가장 좋은 처리되고 있는 요소가 어떤 것인지 아는 것
// parsedToDos.forEach((el) => console.log("hello", el); // hello a / hello b ...

////////// #7.5 Loading To Dos part Two
// 겁나 배웠어
// 참조형 자료를 문자열로 바꾸기 JSON.stringfy / 그 반대 JSON.parse
// array 요소 하나씩 함수 실행시키기 / forEach() / 함수 만들어서 넣기 / 화살표함수

// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY = "todos";
// let toDos = []; // 재할당 해주기 위해서 let 으로 선언 키워드 바꿔주기

// function saveToDos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   li.remove();
// }

// function paintToDo(newTodo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   span.innerText = newTodo;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   toDos.push(newTodo);
//   paintToDo(newTodo);
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// const savedToDos = localStorage.getItem(TODOS_KEY);

// if (savedToDos !== null) {
//   const parsedToDos = JSON.parse(savedToDos);
//   toDos = parsedToDos; // 재할당
//   parsedToDos.forEach(paintToDo); // 화면에 보여주기
// }

// 이제 우리가 원하는 건
// parsedToDos array 요소들을 가지고 화면에 보여주고 싶어
// 우린 이미 item 을 화면에 보여주는 paintToDo function 을 가지고 있지
// parsedToDos.forEach(paintToDo);

// 문제
// 로컬스토리지에 정보들이 덮어 씌워진다
// 이전 것과 새로운 것 모두 유지하고 싶어

// 덮어 씌워지는 이유는 toDos array 가 항상 비어져 있기 때문이야
// submit 을 할 때마다 빈 array 에 push 를 하게 된다
// toDos array 는 이전 todo 정보를 가지고 있지 않아 >>> 로컬 스토리지에 있지롱

// 해결해보자
// toDos array 를 빈 배열로 시작하는 대신 변수 키워드를 let 으로 변경해서 재할당이 가능하게 만들어주자
// 그리고 toDos 에 parsedToDos 를 재할당 해주자
// toDos = parsedToDos;

////////// #7.6 Deleting To Dos part One
// 로컬 스토리지에서 delete 반영을 안 해줘
// 삭제 버튼을 누르고 새로고침을 하면 다시 생긴단 말여
// 로컬 스토리지는 toDos array(데이터베이스)를 복사해두는 곳이야 /둘은 달라

// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY = "todos";
// let toDos = [];

// function saveToDos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   console.log(li.id); // id
//   li.remove();
// }

// function paintToDo(newTodo) {
//   const li = document.createElement("li");
//   li.id = newTodo.id; // li id
//   const span = document.createElement("span");
//   span.innerText = newTodo.text; // object text
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   const newTodoObj = {
//     // object 맹글기
//     id: Date.now(),
//     text: newTodo,
//   };
//   toDos.push(newTodoObj); // object push
//   paintToDo(newTodoObj); // object 화면에 보여주기
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// const savedToDos = localStorage.getItem(TODOS_KEY);

// if (savedToDos !== null) {
//   const parsedToDos = JSON.parse(savedToDos);
//   toDos = parsedToDos;
//   parsedToDos.forEach(paintToDo);
// }

// 우리는 어떤 item 을 지워야 하는지 알 수 없어
// deleteToDo 는 어떤 element 를 지워야 하는 지 알고 있어
// 그치만 어떤 todo text 를 데이터베이스에서 지워야 하는지 몰라
// 만약에 text 가 동일하다면? 어떤 걸 지웠는 지 알 수 있을까?
// Todo 들에게 ID 같은 걸 줘서 구분하자 >>> object
// [{id:1, text:"hi"}] 이런 느낌

// 랜덤으로 ID 를 만드는 방법을 알아보자
// Date.now()
// 밀리초 (1000분의 1초)를 주는 함수 <<< 랜덤처럼 보여

// 데이터베이스에 To Do 내용을 추가하는 곳으로 가보자
// 바로바로 toDos.push(newTodo); / 매번 사용자가 적어둔 text 를 push
// text 대신 object 를 push 하고 싶어
// object 를 만들자
// const newTodoObj = {
//   id: Date.now(),
//   text: newTodo,
// };
// 그리고 newTodo 대신 우리가 만들어준 object 를 넣자구
// toDos.push(newTodoObj);

// id 를 만들었으니가 사용해보자
// 이 id 를 HTML 에 두고 싶어

// paintToDo(newTodo); / text 인 newTodo 를 가지고 있어 / object 로 바꾸자
// paintToDo(newTodoObj); // object 주기
// 문제는 화면에 출력시  [object, Object] 이렇게 나옴
// 실제 글자를 보고 싶어 >>> paintToDo 를 다시 바꾸자

// 지금 paintToDo 는 text 에서 object 로 받는 게 바꼈어
// object dpsms id, text 두개의 키가 있잖아
// 그럼 span.innerText = newTodo(파라미터).text 가 되어야 해
// span.innerText = newTodo.text;

// 오케이 이제 화면에도 잘 나와
// id 는 우리가 왜 만든걸까..? >>> id 로 li item 을 구별하고 싶었어
// 데이터베이스에 id 를 저장하는 옵션을 줬어 / objcet 로 말이지

// 우린 이제 삭제할 수 있어 !
// X 를 누른 버튼의 id 를 얻어야 돼

// deleteToDo 에서 li 를 삭제하기 전에 li 를 얻었어
// const li = event.target.parentElement;
// 이젠 li.id 도 얻을 수 있지
// console.log(li.id)

////////// #7.7 Deleting To Dos part Two
// array 에서 element 를 삭제하려면 paintTodo 에서 무슨일이 일어나는지를 이해해야돼
// forEach 함수는 배열 요소마다 함수를 실행해 <<< 중요

// 비슷한 걸 쓸거야 filter
// 지우고 싶은 item 을 빼고 새로운 array 를 만들어
// filter 는 무조건 true 를 반환해 / false 면은 안 껴준다는 소리야

////////// #7.8 Deleting To Dos part Three

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  // console.log(li.id);
  li.remove();
  toDos = toDos.filter((el) => el.id !== parseInt(li.id)); // filter
  saveToDos(); // 다시 한 번 불러주세요 !
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

// filter 함수는 새로운 array 를 만들어준다는 걸 잊지말자
// toDos 를 업데이트 해줘야돼 / 로컬 스토리지에 저장되니까 말이여

// filter 사용 / Id 가 다른 것들만 새로 맹글어줘 ~
// toDos = toDos.filter(el => el.id !== li.id);

// 또 안돼...
// 왜냐면 el.id 는 Number type / li.id 는 string type
// li.id 를 숫자로 바꿔주자 >>> parseInt

// toDos DB 에서 todo 를 지운 후에 saveToDO 를 한 번 더 불러줘야 한다
// 왜요?
