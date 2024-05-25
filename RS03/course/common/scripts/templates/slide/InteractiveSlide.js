/*loadScript("../../../common/scripts/templates/comp/TextComp.js");
loadScript("../../../common/scripts/templates/comp/ImageComp.js");
loadScript("../../../common/scripts/templates/comp/MultipleImageComp.js");
loadScript("../../../common/scripts/templates/comp/OnOff.js");*/

var InteractiveSlide = function (_xmlData,_dataObject)
{
    this.initiateComp(_xmlData,_dataObject);
}
var p = InteractiveSlide.prototype = new createjs.Container();

p.initiateComp = function(_xmlData,_dataObject)
{
	//super class inheritance
    this.initialize();
	
	this.dataObject = _dataObject;
	this.xmlData = _xmlData;
	if(_dataObject.slideObject.graphics)
	{
		this.buildGraphicItems(_dataObject.slideObject.graphics);
	}
	this.buildImageItems(_dataObject.slideObject.images);
	this.buildTextItems(_xmlData,_dataObject.slideObject.texts);
	
	if(this.dataObject.slideObject.type)
	{
		if(this.dataObject.slideObject.type == "ON_OFF")
		{
			 
			this.onoff = new OnOff(_xmlData,_dataObject.slideObject);
			this.addChild(this.onoff);
		}	
		else 
		{				
			var activity = new Activity(_xmlData,_dataObject.slideObject);
			this.addChild(activity);
		}
	}
	if(this.getStage()) this.getStage().update();
}

p.buildGraphicItems = function(_array)
{
	var rect,cor;
	for(var i = 0;i<_array.length;i++)
    {
		cor = _array[i].corner ? _array[i].corner : 0;
		
		if(_array[i].type == "rectangle")
		{
			rect = new createjs.Shape();
			rect.graphics.beginFill(_array[i].color).drawRoundRect(_array[i].x,_array[i].y,_array[i].width,_array[i].height,cor);
			this.addChild(rect);					
		}
		
	};
	
	if(this.getStage()) this.getStage().update();
}

p.buildImageItems = function(_array)
{

    if(_array.length == 0) return;
    if(_array.length == 1)
    { 
        var _imageComp = new ImageComp();
        _imageComp.x = _array[0].x;
        _imageComp.y = _array[0].y;
        _imageComp.setScale(_array[0].width,_array[0].height);
        _imageComp.setImageType(_array[0].type);
        _imageComp.loadImage(_array[0].name);
        this.addChild(_imageComp);
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
	
	$("#flashContent").append('<div id="commonInterText"></div>');

    for(var i = 0;i<_array.length;i++)
    {
        compId = _array[i].compId;
		if(_array[i].text)/* Adding text to the CompID */
		{
			_txt =  _array[i].text;
		}
		else
        {
			_txt = $(_xmlData).find("component#"+compId).text();
			
		}
		_array[i].divId = "commonInterText";
		_array[i].compId = compId;
		_array[i].text = _txt;
		
        _textComp = new TextComp(_array[i]);
        this.addChild(_textComp);

    }
}

p.cleanUp = function()
{
	if($("#canvasDiv")){$("#canvasDiv").remove()};
	if($("#animeText")){$("#animeText").remove()};
	$("#commonInterText").remove();
	createjs.Ticker.removeListener(this.getStage());
}
