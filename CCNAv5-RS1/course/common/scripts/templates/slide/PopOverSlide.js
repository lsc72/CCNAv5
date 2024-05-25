/*loadScript("../../../common/scripts/templates/comp/TextComp.js");
loadScript("../../../common/scripts/templates/comp/ImageComp.js");
loadScript("../../../common/scripts/templates/comp/MultipleImageComp.js");*/


var PopOverSlide = function(_xmlData,_dataObject)
{
	this.initateComp(_xmlData,_dataObject);
		
}

var p = PopOverSlide.prototype = new createjs.Container();

p.initateComp = function(_xmlData,_dataObject)
{
	//super class inheritance
	this.initialize();
	
	this.xmlData = _xmlData;
	this.dataObject = _dataObject;
	
	this.popupContainer;
	
	this.hitContainer;
	
	this.hotspotCnt = -1;
	
	this.currentPop = null;
	
	this.buildImageItems(_dataObject.images);
	
	this.hotspotContainer = new createjs.Container();
	this.addChild(this.hotspotContainer);
	
	
	this.buildTextItems(_xmlData,_dataObject.texts);	
	
	this.buildHotspotItems(_dataObject.hotSpots);
	
	if(_dataObject.selected != null)
	{
		if(_dataObject.selected	!= -1)
		{
			this.hotImageClicked(this.hotspotContainer.getChildAt(_dataObject.selected));
		}
	}
	if(_dataObject.graphics)
	{
		this.buildGraphicsItems(_dataObject.graphics); 

	}
	
	for(var i=0;i<this.getNumChildren();i++)
	{
		if(typeof this.getChildAt(i).depth === "number")
		{
			this.swapChildren(this.getChildAt(i), this.getChildAt(this.getNumChildren()-1));

		}
	}
}
//Build Graphics Items
	

p.buildGraphicsItems = function(_array)
{
	var _shape;
	var _bgshape;

	for(var i = 0;i<_array.length;i++)
	{
		
		if(typeof _array[i].type == "undefined" || _array[i].type == "rectangle")
		{
			if(_array[i].shadow == "YES")
			{
				_bgshape = new createjs.Shape();
				_bgshape.graphics.beginFill('rgba(151,150,150,1)').drawRoundRect(_array[i].x-2,_array[i].y-2,_array[i].width+1,_array[i].height+1,_array[i].corner);
				_bgshape.shadow = new createjs.Shadow("#333333",1,1,4.2);
				_bgshape.x = _bgshape.y = .7;
				
				this.addChild(_bgshape);
				_bgshape.depth = _array[i].depth;
			}
			_shape = new createjs.Shape();
			_shape.graphics.setStrokeStyle(_array[i].thickness);
			_shape.graphics.beginStroke(_array[i].stroke);
			_shape.graphics.beginFill(_array[i].color).drawRoundRect(_array[i].x,_array[i].y,_array[i].width,_array[i].height,_array[i].corner);			
			this.addChild(_shape);			
			_shape.depth = _array[i].depth;
		}
		//for drawing a line 
		else if(_array[i].type == "line"){
			_shape = new createjs.Shape();
			if(typeof _array[i].color == "undefined"){
			_shape.graphics.setStrokeStyle(_array[i].lineWidth).beginStroke("#000000").moveTo(_array[i].x,_array[i].y).lineTo(_array[i].x1,_array[i].y1);
			}
			else{
			_shape.graphics.setStrokeStyle(_array[i].lineWidth).beginStroke(_array[i].color).moveTo(_array[i].x,_array[i].y).lineTo(_array[i].x1,_array[i].y1);			
			}
			var _d = _array[i].depth ? _array[i].depth : 0;
			this.addChildAt(_shape,_d);
			//this.setChildIndex(_shape,_array[i].depth);
			 
			if(this.getStage()) this.getStage().update();
			
			//_shape.depth = _array[i].depth;
		}
		// for drawing a cirlce
		else if(_array[i].type == "circle"){
			_shape = new createjs.Shape();
			_shape.graphics.beginFill(_array[i].bgcolor);
			_shape.graphics.setStrokeStyle(_array[i].lineWidth).beginStroke(_array[i].borderColor).drawCircle(_array[i].centerX,_array[i].centerY, _array[			i].radius);
			this.addChild(_shape);
			_shape.depth = _array[i].depth;
		}

		
		// for drawing a cirlce
		else if(_array[i].type == "border"){
			var style = ('position:absolute;top:0px;left:0px;overflow:auto;border:1px solid;width:'+_array[i].width+'px;height:'+_array[i].height+'px;');
			var textDiv = document.createElement("div");	
			textDiv.style.cssText = style;
			textDiv.id = _array[i].div;
			$("#commonImageText").append(textDiv);
			var domText = new createjs.DOMElement(textDiv);
			this.addChild(domText);
			domText.x = _array[i].x;
			domText.y = _array[i].y

		}
		else if(_array[i].type == "arrow"){
			this.ArrowComp(_array[i]);			
		}
			
	}
	if(this.getStage()) this.getStage().update();
}
p.ArrowComp = function (d) 
{	
	var t = this;
	var a,c,e,w,h,l;
	l = d.length ? d.length : 10;
	c = d.color ? d.color : "#000";
	e = d.thickness ? d.thickness : 2;
	w = e == 2 ? 7 : 10;
	h = e == 2 ? 3 : 4;
	h=h+0.5;
	a = new createjs.Shape();
	a.depth = d.depth;
	a.graphics.setStrokeStyle(e/4);
	a.graphics.beginStroke(c);
	a.graphics.beginFill(c);
	a.graphics.moveTo(0,0);
	a.graphics.lineTo(0,0);
	a.graphics.lineTo(w,h);
	a.graphics.lineTo(w/2,0);
	a.graphics.lineTo(w,-h);
	a.graphics.lineTo(-1.5,0);
	a.graphics.setStrokeStyle(e);
	a.graphics.moveTo(w/2,0);
	a.graphics.lineTo(l,0);
	a.graphics.endFill();
	
	t.addChild(a);
	
	if(d.rotation) a.rotation = d.rotation;
	
	a.x = d.x;
	a.y = d.y;
};

