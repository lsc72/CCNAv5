
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}



loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){		
	var manifest = [
		{src:"images/Arrow.png", id:"Arrow"},
		{src:"images/Arrow1.png", id:"Arrow1"},
		{src:"images/computer_laptop.png", id:"computer_laptop"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/hacker.png", id:"hacker"},
		{src:"images/media_7141.jpg", id:"media_7141"}
	];

		return manifest;	
});

