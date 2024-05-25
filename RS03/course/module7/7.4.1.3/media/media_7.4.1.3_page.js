
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


// called from body onload event in media/index.html
function init() {
	// code below adds the html5 graphic from Flash CS6 to the page
	canvas = document.getElementById("canvas");
	exportRoot = new lib.main();

	stage = new Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	Ticker.setFPS(24);
	Ticker.addListener(stage);
}



loadScript("../../../common/scripts/swfobject.js", registerSWF);


// code below is needed for html5 content from Flash CS6
loadScript("../../../common/scripts/createJS_bundle.min.js", null);
loadScript("media_7.4.1.3_graphic.js", null);
