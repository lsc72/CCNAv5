//Load required object files
loadScript("../../../common/scripts/templates/comp/TextComp.js");
loadScript("../../../common/scripts/templates/comp/ImageComp.js");
loadScript("../../../common/scripts/templates/comp/MultipleImageComp.js");
loadScript("../../../common/scripts/templates/comp/AnimationComp.js");

var AnimationSlide = function (_xmlData,_dataObject)
{
    this.initiateComp(_xmlData,_dataObject);
}

var p = AnimationSlide.prototype = new createjs.Container();

p.initiateComp = function(_xmlData,_dataObject)
{
    //super class inheritance
    this.initialize();
    
	this.buildAnimationItems(_xmlData,_dataObject.animations);
	this.buildImageItems(_dataObject.images);
	this.buildTextItems(_xmlData,_dataObject.texts);

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

p.buildAnimationItems = function(_xmlData,_array)
{
	if(_array.length == 0) return;
	
	var animComp;
	
	for(var i = 0;i<_array.length;i++)
    {
    	animComp = new AnimationComp(_xmlData,_array[i]);
		this.addChild(animComp);
	}
}

p.buildTextItems = function(_xmlData,_array)
{
    if(_array.length == 0) return;

    var compId;
    var _txt;
    var _textComp;
	
	$("#flashContent").append('<div id="commonAnimationText"></div>');

    for(var i = 0;i<_array.length;i++)
    {
        compId = _array[i].compId;
        _txt = $(_xmlData).find("component#"+compId).text();
		_array[i].divId = "commonAnimationText";
		_array[i].compId = compId;
		_array[i].text = _txt;
		
        _textComp = new TextComp(_array[i]);
        this.addChild(_textComp);

    }
}

p.cleanUp = function()
{
	if($("#animeText")){$("#animeText").remove()};
	$("#commonAnimationText").remove();
	createjs.Ticker.removeListener(this.getStage());
}
