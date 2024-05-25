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

		
	var slide_images = [{name:"3_3_1_3a.png",
							x:0,
							y:40.3, 
							width:457, 
							height:354,
							type:""}];	
							
	var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
						
						{compId:"ID_txt01",
							x:93.7,
							y:79.7, 
							width:143.3,
							height:17,
							size:11,
							color:"#000000",
							textAlign:"center"},

						{compId:"ID_txt02",
							x:100,
							y:126.45, 
							width:45.7,
							height:17,
							size:11,
							color:"#000000",
							textAlign:"center"},

						{compId:"ID_txt03",
							x:148,
							y:126.45, 
							width:45.7,
							height:17,
							size:11,
							color:"#000000",
							textAlign:"center"},

					{compId:"ID_txt04",
							x:195,
							y:126.45, 
							width:45.7,
							height:17,
							size:11,
							color:"#000000",
							textAlign:"center"},
						
					{compId:"ID_txt05",
							x:335.4-7,
							y:79.7, 
							width:119.95,
							height:17,
							size:11,
							color:"#000000",
							textAlign:"center"},
						
					{compId:"ID_txt06",
							x:68,
							y:224.2-3, 
							width:69,
							height:52,
						  	size:11,
						    color:"#000000",
							textAlign:"center"},
					
					{compId:"ID_txt07",
							x:190,
							y:180.65-3, 
							width:56.55,
							height:17,
							size:11,
						    color:"#000000",
							textAlign:"center"},
						
					{compId:"ID_txt08",
							x:10,
							y:274.9-4, 
							width:56.55,
							height:30,
							size:11,
						    color:"#000000",
							textAlign:"center"},
						
					{compId:"ID_txt09",
							x:68,
							y:274.9-4, 
							width:69,
							height:52,
						  	size:11,
						    color:"#000000",
							textAlign:"center"},

						{compId:"ID_txt10",
							x:189,
							y:230.65-3, 
							width:56.55,
							height:17,
							size:11,
						    color:"#000000",
							textAlign:"center"},


							{compId:"ID_txt11",
							x:250-6,
							y:274.9-3, 
							width:56.55,
							height:30,
						  	size:11,
						    color:"#000000",
							textAlign:"center"},


							{compId:"ID_txt12",
							x:190,
							y:284-6, 
							width:56.55,
							height:17,
							size:11,
						    color:"#000000",
							textAlign:"center"},


							{compId:"ID_txt13",
							x:361,
							y:153, 
							width:56.55,
							height:17,
							size:11,
						    color:"#000000",
							textAlign:"center"},

							{compId:"ID_txt14",
							x:361,
							y:226.65,
							width:56.55,
							height:17,
							size:11,
						    color:"#000000",
							textAlign:"center"},


						{compId:"ID_txt15",
							x:340-5,
							y:270.9, 
							width:106.55,
							height:30,
							size:11,
						    color:"#000000",
							textAlign:"center"},

						{compId:"ID_txt16",
							x:340-5,
							y:333.9-8, 
							width:106.55,
							height:17,
							size:11,
						    color:"#000000",
							textAlign:"center"},


						{compId:"ID_txt17",
							x:325-17,
							y:29, 
							width:158.9,
							height:30,
							size:11,
						    color:"#000000",
							textAlign:"center"},


						{compId:"ID_txt18",
							x:10,
							y:331, 
							width:223,
							height:30,
							size:11,
						    color:"#000000",
							textAlign:"center"},
							
						{compId:"ID_txt19",
							x:134.35,
							y:173.65-3, 
							width:56.55,
							height:30,
							size:11,
						    color:"#000000",
							textAlign:"center"},

						{compId:"ID_txt20",
							x:134.35,
							y:224.2-3, 
							width:57.05,
							height:30,
							size:11,
						    color:"#000000",
							textAlign:"center"},

						{compId:"ID_txt21",
							x:134.25,
							y:275.2-4, 
							width:57.05,
							height:30,
							size:11,
						    color:"#000000",
							textAlign:"center"
					}];

								
	


							
	var slide_object = {images:slide_images,						
						texts:slide_texts
						};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


