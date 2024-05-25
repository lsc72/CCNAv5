
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	var manifest = [
		{src:"images/_3_3_2_3.png", id:"_3_3_2_3"},
		{src:"images/envelope_closed_action.png", id:"envelope_closed_action"}
	];
	
		
	return manifest;			
});