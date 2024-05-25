
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	
	var manifest = [
			{src:"images/_1_2_1_5.png", id:"_1_2_1_5"},
			{src:"images/Bitmap1.png", id:"Bitmap1"},
			{src:"images/Bitmap2.png", id:"Bitmap2"},
			{src:"images/envelope_closed_static.png", id:"envelope_closed_static"}
	];
	return manifest;			
});


