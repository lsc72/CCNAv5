
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
	if(_id == 1)
	{		
		var img = new Image();
		
		img.src="../../../common/images/numbers.png";
		img.onload = function()
		{	
		var _txt_01 = getMediaText("ID_s1_txt01");
		var _txt_02 = getMediaText("ID_s1_txt02");
		var _txt_03 = getMediaText("ID_s1_txt03");
		var _txt_04 = getMediaText("ID_s1_txt04");
		var _txt_05 = getMediaText("ID_s1_txt05");
		
		$("#ID_s1_txt01").append(_txt_01);
		$("#ID_s1_txt02").append(_txt_02);
		$("#ID_s1_txt03").append(_txt_03);
		$("#ID_s1_txt04").append(_txt_04);
		$("#ID_s1_txt05").append(_txt_05);
		}
	}
});
