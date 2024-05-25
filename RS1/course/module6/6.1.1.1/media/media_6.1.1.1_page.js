function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
var manifest = [
		{src:"images/arrow2.png", id:"arrow2"},
		{src:"images/network.png", id:"network"},
		{src:"images/purple_block.png", id:"purple_block"}
	];


	return manifest;			
});
 