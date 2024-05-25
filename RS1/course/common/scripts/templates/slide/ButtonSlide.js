function ButtonSlide(_stage, _container)
{
	var canvas = null;
	var stage = null;
	var mainContainer = null;
	var windowWidth,windowHeight;
	var buttonsArr, xmlData, pageData;
	var currentButton = 0;
	var isCommonImage = 0;
	if(_stage == null)
	{
		canvas = document.getElementById("canvas");
		stage = new createjs.Stage(canvas);	
		mainContainer = new createjs.Container();
		if(navigator.platform!="iPad")
			stage.scaleX = stage.scaleY = .9
		else
			stage.scaleX = stage.scaleY = .8
		stage.addChild(mainContainer);
	}
	else
	{
		canvas = null;
		stage = _stage;
		mainContainer  = _container;
	}

	if(canvas != null)
	{	
		mainContainer.x = ((canvas.width - 470)/2);
		mainContainer.y = ((canvas.height - 500)/2);
	}
	
	this.setData = function(_xmlData,_dataObject)
	{				
		xmlData = _xmlData;
		pageData = _dataObject;
		this.createCommonImage();
		this.createCommonText();
		this.createButtons(_xmlData,_dataObject);
		this.doMouseClick(buttonsArr[currentButton]);
		if(_stage == null)
		{
			setInterval(this.resizeHandler,100);
		}
		
	}
	
	this.resizeHandler = function()
	{		
	
		if(windowWidth != window.innerWidth || windowHeight != window.innerHeight)
		{
			windowWidth = window.innerWidth;
			windowHeight = window.innerHeight;
			
			var contWidth;
			
			if(canvas)
			{
				canvas.width = window.innerWidth;// *0.98;
				canvas.height = window.innerHeight;// *0.98;
								
				mainContainer.x = ((canvas.width - 470)/2);
				mainContainer.y = ((canvas.height - 500)/2);
							
				stage.update();
				
			}
		}
		
	}
	
	this.createButtons = function(_xmlData,_dataObject)
	{
		var btnLen = _dataObject.buttons.length;
		buttonsArr = new Array();
		for(var i=0;i<btnLen;i++)
		{	
			var label = $(_xmlData).find("component#"+_dataObject.buttons[i].compId).text();			
			var btn = new  SimpleButton(stage, mainContainer, {label:label,prop:_dataObject.buttons[i], id:i}, this);		
			buttonsArr.push(btn);
		}	
	}
	
	this.createCommonText = function()
	{
		this.buildTextItems(xmlData, pageData.commonText);
		stage.update();
	}
	
	this.createCommonImage = function()
	{		
		isCommonImage = (pageData.commonImage != undefined)?1:0;
		if(isCommonImage == 1){
			this.loadImage(pageData.commonImage);				
			stage.update();
		}
	}
	
	this.doMouseClick = function(evt)
	{		
		for(var i=0;i<buttonsArr.length;i++)
		{			
			var btnDiv = document.getElementById('mainDiv'+i);
			if(evt.id == buttonsArr[i].id)
			{				
				btnDiv.clicked = 1;
				btnDiv.childNodes[0].style.display = "none";
				btnDiv.childNodes[1].style.display = "block";
				btnDiv.childNodes[2].style.color = btnDiv.overState;
			}
			else
			{
				btnDiv.clicked = 0;
				btnDiv.childNodes[0].style.display = "block";
				btnDiv.childNodes[1].style.display = "none";
				btnDiv.childNodes[2].style.color = btnDiv.normalState;				
			}
		}
		this.loadSlideData(evt);
	}
	
	this.loadSlideData = function(evt)
	{
		this.deleteItems();
		this.buildImageItems(pageData.images[evt.id]);
		this.buildTextItems(xmlData, pageData.texts[evt.id]);
		currentButton = evt.id;
		stage.update();
	}
	this.buildImageItems = function(_array)
	{	
		for(var i = 0;i<_array.length;i++)
		{			
			var _imageLoader = new ImageLoader(stage,mainContainer);			
			_imageLoader.setPosition(_array[i].x,_array[i].y);		
			_imageLoader.setWidthHeight(_array[i].width,_array[i].height);				
			_imageLoader.loadImage(_array[i].name,i);	
		
		}
		
	}
			
	this.buildTextItems = function(_xmlData,_array)
	{		
		for(var i = 0;i<_array.length;i++)
		{
			var compId = _array[i].compId;
			var _txt = $(_xmlData).find("component#"+compId).text();
			
			var _lazyText = new LazyText(stage,mainContainer);			
								
			if(navigator.platform!="iPad"){
				_lazyText.setXY(_array[i].x,_array[i].y);
			}
			else
			{				
				_lazyText.setXY(_array[i].ipadX,_array[i].ipadY);
			}
			
			_lazyText.setText(_txt,compId);
			_lazyText.setStyle(_array[i].style);
			
		}		
	}
	
	this.deleteItems = function()
	{
		var imgLen = pageData.images[currentButton].length;
		var txtLen = pageData.texts[currentButton].length;
		
		for(var i=0;i<imgLen;i++){			
			$("#img_"+i).remove();
		}
		
		
		for(var i=0;i<txtLen;i++)
		{
			$("#"+pageData.texts[currentButton][i].compId).remove();				
		}
	}
	
	this.loadImage = function(imageData)
	{
		var _image = document.createElement("img");
    		
		_image.style.cssText = 'position:absolute;visibility:hidden;top:0px;left:0px;overflow:auto;';
		_image.id = "commonImage";
		_image.src = imageData[0].name;
		_image.onload = this.imageLoaded;
		if(document.getElementById('multibuttons') == null){
			var buttonDiv = document.createElement('div');
			buttonDiv.id = "multibuttons";			
			document.getElementsByTagName('object')[0].appendChild(buttonDiv);	
		}
		document.getElementById('multibuttons').appendChild(_image);	
		
	}
	
	this.imageLoaded = function()
	{
		var commonImage = document.getElementById('commonImage');
			 
		var domImage = new createjs.DOMElement(commonImage);
		mainContainer.addChild(domImage);
		
		commonImage.width = pageData.commonImage[0].width;
		commonImage.height = pageData.commonImage[0].height;	
		
		domImage.x = pageData.commonImage[0].x;
		domImage.y = pageData.commonImage[0].y;
		
		_stage.update();		
	}
	
}