loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
(Animation = function(control,id){		
		var manifest = [
		{src:"images/_8_1_3_1.jpg", id:"_8_1_3_1"},
		{src:"images/headerbg.png", id:"headerbg"},
		{src:"images/orangearrow.png", id:"orangearrow"},
		{src:"images/rowbg.png", id:"rowbg"},
		{src:"images/whitebg.png", id:"whitebg"}
	];
		return manifest;	
});
