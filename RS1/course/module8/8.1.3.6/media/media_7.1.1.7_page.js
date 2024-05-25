loadScript("../../../common/scripts/swfobject.js", registerSWF);
loadScript("../../../common/scripts/templates/slide/DecimaltoBinarySlide.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;


function getData()
{
    var template_type = "DECITOBINARY";
	
	var slide_texts = {compId:"ID_title",
						x:0,
						y:2,
						width:430,
						height:17,
						size:14,
						textAlign:"center"};
	
	var slide_object = {
						texts:slide_texts
						};
	
    return {templateType:template_type,
	slideObject:slide_object
	};

}


















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
loadScript("media_7.1.1.7_graphic.js", null);
