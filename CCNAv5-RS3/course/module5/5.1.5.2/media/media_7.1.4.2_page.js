
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){
		
	var manifest = [
		{src:"images/media_7142.jpg", id:"media_7142"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/routerhigh.png", id:"routerhigh"}
	];
	return manifest;			
});


