function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
	var manifest = [
		{src:"images/computer.png", id:"computer"},
		{src:"images/computer_laptop.png", id:"computer_laptop"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/envelopeblue.png", id:"envelopeblue"},
		{src:"images/envelopegreen.png", id:"envelopegreen"},
		{src:"images/envelopeorange.png", id:"envelopeorange"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/Router_Wireless.png", id:"Router_Wireless"},
		{src:"images/satellite.png", id:"satellite"},
		{src:"images/satellite_dish.png", id:"satellite_dish"},
		{src:"images/Untitled2.png", id:"Untitled2"},
		{src:"images/wireless_signal.png", id:"wireless_signal"}
	];
	return manifest;			
});
 