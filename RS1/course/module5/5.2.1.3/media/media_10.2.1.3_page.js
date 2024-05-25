loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad=function(_container,_id){
	
	if(_id == 4){
		
		//var imgDiv=document.createElement("div");
		
			
			$("#slide_4").append('<img src="btn_slide_4.png" id="imgShd" width="220" height="47" />');
			var dom = new createjs.DOMElement(document.getElementById("imgShd"));
				dom.x = 115.95;
				dom.y = 54.5;
				_container.addChild(dom);

	}
	
})