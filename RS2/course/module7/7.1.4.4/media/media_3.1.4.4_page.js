function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){	
		var manifest = [
		{src:"images/_3144.jpg", id:"_3144"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/RedX.png", id:"RedX"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/Wan_line.png", id:"Wan_line"}
	];
	return manifest;			
});



