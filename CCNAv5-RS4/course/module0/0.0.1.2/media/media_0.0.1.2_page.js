//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";

		
	var slide_images = [{name:"0_0_1_2A.jpg",
							x:26.5,
							y:32.75, 
							width:417, 
							height:324.25,
							type:"STD"},
							
						{name:"0_0_1_2B.jpg",
							x:232.5,
							y:165.75, 
							width:220.95, 
							height:240.95,
							type:"STD"}];
	
							
	var slide_texts = [];							
	
							
	var slide_object = {texts:slide_texts,
	images:slide_images,						
						};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


