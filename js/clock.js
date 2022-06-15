// const clock = document.querySelector("#clock");
// clock.innerText = "hellooooo"

//// #5.0 Intervals
// learn intervals & timeout 
//  interval === '매번' 일어나야 하는 무언가 / 매2초

//  function sayHello(){
//     console.log("hello");
//  }

 // 이 함수를 매 2초마다 실행하고 싶어
//  setInterval() 을 사용해보자
//  setInterval 은 2개의 argument 를 받아
//  첫번째는 실행하고자 하는 function
//  두번째는 호출되는 function 간격을 몇 ms 로 할지 / 지연시간

// setInterval(sayHello, 3000) // 3초마다 실행





//// #5.1 Timeouts and Dates
// 이번엔 function 을 딱 한 번만 호출할건데 일정 시간이 흐른 뒤에 호출할겨
// setTimeout() 을 사용해보자
// setInterval() 과 비슷하지만 동작은 완전히 달라
// setTimeout(sayHello, 3000)

// 우리의 임무는 시간과 분을 보여주는 것
// 자바스크립트가 가지고 있는 Data object 라는 멋진 tool 을 써보자 >>> Date
// new Date(); // 오늘의 날짜를 가져온다
// const date = new Date();
// date.getDate() // 15일
// date.getDay() // 수요일
// date.getFullYear() // 2022년
// date.getHours() // 20시
// date.getMinutes() // 53분
// date.getSeconds() //14초

// date.getSeconds() 를 실행할 때마다 새로운 초를 보여준다고
// 그럼 이제 배운 걸 사용해보자
// 매번 새로운 걸 보여주려면 둘 중 어떤 걸 써야 할까? >>> setInterval()

// const clock = document.querySelector("#clock");

// function getClock(){
//     const date = new Date();
//     // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
//     clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }
// getClock();
// setInterval(getClock, 1000);

// 시계를 만들었어 !
// 우리가 하고 있는 건 매초마다 새로운 Date object 를 만들고 있는거야
// new Date object 는 날짜, 시간, 분, 초에 대한 정보를 가지고 있고
// 우리는 그런 object 를 매초마다 새로 create 하고 있는 거야 / like clock

// 근데 우리는 1초 뒤에 실행을 시키고 있어
// 웹사이트가 load 되자마자 실행시키고 그 다음에 매초마다 실행시키자
// getClock() / 먼저 실행시켜주면 돼

// 이제 콘솔대신 화면에 출력시키자
// clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

// 다음 문제! bug 수정하기
// 20:10:0 <<< 초 부분을 00 으로 만들고 싶어





//// #5.2 PadStart
// 우리가 해볼 것은 string 을 문자 두 개로 채우는 것 !
// 새로운 함수를 배워볼겨
// padStart() / padEnd()

// padStart() 는 string 에 쓸 수 있는 함수
// 사용예시 "1".padStart(2, "0")
// 2는 문자열의 길이
// "0" 은 "1" 앞에 추가할 문자열
// "01"

// "12".padStart(2, "0")
// 이미 문자열의 길이가 2라면 뒤에 뭘 추가해도 아무런 변화가 없다!

// "hye".padStart(31,"love")
// 'lovelovelovelovelovelovelovehye'

const clock = document.querySelector("#clock");

function getClock(){
    // 최소 2글자가 되도록 하고 그렇지 않으면 앞에 0을 추가하자
    // 우선 만들어놨던 걸 분리를 시켜보자
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes() ).padStart(2, "0");
    const seconds= String(date.getSeconds() ).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

// date.getHours() 에는 padStart() 를 쓸 수 없어 >>> 숫자잖아
// number > text >>> String()
// String(new Date().getHours())

// tip
// learn mdn 
// clock.innerText = new Date().toLocaleTimeString();
// 변주 한 번에 수정하기
// command + shift + L