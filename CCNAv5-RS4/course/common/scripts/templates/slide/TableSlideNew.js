// JavaScript Document

/*loadScript("../../../common/scripts/templates/comp/ImageComp.js");
loadScript("../../../common/scripts/templates/comp/MultipleImageComp.js");
loadScript("../../../common/scripts/templates/comp/TextComp.js");
loadScript("../../../common/scripts/templates/comp/TableComp.js");*/

var TableSlideNew = function (_xmlData,_dataObject)
{
	this.initiateComp(_xmlData,_dataObject);
	
}

var p = TableSlideNew.prototype = new createjs.Container();
		
p.initiateComp = function(_xmlData,_dataObject)
{	
	//super class inheritance
	this.initialize();
	this.buildTable(_xmlData,_dataObject.tables);	
	
	if(_dataObject.images)
	{	
		this.buildImageItems(_dataObject.images);
	}
	
	
	
	this.buildTextItems(_xmlData,_dataObject.texts);
	if(_dataObject.graphics)
	{
		this.buildGraphicsItems(_dataObject.graphics);
			
	}
}

p.buildGraphicsItems = function(_array)
{
	var _shape;
	for(var i = 0;i<_array.length;i++)
	{
		_shape = new createjs.Shape();
		_shape.graphics.setStrokeStyle(_array[i].thickness);
		_shape.graphics.beginStroke(_array[i].stroke);
		_shape.graphics.beginFill(_array[i].color).drawRoundRect(_array[i].x,_array[i].y,_array[i].width,_array[i].height,_array[i].corner);
		this.addChild(_shape);
		
		if(_array[i].type == "arrow"){
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
	
	$("#flashContent").append('<div id="temp_table_text"></div>');
	
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
		_array[i].divId = "temp_table_text";
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
	$("#temp_table_text").remove();
	$("#temp_table").remove();
}