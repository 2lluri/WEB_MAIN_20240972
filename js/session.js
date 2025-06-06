import { encrypt_text, decrypt_text } from './crypto.js';

// ✅ 세션에 암호화된 객체 저장
export async function session_set() {
  let id = document.querySelector("#typeEmailX");      // 이메일 입력란
  let password = document.querySelector("#typePasswordX");  // 비밀번호 입력란
  let random = new Date();  // 랜덤값 (타임스탬프)

  // 객체 생성
  const obj = {
    id: id.value,
    otp: random
  };

  // 세션스토리지를 지원하면 실행
  if (sessionStorage) {
    const objString = JSON.stringify(obj); // 객체 → JSON 문자열
    const en_text = await encrypt_text(objString); // 🔒 암호화

    // 세션 저장
    sessionStorage.setItem("Session_Storage_id", id.value);
    sessionStorage.setItem("Session_Storage_object", objString);
    sessionStorage.setItem("Session_Storage_pass", en_text);
  } else {
    alert("세션 스토리지를 지원하지 않는 브라우저입니다.");
  }
}

// ✅ 세션 가져오기 함수
export function session_get() {
  if (sessionStorage) {
    return sessionStorage.getItem("Session_Storage_id");
  } else {
    alert("세션 스토리지를 지원하지 않습니다.");
  }
}

// ✅ 세션 존재 여부 확인 함수
export function session_check() {
  const result = sessionStorage.getItem("Session_Storage_id");
  if (result) {
    return true;
  } else {
    return false;
  }
}

// ✅ 추가: 암호화된 세션 복호화 및 출력 (옵션)
export async function session_decrypt_print() {
  const en_text = sessionStorage.getItem("Session_Storage_pass");
  if (en_text) {
    const decrypted = await decrypt_text(en_text);
    console.log("🔓 복호화된 세션 정보:", decrypted);
  } else {
    console.log("❌ 저장된 암호화 세션이 없습니다.");
  }
}