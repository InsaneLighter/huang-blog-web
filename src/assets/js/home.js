export let home = function () {
  let goTo = $('.article')
  let guideLi = $('.sideGuide .activesss')
  let curBg = $('.sideGuide .curBg')

  let index = 0
  let direct = 0
  let resetFun = function () {
    goTo.each(function () {
      $(this).height(window.innerHeight)
      $(this).width(window.innerWidth)
    })
  }
  resetFun()
  $('.index_dh').delay(300).animate({
    right: '3%',
    opacity: '1'
  }, 800)
  $('.div_index1 .div1').stop().css({
    left: '-150px',
    opacity: '0'
  }).delay(500).animate({
    left: '25%',
    opacity: '1'
  }, 800)
  $('.div_index2 .div_bg .div1 .p1').stop().css({
    left: '-150px',
    opacity: '0'
  }).delay(500).animate({
    left: '0',
    opacity: '1'
  }, 1000)
  $('.div_index2 .div_bg .div1 .p2').stop().css({
    top: '50px',
    opacity: '0'
  }).delay(500).animate({
    top: '0',
    opacity: '1'
  }, 1000)
  $('.div_index3 .div_bg .div1 .p1').stop().css({
    left: '-150px',
    opacity: '0'
  }).delay(500).animate({
    left: '0',
    opacity: '1'
  }, 1000)
  $('.div_index3 .div_bg .div1 .p2').stop().css({
    top: '50px',
    opacity: '0'
  }).delay(500).animate({
    top: '0',
    opacity: '1'
  }, 1000)
  $('.div_index4 .div_bg .div1 .p1').stop().css({
    left: '-150px',
    opacity: '0'
  }).delay(500).animate({
    left: '0',
    opacity: '1'
  }, 1000)
  $('.div_index4 .div_bg .div1 .p2').stop().css({
    top: '50px',
    opacity: '0'
  }).delay(500).animate({
    top: '0',
    opacity: '1'
  }, 1000)
  $('.div_index5 .div_bg .div1 .p1').stop().css({
    left: '-150px',
    opacity: '0'
  }).delay(500).animate({
    left: '0',
    opacity: '1'
  }, 1000)
  $('.div_index5 .div_bg .div1 .p2').stop().css({
    top: '50px',
    opacity: '0'
  }).delay(500).animate({
    top: '0',
    opacity: '1'
  }, 1000)

  let dh = function (qs) {
    if (qs == 0) {
      $('.div_index1 .div1').stop().css({
        left: '-150px',
        opacity: '0'
      }).delay(500).animate({
        left: '25%',
        opacity: '1'
      }, 800)
    } else if (qs == 1) {
      $('.div_index2 .div_bg .div1 .p1').stop().css({
        left: '-150px',
        opacity: '0'
      }).delay(500).animate({
        left: '0',
        opacity: '1'
      }, 1000)
      $('.div_index2 .div_bg .div1 .p2').stop().css({
        top: '50px',
        opacity: '0'
      }).delay(500).animate({
        top: '0',
        opacity: '1'
      }, 1000)
    } else if (qs == 2) {
      $('.div_index3 .div_bg .div1 .p1').stop().css({
        left: '-150px',
        opacity: '0'
      }).delay(500).animate({
        left: '0',
        opacity: '1'
      }, 1000)
      $('.div_index3 .div_bg .div1 .p2').stop().css({
        top: '50px',
        opacity: '0'
      }).delay(500).animate({
        top: '0',
        opacity: '1'
      }, 1000)
    } else if (qs == 3) {
      $('.div_index4 .div_bg .div1 .p1').stop().css({
        left: '-150px',
        opacity: '0'
      }).delay(500).animate({
        left: '0',
        opacity: '1'
      }, 1000)
      $('.div_index4 .div_bg .div1 .p2').stop().css({
        top: '50px',
        opacity: '0'
      }).delay(500).animate({
        top: '0',
        opacity: '1'
      }, 1000)
    } else if (qs == 4) {
      $('.div_index5 .div_bg .div1 .p1').stop().css({
        left: '-150px',
        opacity: '0'
      }).delay(500).animate({
        left: '0',
        opacity: '1'
      }, 1000)
      $('.div_index5 .div_bg .div1 .p2').stop().css({
        top: '50px',
        opacity: '0'
      }).delay(500).animate({
        top: '0',
        opacity: '1'
      }, 1000)
    }
  }

  let goToFun = function () {
    direct = 0
    if (index < 0) {
      index = guideLi.length - 1
    }
    if (index >= guideLi.length) {
      index = 0
    }
    curBg.stop().animate({ left: curBg.width() * index }, 300, 'swing')
    guideLi.removeClass('on').eq(index).addClass('on')
    $('html,body').stop().animate({ scrollLeft: (($(window).width()) * index) }, 1000, 'swing', function () {
      direct = 0
    })
    dh(index)
  }

  guideLi.each(function (i) {
    $(this).hover(
      function () {
        index = guideLi.index($(this))
        goToFun()
      },
      function () {
      })
  })

  $(window).resize(function () {
    resetFun()
  })

  let scrollFunc = function (e) {
    e = e || window.event
    if (e.wheelDelta) {
      direct += (-e.wheelDelta / 200)
    } else if (e.detail) {
      direct += e.detail / 3
    }
    if (direct >= 8) {
      if (index < 4) {
        goToFun(index++)
      } else {
        index = 0
        goToFun(index)
      }
    }
    if (direct <= -8) {
      if (index > 0) {
        goToFun(index--)
      } else {
        index = 4
        goToFun(index)
      }
    }

  }
  if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false)
  }
  window.onmousewheel = document.onmousewheel = scrollFunc
  goToFun()
}
