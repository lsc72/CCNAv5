
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	
var manifest = [
		{src:"images/_4_1_1_3.jpg", id:"_4_1_1_3"},
		{src:"images/envelope-green.png", id:"envelope_green"},
		{src:"images/envelope-orange.png", id:"envelope_orange"},
		{src:"images/envelope-brown.png", id:"envelope_brown"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/Not_Allowed.png", id:"Not_Allowed"}
	];

	return manifest;			
});

