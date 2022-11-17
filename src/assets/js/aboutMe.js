export let aboutMe = function () {
  let index = 0
  let direct = 0
  const clientHeight = $(".me")[0].clientHeight;

  //页面向下滑动
  function scrollDown () {
    //页面向下滑动
    $('#scrollDownSpan').unbind('click').click(function () {
      $(this).parent().hide()
      window.scrollTo({
        top: clientHeight * (++index),
        behavior: 'smooth'
      })
      $(this).parent().show()
      if (index >= 2) {
        $(this).parent().hide()
      }
    })
  }

  //屏幕滚动
  let goToFun = function () {
    if (index >= 2) {
      $('#scrollDown').hide()
    } else {
      $('#scrollDown').show()
    }
    direct = 0
    $('html,body').stop().animate({ scrollTop: (($(window).height()) * index) }, 1000, 'swing', function () {
      direct = 0
    })
  }

  let goTo = $('.me')
  let resetFun = function () {
    goTo.each(function () {
      $(this).height(window.innerHeight)
      $(this).width(window.innerWidth)
    })
  }

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
      }
      direct = 0
    }
    if (direct <= -8) {
      if (index > 0) {
        goToFun(index--)
      }
      direct = 0
    }
  }

  if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false)

    document.addEventListener('scroll', function () {
      if (window.scrollY === 0) {
        index = 0
        direct = 0
        $('#scrollDown').show()
      }
    })
  }
  window.onmousewheel = document.onmousewheel = scrollFunc
  goToFun()

  //屏幕打印文字
  function autoType(elementClass, typingSpeed) {
    var thhis = $(elementClass);
    thhis = thhis.find(".introduce");
    var text = thhis.text().trim().split('');
    thhis.text("");
    var amntOfChars = text.length;
    var newString = "";
    setTimeout(function() {
      thhis.css("opacity", 1);
      for (var i = 0; i < amntOfChars; i++) {
        (function(i, char) {
          setTimeout(function() {
            newString += char;
            thhis.text(newString);
            if(i === amntOfChars){
              thhis.html(newString + '<span class="tips">|</span>');
            }
          }, i * typingSpeed);
        })(i + 1, text[i]);

      }
    }, 1500);
  }

  $(".me_div1 .page_content .div1").delay(0).animate({ top:"200px", opacity:"1"},1000);
  $(".me_div1 .page_content .div2").delay(200).animate({ top:"300px", opacity:"1"},1000);
  $(".me_div1 .page_content .div3").delay(400).animate({ top:"400px", opacity:"1"},1000);
  autoType(".page_content",300);
  autoType(".me_div3",300);

  let init = function () {
    scrollDown()
  }

  init()
}
