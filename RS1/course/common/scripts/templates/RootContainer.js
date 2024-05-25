var RootContainer = function()
{		
	this.initiateComp();	
}

var p = RootContainer.prototype = new createjs.Container();

p.initiateComp = function()
{
	//super class inheritance
	this.initialize();
	
	this.windowWidth;
	this.windowHeight;
	this.canvas = document.getElementById("canvas");
	
	if(navigator.userAgent.match(/iPad/i)) 
		STAGE_WIDTH = STAGE_WIDTH < 500 ? 500:STAGE_WIDTH; //common update for  ipad STAGE_WIDTH = 500; 
	else 
		STAGE_WIDTH = STAGE_WIDTH < 471 ? 500:STAGE_WIDTH; //common update for  STAGE_WIDTH = 500;	 
	
	//alert(STAGE_WIDTH);
	
	var _bg = new createjs.Shape();
	_bg.graphics.beginFill().drawRect(0,0,STAGE_WIDTH, STAGE_HEIGHT);
	this.addChild(_bg);
		
	this.resizeHandler();
	
	var _this = this;
	setInterval(function(){
		
		_this.resizeHandler();
	},100);
		
}

p.resizeHandler = function()
{
	
	if(this.windowWidth != window.innerWidth || this.windowHeight != window.innerHeight)
	{
		
		this.windowWidth = window.innerWidth;
		this.windowHeight = window.innerHeight;
	
		this.canvas.width = ((window.innerWidth -0) * 0.99); //;
		this.canvas.height = (window.innerHeight * 0.99);
		
		// RESIZE RATIO FOR DIV OUTSIDE CANVAS
		var nwidth = ((window.innerWidth) * 0.99); //;
		var nheight = (window.innerHeight * 0.99);
		
		p.pratio = Math.min(nwidth/STAGE_WIDTH,nheight/STAGE_HEIGHT);
		
		//RESIZING THE CONTAINER
		$('#flashContent').css('width','auto' );		
		$('#flashContent').css('cssText', 'overflow: hidden !important');
				
		var _ratio = Math.min(this.canvas.width/STAGE_WIDTH,this.canvas.height/STAGE_HEIGHT);
		_ratio = _ratio.toFixed(2);
		
		if(_ratio<0.9)
		{	
						
			var width = this.canvas.width+"px";
			var height = this.canvas.height+"px";
			
			_ratio = 0.9;
			p.pratio = 0.9;
			//console.log("this.canvas.height --> "+this.canvas.height+" stage size "+(STAGE_HEIGHT * _ratio));
			
			this.canvas.width = (STAGE_WIDTH * _ratio);
			$('#flashContent').css('cssText', 'overflow-x: scroll !important');	
			$('#flashContent').css('cssText', 'overflow-y: hidden !important');	
			$('#flashContent').css("width",width);		
		}
		else if(_ratio > 1.3)
		{	
			_ratio = 1.3;
			p.pratio = 1.3;
		} 		
		
		this.scaleX = this.scaleY = _ratio;		
		
		var gap = 0;
		if(typeof TYPE != 'undefined' && TYPE == 'MULTI_BAR')
		gap = 34;
		
		this.resizeDiv($('#mainDiv'), gap, nwidth, nheight);
				
		//POSITIONING THE CONTAINER			
		this.x = (((this.canvas.width) - (STAGE_WIDTH * _ratio))/2) + 10 ;
		this.y = ((this.canvas.height - (STAGE_HEIGHT * _ratio))/2);
		
		if(this.getStage())
		{
			this.getStage().update();
		}
				
	}	
	
}

p.resizeDiv = function(div, gap, nwidth, nheight)
{
		div.data('scaleVal', p.pratio);
		if(dataObject.templateType != 'DRAG_DROP' && typeof isDD == 'undefined' && !this.isVideoInIpad(dataObject.templateType))
		{
			// RESIZE DIV OUTSIDE CANVAS
			div.css('-webkit-transform', 'translate3d(0,0,0)');		
			div.css('-moz-transform','scale('+p.pratio+', '+p.pratio+')');
			div.css('-webkit-transform','scale('+p.pratio+', '+p.pratio+')');		
			// 
		}		
		// POSITIONING THE DIV OUTSIDE CANVAS
			
		var left = (nwidth - div.width())/2 - gap;
		var top = (nheight - div.height())/2;
		
		div.css('left',left);
		div.css('top',top);

 
		if( this.isHorizontalScroll(left) ) 
		{
			div.css('left','0px');
			if($('#mainDiv').data("yt")) // fix for youtube player in multibar and single slide.
			{
				$('#flashContent').css('position','absolute');

				if(dataObject.templateType != 'MULTI_BAR'){  
					div.css({
						'top':'48%',
						'left':'48%', 
					});

				}else { 
					$('#videoDiv').css('position','absolute'); 
				}
				
			}
		}
 
}


p.isHorizontalScroll = function(left) {
	
	if( (dataObject.templateType == 'INTERACTIVEANIM' || dataObject.templateType == 'MULTI_BAR' || dataObject.templateType == 'SYNTAX_CHECKER' || $('#mainDiv').data("yt") ) && left < 0 )
		return true;
 
 		return false;
}


p.isVideoInIpad = function(_templateType) {
 //youtube video + multibar + ipad + potrait mode 
	var flag= false;
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	//if(_templateType === 'MULTI_BAR' && $('#mainDiv').data("yt") /*&& isiPad && $(window).height() > $(window).width()*/)
	if($('#mainDiv').data("yt"))
		return true;
 
 		return false;
}