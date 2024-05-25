
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	var manifest = [
		{src:"images/lines.png", id:"lines"},
		{src:"images/media_1121.png", id:"media_1121"},
		{src:"images/topPart.png", id:"topPart"}
	];
	
		
	return manifest;			
});