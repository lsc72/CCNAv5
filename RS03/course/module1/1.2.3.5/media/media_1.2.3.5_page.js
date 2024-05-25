
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


(slideViewDidLoad = function(container,id){

$('#text2_1').html(getMediaText("ID_s2_txt01"));
});


loadScript("../../../common/scripts/swfobject.js", registerSWF);
 