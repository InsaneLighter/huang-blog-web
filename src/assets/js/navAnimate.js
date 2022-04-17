// 右上导航菜单栏展开 关闭
export let navAnimate = function () {
  $('.index_dh').unbind('click').click(
    function () {
      $('.div_js_txt').stop(true, false).delay(0).animate({
        width: '100%',
        height: '100%'
      }, 0)
      $('.div_js_bg').stop(true, false).delay(0).animate({ opacity: '1' }, 500)
      $('.div_js_lf').stop(true, false).delay(0).animate({ left: '0' }, 500)
      $('.div_js_rg').stop(true, false).delay(500).animate({ opacity: '1' }, 2000)
      $('.div_js_close').stop(true, false).delay(500).animate({ opacity: '1' }, 2000)
    }
  )

  $('.div_js_close').unbind('click').click(
    function () {
      $('.div_js_txt').stop(true, false).delay(500).animate({
        width: '0',
        height: '0'
      }, 0)
      $('.div_js_bg').stop(true, false).delay(0).animate({ opacity: '0' }, 800)
      $('.div_js_lf').stop(true, false).delay(0).animate({ left: '-100%' }, 800)
      $('.div_js_rg').stop(true, false).delay(0).animate({ opacity: '0' }, 2000)
      $('.div_js_close').stop(true, false).delay(0).animate({ opacity: '0' }, 2000)
    }
  )
}
