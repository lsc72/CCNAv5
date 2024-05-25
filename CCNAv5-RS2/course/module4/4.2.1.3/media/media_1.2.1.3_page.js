
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	
	var manifest = [
		{src:"images/_1_2_1_2A.png", id:"_1_2_1_2A"},
		{src:"images/_1_2_1_3A.jpg", id:"_1_2_1_3A"},
		{src:"images/outline.png", id:"outline"},
		{src:"images/table1.png", id:"table1"},
		{src:"images/table2.png", id:"table2"}
	];
	return manifest;			
});


