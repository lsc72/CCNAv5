
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

var mainMovieClip;

(Animation = function(control,id){	
//alert(control)	
		var manifest = [
		{src:"images/_9112.jpg", id:"_9112"},
		{src:"images/Arrow.png", id:"Arrow"},
		{src:"images/Arrow1.png", id:"Arrow1"},
		{src:"images/computer.png", id:"computer"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/IBM_mainframe.png", id:"IBM_mainframe"}
	];
	return manifest;			
});