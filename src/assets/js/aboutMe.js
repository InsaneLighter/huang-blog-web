export let aboutMe = function () {
  let index = 0
  let direct = 0

  //页面向下滑动
  function scrollDown () {
    //页面向下滑动
    $('#scrollDownSpan').unbind('click').click(function () {
      $(this).parent().hide()
      window.scrollTo({
        top: 975 * (++index),
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
      $('#scrollDownSpan').parent().hide()
    } else {
      $('#scrollDownSpan').parent().show()
    }
    direct = 0
    window.scrollTo({
      top: 975 * index,
      behavior: 'smooth'
    })
  }

  // 滚轮事件
  var scrollFunc = function (e) {
    e = e || window.event
    if (e.wheelDelta) {
      direct += (-e.wheelDelta / 200)
    } else if (e.detail) {
      direct += e.detail / 3
    }

    if (direct >= 7) {
      if (index < 2) {
        goToFun(++index)
      } else {
        direct = 0
      }
    }
    if (direct <= -7) {
      if (index > 0) {
        goToFun(--index)
      } else {
        direct = 0
      }
    }

  }

  //添加鼠标滑轮监听事件
  if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false)

    document.addEventListener('scroll', function () {
      if (window.scrollY === 0) {
        index = 0
        direct = 0
      }
    })
  }

  window.onmousewheel = document.onmousewheel = scrollFunc

  const initEvent = function () {
    //页面初始化 置顶
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

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
    initEvent()
    scrollDown()
  }

  init()
}
