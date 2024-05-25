
var ButtonComp = function(_styleObject,_buttonObject)
{
	this.initiateComp(_styleObject,_buttonObject);
}

var p = ButtonComp.prototype = new createjs.Container();

p.initiateComp = function(_styleObject,_buttonObject)
{	
	//super class inheritance
	this.initialize();
		
	this.styleObject = _styleObject;
	this.buttonObject = _buttonObject;
	
	this.labelDiv;
	
	this.selected = false;
	
	this.normalStateContainer = new createjs.Container();
	this.addChild(this.normalStateContainer);
	
	this.overStateContainer = new createjs.Container();
	this.addChild(this.overStateContainer);
	
	this.buildAssets();
}

p.buildAssets = function()
{
	
	this.loadAssets("NORMAL");
		
	this.loadAssets("OVER");
	
	//this.addButtonLabel();
	
	if(this.styleObject.cornorRadius > 0)
	{
		var _maskShape = new createjs.Shape();
		_maskShape.graphics.beginFill().drawRoundRect(0,0,this.buttonObject.width,this.buttonObject.height,this.styleObject.cornorRadius);
		this.addChild(_maskShape);
		
		this.normalStateContainer.mask = _maskShape;
		this.overStateContainer.mask = _maskShape;		
	}
	
	this.overStateContainer.visible = false;
	
	var _hitShape = new createjs.Shape();
	_hitShape.graphics.beginFill().drawRect(0,0,this.buttonObject.width,this.buttonObject.height);
	this.addChild(_hitShape);
	
	this.onMouseOver = this.mouseOverHandler;
	this.onMouseOut = this.mouseOutHandler;
	this.onClick = this.onClickHandler;
}

p.mouseOverHandler = function(ev)
{
	document.body.style.cursor='pointer';
	this.normalStateContainer.visible = false;
	this.overStateContainer.visible = true;
	this.setButtonStyle("OVER");	
	this.getStage().update();
}

p.mouseOutHandler = function(ev)
{
	document.body.style.cursor='default';
	
	this.overStateContainer.visible = this.selected;	
	this.setSelected(this.selected);
	this.getStage().update();	
	
	
}

p.onClickHandler = function(ev)
{
	
	this.selected = true;
	this.overStateContainer.visible = true;
	this.parent.callBackFromButton(this.id);
}

p.setSelected = function(_boo)
{
	this.selected = _boo;
	this.normalStateContainer.visible = !this.selected;
	this.overStateContainer.visible = this.selected;	
	if(this.selected)
	{
		this.setButtonStyle("OVER");
	}
	else
	{
		this.setButtonStyle("NORMAL");
	}
	if(this.getStage()) this.getStage().update();
}

p.loadAssets = function(_state)
{
	var _this = this;	
	var _container;
	var _image  = new Image();
	if(_state == "NORMAL")
	{
		_container = this.normalStateContainer;
		_image.src = this.styleObject.normalSkinImage;
		
		/*if(this.styleObject.normalSkinImage == "../../../common/images/text_button_gradient.png")
		{
			_image.src = "../../../common/images/datagrid-bg.png";//this.styleObject.normalSkinImage;	
		}
		else
		{
			_image.src =this.styleObject.normalSkinImage;
		}*/
	}
	else if(_state == "OVER")
	{
		_container = this.overStateContainer;
		_image.src = this.styleObject.overSkinImage;
		/*if(this.styleObject.normalSkinImage == "../../../common/images/text_button_gradient_selected.png")
		{
			_image.src = "../../../common/images/datagrid-bg2.png";//this.styleObject.overSkinImage;	
		}
		else
		{
			_image.src =this.styleObject.overSkinImage;
		}*/
		
	}	
	_image.onload = function(ev)
					{
						if(_container == _this.overStateContainer) _this.addButtonLabel();
						
						_this.attachAssets(this,_container,_state);
					}	
}

p.attachAssets = function(_image,_container,_state)
{
	
	var normalShape = new createjs.Shape();
	var _y = 0;
	//if(_state == "OVER") _y = -10;
	normalShape.graphics.beginBitmapFill(_image,"repeat-y").drawRect(0,_y,_image.width,_image.height);
	_container.addChild(normalShape);
	
	/*
	//Load button label
	if(this.buttonObject.height < 30)
	{
		normalShape.scaleY = 0.75;
	}
	normalShape.scaleX = 1;	
	
	*/
	
	normalShape.scaleX = (this.buttonObject.width/_image.width);
	normalShape.scaleY = (this.buttonObject.height/_image.height);
		
	//set positioning
	this.x = this.buttonObject.x;
	this.y = this.buttonObject.y;
	
	if(this.getStage()) this.getStage().update();
	
}

p.setButtonStyle = function(_type)
{
	var color;
	
	if(_type == "OVER")
	{
		color = this.styleObject.overTextStyle;
		//$("#"+this.buttonObject.txtId).css("color","white");
		
	}
	else if(_type == "NORMAL")
	{
		color = this.styleObject.normalTextStyle;
		//$("#"+this.buttonObject.txtId).css("color","black");
	}
	
	$("#"+this.buttonObject.txtId).css("color",color);
	
}

p.addButtonLabel = function()
{
	
	var color = this.styleObject.normalTextStyle;
	//var align = this.
	
	if(this.id == 0) color = this.styleObject.overTextStyle;
	
	var textDiv = document.createElement("div");		
	textDiv.style.cssText = ('position:absolute;top:0px;left:0px;overflow:auto;font-size:'+this.buttonObject.size+'px;visibility:hidden;color:'+color+';cursor:pointer;text-align:'+this.buttonObject.textAlign+';width:'+this.buttonObject.width+'px;');
	textDiv.id = this.buttonObject.txtId;
	textDiv.innerHTML = this.buttonObject.text;
	
	$("#"+this.buttonObject.divId).append(textDiv);	
	var _this = this;
	$("#"+this.buttonObject.txtId).click(function(){
		//alert(_this);
			_this.onClickHandler();
		});
		
	
	var domText = new createjs.DOMElement(textDiv);
	
	var _xValue = 0;
	var _yValue = 0;
	var _width = $("#"+this.buttonObject.txtId).width();
	var _height = $("#"+this.buttonObject.txtId).height();
	_yValue = (this.buttonObject.height - _height)/2;
	
	if(this.buttonObject.textAlign == "center")
	{
		_xValue = ((this.buttonObject.width - _width)/2);
		//_xValue = this.buttonObject.x +((this.buttonObject.width -this.buttonObject.x - _width)/2);		
		
	}
	else if(this.buttonObject.textAlign == "right")
	{
		_xValue = (this.buttonObject.width - _width);
	}
	
	domText.x =  8;
	domText.y =	_yValue;
	
	this.addChild(domText);
	
	if(this.getStage()) this.getStage().update();
	
}

