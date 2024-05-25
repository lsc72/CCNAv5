
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)


{	
var _txt_01 = getMediaText("#ID_txt01");

$("#ID_txt01").append(_txt_01);

}); 