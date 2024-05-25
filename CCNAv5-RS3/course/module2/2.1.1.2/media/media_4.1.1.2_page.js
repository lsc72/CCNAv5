
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	
	var manifest = [
		{src:"images/_4112_bg.jpg", id:"_4112_bg"},
		{src:"images/Bitmap1.png", id:"Bitmap1"}
	];
	return manifest;			
});


