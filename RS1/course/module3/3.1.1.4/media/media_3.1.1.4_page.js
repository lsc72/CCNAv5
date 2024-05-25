loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}
var mainMovieClip;

(Animation = function(control,id){		
		var manifest = [
		{src:"images/letterbg.png", id:"letterbg"},
		{src:"images/letter.png", id:"letter"},
		{src:"images/senderbg.png", id:"senderbg"},
		{src:"images/stampbg.png", id:"stampbg"},
		{src:"images/tablebg.png", id:"tablebg"}
	];
		return manifest;	
}); 

