const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// #7.0 Setup
// greeting 했을 때랑 똑같이 할겨
// form 은 submit 이벤트를 가져서 우린 기본 동작(새로고침)을 막아줄거야 (함수로)

function handleToDoSubmit(event) {
  event.preventDefault(); // 엔터 입력시 새로고침 방지
  // console.log(toDoInput.value); // 잘 가져와지는 지 확인하자 / 엔터치면 잘 동작함
  const newTodo = toDoInput.value;
  // console.log(toDoInput);
  toDoInput.value = "";
  // console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

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
