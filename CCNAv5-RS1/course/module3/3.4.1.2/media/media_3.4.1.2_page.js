//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"3_4_1_2.jpg",
							x:58,
							y:62.3, 
							width:340, 
							height:268.05,
							type:"none"}];
							
	var slide_texts = [{compId:"ID_txt01",
							x:67+4,
							y:33+9, 
							width:149.95,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:67,
							y:73.8, 
							width:149.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:67,
							y:111.8, 
							width:149.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:67,
							y:150.8, 
							width:149.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt05",
							x:67,
							y:190.8, 
							width:149.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt06",
							x:67,
							y:228.8, 
							width:149.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt07",
							x:67,
							y:267.8, 
							width:149.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt08",
							x:67,
							y:307.8, 
							width:149.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt14",
							x:86,
							y:355.85, 
							width:317.8,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt09",
							x:250+4,
							y:33+9, 
							width:149.95,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt10",
							x:250,
							y:111.3, 
							width:150.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt11",
							x:250,
							y:190.8, 
							width:150.95,
							height:17,
							size:11,
							textAlign:"center"},
							
							{compId:"ID_txt12",
							x:250,
							y:228.8, 
							width:150.95,
							height:17,
							size:11,
							textAlign:"center"},
							
							{compId:"ID_txt13",
							x:253,
							y:287.8, 
							width:150.95,
							height:17,
							size:11,
							textAlign:"center"},
							
							
							
							];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);