$(document).ready(function(){
  var mq = window.matchMedia( "(max-width: 570px)" );
  if (mq.matches) {
      // window width is at less than 570px
      document.getElementById("meow1").removeAttribute("data-target");
      document.getElementById("meow1").removeAttribute("data-toggle");
      document.getElementById("meow2").removeAttribute("data-target");
      document.getElementById("meow2").removeAttribute("data-toggle");
      document.getElementById("meow3").removeAttribute("data-target");
      document.getElementById("meow3").removeAttribute("data-toggle");
      document.getElementById("meow4").removeAttribute("data-target");
      document.getElementById("meow4").removeAttribute("data-toggle");
      document.getElementById("meow5").removeAttribute("data-target");
      document.getElementById("meow5").removeAttribute("data-toggle");
      document.getElementById("meow6").removeAttribute("data-target");
      document.getElementById("meow6").removeAttribute("data-toggle");
  }
  else {
      // window width is greater than 570px
  }
});
