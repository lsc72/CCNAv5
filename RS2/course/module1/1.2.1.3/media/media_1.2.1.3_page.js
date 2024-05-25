
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

var mainMovieClip;
(Animation = function(control,id){	
var manifest = [
		{src:"images/computer.png", id:"computer"},
		{src:"images/computerpngcopy.png", id:"computerpngcopy"},
		{src:"images/data_pack.jpg", id:"data_pack"},
		{src:"images/Emptypacket.jpg", id:"Emptypacket"},
		{src:"images/packetbg.jpg", id:"packetbg"},
		{src:"images/Server_file.png", id:"Server_file"},
		{src:"images/Switch_workgroup.png", id:"Switch_workgroup"}
	];
	return manifest;			
});
