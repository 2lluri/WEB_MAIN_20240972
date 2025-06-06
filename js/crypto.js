const secretKey = CryptoJS.enc.Utf8.parse("key".padEnd(32, " "));  // 256bit key
const iv = CryptoJS.enc.Utf8.parse("1234567890123456");            // 128bit IV (CBC용)

function encrypt_text(data) {
  try {
    const encrypted = CryptoJS.AES.encrypt(data, secretKey, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString(); // Base64로 인코딩된 문자열
  } catch (e) {
    console.error("암호화 실패:", e);
    return null;
  }
}

function decrypt_text(encryptedData) {
  try {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, secretKey, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    console.error("복호화 실패:", e);
    return null;
  }
}