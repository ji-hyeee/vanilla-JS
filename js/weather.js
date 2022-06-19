////#8.0 Geolocation
// 사용해본 적 없는 함수를 쓸거야
// 이 함수는 user의 위치(geolocation)를 줘.

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
// // 이걸 부르면 브라우저에서 위치 좌표를 준다

// // getCurrentPosition() argument 가 2개 필요해
// // 하나는 모든 게 잘 됐을 때 실행되는 함수
// // 나머지 하나는 에러가 발생했을 때 실행되는 함수

// function onGeoOk(position){
//     // 위도와 경도 가져오기
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     // console.log(position)
//     console.log("you live in", lat, lon)
// }

// // console.log(position) 을 하면  coords (좌표) 가 있다
// // latitude(위도) / longitude = (경도)

// function onGeoError(){
//     alert("Can't find you. No weather for you ㅠㅠ")
// }

// 위에 코드로 user의 위치를 알 수 있어 / 어 메 이 징

// 이제 이 숫자들을 장소로 바꿔줄 서비스를 사용해보자
// 그걸 하기 전에 API 계정을 열어야돼
// openweathermap.org 웹사이트로 이동 & 가입 (무료)





////#8.1 Weather API
// 우리가 사용할 API 는 Current Weather Data
// API 는 다른 서버와 이야기할 수 있는 방법

const API_KEY = "3854b298dca2a86433a6daa236a81cc4"

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.textContent = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}

function onGeoError(){
    alert("Can't find you. No weather for you ㅠㅠ")
}

// JSON 파일 얻오기
// openweathermap > API > Current Weather Data > API doc >
// API call > https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// 현재위치의 날씨를 알려주는 url 을 가져오자
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
// console.log(url);

// 이제 뭐할까
// 이제 URL 을 얻어야돼
// fetch 를 이용할거야
// fetch(url)
// console > Network 에서 확인 가능 !
// 실제로 URL 에 갈 필요 없이 자바스크립트가 대신 URL 을 부른다

// Preview 에서 정보를 확인할 수 있는데
// 첫번째로 내가 있는 장소의 이름을 얻고 싶고
// 두번째로 날씨를 얻고 싶어 + 섭씨온도 

// 섭씨온도 얻고 싶어용
// openweathermap > API > Current Weather Data > API doc > Parameters > Units
// &units=metric // 이걸 뒤에 붙여라
// https://api.openweathermap.org/data/2.5/weather?lat=37.6230838&lon=127.0608526&appid=3854b298dca2a86433a6daa236a81cc4&units=metric

// 우리 코드에도 &units=metric추가해주자
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

// 이제 정보를 사용할 수 있어
// fetch 로 자바스크립트는 url 을 불렀어
// 이걸 얻고 나서 그 이후 작업을 실행하라고 시켜야돼
// fetch 는 promise 야
// promise 는 당장 뭔가 일어나지 않고, 시간이 좀 걸린 뒤에 일어나는거야
// .then 으로 다음 작업을 이어서 진행할거야 / json 
// fetch(url).then(response => response.json())