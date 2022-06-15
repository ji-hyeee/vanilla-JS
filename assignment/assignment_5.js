const bodywidth = document.querySelector("body");
const hello = document.querySelector("body h1");
const colors = ["#3498db", "purple", "orange", "white"];

// Why doesn't it turn white? ㅠㅠㅠ
hello.style.color = colors[3];

function handleBody() {
  const width = window.innerWidth;
  if (width <= 500) {
    bodywidth.style.backgroundColor = colors[0];
  } else if (width > 500 && width <= 700) {
    bodywidth.style.backgroundColor = colors[1];
  } else if (width > 700) {
    bodywidth.style.backgroundColor = colors[2];
  }
}

window.addEventListener("resize", handleBody);
