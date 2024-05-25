var TextComp = function(_txtObject)
	{
		this.initiateComp(_txtObject);
	}
	
	var p = TextComp.prototype = new createjs.Container();
	
	p.initiateComp = function(_txtObject)
	{
		//super class inheritance
		this.initialize();
		
		this.textObject = _txtObject;
		this.buildTextDiv();
	}
	
	p.buildTextDiv = function()
	{	
		var color = this.textObject.color == undefined ? "#393536" : this.textObject.color;
		var align = this.textObject.textAlign == undefined ? "left" : this.textObject.textAlign;	
		var width = this.textObject.width == undefined ? "auto" : this.textObject.width+"px";
		var shadow = this.textObject.shadow == undefined ? "auto" : this;
		var shadowColor = this.textObject.shadowColor == undefined ? "#000" : this.textObject.shadowColor;
		var rotation = this.textObject.rotation == undefined ? "0" : this.textObject.rotation;
		//var height = this.textObject.height == undefined ? "auto" : this.textObject.height+"px";/* Added Height attributes */
		
		var style = ('position:absolute;top:0px;left:0px;width:'+width+';overflow:auto;font-size:'+this.textObject.size+'px;visibility:hidden;color:'+color+';text-align:'+align+';word-wrap:break-word;');
		//var style = ('position:absolute;top:0px;left:0px;width:'+width+';height:'+height+';overflow:auto;font-size:'+this.textObject.size+'px;visibility:hidden;color:'+color+';text-align:'+align+';');
		
		
		if( this.textObject.shadow != undefined && this.textObject.shadow != "NO")
		{
			style += 'text-shadow:-1px 2px 2px'+shadowColor+',-2px -1px 2px'+shadowColor+',-2px -1px 2px'+shadowColor+',2px 2px 3px'+shadowColor+',2px 2px 3px'+shadowColor+',2px 2px 3px'+shadowColor+';filter: progid:DXImageTransform.Microsoft.Shadow(color=#2C2C2C,direction=45,strength=2);';
		}
		
		var textDiv = document.createElement("div");		
		textDiv.style.cssText = style;
		textDiv.id = this.textObject.compId;
		
		textDiv.innerHTML = this.textObject.text;		
		
   		$("#"+this.textObject.divId).append(textDiv);
		
		var domText = new createjs.DOMElement(textDiv);
		
		if(this.textObject.rotation!=0)
		{
			domText.rotation = this.textObject.rotation;
		}
		
		//textDiv.shadow = new createjs.Shadow("#666666",3,3,10);
		this.addChild(domText);
		
		if(this.textObject.expand)
		{
			this.expansion();
		}
		else
		{
			this.x = this.textObject.x;
			this.y = this.textObject.y;
		}
				
	}
	
p.expansion = function()
{
	var textHeight = $("#"+this.textObject.compId).height();
	var textWidth = $("#"+this.textObject.compId).width();
	
	switch(this.textObject.expand)
	{
		case "up+down":
				this.x = this.textObject.x - 10;
				this.y = this.textObject.y - (textHeight/2) + 8;				
			break;	
		
		case "down":
				this.x = this.textObject.x;
				this.y = this.textObject.y;
			break;
			
		case "up":
				this.x = this.textObject.x;
				this.y = this.textObject.y - textHeight + 12;
			break;
			
		case "left":
				this.x = this.textObject.x - 12;
				this.y = this.textObject.y;
			break;
		
		case "right":
				this.x = this.textObject.x - textWidth + this.textObject.width + 6;
				this.y = this.textObject.y;
			break;
		
		case "left+right":
				if(textWidth>this.textObject.width)
				{
					this.x = this.textObject.x - ((textWidth - this.textObject.width)/2);
				}
				else
				{
					this.x = this.textObject.x + ((this.textObject.width - textWidth)/2);
				}
				this.y = this.textObject.y;
			break;
			
		default:
				this.x = this.textObject.x;
				this.y = this.textObject.y;
			break;
		
	}
	
}

p.setText = function(_txt)
{
	var div = document.getElementById(this.textObject.compId);
	div.innerHTML = _txt;
}
