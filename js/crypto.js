import CryptoJS from "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js";

export async function encrypt_text(data) {
  const key = "key".padEnd(32, " ");
  const iv = CryptoJS.enc.Utf8.parse(""); // CBC 모드 기본 IV

  const encrypted = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
  });

  return encrypted.toString();
}

export async function decrypt_text(data) {
  const key = "key".padEnd(32, " ");
  const iv = CryptoJS.enc.Utf8.parse("");

  const decrypted = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}