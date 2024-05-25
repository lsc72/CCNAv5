loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(slideContainer,id){

		var manifest = [{id:"img1",src:"11_5_1_2A.jpg"},
						{id:"img2",src:"11_5_1_2B.jpg"},
						{id:"mark1",src:"marker_A.png"},
						{id:"mark2",src:"marker_B.png"}];
		var btns = [];
		var sCont = slideContainer;
		var image = new Image();
		
		$("#commonMediaText").append('<div id="commonMediaText_01" style="visiblity:hidden;top:0px;left:0px;pointer-events:none;"></div>');
		$("#commonMediaText").append('<div id="commonMediaText_02" style="visiblity:hidden;top:0px;left:0px;pointer-events:none;"></div>');
		
		loadImages(manifest, function(imgs){onLoadImages(imgs)});
		
		onLoadImages = function(imgs){

			var img1 = getCJSElement("IMAGE",{x:"33.35", y:"30.35", width:"400", height:"159", src:"11_5_1_2A.jpg", div:"commonMediaText_01"});		
			var mark1 = getCJSElement("IMAGE",{x:"100", y:"163", width:"109", height:"15", src:"marker_A.png", div:"commonMediaText_01"});
			var mark1_glow = getCJSElement("IMAGE",{x:"92.5", y:"155.5", width:"110.5", height:"50", src:"marker_Aglow.png", div:"commonMediaText_01"});
			var img2 = getCJSElement("IMAGE",{x:"33.35", y:"30.35", width:"390", height:"159", src:"11_5_1_2B.jpg", div:"commonMediaText_01"});		
			var mark2 = getCJSElement("IMAGE",{x:"241.75", y:"129", width:"23", height:"22.2", src:"marker_B.png", div:"commonMediaText_01"});		
			var mark3 = getCJSElement("IMAGE",{x:"268", y:"129", width:"79", height:"18.7", src:"marker_C.png", div:"commonMediaText_01"});		
			
			var mark2_glow = getCJSElement("IMAGE",{x:"233", y:"120", width:"43", height:"42", src:"marker_Bglow.png", div:"commonMediaText_01"});		
			var mark3_glow = getCJSElement("IMAGE",{x:"258", y:"120", width:"103", height:"40", src:"marker_Cglow.png", div:"commonMediaText_01"});		
			
			var textbox = getCJSElement("TEXTBOX",{x:31,y:210,width:400.4,height:130,div:"commonMediaText_01", bodyId:"ID_s1_txt", titleId:"ID_s1_title"});	
			
			sCont.addChild(img1);
			sCont.addChild(mark1);
			sCont.addChild(mark1_glow);
			
			sCont.addChild(img2);
			sCont.addChild(mark2);
			sCont.addChild(mark3);
			sCont.addChild(mark2_glow);
			sCont.addChild(mark3_glow);
			sCont.addChild(textbox);
			
			mark3.scaleX = 1.2;
			mark3_glow.scaleX = 1.15;
			img2.scaleY = 1.2;
			
			mark1.cursor = 
			mark2.cursor = 
			mark3.cursor = "pointer";
			
			img2.visible = mark2.visible = mark3.visible = mark1_glow.visible = mark2_glow.visible = mark3_glow.visible = false;
			
			mark1.addEventListener("click", function(){
					textbox.setTitleId("ID_LED_HOTSPOT_T");
					textbox.setBodyId("ID_LED_HOTSPOT");
					mark1_glow.visible = true;
					mark1.visible = false;
			});
			mark2.addEventListener("click", function(){
					textbox.setTitleId("ID_INTERNET_HOTSPOT_T");
					textbox.setBodyId("ID_INTERNET_HOTSPOT");
					mark2_glow.visible = true;
					mark3_glow.visible = false;
					mark2.visible = false;
					mark3.visible = true;
			});
			mark3.addEventListener("click", function(){
					textbox.setTitleId("ID_ETHERNET_HOTSPOT_T");
					textbox.setBodyId("ID_ETHERNET_HOTSPOT");
					mark3_glow.visible = true;
					mark2_glow.visible = false;
					mark3.visible = false;
					mark2.visible = true;
			});
			
			updateSlide = function(id,th){
			
			//alert(id);
							btns[0].setSelected(false);
							btns[1].setSelected(false);
							
							if(id == "1"){
								btns[0].setSelected(true);
								img1.visible = true;
								mark1.visible = true;
								
								mark1_glow.visible = mark2_glow.visible = mark3_glow.visible = false;
								img2.visible = false;
								mark2.visible = false;
								mark3.visible = false;
								textbox.setTitleId("ID_s1_title");
								textbox.setBodyId("ID_s1_txt");
							}else if(id == "2"){
								btns[1].setSelected(true);
								img1.visible = false;
								mark1.visible = false;
								img2.visible = true;
								mark2.visible = true;
								mark3.visible = true;
								
								mark1_glow.visible = mark2_glow.visible = mark3_glow.visible = false;
								
								textbox.setTitleId("ID_s2_title");
								textbox.setBodyId("ID_s2_txt");
							}
							
							sCont.getStage().update();
						}
			//btns
			var btn1 = getCJSElement("BLUE_BUTTON",{x:"47",y:"366",width:"170",height:"21",div:"commonMediaText",id:"1",compId:"ID_btn01",callback:updateSlide});
			var btn2 = getCJSElement("BLUE_BUTTON",{x:"259",y:"366",width:"170",height:"21",div:"commonMediaText",id:"2",compId:"ID_btn02",callback:updateSlide});
			btns.push(btn1);
			btns.push(btn2);
			
			sCont.parent.addChild(btn1);
			sCont.parent.addChild(btn2);
			
			
			sCont.getStage().update();
			
		}

})