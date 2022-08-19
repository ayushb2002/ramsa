$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$( document ).ready(function() {
  $("#postLoader").hide();
  setTimeout(function() { $("#preLoader").hide(); $("#postLoader").show();}, 2000);
});