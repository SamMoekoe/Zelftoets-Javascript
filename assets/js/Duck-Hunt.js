Duck.onclick = myMove();

function myMove() {
    var elem = document.getElementById("Duck");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 300) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
      }
    }
  }