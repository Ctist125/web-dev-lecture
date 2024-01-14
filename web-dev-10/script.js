// Calculator
// 입력 값을 받아오는 방법을 아직 배우지 않아 단순한 계산 출력과 배운 내용에 대한 실습

// 알림
alert("계산기 실습");

// 변수와 배열, 객체 선언
let a = 10;
let b = 5;
let result = [];

// 메소드 선언, 만약 함수 형태로 따로 선언할 경우 function을 사용하는 차이 밖에 없어서 생략
let calculator = {
  plus(num1, num2) {
    let plusResult;
    plusResult = num1 + num2;
    return plusResult;
  },

  minus(num1, num2) {
    let minusResult;
    minusResult = num1 - num2;
    return minusResult;
  },

  multiplication(num1, num2) {
    let multiplicationResult;
    multiplicationResult = num1 * num2;
    return multiplicationResult;
  },

  division(num1, num2) {
    let divisionResult;
    divisionResult = num1 / num2;
    return divisionResult;
  },

  remainder(num1, num2) {
    let remainderResult;
    remainderResult = num1 % num2;
    return remainderResult;
  },
};

// 계산기 실행 후 값 result 배열에 저장
result[0] = calculator.plus(a, b);
result[1] = calculator.minus(a, b);
result[2] = calculator.multiplication(a, b);
result[3] = calculator.division(a, b);
result[4] = calculator.remainder(a, b);

// console에 출력
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);
