
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	var manifest = [
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/media_4121.png", id:"media_4121"},
		{src:"images/media_4121pngcopy.png", id:"media_4121pngcopy"},
		{src:"images/media_4121_A.jpg", id:"media_4121_A"},
		{src:"images/Not_Allowed.png", id:"Not_Allowed"},
		{src:"images/RedX.png", id:"RedX"}
	];
		
	return manifest;			
});