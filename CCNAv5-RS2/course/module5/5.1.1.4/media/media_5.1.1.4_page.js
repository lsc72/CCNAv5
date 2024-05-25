
function registerSWF(){
swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

var mainMovieClip;

(Animation = function(control,id){

	var manifest = [
		{src:"images/_5_1_1_4.jpg", id:"_5_1_1_4"},
		{src:"images/Arrow.png", id:"Arrow"},
		{src:"images/arrow2.png", id:"arrow2"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/computer.png", id:"computer"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"}
	];
return manifest;
});
