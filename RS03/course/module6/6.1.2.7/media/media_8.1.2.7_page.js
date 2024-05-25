
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


loadScript("../../../common/scripts/swfobject.js", registerSWF);


// code below is needed for html5 content from Flash CS6
loadScript("../../../common/scripts/createJS_bundle.min.js", null);
loadScript("media_8.1.2.7_graphic.js", null);
