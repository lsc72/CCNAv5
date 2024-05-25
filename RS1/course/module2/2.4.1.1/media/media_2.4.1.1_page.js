//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"2.4.1.1.jpg",
							x:6,
							y:0,
							width:370.5,
							height:278.25,
							type:"STD"}];

    var slide_texts = [{compId:"ID_txt01",
							x:140,
							y:295+14, 
							width:300,
							height:200,
							size:11,
							textAlign:"left",
							expand:"up+down"}
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
