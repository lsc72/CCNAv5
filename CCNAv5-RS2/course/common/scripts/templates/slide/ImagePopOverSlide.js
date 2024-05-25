loadScript("../../../common/scripts/templates/comp/TextComp.js");
loadScript("../../../common/scripts/templates/comp/ImageComp.js");
loadScript("../../../common/scripts/templates/comp/MultipleImageComp.js");
loadScript("../../../common/scripts/templates/comp/DraggableTextBoxComp.js");


var ImagePopOverSlide = function(_xmlData,_dataObject)
{
	this.initateComp(_xmlData,_dataObject);	
}

var p = ImagePopOverSlide.prototype = new createjs.Container();

p.initateComp = function(_xmlData,_dataObject)
{
	//super class inheritance
	this.initialize();
	
	this.xmlData = _xmlData;
	this.dataObject = _dataObject;
	
	this.popupContainer;
	
	
	this.hotspotCnt = -1;
	
	this.buildImageItems(_dataObject.images);
	
	this.hotspotContainer = new createjs.Container();
	this.addChild(this.hotspotContainer);
	
	this.buildHotspotItems(_dataObject.hotSpots);
	
	this.buildTextItems(_xmlData,_dataObject.texts);		
}

p.buildHotspotItems = function(_array)
{
	if(this.hotspotCnt < this.dataObject.hotSpots.length-1)
	{	
		this.hotspotCnt ++;
		
		var _this = this;
		
		var hotspotImage = new Image();
		hotspotImage.onload = function(ev){_this.hotImageLoaded(ev)};
		hotspotImage.src = this.dataObject.hotSpots[this.hotspotCnt].name;		
	}
}

p.hotImageLoaded = function(ev)
{
	
	
	
	var hitarea = new createjs.Shape();
	hitarea.graphics.beginFill("#000").drawRect(0,0,ev.target.width,ev.target.height);
	hitarea.alpha = 0.01;
	
	var _bitmap = new createjs.Shape();
	_bitmap.graphics.beginBitmapFill(ev.target,"no-repeat").drawRect(0,0,ev.target.width,ev.target.height);
		
	var _this = this;
	var hitContainer = new createjs.Container();
	hitContainer.addChild(_bitmap,hitarea);
	hitContainer.x =  this.dataObject.hotSpots[this.hotspotCnt].x;
	hitContainer.y =  this.dataObject.hotSpots[this.hotspotCnt].y;
	
	console.log(this.dataObject.hotSpots[this.hotspotCnt].x +" ---- "+this.hotspotCnt);
	
	hitContainer.name = this.hotspotCnt;	
	
	this.hotspotContainer.addChild(hitContainer);
	
	hitContainer.onMouseOver = function(){document.body.style.cursor='pointer';};
	hitContainer.onMouseOut = function(){document.body.style.cursor='default';};
	hitContainer.onPress = function()
	{
		_this.hotImageClicked(this);
	}
	
	this.buildHotspotItems();
	
	if(this.getStage()) this.getStage().update();
}

p.hotImageClicked = function(target)
{
	if(this.popupContainer) this.popupContainer.removeAllChildren();
	this.hotspotContainer.visible = false;
	$("#ID_sub_inst").hide();
	
	var bg = new createjs.Shape();
	bg.graphics.beginFill("#FFF").drawRect(0,0,430,400);
	bg.alpha = 0.5;
	
	this.popupContainer = new createjs.Container();
	this.popupContainer.addChild(bg);
	this.addChild(this.popupContainer);
	
	var _image = new Image();
	var _this = this;
	_image.onload = function(ev){_this.showPopup(ev,target.name)};
	_image.src = this.dataObject.hotSpots[target.name].popupImage;
	
	
	
	if(this.getStage()) this.getStage().update();
}

p.showPopup = function(_image,_id)
{
	
	var _bitmap = new createjs.Bitmap(_image.target);
	_bitmap.x = this.dataObject.hotSpots[_id].popupImageX;
	_bitmap.y = this.dataObject.hotSpots[_id].popupImageY;
	this.popupContainer.addChild(_bitmap);
	
	var _this = this;
	_bitmap.onMouseOver = function(){document.body.style.cursor='pointer';};
	_bitmap.onMouseOut = function(){document.body.style.cursor='default';};
	_bitmap.onPress = function(){
			$("#ID_sub_inst").show();
			$("#commonPopText").remove();
			_this.popupContainer.getChildAt(1).cleanUp();
			_this.popupContainer.removeAllChildren();
			_this.popupContainer = null;
			
			_this.hotspotContainer.visible = true;
			if(_this.getStage()) _this.getStage().update();
		}
	
	
	$("#flashContent").append('<div id="commonPopText"></div>');
	
	var _textBoxObj = {titleText:"",
						bodyText:$(this.xmlData).find("component#"+this.dataObject.hotSpots[_id].textBoxId).text(),
						divId:"commonPopText",
						x:this.dataObject.hotSpots[_id].textBoxX,
						y:this.dataObject.hotSpots[_id].textBoxY,						
						width:this.dataObject.hotSpots[_id].textBoxWidth,
						height:this.dataObject.hotSpots[_id].textBoxHeight
						}
						
	var dragBox = new DraggableTextBoxComp(_textBoxObj);
	this.popupContainer.addChildAt(dragBox,1);
	
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