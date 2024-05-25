
var MultipleImageComp = function(_imageDataArray)
{	
	this.init(_imageDataArray);	
}

MultipleImageComp.prototype = new createjs.Container();
	
MultipleImageComp.prototype.init = function(_imageDataArray)
{
	this.initialize();
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
		
	this.loaderCnt = -1;
	this.imageArray = _imageDataArray;
	this.interval;
	this.loadNextImage();
		
};

	
MultipleImageComp.prototype.loadNextImage = function()
{
	this.loaderCnt++;
	 
	if(this.loaderCnt < this.imageArray.length)
	{
		this.loadImage();		
	}	
	else if(this.loaderCnt == this.imageArray.length)
	{
		//$("#preloader").hide();
		$("#preloader").remove();
		if(this.getStage()) this.getStage().update();
	}
}

MultipleImageComp.prototype.loadImage = function()
{	
	var _this = this;
	var image = new Image();		
	image.src = this.imageArray[this.loaderCnt].name;
	image.onload = function(ev){
						_this.imageLoaded(ev);
					};
}

MultipleImageComp.prototype.imageLoaded = function(_image)
{		
	//For scrollable image
	if(this.imageArray[this.loaderCnt].scrollable=="YES")
	{		
		var imgDiv = document.createElement("div");		
		imgDiv.id = "imgId"+this.loaderCnt;		
		imgDiv.innerHTML = "<img src='"+this.imageArray[this.loaderCnt].name+"'/>";			
		imgDiv.style.cssText="top:0px;";		
		$("#"+this.imageArray[this.loaderCnt].divId).append(imgDiv);			
		var _dom = new createjs.DOMElement(imgDiv);
		this.addChild(_dom);		
		_dom.x=this.imageArray[this.loaderCnt].x;
		_dom.y=this.imageArray[this.loaderCnt].y;
		if(this.getStage()) this.getStage().update(); 
	}

	else
	{
		//Add the image
		this.addImage(_image.target);
	}
	
	//Load Next Image
	this.loadNextImage();
	
}

MultipleImageComp.prototype.addImage = function(_image)
{
	var imageContainer = new createjs.Container();	
	imageContainer.x = this.imageArray[this.loaderCnt].x;
	imageContainer.y = this.imageArray[this.loaderCnt].y;
	this.addChild(imageContainer);
	
	var imageWidth = this.imageArray[this.loaderCnt].width;
	var imageHeight = this.imageArray[this.loaderCnt].height;
	
	var imageRatio = Math.min((imageWidth/_image.width),(imageHeight/_image.height));
	imageWidth = imageRatio * _image.width;
	imageHeight = imageRatio * _image.height;
	
	var _imageShape = new createjs.Shape();
	_imageShape.graphics.beginBitmapFill(_image, "no-repeat").drawRect(0,0,_image.width,_image.height);
	_imageShape.scaleX = _imageShape.scaleY = imageRatio;
	imageContainer.addChild(_imageShape);	
	imageContainer.name = this.imageArray[this.loaderCnt].url;
		
	if(this.imageArray[this.loaderCnt].type == "STD")
	{
		this.showStandardImage(imageContainer,imageWidth,imageHeight);
	}
	else if(this.imageArray[this.loaderCnt].type == "HOTSPOT")
	{
		this.showHotspotImage(imageContainer,imageWidth,imageHeight);
	}
	
}

MultipleImageComp.prototype.showHotspotImage = function(_container,_imageWidth,_imageHeight)
{
	//For Blue Border
	var _border = new createjs.Shape();
	_border.graphics.beginFill("#00A1E3").drawRoundRect(-2,-2,_imageWidth+4,_imageHeight+4,8);			
	_container.addChild(_border);
	
	
	//For Shadow Effect
	var _shadow = new createjs.Shape();
	_shadow.graphics.beginFill('rgba(0,0,0,1)').drawRoundRect(0,0,_imageWidth,_imageHeight,8);
	_shadow.shadow = new createjs.Shadow("#000000",3,3,10);
	_shadow.x = _shadow.y = 0.5;
	_shadow.scaleX = _shadow.scaleY = 0.99;
	_container.addChild(_shadow);
	
	//For RollOver Shadow Effect
	var _rollOverShadaw = new createjs.Shape();
	_rollOverShadaw.graphics.beginFill('rgba(0,0,0,1)').drawRoundRect(0,0,_imageWidth,_imageHeight,8);
	_rollOverShadaw.shadow = new createjs.Shadow("#0086BF",0,0,20);
	_rollOverShadaw.x = _rollOverShadaw.y = 0.5;
	_rollOverShadaw.scaleX = _shadow._rollOverShadaw = 0.99;
	_rollOverShadaw.name = "shadow";
	_rollOverShadaw.visible = false;
	
	//Get image shape child
	var _imageShape = _container.getChildAt(0);
	_container.swapChildren(_imageShape,_shadow);
	
	_container.addChildAt(_rollOverShadaw,0);
	
	//For Mask 
	var _mask = new createjs.Shape();
	_mask.graphics.beginFill().drawRoundRect(0,0,_imageWidth,_imageHeight,8);			
	_container.addChild(_mask);			
	_imageShape.mask = _mask;	
		
	_container.onMouseOver = this.mouseOverHandler;
	_container.onMouseOut = this.mouseOutHandler;
	_container.onClick = this.onClickHandler;
	
	if(this.getStage()) this.getStage().enableMouseOver();
		
}
MultipleImageComp.prototype.mouseOverHandler = function(ev)
{
	document.body.style.cursor='pointer';
	this.getChildAt(0).visible = true;
	if(this.getStage()) this.getStage().update();
}

MultipleImageComp.prototype.mouseOutHandler = function(ev)
{
	document.body.style.cursor='default';
	this.getChildAt(0).visible = false;
	if(this.getStage()) this.getStage().update();
}

MultipleImageComp.prototype.onClickHandler = function(ev)
{
	window.open(this.name);	
}

MultipleImageComp.prototype.showStandardImage = function(_container,_imageWidth,_imageHeight)
{
	//For Shadow Effect
	var _shadow = new createjs.Shape();
	_shadow.graphics.beginFill('rgba(0,0,0,1)').drawRoundRect(0,0,_imageWidth,_imageHeight,8);
	_shadow.shadow = new createjs.Shadow("#000000",3,3,10);
	_shadow.x = _shadow.y = 0.5;
	_shadow.scaleX = _shadow.scaleY = 0.99;
	_container.addChild(_shadow);
	
	//Get image shape child
	var _imageShape = _container.getChildAt(0);
	_container.swapChildren(_imageShape,_shadow);
	
	//For Mask 
	var _mask = new createjs.Shape();
	_mask.graphics.beginFill().drawRoundRect(0,0,_imageWidth,_imageHeight,8);			
	_container.addChild(_mask);			
	_imageShape.mask = _mask;	
		
}
