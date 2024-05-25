
var BarButtonComp = function(_id)
{
	this.initiateComp(_id);
}

var p = BarButtonComp.prototype = new createjs.Container();

p.initiateComp = function(_id)
{	
	
	this.buttonId = _id < 10 ? ("0"+_id) : _id;
	
	//super class inheritance
	this.initialize();
			
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
	
	this.overStateContainer.visible = false;
		
	this.onMouseOver = this.mouseOverHandler;
	this.onMouseOut = this.mouseOutHandler;
	this.onClick = this.onClickHandler;
}

p.mouseOverHandler = function(ev)
{
	document.body.style.cursor='pointer';
	this.overStateContainer.visible = true;	
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
	this.parent.parent.callBackFromButton(parseInt(this.buttonId-1));
}

p.setSelected = function(_boo)
{
	this.selected = _boo;
	this.overStateContainer.visible = this.selected;	
	
	if(this.getStage()) this.getStage().update();
}

p.loadAssets = function(_state)
{
	
	
	var _this = this;	
	var _container;
	var _name;
	var _image  = new Image();
	
	if(_state == "NORMAL")
	{
		_container = this.normalStateContainer;		
		_name = "../../../common/images/btn"+this.buttonId+"_sel.png";
		_image.src = _name;
	}
	else if(_state == "OVER")
	{
		_container = this.overStateContainer;
		_name = "../../../common/images/btn"+this.buttonId+".png";
		_image.src = _name;
			
	}	
	_image.onload = function(ev)
					{
						_this.attachAssets(this,_container);
					}	
}

p.attachAssets = function(_image,_container)
{
	var normalShape = new createjs.Shape();
	normalShape.graphics.beginBitmapFill(_image,"no-repeat").drawRect(0,0,_image.width,_image.height);
	_container.addChild(normalShape);
		
	if(this.getStage()) this.getStage().update();
	
}
