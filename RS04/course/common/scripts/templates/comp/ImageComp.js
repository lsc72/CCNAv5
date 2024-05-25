var Iload;
function ImageComp()
{	
	this.initiateComp();				
}


ImageComp.prototype = new createjs.Container();

ImageComp.prototype.initiateComp = function()
{
	//super class inheritance
	this.initialize();

	this.image = null;
	this.imageWidth;
	this.imageHeight;
	this.imageType = null;
	//for scrollable image
	this.scrollable = "";	
	this.divId = "";		
}
	
ImageComp.prototype.setScale = function(_width,_height)
{		
	this.imageWidth = _width;
	this.imageHeight = _height;
}

//for scrollable image
ImageComp.prototype.setScrollable = function(_scroll,id)
{
	this.scrollable = _scroll;
	this.divId = id;
}

ImageComp.prototype.setImageType = function(_type)
{
	this.imageType = _type;
}
		
ImageComp.prototype.loadImage = function(_imageName)
{		
			 
			var newImage=new Image();
			newImage.src='../../../common/images/preloader.gif';
			newImage.id='preloader';

			newImage.onload=function()
			{	
					//alert(Iload);
					if(Iload!=1){
						$("#flashContent").append(this);
						$("#preloader").css({'position':'absolute','top':'50%','left':'50%'});
					}
			};	
		
		
		var _this = this;
		this.image = new Image();
		this.image.src = _imageName; 
		this.image.onload = function()
		{ 
			Iload=1;
			//$("#preloader").css("display","none");
			$("#preloader").remove();						
			_this.imageLoaded();
		};
							
}
	
ImageComp.prototype.imageLoaded = function()
{		
	//Remove the preloader

	$("#preloader").hide();
	
	
	//for Scrollable image
	if(this.scrollable == "YES")
	{
		var imgDiv = document.createElement("div");		
		imgDiv.id = "imgId0";
		imgDiv.style.cssText="top:0px;";
		
		imgDiv.innerHTML = "<img src='"+this.image.src+"'/>";		
		
   		$("#"+this.divId).append(imgDiv);
		
		
		var _dom = new createjs.DOMElement(imgDiv);
		this.addChild(_dom);
		
		if(this.getStage()) this.getStage().update(); 
		return;	
	}
					
	var _imageRatio = Math.min((this.imageWidth/this.image.width),(this.imageHeight/this.image.height));
	this.imageWidth = this.image.width * _imageRatio;
	this.imageHeight = this.image.height * _imageRatio;
	
	//For Image
	
	var _imageShape = new createjs.Shape();
	_imageShape.graphics.beginBitmapFill(this.image,"no-repeat").drawRect(0,0,this.image.width,this.image.height);
	_imageShape.scaleX = _imageShape.scaleY = _imageRatio;
	this.addChild(_imageShape);
	
	if(this.imageType == "STD")
	{
		this.showStandardImage();
	}
	
	if(this.getStage()) this.getStage().update();
}

ImageComp.prototype.showStandardImage = function()
{
	//For Shadow Effect
	var _shadow = new createjs.Shape();
	_shadow.graphics.beginFill('rgba(0,0,0,1)').drawRoundRect(0,0,this.imageWidth,this.imageHeight,8);
	_shadow.shadow = new createjs.Shadow("#000000",3,3,10);
	_shadow.x = _shadow.y = 0.5;
	_shadow.scaleX = _shadow.scaleY = 0.99;
	this.addChild(_shadow);
	
	//Get image shape child
	var _imageShape = this.getChildAt(0);
	this.swapChildren(_imageShape,_shadow);
	
	//For Mask 
	var _mask = new createjs.Shape();
	_mask.graphics.beginFill().drawRoundRect(0,0,this.imageWidth,this.imageHeight,8);			
	this.addChild(_mask);			
	_imageShape.mask = _mask;	
		
}

ImageComp.prototype.toString = function()
{
	return '[ImageComp '+this.z +']';	
}


