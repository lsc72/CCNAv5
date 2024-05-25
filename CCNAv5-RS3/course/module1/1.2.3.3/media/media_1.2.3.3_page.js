
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
} 
loadScript("../../../common/scripts/swfobject.js", registerSWF);
 
(slideViewDidLoad = function(container,id){

	$('#text2_1').html(getMediaText("ID_s2_txt01"));

});