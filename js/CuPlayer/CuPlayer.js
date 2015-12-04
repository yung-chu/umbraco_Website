function LoadCuPlayer(playerId,width,height,img,video)
{
    var so = new SWFObject("/js/CuPlayer/CuPlayerMiniV4.swf", "CuPlayerV4", width, height, "9", "#000000");
    so.addParam("allowfullscreen", "true");
    so.addParam("allowscriptaccess", "always");
    so.addParam("wmode", "opaque");
    so.addParam("quality", "high");
    so.addParam("salign", "lt");
    so.addVariable("CuPlayerSetFile", "/js/CuPlayer/CuPlayerSetFile.xml"); //播放器配置文件地址,例SetFile.xml、SetFile.asp、SetFile.php、SetFile.aspx
    so.addVariable("CuPlayerFile", video); //视频文件地址
    so.addVariable("CuPlayerImage", img);//视频略缩图,本图片文件必须正确
    so.addVariable("CuPlayerWidth", width); //视频宽度
    so.addVariable("CuPlayerHeight", height); //视频高度
    so.addVariable("CuPlayerAutoPlay", "no"); //是否自动播放
   // so.addVariable("CuPlayerLogo", "/images/logo.jpg"); //Logo文件地址
    so.addVariable("CuPlayerPosition", "top-right"); //Logo显示的位置
    so.write(playerId);
}