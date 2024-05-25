function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad  = function (container, id)
{
	if(id==3)
	{
		$("#ro").html(getMediaText("ID_s3_txt02"));
	}
	
	});