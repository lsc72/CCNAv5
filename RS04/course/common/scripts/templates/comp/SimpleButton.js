function SimpleButton(stage, btnHolder, propObj, parentObj)
{
	var button = new createjs.Container();
	var _this = parentObj;
	var domLabel, labelDiv;
	btnHolder.addChild(button);
	stage.enableMouseOver();
	
	this.setLabel = function()
	{		
		var mainDiv = document.getElementById("mainDiv"+propObj.id);
		labelDiv = document.createElement("div");
			
		mainDiv.normalState = propObj.prop.labelNormal;
		mainDiv.overState = propObj.prop.labelOver;
		
		labelDiv.style.cssText = propObj.prop.style;
		$(labelDiv).css('height','auto');
		
		labelDiv.innerHTML = propObj.label;
		
		mainDiv.appendChild(labelDiv);
		
		domLabel = new createjs.DOMElement(labelDiv);
		
		//domLabel.x = ($(mainDiv.childNodes[0]).width() - $(labelDiv).width())/2;
		//domLabel.y = ($(mainDiv.childNodes[0]).height() - $(labelDiv).height())/2;
		
		button.addChild(domLabel);
		stage.update();
	}

	this.setImages = function()
	{
		var buttonDiv = document.getElementById('multibuttons');
		if(buttonDiv == null){
			buttonDiv = document.createElement('div');
			buttonDiv.id = "multibuttons";			
			document.getElementsByTagName('object')[0].appendChild(buttonDiv);	
		}
		var mainDiv = document.createElement('div');
		var defaultImg = document.createElement('img');
		var selectedImg = document.createElement('img');
		
		mainDiv.id = "mainDiv"+propObj.id;
		button.id = propObj.id;
		this.id = propObj.id;
		
		this.doActions(mainDiv);
		
		defaultImg.src = propObj.prop.normal;
		selectedImg.src = propObj.prop.over;
					
		defaultImg.id = 'normal';
		selectedImg.id = 'over';
		
		defaultImg.style.cssText = propObj.prop.style;
		selectedImg.style.cssText = propObj.prop.style;
		selectedImg.style.display = "none";
		
		defaultImg.onload = this.processImage;
		selectedImg.onload = this.processImage;
		
		mainDiv.appendChild(defaultImg);
		mainDiv.appendChild(selectedImg);
		
		buttonDiv.appendChild(mainDiv);
		stage.update();
	}
	
	this.processImage = function(evt)
	{			
		var domImage = new createjs.DOMElement(evt.target);
		//domImage.visible = (evt.target.id == 'over')?false:true;
		var mainDiv = document.getElementById("mainDiv"+propObj.id);
		
		domLabel.x = ($(mainDiv.childNodes[0]).width() - $(labelDiv).width())/2;
		domLabel.y = ($(mainDiv.childNodes[0]).height() - $(labelDiv).height())/2;
		
		//domLabel.y = (domLabel.y == 0)?($(labelDiv).height() * .15):domLabel.y;
		
		button.addChild(domImage);		
		stage.update();
	}
	
	this.setPosition = function()
	{		
		button.x = propObj.prop.x;
		button.y = propObj.prop.y;

		stage.update();
	}
	
	this.setSize = function()
	{
		button.width = propObj.prop.width;
		button.height = propObj.prop.height;

		stage.update();
	}
	
	this.doActions = function(mainDiv)
	{			
		$(mainDiv).bind('touchend', function(event) 
		{
		   setState(this, 'click', _this, button);
		});
		mainDiv.onmouseover = function()
		{
			setState(this, 'over', _this, button);			
		}
		mainDiv.onmouseout = function()
		{			
			setState(this, 'normal', _this, button);		
		}
		mainDiv.onclick = function()
		{			
			setState(this, 'click', _this, button);
		}
		stage.update();
	}
	
	this.setImages();
	this.setLabel();
	this.setPosition();
	this.setSize();
}

function setState(targ, mode, _this, button)
{		
	switch(mode)
	{
		case 'over':			
			targ.style.cursor = "pointer";
			targ.childNodes[0].style.display = "none";
			targ.childNodes[1].style.display = "block";			
			targ.childNodes[2].style.color = targ.overState;
		break;
		case 'normal':		
			if(targ.clicked == 1)
			{
				targ.childNodes[0].style.display = "none";
				targ.childNodes[1].style.display = "block";				
				targ.childNodes[2].style.color = targ.overState;
			}
			else
			{
				targ.childNodes[1].style.display = "none";
				targ.childNodes[0].style.display = "block";
				targ.childNodes[2].style.color = targ.normalState;		
			}
		break;
		case 'click':
			/*if(targ.clicked != 1)
			{				
				targ.clicked = 1;
				targ.childNodes[0].style.display = "none";
				targ.childNodes[1].style.display = "block";
				_this.doMouseClick(button);
			}*/
			
			_this.doMouseClick(button);
		break;
	}
	
}