//// #2.0 Your First JS Project
// 자바스크립트 프로그래밍 언어를 다뤄보자
// 브라우저의 console 사용하기

// function 을 나중에 사용할 것이다
// 자바스크립트는 항상 널 기다리고 있으니 넌 사용만 하면 돼
alert("hi")
// 알림창 발생

1 + 1
// 2

// 콘솔에서는 한 줄씩 작성 >>> make JS file

// 새로운 파일에 자바스크립트 파일을 만들어볼겨
// VScode 로 JS / CSS 를 작성해서 브라우저로 열면 작성한 텍스트를 보여준다

// 우리는 브라우저에서 실행되는 걸 보고 싶다구 !
// 브라우저가 자바크스립트 파일을 실행시키게 하고 싶다면?
// 바로바로바로 **HTML**

// 브라우저는 HTML을 열고, HTML은 CSS와 JS를 가져온다

// CSS >>> link
// JS >>> script





//// #2.1 Basic Data Types
// 데이터 타입 (type) 알아보기

// 숫자 (number)
2  
// integer === full number(정수)

1.5
// float(소수…?)

// 문자 (string)
// hello (x)
// “hello” >>> 숫자와 다르게 따옴표를 사용
"hello" + " hye"

// 자바스크립트는 어떻게 연산하는지 이미 알고 있다 우리는 타입을 잘 지정해서 작성해주면 된다





//// #2.2  Variables
// 콘솔에 메시지를 보내는 마술 같은 코드
// 콘솔에 log(괄호) 안에 값을 출력해준다
console.log(123); // 숫자
console.log('hi'); // 문자열

// 깜찍 계산기 만들기
console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

// 값을 변경하고 싶으면 어떻게 하면 좋을까?
// 하나씩 바꾸려면 엄청 오래 걸린다

// 우린 게을러져야돼
// 가능한 코드 작성량을 줄이자

// **변수 Variable**
// 변수를 사용해보자
// 값을 저장하거나 유지하는 역할 

const a = 5; // const = constant(상수) = 바뀌지 않는 값 // a가 5라는 값을 가지고 있다는 뜻이야

console.log(a + 2);
console.log(a * 2);
console.log(a / 2);

// 더 게을러보자
// 값을 2번만 바꿔주면 된다
const b = 5; 
const c= 2; // !== "2" 숫자와 문자열 구분하기 !

console.log(b + c);
console.log(b * c);
console.log(b / c);

// variable 이름 정하고 적어주는 법
// 공백 대신 대문자로 / 낙타 등모양을 닮았다고 해서 카멜케이스(camel case)
const veryLongVariableName = 5;

// 오늘 배운 것
// 게으른 개발자가 되기 위해 중요한 것이 뭔지 >>>
// 어떻게 값을 variable 저장하고 나중에 사용하는지 >>>
// 자바스크립트에서 변수 이름을 정하는 정하는 좋은 방법이나 관례 >>>





//// #2.3 const and let
let d = 5; // let 으로 바꾸면 바뀌는 게 뭘까? // 바뀌는 거 없음
let e = 2; 
let myName = 'hye';

console.log(d + e);
console.log(d * e);
console.log(d / e);

// const vs let
// const >>> constant (상수) >>> 값이 바뀔 수 없다

// variable 값을 변경할 필요가 있을까? >>> 가끔 필요할 수 있다
// let 으로 한 번 변수를  생성하면 다시 let 으로 시작할 필요 없다
myName = 'jae';
console.log('your new name is ' + myName); // myName >>> 'jae'

// 만약 const 로 변수를 선언한다면?
// TypeError : Assignment to constant >>> 새로운 값을 대입할 수 없다 / 절대 값을 업데이트 할 수 없다

// 변수를 어떤 키워드로 생성하는지를 보고 코드에서 사람의 의도를 알 수 있게 되었다
// 어디에선가 값이 업데이트 될 수 있겠구나 / 절대 아니구나

// 나는 뭘 써야 해?
// const 를 기본적으로 사용한다 
// 만약 변수를 업데이트 하고 싶다면 let을 사용

// var
// 원한다면 어디서든 업데이트를 할 수 있다
// 언어를 통한 보호를 받지 못한다 / 실수로 값을 업데이트 해도 안 알려준다고요
// 그래서 let, const 를 사용한다

// 규칙
// 기본적으로 const
// 필요할 때만 let
// 절대 쓰지 말아야 할 var





//// #2.4 Booleans
// 0 꺼졌다
// 1 켜졌다

// true 참
// false 거짓

const amIFat = true; // "true" <<< text!
console.log(amIFat); // true

// 예를 들어 
// 사용자의 로그인 여부
// 비디오 재생 여부
// 웹사이트 로딩 여부

// 존재하지 않음
// 정의되지 않음
// 아무것도 없음

