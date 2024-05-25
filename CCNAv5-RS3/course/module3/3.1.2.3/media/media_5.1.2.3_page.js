
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/createJS_bundle.min.js", null);
//loadScript("media_5.1.2.3_graphic.js", null);
