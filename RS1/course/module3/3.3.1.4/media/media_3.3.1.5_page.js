loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var mainMovieClip;

(Animation = function(control,id){		
	var manifest = [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/CiscoWebpage1copy.jpg", id:"CiscoWebpage1copy"}
	];
		return manifest;	
});