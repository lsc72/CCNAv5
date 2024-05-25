
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

var mainMovieClip;

(Animation = function(control,id){	
//alert(control)	
	var manifest = [
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/media_1211.jpg", id:"media_1211"}
	];
	return manifest;			
});

	
	