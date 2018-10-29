var animate = (function() {

    return {
        init:function() {
           
            this.event()
        },
        event:function() {
            var _this = this;
            // 音乐播放功能
            $('.music').click(function() {
                $(this).toggleClass('active');
                if($(this).attr('class') !== 'music') {
                    $(this).children('audio')[0].pause()
                }else {
                    $(this).children('audio')[0].play()
                }
            })
        }
       
        
    }
}())