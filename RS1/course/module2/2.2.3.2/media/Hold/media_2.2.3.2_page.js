loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"2_2_3_2A.jpg",
							x:50.3,
							y:33.75, 
							width:371.85,
							height:225.95,
							type:"STD"},
							
						{name:"2_2_3_2A.png",
							x:25.95,
							y:283.05, 
							width:420.1,
							height:140.85,
							type:""}];

    var slide_texts = [{compId:"ID_title",
							x:60.3,
							y:2, 
							width:372,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_title_01",
							 x:65-20+3,
							 y:260+33,
							 width:300,
							 height:17,
							 size:11,
							 textAlign:"left"},
							 
					{compId:"ID_body01",
							 x:70-20,
							 y:290+30-2,
							 width:300,
							 height:300,
							 size:11,
							 textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
