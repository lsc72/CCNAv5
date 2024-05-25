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
		$("#commonMediaText").append("<image id='lab_img' style='top:0px;left:0px;visibility:hidden;' src='../../../common/images/lab.gif' />");			
		var dom = new createjs.DOMElement(document.getElementById("lab_img"));
		dom.x = 7.8;
		dom.y = 30;
		slide.addChild(dom);
		update = true;
	}
	
});