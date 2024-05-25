/*loadScript("../../../common/scripts/templates/comp/BarButtonComp.js");
loadScript("../../../common/scripts/templates/comp/TextComp.js");
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");
loadScript("../../../common/scripts/templates/slide/DescriptionSlide.js");
loadScript("../../../common/scripts/templates/slide/AnimationSlide.js");
//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
//loadScript("../../../common/scripts/templates/slide/TableSlideNew.js");
loadScript("../../../common/scripts/templates/slide/ImagePopOverSlide.js");
//loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");
//loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");

loadScript("../../../common/scripts/templates/slide/VideoSlide.js");
//loadScript("../../../common/scripts/templates/slide/PopOverSlide.js");
loadScript("../../../common/scripts/templates/slide/AsciiToBinSlide.js");
//loadScript("../../../common/scripts/templates/slide/InteractiveSlide.js");*/


var MultiBarSlide = function(_xmlData,_dataObject)
{
	this.initiateComp(_xmlData,_dataObject);	
}

var p = MultiBarSlide.prototype = new createjs.Container();


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

/*p.initiateComp = function(_xmlData,_dataObject)
{
	//super class inheritance
	this.initialize();
		
	this.xmlData = _xmlData;
	this.dataObject = _dataObject;
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
	
	//Build Common Image items
	if(_dataObject.images)
	{	
		this.buildImageItems(_dataObject.images);
	}
	if(_dataObject.graphics)
	{
		this.buildGraphicsItems(_dataObject.graphics);
	}
}*/

p.initiateComp = function(_xmlData,_dataObject)
{
	//super class inheritance
	this.initialize();
		
	this.xmlData = _xmlData;
	this.dataObject = _dataObject;
	this.slideObject = _dataObject.slideObject;
	this.isViewDD = 0;
	
	this.buttonItems = [];
	this.currentSelectedButton = 0;
	this.currentID = 0;
	//slide container
	this.slideContainer;
		

	var scripts = ["../../../common/scripts/templates/comp/BarButtonComp.js","../../../common/scripts/templates/comp/TextComp.js","../../../common/scripts/templates/comp/ImageComp.js","../../../common/scripts/templates/comp/MultipleImageComp.js"];
	this.loadJSFiles(scripts, this.onLoadJSFile, this);	

}

p.onLoadJSFile = function(_this)
{
	//Build Button Items
	_this.buildButtonItems(_this.dataObject.slideObject.length);
	
	//Build common texte items
	_this.buildTextItems(_this.xmlData,_this.dataObject.textObject);
	
	//Build Common Image items
	if(_this.dataObject.images)
	{	
		_this.buildImageItems(_this.dataObject.images);
	}
	if(_this.dataObject.graphics)
	{
		_this.buildGraphicsItems(_this.dataObject.graphics);
	}
	
}



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


p.buildButtonItems = function(_count)
{
	if(_count == 0) return;
	
	var buttonHolder = new createjs.Container();
	buttonHolder.x = (typeof this.dataObject.buttonBarPos != 'undefined') ? this.dataObject.buttonBarPos.x: 440;
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
	
	if(typeof callBackFromButtonBar == "function") callBackFromButtonBar(_id);

	this.slideStatus(_id);
}

