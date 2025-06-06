import { checkAuth } from './jwt_token.js';
import { decrypt_text_and_show } from './session.js';

function init_logined() {
  decrypt_text_and_show();  // 복호화된 패스워드 출력
}

document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  init_logined();
});