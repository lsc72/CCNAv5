/*
	Activity Component Container
	
	*	Animation controller
	*	Syntax checker
	*	Drag'n'Drop 
	*	MCTable 
	
*/
var dndCount = 0;
var animDOMArray = [];
var animAssetsLoaded = false;
var animMainMovieClip = null;
var animSlideDivId = null;

(ActivityComp = function(obj,subElement){
	this.initialize();
		
	this.addChild(getActivityElement(obj,subElement));		
	update = true;
	
}).prototype = new createjs.Container();
/*
	Get Activity type
*/
function getActivityElement(obj,subElement)
{	
	var element;
	switch(obj.subType)
	{
		case "ANIMATION":
				//Animation controller
				element = new AnimationControl(obj);		
			break;
		case "SYNTAX":
				//Syntax checker
				element = new SyntaxComp(obj);
			break;	
		case "MCTABLE":
				//MCTable 
				element = new McTable(obj, subElement);
			break;		
		case "DRAGDROP":
				//Drag and Drop
				dndCount++;
				element = new DragDropComp(obj,subElement);
			break;		
		default:
				element = new createjs.Shape();
			break;
		
	}
	return element;
}
//Animation Controller Component


(DOMObject = function(obj){	
	this.initialize();

	obj.div = animSlideDivId ? animSlideDivId : "commonMediaText";
	var domElement;
	
	if(obj.type == "TEXT")
	{
		var divId = "";
		if(obj.compId) divId = obj.compId;
		if(obj.textId) divId = obj.textId;
		if(obj.id) divId = obj.id;		
		if(divId == "")
		{
			obj.id = "text_"+animDOMArray.length;
			divId = obj.id;
		}		
		domElement = getCJSElement("TEXT",obj);
		animDOMArray.push(divId);
	}
	else if(obj.type == "IMAGE")
	{		
		obj.image.id = "image_"+animDOMArray.length;
		obj.image.style.visibility = "hidden";
		$("#"+obj.div).append(obj.image);			
		domElement = new createjs.DOMElement(obj.image);	
		animDOMArray.push(obj.image.id);	
	}			
	
	this.addChild(domElement);
	//console.log("domIndex "+domIndex+" obj "+obj.src);	
}).prototype = new createjs.Container;


