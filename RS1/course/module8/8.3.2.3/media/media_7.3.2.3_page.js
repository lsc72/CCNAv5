loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
(Animation = function(control,id){		
		var manifest = [
		{src:"images/_7_3_2_3.jpg", id:"_7_3_2_3"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"}
	];
		return manifest;	
});
