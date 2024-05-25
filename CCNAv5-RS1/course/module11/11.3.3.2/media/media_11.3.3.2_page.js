loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
(Animation = function(control,id){		
		var manifest = [
		{src:"images/orangearrow.png", id:"orangearrow"}
	];
		return manifest;	
})

(slideViewDidLoad = function(cont,id){
	
	var image =  new Image();
var btncont=new createjs.Container();
	image.onload = function(ev)
	{				
		var textbox = getCJSElement("TEXTBOX",{x:10,y:40,width:450,height:170,bodyId:"ID_InfoBody", titleId:"ID_InfoTitle",animated:0,subType:"CLOSABLE"});
		cont.addChild(textbox);
		textbox.visible=false
		var text = getCJSElement("TEXT",{x:394,y:280,width:77.85,expand:"left",align:"center",compId:"ID_TipText"});
		text.visible=false
		cont.addChild(text);
		var bit = new  createjs.Bitmap(ev.target)
		btncont.cursor = "pointer";
		btncont.addChild(bit)				
		cont.addChild(btncont);
		btncont.addEventListener("click",showTextBox)
		btncont.addEventListener("mouseover",showTextBox)
		btncont.addEventListener("mouseout",showTextBox)
		btncont.x=410
		btncont.y=290
				
		function showTextBox(e)
		{
			if(e.type=="click")
			{
			textbox.visible=true
			}
			if(e.type=="mouseover")
			{
			text.visible=true
			}
			if(e.type=="mouseout")
			{
			text.visible=false
			}
		}
	}
	image.src = "images/moreinfo.png"
	
});



