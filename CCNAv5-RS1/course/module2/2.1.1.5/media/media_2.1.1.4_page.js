loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	$('#mainDiv').data("yt", true);
	var template_type = "VIDEO";
	var slide_texts = [];

	var slide_video = [{url:"http://www.youtube.com/embed/28fTWnjPm_U?version=3&fs=1&modestbranding=1&rel=0&color=white&theme=light&autoplay=0&autohide=0&frameborder=0&allowfullscreen",
						x:0,
						y:45,
						width:400,
						height:240,
						slideNum:"ID_vob"}];
	var slide_images = []														
						
    return {templateType:template_type,												
					images:slide_images,
					texts:slide_texts,
					slideNum:"_video",
		 			videoObject:slide_video};
	
}