// null
null !== false

// false === false 라는 값이 존재한다
// null === 아무것도 없음 === 변수에 아무것도 없음 === 아무것도 없는 상태로 채운 것 === 비워진 거랑은 다름

// undefined
let something;
console.log(something);

// 변수를 만들었지만 값을 주지 않았다 / 정의되지 않은 것
// 컴퓨터 메모리 안에는 존재한다 / 공간은 있는데 값이 들어가지 않은 것

// 기억해야 할 것
// null 은 절대 자연적으로 발생하지 않는다
// 변수 안에 어떤 것이 없다는 것을 확실하기 위해서 쓴다
// 값이 '없다'(비어있음)는 것을 알려줄 때 사용 / 비어있어요를 의도적으로 표현한 것
// undefined 은 변수가 메모리에는 있는데 값이 없는 것





//// #2.5 Arrays
// 데이터를 정리하는 법
// 데이터 구조
// 데이터를 어떻게 하면 가능한 최선의 방법으로 정리할 수 있을까
// 사람들은 자료의 검색이나 삽입을 빠르게 할 수 있는 데이터의 저장 방법에 대해 생각하는 데 시간을 쏟아

// 가장 기본적인 데이터 구조 === array(배열)

// 배열 없는 세상
// 일주일의 요일들 만들기
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

// 효율적이지 않다
// 리스트로 그룹화 시키고 싶다면? >>> 하나하나 이어 붙이기
// 매우 긴 변수를 가지게 됐다
const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
console.log(daysOfWeek) // montuewedthufrisatsun

//  잘 만들었다고 보기 힘들다
//  만약 일주일에 첫번째 요일을 요청해도 접근할 수 없다

//  array 를 사용해보자
// + 를 (,) 로 바꾸로 [] 대괄호로 묶어주자
// 그럼 문자열에서 배열로 바껴버림
// [] 대괄호 안에 내가 원하는 건 뭐든지 입력할 수 있다
 const daysOfWeeks = ["mon", "tue", "wed", "thu", "fri", "sat"];

//  콘솔에서 확인해보면 뭔가 다르다
//  (7) 7개의 요소가 있고 각각의 항목도 따로 볼 수 있다
//  데이터로 이뤄진 리스트를 만들었어요 ! 

// array 에서 값을 찾는 법
// 변수 이름을 적어주고 대괄호안에 얻고 싶은 항목의 번호를 적어주자
// Get Item from Array
console.log(daysOfWeeks[5])
// 헉 sat 를 받았어
// 컴퓨터는 0부터 센다구 / 그래서 4를 넣어주자!

// Add one more day to the array
daysOfWeeks.push("sun");
console.log(daysOfWeeks) // sun 추가

//  array 의 목적
//  하나의 변수 안에 데이터 리스트를 가지는 것 !





//// #2.6 Objects 
// xx.xx 를 우리가 직접 만들어보자

// 객체 없는 세상
// 예시) 비디오 게임 캐릭터
const playerName = "hye";
const playerPoints = 100;
const playerColor = "blue";

// 플레이어에 대해 구성됐다
// 문제는 계속 봐왔던 것과 좀 다르다

// 우리가 원하는 것
// 왜냐면 이것들이 하나의 개체(entity), 즉 player 에 대해 설명하고 있기 때문이다
// 이렇게 쓰는 게 더 잘 정돈되잖수
// player.name
// player.points
// player.color

// 우리의 목표는 데이터를 최선을 정리하는 것
// 변수는 좋아보이지 않는다

// 배열을 사용해보자
// 이것도 적합하지 않다 / 배열의 요소들이 무슨 의미인지 모른다
// 주석을 사용해서 정보를 작성한다
// player[0] == name
// player[1] == points
const players = ["hye", 100, "blue"];

// 더 좋은 방법이 뭘까
// Object 를 만들어보자
// {} 중괄호를 작성한다 / = 대신 : 사용 / property 작성 후 , 로 이어나간다
const player = {
    name: "hye",
    points: 100,
    color: "blue"
}

// 우리가 할 수 있는 것
console.log(player); // player 통째로 알기
console.log(player.name); // player 이름만 알기

// console.log
// player.name
// 어라라 보세요
// 비슷하지 않습니까??
// console 도 object 라는 것이고 그 안의 어딘가에 log 라는 것이 있다는 의미

// Object 는 리스트가 아니다
// 리스트는 모든 값이 같은 의미를 가진다 !
// Object 에는 무엇인지 알 수 없는 property 들도 있다

// 접근하는 방법 2가지
player.name
player["name"]

// 값을 업데이트할 수도 있다
// 엏 근데 const 도 정의했는데 어떻게 바뀌죠?
// 우리는 object 안의 무언가를 수정하는 것이다 / object 는 동일함

