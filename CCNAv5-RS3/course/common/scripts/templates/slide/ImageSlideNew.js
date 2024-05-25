var ImageSlideNew = function (_xmlData,_dataObject)
{
	this.initiateComp(_xmlData,_dataObject);
}

var p = ImageSlideNew.prototype = new createjs.Container();
		

p.slideStatus = function(_type)
{	 
	this.sType = _type; 
	switch(_type)
	{ 
		case "Table":
				var _scripts = ["../../../common/scripts/templates/comp/TableComp.js"];
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);	
		break;
		case undefined:
				console.log("You forgot to update the template type in slide "+_type);
		break;
	}
	 
	if(this.getStage()) this.getStage().update();
	 
}	

p.loadJSFiles = function(scripts, callback, _this)
{
	var loadCount = scripts.length;
	function done(){
		loadCount -=1;
		if (loadCount==0){ 
			callback(_this);
		}
	}
	
	for ( var i=0; i<scripts.length; i++){
		$.getScript(scripts[i], done);
	}
}

p.onLoadJavascript = function(_this)
{	

	switch(_this.sType)
	{
		case "Table":
				_this.buildTable(_this.xmlData,_this.dataObject.tables);
				//_this.slideContainer = new ImageSlideNew(_this.xmlData,_this.slideObject[_this.currentID]);
			break; 
		case undefined:
				console.log("You forgot to update the template type in slide "+_this.currentID);
			break;
	}
	// once more updating, in case of table. Basically written for future cases
	if(_this.getStage()) _this.getStage().update();
}

p.initiateComp = function(_xmlData,_dataObject)
{	

	//super class inheritance
	this.initialize();

	this.xmlData = _xmlData;
	this.dataObject = _dataObject;
	
	this.buildTextItems(_xmlData,_dataObject.texts);
	if(_dataObject.tables){
		this.slideStatus("Table");
		//this.buildTable(_xmlData,_dataObject.tables);
	}
	if(_dataObject.graphics)
	{
		this.buildGraphicsItems(_dataObject.graphics);
	}
	this.buildImageItems(_dataObject.images);
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
			_shape.graphics.setStrokeStyle(_array[i].lineWidth).beginStroke(_array[i].color).moveTo(_array[i].x,_array[i].y).lineTo(_array[i].x1,_array[i].y1);					           }
			this.addChild(_shape);
			_shape.depth = _array[i].depth;
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


p.buildImageItems = function(_array)
{	

	if(_array.length == 0) return;
	
	if(_array.length == 1)
	{
		var _image = new ImageComp();
		_image.x = _array[0].x;
		_image.y = _array[0].y;	
		
		//for scrollable image	
		if(_array[0].scrollable) _image.setScrollable(_array[0].scrollable,_array[0].divId);
			
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
	
	$("#flashContent").append('<div id="commonImageText"></div>');
	
	for(var i = 0;i<_array.length;i++)
	{
		compId = _array[i].compId;
		if(_array[i].bodyText == undefined)/* Adding text to the CompID */
		{
			_txt = $(_xmlData).find("component#"+compId).text();
		}
		else
        {
			_txt =  _array[i].bodyText;
		}
		//_txt = $(_xmlData).find("component#"+compId).text();
		_array[i].divId = "commonImageText";
		_array[i].compId = compId;
		_array[i].text = _txt;		
		_textComp = new TextComp(_array[i]);	
		this.addChild(_textComp);			
	}	
	
}
p.buildTable = function(_xmlData,_array)
{	
	
	if(_array.length == 0) return;
	
	$("#flashContent").append('<div id="temp_table"></div>');
		
	var compId;
	var _tableContent;
	var _tableComp;
		

	for(var i = 0;i<_array.length;i++)
	{		compId = _array[i].compId;
		
		_tableContent = $(_xmlData).find("component#"+compId).text();
		_array[i].text = _tableContent;
		_array[i].tagId = compId;
		_array[i].divId = "temp_table";
		
		_tableComp = new TableComp(_array[i]);
		
		this.addChild(_tableComp);
		_tableComp.setTable();
	}	
	
	var _this = this;		
	setTimeout(function(){_this.getStage().update();},100);
			
}
p.cleanUp = function()
{
	$("#commonImageText").remove();
	$("#temp_table").remove();
}