var close_time; // 시간 정보
var close_time2 = 50; // 10초 설정
 clearTimeout(close_time); // 재호출 정지
close_time= setTimeout("close_window()", 10000);
 // 1/1000 초 지정, 바로 시작 
show_time(); // 실시간 시간 보여주기

 <h1 class="display-4"><div id="Time" class="clock"></div></h1>
 function show_time(){
 let divClock = document.getElementById('Time');
 divClock.innerText = close_time2; // 10초 삽입 시작
close_time2--; // 1초씩 감소
close_time= setTimeout("close_window()", 50000);
}

function close_window() { // 함수 정의
window.close(); // 윈도우 닫기
}