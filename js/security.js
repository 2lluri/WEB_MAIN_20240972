// js/security.js

const key = CryptoJS.enc.Utf8.parse("key".padEnd(32, " ")); // 256bit key
const iv = CryptoJS.enc.Utf8.parse("1234567890123456");     // 128bit IV (CBC용)

function encrypt_text(data) {
  const encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

function decrypt_text(cipherText) {
  const decrypted = CryptoJS.AES.decrypt(cipherText, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
