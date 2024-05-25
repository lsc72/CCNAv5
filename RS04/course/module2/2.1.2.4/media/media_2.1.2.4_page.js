
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){		
	var manifest = [
		{src:"images/_2_1_2_4.jpg", id:"_2_1_2_4"},
		{src:"images/phone.png", id:"phone"},
		{src:"images/Switch_PBX.png", id:"Switch_PBX"}
	];
		return manifest;	
});
