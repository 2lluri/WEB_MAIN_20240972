let close_time2 = 10;
let close_time;

function close_window() {
  window.close();
}

function show_time() {
  const divClock = document.getElementById('Time');
  divClock.innerText = close_time2;
  close_time2--;
  close_time = setTimeout(show_time, 1000);
}

clearTimeout(close_time);
show_time();
close_time = setTimeout(close_window, 10000);