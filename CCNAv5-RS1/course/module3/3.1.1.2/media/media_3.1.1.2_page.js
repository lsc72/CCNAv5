
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
 
loadScript("../../../common/scripts/swfobject.js", registerSWF);
 
 
(slideViewDidLoad = function(slideContainer,id){
	
	var p; // shortcut to reference prototypes

// stage content:




if(id == 1)
	{	
		var textbox = getCJSElement("TEXTBOX",{x:13.85, y:73.35,width:420.05,height:150, titleId:"ID_title01",bodyId:"ID_bullet01"});
		textbox.visible = true;
	
		
		var textbox2 = getCJSElement("TEXTBOX",{x:13.85, y:73.35,width:420.05,height:150, titleId:"ID_title02",bodyId:"ID_bullet02"});
		textbox2.visible = false;		
		
		var buttn1 = getCJSElement("BLUE_BUTTON",{x:"169.35",y:"267.85",width:"127",height:"24",compId:"ID_btn01"});
		
		
		var buttn2 = getCJSElement("BLUE_BUTTON",{x:"169.35",y:"267.85",width:"127",height:"24",compId:"ID_btn02"});
		buttn2.visible=false;
		slideContainer.addChild(textbox, textbox2,buttn1, buttn2);
		
		buttn1.addEventListener("click",function(ev){
			textbox2.visible = true;
			textbox.visible = false;
			buttn2.visible=true;
			buttn1.visible = false;				
		})
		
		
		buttn2.addEventListener("click",function(ev){
			textbox2.visible = false;
			textbox.visible = true;
			buttn1.visible=true;
			buttn2.visible = false;		
			
		})
		
		
		
		
	}


})