loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
(Animation = function(control,id){		
var manifest = [
		{src:"images/_3_3_1_2_A.jpg", id:"_3_3_1_2_A"},
		{src:"images/_3_3_1_2_B.jpg", id:"_3_3_1_2_B"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/envelope_red.png", id:"envelope_red"}
	];
		return manifest;	
});


	
	
(slide1 = function(slideContainer){
	
 

	activity = getActivityElement({div:"slide_1",subType:"ANIMATION", movieClipId:"anim02", totalFrames:"209"})
	slideContainer.activity_2 = activity;
	slideContainer.addChild(activity);
	
	activity = getActivityElement({div:"slide_1",subType:"ANIMATION", movieClipId:"anim01", totalFrames:"181"})
	slideContainer.activity_1 = activity;
	slideContainer.addChild(activity);
	
			
	btn = getCJSElement("BLUE_BUTTON",{x:215,y:320,width:93,height:30,compId:"ID_s1_btn01",callback:btnHandler,id:"1"});
	btn.setSelected(true);
	slideContainer.btn_1 = btn;	
	slideContainer.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:330,y:320,width:93,height:27,compId:"ID_s1_btn02",callback:btnHandler,id:"2"});
	slideContainer.btn_2 = btn;
	slideContainer.addChild(btn);
	btnHandler(1)
	
	function btnHandler(id)
	{					
		slideContainer.btn_1.setSelected(false);	
		slideContainer.btn_2.setSelected(false);	
		
		slideContainer["btn_"+id].setSelected(true);
		slideContainer.getStage().update();
		slideContainer.activity_1.visible = false;
		slideContainer.activity_2.visible = false;
	
		slideContainer["activity_"+id].visible = true;
		slideContainer.getStage().update();
		update = true;
	}
	
});

(slideViewDidLoad = function(slideContainer,id){
	
 
	if(id == 1)
	{	
		loadImages([{src:"../../../common/scripts/templates_ext_dev.js", id:"ext"}],function(){			
		slide1(slideContainer);
		});
	}
	
});




