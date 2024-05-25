function registerSWF(){
swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){

var manifest = [
		{src:"images/_4_1_2_1.jpg", id:"_4_1_2_1"},
		{src:"images/_4_1_2_1_A.jpg", id:"_4_1_2_1_A"},
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"}
	];


return manifest;
});
