
function registerSWF(){
       swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
       if(_id == 1)
       {              
               
	       var _txt_01 = getMediaText("ID_s1_txt01");           
	       
	       $("#ID_s1_txt01").append(_txt_01);

	       var _txt_02 = getMediaText("ID_s1_txt02");           
	       
	       $("#ID_s1_txt02").append(_txt_02);
	                     

       }
});