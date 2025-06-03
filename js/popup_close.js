let close_time;
let close_time2 = 50;

close_time = setTimeout(close_window, 50000);

show_time();

function show_time() {
  const divClock = document.getElementById('Time');
  divClock.innerText = close_time2 + "초 후 창이 닫힙니다."; 

  close_time2--;

  if (close_time2 >= 0) {
    setTimeout(show_time, 1000);
  } else {
    close_window();
  }
}

function close_window() {
  window.close();
}