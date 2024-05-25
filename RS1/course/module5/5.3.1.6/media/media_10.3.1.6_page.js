function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
	var manifest = [
		{src:"images/computer.png", id:"computer"},
		{src:"images/Server_file.png", id:"Server_file"},
		{src:"images/Switch_workgroup.png", id:"Switch_workgroup"}
	];
	return manifest;			
});
 