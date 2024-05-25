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
	STAGE_WIDTH = STAGE_WIDTH < 500 ? 500:STAGE_WIDTH; //common update for  STAGE_WIDTH = 500;	
	
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
		//alert(nwidth);
		p.pratio = Math.min(nwidth/STAGE_WIDTH,nheight/STAGE_HEIGHT);
		
		//RESIZING THE CONTAINER
		$('#flashContent').css('width','auto' );		
		$('#flashContent').css('cssText', 'overflow: hidden !important');
				
		var _ratio = Math.min(this.canvas.width/STAGE_WIDTH,this.canvas.height/STAGE_HEIGHT);
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
		
		this.scaleX = this.scaleY = _ratio
		
		
		var gap = 0;
		if(typeof TYPE != 'undefined' && TYPE == 'MULTI_BAR')
		gap = 34;
		
		this.resizeDiv($('#mainDiv'), gap, nwidth, nheight)
		
		// 
		
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
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
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
	
		//Syntax checker left value is less than 0
		if(dataObject.templateType == 'SYNTAX_CHECKER' && left < 0 )
		{
			div.css('left','0px')
		} 
		/*if(this.isVideoInIpad(dataObject.templateType))
			div.css('left','0px');*/ 

		/*if(dataObject.templateType == 'MULTI_BAR' && typeof dataObject.slideObject[1].syntax != 'undefined' && left < 0)
		{
			div.css('left','0px');
		}	*/	

}

p.isVideoInIpad = function(_templateType) {
 //youtube video + multibar + ipad + potrait mode 
	var flag= false;
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	if(_templateType === 'MULTI_BAR' && $('#mainDiv').data("yt") /*&& isiPad && $(window).height() > $(window).width()*/)
		return true;
 
 		return false;
}