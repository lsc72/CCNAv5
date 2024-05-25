
function registerSWF(){
swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){

var manifest = [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/media_5131.jpg", id:"media_5131"}
	]
return manifest;
});
