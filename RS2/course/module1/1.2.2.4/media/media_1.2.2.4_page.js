function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(DrawActivity = function(container,id,manifest,answerArr,lineObjArr){
	var cnt = 0;
	
	var stage = container.getStage();
	var mainCont, answerCont;
	var drawShape;
	var offsetX, offsetY;
	var drawingShape;
	var oldPt,oldMidPt,startPt;
	var shapeArray = [];
	var hideBtn,answerBtn;
	var startPoint, midPt;
	var cStage,ansPopupWindow,btn1,btn2,btn3;
	
	stage.mouseMoveOutside=false;
	
	function handleMouseDown(event)
	{
		cnt++;
		var cCanvas = document.createElement("canvas");
		cCanvas.width = 475;
		cCanvas.height = 331;
		cCanvas.id = "slide_"+id+"_canvas_"+cnt;
		cCanvas.style.cssText = "visibility:hidden";
		$("#slide_"+id).append(cCanvas);
		
		var dom = new createjs.DOMElement(cCanvas);
		dom.x = 9;
		dom.y = 30;
		mainCont.addChild(dom);
		
		cStage = new createjs.Stage(cCanvas);
		//cStage.mouseMoveOutside=false;
		//drawShape = new createjs.Shape();
		//cStage.addChild(drawShape);
		//cStage.update();
		
		//alert("cStage.mouseX  " + cStage.mouseX);
		
		var pt = event.target.globalToLocal(stage.mouseX,stage.mouseY-30);
		
		//alert(pt.x);
		
		oldPt = new createjs.Point(pt.x, pt.y);
			
		startPoint = new createjs.Point(pt.x, pt.y);
		
		
		oldMidPt = oldPt;
		
		midPt = new createjs.Point(oldPt.x + pt.x>>1, oldPt.y+pt.y>>1);
		
		drawingShape = new createjs.Shape();
		cStage.addChild(drawingShape);
		
		
		//console.log("cStage.x     "+cStage.x + "  stage.mouseY   "+cStage.mouseY);
		
		
		event.addEventListener("mousemove" , handleMouseMove);
		event.addEventListener("mouseup", handleMouseUp);
	}
	
	function handleMouseMove(event) 
	{   
	
		var pt = event.target.globalToLocal(stage.mouseX,stage.mouseY-30);
		
		midPt = new createjs.Point(oldPt.x + pt.x >>1, oldPt.y+pt.y >>1);
				
		offsetX=0;
		offsetY=0;
		
		drawingShape.graphics.setStrokeStyle(2, 'round', 'round').beginFill("rgba(205,215,80,0.6)").beginStroke("rgba(205,215,80,0)").moveTo(midPt.x-offsetX, midPt.y-offsetY).curveTo(oldPt.x-offsetX, oldPt.y-offsetY, oldMidPt.x-offsetX, oldMidPt.y-offsetY).lineTo(startPoint.x-offsetX, startPoint.y-offsetY).endFill();
		
		
		drawingShape.graphics.setStrokeStyle(2, 'round', 'round').beginStroke("#CDD750").moveTo(midPt.x-offsetX, midPt.y-offsetY).curveTo(oldPt.x-offsetX, oldPt.y-offsetY, oldMidPt.x-offsetX, oldMidPt.y-offsetY);
		
		
		oldPt.x = pt.x;
		oldPt.y = pt.y;

		oldMidPt.x = midPt.x;
		oldMidPt.y = midPt.y;
		
		cStage.update();
			
	}
	
	
	function handleMouseUp(event)
	{
			
		
		event.removeEventListener("mousemove" , handleMouseMove);
		event.removeEventListener("mouseup", handleMouseUp);
		mainCont.removeEventListener("mousedown", handleMouseDown);
		
		
		drawingShape.graphics.setStrokeStyle(2, 'round', 'round').beginStroke("#CDD750").moveTo(midPt.x-offsetX, midPt.y-offsetY).lineTo(startPoint.x-offsetX, startPoint.y-offsetY);
			
		cStage.update();
		
		
		var newImg = document.createElement("img");
		newImg.onload = function(ev){
			
			var img = new createjs.Bitmap(ev.target);
			img.y=30;
			mainCont.addChild(img);
			
			shapeArray.push(img);
			
			update = true;
			
			//var collision = ndgmr.checkPixelCollision(image_1,img,0,true);			
			//console.log("collision "+collision);
			
			$("#slide_"+id+"_canvas_"+cnt).remove();
			mainCont.addEventListener("mousedown", handleMouseDown);
		}
		newImg.src = document.getElementById("slide_"+id+"_canvas_"+cnt).toDataURL();
		
	}	
	
	function imageLoaded(imgs)
	{		
	
	
		mainCont = new createjs.Container()
		mainCont.x = 270.95;
		mainCont.y = 1;
		
		answerCont = new createjs.Container();
		
		//var adiv = $("#slide_"+id).append("<canvas id='answer_canvas_"+id+"' width='750' height='400'></canvas>");
		$("#slide_"+id).append("<div id='answer_canvas_div_"+id+"'></div>");
		var adiv = document.createElement("canvas");
		adiv.id = "answer_canvas_"+id;
		adiv.width = 750;
		adiv.height = 350;
		$("#answer_canvas_div_"+id).append(adiv);
		
		var aStage = new createjs.Stage(adiv);
		aStage.enableMouseOver();
		if (createjs.Touch.isSupported()) { createjs.Touch.enable(aStage); }
		
		var image_1 = new createjs.Bitmap(imgs["slide_"+id+"_answer"]);		
		aStage.addChild(image_1);
		aStage.update();
		
		
		
		
		
		
		
		
		var aDom = new createjs.DOMElement(adiv);
		aDom.x = 10;
		answerCont.addChild(aDom);
		answerCont.visible = false;
		
		
		
		
		
		var bg = new createjs.Shape();
		bg.graphics.beginFill("#fff").drawRect(0,0,475,361)
		mainCont.addChild(bg);
		container.addChild(mainCont,answerCont);
		
		//alert("id "+id);
		
		
		
		if(id==6 || id==7 || id==8 || id==9){
			var line=new createjs.Shape();
			line.graphics.setStrokeStyle(2, 'round', 'round').beginStroke("#000").moveTo(280.95-mainCont.x,48.7).lineTo(740.95-mainCont.x,48.7);
			mainCont.addChild(line);
			
			line.graphics.setStrokeStyle(2, 'round', 'round').beginStroke("#000").moveTo(350-mainCont.x,48.7).lineTo(350-mainCont.x,105);
			mainCont.addChild(line);
			
			if(id==9){
				line.graphics.setStrokeStyle(2, 'round', 'round').beginStroke("#000").moveTo(535-mainCont.x,48.7).lineTo(535-mainCont.x,85);
				mainCont.addChild(line);
			}else{
				line.graphics.setStrokeStyle(2, 'round', 'round').beginStroke("#000").moveTo(558-mainCont.x,48.7).lineTo(558-mainCont.x,105);
				mainCont.addChild(line);
			}
			
			if(id==9){
				line.graphics.setStrokeStyle(2, 'round', 'round').beginStroke("#000").moveTo(694-mainCont.x,48.7).lineTo(694-mainCont.x,200);
				mainCont.addChild(line);
			}else{
				line.graphics.setStrokeStyle(2, 'round', 'round').beginStroke("#000").moveTo(694-mainCont.x,48.7).lineTo(694-mainCont.x,105);
				mainCont.addChild(line);
			}
			stage.update();
		}
		
		
		
		
		for(p=0; p<lineObjArr.length; p++){

			var line=new createjs.Shape();
			lineToX1=manifest[lineObjArr[p][0]].x-mainCont.x+manifest[lineObjArr[p][0]].width/2;
			lineToY1=manifest[lineObjArr[p][0]].y-mainCont.y+manifest[lineObjArr[p][0]].height/2;
			lineToX2=manifest[lineObjArr[p][1]].x-mainCont.x+manifest[lineObjArr[p][1]].width/2;
			lineToY2=manifest[lineObjArr[p][1]].y-mainCont.y+manifest[lineObjArr[p][1]].height/2;
			
			line.graphics.setStrokeStyle(2, 'round', 'round').beginStroke("#000").moveTo(lineToX1,lineToY1).lineTo(lineToX2,lineToY2);
			mainCont.addChild(line);
			stage.update();
		}
		
		for(i=0; i<manifest.length-1; i++){
			var image_2 = new createjs.Bitmap(imgs[String(manifest[i].id)]);	
			image_2.x=manifest[i].x-mainCont.x;
			image_2.y=manifest[i].y;
			image_2.name="im"+i;
			mainCont.addChild(image_2);
			stage.update();
        }	


		
		

						
		mainCont.addEventListener("mousedown", handleMouseDown);
						
		update = true;
	}
		
	function checkBtnHandler(){
	
		
		
		var collision=false;
		var count=0;
		
		var totalCorrectHits=0;
		
		//alert(shapeArray.length + "     "+ answerArr.length);
		if(shapeArray.length == answerArr.length){
		//alert("same number of shapes");
			for(t=0; t<answerArr.length; t++){
				for(k=0; k<answerArr.length; k++){
					for(m=0; m<answerArr[k].length; m++){
						collision = ndgmr.checkPixelCollision(shapeArray[t],mainCont.getChildByName("im"+answerArr[k][m]),0,true);
						if(collision){
							count++;
						}
					}
					
					if ((count == answerArr[k].length))
					{
						totalCorrectHits++;
					}
					count = 0;
					
				}
			}
			
			if(totalCorrectHits==shapeArray.length){
				collision=true;
			}else{
				collision=false;
			}
			
		}
		
			
			ansPopupWindow.visible=1;
			if(!collision){
				//alert("no col");
				ansPopupWindow.setTitleId("ID_s"+id+"_InCorrectTitle");
				ansPopupWindow.setBodyId("ID_s"+id+"_InCorrectText");
			}else{
				//alert("col");
				ansPopupWindow.setTitleId("ID_s"+id+"_CorrectTitle");
				ansPopupWindow.setBodyId("ID_s"+id+"_CorrectText");
			}
			stage.update();
	}		
	function undoHandler()
	{
		ansPopupWindow.visible=0;

		mainCont.removeChild(shapeArray[shapeArray.length-1]);
		shapeArray.pop();	
		update = true;				
	}		
	function resetHandler(){

		ansPopupWindow.visible=0;

		cnt = 0;
		for(var i = 0;i<shapeArray.length;i++)
		{
			mainCont.removeChild(shapeArray[i]);
			update = true;	
		}
		shapeArray = [];
	}
	
	function answerHandler(){
		ansPopupWindow.visible=0;
		if(answerBtn.visible){
			for(p1=0; p1<shapeArray.length; p1++){
				shapeArray[p1].visible=false;
			}
			answerBtn.visible = false;
			hideBtn.visible = true;
			answerCont.visible = true;

			btn1.mouseEnabled = false;
			btn2.mouseEnabled = false;
			btn3.mouseEnabled = false;

			//btn1.setSelected(true);
			//btn2.setSelected(true);
			//btn3.setSelected(true);
			$("#ID_check1").css("pointer-events","none");
			$("#ID_undo1").css("pointer-events","none");
			$("#ID_reset1").css("pointer-events","none");
			mainCont.removeEventListener("mousedown", handleMouseDown);
		}
		else
		{
			for(p1=0; p1<shapeArray.length; p1++){
				shapeArray[p1].visible=true;
			}
			answerBtn.visible = true;
			hideBtn.visible = false;
			answerCont.visible = false;
			
			btn1.mouseEnabled = true;
			btn2.mouseEnabled = true;
			btn3.mouseEnabled = true;
			//btn1.setSelected(false);
			//btn2.setSelected(false);
			//btn3.setSelected(false);
			mainCont.addEventListener("mousedown", handleMouseDown);
		}
		update = true;
	}
	
	
	//alert(checkBtnHandler);
	
	
	btn1 = getCJSElement("BLUE_BUTTON",{x:202.8,y:368.85,width:125,height:21,div:"slide_"+id,compId:"ID_check"+id,id:"check",callback:checkBtnHandler,enabled:"true"});
	container.addChild(btn1);
	
	//alert(btn1.enabled);
	
	btn2 = getCJSElement("BLUE_BUTTON",{x:340.25,y:368.85,width:125,height:21,div:"slide_"+id,compId:"ID_undo"+id,id:"undo",callback:undoHandler,enabled:"true"});
	container.addChild(btn2);
	
	btn3 = getCJSElement("BLUE_BUTTON",{x:477.7,y:368.85,width:125,height:21,div:"slide_"+id,compId:"ID_reset"+id,id:"reset",callback:resetHandler,enabled:"true"});
	container.addChild(btn3);
	
	answerBtn = getCJSElement("BLUE_BUTTON",{x:615.15,y:368.85,width:125,height:21,div:"slide_"+id,compId:"ID_answer"+id,id:"answer",callback:answerHandler,enabled:"true"});
	container.addChild(answerBtn);
	
	hideBtn = getCJSElement("BLUE_BUTTON",{x:615.15,y:368.85,width:125,height:21,div:"slide_"+id,compId:"ID_hide"+id,id:"hide",callback:answerHandler,enabled:"true"});
	hideBtn.visible=false;
	container.addChild(hideBtn);
	
	
	ansPopupWindow = getCJSElement("TEXTBOX",{x:65.15,y:108.85,width:200,height:150,subType:"CLOSABLE",titleId:"ID_s"+id+"_InCorrectTitle",bodyId:"ID_s"+id+"_InCorrectText",visible:"0"});
	//ansPopupWindow.name="pop";
	container.addChild(ansPopupWindow);
	
	
	//alert(ansPopupWindow);
	
	var imgArr = [];
	//imgArr.push({src:"ndgmr.Collision.js", id:"colldet"});
	for(var i = 0;i<manifest.length;i++)
	{
		imgArr.push({src:manifest[i].src, id:manifest[i].id});
	}
	loadImages(imgArr,imageLoaded);
	
});


