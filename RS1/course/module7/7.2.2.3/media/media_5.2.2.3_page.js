//loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(Animation = function(control,id){		
		var manifest = [
		{src:"images/_5_2_2_3.jpg", id:"_5_2_2_3"},
		{src:"images/clockbg.png", id:"clockbg"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/Not_Allowed.png", id:"Not_Allowed"},
		{src:"images/right.png", id:"right"}
	];	
		return manifest;	
});