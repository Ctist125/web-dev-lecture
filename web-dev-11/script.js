// 변수 선언
const contentsBox = document.getElementById("contents");
const submitButton = document.getElementById("btn");
const textCount = document.getElementById("count");

// 함수 선언
function enableContents() {
  // 버튼 활성화
  submitButton.className = "enable";

  // 글자 수 카운트
  const cnt = contentsBox.value.length;
  textCount.textContent = cnt;
}

// 내용 박스 작성시 활성화 이벤트 함수
contentsBox.addEventListener("input", enableContents);