(AnimationControl = function(obj){
	this.initialize();
	
	var th = this;
	
	var totalFrames = obj.totalFrames ? parseInt(obj.totalFrames) : 1;
	var dragwidth = 237;	
	var contyPos = 2;
	var animationClip;
	
	var playbar_img;
	var ball_img_over;
	var ball_img;
	
	//containers
	var mainContainer;
	var play_cont;
	var paus_cont;	
	var playbar_cont;
	var ball_cont;
	var ppStatus;
	var dropRect;
	var slidestartPosX;
	var buttonArr=[];
	var drawRect;
	
	var currentFrame;
		
	animSlideDivId = obj.div;
		
	th.handleFileLoad = function(event) {
		switch (event.item.type){	
			case createjs.LoadQueue.IMAGE:
					images[event.item.id] = event.result;	
				break;	
			case createjs.LoadQueue.JAVASCRIPT:
					document.body.appendChild(event.result);
				break;	
		}
	}
	
	th.handleComplete = function() {
		$("#preloader").hide();	
		
		//changing the DOM z-index
		var cnt = $("#"+obj.div).children().length;				
		for(var i = 0;i<animDOMArray.length;i++)
		{
			$("#"+animDOMArray[i]).css("z-index",cnt);
			cnt--;
		}			
		
		animDOMArray = [];
		
		animMainMovieClip = new lib.Main();	
		//alert(animMainMovieClip[obj.movieClipId])	
		animationClip = animMainMovieClip[obj.movieClipId];
		animationClip.gotoAndStop(1)	
		th.addChild(animationClip);
		th.addChild(mainContainer);
		
		//start the ticker function
		createjs.Ticker.addListener(th);
		update = true;
	
	}
		
	function createButton (norm,over,callback)
	{		 
		var cont=new createjs.Container();
		var overImage = new createjs.Bitmap(over);		
		var normalImage = new createjs.Bitmap(norm);		
		cont.addChild(overImage,normalImage);
		cont.normal = normalImage;
		cont.over = overImage;
		overImage.visible = false;		
		cont.onMouseOver=function(ev)
		{
			
			ev.target.over.visible = true;
			ev.target.normal.visible = false;
			update = true;
		}
		cont.onMouseOut=function(ev){
			ev.target.over.visible = false;
			ev.target.normal.visible = true;
			update = true;
		}		
		cont.onClick = function(ev){
			if(callback) callback(ev);	
		}
		cont.cursor = "pointer";
		return cont;		
	}
	
	var manifest = [{src:"../../../common/images/AnimationController/button_bg.png", id:"button_bg"},
					{src:"../../../common/images/AnimationController/play.png", id:"play"},
					{src:"../../../common/images/AnimationController/play_over.png", id:"play_over"},
					{src:"../../../common/images/AnimationController/pause.png", id:"pause"},
					{src:"../../../common/images/AnimationController/pause_over.png", id:"pause_over"},
					{src:"../../../common/images/AnimationController/start.png", id:"start"},
					{src:"../../../common/images/AnimationController/start_over.png", id:"start_over"},
					{src:"../../../common/images/AnimationController/rewind.png", id:"rewind"},
					{src:"../../../common/images/AnimationController/rewind_over.png", id:"rewind_over"},
					{src:"../../../common/images/AnimationController/forward.png", id:"forward"},
					{src:"../../../common/images/AnimationController/forward_over.png", id:"forward_over"},
					{src:"../../../common/images/AnimationController/end.png", id:"end"},
					{src:"../../../common/images/AnimationController/end_over.png", id:"end_over"},
					{src:"../../../common/images/AnimationController/player_bar.png", id:"player_bar"},
					{src:"../../../common/images/AnimationController/ball.png", id:"ball"}					
					];
					
	loadImages(manifest,loadButtons);
		
	function loadButtons(imgs)
	{		
		//Load images
		if(animAssetsLoaded == false)
		{
			animAssetsLoaded = true;
			$("#preloader").show();	
			alert(pathh);
			var imageManifest = Animation();	
			imageManifest.splice(0,0,{src:pathh.substring(0, pathh.length-13)+"Animation.js", id:"Anim1"});
			
			var loader = new createjs.LoadQueue(false);
			loader.addEventListener("fileload", th.handleFileLoad);
			loader.addEventListener("complete", th.handleComplete);	
			loader.loadManifest(imageManifest);				
		}	
	
		var buttonCont,bitmap;
		var prevX;
				
		mainContainer=new createjs.Container();				
		mainContainer.x = obj.controlX ? parseFloat(obj.controlX) : 25;
		mainContainer.y = obj.controlY ? parseFloat(obj.controlY) : 360;
		mainContainer.scaleX = mainContainer.scaleY = 0.97;
		bitmap=new createjs.Bitmap(imgs["button_bg"]);
		bitmap.x=-18.5
		bitmap.y=-5
		mainContainer.addChild(bitmap);
		play_cont=createButton(imgs["play"],imgs["play_over"],playClickHandler);	
		play_cont.name="play";
		play_cont.y=contyPos
		
		paus_cont=createButton(imgs["pause"],imgs["pause_over"],playClickHandler);	
		paus_cont.name="pause"	
		paus_cont.y=contyPos
			
		buttonCont=new createjs.Container();
		buttonCont.addChild(paus_cont);
		buttonCont.addChild(play_cont);	
		mainContainer.addChild(buttonCont);
		
		buttonCont=createButton(imgs["start"],imgs["start_over"],playClickHandler);	
		buttonCont.name="start"
		buttonCont.x=40;
		prevX = buttonCont.x;
		buttonCont.y=contyPos;		
		mainContainer.addChild(buttonCont);	
		
		buttonCont=createButton(imgs["rewind"],imgs["rewind_over"],playClickHandler);	
		buttonCont.name="rewind"
		buttonCont.x = prevX + 33;
		prevX = buttonCont.x;
		buttonCont.y=contyPos;
		mainContainer.addChild(buttonCont)	
		
		buttonCont=createButton(imgs["forward"],imgs["forward_over"],playClickHandler);	
		buttonCont.name="forward"
		mainContainer.addChild(buttonCont);
		buttonCont.x = prevX + 33;
		prevX = buttonCont.x;
		buttonCont.y=contyPos;
			
		buttonCont=createButton(imgs["end"],imgs["end_over"],playClickHandler);	
		buttonCont.name="end"
		buttonCont.x = prevX + 33;
		prevX = buttonCont.x;
		buttonCont.y=contyPos;
		mainContainer.addChild(buttonCont);
			
		playbar_img=new createjs.Bitmap(imgs["player_bar"]);
		playbar_img.onClick=sliderClick		
		playbar_cont=new createjs.Container();
		playbar_cont.addChild(playbar_img);
		mainContainer.addChild(playbar_cont);
		playbar_cont.x = prevX + 40;
		playbar_cont.y+=contyPos;
		
		ball_img=new createjs.Bitmap(imgs["ball"]);
		ball_img_over=new createjs.Bitmap(imgs["ball"]);
		ball_cont=new createjs.Container();
		ball_cont.addChild(ball_img);		
		//ball_cont.cursor = "pointer";
		ball_cont.addEventListener("mousedown",scrollMove)
		playbar_cont.addChild(ball_cont);
		ball_cont.y=3;	
		ball_cont.x=playbar_img.x+4	
		slidestartPosX=ball_cont.x	
		playbar_cont.y=4;
				
		drawRect= new createjs.Rectangle(slidestartPosX,ball_cont.y,dragwidth,20);
		
		initPlaypause();
				
		update = true;
	}
	
	
			
    function playAnim(evt)
	{		
		ppStatus="Play";
		play_cont.visible=false;
		paus_cont.visible=true;	
		if(animationClip.currentFrame==totalFrames)
		{
			animationClip.gotoAndStop(1)	
		}		
	}
	function pauseAnim(evt)
	{
		ppStatus="Pause";
		play_cont.visible=true;
		paus_cont.visible=false;
		
	}
	function playOver(evt)
	{
		play_img.visible=false	
		play_over.visible=true		
		update = true;
	}
	function playOut(evt)
	{
		play_img.visible=true
		play_over.visible=false			
		update = true;
	}
	this.tick = function() 
    {		
 	    if(ppStatus=="Play")
		{			
			if(animationClip.currentFrame<totalFrames)	
			{
			animationClip.play()			
			ballboundryCheck(animationClip.currentFrame);	
			}	
			else
			{
				animationClip.stop()
				initPlaypause();
			}				
		}
		if(ppStatus=="Pause")
		{			
			animationClip.stop()
		}		
 	    update = true;
 	}
	//scrollmove function done here
	function scrollMove(evt)
	{
		
		evt.target.shadow=new createjs.Shadow("#ffffff", 0, 0, 7);		
		if(ppStatus!=null)
		{
			var tempStatus = ppStatus;
			ppStatus=null;
		}
		var target=evt.target;
		//var offset = {x:target.x-evt.stageX, y:target.y-evt.stageY};
   		var dropRect = new createjs.Rectangle(4, -1, 233, 3);
		var offset = {x:evt.target.x-evt.stageX, y:evt.target.y-evt.stageY};
	   evt.onMouseMove = function (ev) {
			if (target.x >= dropRect.x && target.x <= dropRect.x + dropRect.width) {            	
				target.x = ev.stageX + offset.x;
				if (target.x <= dropRect.x) {
					target.x = dropRect.x + 0.1;              
				}
				if (target.x >= dropRect.x + dropRect.width)
				{
					target.x = (dropRect.x + dropRect.width) - 0.1;             
				}			   
			}
			if (target.y >= dropRect.y && target.y <= dropRect.y + dropRect.height) {
				target.y = ev.stageY + offset.y;			   
			}
			update = true;
			animationClip.gotoAndStop(setAnimpos())
		}
		evt.onMouseUp = function (ev) 
		{		 
			ev.onMouseMove=null;
			ball_cont.shadow=null;
			//update = true;
			if (target.x <= dropRect.x) 
			{
				target.x = dropRect.x + 0.1;               
			}
			if (target.x >= dropRect.x + dropRect.width) 
			{
				target.x = (dropRect.x + dropRect.width) - 0.1;            
			}        
			if(tempStatus=="Play")
			{
				ppStatus=tempStatus
				tempStatus=null
				ev.target.dispatchEvent(play_cont,"onClick");
			}
			update = true;
			animationClip.gotoAndStop(setAnimpos())
		}        
		
	}
	function ballboundryCheck(val)
	{			
		var temp=(dragwidth-slidestartPosX);		
		temp/=totalFrames					
		temp*=val		
		ball_cont.x=slidestartPosX+temp	
	}
	function getPosition()
	{
		var temppos=ball_cont.x-slidestartPosX;
		var totalwidth=dragwidth-slidestartPosX;
		temppos/=totalwidth;	
		return temppos;
	}
	function setAnimpos()
	{
		currentFrame=getPosition()*totalFrames
		currentFrame=Math.round(currentFrame);		
		return currentFrame;
	}
	
	function playClickHandler(ev)
	{	
		switch(ev.target.name)
		{
		case "play":		
				playAnim();
			break;
		case  "pause":
				pauseAnim();
			break;
		case  "start":
				ball_cont.x=slidestartPosX;
				initPlaypause();
				animationClip.gotoAndStop(1)
			break;
		case "end":
				ball_cont.x=drawRect.width;
				initPlaypause()
				animationClip.gotoAndStop(totalFrames)
			break;
		case "forward":
		        var temp=animationClip.currentFrame+15
				if(temp>totalFrames)
				{
					temp=totalFrames
					}
					animationClip.gotoAndStop(temp)		
				ballboundryCheck(animationClip.currentFrame);					
			break;		
		case "rewind":
		  var temp=animationClip.currentFrame-15
				if(temp<0)
				{
				temp=0
				}	
				animationClip.gotoAndStop(temp)		
				ballboundryCheck(animationClip.currentFrame);				
			break;
		}
	}
	
	function initPlaypause()
	{
		play_cont.visible=true;
		paus_cont.visible=false;
		ppStatus="Pause";
		update = true;
	}
	function sliderClick(evt)
	{		
	var lastPt = evt.target.parent.globalToLocal(evt.stageX,evt.stageY);
	if(lastPt.x>drawRect.width)
	{
		ball_cont.x=ball_cont.x-(ball_cont.x-drawRect.width);
		 initPlaypause()		
	}
	else
	{	
	ball_cont.x=lastPt.x
	}
	animationClip.gotoAndStop(setAnimpos())
	}
		
}).prototype = new createjs.Container();


