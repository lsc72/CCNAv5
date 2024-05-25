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

		
	var slide_images = [];
	
							
	var slide_texts = [{compId:"ID_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},

						{compId:"ID_txt01",
							x:70.35,
							y:96.85,
							width:65,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt02",
							x:135.35,
							y:96.85,
							width:65,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt03",
							x:200.35,
							y:96.85,
							width:65,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt04",
							x:265.35,
							y:96.85,
							width:65,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt05",
							x:330.35,
							y:96.85,
							width:65,
							height:17,
							size:11,
							textAlign:"center"},

					{compId:"ID_txt06",
							x:395.35,
							y:96.85,
							width:65,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt07",
							x:70.35,
							y:159.85,
							width:65,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt08",
							x:135.35,
							y:159.85,
							width:65,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt09",
							x:200.35,
							y:159.85,
							width:65,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt10",
							x:265.35,
							y:159.85, 
							width:65,
							height:78,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt11",
							x:330.35,
							y:159.85, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt12",
							x:395.35,
							y:159.85, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt13",
							x:3.75,
							y:21.5, 
							width:463.1,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt14",
							x:242.4,
							y:66.85, 
							width:45,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt15",
							x:15,
							y:115.85, 
							width:50,
							height:17,
							size:11,
							textAlign:"right"},
							
						{compId:"ID_txt16",
							x:0.35,
							y:179.85, 
							width:65,
							height:17,
							size:11,
							textAlign:"right"},
							
						{compId:"ID_txt17",
							x:15,
							y:235.5, 
							width:462.9,
							height:17,
							size:11,
							textAlign:"left"}]

						
	var slide_graphics = [{	x:62,
							y:74,
							x1:454,
							y1:74, 
							lineWidth:1,
							type:"line"},
						  { x:62,
							y:74,
							x1:62,
							y1:89, 
							lineWidth:1,
							type:"line"},
						  { x:454,
							y:74,
							x1:454,
							y1:89, 
							lineWidth:1,
							type:"line"}]
						
						
	
							
	var slide_object = {images:slide_images,						
						texts:slide_texts,
						graphics:slide_graphics};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


