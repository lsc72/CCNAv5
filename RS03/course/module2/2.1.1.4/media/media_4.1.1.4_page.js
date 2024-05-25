
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	
	var manifest = [
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/media_4114.png", id:"media_4114"}
	];


	return manifest;			
});


