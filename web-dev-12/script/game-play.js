// 주사위 게임 스크립트

// 변수 선언
const userNameListElement = document.getElementById("user-name");
const userMoneyListElement = document.getElementById("user-money");
const diceRollButtonElement = document.querySelector("#play button");
const dealerMoneySpanElement = document.querySelector("#dealer-profile span");
const myMomeySpanElement = document.querySelector("#my-profile span");
const dealerDiceResultParagraphElement =
  document.getElementById("dealer-result");
const myDiceResultParagraphElement = document.getElementById("my-result");
const battingMoneyInputElement = document.getElementById("batting-money");

// 초기 정보 불러오기
dealerMoneySpanElement.textContent = 10000;
myMomeySpanElement.textContent = 10000;

// header user 정보 불러오기
userNameListElement.textContent = userData.name + "님";
userMoneyListElement.textContent = myMomeySpanElement.textContent + " 원";

// 함수 선언
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceGame() {
  let commonDice = rollDice();
  let dealerDice = rollDice();
  let myDice = rollDice();
  let dealerResult = 0;
  let myResult = 0;

  dealerDiceResultParagraphElement.textContent =
    "공용: " + commonDice + ", Dealer: " + dealerDice;
  myDiceResultParagraphElement.textContent =
    "공용: " + commonDice + ", My: " + myDice;

  dealerResult = commonDice + dealerDice;
  myResult = commonDice + myDice;

  if (myResult > dealerResult) {
    myMomeySpanElement.textContent =
      Number(myMomeySpanElement.textContent) +
      Number(battingMoneyInputElement.value);
    dealerMoneySpanElement.textContent =
      Number(dealerMoneySpanElement.textContent) -
      Number(battingMoneyInputElement.value);
    userMoneyListElement.textContent = myMomeySpanElement.textContent + " 원";
  } else {
    myMomeySpanElement.textContent =
      Number(myMomeySpanElement.textContent) -
      Number(battingMoneyInputElement.value);
    dealerMoneySpanElement.textContent =
      Number(dealerMoneySpanElement.textContent) +
      Number(battingMoneyInputElement.value);
    userMoneyListElement.textContent = myMomeySpanElement.textContent + " 원";
  }
}

function batting() {
  if (
    Number(battingMoneyInputElement.value) > 0 &&
    Number(battingMoneyInputElement.value) <=
      Number(myMomeySpanElement.textContent)
  ) {
    diceGame();
  } else {
    alert("배팅 금액이 잘못 되었습니다.");
  }
}

// 주사위 굴리기
diceRollButtonElement.addEventListener("click", batting);