p.buildHotspotItems = function(_array)
{
	if(this.hotspotCnt < this.dataObject.hotSpots.length-1)
	{	
		this.hotspotCnt ++;
		
		var _this = this;		
		this.hitContainer = new createjs.Container();
		this.hotspotContainer.addChild(this.hitContainer);
		
		if(this.dataObject.hotSpots[this.hotspotCnt].hotImage)
		{
			var hotspotImage = new Image();
			hotspotImage.onload = function(ev){_this.hotImageLoaded(ev)};
			hotspotImage.src = this.dataObject.hotSpots[this.hotspotCnt].hotImage;		
		}
		else
		{
			this.createHitArea();
		}
	}
}

p.createHitArea = function()
{	
	var _this = this;
	var hitarea;
	if(this.dataObject.hotSpots[this.hotspotCnt].rollOverImage)
	{		
		hitarea = new createjs.Bitmap(this.dataObject.hotSpots[this.hotspotCnt].rollOverImage.name);
		hitarea.alpha = 0.01;
	}else
	{
		hitarea = new createjs.Shape();
		hitarea.graphics.beginFill("#000").drawRect(0,0,this.dataObject.hotSpots[this.hotspotCnt].width,this.dataObject.hotSpots[this.hotspotCnt].height);
		hitarea.alpha = 0.01;
	}
	this.hitContainer.name = this.hotspotCnt;
	
	this.hitContainer.addChild(hitarea);
	this.hitContainer.x = this.dataObject.hotSpots[this.hotspotCnt].x;
	this.hitContainer.y = this.dataObject.hotSpots[this.hotspotCnt].y;	
	
		
	this.hitContainer.onMouseOver = function(){
		document.body.style.cursor='pointer';
		if(_this.dataObject.hotSpots[_this.hotspotCnt].rollOverImage)
		{			
			hitarea.alpha = 1;
			_this.getStage().update();
		}
	};
	this.hitContainer.onMouseOut = function(){
		if(_this.dataObject.hotSpots[_this.hotspotCnt].rollOverImage)
		{
			hitarea.alpha = 0.01;
			_this.getStage().update();
		}
		document.body.style.cursor='default';
	};
	this.hitContainer.onPress = function()
	{ 
		_this.hotImageClicked(this);
	}
	
	var _hit = this.hitContainer;
	
	if(this.dataObject.hotSpots[this.hotspotCnt].div)
	{
		for(var i = 0;i<this.dataObject.hotSpots[this.hotspotCnt].div.length;i++)
		{
			$("#"+this.dataObject.hotSpots[this.hotspotCnt].div[i]).click(function(){				
				//_this.hotImageClicked(_this.hitContainer);
				_this.hotImageClicked(_hit);
			});			
		}
	}
	this.buildHotspotItems();
}

