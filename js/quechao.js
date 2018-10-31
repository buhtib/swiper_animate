var animate = (function() {

    return {
        init:function() {
            this.HorizontalScreen()
            // 自动播放
            $.ready(function () {
                $('audio')[0].play()
            })
            this.event()
            this.swiperStart();
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
        },
        // 轮播图
        swiperStart:function() {
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                mousewheel: true,
                initialSlide:5,
                on: {
                    init: function () {
                        swiperAnimateCache(this); //隐藏动画元素 
                        swiperAnimate(this); //初始化完成开始动画
                    },
                    slideChangeTransitionEnd: function () {
                        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                    }
                }
            });
        },

        // 提示横屏
        HorizontalScreen:function() {
            if(window.screen.width >= 1316) {
                $('.hide_box').show()
            }else {
                $('.hide_box').hide()
            }
            window.addEventListener('load', this.HorizontalScreen)
            window.addEventListener('resize', this.HorizontalScreen)
        }
    }
}())