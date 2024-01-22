// jQuery to add and remove class on scroll
$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    // Check if the page has been scrolled 50 pixels
    if (scroll > 50) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });
  $('.showcase').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true, // Add this line to enable vertical scrolling,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false, // Add this line to enable vertical scrolling,
        }
      },
    ]
  });
  $('.icon-flex').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          fade: true,
        }
      },
    ]
  });
  // jQuery function to toggle class on click
  $(".mobile-btn").click(function () {
    $(".nav-wrap").toggleClass("mega-menu");
    $(".mobile-btn").toggleClass("cross-menu-icon");
  });
  $(".nav-wrap ul li a").click(function () {
    $(".nav-wrap").removeClass("mega-menu");
    $(".mobile-btn").removeClass("cross-menu-icon");
  });
  // GSAP Animation Start
  if (window.innerWidth > 1300) {
    // Hero Content
    var $quote = $(".banner .banner-flex .banner-left h1"),
      mySplitText = new SplitText($quote, {
        type: "words"
      }),
      splitTextTimeline = gsap.timeline();

    gsap.set($quote, {
      perspective: 400
    });

    function kill() {
      splitTextTimeline.clear().time(0);
      mySplitText.revert();
    }

    kill();
    mySplitText.split({
      type: "chars, words"
    })
    splitTextTimeline.from(mySplitText.chars, {
      duration: 0.6,
      scale: 4,
      autoAlpha: 0,
      rotationX: -180,
      transformOrigin: "100% 50%",
      ease: "back",
      stagger: 0.02
    });
    // Hero Content
    var $quote = $(".banner .banner-flex .banner-right h1"),
      mySplitText = new SplitText($quote, {
        type: "words"
      }),
      splitTextTimeline = gsap.timeline();

    gsap.set($quote, {
      perspective: 400
    });

    function kill() {
      splitTextTimeline.clear().time(0);
      mySplitText.revert();
    }

    kill();
    mySplitText.split({
      type: "chars, words"
    })
    splitTextTimeline.from(mySplitText.chars, {
      duration: 0.6,
      scale: 4,
      autoAlpha: 0,
      rotationX: -180,
      transformOrigin: "100% 50%",
      ease: "back",
      stagger: 0.02
    });
    gsap.timeline().from(".banner .image-wrap", {
      y: 150,
      opacity: 0,
      delay: 0.3
    });
    gsap.timeline().from(".banner .round-btn", {
      opacity: 0,
      delay: 0.5,
      y: 150,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".banner",
        start: "50% 40%",
        end: "80% 00%",
        scrub: 1,
      }
    }).to(".banner .banner-flex .banner-left h1", {
      y: -150,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".banner",
        start: "50% 40%",
        end: "80% 00%",
        scrub: 1,
      }
    }).to(".banner .banner-flex .banner-right h1", {
      y: 150,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".feature",
        start: "20% 90%",
        end: "20% 70%",
        scrub: 2,
      }
    }).from(".feature .feature-flex .left-flex h2", {
      xPercent: -120,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".feature",
        start: "20% 90%",
        end: "20% 70%",
        scrub: 2,
      }
    }).from(".feature .feature-flex .right-flex p", {
      xPercent: 120,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".feature",
        start: "0% 50%",
        end: "0% 40%",
        scrub: 2,
      }
    }).from(".feature .card-flex .card-item", {
      y: 150,
      opacity: 0
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio",
        start: "0% 50%",
        end: "0% 40%",
        scrub: 2,
      }
    }).from(".portfolio .title-wrap .title-1 h2", {
      xPercent: -120,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio",
        start: "0% 50%",
        end: "0% 40%",
        scrub: 2,
      }
    }).from(".portfolio .title-wrap .title-2 h2", {
      xPercent: 200,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio",
        start: "20% 50%",
        end: "20% 40%",
        scrub: 2,
      }
    }).from(".text-area2", {
      y: 100,
      opacity: 0
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio",
        start: "30% 50%",
        end: "30% 40%",
        scrub: 2,
      }
    }).from(".showcase", {
      y: 100,
      opacity: 0
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".about-area",
        start: "0% 60%",
        end: "5% 50%",
        scrub: 2,
      }
    }).from(".about-area .title-wrap2 h2", {
      xPercent: -120,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".about-area",
        start: "0% 60%",
        end: "5% 50%",
        scrub: 2,
      }
    }).from(".about-area .flex-wrap", {
      y: 120,
      opacity: 0
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".services",
        start: "0% 60%",
        end: "5% 50%",
        scrub: 2,
      }
    }).from(".services .services-flex .right-flex p", {
      xPercent: -120,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".services",
        start: "0% 60%",
        end: "5% 50%",
        scrub: 2,
      }
    }).from(".services .services-flex .left-flex h2", {
      xPercent: 120,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".services",
        start: "20% 60%",
        end: "30% 50%",
        scrub: 2,
      }
    }).from(".services .card-flex", {
      y: 120,
      opacity: 0
    });

  }
});