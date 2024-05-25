// JavaScript Document

function ImageSlide(_stage,_container)
{
	var canvas = null;
	var stage = null;
	var mainContainer = null;
	var windowWidth,windowHeight;

	if(_stage == null)
	{
		canvas = document.getElementById("canvas");
		stage = new createjs.Stage(canvas);	
		mainContainer = new createjs.Container();
		if(navigator.platform!="iPad")
			stage.scaleX = stage.scaleY = 1
		else
			stage.scaleX = stage.scaleY = .98
		stage.addChild(mainContainer);
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
		mainContainer.y = ((canvas.height - 400)/2);
	}
			
	this.setData = function(_xmlData,_dataObject)
	{				
		this.buildImageItems(_dataObject.images);
		
		this.buildTextItems(_xmlData,_dataObject.texts);
		if(_stage == null)
		{
			setInterval(this.resizeHandler,100);
		}
		
	}
	
	this.clearData = function(parent)
	{
		mainContainer.visible = false;
		parent.removeChild(mainContainer);
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
				mainContainer.y = ((canvas.height - 400)/2);
				
				stage.update();
				
			}
		}
		
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
	
}//end of main functional