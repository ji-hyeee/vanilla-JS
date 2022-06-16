//// #6.1 Background
// 명언 맹글기와 거의 같다
// 랜덤한 숫자를 얻어서 그걸로 이미지를 고르고 그 이미지를 body 에 추가

// 이미지 Array 만들기
// img 폴더에 있는 이미지와 이름을 같게 만들어주자
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
]

// 랜덤 이미지를 가져오자
// 이미지 이름이 랜덤으로 나오는 코드를 구현했다
const chosenImage = (images[Math.floor(Math.random() *images.length)]);

// 우리가 해야하는 것 랜덤으로 나온 이미지를 html에 실제로 추가하기
// 지금까지 한 건 html 에서 무언가를 가져오는 것 html 에 추가해본적이 없다구

// js 에서 이미지를 만들고 html 에 추가해보자
// createElement() / html 요소 맹글기
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`  // <img src="img/0.jpg">

// img 를 body 내부에 추가하자
// append() 가장 뒤에 추가
// prepend() 가장 앞에 추가
document.body.appendChild(bgImage);