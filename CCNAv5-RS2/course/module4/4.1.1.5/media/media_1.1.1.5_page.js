
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){

	var manifest = [
		{src:"images/arrow2.png", id:"arrow2"},
		{src:"images/computer.png", id:"computer"},
		{src:"images/phone_IP.png", id:"phone_IP"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/Server_file.png", id:"Server_file"},
		{src:"images/Switch_workgroup.png", id:"Switch_workgroup"},
		{src:"images/Wan_line.png", id:"Wan_line"},
		{src:"images/media_1.1.1.5.jpg", id:"media_1115"}
	];
return manifest;
});
