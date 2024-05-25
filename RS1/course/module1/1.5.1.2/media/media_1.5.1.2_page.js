loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"1_5_1_2.jpg",
						x:25.75,
						y:50.7,
						width:434.75,
						height:236.75,
						type:""},
						{name:"1_5_1_2_A.jpg",
						x:4.8,
						y:45.1,
						width:200,
						height:90,
						type:"STD"},
						{name:"1_5_1_2_B.jpg",
						x:328,
						y:45.1,
						width:200,
						height:90,
						type:"STD"},
						{name:"1_5_1_2_C.jpg",
						x:4.8,
						y:239.05,
						width:200,
						height:90,
						type:"STD"},
						{name:"1_5_1_2_D.jpg",
						x:328.2,
						y:212.4,
						width:200,
						height:90,
						type:"STD"}
						];

    var slide_texts = [{compId:"ID_title",
							x:15,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:16,
							y:146.4, 
							width:110.55,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt02",
							x:359.55,
							y:146.4, 
							width:125,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt03",
							x:16,
							y:336, 
							width:105,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt04",
							x:359.55,
							y:309.2, 
							width:125,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt05",
							x:225.65-56,
							y:169.05+110, 
							width:214.65,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}