
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);


var mainMovieClip;

(Animation = function(control,id){		
		var manifest = [
		{src:"images/_2_1_2_5.jpg", id:"_2_1_2_5"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/Server_file.png", id:"Server_file"},
		{src:"images/Switch_ATM.png", id:"Switch_ATM"}
	];
		return manifest;	
});
