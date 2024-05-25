function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
var manifest = [
		{src:"images/boygirlpic.png", id:"boygirlpic"},
		{src:"images/computer.png", id:"computer"},
		{src:"images/computer_IP_based_Video.png", id:"computer_IP_based_Video"},
		{src:"images/sunset8.jpg", id:"sunset8"},
		];
	return manifest;			
});