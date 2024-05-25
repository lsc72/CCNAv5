function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){	
		var manifest = [
		{src:"images/_3132.jpg", id:"_3132"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/Wan_line.png", id:"Wan_line"}
	];
	return manifest;			
});
