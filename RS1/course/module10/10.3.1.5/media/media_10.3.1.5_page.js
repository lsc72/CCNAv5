loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
(Animation = function(control,id){		
		var manifest = [
		{src:"images/_10315.jpg", id:"_10315"},
		{src:"images/blueashtable.png", id:"blueashtable"},
		{src:"images/computer.png", id:"computer"},
		{src:"images/orangeash.png", id:"orangeash"},
		{src:"images/Yellowash.png", id:"Yellowash"}
	];
		return manifest;	
});

(slideViewDidLoad = function(slidecont){
	
	$("#mediaContainer").append('<div id="mask" style="background-color:#fff;height:'+(window.innerHeight*.65)+'px;z-index:21;"></div>');
	var maskDom = new createjs.DOMElement(document.getElementById("mask"));
	mediaStage.addChild(maskDom);
		
	function resizer(){
		
		$("#mask").css("width",root.x+25);
		$("#mask").css("height",window.innerHeight*.65);

		
	}
	$(window).resize(function(){
		resizer();	
	});	
	resizer();
})


