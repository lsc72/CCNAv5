
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){
		
	
	var manifest = [
		{src:"images/2_5_1_1.jpg", id:"_2_5_1_1"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"}
	];
	return manifest;			
});


