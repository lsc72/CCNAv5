
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	
	var manifest = [
		{src:"images/_11_1_2_4.jpg", id:"_11_1_2_4"},
		{src:"images/arrow.png", id:"arrow"},

		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/scndrow.png", id:"scndrow"},
		{src:"images/table.png", id:"table"},
		{src:"images/table_2row.png", id:"table_2row"}
	];
	
	return manifest;			
});


