loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"1.4.1.6A.jpg",
							x:1,
							y:55, 
							width:438,
							height:288.35,
							type:""}]
															
	var slide_1_texts = [{compId:"ID_s1_title",
							x:20,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:30,
							y:61.5, 
							width:405,
							height:17,
							size:14,
							textAlign:"left"},
							{compId:"ID_s1_txt02",
							x:52.45,
							y:91.75, 
							width:80.5,
							height:14.55,
							size:9,
							textAlign:"left"},
							{compId:"ID_s1_txt03",
							x:52.45,
							y:105.75, 
							width:80.5,
							height:14.55,
							size:9,
							textAlign:"left"},
							{compId:"ID_s1_txt04",
							x:97,
							y:129, 
							width:115,
							height:14.1,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_txt05",
							x:228.95,
							y:104, 
							width:115,
							height:14.1,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_txt06",
							x:70.95,
							y:250.75, 
							width:40,
							height:14,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_txt07",
							x:137.7,
							y:250.75, 
							width:40,
							height:14,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_txt08",
							x:200,
							y:250.75, 
							width:40,
							height:14,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_txt09",
							x:245.45,
							y:241.25, 
							width:90,
							height:17,
							size:8,
							textAlign:"left"},
							{compId:"ID_s1_txt10",
							x:350.95,
							y:239, 
							width:90,
							height:17,
							size:8,
							textAlign:"left"},	
							{compId:"ID_s1_txt11",
							x:22,
							y:277.5, 
							width:211,
							height:14,
							size:14,
							textAlign:"right"},
							{compId:"ID_s1_txt12",
							x:245.45,
							y:315.75, 
							width:90,
							height:17,
							size:12,
							color:"#0197D6",
							textAlign:"center"},	
							{compId:"ID_s1_txt13",
							x:350.95,
							y:315.75, 
							width:90,
							height:17,
							color:"#0197D6",
							size:12,
							textAlign:"center"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"1.4.1.6B.jpg",
							x:1,
							y:33, 
							width:438,
							height:358,
							type:""}]															
	var slide_2_texts = [{compId:"ID_s2_titletxt",
							x:17,
							y:36, 
							width:438,
							height:17,
							size:14,
							textAlign:"left"},
							{compId:"ID_s2_bodytext",
							x:5,
							y:60, 
							width:425.9,
							height:45.5,
							size:11,
							textAlign:"left"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
	var slide_3_type = "VIDEO";
	var slide_3_video = "";
	var slide_3_images = []								
	var slide_3_texts = [];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts,
							slide_3_video:slide_3_video	
	};	
																
	var slides = [slide_1_object,slide_2_object,slide_3_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
