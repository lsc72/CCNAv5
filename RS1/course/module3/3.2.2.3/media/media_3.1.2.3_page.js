function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
var manifest = [
		{src:"images/Arrow.png", id:"Arrow"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/CiscoWebpage1copy3.jpg", id:"CiscoWebpage1copy3"},
		{src:"images/CiscoWebpage2.jpg", id:"CiscoWebpage2"},
		{src:"images/Cloud.png", id:"Cloud"},
		{src:"images/computer.png", id:"computer"},
		{src:"images/Server_file.png", id:"Server_file"},
		{src:"images/box_pink.png", id:"box_pink"}
	];

	return manifest;			
});