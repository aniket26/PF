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
function div_show() {
  $(".contactFrm").fadeIn("slow");
}
//Function to Hide Popup
function div_hide(){
  $(".contactFrm").fadeOut("slow");
}



/*PLUGIN*/
(function(a){a.createModal=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:true,scrollable:false};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div class="modal-dialog">';html+='<div class="modal-content">';html+='<div class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+="</div>";html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div class="modal-footer">';if(b.closeButton===true){html+='<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

if ($(window).width() > 991) {
  $(function(){
      $('.view-pdf').on('click',function(){
          var pdf_link = $(this).attr('href');
          var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>'
          $.createModal({
          title:'Resume | Aniket Vikas Patil',
          message: iframe,
          closeButton:true,
          scrollable:false
          });
          return false;
      });
  })
}  else {
  $(function(){
      $('.view-pdf').on('click',function(){
            return;
      });
  })

}

$( window ).resize(function() {
  if ($(window).width() > 991) {
    $(function(){
        $('.view-pdf').on('click',function(){
            var pdf_link = $(this).attr('href');
            var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>'
            $.createModal({
            title:'Resume | Aniket Vikas Patil',
            message: iframe,
            closeButton:true,
            scrollable:false
            });
            return false;
        });
    })
  }  else {
    $(function(){
        $('.view-pdf').on('click',function(){
        
              return;
        });
    })

  }
});

window.onscroll= function(){
 
  // $('.carousel').carousel(interval: 2000;)
  var x = $("#about").position();
    if (document.body.scrollTop >x.top-200 || document.documentElement.scrollTop > x.top-200) {
        $("#navigation_bar").fadeIn("slow");
    } else {
        $("#navigation_bar").fadeOut("slow");
    }
}
$('.nav').localScroll();

