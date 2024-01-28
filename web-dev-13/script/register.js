// 회원가입

// 변수 선언
let availableId = 0;
let availablePassword = 0;
let availableNickname = 0;

const errorIdParagraphElement = document.getElementById("error-id");
const errorPasswordParagraphElement = document.getElementById("error-password");
const errorNicknameParapraphElement = document.getElementById("error-nickname");

// input
const idInputElement = document.getElementById("register-id");
const passwordInputElement = document.getElementById("register-password");
const passwordCheckInputElement = document.getElementById(
  "register-password-check"
);
const nickNameInputElement = document.getElementById("register-nickname");
const emailInputElement = document.getElementById("user-email");
const phoneNumberInputElement = document.getElementById("user-phonenumber");

// button
const idCheckButtonElement = document.getElementById("id-check");
const nickNameCheckButtonElement = document.getElementById("nickname-check");
const submitFormElement = document.querySelector("main form")

// 이벤트
idCheckButtonElement.addEventListener("click", idCheck);
passwordCheckInputElement.addEventListener("input", passwordCheck);
nickNameCheckButtonElement.addEventListener("click", nickNameCheck);
submitFormElement.addEventListener("submit", registerSubmit);
