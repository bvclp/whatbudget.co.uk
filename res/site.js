$(function () {
  $(document).scroll(function () {
    var $nav = $(".sticky-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });

  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});