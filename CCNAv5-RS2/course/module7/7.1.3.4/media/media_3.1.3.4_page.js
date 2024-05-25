
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){	
		var manifest = [
		{src:"images/_10400.jpg", id:"_10400"},
		{src:"images/_10400_highlight.jpg", id:"_10400_highlight"},
		{src:"images/_2highlight.jpg", id:"_2highlight"},
		{src:"images/_2hl.jpg", id:"_2hl"},
		{src:"images/_3134.jpg", id:"_3134"},
		{src:"images/box1.jpg", id:"box1"},
		{src:"images/box4.jpg", id:"box4"},
		{src:"images/box5.jpg", id:"box5"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/one.jpg", id:"one"},
		{src:"images/onewh.jpg", id:"onewh"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/Wan_line.png", id:"Wan_line"},
		{src:"images/zero.jpg", id:"zero"},
		{src:"images/zerowh.jpg", id:"zerowh"}
	];
	return manifest;			
});
