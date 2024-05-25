	 function ImageLoader(_stage,_parent)
	{
		
		var imageDiv;
		var imageDivWidth,imageDivHeight;
		var imageX,imageY;
		var tagId;
		
		var imageContainer= new createjs.Container();
		//imageContainer.x = imageContainer.y = 0;
		_parent.addChild(imageContainer);
		_stage.update();
		
		this.setPosition = function(_xValue,_yValue)
		{							
			imageX = _xValue;
			imageY = _yValue;			
		}
		
		this.setWidthHeight = function(_width,_height)
		{
			imageDivWidth = _width;
			imageDivHeight = _height;
		}	
		
					
		this.loadImage = function(_imageName,_id)
		{						
			tagId = "img_"+_id;
			
			var _image = document.createElement("img");
    		
			_image.style.cssText = 'position:absolute;visibility:hidden;top:0px;left:0px;overflow:auto;border: 0px solid white;border-radius:10px;box-shadow:0 0 4px #888888;';
			_image.id = tagId;
			_image.src = _imageName;
			_image.onload = this.imageLoaded;
			if(document.getElementById('multibuttons') != null)
				document.getElementById('multibuttons').appendChild(_image);	
			else
				document.getElementsByTagName('object')[0].appendChild(_image);	
			//_stage.update();
		}
			
		this.imageLoaded = function(ev)
		{		
			
			imageDiv = document.getElementById(tagId);	
			//var style = 'position:absolute;top:'+imageY+'px;left:'+imageX+'px;overflow:auto;visibility:hidden;'
			//imageDiv.style.cssText = 	style;
			
			imageDiv.width = imageDivWidth;
			imageDiv.height = imageDivHeight;		 
			var domImage = new createjs.DOMElement(imageDiv);
			imageContainer.addChild(domImage);
			
			// Shadow
			/*var shadow = new createjs.Shape();			
			shadow.graphics.beginFill('rgba(255,255,255,1)').drawRoundRect(-10,1,$(imageDiv).width(),$(imageDiv).height(), 8);
			shadow.shadow = new createjs.Shadow("#000000",3,3,7);
			imageContainer.addChild(shadow);*/
			//			
						
			imageContainer.x = imageX;
			imageContainer.y = imageY;
			
			_stage.update();		
		}
		
				
}//end of main function
