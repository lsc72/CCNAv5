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

    var slide_images = [{name:"1_4_2_1.jpg",
							x:36,
							y:42,
							width:400,
							height:320,
							type:"STD"}];

    var slide_texts = [{compId:"ID_title",
                            x:10,
                            y:2, 
                            width:430,
                            height:17,
                            size:14,
                            textAlign:"center"},
                            {compId:"ID_txt01",
                            x:352-60-4,
                            y:60+51-9, 
                            width:117,
                            height:17,
                            size:12,
                            textAlign:"center"},];

    var slide_object = {images:slide_images,
        				texts:slide_texts};

    return {templateType:template_type,
       			 slideObject:slide_object};

}