(slideViewDidLoad = function(container,id){
	
	
	
	//alert("id  "+id);
	if(id == 1)
	{			
		var manifest;
		var answerArr;	
		manifest = [{src:"images/computer.png", id:"computer0",x:291.75,y:214.45,width:53,height:44},
				{src:"images/computer.png", id:"computer1",x:651.45,y:131.95,width:53,height:44},
				{src:"images/computer.png", id:"computer2",x:674.45,y:214.45,width:53,height:44},
                {src:"images/hub.png", id:"hub0", x:418.65, y:214.45,width:41,height:41},
                {src:"images/hub.png", id:"hub1", x:498.55, y:84.2,width:41,height:41},
				{src:"images/hub.png", id:"hub2", x:578.45, y:214.45,width:41,height:41},
				{src:"ndgmr.Collision.js", id:"colldet"},
				{src:"images/slide_1_answer.png", id:"slide_1_answer"}
            ];
			
			answerArr=[[0,1,2,3,4,5]];
			lineObjArr=[[0,3],[3,4],[4,5],[5,1],[5,2]];
			
		var act = new DrawActivity(container,1,manifest,answerArr,lineObjArr);
	}
	
	if(id == 2)
	{	
			var manifest;
		var answerArr;	

		manifest = [{src:"images/router.png", id:"router0",x:468.7,y:70.4,width:56,height:40},
				{src:"images/computer.png", id:"computer3",x:301.45,y:154.85,width:53,height:44},
				{src:"images/computer.png", id:"computer4",x:291.75,y:220.35,width:53,height:44},
				{src:"images/computer.png", id:"computer5",x:301.45,y:281.85,width:53,height:44},
				{src:"images/computer.png", id:"computer6",x:645.45,y:154.85,width:53,height:44},
				{src:"images/computer.png", id:"computer7",x:674.45,y:220.35,width:53,height:44},
				{src:"images/computer.png", id:"computer8",x:651.45,y:281.85,width:53,height:44},
                {src:"images/hub.png", id:"hub3", x:476.85, y:131.15,width:41,height:41},
                {src:"images/hub.png", id:"hub4", x:396.95, y:219,width:41,height:41},
				{src:"images/hub.png", id:"hub5", x:556.75, y:219,width:41,height:41},
				{src:"images/slide_2_answer.png", id:"slide_2_answer"}
            ];			
			
			
			answerArr=[[0,3,4,1,2,5,6,7,8,9]];
			lineObjArr=[[0,7],[1,8],[2,8],[3,8],[8,7],[7,9],[9,4],[9,5],[9,6]];
			
			
		var act = new DrawActivity(container,2,manifest,answerArr,lineObjArr);
	}
	
	
	
	
	if(id == 3)
	{	
			var manifest;
		var answerArr;	

		manifest = [{src:"images/router.png", id:"router0",x:468.7,y:70.4,width:56,height:40},
				{src:"images/computer.png", id:"computer3",x:301.45,y:154.85,width:53,height:44},
				{src:"images/computer.png", id:"computer4",x:291.75,y:220.35,width:53,height:44},
				{src:"images/computer.png", id:"computer5",x:301.45,y:281.85,width:53,height:44},
				{src:"images/computer.png", id:"computer6",x:645.45,y:154.85,width:53,height:44},
				{src:"images/computer.png", id:"computer7",x:674.45,y:220.35,width:53,height:44},
				{src:"images/computer.png", id:"computer8",x:651.45,y:281.85,width:53,height:44},
                {src:"images/hub.png", id:"hub3", x:476.85, y:131.15,width:41,height:41},
                {src:"images/hub.png", id:"hub4", x:396.95, y:219,width:41,height:41},
				{src:"images/hub.png", id:"hub5", x:556.75, y:219,width:41,height:41},
				{src:"images/slide_3_answer.png", id:"slide_3_answer"}
            ];			
			
			
			answerArr=[[0,3,4,1,2,5,6,7,8,9]];
			lineObjArr=[[0,7],[1,8],[2,8],[3,8],[8,7],[7,9],[9,4],[9,5],[9,6]];
			
			
		var act = new DrawActivity(container,3,manifest,answerArr,lineObjArr);
	}
	
	
	
	
	if(id == 4)
	{	
			var manifest;
		var answerArr;	

		manifest = [{src:"images/router.png", id:"router0",x:468.7,y:70.4,width:56,height:40},
				{src:"images/computer.png", id:"computer3",x:301.45,y:154.85,width:53,height:44},
				{src:"images/computer.png", id:"computer4",x:291.75,y:220.35,width:53,height:44},
				{src:"images/computer.png", id:"computer5",x:301.45,y:281.85,width:53,height:44},
				{src:"images/computer.png", id:"computer6",x:645.45,y:154.85,width:53,height:44},
				{src:"images/computer.png", id:"computer7",x:674.45,y:220.35,width:53,height:44},
				{src:"images/computer.png", id:"computer8",x:651.45,y:281.85,width:53,height:44},
                {src:"images/switch.png", id:"switch0", x:464, y:139.45,width:66,height:32},
                {src:"images/hub.png", id:"hub4", x:396.95, y:219,width:41,height:41},
				{src:"images/hub.png", id:"hub5", x:556.75, y:219,width:41,height:41},
				{src:"images/slide_4_answer.png", id:"slide_4_answer"}
            ];			
			
			
			answerArr=[[0,7],[1,2,3,8,7],[4,5,6,9,7]];
			lineObjArr=[[0,7],[1,8],[2,8],[3,8],[8,7],[7,9],[9,4],[9,5],[9,6]];
			
			
		var act = new DrawActivity(container,4,manifest,answerArr,lineObjArr);
	}
	
	
	
	if(id == 5)
	{	
			var manifest;
		var answerArr;	

		manifest = [{src:"images/router.png", id:"router0",x:482,y:70.4,width:56,height:40},
				{src:"images/switch.png", id:"switch0", x:477.9, y:138.95,width:66,height:32},
				{src:"images/switch.png", id:"switch1", x:364.9, y:220.35,width:66,height:32},
				{src:"images/switch.png", id:"switch2", x:594.05, y:221.6,width:66,height:32},
				{src:"images/computer.png", id:"computer4",x:296.45,y:281.85,width:53,height:44},
				{src:"images/computer.png", id:"computer5",x:444.65,y:281.85,width:53,height:44},
				{src:"images/computer.png", id:"computer6",x:527.15,y:281.85,width:53,height:44},
				{src:"images/computer.png", id:"computer7",x:680.45,y:281.85,width:53,height:44},
				{src:"images/slide_5_answer.png", id:"slide_5_answer"}
            ];			
			
			
			answerArr=[[0,1],[1,2],[1,3],[2,4],[2,5],[3,6],[3,7]];
			lineObjArr=[[0,1],[1,2],[1,3],[2,4],[2,5],[3,6],[3,7]];
			
			
		var act = new DrawActivity(container,5,manifest,answerArr,lineObjArr);
	}
	
	
	
	if(id == 6)
	{	
			var manifest;
		var answerArr;	

		manifest = [{src:"images/switch.png", id:"switch0", x:316, y:98.35,width:66,height:32},
				{src:"images/hub.png", id:"hub4", x:329.4, y:160.85,width:41,height:41},
				{src:"images/computer.png", id:"computer4",x:310.45,y:231.85,width:53,height:44},
				{src:"images/computer.png", id:"computer5",x:404.65,y:231.85,width:53,height:44},
				
				{src:"images/switch.png", id:"switch1", x:520.9, y:98.35,width:66,height:32},
				{src:"images/server-file.png", id:"server0",x:503.55,y:206,width:42,height:59},
				{src:"images/computer.png", id:"computer6",x:584,y:220.75,width:53,height:44},
				
				{src:"images/router.png", id:"router2", x:665, y:98.35,width:56,height:40},
				{src:"images/server-file.png", id:"server0",x:672.55,y:259.25,width:42,height:59},
				
				{src:"images/slide_6_answer.png", id:"slide_6_answer"}
            ];			
			
			
			answerArr=[[0,1,2,3,4,5,6,7],[7,8]];
			lineObjArr=[[0,1],[1,2],[1,3],[4,5],[4,6],[7,8]];
			
			
		var act = new DrawActivity(container,6,manifest,answerArr,lineObjArr);
	}
	
	
	
	if(id == 7)
	{	
			var manifest;
		var answerArr;	

		manifest = [{src:"images/switch.png", id:"switch0", x:316, y:98.35,width:66,height:32},
				{src:"images/hub.png", id:"hub4", x:329.4, y:160.85,width:41,height:41},
				{src:"images/computer.png", id:"computer4",x:310.45,y:251.85,width:53,height:44},
				{src:"images/computer.png", id:"computer5",x:404.65,y:251.85,width:53,height:44},
				
				{src:"images/switch.png", id:"switch1", x:520.9, y:98.35,width:66,height:32},
				{src:"images/server-file.png", id:"server0",x:503.55,y:206,width:42,height:59},
				{src:"images/computer.png", id:"computer6",x:584,y:220.75,width:53,height:44},
				
				{src:"images/router.png", id:"router2", x:665, y:98.35,width:56,height:40},
				{src:"images/server-file.png", id:"server0",x:672.55,y:259.25,width:42,height:59},
				
				{src:"images/slide_7_answer.png", id:"slide_7_answer"}
            ];			
			
			
			answerArr=[[0,4,7],[0,1,2,3],[4,5],[4,6],[7,8]];
			lineObjArr=[[0,1],[1,2],[1,3],[4,5],[4,6],[7,8]];
			
			
		var act = new DrawActivity(container,7,manifest,answerArr,lineObjArr);
	}
	
	
	if(id == 8)
	{	
			var manifest;
		var answerArr;	

		manifest = [{src:"images/switch.png", id:"switch0", x:316, y:98.35,width:66,height:32},
				{src:"images/hub.png", id:"hub4", x:329.4, y:160.85,width:41,height:41},
				{src:"images/computer.png", id:"computer4",x:310.45,y:231.85,width:53,height:44},
				{src:"images/computer.png", id:"computer5",x:404.65,y:241.85,width:53,height:44},
				
				{src:"images/hub.png", id:"hub1", x:537.3, y:98.35,width:41,height:41},
				{src:"images/server-file.png", id:"server0",x:503.55,y:206,width:42,height:59},
				{src:"images/computer.png", id:"computer6",x:584,y:220.75,width:53,height:44},
				
				{src:"images/switch.png", id:"switch2", x:660, y:98.35,width:66,height:32},
				{src:"images/server-file.png", id:"server0",x:672.55,y:259.25,width:42,height:59},
				
				{src:"images/slide_8_answer.png", id:"slide_8_answer"}
            ];			
			
			
			answerArr=[[0,1,2,3,4,5,6,7,8]];
			lineObjArr=[[0,1],[1,2],[1,3],[4,5],[4,6],[7,8]];
			
			
		var act = new DrawActivity(container,8,manifest,answerArr,lineObjArr);
	}
	
	
	if(id == 9)
	{	
			var manifest;
		var answerArr;	

		manifest = [{src:"images/switch.png", id:"switch0", x:316, y:98.35,width:66,height:32},
				{src:"images/hub.png", id:"hub1", x:329.4, y:160.85,width:41,height:41},
				{src:"images/computer.png", id:"computer0",x:310.45,y:231.85,width:53,height:44},
				{src:"images/computer.png", id:"computer1",x:404.65,y:241.85,width:53,height:44},
				{src:"images/hub.png", id:"hub2", x:515.3, y:68.55,width:41,height:41},
				{src:"images/server-file.png", id:"server1",x:480.55,y:157,width:42,height:59},
				{src:"images/computer.png", id:"computer2",x:561,y:171.75,width:53,height:44},
				{src:"images/switch.png", id:"switch2", x:660, y:184.35,width:66,height:32},
				{src:"images/server-file.png", id:"server0",x:672.55,y:259.25,width:42,height:59},
				{src:"images/slide_9_answer.png", id:"slide_9_answer"}
            ];		
			
			
			answerArr=[[0,1,2,3],[4,5,6,7,0],[7,8]];
			lineObjArr=[[0,1],[1,2],[1,3],[4,5],[4,6],[7,8]];
			
			
		var act = new DrawActivity(container,9,manifest,answerArr,lineObjArr);
	}
	
	
	
}); 



//answer can be seen before check button click