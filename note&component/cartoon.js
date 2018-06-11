// 手写定位逐帧
function init_ios() {
    var recWidth = 600;
    var recHeight = 315;
    var recFrames = 30;
    var zoom = document.body.clientWidth / recWidth;
    var round = 0;
    var totalRound = 8;
    var timer;
    var progress = 0;
    function render() {
        if (!$(".demo").length) {
            return
        }
        timer && window.clearTimeout(timer);
        $(".demo").css("display", "block");//逐帧容易开始隐藏，显示出逐帧容器
        $(".demo").css("background-position", -(recWidth * progress) + "px " + -(recHeight * round) + "px");
        if (progress < recFrames) {
            timer = window.setTimeout(function() {
                render()
            },
            50)
        } else {
            finish()
        }
        progress += 1
    }
    function finish() {
        if (round == totalRound - 1) {
            destroy();
            return
        }
        progress = 0;
        round += 1;
        render()
    }
    var imgPreView = "";
    var img = new Image;
    img.onload = function() {
        render();
        $(".demo").css("display", "block");
        $(".demo").css("zoom", zoom); //缩放比例
    };
    img.src = imgPreView;
    window.addEventListener("resize",
    function() {
        if (!$(".demo").length) {
            return
        }
        zoom = document.body.clientWidth / recWidth;
        $(".demo").css("zoom", zoom);
    })
}
function init_andriod() {
    var recWidth = 311;
    var recHeight = 164;
    var recFrames = 60;
    var clientWidth = document.body.clientWidth;
    var realheight = Math.floor(recHeight / (recWidth / clientWidth));
    var realWidth = realheight * (recWidth / recHeight);
    var round = 0;
    var totalRound = 4;
    var item = $(".demo");
    var timer;
    var progress = 0;
    function render() {
        if (!item.length) {
            return
        }
        timer && window.clearTimeout(timer);
        item.eq(round).css("display", "block");
        item.eq(round).css("background-position", -(realWidth * progress) + "px 0");
        if (progress < recFrames) {
            timer = window.setTimeout(function() {
                render()
            },
            50)
        } else {
            finish()
        }
        progress += 1
    }
    function finish() {
        item.eq(round).remove();
        if (round == totalRound - 1) {
            destroy();
            return
        }
        progress = 0;
        round += 1;
        render()
    }
    var imgList = ["a", "b"];
    var preloadNum = 0;
    var img = new Image;
    img.onload = function() {
        preloadNum++;
        var temp = imgList.pop();
        if (temp) {
            img.src = temp
        }
        if (preloadNum == totalRound) {
            render();
            item.css("display", "block");
            item.css("width", realWidth + "px");
            item.css("height", realheight + "px");
        }
    };
    img.src = imgList.pop();
    window.addEventListener("resize",
    function() {
        if (!$(".demo").length) {
            return
        }
        clientWidth = document.body.clientWidth;
        realheight = Math.floor(recHeight / (recWidth / clientWidth));
        realWidth = realheight * (recWidth / recHeight);
        item.css("width", realWidth + "px");
        item.css("height", realheight + "px");
    })
}