// 가능 / const 안의 무언가를 업데이트할 때는 문제 없다
player.color = "pink";
// 불가능 / 전체를 하나의 값으로 업데이트 하려고 할 때
// player = "pink";

// object 에 추가하기
// 어떤 것이든 property 로 맹글 수 있다
player.lastName = "ji";

// Object
// property를 가진 데이터를 저장해준다
// 접근할 수 있고 새로 만들수도 있다




//// #2.7 Functions part One
// function 만드는 법 배우기
// what is function ? >>> 계속 반복해서 사용할 수 있는 코드 조각

// 우리가 넘겨주는 어떠한 이름이든 Hello 를 해주는 function 을 만들어보자
// function 없는 세상
console.log("hello my name is hye");
console.log("hello my name is eun");
console.log("hello my name is jae"); 

// 너무 많은 console.log
// 코드에서 바뀌는 부분은 이름 뿐
// 우리의 목표: 친구들에게 인사하기 && 코드의 반복을 최소화하기

// function 을 사용하자
// 어떤 코드를 캡슐화해서, 실행을 여러 번 할 수 있게 해준다 / like 노래 반복 / 끝나면 다시 재생 가능
// function 은 () 소괄호가 필요하다
function sayHello(){
    // 코드블록 안에 작성되는게 실행버튼을 누를 때 실행되는 거야
    console.lot("Hello!");
}

// console.log()
// Array.push()
// alert()
// () 이 괄호 두 개가 함수를 실행하는 방법

sayHello();
sayHello();
sayHello(); // 3번 실행

// 이 function은 같은 결과를 반복해서 내고 있다
// 우리가 원하는 것은 Hello my name is 다른 이름들
// 다른 이름들을 만들기 위해서는 argument(인수) 라는 것을 보내야 한다리
// 인수는 함수를 실행한는 동안 어떤 정보를 함수에게 보낼 수 있는 방법 !

// 우린 이미 해봤어
alert(); // 아무것도 없어 / 아무것도 안 적어줬으니까
sayHello();

// 함수 실행버튼을 누르면서 뭔가를 보내는 법을 배워보자
// 함수 바깥에서는 어떻게 하는지 알고 있지.
// 정보를 보내려면 ()소괄호 안에 데이터를 넣어주면 된다
function sayHello(){
    console.lot("Hello my name is C");
}

sayHello("hye");
sayHello("eun");
sayHello("jae"); 

// 근데 우리는 함수를 만들 때 어떻게 이걸 표현해야 할지 몰라
// 우리는 함수를 실행하면서 데이터는 보내는 법을 알아
// 우리의 함수는 데이터를 받아서 C 에 전달해줘야 돼




//// #2.8 Functions part Two
// 우린 이제 함수에 값이나 데이터를 보내는 방법을 알아
// 이제 어떻게 받아야 하는지 알아보자
// () 소괄호 안에 데이터를 넣어주자구
function sayHello(nameOfPerson){ // 그 데이터를 쓸거라고 ~ // 인수는 여러개 맹글어도 됩니다
    console.log("Hello my name is " + nameOfPerson);
}

sayHello("hye"); // 데이터가 들어오면
sayHello("eun");
sayHello("jae"); 


// 간단한 계산기를 만들어보자
function plus(a, b){ // () 소괄호 안에는 어떤 이름이든 너 마음대로 넣어도 돼
    console.log(a + b);
;}

// 데이터를 보내지 않으면 무슨 일이 일어날까? >>> undefined undefined
// 데이터 받는 인수들이 적었는데 데이터(숫자(?)를 안 주면? >>> NaN / Not a Number
plus();

// 데이터를 받는 방법이야. 순서는 매우매우 중요해!
plus(1, 2); // a = 1 / b = 2

function divied(a, b){
    console.log(a / b);
}
divied(20, 5);

// 데이터를 함수에 보내는 방법을 알아봤어
// a는 해당 함수 안에서만 존재해
// 만약 밖에서 호출한다면 에러가 발생해!
// 왜냐면 a는 블혹 밖에서 존재할 수 없어

// player.sayHello() 같은 것을 만들어 보자
// console.log() 랑 엄청 비슷하게 생겼어

const playerr = {
    name: "hye",
    // 함수를 넣어줄거야
    // 근데 좀 다르지
    // 기존에 그냥 만들었던 함수 >>> function sayHello(){}
    // 그치만 object 안에서는 좀 다르다 / 이름 위치가 바뀐 것 뿐 !
    sayHello: function(otherPersonsName){
        console.log("hello! " + otherPersonsName + " nice to meet you!");
    },
};

console.log(playerr.name);
// 우리만의 object 와 function 을 만들었다 이야호 ~
playerr.sayHello("jae");

// 정리
// 함수에 정보를 보내는 방법
// 함수에 정보를 받는 방법 
// 함수를 실행하는 방법