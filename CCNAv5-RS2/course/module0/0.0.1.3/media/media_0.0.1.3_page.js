//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
//loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
     var template_type = "INTERACTIVEANIM";

	var slide_texts = {};
						
	
	var slides = {animId:0,
					texts:slide_texts};
	
	return {templateType:template_type,
	slideObject:slides};
	
}

