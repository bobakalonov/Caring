$(function () {
  $('.form-group').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});
window.onload = function () {
  let prl = document.getElementById('preloader');
  prl.style.display = 'none';
  $('video').play();
  var tl = gsap.timeline();
  tl.from('.nav', { duration: 0.4, y: -100 });
  tl.from('.nav .logo', {
    duration: 0.3,
    x: -50,
    opacity: 0,
  });
  tl.from('.phone', {
    duration: 0.3,
    x: 50,
    opacity: 0,
  });
  tl.from('.login form', {
    duration: 0.3,
    x: 200,
    opacity: 0,
  });
  tl.from('.login form .login-top h3', {
    duration: 0.3,
    y: -50,
    opacity: 0,
  });
  tl.from('.login form .login-main .form-group', {
    duration: 0.6,
    x: 150,
    opacity: 0,
    stagger: 0.2,
  });
  tl.from('.login form .login-main .form-btn', {
    duration: 0.3,
    y: 50,
    opacity: 0,
  });
};
$(document).ready(function () {
  $(document.body).vide('media/video/bgVideo'); // Non declarative initialization

  var instance = $(document.body).data('vide'); // Get the instance
  var video = instance.getVideoObject(); // Get the video object
  instance.destroy(); // Destroy instance
});
