
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){		
		var manifest = [{src:"images/_1222.jpg", id:"_1222"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"}];	
		return manifest;	
});


