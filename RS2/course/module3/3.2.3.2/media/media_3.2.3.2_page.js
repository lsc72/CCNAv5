function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(slideContainer,id)
{
	if(id==2)
	{
		$("#oo_txt").html(getMediaText("ID_s2_txt01"));
	}


});