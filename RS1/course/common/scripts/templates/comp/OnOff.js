function OnOff(_xmlData,_dataObject)
{	
	this.initiateComp(_xmlData,_dataObject);				
}

var p = OnOff.prototype = new createjs.Container();

p.initiateComp = function(_xmlData,_dataObject)
{
	//super class inheritance
	this.initialize();

	this.stage2 = null;
	this.dataObject = _dataObject;
	this.xmlData = _xmlData;
	this.qArray = null;
	this.checkPressed = false;
	this.feedbackContainer = null;
	this.cButton = null;
	this.rButton = null;
	this.init();	
}
	
p.init = function()
{	
	//Draw Background 
	var bg;
	if(this.dataObject.details)
	{
		bg = new createjs.Shape();
		bg.graphics.beginFill("#FFF").drawRect(0,0,this.dataObject.details.width-4,this.dataObject.details.height-4);
		this.addChild(bg);		
	}	
	
	var canDiv = document.createElement('div');
	canDiv.id = "canvasDiv";
	canDiv.style.cssText = "height:"+this.dataObject.details.height+"px; top:0; position:absolute;width:"+(this.dataObject.details.width+18)+"px; overflow-y:scroll;";
	$("#commonInterText").append(canDiv);
	
	var domel = new createjs.DOMElement(canDiv);
	this.addChild(domel);
	//$("#commonInterText").append('<div id="canvasDiv" style="height:200px; top:0; position:absolute; overflow-y:scroll !important;"></div>');
	
	var _canvas2 = document.createElement("canvas");
	_canvas2.id = "canvas2";
	_canvas2.width = this.dataObject.details.width;
	_canvas2.height = this.dataObject.questions.length*(this.dataObject.details.qHeight + 2);;
	_canvas2.style.cssText = "position:absolute;top:0px;left:0px;overflow:auto;visibility:visible;";
	
	this.stage2 = new createjs.Stage(_canvas2);	
	this.stage2.enableMouseOver();
	$("#canvasDiv").append(_canvas2);
	
	//if (createjs.Touch.isSupported()) { createjs.Touch.enable(this.stage2); }
	
	//var domEle = new createjs.DOMElement(_canvas2);			
	//this.addChild(domEle);	
	//$("#commonInterText").append('<div id="questionText"></div>');
			
	if(this.dataObject.questions)
	{
		var q,hit;
		var compId,_txt,_textComp;
			
		this.qArray = [];
		var i;
		var _x = 0;
		
		for( i = 0;i<this.dataObject.questions.length;i++)
		{
			q = new createjs.Container();			
			q.x = 0;
			q.y = i*(this.dataObject.details.qHeight + 2);
			this.stage2.addChild(q);
			//Answer Index
			 compId = this.dataObject.questions[i].a;
			q.ans = parseInt($(this.xmlData).find("component#"+compId).text());
			//alert(this.dataObject.details.qWidth);
			
			bg = new createjs.Shape();						
			bg.graphics.beginFill("#d9eeed").drawRect(0,0,this.dataObject.details.qWidth,this.dataObject.details.qHeight);			
			q.addChild(bg);				
			
			 compId = this.dataObject.questions[i].q;
			_txt = $(this.xmlData).find("component#"+compId).text();
			this.dataObject.questions[i].divId = "canvasDiv";
			this.dataObject.questions[i].compId = compId;
			this.dataObject.questions[i].text = _txt;
			//this.dataObject.questions[i].x = this.dataObject.details.qWidth + 30;
			//this.dataObject.questions[i].y = 8;
			this.dataObject.questions[i].size = 11;
			this.dataObject.questions[i].width = this.dataObject.details.qWidth-10;
			
			_textComp = new TextComp(this.dataObject.questions[i]);
			//_textComp.x = this.dataObject.details.qWidth + 20;
			_textComp.x =5;
			//_textComp.y = 30 + (i*10);
			_textComp.y = 5;
			q.addChild(_textComp);
			_x = 0;
			for(var j = 0;j<this.dataObject.columns.length;j++)
			{				
				hit = this.createButton(this.dataObject.columns[j].width,this.dataObject.details.qHeight,q);
				hit.x = _x + this.dataObject.details.qWidth + 2;
				_x += this.dataObject.columns[j].width + 2;
				hit.y = 0;
				hit.id = j+1;
				q.addChild(hit);	
			}
			q.selId = 0;
			q.selected = false;		
			q.selIndex = null;
			
			this.qArray.push(q);
			this.stage2.update();
			
		}
		
	}
	
	bg = new createjs.Shape();
	bg.graphics.setStrokeStyle(4);
	bg.graphics.beginStroke("#67bdbc");	
	bg.graphics.beginFill().drawRect(0,0,_canvas2.width,_canvas2.height);
	this.stage2.addChild(bg);		
	
	this.x = this.dataObject.details.x;
	this.y = this.dataObject.details.y + 20;
	
	//Buttons 
	this.buildButtons();
	
	this.feedbackContainer  = new createjs.Container();
	var fBg = new createjs.Bitmap(this.dataObject.feedback[4].imageName);
	fBg.x = this.dataObject.feedback[4].x - this.x;
	fBg.y = this.dataObject.feedback[4].y - this.y;	
	this.feedbackContainer.addChild(fBg);
		
	if(this.dataObject.feedback[5].closeBtn)
	{
		var _t = this;
		var closeBtn = new createjs.Bitmap("../../../common/images/closeBtn.jpg");				
		closeBtn.x = this.dataObject.feedback[5].x - this.x;
		closeBtn.y = this.dataObject.feedback[5].y - this.y;		
		closeBtn.onClick = function(){			
			_t.feedbackContainer.visible = false;
			_t.stage2.update();
			if(this.getStage())this.getStage().update();
			
			if(_t.dataObject.feedback[6])
			{
				for(var i = 0;i<_t.dataObject.feedback[6].hideText.length;i++)
				{
					$("#"+_t.dataObject.feedback[6].hideText[i]).show();
				}
			}
			
		}
		this.feedbackContainer.addChild(closeBtn);
	}
	
	this.addChild(this.feedbackContainer);
	this.feedbackContainer.visible = false;
		
	this.stage2.update();
	if(this.getStage())this.getStage().update();
	
}

