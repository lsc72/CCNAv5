loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var mainMovieClip;

(Animation = function(control,id){		
		var manifest = [
		{src:"images/_3314.jpg", id:"_3314"},
		{src:"images/ciscobg.jpg", id:"ciscobg"},
		{src:"images/dataframebg.png", id:"dataframebg"},
		{src:"images/greenbg.png", id:"greenbg"}
	];
		return manifest;	
});