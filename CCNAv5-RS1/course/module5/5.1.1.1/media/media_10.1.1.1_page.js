loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [];
	
	var commonImage = [];							
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"10_1_1_1_A.png",
							x:4.45,
							y:55.45, 
							width:363.4,
							height:313.95,
							type:"none"}];		
	
	var slide_1_texts = [{compId:"ID_s1_title",
							 x:5,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
				 
						{compId:"ID_osi_txt07",
							 x:11.85+10,
							 y:66+7,
							 width:197.75,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_osi_txt06",
							 x:11.85+10,
							 y:111.7+5,
							 width:197.75,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
					   {compId:"ID_osi_txt05",
							 x:11.85+10,
							 y:157.45+3,
							 width:197.75,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_osi_txt04",
							 x:11.85+10,
							 y:203.15+1,
							 width:197.75,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_osi_txt03",
							 x:11.85+10,
							 y:248.9,
							 width:197.75,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_osi_txt02",
							 x:11.85+10,
							 y:294.6-4,
							 width:197.75,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_osi_txt01",
							 x:11.85+10,
							 y:340.35-7,
							 width:197.75,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_s1_txt01",
							 x:155.75,
							 y:288.3-5,
							 width:55.65,
							 height:17,
							 size:11,
							 textAlign:"right"},
							 
						{compId:"ID_s1_txt02",
							 x:155.75,
							 y:303.8-5,
							 width:55.65,
							 height:17,
							 size:11,
							 textAlign:"right"},
							 
						{compId:"ID_s1_txt05",
							 x:222.85,
							 y:286.8-5,
							 width:117.8,
							 height:21,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_s1_txt06",
							 x:222.85,
							 y:326.6-5,
							 width:117.8,
							 height:21,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_s1_txt04",
							 x:351.3,
							 y:318.8-4,
							 width:83,
							 height:17,
							 size:11,
							 textAlign:"left"},
							 
						{compId:"ID_s1_txt03",
							 x:260.45,
							 y:239.45-46,
							 width:140,
							 height:17,
							 size:11,
							 textAlign:"center",
							 expend:"up_down"}];
							 
	var slide_1_graphics = [{x:352.5-10,
							y:283.55-5,
							x1:367.65-10,
							y1:283.8-5,
							lineWidth:1,
							color:"#000000",
							type:"line"},
							
							{x:367.65-10,
							y:283.8-5,
							x1:367.65-10,
							y1:368.2-9,
							lineWidth:1,
							color:"#000000",
							type:"line"},
							
							{x:352.5-10,
							y:368.15-9,
							x1:367.65-10,
							y1:368.2-9,
							lineWidth:1,
							color:"#000000",
							type:"line"}
							];		

    var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							graphics:slide_1_graphics,
							texts:slide_1_texts};
							
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"10_1_1_1_B.png",
							x:0,
							y:49.15, 
							width:430,
							height:306.7,
							type:"none"}];		
	
	var slide_2_texts = [{compId:"ID_s2_txt01",
							 x:8.15+5,
							 y:74.9,
							 width:101.8,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_s2_txt03",
							 x:8.15+5,
							 y:172.35-7,
							 width:101.8,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_s2_txt07",
							 x:8.15+5,
							 y:289.15-3,
							 width:101.8,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_s2_txt02",
							 x:227.15,
							 y:74.9,
							 width:101.8,
							 height:17,
							 size:11,
							 textAlign:"center",
							 expand:"left+right"},
							 
						{compId:"ID_s2_txt04",
							 x:115.35+18,
							 y:138.1,
							 width:122.15,
							 height:17,
							 size:11,
							 textAlign:"center",
							 expand:"up+down"},
							 
						{compId:"ID_s2_txt05",
							 x:115.35+18,
							 y:199.1,
							 width:122.15,
							 height:17,
							 size:11,
							 textAlign:"center",
							 expand:"up+down"},
							 
						{compId:"ID_s2_txt08",
							 x:115.35+18,
							 y:289.15,
							 width:118.85,
							 height:17,
							 size:11,
							 textAlign:"center",
							 expand:"up+down"},
							 
					   {compId:"ID_s2_txt06",
							 x:286.35+14,
							 y:139.1,
							 width:131.15,
							 height:17,
							 size:11,
							 textAlign:"center",
							 expand:"up+down"},
							 
						{compId:"ID_s2_txt09",
							 x:249.45+2,
							 y:250+40,
							 width:105,
							 height:17,
							 size:11,
							 textAlign:"center",
							 rotation:269.99},
							 
						{compId:"ID_s2_txt10",
							 x:286.5+4,
							 y:250+40+65,
							 width:169.8,
							 height:17,
							 size:11,
							 textAlign:"center",
							 rotation:269.99},
							 
						{compId:"ID_s2_txt11",
							 x:323.55+2,
							 y:250+40+65,
							 width:169.8,
							 height:17,
							 size:11,
							 textAlign:"center",
							 rotation:269.99},
							 
						{compId:"ID_s2_txt12",
							 x:361.55+2,
							 y:250+40+65,
							 width:169.8,
							 height:17,
							 size:11,
							 textAlign:"center",
							 rotation:269.99},
						
							 
						{compId:"ID_s2_txt13",
							 x:399.55+3,
							 y:250+40+65,
							 width:169.8,
							 height:17,
							 size:11,
							 textAlign:"center",
							 rotation:269.99}
							 
							 
						/*{compId:"ID_s2_txt07",
							 x:8.15+5,
							 y:289.15-3,
							 width:101.8,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 {compId:"ID_s2_txt07",
							 x:8.15+5,
							 y:289.15-3,
							 width:101.8,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 {compId:"ID_s2_txt07",
							 x:8.15+5,
							 y:289.15-3,
							 width:101.8,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 {compId:"ID_s2_txt07",
							 x:8.15+5,
							 y:289.15-3,
							 width:101.8,
							 height:17,
							 size:11,
							 textAlign:"center"}*/
							];		

    var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};						
  							
							
										
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImage,
			slideObject:slides};
	
}
