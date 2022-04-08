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
                    if(i == amntOfChars){
						thhis.html(newString + '<span class="tips">|</span>');
					}
                }, i * typingSpeed);
            })(i + 1, text[i]);

        }
    }, 1500);
}

export let proNavanimate = function(){
	$(".index_qq a").hover(
		function(){
			$(this).find("img").stop(true,false).animate({opacity:"1",width:"144px"}, 300)
		},
		function(){
			$(this).find("img").stop(true,false).animate({opacity:"0",width:"0"}, 300)
		}
	)

	$(".ul_js li").hover(
		function(){
			$(this).stop(true,false).animate({top:"-5px"}, 300)
		},
		function(){
			$(this).stop(true,false).animate({top:"0px"}, 300)
		}
	)
	$(".index_dh").click(
		function(){
			$(".div_js_txt").stop(true,false).delay(0).animate({width:"100%",height:"100%"}, 0);
			$(".div_js_bg").stop(true,false).delay(0).animate({opacity:"1"}, 500);
			$(".div_js_lf").stop(true,false).delay(0).animate({left:"0"}, 500);
			$(".div_js_rg").stop(true,false).delay(500).animate({opacity:"1"}, 2000);
			$(".div_js_close").stop(true,false).delay(500).animate({opacity:"1"}, 2000);
		}
	)
	$(".main_dh").click(
		function(){
			$(".div_js_txt").stop(true,false).delay(0).animate({width:"100%",height:"100%"}, 0);
			$(".div_js_bg").stop(true,false).delay(0).animate({opacity:"1"}, 500);
			$(".div_js_lf").stop(true,false).delay(0).animate({left:"0"}, 500);
			$(".div_js_rg").stop(true,false).delay(500).animate({opacity:"1"}, 2000);
			$(".div_js_close").stop(true,false).delay(500).animate({opacity:"1"}, 2000);
		}
	)
	$(".div_js_close").click(
		function(){
			$(".div_js_txt").stop(true,false).delay(500).animate({width:"0",height:"0"}, 0);
			$(".div_js_bg").stop(true,false).delay(0).animate({opacity:"0"}, 800);
			$(".div_js_lf").stop(true,false).delay(0).animate({left:"-100%"}, 800);
			$(".div_js_rg").stop(true,false).delay(0).animate({opacity:"0"}, 2000);
			$(".div_js_close").stop(true,false).delay(0).animate({opacity:"0"}, 2000);
		}
	)

	$(".div_index5 .div_bg .div2").hover(
		function(){
			$(this).find(".div5").stop(true,false).delay(0).animate({top:"100%"}, 1400);
		},
		function(){
			$(this).find(".div5").stop(true,false).delay(0).animate({top:"0px"}, 800);
		}
	)
	$(".ul_list li ").hover(
		function(){
			$(this).find(".div2").stop(true,false).delay(0).animate({bottom:"4%",opacity:"1"}, 500);
		},
		function(){
			$(this).find(".div2").stop(true,false).delay(0).animate({bottom:"-100%",opacity:"0"}, 500);
		}
	)

	$(".me_div1 .page_content .div1").delay(0).animate({ top:"200px", opacity:"1"},1000);
	$(".me_div1 .page_content .div2").delay(200).animate({ top:"300px", opacity:"1"},1000);
	$(".me_div1 .page_content .div3").delay(400).animate({ top:"400px", opacity:"1"},1000);
	autoType(".page_content",300);
	autoType(".me_div3",300);
	autoType(".me_div13",300);
}
