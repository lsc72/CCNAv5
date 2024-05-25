loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(slideCont,id){
	
	var img = new Image();
	var cont = slideCont;
	img.onload = function(ev){
		$("#commonMediaText").append('<div id="imageDiv" style="visibility:hidden;width:454px;height:203.35px;overflow:auto;border-left:1px solid #d0d0d0;"></div>');
		$("#imageDiv").append(ev.target);
		
		var dom = new createjs.DOMElement(document.getElementById("imageDiv"));
		dom.x = 7;
		dom.y = 32;
		cont.addChild(dom);
		
	}
	img.src = "5_2_1_6_A.png";
	
});