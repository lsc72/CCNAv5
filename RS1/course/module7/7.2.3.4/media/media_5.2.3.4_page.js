loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
(slideViewDidLoad = function(slideCont,id){
	if (id==2)
	{
		var img = new Image();
	var cont = slideCont;
	img.onload = function(ev){
		$("#commonMediaText").append('<div id="imageDiv2" style="visibility:hidden;width:200px;height:100px;overflow:auto;"></div>');
		$("#imageDiv2").append(ev.target);
		
		var dom = new createjs.DOMElement(document.getElementById("imageDiv2"));
		dom.x = 155;
		dom.y = 263;
		cont.addChild(dom);
		
		
		var txt1 = getCJSElement("TEXT",{compId:"ID_s2_txt07",x:"13", y:"322", width:"404.1", expand:"down", div:"commonMediaText", align:"center", class:"orangeCallOut"})
	cont.addChild(txt1);
		
		
	}
	img.src = "5_2_3_4_s2.png";
	
	
	
	}

	if (id==3)
	{
		var img = new Image();
	var cont = slideCont;
	img.onload = function(ev){
		$("#commonMediaText").append('<div id="imageDiv3" style="visibility:hidden;width:167.7px;height:159.65px;overflow:auto;"></div>');
		$("#imageDiv3").append(ev.target);
		
		var dom = new createjs.DOMElement(document.getElementById("imageDiv3"));
		dom.x = 146.7;
		dom.y = 254.65;
		cont.addChild(dom);
		
		var txt1 = getCJSElement("TEXT",{compId:"ID_s3_txt07",x:"13", y:"320", width:"404.1", expand:"down", div:"commonMediaText", align:"center", class:"orangeCallOut"})
	cont.addChild(txt1);
	
	}
	img.src = "5_2_3_4_B.png";
	
	}
	
	if (id==4)
	{
		var img = new Image();
	var cont = slideCont;
	img.onload = function(ev){
		$("#commonMediaText").append('<div id="imageDiv4" style="visibility:hidden;width:380px;height:260px;overflow:auto;"></div>');
		$("#imageDiv4").append(ev.target);
		
		var dom = new createjs.DOMElement(document.getElementById("imageDiv4"));
		dom.x =45.85 ;
		dom.y =117.2 ;
		cont.addChild(dom);
		
		
		var txt1 = getCJSElement("TEXT",{compId:"ID_s4_txt07",x:"17.3", y:"220", width:"404.1", expand:"down", div:"commonMediaText", align:"center", class:"orangeCallOut"})
	cont.addChild(txt1);
		
		
	}
	img.src = "arrowS4.png";
	
	
	}
	
	if (id==5)
	{
		var img = new Image();
	var cont = slideCont;
	img.onload = function(ev){
		$("#commonMediaText").append('<div id="imageDiv5" style="visibility:hidden;width:434.45px;height:164.5px;overflow:auto;"></div>');
		$("#imageDiv5").append(ev.target);
		
		var dom = new createjs.DOMElement(document.getElementById("imageDiv5"));
		dom.x =13.5 ;
		dom.y =95.6 ;
		cont.addChild(dom);
		
		
		var txt1 = getCJSElement("TEXT",{compId:"ID_s5_txt07",x:"16.5", y:"220", width:"398.1", expand:"down", div:"commonMediaText", align:"center", class:"orangeCallOut"})
	cont.addChild(txt1);
		
		
	}
	img.src = "5_2_3_4_s5.png";
	
	
	}
	
});