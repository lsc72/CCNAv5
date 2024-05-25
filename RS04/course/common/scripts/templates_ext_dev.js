/*
	Activity Component Container
	
	*	Animation controller
	*	Syntax checker
	*	Drag'n'Drop 
	*	MCTable 
	
*/
var dndCount = 0;
var animDOMCount = 0;
var animAssetsLoaded = false;
var animMainMovieClip = null;
var  currentTool

var globalAnim = {
	slides:0,//later remove it
	animeArray:[],
	animSlide:[]
	};


var animDOMArray = [];

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
		case "ANIMATION_TWEENMAX":  
		//globalAnim.animSlide[globalAnim.slides] = AnimationComp; //later remove it
		//globalAnim.slides++;//later remove it

		var anim = new AnimationComp();
		globalAnim.animSlide.push(anim); 
		anim = null;

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

//Animation Controller Component

(DOMObject = function(obj){	
	this.initialize();

	obj.div = "animationContent";//animSlideDivId ? animSlideDivId : "commonMediaText";
	var domElement;
	switch(obj.type)
	{
		case "TEXT":
		
				var divId = "";
				if(obj.compId) divId = obj.compId;
				if(obj.textId) divId = obj.textId;
				if(obj.id) divId = obj.id;		
				if(divId == "")
				{
					obj.id = "text_"+animDOMCount;
					divId = obj.id;
				}		
				domElement = getCJSElement("TEXT",obj);
				animDOMCount++;
				
		break;
		
		case "IMAGE":
				var src = obj.image.src;
				var img = document.createElement('img');
				img.id = "image_"+animDOMCount;
				img.style.visibility = "hidden";
				img.src = src.split("media/")[1];	
				$("#"+obj.div).append(img);			
				domElement = new createjs.DOMElement(img);	
				animDOMCount++;		
		break;
		
		case "BUBBLE":
		
				domElement = getCJSElement("BUBBLE",obj);
				
		break;
		
		case "ROUTER":
		
			   domElement = getCJSElement("ROUTER",obj); 
			   
		break;
		
		case "TEXTBOX":
		
			  domElement = getCJSElement("TEXTBOX",obj);
			  
		break;	
		
	}
	
	//console.log("animSlideDivId "+animSlideDivId);	
	this.addChild(domElement);
	//console.log("domIndex "+domIndex+" obj "+obj.src);	
}).prototype = new createjs.Container;


