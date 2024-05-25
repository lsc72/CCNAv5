
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);


(slideViewDidLoad = function(_container,_id)
{ 
	var _txt_01 = getMediaText("ID_txt03");
	$(".lblSubHd1").html(_txt_01);

	var _txt_02 = getMediaText("ID_txt04");
	$(".lblSubHd2").html(_txt_02); 
});