p.buildButtons = function()
{	
	var normalImg,overImg;
	var _t = this;
	
	normalImg = new Image();
	normalImg.src = "../../../common/images/text_button_gradient_big.png";	
	//normalImg.src = "../../../common/images/btn.jpg";	
	normalImg.onload = function(ev){
		
		overImg = new Image();
		overImg.src = "../../../common/images/text_button_gradient_selected.png";		
		overImg.onload = function(ev){
			
			var buttonComp;
			var compId,_txt;
			var normlCont,overCont,normalShape,overShape;
			var w,h;
			var _txtComp;
			
				for( i = 0;i<_t.dataObject.buttons.length;i++)
				{
					buttonComp = new createjs.Container();
					buttonComp.x = _t.dataObject.buttons[i].x - _t.x;
					buttonComp.y = _t.dataObject.buttons[i].y - _t.y;
					_t.addChild(buttonComp);
					
					compId = _t.dataObject.buttons[i].compId;
					_txt = $(_t.xmlData).find("component#"+compId).text();	
					
					var textDiv = document.createElement("div");		
					textDiv.style.cssText = ('position:absolute;top:0px;left:0px;overflow:auto;font-size:'+_t.dataObject.buttons[i].size+'px;visibility:hidden;color:'+"#fff"+';cursor:pointer;text-align:center;width:'+_t.dataObject.buttons[i].width+'px;');
					textDiv.id = compId;
					textDiv.cont = buttonComp;
					textDiv.innerHTML = _txt;
					$("#commonInterText").append(textDiv);	
					
					$("#"+compId).click(function(){
						$("#"+this.cont.compId).css("color","#FFF");	
						this.cont.over.visible = false;
						this.cont.normal.visible = true;
						_t.callBackFromButton(this.cont.id);
					});
										
					
					
					var domText = new createjs.DOMElement(textDiv);
					domText.x = 10;
					domText.y = 3;
					buttonComp.addChild(domText);
					buttonComp.compId = compId;
					
					w = _t.dataObject.buttons[i].width;
					h = _t.dataObject.buttons[i].height;
					
					//Normal Level
					normlCont = new createjs.Container();
					normalShape = new createjs.Shape();		
					normalShape.graphics.beginBitmapFill(normalImg).drawRoundRect(0,0,w,h,4);
					normlCont.addChild(normalShape);
						
					buttonComp.normal = normalShape;
					buttonComp.addChild(normalShape);
					
					//Over level
					overCont = new createjs.Container();
					overShape = new createjs.Shape();		
					overShape.graphics.beginBitmapFill(overImg).drawRoundRect(0,0,w,h,4);
					overCont.addChild(overShape);
					overCont.visible = false;
			
					buttonComp.over = overCont;
					buttonComp.addChild(overCont);
					buttonComp.id = i;
					
					buttonComp.onMouseOver = function(){	
						if (createjs.Touch.isSupported()) return;
						$("#"+this.compId).css("color","#006699");		
						this.over.visible = true;
						this.normal.visible = false;
						if(this.getStage()) this.getStage().update();
					}
					
					buttonComp.onMouseOut = function(){		
						$("#"+this.compId).css("color","#FFF");	
						this.over.visible = false;
						this.normal.visible = true;
						if(this.getStage()) this.getStage().update();
					}
					buttonComp.onClick = function()
					{
						$("#"+this.compId).css("color","#FFF");	
						this.over.visible = false;
						this.normal.visible = true;
						_t.callBackFromButton(this.id);
					}
					
					buttonComp = null;
				}
				
				if(_t.getStage()) _t.getStage().update();
			/*
			overShape.graphics.beginBitmapFill(ev.target).drawRoundRect(0,0,w,h,2);
			overCont.addChild(overShape);
			overCont.visible = false;
			if(overCont.getStage()) overCont.getStage().update();
			*/
		}
		
		/*
		normalShape.graphics.beginBitmapFill(ev.target).drawRoundRect(0,0,w,h,2);
		normlCont.addChild(normalShape);
		if(normlCont.getStage()) normlCont.getStage().update();
		*/
	}
	
	
	
	
	
}

