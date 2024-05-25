function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);


(slideViewDidLoad = function(slideCont,id){
	if (id==2)
	{
		var img = new Image();
	var cont = slideCont;
	img.onload = function(ev){
		$("#commonMediaText").append('<div id="imageDiv2" style="visibility:hidden;width:423.95px;height:218.75px;overflow:auto;border-left:1px solid #d0d0d0;"></div>');
		$("#imageDiv2").append(ev.target);
		
		var dom = new createjs.DOMElement(document.getElementById("imageDiv2"));
		dom.x = 17;
		dom.y = 32;
		cont.addChild(dom);
		
	}
	img.src = "5_2_1_7_A.png";
	
	}

	if (id==3)
	{
		var img = new Image();
	var cont = slideCont;
	img.onload = function(ev){
		$("#commonMediaText").append('<div id="imageDiv3" style="visibility:hidden;width:423.95px;height:218.75px;overflow:auto;border-left:1px solid #d0d0d0;"></div>');
		$("#imageDiv3").append(ev.target);
		
		var dom = new createjs.DOMElement(document.getElementById("imageDiv3"));
		dom.x = 17;
		dom.y = 32;
		cont.addChild(dom);
		
	}
	img.src = "5_2_1_7_B.png";
	
	}
	
});