(AnimationControl = function(obj){
	this.initialize();
	
	var th = this;
	th.name = "AnimationControl";
	var waitCount=0;
	var totalFrames = obj.totalFrames ? parseInt(obj.totalFrames-1) : 1;
	var waitFrame = obj.waitFrame ? obj.waitFrame : "";
	var waitTime = obj.waitTime ? obj.waitTime : "";
	
	waitFrame = waitFrame.split(',');
	waitTime = waitTime.split(',');

	var waitObj= {};
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
		
	th.div = obj.div;
	
	function setWaitingObj(){
		for(var i=0; i<waitFrame.length; i++){
			waitObj[waitFrame[i]] = {"time":waitTime[i],"done":false};
		}
	}
	
	//if(templateType=="MBAR" && th.div != "slide_1") $("#preloader").show();
	
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
		
	function startAnimationClip()
	{
		
		if(!animMainMovieClip) animMainMovieClip = new lib.Main();			
		//changing the DOM z-index
		$("#animationContent").css("z-index",$("#commonMediaText").children().length);				
		var domArray = $("#animationContent").find("*");
		var cnt = domArray.length;	
		for(var i = 0;i<domArray.length;i++)
		{
			$(domArray[i]).css("z-index",cnt);
			cnt--;
		}		
		//console.log("animMainMovieClip:::"+animMainMovieClip.getNumChildren() )		
		//Default for single slide
		animationClip = animMainMovieClip[obj.movieClipId];
		//For MBAR slide
		if(templateType=="MBAR") animationClip = animMainMovieClip[th.div.replace("_","0")][obj.movieClipId];				
		animationClip.gotoAndStop(1)	
		th.addChild(animationClip);
		th.addChild(mainContainer);		
		//start the ticker function
		createjs.Ticker.addListener(th);
		update = true;
	}
	
	function createButton (norm,over,callback,toolTip,xpos)
	{		 
		var cont=new createjs.Container();
		var overImage = new createjs.Bitmap(over);		
		var normalImage = new createjs.Bitmap(norm);		
		cont.addChild(overImage,normalImage,toolTip);
		cont.normal = normalImage;
		cont.tool=toolTip
		cont.tool.visible=false			
		cont.over = overImage;
		overImage.visible = false;			
		cont.onMouseOver=function(ev)
		{			
			ev.target.over.visible = true;
			ev.target.normal.visible = false;
			currentTool=ev.target
			$("#"+currentTool.tool.div).css("z-index",$("#animationContent").children().length);
			canvas.addEventListener('mousemove', handleTick)
			update = true;
		}
		cont.onMouseOut=function(ev){
			ev.target.tool.visible =ev.target.over.visible = false;
			ev.target.normal.visible = true;
			canvas.removeEventListener('mousemove', handleTick) 				
			update = true;
		}		
		cont.onClick = function(ev){
			if(callback) callback(ev);	
		}
		cont.cursor = "pointer";
		return cont;		
	}
function handleTick(evt) {
		var myx=currentTool.globalToLocal(mediaStage.mouseX,mediaStage.mouseY);
		currentTool.tool.visible=true
		currentTool.tool.x = myx.x + 8	
		currentTool.tool.y = myx.y - $("#"+currentTool.tool.div).height() - 15;
		update = true;
   }	
			
	th.loadButtons = function()
	{	
		var imgs = images;
		var buttonCont,bitmap;
		var prevX;
				
		mainContainer=new createjs.Container();		
		mainContainer.y = obj.controlY ? parseFloat(obj.controlY) : 360;
		
		mainContainer.x = obj.controlX ? parseFloat(obj.controlX) : 25
		mainContainer.scaleX = mainContainer.scaleY = 0.97;
		
		if(templateType=="MBAR") mainContainer.scaleX = mainContainer.scaleY = 0.9;
		
		bitmap=new createjs.Bitmap(imgs["button_bg"]);
		bitmap.x=-18.5
		bitmap.y=-5
		mainContainer.addChild(bitmap);
		var toolTip	
		toolTip=new DOMObject({type:"TEXT",compId:"play",class:"animTooltip",expand:"up",align:"center"});	
		toolTip.div = "play";
		play_cont=createButton(imgs["play"],imgs["play_over"],playClickHandler,toolTip);
		play_cont.name="play";
		play_cont.y=contyPos		
		
		toolTip=new DOMObject({type:"TEXT",compId:"pause",class:"animTooltip",expand:"up",align:"center"});
		toolTip.div = "pause";
		paus_cont=createButton(imgs["pause"],imgs["pause_over"],playClickHandler,toolTip);		
		paus_cont.name="pause"	
		paus_cont.y=contyPos
			
		buttonCont=new createjs.Container();
		buttonCont.addChild(paus_cont);
		buttonCont.addChild(play_cont);	
		mainContainer.addChild(buttonCont);
		
		toolTip=new DOMObject({type:"TEXT",compId:"start",class:"animTooltip",expand:"up",align:"center"});
		toolTip.div = "start";
		buttonCont=createButton(imgs["start"],imgs["start_over"],playClickHandler,toolTip);		
		buttonCont.name="start"
		buttonCont.x=40;
		prevX = buttonCont.x;
		buttonCont.y=contyPos;
		mainContainer.addChild(buttonCont);	

		toolTip=new DOMObject({type:"TEXT",compId:"rewind",class:"animTooltip",expand:"up",align:"center"});
		toolTip.div = "rewind";
		buttonCont=createButton(imgs["rewind"],imgs["rewind_over"],playClickHandler,toolTip);				
		buttonCont.name="rewind"
		buttonCont.x = prevX + 33;
		prevX = buttonCont.x;
		buttonCont.y=contyPos;
		mainContainer.addChild(buttonCont)

		toolTip=new DOMObject({type:"TEXT",compId:"fforward",class:"animTooltip",expand:"up",align:"center"});
		toolTip.div = "fforward";
		buttonCont=createButton(imgs["forward"],imgs["forward_over"],playClickHandler,toolTip);
		buttonCont.name="forward"
		mainContainer.addChild(buttonCont);
		buttonCont.x = prevX + 33;
		prevX = buttonCont.x;
		buttonCont.y=contyPos;
	
		toolTip=new DOMObject({type:"TEXT",compId:"end",class:"animTooltip",expand:"up",align:"center"});
		toolTip.div = "end";	
		buttonCont=createButton(imgs["end"],imgs["end_over"],playClickHandler,toolTip);			
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
		
		startAnimationClip()
		
		initPlaypause();
		
		$("#preloader").hide();
		
		update = true;
	}
	
	function loadAnimAssets()
	{		
		if(animAssetsLoaded == false)
		{
			$("#commonMediaText").append('<div id="animationContent"></div>');
			animAssetsLoaded = true;
		}
		var imageManifest = Animation();	
		imageManifest.splice(0,0,{src:"Animation.js", id:"Anim1"});
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
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", th.handleFileLoad);
		loader.addEventListener("complete", th.loadButtons);	
		loader.loadManifest(imageManifest.concat(manifest));	
		
		$("#preloader").show();					
				
	}
	
	loadAnimAssets();
	setWaitingObj();	
				
	function playAnim(evt)
	{		
		ppStatus="Play";
		play_cont.visible=false;
		paus_cont.visible=true;	
		if(animationClip.currentFrame==totalFrames)
		{
			animationClip.gotoAndStop(1);
			setWaitingObj();
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
	
		//-----
		if(waitObj[animationClip.currentFrame]){
		   //console.log(waitObj[animationClip.currentFrame]["time"]);
			if(waitObj[animationClip.currentFrame]["time"] > 10){
				if(!waitObj[animationClip.currentFrame]["done"]){
					pauseAnim();
					setTimeout(playAnim, waitObj[animationClip.currentFrame]["time"]);
					waitObj[animationClip.currentFrame]["done"] = true;
				}
			}
		}
		
		if(ppStatus=="Play")
		{
			//console.log("animationClip.currentFrame "+animationClip.currentFrame+" totalFrames "+totalFrames)			
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
			setWaitingObj();
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
		currentFrame=getPosition()*(totalFrames)
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
				animationClip.gotoAndStop(1);
				setWaitingObj();
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
				setWaitingObj();
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
	a.setAttribute("class","syntaxChecker");
	//a.setAttribute("spellcheck","false");	
	a.style.cssText = "top:0px;left:0px;padding-left:2px;visibility:hidden;overflow:auto;color:#000;white-space:pre-wrap;font-size:"+o.size+"px;width:"+(o.width-30)+"px;height:"+(o.height-81)+"px;";	
	
	
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
			$("#"+o.compId).append('<div  style="line-height:12px;">'+d.find("existingcommands").text()+"</div>");		
		}			
		cC = 0;		
		t.cd();
		update = true;
	}
	var ctrlDown = false;
	$("#"+o.compId).click(function(ev){

		$("#"+o.compId+"_prompt_"+cC).focus();
	});
	t.ke = function(e)
	{		
		if(e.keyCode == 13)
		{		
			t.clearDuplicateSpan();		
			if(($("#"+o.compId+"_prompt_"+cC).text().replace(/\s+$/,"")) == "")
			{
				t.cl();
				$("#"+o.compId+"_prompt_"+cC).attr("id","");
				$("#"+o.compId+"_sync_"+cC).attr("id","");
				t.cd();
				t.pc();									
			}
			else if(($("#"+o.compId+"_prompt_"+cC).text().replace(/\s+$/,"")) == ($(d.find("command")[cC]).find("correctresponse").text()))
			{		
				t.cl();		
				t.sm();
				t.pc();	
			}
			else
			{
				$("#"+o.compId).append("<div>"+d.find("feedback").text()+"</div><br/><br/>");
				t.cl();
				$("#"+o.compId+"_prompt_"+cC).attr("id","");
				t.cd();
				t.pc();	
			}
		}
		
	}
	
	t.sm = function()
	{		
		if(cC < d.find("command").length-1)
		{	
			var correctResponseText = $(d.find("command")[cC]).find("correctresponse").text();
			if(correctResponseText.substr(0,1) == " ") correctResponseText = correctResponseText.substr(1,correctResponseText.length);	
			t.clearDuplicateSpan();
			$("#"+o.compId+"_prompt_"+cC).text(correctResponseText);
			t.rt();				
			cC++;
			t.cd();	
											
		}
	}
	
	t.cd = function()
	{
		var promptText = $(d.find("command")[cC]).attr("prompt");
		
		if((promptText == "") || (promptText == undefined)) return;
			
		if(promptText.substr(promptText.length-1,promptText.length) != " "){
			 promptText = promptText+"&nbsp;";
		}
		if (createjs.Touch.isSupported())
		{
			promptText = promptText.substr(0,promptText.length-1);		
		}	
		
		 var is_safari = navigator.userAgent.indexOf("Safari") > -1;

		if(is_safari == true){
		$("#"+o.compId).append('<div style="font-family:Courier New; line-height:12px; padding:3px 0px;"><span id='+o.compId+'_syn_'+cC+' class="promptText">'+promptText+'</span><span contenteditable="false" autocorrect="off" autocapitalize="off" id='+o.compId+'_prompt_'+cC+' class="cmd_box_'+cC+'" style="font-family:Courier New; font-size:'+o.size+'px; height:13px !important; vertical-align: top; outline:none; display:inline; padding-right:10px;"></span></div>');
		$("#"+o.compId+"_prompt_"+cC).css("width",(o.width-55)-$("#"+o.compId+"_syn_"+cC).width());
		
		setTimeout(t.addEnterEvent, 50);
		}else {
		$("#"+o.compId).append('<div style="font-family:Courier New; line-height:12px; padding:3px 0px;"><span id='+o.compId+'_syn_'+cC+' class="promptText">'+promptText+'</span><span contenteditable="true" autocorrect="off" autocapitalize="off" id='+o.compId+'_prompt_'+cC+' class="cmd_box_'+cC+'" style="font-family:Courier New; font-size:'+o.size+'px; height:13px !important; vertical-align: top; outline:none; display:inline; padding-right:10px;"></span></div>');
		$("#"+o.compId+"_prompt_"+cC).focus();
		$("#"+o.compId+"_prompt_"+cC).css("width",(o.width-55)-$("#"+o.compId+"_syn_"+cC).width());
		$("#"+o.compId+"_prompt_"+cC).keydown(function(e) {t.ke(e);});
		}
		
		
	}
	t.addEnterEvent = function(){
		$("#"+o.compId+"_prompt_"+cC).keydown(function(e) {t.ke(e);});
		$("#"+o.compId+"_prompt_"+cC).attr("contenteditable","true");
		$("#"+o.compId+"_prompt_"+cC).focus();
		
		
		/*$("#"+o.compId+"_prompt_"+cC).focus(function(){
		if($("#"+o.compId+"_prompt_"+cC).text().length > 2){
		var str = $("#"+o.compId+"_prompt_"+cC).text().replace(/\s+$/,"")
		$("#"+o.compId+"_prompt_"+cC).html(str);
		}
		});*/
		
		}	
	
	t.rt = function()
	{
		$("#"+o.compId).append("<div style='font-family:Courier New;'>"+$(d.find("command")[cC]).find("deviceresponse").text()+"</div>");
		var instructionText = $(d.find("command")[cC]).find("instruction").text();
		if(instructionText)
		{
			$("#"+o.compId).append("<div style='margin-top:6px;'>"+$(d.find("command")[cC]).find("instruction").text()+"</div>");
		}
		
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
					t.pc();
				break;	
				
			case "showall":
					for(var i = cC;i<d.find("command").length-1;i++)
					{						
						t.cl();
						t.sm();				
						t.cl();	
						t.pc();
					}					
				break;	
		}
	}
	t.cl = function()
	{

		$("#"+o.compId+"_prompt_"+cC).text($("#"+o.compId+"_prompt_"+cC).text());
		$("#"+o.compId+"_prompt_"+cC).prop('disabled', true);
		$("#"+o.compId+"_prompt_"+cC).css("color","#000");
		//$("#"+o.compId+"_prompt_"+cC).focusout();
		$("#"+o.compId+"_prompt_"+cC).blur();
		$("#"+o.compId+"_prompt_"+cC).attr("readonly",true);
		$("#"+o.compId+"_prompt_"+cC).attr("contenteditable","false");			
			
	}
	t.clearDuplicateSpan = function(){
		$("#"+o.compId+"_prompt_"+cC).parent("div").children("span").each(function(index,ele){			
			if(index > 1){
				$(ele).remove();
			}
		});
	}
	
	/* function for scroll down*/
		t.pc = function(){
		
		$('.syntaxChecker').scrollTop($('.syntaxChecker').height()+40000);
		}

	var btn;
	/*btn = getCJSElement("BLUE_BUTTON",{x:18,y:o.height-37,width:126.6,height:20,size:12,id:"reset",div:o.div,compId:o.resetId,callback:t.cb});
	t.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:150,y:o.height-37,width:126.6,height:20,size:12,id:"showme",div:o.div,compId:o.showMeId,callback:t.cb});
	t.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:282,y:o.height-37,width:126.6,height:20,size:12,id:"showall",div:o.div,compId:o.showAllId,callback:t.cb});
	t.addChild(btn);*/
	var but_width = 126.6 * 3;
	var rem_width = o.width - but_width;
	var spacing = rem_width / 3;
	var but1_x = spacing;
	var but2_x = spacing + 126.6 + spacing/2;
	var but3_x = spacing + 126.6 + (spacing/2) + 126.6 + (spacing/2);
	
	// Fix for white line break in syntax checker begin
	var leftShape = new createjs.Shape(
		new createjs.Graphics().beginFill("#666263").drawRect(0,o.height-37,spacing,10)
	);
	
	var rightShape = new createjs.Shape(
		new createjs.Graphics().beginFill("#666263").drawRect(but3_x + 124,o.height-37,spacing+1,10)
	);
	t.addChild(leftShape);
	t.addChild(rightShape);
	// Fix for white line break in syntax checker end
	
	btn = getCJSElement("BLUE_BUTTON",{x:but1_x,y:o.height-37,width:126.6,height:20,size:12,id:"reset",div:o.div,compId:o.resetId,callback:t.cb});
	t.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:but2_x,y:o.height-37,width:126.6,height:20,size:12,id:"showme",div:o.div,compId:o.showMeId,callback:t.cb});
	t.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:but3_x,y:o.height-37,width:126.6,height:20,size:12,id:"showall",div:o.div,compId:o.showAllId,callback:t.cb});
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
	
		if(compObj.dropIcon){
			
		
	var dropImage = new Image();
	dropImage.src = compObj.dropIcon;
	dropImage.onload=dropImageHandle;
	
	}
	
	  

	
	else{
		//alert("coming to dropIcon")
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
	t.name = dragDiv.id;
	t.sid	=	compObj.dragId;
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
		
	
	var label = getCJSElement("TEXT",{x:-9,y:0,width:compObj.width,div:dragDiv.id,align:compObj.dragAlign,compId:compObj.compId,expand:"up+down",color:compObj.textColor,size:compObj.size});
	if(compObj.dragAlign=="left")label.x=6;
	label.y = (compObj.height-$("#"+compObj.compId).height())/2+3;
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

(DnDInstructionComp = function (obj) {
	this.initialize();

	var self = this;
	var dom;
	
	self.showPopup = function()
	{
		dom.visible = true;
		$("#"+obj.div+"_popup").css("z-index",$("#"+obj.div).find("*").length);
		$("#"+obj.div+"_popup").css("display","block");
		update = true;
	}

	self.hidePopup = function()
	{
		dom.visible = false;
		$("#"+obj.div+"_popup").css("display","none");
		update = true;
	}

	self.loadPopup = function()
	{
		var popDiv = document.createElement("div");
		popDiv.id = obj.div+"_popup";
		popDiv.style.cssText = "top:0px;left:0px;visibility:hidden;";
		$("#"+obj.div).append(popDiv);
		dom = new createjs.DOMElement(popDiv);
	  
		$("#"+obj.div+"_popup").append('<canvas id="'+obj.div+'_canvas" width="'+obj.width+'" height="'+obj.height+'" style="background-color:rgba(255,255,255,0.5);"></canvas>');

		var childStage = new createjs.Stage(document.getElementById(obj.div+'_canvas'));
		childStage.enableMouseOver();
		if (createjs.Touch.isSupported()) { createjs.Touch.enable(childStage); }


		var btn = getCJSElement("BLUE_BUTTON",{x:145,y:288.45,width:150,height:21,compId:obj.buttonId,callback:self.hidePopup,div:obj.div+'_popup'});
		childStage.addChild(btn);

		var fbComp = getCJSElement("TEXTBOX",{x:70,y:50,width:300,height:230,titleId:obj.tbTitleId,bodyId:obj.tbBodyId,div:obj.div+"_popup",divId:obj.div+"_textbox"});
		childStage.addChild(fbComp);

		childStage.update();

		self.addChild(dom);		
		$("#"+obj.div+"_popup").css("z-index",$("#"+obj.div).find("*").length);
		// for display function 1= true "auto hide", 0= false "auto show"
		var disSat = obj.display;
		if(disSat && disSat == 1){
			self.hidePopup();
		}
	}

	var qestionImage = new Image();
	qestionImage.src = "../../../common/images/question_icon.png";
	qestionImage.onload = function(ev)
	{
		var container = new createjs.Container();
		var qBitmap = new createjs.Bitmap(ev.target);
		container.addChild(qBitmap);
		
		
		var hitShape = new createjs.Shape();
		hitShape.graphics.beginFill("#FFF").drawRect(0,0,ev.target.width,ev.target.height);
		hitShape.alpha = 0.01;
		container.addChild(hitShape);
		container.x = obj.x;
		container.y = obj.y;
		self.addChild(container);
		container.cursor = "pointer";

		self.loadPopup()
		container.onClick = self.showPopup;
		update = true;
	}

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
	var checksnapback=0;
	var snpbackcnt=0;
	var snapbackcomplete=0;
	var checkFirst=0;
	var checksnapbackcount=0;
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
		checksnapbackcount=0;
		  checksnapback=0;
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
			
		if(ev.target.dropTarget)
		{
			checksnapback=1
			ev.target.dropTarget.dragTarget = null;
			ev.target.dropTarget = null;
			
			 
			
		}
		//Set highest z-index for the child
		$(ev.target.dragDiv).css("z-index",$("#"+obj.div).children().length);
		//Get offset 
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
		update = true;
	}
	
	th.mouseUpHandler = function(ev)
	{
		if(ev.target.checkcount)
		{
		checksnapbackcount=1
		//checksnapback=1;
		}
		else
		{
			
    		checksnapback=0
			ev.target.checkcount=1;
		}
		if(ev.target.dropTarget) ev.target.dropTarget.clear();
		
		var isHit = false;
		var snapbackhittestcheck=0;
		
					
		for(var i = 0;i<dropArray.length;i++)
		{   
		   
			var dropPoint = dropArray[i].globalToLocal(mediaStage.mouseX,mediaStage.mouseY);
			if(mediaStage.mouseInBounds && ev.target.hitTest(dropPoint.x,dropPoint.y))
			{
				snapbackhittestcheck=1;
				//check existing drag object placed in the drop area
				if(dropArray[i].dragTarget != null)
				{	
					//snpbackcnt--;
					dropArray[i].dragTarget.dropTarget = null; 
					createjs.Tween.get(dropArray[i].dragTarget,{override:true}).to({x:parseFloat(dropArray[i].dragTarget.obj.x), y:parseFloat(dropArray[i].dragTarget.obj.y)}, 500,createjs.Ease.sineInOut).call(function(tw){						
						
						if(replicate)
						{								
							$(tw.target.dragDiv).remove();
							th.removeChild(tw.target);
							dragArray.splice(dragArray.indexOf(tw.target),1);																			
						}
						update = true;
					});					
				}
				dropArray[i].dragTarget = ev.target;
				
				ev.target.dropTarget = dropArray[i];
			
				var dragid = dropArray[i].dragTarget.name.split("_")[3];
				if(obj.method!="SNAPBACK" || dropArray[i].obj.group==dragArray[dragid].obj.group )
				{	
				
				isHit = true;
				checkFirst=1;
				if(ev.target.dropTarget) ev.target.dropTarget.clear();
				
				if(dropArray[i].obj.group==dragArray[dragid].obj.group && checksnapback!=1 && checksnapbackcount!=1 )
				{
				snpbackcnt++;
				}
				createjs.Tween.get(ev.target,{override:true}).to({x:parseFloat(dropArray[i].obj.x), y:parseFloat(dropArray[i].obj.y)}, 500,createjs.Ease.sineInOut);
					
				}
			}
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
				
			ev.target.dropTarget = null;
			}
			if(checksnapbackcount==1)
			{
			}
			else
			{
			ev.target.checkcount=null;
			}
			
			createjs.Tween.get(ev.target,{override:true}).to({x:ev.target.obj.x, y:ev.target.obj.y}, 500,createjs.Ease.sineInOut).call(function(tw){
				
				if(tw.target.checkcount) tw.target.checkcount=null;

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
// function for removing duplicate element from an array 	
	var unique = function(origArr) {
		var newArr = [],
		origLen = origArr.length,
		found,
		x, y;
		 
		for ( x = 0; x < origLen; x++ ) {
		found = undefined;
		for ( y = 0; y < newArr.length; y++ ) {
		if ( origArr[x] === newArr[y] ) {
		found = true;
		break;
		}
		}
		if ( !found) newArr.push( origArr[x] );
		}
		return newArr;

		}
//check resit button handler
	th.buttonClickHandler = function(id)
	{	
		var i = 0;
		var totaldragTarget=0;
		if(id == "check")
		{
			checkClicked = true;
			resetClicked =false;
			tickContainer=new createjs.Container();
			th.addChild(tickContainer);
			
			//validation code goes here
			var dragId;
			var cnt = 0;
			var checkdropNull=0;
			var myArr=[]
			var groupArr=[];
			var mynewArr=[];
			var lengthArr=[];
			var correctanswercount=0;
			
			
			for(d=0;d<dropArray.length;d++)
			{
				myArr[d]=dropArray[d].obj.group
			}
			myArr = unique(myArr);
			
			for(var j=0;j<myArr.length;j++)
			{
				groupArr[j]=[];
				lengthArr[j]=0;
			}
			//var containArr=[];
			for (m=0;m<dropArray.length;m++)
			{
		
				if(obj.matchType!="group"){
				if((dropArray[m].obj.match && dropArray[m].obj.match.toLowerCase()!="null") ){
				correctanswercount++;
				}
				}
				if(obj.matchType=="group"){
						if(dropArray[m].obj.group &&(dropArray[m].obj.group.toLowerCase()!="null" || dropArray[m].obj.group=="")){
						 if(dropArray[m].obj.empty && (dropArray[m].obj.empty=="null"||dropArray[m].obj.empty=="NULL")){	
						
						 }
						 else
						 {
							 correctanswercount++;
						 }
						}
				}
				for(var k=0;k<myArr.length;k++)
				{
					if((dropArray[m].obj.group)==myArr[k] )
					 {
						 groupArr[k].push(dropArray[m]);
						  if(dropArray[m].obj.empty=="null"||dropArray[m].obj.empty=="NULL"){
							  lengthArr[k]=lengthArr[k]+1;
							  
						  }
					  }
					
				}
			}
		
			
				var groupObj = {};
			var groupObjArr = [];
			for(i = 0;i<dropArray.length;i++)
			{
		
				if(dropArray[i].dragTarget )
				{
					totaldragTarget++;
					dropArray[i].showWrong();
					dragId = dropArray[i].dragTarget.name.split("_")[3];
					if(obj.matchType=="group"){
					var arr=[];
					if(dragArray[dragId].obj.group){
					var arr1=myArr.indexOf(dropArray[i].obj.group);
					mynewArr[arr1]=1;
					var arr=[];
					arr=dragArray[dragId].obj.group.split(",");
				for(var k=0;k<arr.length;k++)
				{	
					//groupObjArr = unique(groupObjArr);					
					if(dropArray[i].obj.group==arr[k])
					{
					
					groupObjArr = unique(groupObjArr);
								if(groupObjArr.indexOf(dropArray[i].dragTarget.sid + dropArray[i].obj.group)<0)
									{
										groupObjArr.push(dropArray[i].dragTarget.sid + dropArray[i].obj.group);
										dropArray[i].showCorrect();
										cnt++;
										
									}
											
					}
				}
				}
				
				}
				else if(obj.matchType=="normal"){
					
					 if(dragId == dropArray[i].obj.match )
					{
						//console.log("coming to normal") 
						dropArray[i].showCorrect();						
						cnt++;
					}
				}
				}
	/*		else if(!(dropArray[i].dragTarget) && dropArray[i].obj.match.toLowerCase()=="null" && checkFirst==1){
						dropArray[i].showCorrect();						
						cnt++;
				}*/
				
			}
			
/*		if(obj.grouptype=="multi"){
			for(var n=0;n<groupArr.length;n++){
			var count = 0;
			for (var t=0;t<groupArr[n].length;t++){
				
					if((groupArr[n][t].dragTarget == null || groupArr[n][t].dragTarget..toLowerCase() == "null") && count < lengthArr[n]){
						totaldragTarget++;
					groupArr[n][t].showCorrect();
					cnt++
					count++
				
				}
				
			}
				
			}
			}	
				*/
			/*if(cnt == dropArray.length && matchType=="group")
			{
				fbComp.setTitleId(fbObject.correctTitleId);
				fbComp.setBodyId(fbObject.correctBodyId);	
			}*/
	//console.log("cnt: "+cnt+"  correctanswercount: "+correctanswercount+"   totaldragTarget: "+ totaldragTarget);
		if(cnt == correctanswercount && totaldragTarget==correctanswercount)
			{    //console.log("show correct");	
				fbComp.setTitleId(fbObject.correctTitleId);
				fbComp.setBodyId(fbObject.correctBodyId);	
			}
			else
			{	//console.log("show incorrect");			
				fbComp.setTitleId(fbObject.wrongTitleId);
				fbComp.setBodyId(fbObject.wrongBodyId);				
			}
	
			fbComp.visible=true;		
		}
		else if(id == "reset")
		{

			//For snapback
			checksnapback=0;
			snpbackcnt=0;
			snapbackcomplete=0;
			checkFirst=0;
			checksnapbackcount=0;

			resetClicked = true;
			checkClicked = false;
			var dragObj;
			checkFirst=0;
			totaldragTarget=0;
			for(i = 0;i<dropArray.length;i++)
			{
				dropArray[i].clear();//clearing tick/
				dragObj = dropArray[i].dragTarget;			
				
				if(dragObj)
				{
					dragObj.checkcount = null;
					dragObj.dropTarget = null;
					createjs.Tween.get(dragObj,{override:true}).to({x:dragObj.obj.x, y:dragObj.obj.y}, 500,createjs.Ease.sineInOut).call(function(tw){						
						//tw.dropTarget = null;
						if(replicate)
						{							
							$(tw.target.dragDiv).remove();
							dragArray.splice(dragArray.indexOf(tw.target),1);
							th.removeChild(tw.target);
						}
						update = true;

						//dropArray[i].dragTarget = null;
					});	
					//alert(dropArray[i].dragTarget);
					dropArray[i].dragTarget = null;
					dropArray[i].checkcount = 0;
				}
				//
			}
			fbComp.visible=false;
			snpbackcnt=0;	
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
					 cjsElement = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:parseFloat(compObj.x),y:parseFloat(compObj.y),width:parseFloat(compObj.width),height:parseFloat(compObj.height),titleId:compObj.wrongTitleId,bodyId:compObj.wrongBodyId,visible:"0"});
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
	
	th.tick = function()
	{
		if (createjs.Touch.isSupported()) {
			mediaStage.enableDOMEvents(false);
		}
	}
	createjs.Ticker.addListener(th);
		
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
	var maxHdrHt = 0;
	var maxRowHt = 36;
	var totalTablHt = 0;
	var rowHts = [];
	var hdrTotalWdth = 0;
	//var a,mD,d,cC;
	
	o.width = o.width ? parseFloat(o.width) : 300;
	o.height = o.height ? parseFloat(o.height) : 300;
	
	var tableRows = getMediaText("txt_numrows"); // no of rows
	var tableCols = getMediaText("txt_numcols"); // no of cols
	
	o.compId = "mc_table";
	$("#"+o.div).append('<div id="'+o.compId+'" ></div>');
	
	//header....
	var hrdDiv = document.createElement('div');
	hrdDiv.id = "hrdDiv";
	hrdDiv.style.cssText = "position:absolute;width:"+(o.width+4)+"px;";
	$("#"+o.div).append(hrdDiv);

	var domHdr = new createjs.DOMElement(hrdDiv);
	
	this.addChild(domHdr);
	
	//get max width and height
	
	this.qArray = [];
	
	
	t.createButton = function(_w,_h,_p){

		var _btn = new createjs.Container();	
			
		_btn.p = _p;
			
		var _hit = new createjs.Shape();
		 _hit.graphics.beginFill("#d9eeed").drawRect(0,0,_w,_h);
		//_hit.alpha = 0.01;
		_btn.addChild(_hit);
			
			
		var img = new createjs.Shape();
				
		img.graphics.beginBitmapFill(imageObject.dot,"no-repeat").drawRect(0,0,20,20);
		img.scaleX = img.scaleY = 0.9;
		img.x = (_w-17)/2;
		img.y = (_h-17)/2;

		_btn.addChild(img);	
		img.visible = false;
			
		img = new createjs.Shape();
		img.graphics.beginBitmapFill(imageObject.tick,"no-repeat").drawRect(0,0,16,16);
		img.x = (_w-15)/2;
		img.y = (_h-16)/2;
		_btn.addChild(img);	
		img.visible = false;
		
		img = new createjs.Shape();
		img.graphics.beginBitmapFill(imageObject.wrong,"no-repeat").drawRect(0,0,16,16);
		img.x = (_w-15)/2;
		//if(_btn.id == (parseInt(tableCols))){img.x = (_w-15)/2;} need fix here
		img.y = (_h-16)/2;
		_btn.addChild(img);	
		img.visible = false;
		

		
		var _t = this;
		_btn.cursor='pointer';
		_btn.onClick = function()
		{
			_t.onoffClicked(this);
		}
		
		return _btn;
	}
	
	
	var imageObject;
	var manifest = [{src:"../../../common/images/on_dot.png",id:"dot"},{src:"../../../common/images/tick.png",id:"tick"},{src:"../../../common/images/wrong.png",id:"wrong"}];
	var loaded = function(_obj)
	{
		imageObject = _obj;
		
		$("#hrdDiv").css('display','block');
		
		for(var k=parseInt(tableCols);k > 0;k--){
		
			var styleHead = "";
			var styleHeadLast = "border-right:2px solid #fff;";	
			var styleHeadCur = "";	
				
			if(k == tableCols){styleHead = "border:none;"; styleHeadLast=""}
			else if(k == 1){styleHead = "border-right:2px solid #fff;";}
			else{styleHead= "border-right:2px solid #fff;";}
			
			var colsTitle = getMediaText("txt_col"+k);
			
			
			var hdrTxt = document.createElement("div");  
			hdrTxt.id = "txt_col"+k;
			hdrTxt.style.cssText = 'color:#ffffff;font-size:11px;padding:0 10px 0 10px; float:right;'+styleHead;	
			//$(dummy).css('width', 'auto');
			$(hdrTxt).html(colsTitle);
			$("#hrdDiv").append(hdrTxt);
			
			if($(hdrTxt).height() > maxHdrHt){
				maxHdrHt = $(hdrTxt).height();
			}
			
			hdrTotalWdth +=  ($(hdrTxt).width() + 20);
		}
	
		var maxRowWdth = o.width - hdrTotalWdth-4;
		
		for(i=1;i<=tableRows;i++){
			var qt = getMediaText("txt_q"+i);
			var qTxt = document.createElement("div");  
			$(qTxt).css('width', (maxRowWdth-10)+'px');
			$(qTxt).css('font-size', '11px');
			$(qTxt).html(qt);
			$("#"+o.div).append(qTxt);
			rowHts[i] = $(qTxt).height() +3;
			
			totalTablHt += ((rowHts[i]>=maxRowHt?rowHts[i]:maxRowHt) + 2);
			
			//if($(qTxt).height() > maxRowHt){
				//maxRowHt = $(qTxt).height();
		//	}
			$(qTxt).remove();
		}
	
		//maxRowHt = maxRowHt + 12;
		//if(maxRowHt < 36){
		//	maxRowHt = 36;
		//}
		
		//--
		var hdrBg;
		hdrBg = new createjs.Shape();
		hdrBg.graphics.beginFill("#67bdbc").drawRoundRectComplex(0,0,hdrTotalWdth+3,maxHdrHt+10,7,7,0,0);
		hdrBg.x = maxRowWdth - 10; 
		hdrBg.y = 3; 
		t.addChild(hdrBg);
		
		domHdr.y = ((maxHdrHt+10)/2) - maxHdrHt/2;
		
		var canDiv = document.createElement('div');
		canDiv.id = "canvasDiv";
		canDiv.style.cssText = "height:"+(o.height-60)+"px; position:absolute;width:"+(o.width+21)+"px; overflow-y:auto;";
		$("#"+o.div).append(canDiv);
		
		var domel = new createjs.DOMElement(canDiv);
		domel.y = maxHdrHt+8;
		t.addChild(domel);
		
		var _canvas2 = document.createElement("canvas");
		_canvas2.id = "canvas2";
		_canvas2.width = o.width;
		//alert(totalTablHt); //tableRows * ((rowHts[i]>=maxRowHt?rowHts[i]:maxRowHt)+2);// - 2;
		_canvas2.height = totalTablHt; //tableRows * ((rowHts[i]>=maxRowHt?rowHts[i]:maxRowHt)+2);// - 2;
		_canvas2.style.cssText = "position:absolute;overflow:auto;visibility:visible;border: 2px solid #67bdbc;border-right:2px solid #fff;border-top:none;";
		
		t.stage2 = new createjs.Stage(_canvas2);	
		t.stage2.enableMouseOver();
		$("#canvasDiv").append(_canvas2);
		
		//---
		var bg;
		bg = new createjs.Shape();
		bg.graphics.beginFill("#FFF").drawRect(0,0,_canvas2.width+50,_canvas2.height);
		t.stage2.addChild(bg);
		t.stage2.update();
		
		var boo;
		t.tick = function(){
		boo = $("#canvas2").css("visibility");
		if(boo){
			if (createjs.Touch.isSupported()) {
		if(boo == "visible")
		{
		mediaStage.enableDOMEvents(false);
		}
		else
		{
		mediaStage.enableDOMEvents(true);
		}
		}
		}
		}
		createjs.Ticker.addListener(t);
		
		var yPos = 2;	
		for(i=1;i<=tableRows;i++){
				
			var qun = getMediaText("txt_q"+i); //queastion
			answerArray[i] = i+'_'+parseInt(getMediaText("txt_a"+i));//answer
			
			var styleRows = "";
			var styleRowsAns = "";
			
			//----------
			q = new createjs.Container();			
			q.x = 0;
			q.y = yPos;
			yPos = yPos+((rowHts[i]>=maxRowHt?rowHts[i]:maxRowHt) + 2);
			t.stage2.addChild(q);
				
				
				
			_x = o.width;
			for(var j = parseInt(tableCols);j> 0;j--){
					
				var w = $("#txt_col"+j).width() + 20;
				$("#txt_col"+j).css("height",maxHdrHt);
				
				
				var hit = t.createButton(w,rowHts[i]>=maxRowHt?rowHts[i]:maxRowHt,q);
				hit.x = _x - w + 2;
				_x -= w + 2;
				hit.y = 0;
				hit.id = j+1;
				hit.isOn = false;
				q.addChild(hit);	
			}
				
				
			var qbg = new createjs.Shape();						
			qbg.graphics.beginFill("#d9eeed").drawRect(0,0,_x+2,rowHts[i]>=maxRowHt?rowHts[i]:maxRowHt);	

				//alert(rowHts[i]>=maxRowHt?rowHts[i]:maxRowHt);
			q.addChild(qbg);				
				
			_textComp = new TextComp({compId:"txt_q"+i,x:0,y:0,div:"#canvasDiv",width:maxRowWdth-10,height:rowHts[i]>=maxRowHt?rowHts[i]:maxRowHt,align:"left",expand:"down"});
			//_textComp.x = this.dataObject.details.qWidth + 20;
			_textComp.x = 5;
			//_textComp.y = maxRowHt + (i*10);
			_textComp.y = 1;
			q.addChild(_textComp);
				
				
				
			q.selId = 0;
			q.selected = false;		
			q.selIndex = null;
			q.ans = parseInt(getMediaText("txt_a"+i));//answer;
				
			t.qArray.push(q);
			t.stage2.update();
			
			
			var hdrln2;
			hdrln2 = new createjs.Shape();
			hdrln2.graphics.setStrokeStyle(4).beginStroke("#67bdbc");//.drawRoundRectComplex(0,0,hdrTotalWdth+4,maxHdrHt+10,7,7,0,0);
		
			hdrln2.graphics.moveTo(0,0);
			hdrln2.graphics.lineTo(maxRowWdth-2 , 0);
			hdrln2.graphics.setStrokeStyle(4).endStroke();
			hdrln2.graphics.setStrokeStyle(4).beginStroke("#ffffff");
			hdrln2.graphics.moveTo(maxRowWdth - 2,0);
			hdrln2.graphics.lineTo(maxRowWdth + (o.width - maxRowWdth) , 0);
			//hdrln.x =  - 8; 
			t.stage2.addChild(hdrln2);
			t.stage2.update();
			
		}	
		
	}
	loadImages(manifest,loaded);
	
	
	
	var answerArray = [];
	var answerHit = [];
	
	var compId,_txt,_textComp;
	
	t.onoffClicked = function(_btn)
	{
		if(checkDone){
			t.actionReset();
		}
		
		if(_btn.p.selIndex)
		{
			_btn.p.selIndex.getChildAt(1).visible = false;
			if(_btn.p.selIndex != _btn)
				_btn.p.selIndex.isOn = false;
		}
		
		
		if(_btn.isOn){
			_btn.getChildAt(1).visible = false;
			_btn.p.selected = false;
			_btn.p.selIndex = null;
			_btn.p.selId = null;
			_btn.isOn = false;
		}else{
			_btn.getChildAt(1).visible = true;
			_btn.p.selected = true;
			_btn.p.selIndex = _btn;
			_btn.p.selId = _btn.id;
			_btn.isOn = true;
		}
		
		if(_btn.p.getStage()) _btn.p.getStage().update();
		//if(this.getStage()) this.getStage().update();
	}

	t.toString = function()
	{
		return '[OnOff '+this.name +']';
	}
	
	//checking answers
	t.actionCheck = function (){	
		var ansCount = 0;
		checkDone = true;
		var _mc;
		var resultCnt = 0;
		for(var i = 0;i<t.qArray.length;i++)
		{
			_mc = t.qArray[i];
			
			if(_mc.selIndex)
			{
				this.checkPressed = true;
				if(_mc.ans == (_mc.selId - 1))
				{
					_mc.selIndex.getChildAt(1).visible = false;
					_mc.selIndex.getChildAt(2).visible = true;
					ansCount++;
				}
				else
				{
					_mc.selIndex.getChildAt(1).visible = false;
					_mc.selIndex.getChildAt(3).visible = true;				
				}
				if(_mc.getStage()) _mc.getStage().update();
				//if(this.getStage())this.getStage().update();
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
	t.actionReset = function (){
		checkDone = false;
			
		fbComp.visible=false;
		var _mc;
		for(var i = 0;i<t.qArray.length;i++)
		{
			_mc = t.qArray[i];
			if(_mc.selIndex)
			{
				//this.checkPressed = true;
				_mc.selIndex.getChildAt(1).visible = false;
				_mc.selIndex.getChildAt(2).visible = false;
				_mc.selIndex.getChildAt(3).visible = false;
				_mc.selIndex.isOn = false;
				_mc.selIndex = null;								
				
			}
			if(_mc.getStage()) _mc.getStage().update();
		}
	}		
		
	//Display objects from xmlNode
	
	$(xmlNode).find('subelement').each(function(){
		var type = $(this).attr('type');
		var compObj = {};
		compObj.width = o.compWidth;
		compObj.height = o.compHeight;
		
		for(var i = 0;i<this.attributes.length;i++)
		{
			compObj[this.attributes[i].name] = this.attributes[i].value;			
		}		
		
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


var AnimationComp = (function() {

	var startBtn,pauseBtn,forwardBtn,rewindBtn,resumeBtn,restartBtn,firstBtn,endBtn,ball;
	 
	this.tl;
	this.animFunc;
	this.animationID; 
	var that = this;
	//Public method
	this.initFuncArray = function(animation) {
		//console.log("Function Name: " +animation); 
		animation();
		this.tl.pause(); 
	};
	
	this.initTemp = function(animationID) {
		 
		this.animationID = animationID;
		bindTemp(animationID);  
		
		$( "#"+animationID+" #slider").slider({
			range: false,
			min: 0,
			max: 100,
			step:.1,
			slide: function ( event, ui ) {
				that.tl.progress( ui.value/100 ).pause();
			}
		});	
		
		this.tl = new TimelineMax({onUpdate:updateSlider});
	};
  function updateSlider() {
		$( "#"+that.animationID+" #slider").slider("value", that.tl.progress() * 100);
	} 
  
	function bindTemp(animationID) {
		var temp ='<div id="dvSliderContainer">';
	temp+='<div class="sbut" rev="">';
	temp+='<img src="../../../common/images/animation-controller/play.png" width="33" height="27" alt="Play" id="startBtn"/></div>';
	temp+='<div class="pause" rev=""><img src="../../../common/images/animation-controller/pause.png" width="33" height="27" alt="Pause" id="pauseBtn"/></div>';

	temp+='<div class="resbut" rev=""><img src="../../../common/images/animation-controller/play.png" width="33" height="27" alt="Play" id="restartBtn"/></div>';
	temp+='<div class="start" rev=""><img src="../../../common/images/animation-controller/start.png" width="27" height="27" alt="First" id="firstBtn" /></div>';
	temp+='<div class="rewind" rev=""><img src="../../../common/images/animation-controller/rewind.png" width="27" height="27" alt="Revind" id="rewindBtn" /></div>';
	temp+='<div class="forward" rev=""><img src="../../../common/images/animation-controller/forward.png" width="27" height="27" id="forwardBtn" alt="Forward" /></div>';
	temp+='<div class="end" rev=""><img src="../../../common/images/animation-controller/end.png" width="27" height="27" alt="End" id="endBtn" /></div>';
	temp+='<div id="slider">';
	temp+='</div>'; 
	
	$('#'+animationID).append(temp);
	$("#mediaContainer").after('<div class="strpopup" style="display:none"/>');  
		
		startBtn= $( "#"+animationID+" #startBtn"),
		pauseBtn = $( "#"+animationID+" #pauseBtn"),
		forwardBtn = $( "#"+animationID+" #forwardBtn"),
		rewindBtn = $( "#"+animationID+" #rewindBtn"),
		resumeBtn = $( "#"+animationID+" #resumeBtn"), 
		restartBtn = $( "#"+animationID+" #restartBtn"),
		firstBtn= $( "#"+animationID+" #firstBtn"),
		endBtn = $( "#"+animationID+" #endBtn"),
		ball = $( "#"+animationID+" .ball");	
		
	
	startBtn.click(function(){		
		$(".sbut").css("z-index","0");
		$(".pause").css("z-index","1");
		that.tl.play(); 
	});
 
	pauseBtn.click(function(){
		that.tl.pause();

		$(".pause").css("z-index","0");
		$(".sbut").css("z-index","1");

	});

	forwardBtn.click(function(){  
		that.tl.pause(); //pause it once, then use seek()
		that.tl.seek( that.tl.time() + .25); //goes forward one frame
		$("#slider").slider("value", that.tl.progress() * 100);
		 
	});
	rewindBtn.click(function(){  
		var startTime = that.tl.time();
		if(startTime != 0){
			that.tl.pause(); //pause it once, then use seek()
			that.tl.seek( that.tl.time() - .25); //goes forward one frame 
			$("#slider").slider("value", that.tl.progress() * 100);
		}
	});
 
	restartBtn.click(function(){
		//Start playing from a progress of 0.
		that.tl.restart();

		$(".resbut").css("z-index","-1");
		$(".pause").css("z-index","1");
		$(".play").css("z-index","0"); 
	});

	firstBtn.click(function(){ 
		var startTime = that.tl.time();
		if(startTime != 0){
			that.tl.pause(); //pause it once, then use seek()
			 that.tl.time(0);

			$(".resbut").css("z-index","1");
			$(".pause").css("z-index","0");
			$(".play").css("z-index","-1");   
		}
	});
	endBtn.click(function(){  
		that.tl.pause();
		var endTime = that.tl.totalDuration();
		that.tl.time(endTime);  
	}); 
	
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	if(!isiPad ){
	// Common Handlers
		function mouseOverEventHandler(_this,e,value){ 
	
			$('.strpopup').text(value);
			_this.addEventListener("mousemove", mouseMoveEventHandler, false);
			$('.strpopup').css({top: e.pageY -33, left: e.pageX+6}); 
			$(".strpopup").show(); 
		}
		function mouseMoveEventHandler(e){ 
			//console.log(e.clientX + " " + e.clientY);
			$('.strpopup').css({top: e.pageY -33, left: e.pageX+6}); 
			
		}
		function mouseOutEventHandler(_this){ 
			$(".strpopup").hide();
			_this.removeEventListener("mousemove", mouseMoveEventHandler, false); 
		}
		
		// Player Events
		startBtn.mouseover(function(e){	
			var label =  startBtn.parent().attr('rev').trim();  
			mouseOverEventHandler(this,e,label);
			$(".sbut img").attr("src","../../../common/images/animation-controller/paly_hover.png"); 
		});
		
		startBtn.mouseout(function(){ 
			$(".sbut img").attr("src","../../../common/images/animation-controller/play.png");
			mouseOutEventHandler(this);
			
		}); 
		
		pauseBtn.mouseover(function(e){	 
			var label =  pauseBtn.parent().attr('rev').trim();  
			mouseOverEventHandler(this,e,label);
			$(".pause img").attr("src","../../../common/images/animation-controller/pause_over.png")
		});
		
		pauseBtn.mouseout(function(){		
			$(".pause img").attr("src","../../../common/images/animation-controller/pause.png")
			mouseOutEventHandler(this);
		});
		
		
		forwardBtn.mouseover(function(e){	 
			var label =  forwardBtn.parent().attr('rev').trim();  
			mouseOverEventHandler(this,e,label);
			$(".forward img").attr("src","../../../common/images/animation-controller/forward_over.png")
		});
		
		forwardBtn.mouseout(function(){		
			$(".forward img").attr("src","../../../common/images/animation-controller/forward.png")
			mouseOutEventHandler(this);
		});
		
		
		rewindBtn.mouseover(function(e){	 	
			var label =  rewindBtn.parent().attr('rev').trim();  
			mouseOverEventHandler(this,e,label);
			$(".rewind img").attr("src","../../../common/images/animation-controller/rewind_over.png")
		});
		
		rewindBtn.mouseout(function(){		
			$(".rewind img").attr("src","../../../common/images/animation-controller/rewind.png")
			mouseOutEventHandler(this);
		});
		
		firstBtn.mouseover(function(e){	 
			var label =  firstBtn.parent().attr('rev').trim();  
			mouseOverEventHandler(this,e,label);
			$(".start img").attr("src","../../../common/images/animation-controller/start_over.png")
		});
		
		firstBtn.mouseout(function(){		
			$(".start img").attr("src","../../../common/images/animation-controller/start.png")
			mouseOutEventHandler(this);
		});
		
		endBtn.mouseover(function(e){	 	
			var label =  endBtn.parent().attr('rev').trim();  
			mouseOverEventHandler(this,e,label);
			$(".end img").attr("src","../../../common/images/animation-controller/end_hover.png")
		});
		
		endBtn.mouseout(function(){		
			$(".end img").attr("src","../../../common/images/animation-controller/end.png")
			mouseOutEventHandler(this);
		});
		
		restartBtn.mouseover(function(e){	 
			var label =  startBtn.parent().attr('rev').trim();  
			mouseOverEventHandler(this,e,label);
			$(".resbut img").attr("src","../../../common/images/animation-controller/paly_hover.png")
		});
		
		restartBtn.mouseout(function(){		
			$(".resbut img").attr("src","../../../common/images/animation-controller/play.png")
			mouseOutEventHandler(this);
		});
	}  
  } 
  
  //  return this;
});
  