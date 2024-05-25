loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

//Function triggers when all the slides/view contents are loaded
(slideViewDidLoad = function(slideContainer){	
	
	
	var imgArray = [
		{src:"3.1.3.1.A.jpg", id:"image_1", x:"10", y:"40", width:"219.95", height:"79.8", clickSrc:"http://www.eciaonline.org/eiastandards/"},
		{src:"3.1.3.1.B.jpg", id:"image_2", x:"240", y:"175", width:"220", height:"68.8", clickSrc:"http://www.ieee.org/index.html"},
		{src:"3.1.3.1.C.jpg", id:"image_3", x:"182", y:"259", width:"100", height:"100", clickSrc:"http://www.itu.int/en/Pages/default.aspx"},
		{src:"3.1.3.1.D.jpg", id:"image_4", x:"10", y:"147", width:"220", height:"84.65", clickSrc:"http://www.iana.org/"},
		{src:"3.1.3.1.E.jpg", id:"image_5", x:"10", y:"259", width:"149.3", height:"100", clickSrc:"http://www.icann.org/"},
		{src:"3.1.3.1.F.jpg", id:"image_6", x:"305", y:"259", width:"155", height:"100", clickSrc:"http://www.tiaonline.org/"},
		{src:"3.1.3.1.G.jpg", id:"image_7", x:"240", y:"40", width:"220", height:"120.4", clickSrc:"http://www.ietf.org/"}];
		
	function imageLoaded(imgs){
		var dom;
		 //style='visibility:hidden;'
		for(var i = 0;i<imgArray.length;i++)
		{
			$("#commonMediaText").append("<div id=div_"+imgArray[i].id+" class='roundimg'><a href='"+imgArray[i].clickSrc+"' target='_blank'><img src='"+imgArray[i].src+"' id='"+imgArray[i].id+"' width='"+imgArray[i].width+"' height='"+imgArray[i].height+"' /></a></div>");
			
			//dom = new createjs.DOMElement(document.getElementById(imgArray[i].id));
			divdom = new createjs.DOMElement(document.getElementById("div_"+imgArray[i].id));
			//dom.x = imgArray[i].x;
			//dom.y = imgArray[i].y;
			
			divdom.x = imgArray[i].x;
			divdom.y = imgArray[i].y;
			
			//slideContainer.addChild(dom);
			
			slideContainer.addChild(divdom);
			//divdom.addChild(dom);
		}
		
	}	
	loadImages(imgArray,imageLoaded);

});