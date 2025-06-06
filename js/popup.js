function setCookie(name, value, expiredays) {
 var date = new Date();
 date.setDate(date.getDate() + expiredays);
 document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/";
 }

function getCookie(name) {
 var cookie = document.cookie;
 console.log("쿠키를 요청합니다.");
 if (cookie != "") {
 var cookie_array = cookie.split("; ");
 for ( var index in cookie_array) {
 var cookie_name = cookie_array[index].split("=");
 if (cookie_name[0] == "popupYN") {
 return cookie_name[1];
 }
 }
 }
 return ;
 }


function pop_up()
{
 var cookieCheck = getCookie("popupYN");
 if (cookieCheck != "N"){
 window.open("../popup/popup.html", "팝업테스트", "width=400, height=300, top=10, left=10");
 }
}

function closePopup() {
 if (document.getElementById('check_popup').value) {
 setCookie("popupYN", "N", 1);
 console.log("쿠키를 설정합니다.");
 self.close();
 }
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