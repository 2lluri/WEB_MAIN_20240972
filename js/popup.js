function setCookie(name, value, expiredays) {
  const date = new Date();
  date.setDate(date.getDate() + expiredays);
  const cookieValue = encodeURIComponent(value);
  document.cookie = `${encodeURIComponent(name)}=${cookieValue}; expires=${date.toUTCString()}; path=/; SameSite=None; Secure`;
}

function getCookie(name) {
  const cookie = document.cookie;
  console.log("쿠키를 요청합니다.");
  if (cookie !== "") {
    const cookie_array = cookie.split("; ");
    for (const item of cookie_array) {
      const [cookie_name, cookie_value] = item.split("=");
      if (cookie_name === name) {
        return cookie_value;
      }
    }
  }
  return;
}

function pop_up() {
  const cookieCheck = getCookie("popupid");
  if (cookieCheck !== "N") {
    window.open("../popup/popup.html", "팝업테스트", "width=400,height=300,top=10,left=10");
  }
}

function closePopup() {
  const checkbox = document.getElementById('check_popup');
  if (checkbox && checkbox.checked) {
    setCookie("popupid", "N", 1);
    console.log("쿠키를 설정합니다.");
  }
  self.close();
}

function show_clock() {
  const currentDate = new Date();
  const divClock = document.getElementById("divClock");
  let msg = "현재 시간 : ";

  if (currentDate.getHours() > 12) {
    msg += `오후 ${currentDate.getHours() - 12}시 `;
  } else {
    msg += `오전 ${currentDate.getHours()}시 `;
  }

  msg += `${currentDate.getMinutes()}분 ${currentDate.getSeconds()}초`;
  divClock.innerText = msg;

  divClock.style.color = currentDate.getMinutes() > 58 ? "red" : "black";

  setTimeout(show_clock, 1000);
}

function over(obj) {
  obj.src = "image/LOGO.png";
}

function out(obj) {
  obj.src = "image/LOGO_2.jpeg";
}

function search_message() {
  alert("검색을 수행합니다");
}