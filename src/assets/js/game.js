export let game = function () {
  $(".ul_list li ").hover(
    function(){
      $(this).find(".div2").stop(true,false).delay(0).animate({bottom:"4%",opacity:"1"}, 500);
    },
    function(){
      $(this).find(".div2").stop(true,false).delay(0).animate({bottom:"-100%",opacity:"0"}, 500);
    }
  )

}
