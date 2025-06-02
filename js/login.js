function setCookie(name, value, expiredays) {
  const date = new Date();
  date.setDate(date.getDate() + expiredays);
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const parts = cookies[i].split('=');
    if (parts[0] === decodeURIComponent(name)) {
      return decodeURIComponent(parts[1]);
    }
  }
  return null;
}

function session_set() {
  const id = document.getElementById("typeEmailX");
  if (sessionStorage) {
    sessionStorage.setItem("Session_Storage_test", id.value);
  } else {
    alert("세션 스토리지 지원 x");
  }
}

function session_get() {
  if (sessionStorage) {
    return sessionStorage.getItem("Session_Storage_test");
  } else {
    alert("세션 스토리지 지원 x");
  }
}

function session_del() {
  if (sessionStorage) {
    sessionStorage.removeItem("Session_Storage_test");
    alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
  } else {
    alert("세션 스토리지 지원 x");
  }
}

function login_failed() {
  let count = parseInt(getCookie("login_fail_cnt")) || 0;
  count++;
  setCookie("login_fail_cnt", count, 1);
  if (count >= 3) {
    alert("로그인 3회 실패로 제한됩니다.");
    return false;
  } else {
    alert(`로그인 실패 횟수: ${count}`);
    return true;
  }
}

function login_count() {
  let count = parseInt(getCookie("login_cnt")) || 0;
  count++;
  setCookie("login_cnt", count, 7);
  alert("로그인 횟수: " + count);
}

function logout_count() {
  let count = parseInt(getCookie("logout_cnt")) || 0;
  count++;
  setCookie("logout_cnt", count, 7);
  alert("로그아웃 횟수: " + count);
}

const check_xss = (input) => {
  const DOMPurify = window.DOMPurify;
  const sanitizedInput = DOMPurify.sanitize(input);
  if (sanitizedInput !== input) {
    alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
    return false;
  }
  return sanitizedInput;
};

function check_input() {
  const emailInput = document.getElementById("typeEmailX");
  const passwordInput = document.getElementById("password_input");
  const idsave_check = document.getElementById("idSaveCheck");

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue.length === 0 || passwordValue.length === 0) {
    alert("아이디와 비밀번호를 모두 입력해주세요.");
    login_failed();
    return false;
  }

  const failCount = parseInt(getCookie("login_fail_cnt")) || 0;
  if (failCount >= 3) {
    alert("로그인 시도가 제한되었습니다.");
    return false;
  }

  session_set();

  
  login_count();

  
  if (emailValue.length > 10 || emailValue.length < 5) {
    alert("아이디는 5~10자 사이여야 합니다.");
    return false;
  }

  if (passwordValue.length < 12 || passwordValue.length > 15) {
    alert("비밀번호는 12~15자 사이여야 합니다.");
    return false;
  }

  
  if (!check_xss(emailValue) || !check_xss(passwordValue)) {
    return false;
  }

  
  const hasSpecialChar = /[!,@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passwordValue);
  const hasUpperCase = /[A-Z]/.test(passwordValue);
  const hasLowerCase = /[a-z]/.test(passwordValue);
  const repeatPattern = /(.{3,})\1/;
  const doubleDigitRepeat = /(\d{2})[\s\S]*\1/;

  if (!hasSpecialChar || !hasUpperCase || !hasLowerCase) {
    alert("비밀번호는 대소문자, 특수문자를 포함해야 합니다.");
    return false;
  }

  if (repeatPattern.test(emailValue) || repeatPattern.test(passwordValue)) {
    alert("3글자 이상 반복 입력은 허용되지 않습니다.");
    return false;
  }

  if (doubleDigitRepeat.test(emailValue) || doubleDigitRepeat.test(passwordValue)) {
    alert("같은 2자리 숫자가 반복되면 안 됩니다.");
    return false;
  }

  if (idsave_check.checked) {
    setCookie("id", emailValue, 1);
    alert("쿠키를 저장합니다.");
  } else {
    setCookie("id", "", 0);
  }

  document.getElementById("login_form").submit();
  return true;
}

function session_check() {
  if (sessionStorage.getItem("Session_Storage_test")) {
    alert("이미 로그인 되었습니다.");
    location.href = "../login/index_login.html";
  }
}

function init() {
  const emailInput = document.getElementById("typeEmailX");
  const idsave_check = document.getElementById("idSaveCheck");
  let get_id = getCookie("id");

  if (get_id) {
    emailInput.value = get_id;
    idsave_check.checked = true;
  }

  session_check();
}

function logout() {
  logout_count();
  session_del();
  location.href = "../index.html";
}

function session_del()
{
    if(sessionStorage)
    {
        sessionStorage.removeltem("Session_Storage_test");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else{
        alert("세션 스토리지 지원 X");
    }
}