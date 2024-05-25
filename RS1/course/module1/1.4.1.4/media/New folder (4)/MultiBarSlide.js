loadScript("../../../common/scripts/templates/comp/BarButtonComp.js");
loadScript("../../../common/scripts/templates/comp/TextComp.js");
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");
loadScript("../../../common/scripts/templates/slide/DescriptionSlide.js");
loadScript("../../../common/scripts/templates/slide/AnimationSlide.js");
//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
//loadScript("../../../common/scripts/templates/slide/TableSlideNew.js");
loadScript("../../../common/scripts/templates/slide/ImagePopOverSlide.js");
//loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");
loadScript("../../../common/scripts/templates/slide/VideoSlide.js");

var MultiBarSlide = function(_xmlData,_dataObject)
{
	this.initiateComp(_xmlData,_dataObject);	
}

var p = MultiBarSlide.prototype = new createjs.Container();

p.initiateComp = function(_xmlData,_dataObject)
{
	//super class inheritance
	this.initialize();
		
	this.xmlData = _xmlData;
	this.slideObject = _dataObject.slideObject;
	this.isViewDD = 0;
	
	this.buttonItems = [];
	this.currentSelectedButton = 0;
	//slide container
	this.slideContainer;
	
	//Build Button Items
	this.buildButtonItems(_dataObject.slideObject.length);
	
	//Build common texte items
	this.buildTextItems(_xmlData,_dataObject.textObject);
	
}


p.buildButtonItems = function(_count)
{
	if(_count == 0) return;
	
	var buttonHolder = new createjs.Container();
	buttonHolder.x = 440;
	buttonHolder.y = 1;
	this.addChild(buttonHolder);
	
	var borderImage = new ImageComp();
	borderImage.x = 0;
	borderImage.y = 0;			
	borderImage.setScale(30,390);	
	borderImage.setImageType("none");
	borderImage.loadImage(_name = "../../../common/images/btn_bar.png");
	buttonHolder.addChild(borderImage);
	
	var buttonComp;
	
	for(var i = 0;i<_count;i++)
	{
		buttonComp = new BarButtonComp(i+1);
		buttonComp.x = 1.6;
		buttonComp.y = (i*36)+2;
		
		buttonHolder.addChild(buttonComp);
		
		this.buttonItems.push(buttonComp);
	}
	
	this.slideStatus(0);
	
}

p.callBackFromButton = function(_id)
{	
	if(this.currentSelectedButton == _id) return;
	
	this.slideStatus(_id);
}

p.slideStatus = function(_id)
{	
	//Reset button handler
	this.buttonStatus(_id);
		
	if(this.getStage()) this.getStage().update();
		
	//clean up old slide
	if(this.slideContainer)
	{
		this.slideContainer.cleanUp();
		this.slideContainer.removeAllChildren();
		this.removeChild(this.slideContainer);
		this.slideContainer = null;
		this.getStage().update();
	};
	
	$("#dragDropDiv").remove();
		
	var slideType = this.slideObject[_id].templateType;
				
	switch(slideType)
	{
		case "IMAGE":
				this.slideContainer = new ImageSlideNew(this.xmlData,this.slideObject[_id]);
				this.addChild(this.slideContainer);
	
			break;
			
		case "DESCRIPTION":
				this.slideContainer = new DescriptionSlide(this.xmlData,this.slideObject[_id]);
				this.addChild(this.slideContainer);
			break;
		
		case "TABLE":
				this.slideContainer = new TableSlideNew(this.xmlData,this.slideObject[_id]);
				this.addChild(this.slideContainer);
			break;

			/* Lakshmi */
				case "VIDEO":
					this.slideContainer = new VideoSlide(this.xmlData,this.slideObject[_id]);
					
				break;
/* Lakshmi */
		
		case "MULTI_BUTTON":
				this.slideContainer = new MultiButtonSlide(this.xmlData,this.slideObject[_id]);
				this.addChild(this.slideContainer);
			break;
		
		case "ANIMATION":
				this.slideContainer = new AnimationSlide(this.xmlData,this.slideObject[_id]);
				this.addChild(this.slideContainer);				
			break;
			
		case "DRAG_DROP":				
				this.isViewDD++;
				this.slideObject[_id].isViewDD = this.isViewDD;
				var slide = new DragDropSlide(this.xmlData,this.slideObject[_id]);	
				//this.addChild(this.slideContainer);
			break;
		
		case "IMAGE_POPOVER":				
				this.slideContainer = new ImagePopOverSlide(this.xmlData, this.slideObject[_id]);	
				this.addChild(this.slideContainer);		
			break;

		case "undefined":
				console.log("You forgot to update the template type in slide "+_id);
			break;
	}
	if(this.slideContainer){
		this.slideContainer.x = this.slideObject[_id].x;
		this.slideContainer.y = this.slideObject[_id].y;
	}
	
	if(this.getStage()) this.getStage().update();
	
	//Handle Slides
	
}

p.buttonStatus = function(_id)
{
	//if(this.currentSelectedButton == undefined) return;
		
	var _button;
	if(this.currentSelectedButton != undefined)
	{
		_button = this.buttonItems[this.currentSelectedButton];
		_button.setSelected(false);
	}
	
	this.currentSelectedButton = _id;	
	_button = this.buttonItems[this.currentSelectedButton];
	_button.setSelected(true);	
}
	
p.buildTextItems = function(_xmlData,_array)
{	
	if(_array.length == 0) return;
		
	var compId;
	var _txt;
	var _textComp;
	
	$("#flashContent").append('<div id="commonBarText"></div>');
		
	for(var i = 0;i<_array.length;i++)
	{
		compId = _array[i].compId;
		_txt = $(_xmlData).find("component#"+compId).text();
		_array[i].divId = "commonBarText";
		_array[i].compId = compId;
		_array[i].text = _txt;
		
		_textComp = new TextComp(_array[i]);							
		//_textComp.setText(_txt,compId);		
				
		this.addChild(_textComp);		
	}		
	
}

p.cleanUp = function()
{
	$("#commonBarText").remove();	
}
