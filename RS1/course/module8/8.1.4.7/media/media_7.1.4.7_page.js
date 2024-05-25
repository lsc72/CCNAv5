loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");


function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var act;
var actId;
 

var currVal;
var prvVal;

function shuffleHandler()
{
	
	currVal = randomNumber(1,3);
	
	if (prvVal!=currVal)
	{

	}
	else
	{
		shuffleHandler();
		return;
	}
	
	prvVal = currVal;
	console.log("dnd"+currVal);
}


function randomNumber(min, max)
{

	return Math.floor(Math.random() * (1 + max - min) + min);
}

function loadDnd(container)
{
 
	
	if(currVal==1)
	{
		loadFirst(container);
	}
	else if (currVal==2)
	{
		loadSecond(container);
	}
	else
	{
		loadThird(container);
	}
}

function loadFirst(container)
{
		$(canvasXML).find("element").each(function(index, element) {
			
			if($(this).attr("type") == "ACTIVITYLocal" &&  $(this).attr("actid") == "1") {
				var obj1 = {};
				actId="1";
				for(var i = 0;i<this.attributes.length;i++)
				{
					obj1[this.attributes[i].name] = this.attributes[i].value;			
				}
				
				act = new DragDropComp(obj1,this);
				container.addChild(act);
				update = true;
			}
		});		 
}

function loadSecond(container){
	
		
		
		$(canvasXML).find("element").each(function(index, element) {
		
			if($(this).attr("type") == "ACTIVITYLocal" &&  $(this).attr("actid") == "2") {
				actId="2";
				var obj1 = {};
				
				
				for(var i = 0;i<this.attributes.length;i++)
				{
					obj1[this.attributes[i].name] = this.attributes[i].value;			
				}
				
				act = new DragDropComp(obj1,this);
				container.addChild(act);
				update = true;
			}
		});		
	
	}
	
	function loadThird(container){		
		
		$(canvasXML).find("element").each(function(index, element) {
		
			if($(this).attr("type") == "ACTIVITYLocal" &&  $(this).attr("actid") == "3") {
			
				var obj1 = {};
				actId="3";
				
				for(var i = 0;i<this.attributes.length;i++)
				{
					obj1[this.attributes[i].name] = this.attributes[i].value;			
				}
				
				act = new DragDropComp(obj1,this);
				container.addChild(act);
				update = true;
			}
		});		
	
	}
	
	
	function clearCanvas(container)
	{  
		 
		$("#commonMediaText").empty();
		/*if($("#textBoxDiv_1"))$("#textBoxDiv_1").empty();
		$("#textBoxDiv_2").empty();
		$("#textBoxDiv_3").empty();*/
				 
		act.removeAllChildren();
		container.removeChild(act); 
 
		update = true;
	}
	
	

