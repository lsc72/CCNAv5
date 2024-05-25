function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(container){	

	var slide = container;
	var im = new Image();
	im.src="../../../common/images/lab.gif";
	
	im.onload = function()
	{		
		$("#commonMediaText").append("<image id='PT_img' src='../../../common/images/PT.png' />");			
		var dom = new createjs.DOMElement(document.getElementById("PT_img"));
		dom.x = 26;
		dom.y = 22;
		slide.addChild(dom);
		update = true;
	}
	
});