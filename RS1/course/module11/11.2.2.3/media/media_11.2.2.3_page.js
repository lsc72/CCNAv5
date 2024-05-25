function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
var manifest = [
		{src:"images/Arrow.png", id:"Arrow"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Cloud.png", id:"Cloud"},
		{src:"images/computer.png", id:"computer"},
		{src:"images/computer_laptop.png", id:"computer_laptop"},
		{src:"images/computer_red.png", id:"computer_red"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/Firewall_PIX_left.png", id:"Firewall_PIX_left"},
		{src:"images/Firewall_PIX_leftpngcopy.png", id:"Firewall_PIX_leftpngcopy"},
		{src:"images/Firewall_PIX_right.png", id:"Firewall_PIX_right"},
		{src:"images/hacker.png", id:"hacker"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/Server_file.png", id:"Server_file"},
		{src:"images/Switch_Layer_3.png", id:"Switch_Layer_3"},
		{src:"images/Switch_workgroup.png", id:"Switch_workgroup"},
		{src:"images/Wan_line.png", id:"Wan_line"}
	];


	return manifest;			
});
 