/*
	Syntax Checker Component Container
	//Example {x:10,y:10,compId:"ID_s3_SC"}
*/
(SyntaxComp = function (o) {
	this.initialize();
		
	var t = this;
	
	var a,mD,d,cC;
	
	o.width = o.width ? parseFloat(o.width) : 300;
	o.height = o.height ? parseFloat(o.height) : 300;
	o.div = o.div ? o.div : "commonMediaText";
		
	//background design
	var b = new createjs.Shape();
	b.graphics.beginFill("#33A7A4").drawRoundRect(0,0,o.width,o.height,10);
	t.addChild(b);
	b = new createjs.Shape();
	b.graphics.beginFill("#666263").drawRect(0,15,o.width,o.height-28);
	t.addChild(b);
	
	//Router output area
	b = getCJSElement("ROUTER",{x:5,y:20,width:o.width-10,height:o.height-60});
	t.addChild(b);
	
	o.size = $(mediaXML).find("component#"+o.compId).attr("fontSize");
	
	//DOM elements
	a = document.createElement("div");			
	a.style.cssText = "top:0px;left:0px;padding-left:2px;visibility:hidden;overflow:auto;color:#000;white-space:pre-wrap;font-size:"+o.size+"px;width:"+(o.width-30)+"px;height:"+(o.height-78)+"px;";	
	a.id = o.compId;
	
	$("#"+o.div).append(a);
	
	t.init = function()
	{
		mD = new createjs.DOMElement(a);
		mD.x = 23;
		mD.y = 28;
		t.addChild(mD);
		d = $(mediaXML).find("component#"+o.compId);
		if(d.find("existingcommands").length != 0)
		{
			$("#"+o.compId).append("<div>"+d.find("existingcommands").text()+"</div>");		
		}			
		cC = 0;		
		t.cd();
		update = true;
	}
	t.ke = function(e)
	{		
		if(e.keyCode == 13)
		{				
			if(($("#"+o.compId+"_prompt_"+cC).val().replace(/\s+$/,"")) == "")
			{
				t.cl();
				$("#"+o.compId+"_prompt_"+cC).attr("id","");
				t.cd();								
			}
			else if(($("#"+o.compId+"_prompt_"+cC).val().replace(/\s+$/,"")) == ($(d.find("command")[cC]).find("correctresponse").text()))
			{		
				t.cl();		
				t.sm();
			}
			else
			{
				$("#"+o.compId).append("<div>"+d.find("feedback").text()+"</div><br/><br/>");
				t.cl();
				$("#"+o.compId+"_prompt_"+cC).attr("id","");
				t.cd();
			}
		}
	}
	
	t.sm = function()
	{		
		if(cC < d.find("command").length-1)
		{	
			var correctResponseText = $(d.find("command")[cC]).find("correctresponse").text();
			if(correctResponseText.substr(0,1) == " ") correctResponseText = correctResponseText.substr(1,correctResponseText.length);	
				
			$("#"+o.compId+"_prompt_"+cC).val(correctResponseText);
			t.rt();				
			cC++;
			t.cd();										
		}
	}
	
	t.cd = function()
	{
		var promptText = $(d.find("command")[cC]).attr("prompt");
		//if($(d.find("command")[cC]).attr("prompt") == "") return;
		
		if((promptText == "") || (promptText == undefined)) return;
			
		if(promptText.substr(promptText.length-1,promptText.length) != " "){
			 promptText = promptText+" ";
		}
		if (createjs.Touch.isSupported())
		{
			promptText = promptText.substr(0,promptText.length-1);		
		}	
			
		$("#"+o.compId).append("<div style='font-family:Courier New;'><span id="+o.compId+"_syn_"+cC+" style='color:#000;'>"+promptText+"</span><input id="+o.compId+"_prompt_"+cC+" type='' style='background-color:transparent;border:none;color:#000;font-size:"+o.size+"px;'></div>");
		$("#"+o.compId+"_prompt_"+cC).focus();
		$("#"+o.compId+"_prompt_"+cC).css("width",(o.width-55)-$("#"+o.compId+"_syn_"+cC).width());
		$("#"+o.compId+"_prompt_"+cC).keydown(function(e) {t.ke(e);});
	}	
	
	t.rt = function()
	{
		$("#"+o.compId).append("<div>"+$(d.find("command")[cC]).find("deviceresponse").text()+"</div>");
		$("#"+o.compId).append("<div>"+$(d.find("command")[cC]).find("instruction").text()+"</div>");
	}
	
	t.cb = function(p1)
	{
		switch(p1)
		{
			case "reset":
					$("#"+o.compId).children().remove();
					t.init();
			 	break;	
				
			case "showme":
					t.cl();
					t.sm();
			 	break;	
				
			case "showall":
					for(var i = cC;i<d.find("command").length-1;i++)
					{						
						t.cl();
						t.sm();				
						t.cl();				
					}					
			 	break;	
		}
	}
	t.cl = function()
	{
		$("#"+o.compId+"_prompt_"+cC).val($("#"+o.compId+"_prompt_"+cC).val());
		$("#"+o.compId+"_prompt_"+cC).prop('disabled', true);
		$("#"+o.compId+"_prompt_"+cC).css("color","#000");
		$("#"+o.compId+"_prompt_"+cC).focusout();
		$("#"+o.compId+"_prompt_"+cC).attr("readonly",true);
	}
	
	var btn;
	btn = getCJSElement("BLUE_BUTTON",{x:18,y:o.height-37,width:126.6,height:20,size:12,id:"reset",div:o.div,compId:o.resetId,callback:t.cb});
	t.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:150,y:o.height-37,width:126.6,height:20,size:12,id:"showme",div:o.div,compId:o.showMeId,callback:t.cb});
	t.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:282,y:o.height-37,width:126.6,height:20,size:12,id:"showall",div:o.div,compId:o.showAllId,callback:t.cb});
	t.addChild(btn);
	
	t.init();
	
	t.x = o.x ? parseFloat(o.x) : 0;
	t.y = o.y ? parseFloat(o.y) : 0;
	
}).prototype = new createjs.Container();

