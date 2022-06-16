const quotes = [
    {
        quote: "일단 하자",
        author: "최지혜",
    },
    {
        quote: "지혜는 듣는 데서 오고 후회는 말하는 데서 온다",
        author: "",
    },
    {
        quote: "'지금이 최악'이라고 말 할 힘이 있다면 아직은 최악이 아니다",
        author: "윌리엄 셰익스피어",
    },
    {
        quote: "상상할 수 없는 꿈을 꾸고 있다면, 상상할 수 없는 노력을 해라.",
        author: "",
    },
    {
        quote: "인생의 뜻을 세우는데 적당한 때는 없다",
        author: "볼드윈",
    },
    {
        quote: "사람들은 할 말이 없으면 욕을 한다",
        author: "볼테르",
    },
    {
        quote: "진흙 속에서 피는 꽃",
        author: "",
    },
    {
        quote: "정해진 것은 아무것도 없다. 정해진 운명 또한 없다.",
        author: "도교",
    },
    {
        quote: "실패는 성공을 돋보이게 하는 조미료",
        author: "트루먼 카포티",
    },
    {
        quote: "길을 잃는다는 것은 곧, 길을 알게 되는 것이다",
        author: "",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다",
        author: "앙드레 말로",
    },
    {
        quote: "인간을 성공으로 이끄는 가장 강력한 무기는 바로 습관이다",
        author: "",
    },
    {
        quote: "하기 싫어도 해라. 감정은 사라지고 결과는 남는다.",
        author: "",
    },
    {
        quote: "난 그냥 한다. 굳이 잘하려고 하지 않는다.",
        author: "",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "She can do, he can do, why not me?",
        author: "",
    },
];

const quote = document.querySelector("#quote span:first-child"); // 명언
const author = document.querySelector("#quote span:last-child"); // 작가

//// #6.0 Quotes 
// randomness 무작위성
// Array 안에 있는 element 에 어떻게 접근하느냐
// 0부터 Array 의 길이 - 1 사이 숫자들에 접근해야돼

// 우린 Math module 을 사용할겨
// 그중에서도 Math.random()
// random()은 0부터 1사이의 랜덤한 숫자를 제공한다
// 여기에 10을 곱하면 0부터 10사이의 숫자들을 얻을 수 있어 so cooool

// 그치만 소수점 뒤에 숫자들은 필요없어
// 없애는 3가지 방법
// Math.round() // 반올림
// Math.ceil() // 그냥 냅다 올림 / 씰이 천장이라는 뜻 / 1.01 도 2
// Math.floor() // ceil 과 반대 / 냅다 바닥

// 숫자를 랜덤으로 보여주는 코드
const todaysQuote = (quotes[Math.floor(Math.random() *quotes.length)]);

// 이제 HTML 요소에 추가해주자
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;