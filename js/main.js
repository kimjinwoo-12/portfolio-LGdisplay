$('#fullpage').fullpage({
  responsiveWidth: 1200,
  navigation: false, //기본값 false
  navigationPosition: 'right', //기본값 right
  navigationTooltips: ['HOME', 'PRODUCTS', 'TECHNOLOGIES', 'ESG', 'COMPANY'],
  showActiveTooltip: true, //기본값 false

  anchors: ["HOME", "PRODUCTS", "TECHNOLOGIES", "ESG", "COMPANY"], // 각 섹션의 고유 ID 설정
  menu: "#menu", // 네비게이션 메뉴 연결

  afterLoad: function (origin, destination, direction, trigger) {
    if (destination == 5) { //5번구역에 도달했을 때
      $("#header,#fp-nav").addClass("light-mode");
      $(".menu5").addClass("active");
    } else {
      $("#header,#fp-nav").removeClass("light-mode");
      $(".menu5").removeClass("active");
    }
    //footer 영역에 도달했을때 header 숨김
    if (destination == 6) {
      $("#header,#fp-nav").fadeOut();
    } else {
      $("#header,#fp-nav").fadeIn();
    }

    if (destination == 1) { //1번구역
      $(".menu1").addClass("active");
    } else {
      $(".menu1").removeClass("active");
    }
    if (destination == 2) { //2번구역
      $(".menu2").addClass("active");
    } else {
      $(".menu2").removeClass("active");
    }
    if (destination == 3) { //3번구역
      $(".menu3").addClass("active");
    } else {
      $(".menu3").removeClass("active");
    }
    if (destination == 4) { //4번구역
      $(".menu4").addClass("active");
    } else {
      $(".menu4").removeClass("active");
    }

  },

});

// tech
$(".btn_oled").click(function () {
  $(".tech").addClass('active_oled');
  $(".tech").removeClass('active_lcd');
});
$(".btn_lcd").click(function () {
  $(".tech").addClass('active_lcd');
  $(".tech").removeClass('active_oled');
});

//esg
const esg_list = new Swiper(".esg_list", {
  // 옵션

  breakpoints: {
    0: {
      // 가로해상도가 0px 이상
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      // 가로해상도가 640px 이상
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      // 가로해상도가 1024px 이상
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1200: {
      // 가로해상도가 1200px 이상
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1300: {
      // 가로해상도가 1300px 이상
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1450: {
      // 가로해상도가 1450px 이상
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1600: {
      // 가로해상도가 1600px 이상
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1800: {
      // 가로해상도가 1800px 이상
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  loop: true,
  speed: 6000, // 속도 조절 (더 부드럽게)
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false, // 관성 효과 제거 (일정하게 흐르게)
});

//company

$(".company ul li").mouseenter(function () {
  $(this).addClass("active").siblings().removeClass("active");
});