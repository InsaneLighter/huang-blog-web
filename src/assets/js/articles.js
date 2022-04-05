$(function () {

    const fixedDivShow = function(){
        let scrollTop = document.documentElement.scrollTop;
        if(scrollTop > 325){
            $(".l_fixed").show();
            $(".r_fixed").show();
        }else {
            $(".l_fixed").hide();
            $(".r_fixed").hide();
        }
        $(window).scroll(function(){//开始监听滚动条
            scrollTop = document.documentElement.scrollTop;
            if(scrollTop > 325){
                $(".l_fixed").show();
                $(".r_fixed").show();
            }else {
                $(".l_fixed").hide();
                $(".r_fixed").hide();
            }
        });

    };
    
    const init = function () {
        fixedDivShow();
    };

    init()
});