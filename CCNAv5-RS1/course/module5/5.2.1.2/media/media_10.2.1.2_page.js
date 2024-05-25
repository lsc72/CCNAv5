function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
	var manifest = [
		{src:"images/computer.png", id:"computer"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/media_10212.png", id:"media_10212"},
		{src:"images/Switch_workgroup.png", id:"Switch_workgroup"}
	];


	return manifest;			
});
 