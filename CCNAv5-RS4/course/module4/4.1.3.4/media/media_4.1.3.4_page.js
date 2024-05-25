
function registerSWF(){
swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){

var manifest = [
		{src:"images/_4_1_3_4.jpg", id:"_4_1_3_4"},
		{src:"images/F.jpg", id:"F"},
		{src:"images/purplebg.jpg", id:"purplebg"},
		{src:"images/Switch_ATM.png", id:"Switch_ATM"},
		{src:"images/yellowbg.jpg", id:"yellowbg"}
	];
return manifest;
});
