//tab_menu
$(".tab_menu").hide();
$(".btn_ham").click(function () {
  $(".tab_menu").fadeIn();
});
$(".btn_close").click(function () {
  $(".tab_menu").fadeOut();
});


$(".depth2").hide(); // 처음에 서브메뉴 숨김

$(".tab_menu > li > a").click(function (e) {
  e.preventDefault(); // 링크 기본 동작 방지

  $(this).closest("li").find(".depth2").stop().slideToggle(); // 현재 li 안의 depth2 열기/닫기
  $(this).closest("li").siblings().find(".depth2").slideUp(); // 다른 메뉴 닫기
});