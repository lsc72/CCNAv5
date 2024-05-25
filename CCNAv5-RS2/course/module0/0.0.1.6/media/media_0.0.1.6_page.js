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

		
	var slide_images = [{name:"0.0.1.6.jpg",
							x:85,
							y:39.1, 
							width:278, 
							height:350.1,
							type:"STD"}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:1,
							y:1, 
							width:468, 
							height:17,
							size:13,
							textAlign:"center"}];							
	
							
	var slide_object = {texts:slide_texts,
	images:slide_images,						
						};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


