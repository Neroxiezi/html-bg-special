//视频播放器
define([
    'https://cdn.bootcss.com/video.js/6.5.0/video.min.js',
    'css!https://cdn.bootcss.com/video.js/6.5.0/video-js.min.css',
    'css!/less/css/video.css'
], function (video) {
    return function (TagName, callback) {
        let object = video(TagName);
        object.ready(function () {
            let VideoExtend = this;
            if (VideoExtend.hasClass('VideoSpeed')) {
                //加速部位的字符串
                let str = '<div id="VideoSpeed">加速 <ul><li>2.0x</li><li>1.75x</li><li>1.5x</li><li>1.25x</li><li class="active">1.0x</li></ul></div>'
                //将加速按钮插入到进度条后面
                $('.vjs-progress-control.vjs-control').after(str);
                //给加速按钮添加鼠标移入事件
                $('.vjs-control-bar').on('mouseenter', '#VideoSpeed', function () {
                    //让里面的ul显示
                    $(this).find('ul').fadeIn(200);
                });
                //给加速按钮添加鼠标移出事件
                $('.vjs-control-bar').on('mouseleave', '#VideoSpeed', function () {
                    //让ul隐藏
                    $(this).find('ul').fadeOut(200);
                });
                //给每个li添加点击事件
                $('.vjs-control-bar').on('click', '#VideoSpeed ul li', function () {
                    //获得当前li的序号
                    let num = $(this).index();
                    //判断当前li的序号 设置相应的播放速度
                    if (num == 0) {
                        //设置播放速度
                        VideoExtend.playbackRate(2);
                        //让当前li添加class其他兄弟元素移除class
                        $(this).addClass('active').siblings().removeClass('active');
                    } else if (num == 1) {
                        VideoExtend.playbackRate(1.75);
                        $(this).addClass('active').siblings().removeClass('active');
                    } else if (num == 2) {
                        VideoExtend.playbackRate(1.5);
                        $(this).addClass('active').siblings().removeClass('active');
                    } else if (num == 3) {
                        VideoExtend.playbackRate(1.25);
                        $(this).addClass('active').siblings().removeClass('active');
                    } else {
                        VideoExtend.playbackRate(1);
                        $(this).addClass('active').siblings().removeClass('active');
                    }
                });
                if ($.isFunction(callback)) {
                    callback(VideoExtend);
                }
            }
        })
    }
})