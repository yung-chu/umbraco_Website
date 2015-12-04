

/*视频列表*/
var CuPlayerList = []

$("input[name='getVideoUploadUrl']").each(function () {

    CuPlayerList.push($(this).val());

})

var num = CuPlayerList.length;
var video_index = 0;//当前索引


function getNext(pars)
{
    if(video_index < num-1)
    {
        video_index++;
        so.addVariable("CuPlayerFile", CuPlayerList[video_index]);
        so.addVariable("CuPlayerAutoPlay","yes"); //是否自动播放
        so.write("CuPlayer");
    }
    else
    {
        video_index = 0;
        so.addVariable("CuPlayerFile", CuPlayerList[video_index]);
        so.write("CuPlayer");
    }
    $(".list dl dt a").css("background","#ffffff").css("color","#333");
    $(".list dl dt a").eq(video_index).css("background","#efefef").css("color","red");
    LeftScr(video_index);
}


function changeStream(CuPlayerFile){


    $(".list dl dt a").css("background","#ffffff").css("color","#333");
    $(".list dl dt a:hover").css("background","#efefef").css("color","red");
    LeftScr(CuPlayerFile);
    so.addVariable("CuPlayerFile", CuPlayerList[CuPlayerFile]);
    so.addVariable("CuPlayerAutoPlay","yes"); //是否自动播放
    so.write("CuPlayer");
    return false;

}

function LeftScr(m) {
    var scrtop;
    if (m > 1) {
        scrtop = 55 * (m - 1);
    } else {
        scrtop = 0;
    }
    $(".list").animate({
        scrollTop: scrtop
    }, 130);
}



CuPlayerFile = CuPlayerList[video_index];
$(".list dl dt a").css("background","#ffffff").css("color","#333");
$(".list dl dt a").eq(video_index).css("background", "#efefef").css("color", "red");


var so = new SWFObject("/js/CuPlayer/CuPlayerMiniV4.swf", "ply", "800", "600", "9", "#000000");
so.addParam("allowfullscreen","true");
so.addParam("allowscriptaccess","always");
so.addParam("wmode","opaque");
so.addParam("quality","high");
so.addParam("salign","lt");
so.addVariable("CuPlayerFile",CuPlayerFile);
so.addVariable("CuPlayerSetFile", "/js/CuPlayer/CuPlayerSetFile.xml"); //* 必须存在/播放器配置文件地址
so.addVariable("CuPlayerImage","/images/start.jpg");//* 必须存在/视频略缩图,本图片文件必须正确
so.addVariable("CuPlayerWidth","800"); //视频宽度
so.addVariable("CuPlayerHeight","600"); //视频高度
so.addVariable("CuPlayerAutoPlay","yes"); //是否自动播放
//so.addVariable("CuPlayerLogo","logo.png"); //Logo文件地址
so.addVariable("CuPlayerPosition","bottom-right"); //Logo显示的位置
so.write("CuPlayer");


