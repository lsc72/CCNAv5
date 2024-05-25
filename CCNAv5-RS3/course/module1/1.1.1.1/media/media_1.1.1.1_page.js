
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

var mainMovieClip;

(Animation = function(control,id){		
		var manifest = [{src:"images/Building.png", id:"Building"},
		{src:"images/computer.png", id:"computer"},
		{src:"images/End_User_Male.png", id:"End_User_Male"},
		{src:"images/home_office.png", id:"home_office"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/Server_file.png", id:"Server_file"},
		{src:"images/Switch_workgroup.png", id:"Switch_workgroup"},
		{src:"images/Wan_line.png", id:"Wan_line"}];	
		return manifest;	
});
