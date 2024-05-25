function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	var manifest = [
		{src:"images/boygirlpic.png", id:"boygirlpic"},
		{src:"images/bulb.png", id:"bulb"},
		{src:"images/bulbpngcopy.png", id:"bulbpngcopy"},
		{src:"images/bulb2.png", id:"bulb2"},
		{src:"images/bulb2_2.png", id:"bulb2_2"},
		{src:"images/computer.png", id:"computer"},
		{src:"images/computer_laptop.png", id:"computer_laptop"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/highlight.png", id:"highlight"}
	];
	return manifest;			
});