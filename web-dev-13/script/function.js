// 로그인 페이지 함수

// 로그인
function login() {
  event.preventDefault();

  for (let i = 0; i < userInformation.length; i++) {
    if (idInputElement.value === userInformation[i].registerId) {
      if (passwordInputElement.value === userInformation[i].registerPassword) {
        loginFormElement.style.display = "none";
        loginDivElement.style.display = "block";
        loginH2Element.textContent =
          userInformation[i].userName + "님 환영합니다.";
        return;
      }
    }
  }

  alert("Login 실패");
}

// 회원가입 페이지 함수

// id 중복 체크
function idCheck() {
  for (let i = 0; i < userInformation.length; i++) {
    if (idInputElement.value === userInformation[i].registerId) {
      errorIdParagraphElement.textContent = "중복된 ID가 존재합니다.";
      errorIdParagraphElement.className = "";
      availableId = 0;
      return;
    } else if (idInputElement.value === "") {
      alert("값을 입력해 주십시오.");
      errorIdParagraphElement.textContent = "";
      errorIdParagraphElement.className = "";
      availableId = 0;
      return;
    } else {
      errorIdParagraphElement.textContent = "사용 가능한 ID입니다.";
      errorIdParagraphElement.className = "available";
      availableId = 1;
    }
  }
}

// password 확인
function passwordCheck() {
  if (passwordCheckInputElement.value === passwordInputElement.value) {
    availablePassword = 1;
    errorPasswordParagraphElement.textContent = "";
  } else {
    errorPasswordParagraphElement.textContent =
      "비밀번호와 확인이 일치하지 않습니다.";
  }
}

// nickname 중복 확인
function nickNameCheck() {
  for (let i = 0; i < userInformation.length; i++) {
    if (nickNameInputElement.value === userInformation[i].registerNickname) {
      errorNicknameParapraphElement.textContent = "중복된 닉네임이 존재합니다.";
      errorNicknameParapraphElement.className = "";
      availableNickname = 0;
      return;
    } else if (nickNameInputElement.value === "") {
      alert("값을 입력해 주십시오.");
      errorNicknameParapraphElement.textContent = "";
      errorNicknameParapraphElement.className = "";
      availableNickname = 0;
      return;
    } else {
      errorNicknameParapraphElement.textContent = "사용 가능한 닉네임입니다.";
      errorNicknameParapraphElement.className = "available";
      availableNickname = 1;
    }
  }
}

// 회원가입 최종 제출 함수
function registerSubmit(event) {
  event.preventDefault();

  let emailCount = 0;
  let phoneCount = 0;
  const formData = new FormData(event.target);

  if (availableId == 1 && availablePassword == 1 && availableNickname == 1) {
    // email 중복 확인 (3개 까지)
    for (let i = 0; i < userInformation.length; i++) {
      if (emailInputElement.value === userInformation[i].userEmail) {
        emailCount++;
      }
    }

    if (emailCount == 3) {
      alert("해당 email로 가입할 수 있는 계정 수를 초과했습니다. (최대 3개)");
      return;
    }

    // 전화번호 중복 확인 (3개 까지)
    for (let i = 0; i < userInformation.length; i++) {
      if (
        phoneNumberInputElement.value === userInformation[i].userPhonenumber
      ) {
        phoneCount++;
      }
    }

    if (phoneCount == 3) {
      alert(
        "해당 전화번호로 가입할 수 있는 계정 수를 초과했습니다. (최대 3개)"
      );
      return;
    }

    // 정보 저장
    userInformation[3].registerId = formData.get("registerId").trim();
    userInformation[3].registerPassword = formData
      .get("registerPassword")
      .trim();
    userInformation[3].registerNickname = formData
      .get("registerNickname")
      .trim();
    userInformation[3].userName = formData.get("userName").trim();
    userInformation[3].userEmail = formData.get("userEmail").trim();
    userInformation[3].userPhonenumber = formData.get("userPhonenumber").trim();
    userInformation[3].userGender = formData.get("userGender").trim();

    console.log(userInformation[3].registerId);
    console.log(userInformation[3].registerPassword);
    console.log(userInformation[3].registerNickname);
    console.log(userInformation[3].userName);
    console.log(userInformation[3].userEmail);
    console.log(userInformation[3].userPhonenumber);
    console.log(userInformation[3].userGender);

    alert("회원가입 완료");
  } else {
    alert("기입 또는 중복 버튼을 확인해 주십시오.");
  }
}
