/**
 * Created by gesonzhang on 2017/11/24.
 */
setup(function(){
    var _this = this,
        $newsList = _this.find('.op-hotnews-list'),
        $newsTitle = _this.find('.op-hotnews-list-title'),
        $timer = '';

    $newsList.on('click',function(){
        var me = this,
            $newsUrl =$(me).children().find("a").attr("href");
        window.open($newsUrl);

    });
    /* $newsList.on('mouseenter',function(){
     var oTr = $(this).children().last();
     var oTd = $(this).siblings().find('.op-hotnews-content');
     setTimeout(function(){
     $(oTr).slideDown('slow');
     },500)
     });*/

    /* $newsTitle.on('mouseenter',function(){
     var oTr = $(this).next();
     //var oTd = $(this).parent('li').siblings().find('.op-hotnews-content');
     //$(oTd).css('display','none');
     $timer=setTimeout(function(){
     $(oTr).slideDown('fast');
     },500)
     });*/
    $newsList.on('mouseenter',function(){
        $(this).find('.op-hotnews-content').css('display','block');
        $(this).siblings().find('.op-hotnews-content').css('display','none');

    });
    /*$newsTitle.on('mouseleave',function(){
     var oTr = $(this).next();
     if($timer != ''){
     clearTimeout($timer);
     //$(oTr).css('display','none')
     $(oTr).slideUp("fast");
     $timer = '';
     return;
     }
     });*/

});