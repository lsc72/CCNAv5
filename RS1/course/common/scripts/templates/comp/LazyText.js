	 function LazyText(_stage,_parent)
	{
		
		var textContainer= new createjs.Container();
		//textContainer.x = textContainer.y = 0;
		_parent.addChild(textContainer);
			
		var txtX,txtY;
		var tagId;
					
		this.setText = function(_txt,_id)
		{						
			tagId = _id;
			
			var textDiv = document.createElement("div");		
			textDiv.style.cssText = 'position:absolute;top:0px;left:0px; overflow:auto;visibility:hidden;';
			textDiv.id = tagId;
			textDiv.innerHTML = _txt;
			
			if(document.getElementById('multibuttons') != null)
				document.getElementById('multibuttons').appendChild(textDiv);	
			else
				document.getElementsByTagName('object')[0].appendChild(textDiv);		
			
			var domText = new createjs.DOMElement(textDiv);
			textContainer.addChild(domText);
			
			textContainer.x = txtX;
			textContainer.y = txtY;	
		}
					
		this.setXY = function(_xValue,_yValue)
		{							
			txtX = _xValue;
			txtY = _yValue;			
		}
			
		this.setStyle = function(_style)
		{
			if(_style)
			{
				var _div = document.getElementById(tagId);
				_div.style.cssText = _style;
			}
		}
				
}//end of main function
