// 게임 접속 시 카운트 다운 스크립트

// 변수 선언
const gameStartAnchorElement = document.getElementById("go");

// 함수 선언
function countDown() {
  for (let i = 5; i > 0; i--) {
    alert("접속 중 " + i);
  }
  confirm("접속 하시겠습니까?");
}

// 이벤트 리스너
gameStartAnchorElement.addEventListener("click", countDown);
