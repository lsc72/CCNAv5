loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var mainMovieClip;

(Animation = function(control,id)
{		
	var manifest = [
		{src:"images/bg.jpg", id:"bg"}
	];
		return manifest;	
});

