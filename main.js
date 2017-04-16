var MOSCOW_OFF = 3; // hours
var MONTHS = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];

// desired format => November 1, 2017 21:31:00

function time_date(id) {
  var d = new Date();
  var day = new Date();
  var hours = d.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  var minutes = d.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var seconds = d.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var time = hours + ':' + minutes + ':' + seconds;
  var day = MONTHS[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  document.getElementById("time-date").innerHTML = day + " " + time;
  window.setTimeout(arguments.callee, 1000);
  return true;
}
