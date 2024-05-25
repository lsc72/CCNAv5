
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){		
		var manifest = [{src:"images/_7_3_1_1.jpg", id:"_7_3_1_1"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"}];	
		return manifest;	
});