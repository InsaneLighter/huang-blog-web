export let aboutMe = function () {
    let index=0;
    let direct=0;

    //页面向下滑动
    function scrollDown() {
        //页面向下滑动
        $("#scrollDownSpan").unbind("click").click(function () {
            $(this).parent().hide();
            window.scrollTo({
                top: 970 * (++index),
                behavior: "smooth"
            });
            $(this).parent().show();
            if (index >= 2) {
                $(this).parent().hide();
            }
        })
    }

    //屏幕滚动
    let goToFun = function(){
        if(index >= 2){
            $("#scrollDownSpan").parent().hide();
        }else {
            $("#scrollDownSpan").parent().show();
        }
        direct=0;
        window.scrollTo({
            top: 970 * index,
            behavior: "smooth"
        });
    };

    /* 滚轮事件 */
    var scrollFunc=function(e){
        e=e || window.event;
        if(e.wheelDelta){
            direct += (-e.wheelDelta/200);
        }else if(e.detail){
            direct += e.detail/3;
        }
        if( direct >=8){
            if(index < 3){
                goToFun( ++index )
            }else {
                direct = 0;
            }
        }
        if( direct<=-8){
            if(index > 0){
                goToFun( --index )
            }else {
                direct = 0
            }
        }

    };

    //添加鼠标滑轮监听事件
    if( document.addEventListener){ document.addEventListener('DOMMouseScroll',scrollFunc,false); }
    window.onmousewheel=document.onmousewheel=scrollFunc;

    const initEvent = function(){
        //页面初始化 置顶
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    let init = function () {
        initEvent();
        scrollDown();
    };

    init();
};
