
function AnimationComp(_xmlData,_dataObject)
{	
	this.initiateComp(_xmlData,_dataObject);				
}

var p = AnimationComp.prototype = new createjs.Container();

p.initiateComp = function(_xmlData,_dataObject)
{
	//super class inheritance
	this.initialize();

	this.animation = null;
	this.dataObject = _dataObject;
	this.xmlData = _xmlData;
	this.init();	
}
	
p.init = function()
{	
	this.animation = new Animation();
	this.addChild(this.animation);	
	
	this.animation.getXMLData(this.xmlData);
	this.animation.loadAnimation(this.dataObject.id);
	
	if(this.dataObject.type == "STD")
	{
		this.showStandardBg();
	}
	
	this.x = this.dataObject.x;
	this.y = this.dataObject.y;		
	
}


p.showStandardBg = function()
{
	//For Shadow Effect
	var _shadow = new createjs.Shape();
	_shadow.graphics.beginFill('#FFFFFF').drawRoundRect(0,0,this.dataObject.width,this.dataObject.height,8);
	_shadow.shadow = new createjs.Shadow("#000000",3,3,10);
	_shadow.x = _shadow.y = 0.5;
	_shadow.scaleX = _shadow.scaleY = 0.99;
	this.addChild(_shadow);
	
	//Get image shape child
	var _animationShape = this.getChildAt(0);
	this.swapChildren(_animationShape,_shadow);
	
	//For Mask 
	var _mask = new createjs.Shape();
	_mask.graphics.beginFill().drawRoundRect(0,0,this.dataObject.width,this.dataObject.height,8);			
	this.addChild(_mask);			
	_animationShape.mask = _mask;	
		
}

p.toString = function()
{
	return '[AnimationComp '+this.name +']';
}


