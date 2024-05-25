
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	
	var manifest = [
		{src:"images/_11115.jpg", id:"_11115"},
		{src:"images/arrow_org.png", id:"arrow_org"},
		{src:"images/envelop.jpg", id:"envelop"},
		{src:"images/router.jpg", id:"router"}
	];
	return manifest;			
});


