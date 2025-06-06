import CryptoJS from "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js";

const JWT_SECRET = "your_secret_key_here";

export function generateJWT(payload) {
  const header = { alg: "HS256", typ: "JWT" };
  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));
  const signature = CryptoJS.HmacSHA256(`${encodedHeader}.${encodedPayload}`, JWT_SECRET);
  const encodedSignature = CryptoJS.enc.Base64.stringify(signature);

  return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
}

export function verifyJWT(token) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const [encodedHeader, encodedPayload, encodedSignature] = parts;
    const signature = CryptoJS.HmacSHA256(`${encodedHeader}.${encodedPayload}`, JWT_SECRET);
    const expectedSignature = CryptoJS.enc.Base64.stringify(signature);

    if (expectedSignature !== encodedSignature) return null;

    const payload = JSON.parse(atob(encodedPayload));
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      console.log("토큰 만료됨");
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  const token = localStorage.getItem("jwt_token");
  if (!token) return false;
  return !!verifyJWT(token);
}

export function checkAuth() {
  if (!isAuthenticated()) {
    alert("토큰 검증 실패. 로그인 페이지로 이동합니다.");
    window.location.href = "../login/login.html";
  } else {
    console.log("정상적으로 인증되었습니다.");
  }
}

export function logout() {
  localStorage.removeItem("jwt_token");
  sessionStorage.clear();
  alert("로그아웃 되었습니다.");
  window.location.href = "../login/login.html";
}