p.callBackFromButton = function(_id)
{
	
	this.feedbackContainer.visible = false; 
	//Reset
	var _mc;
	var resultCnt = 0;
	for(var i = 0;i<this.qArray.length;i++)
	{
		_mc = this.qArray[i];
		if(_mc.selIndex)
		{
			if(_id == 1)
			{
				//this.checkPressed = true;
				_mc.selIndex.getChildAt(1).visible = false;
				_mc.selIndex.getChildAt(2).visible = false;
				_mc.selIndex.getChildAt(3).visible = false;
				_mc.selIndex = null;								
			}
			else
			{
				this.checkPressed = true;
				if(_mc.ans == _mc.selId)
				{
					_mc.selIndex.getChildAt(1).visible = false;
					_mc.selIndex.getChildAt(2).visible = true;
					resultCnt++;
				}
				else
				{
					_mc.selIndex.getChildAt(1).visible = false;
					_mc.selIndex.getChildAt(3).visible = true;				
				}				
			}	
		}
	}
	if(_id == 0)
	{		
		$("#"+this.dataObject.feedback[0].correctTitleId).remove();		
		$("#"+this.dataObject.feedback[1].correctBodyId).remove();
		$("#"+this.dataObject.feedback[2].wrongTitleId).remove();		
		$("#"+this.dataObject.feedback[3].wrongBodyId).remove();
		this.feedbackContainer.visible = true;
		
		if(this.dataObject.feedback[6])
		{
			for(var i = 0;i<this.dataObject.feedback[6].hideText.length;i++)
			{
				$("#"+this.dataObject.feedback[6].hideText[i]).hide();
			}
		}
		
		var compId,_txt,_textComp;
		
		if(resultCnt == this.qArray.length)
		{
			compId = this.dataObject.feedback[0].correctTitleId;
			_txt = $(this.xmlData).find("component#"+compId).text();
			this.dataObject.feedback[0].divId = "commonInterText";
			this.dataObject.feedback[0].compId = compId;
			this.dataObject.feedback[0].text = _txt;
			
			_textComp = new TextComp(this.dataObject.feedback[0]);			
			_textComp.x =  this.dataObject.feedback[0].x - this.x;
			_textComp.y =  this.dataObject.feedback[0].y - this.y;
			this.feedbackContainer.addChild(_textComp);
			
			compId = this.dataObject.feedback[1].correctBodyId;
			_txt = $(this.xmlData).find("component#"+compId).text();
			this.dataObject.feedback[1].divId = "commonInterText";
			this.dataObject.feedback[1].compId = compId;
			this.dataObject.feedback[1].text = _txt;
			
			_textComp = new TextComp(this.dataObject.feedback[1]);			
			_textComp.x =  this.dataObject.feedback[1].x - this.x;
			_textComp.y =  this.dataObject.feedback[1].y - this.y;
			this.feedbackContainer.addChild(_textComp);
			
			
		}
		else
		{
			compId = this.dataObject.feedback[2].wrongTitleId;
			_txt = $(this.xmlData).find("component#"+compId).text();
			this.dataObject.feedback[2].divId = "commonInterText";
			this.dataObject.feedback[2].compId = compId;
			this.dataObject.feedback[2].text = _txt;
			
			_textComp = new TextComp(this.dataObject.feedback[2]);			
			_textComp.x =  this.dataObject.feedback[2].x - this.x;
			_textComp.y =  this.dataObject.feedback[2].y - this.y;
			this.feedbackContainer.addChild(_textComp);
			
			compId = this.dataObject.feedback[3].wrongBodyId;
			_txt = $(this.xmlData).find("component#"+compId).text();
			this.dataObject.feedback[3].divId = "commonInterText";
			this.dataObject.feedback[3].compId = compId;
			this.dataObject.feedback[3].text = _txt;
			
			_textComp = new TextComp(this.dataObject.feedback[3]);			
			_textComp.x =  this.dataObject.feedback[3].x - this.x;
			_textComp.y =  this.dataObject.feedback[3].y - this.y;
			this.feedbackContainer.addChild(_textComp);
		}
	}
	this.stage2.update();
	if(this.getStage())this.getStage().update();
}