p.slideStatus = function(_id)
{	
	this.currentID = _id;
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
	$("#videoDiv").remove();
	$("#animDiv").remove();
	$("#asciidiv").remove();
	$("#wrapper_multi").remove();
	var _len = $("#mainDiv > #titleH").length;
	if(_len) $("#titleH").remove(); 
	
	this.slideObject[_id].slideNo = _id+1;
	var slideType = this.slideObject[_id].templateType;
	this._slideType = slideType;
				
	switch(slideType)
	{
		case "IMAGE": 
				_scripts = ["../../../common/scripts/templates/slide/ImageSlideNew.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);
	
			break;
			
		case "DESCRIPTION": 
				_scripts = ["../../../common/scripts/templates/comp/TextBoxComp.js","../../../common/scripts/templates/comp/DraggableTextBoxComp.js"
							//"../../../common/scripts/templates/slide/DescriptionSlide.js",
							]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);	
			break;
		
		case "TABLE": 
				_scripts = ["../../../common/scripts/templates/slide/TableSlideNew.js","../../../common/scripts/templates/comp/TableComp.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);
			break;

		
			case "VIDEO": 
				_scripts = ["../../../common/scripts/templates/slide/VideoSlide.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this); 
			break;

		
		case "MULTI_BUTTON":  
				_scripts = ["../../../common/scripts/templates/slide/MultiButtonSlide.js","../../../common/scripts/templates/comp/ButtonComp.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);
			break;
		
		case "ANIMATION":
				/*this.slideContainer = new AnimationSlide(this.xmlData,this.slideObject[_id]);
				this.addChild(this.slideContainer);	*/			

				_scripts = ["../../../common/scripts/templates/slide/AnimationSlide.js","../../../common/scripts/templates/comp/AnimationComp.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);
			break;
			
		case "DRAG_DROP": 
				_scripts = ["../../../common/scripts/templates/comp/DragDropComp.js","../../../common/scripts/templates/slide/DragDropSlide.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);
			break;
		
		case "IMAGE_POPOVER":				
				/*this.slideContainer = new ImagePopOverSlide(this.xmlData, this.slideObject[_id]);	
				this.addChild(this.slideContainer);		*/
				_scripts = ["../../../common/scripts/templates/slide/ImagePopOverSlide.js","../../../common/scripts/templates/comp/DraggableTextBoxComp.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);
			break;
			
			case "INTERACTIVEANIM":				
				/*_slide = new InteractiveAnimSlide(this.xmlData, this.slideObject[_id]);	*/				
				var animPath = mediaPath+'/Animation.js';
				_scripts = ["../../../common/scripts/templates/slide/InteractiveAnimSlide.js","../../../common/scripts/templates/comp/AnimationControlComp.js","../../../common/js/jquery/jquery-ui-1.9.1.custom.min.js","../../../common/js/greensock/TweenMax.min.js",animPath]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);
			break;

			case "INTERACTIVE":	 
				_scripts = ["../../../common/scripts/templates/slide/InteractiveSlide.js","../../../common/scripts/templates/comp/OnOff.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);
			break; 

			case "POP_OVER_SLIDE": 
				_scripts = ["../../../common/scripts/templates/slide/PopOverSlide.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);
			break;
		
			case "ASCIITOBIN": 
			var asciitobin = mediaPath+'/asciitobin.js';
			_scripts = ["../../../common/scripts/templates/slide/AsciiToBinSlide.js",asciitobin]
			this.loadJSFiles(_scripts, this.onLoadJavascript, this); 				
			break;	
			
			case "CLICKACTIVITY": 
			var clickacitivity = mediaPath+'/clickacitivity.js';
			_scripts = ["../../../common/scripts/templates/slide/ClickActivitySlide.js",clickacitivity]
			this.loadJSFiles(_scripts, this.onLoadJavascript, this); 	
			break;

			case "CONVERSION": 
			var conversion = mediaPath+'/conversion.js';
			_scripts = ["../../../common/scripts/templates/slide/conversionActivitySlide.js",conversion]
			this.loadJSFiles(_scripts, this.onLoadJavascript, this); 	
			break;
			case "SYNTAX_CHECKER": 
				_scripts = ["../../../common/scripts/templates/slide/syntaxcheckerMultislide.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);
				break;
			case "POPOVER":			
				var popo = mediaPath+'/pop.js';
				_scripts = ["../../../common/scripts/templates/slide/popoverSlideJQ.js",popo]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);
				
			break;
		case "undefined":
				console.log("You forgot to update the template type in slide "+_id);
			break;
	}
	/*if(this.slideContainer){
		this.slideContainer.x = this.slideObject[_id].x;
		this.slideContainer.y = this.slideObject[_id].y;
	}
	
	if(this.getStage()) this.getStage().update();*/
	
	//Handle Slides
	
}

p.onLoadJavascript = function(_this)
{	

	switch(_this._slideType)
	{ 
		case "IMAGE":
				_this.slideContainer = new ImageSlideNew(_this.xmlData,_this.slideObject[_this.currentID]);
				_this.addChild(_this.slideContainer);	 
			break;
			
		case "DESCRIPTION":
				_this.slideContainer = new DescriptionSlide(_this.xmlData,_this.slideObject[_this.currentID]);
				_this.addChild(_this.slideContainer);
			break;
		
		case "TABLE":
				_this.slideContainer = new TableSlideNew(_this.xmlData,_this.slideObject[_this.currentID]);
				_this.addChild(_this.slideContainer);
			break;
		
		case "MULTI_BUTTON":
				_this.slideContainer = new MultiButtonSlide(_this.xmlData,_this.slideObject[_this.currentID]);
				_this.addChild(_this.slideContainer);
			break;
		
		case "ANIMATION":
				_this.slideContainer = new AnimationSlide(_this.xmlData,_this.slideObject[_this.currentID]);
				_this.addChild(_this.slideContainer);				
			break;
			
		case "DRAG_DROP":				
				if(typeof _this.slideObject[_this.currentID].instobj.noDefaultHelp == 'undefined' && _this.slideObject[_this.currentID].instobj.noDefaultHelp != true)
					_this.isViewDD++;
				_this.slideObject[_this.currentID].isViewDD = _this.currentID.isViewDD;
				var slide = new DragDropSlide(_this.xmlData,_this.slideObject[_this.currentID]);				
			break;
		
		case "IMAGE_POPOVER":				
				_this.slideContainer = new ImagePopOverSlide(_this.xmlData, _this.slideObject[_this.currentID]);	
				_this.addChild(_this.slideContainer);		
			break;
			
		case "INTERACTIVEANIM":				
			_slide = new InteractiveAnimSlide(_this.xmlData, _this.slideObject[_this.currentID]);					
		break;

		case "VIDEO": 
			var slide = new VideoSlide(_this.xmlData,_this.slideObject[_this.currentID]);					
		break;
		
		case "ASCIITOBIN": 
				_slide = new AsciiToBinSlide(_this.xmlData,_this.slideObject[_this.currentID].texts[0]);					
		break;	

		case "INTERACTIVE":	 
				_this.slideContainer = new InteractiveSlide(_this.xmlData, _this.slideObject[_this.currentID]);	
				_this.addChild(_this.slideContainer);						
			break; 
		case "POP_OVER_SLIDE":				
			_this.slideContainer = new PopOverSlide(_this.xmlData,_this.slideObject[_this.currentID]);
			_this.addChild(_this.slideContainer);
		break;

		case "CLICKACTIVITY": 
			_slide = new ClickActivitySlide(_this.xmlData,_this.slideObject[_this.currentID]);
		break;

		case "CONVERSION": 		 
			_slide = new conversionActivitySlide(_this.xmlData,_this.slideObject[_this.currentID]);
		break;
		
		case "SYNTAX_CHECKER": 
				slide = new SyntaxCheckerMulti(_this.xmlData,_this.slideObject[_this.currentID]);
				break;
			
		case "POPOVER": 
			_slide = new popoverSlideJQ(_this.xmlData,_this.slideObject[_this.currentID]);					
		break;			
		case "undefined":
				console.log("You forgot to update the template type in slide "+_this.currentID);
			break;
	}
	if(_this.slideContainer){
		_this.slideContainer.x = _this.slideObject[_this.currentID].x;
		_this.slideContainer.y = _this.slideObject[_this.currentID].y; 
	}

	if(_this.getStage()) _this.getStage().update();

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
		if(_array[i].bodyText == undefined)/* Adding text to the CompID */
		{
			_txt = $(_xmlData).find("component#"+compId).text();
		}
		else
        {
			_txt =  _array[i].bodyText;
		}
		//_txt = $(_xmlData).find("component#"+compId).text();
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
