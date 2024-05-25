loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
(Animation = function(control,id){		
		var manifest = [
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/media_3117.jpg", id:"media_3117"}
	];
		return manifest;	
});

(slide1 = function(slideContainer){
	
	
	var btn	
		
	btn = getCJSElement("BLUE_BUTTON",{x:80,y:334.5,width:93.2,height:21,compId:"ID_s1_btn01",callback:slidebtnHandler1,id:"1"});
	btn.setSelected(true);
	slideContainer.btn_1 = btn;	
	slideContainer.addChild(btn);
	var imgelement = getCJSElement("IMAGE",{src:"media_3.1.1.7A.png",x:"0",y:"0",width:"470",height:"400"});
	slideContainer.image_1=imgelement;
	slideContainer.addChild(imgelement);
	
	btn = getCJSElement("BLUE_BUTTON",{x:194.95,y:334.5,width:93.2,height:21,compId:"ID_s1_btn02",callback:slidebtnHandler1,id:"2"});
	slideContainer.btn_2 = btn;
	slideContainer.addChild(btn);
	imgelement = getCJSElement("IMAGE",{src:"media_3.1.1.7B.png",x:"0",y:"0",width:"470",height:"400"});
	slideContainer.image_2=imgelement;	
	slideContainer.addChild(imgelement);
	
	btn = getCJSElement("BLUE_BUTTON",{x:309.9,y:334.5,width:93.2,height:21,compId:"ID_s1_btn03",callback:slidebtnHandler1,id:"3"});
	slideContainer.btn_3 = btn;
	slideContainer.addChild(btn);
	 imgelement = getCJSElement("IMAGE",{src:"media_3.1.1.7C.png",x:"0",y:"0",width:"470",height:"400"});
	slideContainer.image_3=imgelement;	
	slideContainer.addChild(imgelement);
	slidebtnHandler1(1)
	
	function slidebtnHandler1(id)
	{
	if(domElement!=null)
	{
		$("#domElement").remove();
		slideContainer.removeChild(domElement)
		}		
	var htmlElmt = document.createElement("div");
	htmlElmt.style.cssText = "top:0px;left:0px;position:absolute;";
	htmlElmt.id = "domElement";
	htmlElmt.innerHTML = "<img id = 'myImage' src = 'wave.gif?rand="+Math.random()*1000+"'>";
	document.body.appendChild(htmlElmt);
		var domElement = new createjs.DOMElement(htmlElmt);	
		slideContainer.addChild(domElement)				
		domElement.x=135	
		domElement.y=20	
		slideContainer.btn_1.setSelected(false);	
		slideContainer.btn_2.setSelected(false);	
		slideContainer.btn_3.setSelected(false);			
		slideContainer["btn_"+id].setSelected(true);
		slideContainer["image_"+id].visible=true;
		if(id==1)
		{			
		slideContainer.image_2.visible=false;	
		slideContainer.image_3.visible=false;		
		}
		if(id==2)
		{			
		slideContainer.image_1.visible=false;	
		slideContainer.image_3.visible=false;
		}	
		if(id==3)
		{			
		slideContainer.image_1.visible=false;	
		slideContainer.image_2.visible=false;
		}
		update = true;
	}
	
	
});

(slide2 = function(slideContainer){
	
	//subType="ANIMATION" movieClipId="anim01" totalFrames="90"
	var activity = getActivityElement({div:"slide_2",subType:"ANIMATION", movieClipId:"anim03", totalFrames:"90"})
	slideContainer.activity_1 = activity;
	slideContainer.addChild(activity);
	activity = getActivityElement({div:"slide_2",subType:"ANIMATION", movieClipId:"anim02", totalFrames:"87"})
	slideContainer.activity_2 = activity;
	slideContainer.addChild(activity);
	activity = getActivityElement({div:"slide_2",subType:"ANIMATION", movieClipId:"anim01", totalFrames:"86"})
	slideContainer.activity_3 = activity;
	slideContainer.addChild(activity);
	
			
	btn = getCJSElement("BLUE_BUTTON",{x:69,y:300,width:93,height:21,compId:"ID_s2_btn01",callback:btnHandler,id:"1"});
	btn.setSelected(true);
	slideContainer.btn_1 = btn;	
	slideContainer.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:183.95,y:300,width:93,height:21,compId:"ID_s2_btn02",callback:btnHandler,id:"2"});
	slideContainer.btn_2 = btn;
	slideContainer.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:298.9,y:300,width:93,height:21,compId:"ID_s2_btn03",callback:btnHandler,id:"3"});
	slideContainer.btn_3 = btn;
	slideContainer.addChild(btn);
	
	function btnHandler(id)
	{					
		slideContainer.btn_1.setSelected(false);	
		slideContainer.btn_2.setSelected(false);	
		slideContainer.btn_3.setSelected(false);			
		slideContainer["btn_"+id].setSelected(true);
		slideContainer.getStage().update();
		slideContainer.activity_1.visible = false;
		slideContainer.activity_2.visible = false;
		slideContainer.activity_3.visible = false;		
		slideContainer["activity_"+id].visible = true;
		slideContainer.getStage().update();
		update = true;
	}
	
	btnHandler(1);
	
});

(slideViewDidLoad = function(slideContainer,id){
	
	if(id == 1)
	{	
		slide1(slideContainer);		
	}	
	if(id == 2)
	{	
		loadImages([{src:"../../../common/scripts/templates_ext_dev.js", id:"ext"}],function(){			
		slide2(slideContainer);
		});
	}
	
});




