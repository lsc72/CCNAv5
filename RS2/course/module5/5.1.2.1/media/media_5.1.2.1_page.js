
function registerSWF(){
swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){

var manifest = [
		{src:"images/_5_1_2_1.jpg", id:"_5_1_2_1"},
		{src:"images/Arrow.png", id:"Arrow"},
		{src:"images/arrow2.png", id:"arrow2"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/router.png", id:"router"}
	];
return manifest;
});