/* 			Drag'n'Drop Component			*/

//Drop container area
(DropContainer = function(compObj){
	this.initialize();
	
	var t = this;
	
	var bg = new createjs.Shape();
	bg.graphics.beginLinearGradientFill(["#cecccd","#ffffff"], [0, 1], 0,0,0,compObj.height).beginLinearGradientStroke(["#747273","#d1cfd0"], [0, 1], 0, 0, 0, compObj.height).setStrokeStyle(2).drawRoundRect(0,0,compObj.width,compObj.height,3);
	bg.alpha= compObj.dragAlpha ? parseFloat(compObj.dragAlpha) : 0.3;
	t.addChild(bg);
	
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
	dragDiv.id = "dnd_"+dndCount+"_drag_"+compObj.dragId+"_"+compObj.subId;
	t.name = dragDiv.id;
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
	var label = getCJSElement("TEXT",{x:-9,y:0,width:compObj.width,div:dragDiv.id,align:"center",compId:compObj.compId,expand:"up+down"});
	label.y = (compObj.height-$("#"+compObj.compId).height())/2;
	$("#"+compObj.compId).attr("id","");
	dragStage.addChild(label);
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
	var bg = new createjs.Shape();
	bg.graphics.beginLinearGradientFill(["#fcfdff","#D4ecf8"], [0, 1], 0,0,0,compObj.height).beginLinearGradientStroke(["#038bd1","#37baf3"], [0, 1], 0, 0, 0, compObj.height).setStrokeStyle(2).drawRoundRect(3,3,compObj.width,compObj.height,3);
	bgCont.addChild(bg);
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
	var droptarget
	
	var fbObject;
	
	obj.compWidth = obj.compWidth ? parseFloat(obj.compWidth) : 100;
	obj.compHeight = obj.compHeight ? parseFloat(obj.compHeight) : 20;
	obj.tickPosition=obj.tickPosition? obj.tickPosition:"left";
	obj.dragAlpha=obj.dragAlpha?obj.dragAlpha:"1";
		
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
		if(ev.target.dropTarget )
		{
			
			ev.target.dropTarget.dragTarget = null;
			ev.target.dropTarget = null;
		}
		//Set highest z-index for the child
		$(ev.target.dragDiv).css("z-index",$("#"+obj.div).children().length);
		//Get offset 
		offset = {x:ev.target.x-ev.stageX, y:ev.target.y-ev.stageY};			
		ev.addEventListener("mousemove", th.mouseMoveHandler);
		ev.addEventListener("mouseup", th.mouseUpHandler);
		
		update = true;
	}
	th.mouseMoveHandler = function(ev)
	{		
		
		ev.target.x = ev.stageX + offset.x;
		ev.target.y = ev.stageY + offset.y;	
		//ev.target.shadow = new createjs.Shadow("#333399",20,20,10);
		update = true;
	}
	
	th.mouseUpHandler = function(ev)
	{
		//To reset the drop items after check button clicked
		//if(checkClicked) th.buttonClickHandler("reset");
	//th.buttonClickHandler("reset");
	
		//console.log("mouseUpHandler "+ev.target.dropTarget)
		
		
		var isHit = false;
			
		for(var i = 0;i<dropArray.length;i++)
		{
			var dropPoint = dropArray[i].globalToLocal(mediaStage.mouseX,mediaStage.mouseY);
			if(mediaStage.mouseInBounds && ev.target.hitTest(dropPoint.x,dropPoint.y))
			{
				//check existing drag object placed in the drop area
				if(dropArray[i].dragTarget != null)
				{	
					createjs.Tween.get(dropArray[i].dragTarget,{override:true}).to({x:parseFloat(dropArray[i].dragTarget.obj.x), y:parseFloat(dropArray[i].dragTarget.obj.y)}, 500,createjs.Ease.sineInOut).call(function(tw){						
						tw.target.dropTarget = null;
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
				ev.target.dropTarget = dropArray[i];
				droptarget=	i;				
				isHit = true;
				createjs.Tween.get(ev.target,{override:true}).to({x:parseFloat(dropArray[i].obj.x), y:parseFloat(dropArray[i].obj.y)}, 500,createjs.Ease.sineInOut);					
			}
		}
		if(isHit == false)
		{	
			
		   // console.log("ev.target.dropTarget::"+i);	
			ev.target.dropTarget = null;
			
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
		
			if(checkClicked && resetClicked){
				if(checkClicked) th.buttonClickHandler("reset");
			}
			else if(checkClicked){
			fbComp.visible=false;
			//dropId = ev.target.name.split("_")[3];
			//dropId = ev.target.dropTarget;
			//console.log("dropID::::"+droptarget);
			//dropArray[droptarget].clear();
			//dropArray[droptarget].clear();
			
		}
			
		
		
		update = true;		
	}	
	//check resit button handler
	th.buttonClickHandler = function(id)
	{	
		var i = 0;
		if(id == "check")
		{
			checkClicked = true;
			//console.log("after "+dragArray);
			tickContainer=new createjs.Container();
		    th.addChild(tickContainer);
			//validation code goes here
			var dragId;
			var cnt = 0;
			
			
			for(i = 0;i<dropArray.length;i++)
			{
				dropArray[i].showWrong();
				
				if(dropArray[i].dragTarget && dropArray[i].obj.match!="null")
				{
					console.log("coming if::::");	
					
					
					dragId = dropArray[i].dragTarget.name.split("_")[3];
					
					if(dragId == dropArray[i].obj.match )
					{ 
						dropArray[i].showCorrect();						
						cnt++;
					}
				}
				else if(!(dropArray[i].dragTarget) && dropArray[i].obj.match=="null"){
					console.log("coming if else::::");	
					dropArray[i].showCorrect();						
						cnt++;
				}
				
			}			
			if(cnt == dropArray.length)
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
			resetClicked = true;
			checkClicked = false;
			var dragObj;
			for(i = 0;i<dropArray.length;i++)
			{
				dropArray[i].clear();
				dragObj = dropArray[i].dragTarget;
				if(dragObj)
				{
					createjs.Tween.get(dragObj,{override:true}).to({x:dragObj.obj.x, y:dragObj.obj.y}, 500,createjs.Ease.sineInOut).call(function(tw){						
						tw.dropTarget = null;
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
			fbComp.visible=false;	
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
		
		$.each(this.attributes,function(i, at)
		{
			compObj[at.name] = at.value;				
		});	
		
		var cjsElement;
		switch(type)
		{
			case "DRAG":
					dragCount++;
					compObj.dragId = dragCount;
					compObj.subId = 0;
					compObj.div = obj.div;
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
					 cjsElement = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:parseFloat(compObj.x),y:parseFloat(compObj.y),width:parseFloat(compObj.width),height:parseFloat(compObj.height),titleId:compObj.wrongTitleId,bodyId:compObj.wrongBodyId,visible:"0"});
					fbComp = cjsElement;
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


/* MC TABLE Activity*/
/********
<element type="ACTIVITY" subType="CHECKBOX" compId="ID_SC" x="2" y="2" width="580" height="367"/>
************/

(McTable = function (o, xmlNode) {
	
	this.initialize();
	
	var t = this;
	var checkDone = false;
	var fbComp;
	var fbObject;
	//var a,mD,d,cC;
	
	o.width = o.width ? parseFloat(o.width) : 300;
	o.height = o.height ? parseFloat(o.height) : 300;
	
	var tableRows = getMediaText("txt_numrows"); // no of rows
	var tableCols = getMediaText("txt_numcols"); // no of cols
	
	o.compId = "mc_table";

		
	$("#"+o.div).append('<from><table id="'+o.compId+'"  border="0" cellpadding="0" cellspacing="0" width="'+o.width+'px" style="font-size:11px; color:#393536;" ></table></from>');
	
	$("#"+o.compId).append('<thead><tr id="tableHead"><td>&nbsp;</td></tr></thead>');

	
	var tableHead = [];
	
	for(var k=1;k<=tableCols;k++){
				
		var colsTitle = getMediaText("txt_col"+k); // cols title fatch.
		
		var styleHead = "";
		var styleHeadLast = "border-right:2px solid #fff;";	
		var styleHeadCur = "";	
			
		if(k == tableCols){styleHead = "border-radius: 0px 7px 0px 0px; border:none;"; styleHeadLast=""}
		else if(k == 1){styleHead = "border-radius: 7px 0px 0px 0px; border-right:2px solid #fff;";}
		else{styleHead= "border-right:2px solid #fff;";}
			
		tableHead = '<td align="center" style="background-color:#67bdbc;color:#ffffff;font-size:12px; height:20px; padding:0 10px 0 10px;'+styleHead+'"><span>'+colsTitle+'</span></td>';	
		$('#tableHead').append(tableHead);
		
		}
	
	
	var answerArray = [];
	var answerHit = [];
	
	for(i=1;i<=tableRows;i++){
			
			
		var qun = getMediaText("txt_q"+i); //queastion
		answerArray[i] = i+'_'+parseInt(getMediaText("txt_a"+i));//answer
		
		var styleRows = "";
		var styleRowsAns = "";
		
		if(i==1){styleRows="border-top:2px solid #67bdbc;"}
		else if(i==tableRows){styleRows="border-bottom:2px solid #67bdbc;";}
		else{styleRows="";}
		
		if(i==1){styleRowsAns="border-top-width:1px;"}
		else if(i==tableRows){styleRowsAns="border-bottom:2px solid #67bdbc;";}
		else{styleRowsAns="";}
		
		
		
		tableContent = '<tr id="qun'+i+'"><td align="left" valign="top" bgcolor="#d2ebea" style="height:30px;padding:2px;border-right:2px solid #FFF; border-top:2px solid #FFF;border-left:2px solid #67bdbc;'+styleRows+'">'+qun+'</td></tr>';
		
		$("#"+o.compId).append(tableContent);
		
		
		
		//answer col		
		for(var j=1;j<=tableCols;j++){
				//alert(ans);
				
				tableAns = '<td id="ans'+i+'" class="hit'+i+'_'+j+'" value="'+i+'_'+j+'" qchk="0" align="center" valign="middle" bgcolor="#d2ebea" style="cursor:pointer;border-right:2px solid #FFF;border-top:2px solid #FFF;'+styleRowsAns+'">&nbsp;</td>';
					
				$("#qun"+i).append(tableAns);
					
				$('.hit'+i+'_'+j).click( function(){	
					
					if(checkDone){
						t.actionReset(false);
						checkDone = false;
					}
					var hitElm = $(this).attr('id');
						
					var qCheck = $(this).attr("qchk");
						
					//alert($("#"+this.id).children().length+" "+$(this).attr("class"));
						
					var chLen = $("#"+this.id).children().length;
					var n = this.id.charAt(3);
						
					for(var k=1;k<=tableCols;k++){
							var tt= $('.hit'+n+'_'+k);
							tt.attr("qchk","0");
							tt.empty();
					}
					//alert(qCheck);
					if(qCheck == 0)
					{
						$(this).empty();
						$(this).attr('qchk','1');
						$(this).append('<img id="img'+$(this).attr("value")+'" src="../../../common/images/on_dot.png" height="17" width="17"/>');
					}else{
						$(this).empty();
						$(this).attr('qchk','0');
					}
					var chekCol = $(this).attr('qchk');
					if(chekCol == 1)
					{
						answerHit.push($(this).attr('value'));
					}
					
			});
				
				
		}
	}
	
	
	t.actionCheck = function (){	
		var ansCount = 0;
		checkDone = true;
		for(i=1;i<=tableRows;i++){
			for(var k=1;k<=tableCols;k++){
					var tt= $('.hit'+i+'_'+k);
					if(tt.attr("qchk") == 1)
					{
						if(tt.attr("value") == answerArray[i])
						{
							ansCount++;
							$('#img'+i+'_'+k).attr('src','../../../common/images/tick.png');
							
							
						}else{
							$('#img'+i+'_'+k).attr('src','../../../common/images/wrong.png');
							
						}
					}
			}
		}		
		//alert(answerArray.length+"::"+ansCount);
		if(ansCount == (answerArray.length - 1)){
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
	
	t.actionReset = function (t){
		checkDone = false;
		if(t)
		fbComp.visible=false;
		
		for(i=1;i<=tableRows;i++){
			for(var k=1;k<=tableCols;k++){
					var tt= $('.hit'+i+'_'+k);
					tt.attr("qchk","0");
					tt.empty();
			}
		}
	}
	
	//Display objects from xmlNode
	
	$(xmlNode).find('subelement').each(function(){
		var type = $(this).attr('type');
		var compObj = {};
		compObj.width = o.compWidth;
		compObj.height = o.compHeight;
		
		$.each(this.attributes,function(i, at)
		{
			compObj[at.name] = at.value;				
		});	
		
		var cjsElement;
		switch(type)
		{	
			case "CHECK":
					compObj.id = "check";
					compObj.callback = t.actionCheck;
					cjsElement = new getCJSElement("BLUE_BUTTON",compObj);					
					break;				
			case "RESET":
					compObj.id = "reset";
					compObj.callback = t.actionReset;
					cjsElement = new getCJSElement("BLUE_BUTTON",compObj);
				break;
			case "FEEDBACK":
					 fbObject = compObj;
					 cjsElement = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:parseFloat(compObj.x),y:parseFloat(compObj.y),width:parseFloat(compObj.width),height:parseFloat(compObj.height),titleId:compObj.wrongTitleId,bodyId:compObj.wrongBodyId,visible:"0"});
					fbComp = cjsElement;
				break;					
			default:					
					cjsElement = new createjs.Shape();
				break;	
		}
		t.addChild(cjsElement);
		
		
	});
	
	
	
	update = true;
	
	//dom element
	var dElmt = new createjs.DOMElement(document.getElementById(o.compId));
	t.addChild(dElmt);
	
	t.x = o.x ? parseFloat(o.x) : 0;
	t.y = o.y ? parseFloat(o.y) : 0;
	
}).prototype = new createjs.Container();



