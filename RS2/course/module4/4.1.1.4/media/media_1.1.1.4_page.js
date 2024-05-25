
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){	
		var manifest = [
		{src:"images/_100_1a.jpg", id:"_100_1a"},
		{src:"images/_1114_A.jpg", id:"_1114_A"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/computer.png", id:"computer"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/phone_IP.png", id:"phone_IP"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/Server_file.png", id:"Server_file"},
		{src:"images/Switch_workgroup.png", id:"Switch_workgroup"},
		{src:"images/Wan_line.png", id:"Wan_line"}
	];
	return manifest;			
});


