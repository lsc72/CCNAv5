// JavaScript Document

function TableSlide(_stage,_container)
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
			stage.x = -10;
			stage.scaleX = stage.scaleY = .92		
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
		this.buildTableItems(_xmlData,_dataObject.tables);
		
		this.buildTextItems(_xmlData,_dataObject.texts);
		
		setInterval(this.resizeHandler,100);
		
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
		
	this.buildTableItems = function(_xmlData,_array)
	{
		for(var i = 0;i<_array.length;i++)
		{
			
			
			var compId = _array[i].compId;
			
			var _txt = $(_xmlData).find("component#"+compId).text();
			
			var _tableComponent = new TableComponent(stage,mainContainer);			
			if(navigator.platform!="iPad"){
			_tableComponent.setXY(_array[i].x,_array[i].y);	
			}
			else
			{
			_tableComponent.setXY(_array[i].ipadX,_array[i].ipadY);	
			}
			_tableComponent.setTable(_txt,compId);	
			_tableComponent.setStyle(_array[i].style);
				
				
				
			
			
						
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