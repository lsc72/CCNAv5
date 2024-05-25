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

		
	var slide_images = [{name:"0_0_1_4.png",
							x:80.65,
							y:104, 
							width:288.8, 
							height:207,
							type:""}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:1,
							y:1, 
							width:468, 
							height:17,
							size:13,
							textAlign:"center"},
						{compId:"ID_txt01",
							x:90.85,
							y:132.85, 
							width:143.05, 
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt02",
							x:235.05,
							y:132.85, 
							width:143.05, 
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt05",
							x:166.8,
							y:200.85, 
							width:143.05, 
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt03",
							x:90.65,
							y:260.35, 
							width:143.05, 
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt04",
							x:235.05,
							y:260.35, 
							width:143.05, 
							height:17,
							size:11,
							textAlign:"center"}];							
	
							
	var slide_object = {texts:slide_texts,
	images:slide_images,						
						};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


