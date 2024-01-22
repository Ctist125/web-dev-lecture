// index.html의 로그인을 위한 스크립트

// 변수 선언
const userIdInputElement = document.getElementById("user-id");
const userPasswordInputElement = document.getElementById("user-pw");
const loginButtonElement = document.querySelector("#login button");

const loginFailureCountListElement = document.getElementById(
  "login-failure-count"
);
const loginContents = document.getElementById("border-line");
const lockContents = document.getElementById("lock");

const loginSuccessfulContents = document.getElementById("waiting-connection");

let maximumNaumberOfIterations = 0;

// 함수 선언
function loginSuccessful() {
  loginContents.className = "hide-login-contents";
  loginSuccessfulContents.className = "after-login";
}

function loginFailure() {
  maximumNaumberOfIterations++;
  loginFailureCountListElement.innerHTML =
    "<span>" + maximumNaumberOfIterations + "</span>" + " / 5";

  if (maximumNaumberOfIterations < 5) {
    // pass
  } else {
    loginContents.className = "hide-login-contents";
    lockContents.className = "run-lockdown";
  }
}

function loginVerification() {
  if (
    userIdInputElement.value == userData.id &&
    userPasswordInputElement.value == userData.password
  ) {
    alert(userData.name + "님 환영합니다.");
    loginSuccessful();
  } else if (
    userIdInputElement.value == "" ||
    userPasswordInputElement.value == ""
  ) {
    // pass
  } else {
    alert("로그인 실패 (5회 실패시 계정이 잠깁니다.)");
    loginFailure();
  }
}

// 로그인 이벤트 구문
loginButtonElement.addEventListener("click", loginVerification);
