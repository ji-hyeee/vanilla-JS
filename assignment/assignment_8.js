const clockTitle = document.querySelector(".js-clock");

// 오늘의 과제
// Date와setInterval함수들을 사용해 크리스마스까지 며칠이 남았는지 알려주는 시계를 만드세요. (12월 25일)
const chirstmas = "25 dec 2022";

function clock() {
  const chirstmasdate = new Date(chirstmas);
  const date = new Date();

  const seconds = (chirstmasdate - date) / 1000;
  const day = String(Math.floor(seconds / 3600 / 24)).padStart(2, "0");
  const hour = String(Math.floor(seconds / 3600) % 24).padStart(2, "0");
  const minute = String(Math.floor(seconds / 60) % 60).padStart(2, "0");
  const second = String(Math.floor(seconds) % 60).padStart(2, "0");

  clockTitle.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}

clock();
setInterval(clock, 1000);
// 힌트
// Date 생성자 [new Date()] : 시간을 나타내는 Date 객체를 생성하는 생성자입니다. Date 객체를 사용하기 위해 먼저 선언해 주어야 합니다. 참고 자료
// Date().getFullYear() : 2021처럼 4자리의 연도를 얻을 수 있는 함수입니다. 참고 자료
// Math.floor : 주어진 수와 같거나 작은 수 중에서 가장 큰 정수를 반환하는 함수입니다. 참고 자료
// setInterval : 인수로 전달받은 함수를 지정해 둔 일정한 간격으로 실행할 수 있게 해주는 함수입니다. 참고 자료