p.hotImageLoaded = function(ev)
{
	alert(ev.target);
	
	var _bitmap = new createjs.Shape();
	_bitmap.graphics.beginBitmapFill(ev.target,"no-repeat").drawRect(0,0,ev.target.width,ev.target.height);
		
	this.hitContainer.addChild(_bitmap,hitarea);
	this.createHitArea();
			
	this.buildHotspotItems();
	
	if(this.getStage()) this.getStage().update();
}

p.hotImageClicked = function(target)
{ 
	if(this.currentPop && (this.currentPop == target)) return;
	if(this.popupContainer){
		 this.popupContainer.removeAllChildren();
		 this.removeChild(this.popupContainer);	
		 this.popupContainer = null;	
	}
	this.currentPop = target;
	
	this.popupContainer = new createjs.Container();		
	this.addChild(this.popupContainer);
	
	
		
	if(this.dataObject.hotSpots[target.name].grayBG)
	{
		var _gr = new createjs.Shape();
		_gr.graphics.beginFill("#FFF").drawRect(0,0,this.dataObject.hotSpots[target.name].grayBG.width,this.dataObject.hotSpots[target.name].grayBG.height);
		_gr.alpha = 0.5;
		this.popupContainer.addChild(_gr);
	}	
	 
	if(this.dataObject.hotSpots[target.name].popupImage)
	{
		var _image = new ImageComp();
		_image.x = this.dataObject.hotSpots[target.name].popupImage.x;
		_image.y = this.dataObject.hotSpots[target.name].popupImage.y;			
		_image.setScale(this.dataObject.hotSpots[target.name].popupImage.width,this.dataObject.hotSpots[target.name].popupImage.height);	
		_image.setImageType("");
		_image.loadImage(this.dataObject.hotSpots[target.name].popupImage.name);
		this.popupContainer.addChild(_image);
		
		_image.onMouseOver = function(){};
	}
	 
	if(this.dataObject.hotSpots[target.name].popupImage2 && (typeof(this.dataObject.hotSpots[target.name].popupImage2.name) != "undefined"))
	{ 
		var _image = new ImageComp();
		_image.x = this.dataObject.hotSpots[target.name].popupImage2.x;
		_image.y = this.dataObject.hotSpots[target.name].popupImage2.y;			
		_image.setScale(this.dataObject.hotSpots[target.name].popupImage2.width,this.dataObject.hotSpots[target.name].popupImage2.height);	
		 
		_image.setImageType("");
		 
		_image.loadImage(this.dataObject.hotSpots[target.name].popupImage2.name);
		this.popupContainer.addChild(_image);
		 
	}
	
	$("#commonPopText").remove();
	$("#flashContent").append('<div id="commonPopText"></div>');
		
	if(this.dataObject.hotSpots[target.name].popupText)
	{
				
		var compId = this.dataObject.hotSpots[target.name].popupText.compId;
		var _txt = $(this.xmlData).find("component#"+compId).text();		
		this.dataObject.hotSpots[target.name].popupText.divId = "commonPopText";
		this.dataObject.hotSpots[target.name].popupText.compId = compId;
		this.dataObject.hotSpots[target.name].popupText.text = _txt;		
		_textComp = new TextComp(this.dataObject.hotSpots[target.name].popupText);			
		this.popupContainer.addChild(_textComp);		
	}
	 
	if(this.dataObject.hotSpots[target.name].popupText2)
	{
					
		var compId = this.dataObject.hotSpots[target.name].popupText2.compId;
		var _txt = $(this.xmlData).find("component#"+compId).text();		
		this.dataObject.hotSpots[target.name].popupText2.divId = "commonPopText";
		this.dataObject.hotSpots[target.name].popupText2.compId = compId;
		this.dataObject.hotSpots[target.name].popupText2.text = _txt;
		_textComp = new TextComp(this.dataObject.hotSpots[target.name].popupText2);	
		this.popupContainer.addChild(_textComp);
	}	
	
	if(this.dataObject.hotSpots[target.name].closeBtn)
	{
		var closeBtn = new createjs.Bitmap("../../../common/images/closeBtn.jpg");
		closeBtn.x = this.dataObject.hotSpots[target.name].closeBtn.x;
		closeBtn.y = this.dataObject.hotSpots[target.name].closeBtn.y;
		var _t = this;	
		var _tar = target;
		closeBtn.onPress = function(){		
			_t.currentPop = null;
			_t.popupContainer.removeAllChildren();
			$("#commonPopText").remove();
			if(_t.dataObject.hotSpots[_tar.name].hideText)
			{
				for(var i = 0;i<_t.dataObject.hotSpots[_tar.name].hideText.length;i++)
				{
					$("#"+_t.dataObject.hotSpots[_tar.name].hideText[i]).show();					
				}				
			}
			if(_t.dataObject.hotSpots[_tar.name].greyText)
			{
			for(var i = 0;i<_t.dataObject.hotSpots[target.name].greyText.length;i++)
				{
				$("#"+_t.dataObject.hotSpots[target.name].greyText[i]).css("color","#393536");
				}
			}
			if(_t.getStage()) _t.getStage().update();
		}
		this.popupContainer.addChild(closeBtn);
		
		if(this.dataObject.hotSpots[target.name].hideText)
		{
			for(var i = 0;i<this.dataObject.hotSpots[target.name].hideText.length;i++)
			{
				
				$("#"+this.dataObject.hotSpots[target.name].hideText[i]).hide();
			}
		}
		
		if(this.dataObject.hotSpots[target.name].greyText)
		{
			for(var i = 0;i<this.dataObject.hotSpots[target.name].greyText.length;i++)
			{
			$("#"+this.dataObject.hotSpots[target.name].greyText[i]).css("color","#a6a4a4");
			}
		}
	}
	
	if(this.getStage()) this.getStage().update();
}

p.buildImageItems = function(_array)
{	

	if(_array.length == 0) return;
	
	if(_array.length == 1)
	{
		var _image = new ImageComp();
		_image.x = _array[0].x;
		_image.y = _array[0].y;			
		_image.setScale(_array[0].width,_array[0].height);	
		_image.setImageType(_array[0].type);
		_image.loadImage(_array[0].name);
		this.addChild(_image);		
	}
	else
	{
		var multiImageComp = new MultipleImageComp(_array);
		this.addChild(multiImageComp);	
	}
	
}

p.buildTextItems = function(_xmlData,_array)
{	
	if(_array.length == 0) return;
		
	var compId;
	var _txt;
	var _textComp;
	
	$("#flashContent").append('<div id="commonImagePopoverText"></div>');
	
	for(var i = 0;i<_array.length;i++)
	{
		compId = _array[i].compId;
		_txt = $(_xmlData).find("component#"+compId).text();
		_array[i].divId = "commonImagePopoverText";
		_array[i].compId = compId;
		_array[i].text = _txt;		
		_textComp = new TextComp(_array[i]);	
		this.addChild(_textComp);			
	}	
	
}

p.cleanUp = function()
{
	$("#commonImagePopoverText").remove();
	$("#commonPopText").remove();
}