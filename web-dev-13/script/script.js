// 로그인

// 변수 선언
const idInputElement = document.getElementById("login-id");
const passwordInputElement = document.getElementById("login-password");
const loginFormElement = document.querySelector("main form");
const loginDivElement = document.querySelector("#login div");
const loginH2Element = document.querySelector("#login div h2");

// 이벤트
loginFormElement.addEventListener("submit", login);