$(document).ready(function () {
  $(".navbar-nav .nav-link").click(function () {
    $(this).addClass("active").parent().siblings().find(".nav-link").removeClass("active");
  })
});


let changeicon = function (icon) {
  icon.classList.toggle("fa-times");
};
