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

		
	var slide_images = [{name:"0.0.1.7A.jpg",
							x:14.5,
							y:66.1, 
							width:244, 
							height:324.7,
							type:"STD"},
						{name:"0.0.1.7B.jpg",
							x:212.45,
							y:44.7, 
							width:244, 
							height:324.75,
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


