function update(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementById('warn').style.backgroundColor = '#' + jscolor
}

function showColorsWarn() {
    document.getElementById("warn-drop").classList.toggle("show");
}

function showColorsOk() {
    document.getElementById("ok-drop").classList.toggle("show");
}

function showColorsNeu() {
    document.getElementById("neut-drop").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.drop-btn')) {

    var dropdowns = document.getElementsByClassName("colors");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
