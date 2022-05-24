$(window).on("load", function () {
  $("body").removeClass("overflow");
  sal({
    once: false,
  });
});
$(document).ready(function () {
  var mainswiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
  });

  var clientsswiper = new Swiper(".clients-slider .swiper", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".clients-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".clients-slider .swiper-btn-next",
      prevEl: ".clients-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
      1199: {
        slidesPerView: 7,
        spaceBetween: 0,
      },
      1299: {
        slidesPerView: 8,
        spaceBetween: 0,
      },
    },
  });

  var projectsswiper = new Swiper(".projects-slider .swiper", {
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".projects-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1299: {
        slidesPerView: 3,
        spaceBetween: 55,
      },
    },
  });

  new bootstrap.ScrollSpy(document.body, {
    target: "#fixedNavbar",
  });

  $("#fixedNavbar ul li a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
    if ($(window).width() <= 1199) {
      $(".menu-btn").removeClass("active");
      $(".navbar").slideUp();
      $("body").removeClass("overflow");
    }
  });

  $(this).scrollTop() >= 50
    ? $("header").addClass("header-scroll")
    : $("header").removeClass("header-scroll ");
  $(window).scroll(function () {
    $(this).scrollTop() >= 50
      ? $("header").addClass("header-scroll")
      : $("header").removeClass("header-scroll ");
  });

  $(".menu-btn").on("click", function (e) {
    $(this).toggleClass("active");
    $(".navbar").slideToggle();
    $("body").toggleClass("overflow");
  });
});
