function session_set() { // 세션 저장
  let session_id = document.querySelector("#typeEmailX");
  if (sessionStorage) {
    sessionStorage.setItem("Session_Storage_test", session_id.value);
  } else {
    alert("세션 스토리지를 지원하지 않습니다.");
  }
}

function session_get() { // 세션 읽기
  if (sessionStorage) {
    return sessionStorage.getItem("Session_Storage_test");
  } else {
    alert("세션 스토리지를 지원하지 않습니다.");
  }
}

function session_check() { // 세션 확인
  if (sessionStorage.getItem("Session_Storage_test")) {
    alert("이미 로그인 되었습니다.");
    location.href = '../login/index_login.html';
  }
}
