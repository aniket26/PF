// $(document).ready(function(){
//    $('.carousel').carousel(interval: 2000;)
//  });
window.onscroll= function(){
  showHeader1();

}

function showHeader1(){
  // $('.carousel').carousel(interval: 2000;)
  var x = $("#about").position();

    if (document.body.scrollTop >x.top-200 || document.documentElement.scrollTop > x.top-200) {
        $("#navigation_bar").css("display" , "block");
    } else {
        $("#navigation_bar").css("display" , "none");
    }

}


var items = document.querySelectorAll(".timeline li");
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
