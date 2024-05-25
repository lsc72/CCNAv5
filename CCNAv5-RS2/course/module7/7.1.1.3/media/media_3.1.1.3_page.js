
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	
	var manifest = [
		{src:"images/baseimage.png", id:"baseimage"},
		{src:"images/baseimagepngcopy.png", id:"baseimagepngcopy"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"}
	];
	return manifest;			
});


