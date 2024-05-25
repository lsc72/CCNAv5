
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

 

loadScript("../../../common/scripts/swfobject.js", registerSWF);

 
(slideViewDidLoad = function(container,id){

$('#ID_s3_txt01').html(getMediaText("ID_s3_txt01"));
});
