function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email) || '유효하지 않은 이메일 입니다.';
}

function validateName(name) {
  const re = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  return re.test(name) || '유효하지 않은 이름 입니다.';
}

function validatePassword(password) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;
  return re.test(password) || '하나 이상의 문자, 숫자를 포함한 6~20자리로 입력해주세요.';
}

function validatePhone(phone) {
  const re = /^\d{2,3}\d{3,4}\d{4}$/;
  return re.test(phone) || '유효하지 않은 전화번호 입니다.';
}

export { validateEmail, validateName, validatePassword, validatePhone };