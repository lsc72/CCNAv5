
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){
		
	var manifest = [
		{src:"images/media_5151.jpg", id:"media_5151"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/routerhigh.png", id:"routerhigh"}
	];
	return manifest;			
});


