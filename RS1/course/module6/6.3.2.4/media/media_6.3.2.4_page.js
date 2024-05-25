
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{             
               
	       var _txt_01 = getMediaText("ID_op1");           
	       
	       $("#ID_op1").append(_txt_01);

	       var _txt_02 = getMediaText("ID_op2");           
	       
	       $("#ID_op2").append(_txt_02);
	                     

});