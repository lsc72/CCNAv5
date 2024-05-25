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

		
	var slide_images = [{name:"0_0_1_5A.jpg",
							x:18,
							y:28, 
							width:202.75, 
							height:122.35,
							type:"STD"},
						{name:"0_0_1_5B.jpg",
							x:308.45,
							y:28, 
							width:131.55, 
							height:122.35,
							type:"STD"},
						{name:"0_0_1_5C.jpg",
							x:18,
							y:204.95, 
							width:179.5, 
							height:146,
							type:"STD"},
						{name:"0_0_1_5D.jpg",
							x:286.25,
							y:204.95, 
							width:175.95, 
							height:146,
							type:"STD"},];
	
							
	var slide_texts = [{compId:"ID_title",
							x:1,
							y:1, 
							width:468, 
							height:17,
							size:13,
							textAlign:"center"},
						{compId:"ID_txt01",
							x:18,
							y:159.85, 
							width:202.75, 
							height:17,
							size:11,
							textAlign:"left"},
						{compId:"ID_txt02",
							x:283.95,
							y:159.85, 
							width:182.5, 
							height:17,
							size:11,
							textAlign:"left"},
						{compId:"ID_txt03",
							x:18,
							y:357.85, 
							width:179.5, 
							height:17,
							size:11,
							textAlign:"left"},
						{compId:"ID_txt04",
							x:286.25,
							y:357.85, 
							width:179.5, 
							height:17,
							size:11,
							textAlign:"left"}];							
	
							
	var slide_object = {texts:slide_texts,
	images:slide_images,						
						};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


