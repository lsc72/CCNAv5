
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/createJS_bundle.min.js", null);
//loadScript("media_5.2.2.2_graphic.js", null);
(slideViewDidLoad = function(_container,_id)
{
	if(_id == 1)
	{		
		var img = new Image();
		
		img.src="../../../common/images/numbers.png";
		img.onload = function()
		{	
		var _txt_01 = getMediaText("ID_s2_txt01");
		var _txt_02 = getMediaText("ID_s2_txt02");
		
		$("#ID_s2_txt01").append(_txt_01);
		$("#ID_s2_txt02").append(_txt_02);

		}
	}
});