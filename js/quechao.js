var animate = (function() {

    return {
        init:function() {
            this.response_change( )
           
            this.event()
        },
        event:function() {
            var _this = this;
            $('.music').click(function() {
                $(this).toggleClass('active');
                if($(this).attr('class') !== 'music') {
                    $(this).children('audio')[0].pause()
                }else {
                    $(this).children('audio')[0].play()
                }
            })
        },
        // 每页swiper响应宽高变化
        response_change:function() {
            // function change() {
            //     var clientW = screen.availWidth;
            //     var clientH = screen.availHeight;
            //     $('.swiper-container').css({width: clientW, height: clientH})
            // }
            // window.addEventListener('load', change)
            // window.addEventListener('resize', change)
        }
    }
}())