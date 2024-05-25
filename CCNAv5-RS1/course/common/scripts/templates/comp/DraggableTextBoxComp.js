// JavaScript Document

var DraggableTextBoxComp = function(_dataObject)
{
	this.initiateComp(_dataObject);	
}

var p = DraggableTextBoxComp.prototype = new createjs.Container();

p.initiateComp = function(_dataObject)
{
	
	this.dataObject = _dataObject;
	this.bodyTextDOM;
	
	if(this.dataObject.background == undefined || this.dataObject.background != "NO")
	{
		this.drawBackground();
	}
	
	this.buildBodyText();
	
	this.x = this.dataObject.x;
	this.y = this.dataObject.y;
	if(this.dataObject.closeBtn)
	{
		var _this = this;
		var img = new Image();
		img.src = "../../../common/images/closeBtn.jpg";
		img.onload = function(ev)
		{
			var closeBtn = new createjs.Bitmap(ev.target);
			closeBtn.x=_this.dataObject.width-25;
			closeBtn.y=2;
					
			closeBtn.onClick=function(){
				_this.parent.visible=false;
				_this.getStage().update();
				}
			_this.addChild(closeBtn);
			if(_this.getStage()) _this.getStage().update();
		}
	}
}

p.drawBackground = function()
{
	 var _shadow = new createjs.Shape();
	_shadow.graphics.beginFill("#000000").drawRoundRect(0,0,this.dataObject.width-2,this.dataObject.height-2,5);
	_shadow.shadow = new createjs.Shadow("#000000",3,3,10);
	_shadow.x = _shadow.y = 0.5;
	this.addChild(_shadow);
	
	var _bg = new createjs.Shape();
	_bg.graphics.beginFill("#C1ABD1").drawRoundRect(0,0,this.dataObject.width,this.dataObject.height,5);
	this.addChild(_bg);
	
	var _bodyBg = new createjs.Shape();
	
	var _blackLine = new createjs.Shape();
	
	if(this.dataObject.titleCompId == "" || this.dataObject.titleCompId == undefined)
	{
		_blackLine.graphics.beginFill("#000000").drawRect(5,5,this.dataObject.width-10,2);
		_bodyBg.graphics.beginFill("#FFFFFF").drawRect(5,15,this.dataObject.width-10,this.dataObject.height-20);
	}
	else
	{
		_blackLine.graphics.beginFill("#000000").drawRect(5,25,this.dataObject.width-10,2);
		_bodyBg.graphics.beginFill("#FFFFFF").drawRect(5,30,this.dataObject.width-10,this.dataObject.height-35);
		
		this.buildTitleText();
	}
	
	this.addChild(_blackLine);
	this.addChild(_bodyBg);
		
}

p.setTitleText = function(_text)
{
	var div = document.getElementById(this.dataObject.titleCompId);
	div.innerHTML = _text;	
}

p.buildTitleText = function()
{
	 var textDiv = document.createElement("div");
    textDiv.id = this.dataObject.titleCompId;
	textDiv.style.cssText = ('position:absolute;top:0px;left:0px;width:'+(this.dataObject.width-10)+'px;overflow:auto;font-size:12px;visibility:hidden;color:#FFFFFF;');
    textDiv.innerHTML = this.dataObject.titleText;
	
    $("#"+this.dataObject.divId).append(textDiv);
	
	var domText = new createjs.DOMElement(textDiv);
    domText.x = 12;
    domText.y = 5;

    this.addChild(domText);	
	
}

p.setBodyText = function(_text)
{
	var div = document.getElementById(this.dataObject.bodyCompId);
	div.innerHTML = _text;		
	
	if(this.dataObject.titleCompId == "" || this.dataObject.titleCompId == undefined)
	{
		this.bodyTextDOM.y = 15;
	}
	else
	{
		this.bodyTextDOM.y = 30;
	}
	
	this.getStage().update();
}

p.buildBodyText = function()
{
	
	
	 var textDiv = document.createElement("div");
    textDiv.id = this.dataObject.bodyCompId;
	textDiv.style.cssText = ('position:absolute;top:0px;left:0px;width:'+(this.dataObject.width-14)+'px;height:'+(this.dataObject.height-20)+'px;overflow:auto;font-size:12px;visibility:hidden;color:#000000;');
    textDiv.innerHTML = this.dataObject.bodyText;
		
    $("#"+this.dataObject.divId).append(textDiv);
	
	this.bodyTextDOM = new createjs.DOMElement(textDiv);
	
	this.bodyTextDOM.x = 18;
	
	
	if(this.dataObject.titleCompId == "" || this.dataObject.titleCompId == undefined)
	{
		this.bodyTextDOM.y = 15;
		
	}
	else
	{
		this.bodyTextDOM.y = 20;
	}
	
    this.addChild(this.bodyTextDOM);	
	
}

p.cleanUp = function()
{
	this.removeAllChildren();	
	stage.update();
}
