var MOSCOW_OFF = 3; // hours
var MONTHS = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

// desired format => November 1, 2017 21:31:00
function getLocalTime(offset) {
    var d = new Date();
    d.setTime((new Date().getTime()) +
              (d.getTimezoneOffset() * 60 * 1000) + // local offset
              (1000 * 60 * 60 * offset)); // target offset
    var day = MONTHS[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
    var time = d.toTimeString().split(" ")[0];
    var time_date = time + " / " + day;
    document.getElementById("time-date").innerHTML = time_date;
    setTimeout(getLocalTime(MOSCOW_OFF), 1000);
}

getLocalTime(MOSCOW_OFF);
