
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(){	
var manifest = [
		{src:"images/_8_2_1_5.jpg", id:"_8_2_1_5"},
		{src:"images/Arrow.png", id:"Arrow"},
		{src:"images/Arrow1.png", id:"Arrow1"}
	];
	return manifest;
});