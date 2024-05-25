function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){		
	var manifest = [
		{src:"images/Access_Switch_Comm_Server.png", id:"Access_Switch_Comm_Server"},
		{src:"images/media_4129.png", id:"dashed_line"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/table.png", id:"table"}
	];
		return manifest;	
});