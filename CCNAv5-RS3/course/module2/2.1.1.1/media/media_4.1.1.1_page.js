
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){

var manifest = [
		{src:"images/_4111_A.jpg", id:"_4111_A"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/Not_Allowed.png", id:"Not_Allowed"}
	];
return manifest;
});
