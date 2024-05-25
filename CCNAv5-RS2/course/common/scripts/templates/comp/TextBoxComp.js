var TextBoxComp = function(_txtObject)
{
    this.initiateComp(_txtObject);
}

var p = TextBoxComp.prototype = new createjs.Container();

p.initiateComp = function(_txtObject)
{
    //super class inheritance
    this.initialize();
	
    this.textObject = _txtObject;
    this.buidBackground();
}

p.buidBackground = function()
{	
	this.setTextBox();

	var _height = this.textObject.height + 10;
	
    if(this.textObject.type=="PLAIN")
    {
        var _shadow = new createjs.Shape();
        _shadow.graphics.beginFill(this.textObject.color).drawRoundRect(0,0,this.textObject.width,_height,5);
        _shadow.shadow = new createjs.Shadow("#000000",3,3,10);
        _shadow.x = _shadow.y = 0.5;
        this.addChild(_shadow);
		
		var _bg = new createjs.Shape();
        _bg.graphics.beginFill(this.textObject.color).drawRoundRect(0,0,this.textObject.width,_height,5);
        this.addChild(_bg);
    }
	
	this.x = this.textObject.x;
    this.y = this.textObject.y;
   
}

p.setTextBox = function()
{
    var textDiv = document.createElement("div");
    textDiv.id = this.textObject.compId;
	textDiv.style.cssText = ('position:absolute;top:0px;left:0px;width:'+(this.textObject.width-10)+'px;overflow:auto;font-size:11px;visibility:hidden;');
    textDiv.innerHTML = this.textObject.text;
	
    $("#"+this.textObject.divId).append(textDiv);
	
	var domText = new createjs.DOMElement(textDiv);
    domText.x = 15;
    domText.y = 5;

    this.addChild(domText);
}

p.setStyle = function(_style)
{
    if(_style)
    {
        var _div = document.getElementById(this.tagId);
        _div.style.cssText = _style;
    }
}

p.setTextContent = function(_content)
{
	
	
	
}
