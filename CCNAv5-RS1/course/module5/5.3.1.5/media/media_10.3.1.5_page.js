loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
(Animation = function(control,id){		
		var manifest = [{src:"images/computerpngcopy.png", id:"computerpngcopy"},{src:"images/_1_2_1_3.jpg", id:"_1_2_1_3"},
		{src:"images/data_pack.jpg", id:"data_pack"},
		{src:"images/Emptypacket.jpg", id:"Emptypacket"},
		{src:"images/packetbg.jpg", id:"packetbg"},
		{src:"images/packetbgjpgcopy.jpg", id:"packetbgjpgcopy"},
		{src:"images/Server_file.png", id:"Server_file"},
		{src:"images/Switch_workgroup.png", id:"Switch_workgroup"}];	
		return manifest;	
});


