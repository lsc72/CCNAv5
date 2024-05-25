function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		

	var manifest = [
		{src:"images/media_7113.png", id:"media_7113"}
	];
	return manifest;			
});