p.createButton = function(_w,_h,_p)
{
	var _btn = new createjs.Container();	
	
	_btn.p = _p;
	
	var _hit = new createjs.Shape();
	_hit.graphics.beginFill("#d9eeed").drawRect(0,0,_w,_h);
	//_hit.alpha = 0.01;
	_btn.addChild(_hit);
	
	var img = new createjs.Bitmap("../../../common/images/on_dot.png");
	img.x = (_w-20)/2;
	img.y = (_h-20)/2;
	_btn.addChild(img);	
	img.visible = false;
	
	img = new createjs.Bitmap("../../../common/images/tick.png");
	img.x = (_w-20)/2;
	img.y = (_h-20)/2;
	_btn.addChild(img);	
	img.visible = false;
	
	img = new createjs.Bitmap("../../../common/images/wrong.png");
	img.x = (_w-20)/2;
	img.y = (_h-20)/2;
	_btn.addChild(img);	
	img.visible = false;
	
	var _t = this;
	_btn.onMouseOver = function(ev)
	{
		document.body.style.cursor='pointer';
		if(_t.getStage()) _t.getStage().update();
		if(this.getStage()) this.getStage().update();
	};
	_btn.onMouseOut = function(ev)
	{
		document.body.style.cursor='default';
		if(_t.getStage()) _t.getStage().update();
		if(this.getStage()) this.getStage().update();
	};
	_btn.onClick = function()
	{
		_t.onoffClicked(this);
	}
	
	return _btn;
}


p.onoffClicked = function(_btn)
{
	if(this.checkPressed)
	{
		this.checkPressed = false;
		this.callBackFromButton(1);
		//this.feedbackContainer.visible = true; 
	}
	if(_btn.p.selIndex)
	{
		_btn.p.selIndex.getChildAt(1).visible = false;
	}
	_btn.p.selected = true;
	_btn.p.selIndex = _btn;
	_btn.p.selId = _btn.id;
	_btn.getChildAt(1).visible = true;
		
	if(_btn.p.getStage()) _btn.p.getStage().update();
	if(this.getStage()) this.getStage().update();
}

p.toString = function()
{
	return '[OnOff '+this.name +']';
}


