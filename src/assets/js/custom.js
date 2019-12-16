$(window).scroll(function () {
  if ($(window).scrollTop() >= 30) {
    $('.navbar-expand-lg').css('background-image', 'linear-gradient(6deg, rgb(237, 28, 36) 0%, rgb(237, 18, 96) 93%)', '-moz-linear-gradient(6deg, rgb(237, 28, 36) 0%, rgb(237, 18, 96) 93%)', '-webkit-linear-gradient(6deg, rgb(237, 28, 36) 0%, rgb(237, 18, 96) 93%)', '-ms-linear-gradient(6deg, rgb(237, 28, 36) 0%, rgb(237, 18, 96) 93%)'), ('border-bottom', '1px solid #ec1260');
  } else {
    $('.navbar-expand-lg').css('background', 'transparent'), ('border-bottom', '1px solid #ec1260');
  }
});