(slideViewDidLoad = function(container){
	
		
	
		
	var dndCount = 0;

/* 			Drag'n'Drop Component			*/

//Drop container area
(DropContainer = function(compObj){
	this.initialize();
	
	var t = this;
	
		if(compObj.dropIcon){
			
		
	var dropImage = new Image();
	dropImage.src = compObj.dropIcon;
	dropImage.onload=dropImageHandle;
	
	}
	
	  

	
	else{
	 
				if(compObj.dragAlpha==0.3)
				{
					var bg = new createjs.Shape();
					bg.graphics.beginLinearGradientFill(["#acaeae","#cbdad9","#e5e9e9"], [0,0.5,0.9], 0,0,0,compObj.height).beginLinearGradientStroke(["#747273","#a6b8b7"], [0, 0.3], 0, 0, 0, compObj.height).setStrokeStyle(0.4).drawRoundRect(0,0,compObj.width,compObj.height,1);
					bg.alpha= 0.4;
					
					var bg1= new createjs.Shape();
					bg1.graphics.beginLinearGradientFill(["#ffffff","#ffffff"], [0,1], 0,0,0,compObj.height).drawRoundRect(0,0,compObj.width,compObj.height,1);
					bg1.alpha=  0.25;
					t.addChild(bg1,bg);
				}
				else if(compObj.dragAlpha==1){
					var bg = new createjs.Shape();
					bg.graphics.beginLinearGradientFill(["#f4f3f4","#ffffff"], [0, 1], 0,0,0,compObj.height).beginLinearGradientStroke(["#a1a4a4","#d7dbdb"], [0, 0.9], 0, 0, 0, compObj.height).setStrokeStyle(1.3).drawRoundRect(0,0,compObj.width,compObj.height,1);
					t.addChild(bg);
				}
				else
				{
					var bg = new createjs.Shape();
					bg.graphics.beginLinearGradientFill(["#acaeae","#cbdad9","#e5e9e9"], [0,0.5,0.9], 0,0,0,compObj.height).beginLinearGradientStroke(["#747273","#a6b8b7"], [0, 0.3], 0, 0, 0, compObj.height).setStrokeStyle(0.4).drawRoundRect(0,0,compObj.width,compObj.height,1);
					bg.alpha=compObj.dragAlpha?compObj.dragAlpha:"0.3"
					
					var bg1= new createjs.Shape();
					bg1.graphics.beginLinearGradientFill(["#ffffff","#ffffff"], [0,1], 0,0,0,compObj.height).drawRoundRect(0,0,compObj.width,compObj.height,1);
					bg1.alpha=  0.3;
					t.addChild(bg1,bg);
				}
					
	
	}
	function dropImageHandle(event){
	   var image=event.target;
	   bitmap=new createjs.Bitmap(image)
	   
	   t.addChild(bitmap);
	  // bitmap.x=3;
	  // bitmap.y=2;//t.addChild(bitmap);
	  //dragStage.update();
	}
	
	t.obj = compObj;
	t.dragTarget = null;		
	
	//tick and wrong image container		
	var markCont = new createjs.Container();
	t.addChild(markCont);
	//tick image
	var bitmap = new createjs.Bitmap("../../../common/images/tick.png");
	markCont.addChild(bitmap);
	markCont.tick = bitmap;
	bitmap.visible = false;
	//wrong image
	bitmap = new createjs.Bitmap("../../../common/images/wrong.png");
	markCont.addChild(bitmap);
	markCont.wrong = bitmap;
	bitmap.visible = false;
	
	t.showCorrect = function()
	{
		markCont.tick.visible = true;
		markCont.wrong.visible = false;
		update = true;
	}
	t.showWrong = function()
	{		
		markCont.tick.visible = false;
		markCont.wrong.visible = true;
		update = true;	
	}
	t.clear = function()
	{
		markCont.tick.visible = false;
		markCont.wrong.visible = false;
		update = true;	
	}
	
	switch(compObj.tickPosition){
		case "left":
				markCont.x = - 20;
				markCont.y = (compObj.height-16)/2;			
			break;
		case "right":
				markCont.x = compObj.width + 4;
				markCont.y = (compObj.height-16)/2;
			break;
		case "up":
				markCont.x = (compObj.width-16)/2;
				markCont.y = - 20;				
			break;
		case "down":
				markCont.x = (compObj.width-16)/2;
				markCont.y = compObj.height + 4;
			break;
	}
	
	update = true;
	t.x = compObj.x;
	t.y = compObj.y;
}).prototype = new createjs.Container();

//Drag Object area
(DragContainer = function(compObj,th){
	this.initialize();
	var t = this;		
	var th = th;
	var bitmap;
	var dragicon=false;
	
	t.cursor = "pointer";
//	t.dragTarget = null;
	t.dropTarget = null;
	t.tweenObject = null;
	

	//create hit shape
			
	hitShape = new createjs.Shape();
	hitShape.graphics.beginFill("#ffffff").drawRoundRect(0,0,compObj.width,compObj.height+2,3);
	hitShape.alpha=0.01;
	t.addChild(hitShape);

	
	//create drag div
	var dragDiv = document.createElement("div");
	dragDiv.style.cssText = "top:-5px;left:6px;visibility:hidden;pointer-events:none;";
	dragDiv.id = "dnd_"+compObj.dndCount+"_drag_"+compObj.dragId+"_"+compObj.subId;
	//dragDiv.id = "dnd_"+dndCount+"_drag_"+compObj.dragId+"_"+compObj.subId;
	t.name = dragDiv.id;
	//console.log("ths is :::"+dragDiv.id)
	//Create drag Canvas
	var dragCanvas = document.createElement("canvas");
	dragCanvas.width = compObj.width+10;
	dragCanvas.height = compObj.height+10;
	dragDiv.appendChild(dragCanvas);
	
	$("#"+compObj.div).append(dragDiv);
	
	var dragStage = new createjs.Stage(dragCanvas);
	dragStage.enableMouseOver();
	//For Label
	if(!compObj.dragIcon){
		
	if(compObj.img){	   
		var img = new Image();
		img.onload = function(ev){
			var dbitmap = new createjs.Bitmap(ev.target);
			dragStage.addChild(dbitmap);
			dragStage.update();
		};	
		img.src = compObj.img;	
		
	}else{
	var label = getCJSElement("TEXT",{x:-9,y:0,width:compObj.width,div:dragDiv.id,align:compObj.dragAlign,compId:compObj.compId,expand:"up+down",color:compObj.textColor,size:compObj.size});
	if(compObj.dragAlign=="left")label.x=6;
	label.y = (compObj.height-$("#"+compObj.compId).height())/2+3;
	$("#"+compObj.compId).attr("id","");
	dragStage.addChild(label);
	}
	}
	
	//For background
	var bgCont = new createjs.Container();
	
	if(compObj.dragIcon){
		
	var dragImage = new Image();
	dragImage.src = compObj.dragIcon;
	dragImage.onload=dragImageHandle;
	
	}
	else
	{
		
		if(compObj.dragBackgroundColor && compObj.dragBorderColor){
			var bg = new createjs.Shape();
		bg.graphics.beginLinearGradientFill([compObj.dragBackgroundColor,compObj.dragBackgroundColor], [0, 1], 0,0,0,compObj.height).beginLinearGradientStroke([ compObj.dragBorderColor, compObj.dragBorderColor], [0, 1], 0, 0, 0, compObj.height).setStrokeStyle(2.5).drawRoundRect(3,3,compObj.width,compObj.height,3);
		bgCont.addChild(bg);
		}
		else{
		
		var bg = new createjs.Shape();
		bg.graphics.beginLinearGradientFill(["#fcfdff","#D4ecf8"], [0, 1], 0,0,0,compObj.height).beginLinearGradientStroke(["#038bd1","#33b7f0"], [0, 1], 0, 0, 0, compObj.height).setStrokeStyle(2.5).drawRoundRect(3,3,compObj.width,compObj.height,3);
		var bg1 = new createjs.Shape();
		bg1.graphics.beginStroke("#34b7f1").beginFill("#34b7f1").drawRect(2,compObj.height,compObj.width, 3);
		var bg2 = new createjs.Shape();
		bg2.graphics.beginStroke("#067EB2").beginFill("#067EB2").drawRect(3,compObj.height+3,compObj.width, 1);
		bgCont.addChild(bg,bg1,bg2);
		}
	}

     function dragImageHandle(event){
	   var image=event.target;
	   bitmap=new createjs.Bitmap(image)
	   
	   bgCont.addChild(bitmap);
	   bitmap.x=3;
	   bitmap.y=2;//t.addChild(bitmap);
	  dragStage.update();
	}

	var shadowCont=new createjs.Container();
	var shadow = new createjs.Shape();
					
	//bg.graphics.beginFill("#456").drawRoundRect(0,0,compObj.width+2,compObj.height,5);

	shadow.graphics.beginFill("#e9e7e8").drawRoundRect(3,3,compObj.width,compObj.height,3);

	shadowCont.name="shadow"+compObj.dragId;
	
	if(!compObj.dragIcon){
	shadowCont.addChild(shadow);
	}
	else{
	    shadow = new Image();
	    shadow.src = compObj.dragIcon;
	    bitmapShadow=new createjs.Bitmap(shadow)
	    bitmapShadow.alpha=0.6;
		bitmapShadow.x=2;
	    bitmapShadow.y=2;
        shadowCont.addChild(bitmapShadow);
}
	
	dragStage.addChild(shadowCont);
	dragStage.addChild(bgCont);
	
	dragStage.update();
	
	t.dragDiv = dragDiv;
	t.obj = compObj;
			
	t.addEventListener("mousedown",th.mouseDownHandler);
	
	t.mouseOverShadow = function()
	{	
	    		
		shadowCont.shadow = new createjs.Shadow("#333399",0, 0,10);
		shadowCont.shadow = new createjs.Shadow("#333399",0, 0,10);
		if(shadowCont.getStage()) shadowCont.getStage().update();
	}
	t.mouseOutShadow = function()
	{
		shadowCont.shadow = new createjs.Shadow("#333399",0,0,0);
		if(shadowCont.getStage()) shadowCont.getStage().update();
	
	}	
	t.mouseMoveShadow = function()
	{		
		shadowCont.shadow = new createjs.Shadow("#333399",10,10,20);
		if(shadowCont.getStage()) shadowCont.getStage().update();
	}
	shadowCont.addEventListener("mouseover",t.mouseOverShadow);
	shadowCont.addEventListener("mouseout",t.mouseOutShadow);
			
	t.loaded = function()
	{
		var dragElement = new createjs.DOMElement(dragDiv);
		t.addChild(dragElement);
	}
	
	t.x = compObj.x;
	t.y = compObj.y;			
}).prototype = new createjs.Container();



(DragDropComp = function (obj,xmlNode) {
 

	obj.div = "commonMediaText";//animSlideDivId ? animSlideDivId : "commonMediaText";
	
 
	
	this.initialize();
	
	mediaStage.mouseMoveOutside = true;
	
	var th = this;
	var tickContainer;
	var answerBoolean=0;
	var fbContainer;
	var fbComp;
	var hitShape;
	var checkClicked = false;
	var resetClicked = false;
    var checksnapback=0;
	var snpbackcnt=0;
	var snapbackcomplete=0;
	var checkFirst=0;
	
	//var droptarget
	
	var fbObject;
	
	obj.compWidth = obj.compWidth ? parseFloat(obj.compWidth) : 100;
	obj.compHeight = obj.compHeight ? parseFloat(obj.compHeight) : 20;
	obj.tickPosition=obj.tickPosition? obj.tickPosition:"left";
	obj.dragAlpha=obj.dragAlpha?obj.dragAlpha:"1";
	obj.matchType=obj.matchType?obj.matchType:"normal";	
		
	var dragArray = [];
	var dropArray = [];
	
	var replicate = (obj.replicate && (obj.replicate=="true"))? true : false;
	
	//Mouse events goes here
	
	var offset;	
	
	th.mouseDownHandler = function(ev)
	{	
		
		//console.log("ev.target.dropTarget:::"+ev.target.dropTarget)
		if(ev.target.dropTarget) ev.target.dropTarget.clear();
		//replicate
		if(replicate && (ev.target.dropTarget == null))
		{			
			var childObj = ev.target.obj;
			childObj.subId = ev.target.obj.subId+1;
			var duplicate = new DragContainer(childObj,th);
			th.addChild(duplicate);
			duplicate.loaded();
			dragArray.push(duplicate);
			ev.target = duplicate;
		}
	//	console.log("ev.target.dropTarget "+ev.target.dropTarget);
		
		if(ev.target.dropTarget)
		{
			ev.target.dropTarget.dragTarget = null;
			ev.target.dropTarget = null;
			//console.log("coming to snapback---") 
			 checksnapback=1
			
		}
		//Set highest z-index for the child
		$(ev.target.dragDiv).css("z-index",$("#"+obj.div).children().length);
		//Get offset 
		//offset = {x:ev.target.x-ev.stageX, y:ev.target.y-ev.stageY};	
		var point2 = th.globalToLocal(ev.stageX, ev.stageY);
        offset = {x:ev.target.x-point2.x, y:ev.target.y-point2.y};		
		ev.addEventListener("mousemove", th.mouseMoveHandler);
		ev.addEventListener("mouseup", th.mouseUpHandler);
		fbComp.visible=false;
		update = true;
	}
	th.mouseMoveHandler = function(ev)
	{		
		var point = th.globalToLocal(ev.stageX, ev.stageY);

		ev.target.x =(point.x + offset.x);
		ev.target.y = (point.y + offset.y);	
		//ev.target.x =( ev.stageX + offset.x)+10;
		//ev.target.y = (ev.stageY + offset.y)+10;	
		//ev.target.shadow = new createjs.Shadow("#333399",20,20,10);
		update = true;
	}
	
	th.mouseUpHandler = function(ev)
	{
		
		if(ev.target.dropTarget) ev.target.dropTarget.clear();
		

		var isHit = false;
        var snapbackhittestcheck=0;
		
					
		for(var i = 0;i<dropArray.length;i++)
		{   
		   
		 	var dropPoint = dropArray[i].globalToLocal(mediaStage.mouseX,mediaStage.mouseY);
			// console.log("getObject under point "+ev.target.getObjectUnderPoint(dropPoint.x,dropPoint.y))
			if(mediaStage.mouseInBounds && ev.target.hitTest(dropPoint.x,dropPoint.y))
			{
				snapbackhittestcheck=1;
				//check existing drag object placed in the drop area
				if(dropArray[i].dragTarget != null)
				{	
					//snpbackcnt--;
					dropArray[i].dragTarget.dropTarget = null; 
					createjs.Tween.get(dropArray[i].dragTarget,{override:true}).to({x:parseFloat(dropArray[i].dragTarget.obj.x), y:parseFloat(dropArray[i].dragTarget.obj.y)}, 500,createjs.Ease.sineInOut).call(function(tw){						
						//tw.target.dropTarget = null;
						if(replicate)
						{								
						    //console.log(tw.target.obj)						
							$(tw.target.dragDiv).remove();
							th.removeChild(tw.target);
							dragArray.splice(dragArray.indexOf(tw.target),1);																			
						}
						update = true;
					});					
				}
				dropArray[i].dragTarget = ev.target;
				//console.log("this is dragObj"+dropArray[i].dragTarget );
				ev.target.dropTarget = dropArray[i];
				//droptarget=	i;	
				var dragid = dropArray[i].dragTarget.name.split("_")[3];
				if(obj.method!="SNAPBACK" || dropArray[i].obj.group==dragArray[dragid].obj.group )
		      	{	
				
				isHit = true;
				checkFirst=1;
				if(ev.target.dropTarget) ev.target.dropTarget.clear();
				
				if(dropArray[i].obj.group==dragArray[dragid].obj.group && checksnapback!=1 )
				{
				snpbackcnt++;
				}
		 
				createjs.Tween.get(ev.target,{override:true}).to({x:parseFloat(dropArray[i].obj.x), y:parseFloat(dropArray[i].obj.y)}, 500,createjs.Ease.sineInOut);
					
		     	}
				
				
				
			//console.log("snpbackcnt:::"+snpbackcnt);
			//console.log("dropArray.length::"+dropArray.length);
		
			}
		//console.log("this is snapbackhittestcheck::::"+snapbackhittestcheck);
				if(checksnapback==1 && snapbackcomplete==1 && snapbackhittestcheck!=1 )
				{
					
				snpbackcnt--;
				}
			
		if(snpbackcnt == dragArray.length && obj.method=="SNAPBACK")
			{
			 
				fbComp.visible=true;
				
				fbComp.setTitleId(fbObject.correctTitleId);
			    fbComp.setBodyId(fbObject.correctBodyId);
				snapbackcomplete=1;	
			}
		checksnapback=0
				
		}
		if(isHit == false)
		{	
			if(obj.method!="SNAPBACK" ){
				
		   // //console.log("ev.target.dropTarget::"+i);	
			ev.target.dropTarget = null;
			}
			
			createjs.Tween.get(ev.target,{override:true}).to({x:ev.target.obj.x, y:ev.target.obj.y}, 500,createjs.Ease.sineInOut).call(function(tw){
			
				if(replicate)
				{
					$(tw.target.dragDiv).remove();
					dragArray.splice(dragArray.indexOf(tw.target),1);
					th.removeChild(tw.target);
				}
				update = true;
			});		
		}		
		$(ev.target.dragDiv).css("z-index",0);	
		update = true;		
				
	}	
	
 
	th.buttonClickHandler = function(id)
	{	
		var i = 0;
		if(id == "check")
		{ 
			checkClicked = true;
			resetClicked =false;
			 
			tickContainer=new createjs.Container();
		    th.addChild(tickContainer);
			 
			var dragId;
			var cnt = 0;
			
			
			for(i = 0;i<dropArray.length;i++)
			{
			 
				
							
				if(dropArray[i].dragTarget && dropArray[i].obj.match!="null")
				{ 
					
					dragId = dropArray[i].dragTarget.name.split("_")[3];

				if(obj.matchType=="group"){
					
					
				
					if(dropArray[i].obj.group==dragArray[dragId].obj.group )
					{
						
						dropArray[i].showCorrect();						
						cnt++;
						
					}
					else
					{
						dropArray[i].showWrong();		
					}
				
				}
				else if(obj.matchType=="normal"){
					
					 if(dragId == dropArray[i].obj.match)
					{
					  
						dropArray[i].showCorrect();						
						cnt++;
					}
				}
				}
			else if(!(dropArray[i].dragTarget) && dropArray[i].obj.match=="null" && checkFirst==1){
	
					dropArray[i].showCorrect();						
						cnt++;
				}
				
			}	
 	
			if(cnt == dragArray.length)
			{
	 
				fbComp.setTitleId(fbObject.correctTitleId);
			    fbComp.setBodyId(fbObject.correctBodyId);	
				
			
				
			}
			else
			{	
					
				fbComp.setTitleId(fbObject.wrongTitleId);
			    fbComp.setBodyId(fbObject.wrongBodyId);				
			}
	  
			fbComp.visible=true; 
		}
		else if(id == "reset")
		{
 
			fbComp.visible=false;

			resetClicked = true;
			checkClicked = false;
			var dragObj;
			checkFirst=0;
				
				
			for(i = 0;i<dropArray.length;i++)
			{
				dropArray[i].clear();//clearing tick/
				dragObj = dropArray[i].dragTarget;
				
				
				
				if(dragObj)
				{
					dragObj.dropTarget = null;
					createjs.Tween.get(dragObj,{override:true}).to({x:dragObj.obj.x, y:dragObj.obj.y}, 500,createjs.Ease.sineInOut).call(function(tw){		 
						if(replicate)
						{							
							$(tw.target.dragDiv).remove();
							dragArray.splice(dragArray.indexOf(tw.target),1);
							th.removeChild(tw.target);
						}
						update = true;
					 
					});	
				 
					dropArray[i].dragTarget = null;
				}
				//
			}
			
			snpbackcnt=0;				
			clearCanvas(container);			
			shuffleHandler();
			
			loadDnd(container);
		}	
		
			  	
	}
	
	//Take object from xmlNode
	var dragCount = -1;
	var dropCount = -1;
	$(xmlNode).find('subelement').each(function(){
		
		var type = $(this).attr('type');
		var compObj = {};
		compObj.width = obj.compWidth;
		compObj.height = obj.compHeight;
		compObj.tickPosition=obj.tickPosition;
		compObj.dragAlpha=obj.dragAlpha;
		compObj.dragIcon=obj.dragIcon;
		compObj.dropIcon=obj.dropIcon;
		compObj.method=obj.method;
		compObj.dragAlign=obj.dragAlign?obj.dragAlign:"center";
		compObj.size=obj.size;
		compObj.matchType=obj.matchType?obj.matchType:"normal";
		compObj.textColor=obj.textColor?obj.textColor:"#393536"
		
			
		for(var i = 0;i<this.attributes.length;i++)
		{
			compObj[this.attributes[i].name] = this.attributes[i].value;			
		}
	
		var cjsElement;
		switch(type)
		{
			
			
			case "IMAGE":
					cjsElement = new ImageComp(compObj);	
				break;		
			case "TEXT":
					cjsElement = new TextComp(compObj);
				break;		
			case "DRAG":
					dragCount++;
					compObj.dragId = dragCount;
					compObj.subId = 0;
					compObj.div = obj.div;
					compObj.dndCount = dndCount;
					cjsElement = new DragContainer(compObj,th);
					dragArray.push(cjsElement);
				break;				
			case "DROP":
					dropCount++;
					compObj.dropId = dropCount;
					cjsElement = new DropContainer(compObj);
					dropArray.push(cjsElement);
				break;				
			case "CHECK":
					compObj.id = "check";
					compObj.callback = th.buttonClickHandler;
					cjsElement = new getCJSElement("BLUE_BUTTON",compObj);					
					break;				
			case "RESET":
					compObj.id = "reset";
					compObj.callback = th.buttonClickHandler;
					cjsElement = new getCJSElement("BLUE_BUTTON",compObj);
				break;
			case "FEEDBACK": 
		
		 
					 fbObject = compObj;
					 cjsElement = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:parseFloat(compObj.x),y:parseFloat(compObj.y),width:parseFloat(compObj.width),height:parseFloat(compObj.height),titleId:compObj.wrongTitleId,bodyId:compObj.wrongBodyId,div:"commonMediaText",visible:"0"});
					
					fbComp = cjsElement;
				
					
					
				break;				
			case "INSTRUCTION":					 
					 compObj.div = obj.div;
					 cjsElement = new DnDInstructionComp(compObj);
					
				break;						
			default:					
					cjsElement = new createjs.Shape();
				break;	
		}
		th.addChild(cjsElement);
		if(type == "DRAG") cjsElement.loaded();
	});
	
	
	
	update = true;
		
}).prototype = new createjs.Container();

shuffleHandler();
loadDnd(container);		
	
}); 

