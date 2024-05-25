/********************************************************************************************************************************
Netspace HTML version
Developed by 	-	Above Solutions Inc, India
version			-	v1.0

11-06-2013	-	Router		-	textX property added to adjust router text x value.
			-	Bubble		-	tailPosition-11 issue fixed.	
12-06-2013	-	TextComp	-	class attribute added into div.
			-	BlueButton	-	load button label from media xml using compId
			-	Activitycomp-	activity component parameter issue fixed
*********************************************************************************************************************************/
/********************************************************************************************************************************
														Common Names
														------------
th 	-	this
obj	-	object
*********************************************************************************************************************************/
var canvas, mediaStage, root, mediaDOM,isResize;
var sWidth = 470;
var sHeight = 400;
var update = false;
var isResize = true;
var textBoxCount = 0;
var templateType = "";
/********************************************************************************************************************************
													Initiate Template Process 
*********************************************************************************************************************************/
function cleanstage(){

$('#commonMediaText').html("");
}




function initiateTemplate()
{
	var isExpand = getUrlVars()['expand'];
	if(isExpand && isExpand == "true")
	{
		//Translation
		translationProcess();	
	};	
	
	var resize = getUrlVars()['resize'];	
	if(resize && resize == "false")
	{
		//Avoid media resizing
		isResize = false;
	};	
	
	//Find and load Image elements
	var xml = $(canvasXML).find("slide")[0];	
	var manifest = [];	
	var ext = false;
	var rout = false;
	$(xml).find("element").each(function(index, element) {       
	   if($(this).attr("type") == "IMAGE")
	   {
		  if($(this).attr("src"))
		  {
			  manifest.push({id:"bitmap_"+index,src:$(this).attr("src")}); 	
		  }
	   }
	   if($(this).attr("type") == "ROUTER")
	   {
		   if(rout == false){rout = true; manifest.push({id:"router_img",src:"../../../common/images/Router.png"})};
	   }
	   if($(this).attr("type") == "ACTIVITY")
	   {		  
		   if(ext == false){ext = true; manifest.push({id:"ext_lib",src:"../../../common/scripts/templates_ext_dev.js"})};
	   }
    });
	
	//alert(manifest.length);
	
	loadImages(manifest,initSlide);
}
/********************************************************************************************************************************
													Initiate Slide Process 
*********************************************************************************************************************************/
function initSlide()
{	
	canvas = document.getElementById("canvas");
	mediaStage = new createjs.Stage(canvas);	
	if(mediaStage.getNumChildren()==2){mediaStage.removeChild(mediaDOM);
	//mediaStage.removeChild(root);	
	update=true;
		cleanstage();
	
	}
	//For media container DOMElement
	$("#canvas").after("<div id='mediaContainer' style='top:0px;left:-10px;-moz-user-select: none;-webkit-user-select: none;cursor: default;'></div>");
	$("#mediaContainer").append("<div id='commonMediaText'></div>");
	//Media container DOMElement	
	mediaDOM = new createjs.DOMElement(document.getElementById("mediaContainer"));
	mediaStage.addChild(mediaDOM);		
	

		
	//For touch support
	if (createjs.Touch.isSupported()) { createjs.Touch.enable(mediaStage); }
	//For Mouse event support
	mediaStage.enableMouseOver();
	//Find the first slide node
	var firstNode = $(canvasXML).find("slide")[0];	
	//Check stage width and height
	if($(firstNode).attr("width")) sWidth = $(firstNode).attr("width");
	if($(firstNode).attr("height")) sHeight = $(firstNode).attr("height");	
	//Create Root Container for media
	root = new RootContainer();		
	mediaStage.addChild(root);	
		
	
	//mediaStage.removeAllChildren();	
	//Ticker
	createjs.Ticker.setFPS(24);	
	createjs.Ticker.addListener(mediaStage);
	//Load slide	
	templateType = $(firstNode).attr("type") ? $(firstNode).attr("type") : "SINGLE";
	root.addChild(getCJSElement(templateType,firstNode,"commonMediaText"));	
	update = true;
	//Hide preloader
	$("#preloader").hide();		
}
/********************************************************************************************************************************
														Get Media XML text 
														------------------
	var text = getMediaText("ID_title");
*********************************************************************************************************************************/
function getMediaText(id)
{
	return $(mediaXML).find("component#"+id).text();
}
/********************************************************************************************************************************
													Get createJS Media Element 
													--------------------------
	Image		-	var element = getCJSElement("IMAGE",{src:"",x:"",y:"",width:"",height:""});
	Text		-	var element = getCJSElement("TEXT",{compId:"",x:"",y:"",width:"",div:"parent div id",expand:"down",align:"center"});
	Router		-	var element = getCJSElement("ROUTER",{x:"",y:"",textId:"",width:"",height:"",div:"parent div id"});
	Bubble		-	var element = getCJSElement("BUBBLE",{x:"",y:"",width:"",compId:"",size:"11",div:"parentdiv" ,align:"center",tailPosition:"2",tailFlip:"1"});
	TextBox		-	var element = getCJSElement("TEXTBOX",{x:"",y:"",width:"",height:"",div:"parent div id",titleId:"",bodyId:"",animated:"1",visible:"0"});
	Blue Button	-	var element = getCJSElement("BLUE_BUTTON",{x:"",y:"",width:"",height:"",div:"parent div id",id:"",text:"",callback:function(id){}});
*********************************************************************************************************************************/
function getCJSElement(type,obj,divId,xmlElement)
{
	if(divId) obj.div = divId;
	var element;
	switch(type)
	{
		case "SINGLE":
				element = new Slide(obj,divId);		
			break;
		case "MBAR":
				element = new MultiBar(obj);
			break; 
		case "MBUTTON":
			element = new MButton(obj);
			break;
		case "IMAGE":
				element = new ImageComp(obj);						
			break;
		case "TEXT":
				element = new TextComp(obj);						
			break;
		case "SHAPE":
				element = drawGraphics(obj);
			break;		
		case "ROUTER":
				element = new RouterComp(obj);
			break;				
		case "BUBBLE":
				element = new BubbleComp(obj);
			break;						
		case "TEXTBOX":
				textBoxCount++;
				element = new TextBoxComp(obj);				
			break;							
		case "BLUE_BUTTON":
				element = new BlueButton(obj);
			break;	
		case "ACTIVITY":
				element = new ActivityComp(obj,xmlElement);
			break;	
		default:
				element = new createjs.Shape();
			break;		
	}
	return element;
}
/********************************************************************************************************************************
														Root Container
*********************************************************************************************************************************/
(RootContainer = function(){
	this.initialize();
	
	var th = this;	
	//Draw hidden background to occupy the stage size
	var bgShape = new createjs.Shape();
	bgShape.graphics.beginFill("#FFF").drawRect(0,0,sWidth,sHeight);
	//bgShape.alpha = 0.5;
	th.addChild(bgShape);
	//Resize function
	th.resizer = function()
	{			
		canvas.width = $("#flashContent").width();
		canvas.height = $("#flashContent").height();
		var ratio = Math.min(canvas.width/sWidth,canvas.height/sHeight);	
		ratio = isResize ? ratio.toFixed(2) : 1;		
		mediaDOM.x = 0;
		
		if(ratio > 1.3)
		{	
			mediaDOM.x = -2.5;
			ratio = 1.3;			
		}else if(ratio < 0.9)
		{			
			ratio = 0.9;
			if(sWidth == 580){
				ratio = 0.78;
			}
			
		}	
		th.scaleX = th.scaleY = ratio;	
		th.x = ((canvas.width - (sWidth * ratio))/2);
		th.y = ((canvas.height - (sHeight * ratio))/2);				
		mediaStage.update();				
	}		
	th.tick = function()
	{				
		if(update)
		{			
			update = false;
			mediaStage.update();			
		}
	}			
	$(window).resize(function(){
		th.resizer();
	});
	th.resizer();		
		
}).prototype = new createjs.Container();
/********************************************************************************************************************************
													Single Slide Container
*********************************************************************************************************************************/
(Slide = function(xml,divId){
	this.initialize();
	
	var th = this;
	var slideDivId = divId;	
	var lastDivId;
	
	$(xml).find("element").each(function(index, element) {
		var obj = {};
		$.each(this.attributes,function(i, at)
		{
			obj[at.name] = at.value;				
		});	
		var displayObject = getCJSElement($(this).attr("type"),obj,slideDivId,this);
		th.addChild(displayObject);	
		//To find last div tag		
		if(obj.compId) lastDivId = obj.compId;
		if(obj.textId) lastDivId = obj.textId;		
	});			
	th.hide = function()
	{
		$("#"+slideDivId).hide();	
	};
	th.show = function()
	{		
		$("#"+slideDivId).show();	
	};		
	if(lastDivId)
	{	
		var cInter = setInterval(function(){
			if(document.getElementById(lastDivId))
			{
				clearInterval(cInter);
				//Callback public function			
				if(typeof slideViewDidLoad == 'function') slideViewDidLoad(th,slideDivId.split("_")[1]);	
			}
		},10);
	}
	update = true;
}).prototype = new createjs.Container();
/********************************************************************************************************************************
												Multiple Slides with Bar Button
*********************************************************************************************************************************/
(MultiBar = function(xml){
	this.initialize();
	
	var th = this;
	var slideArray = [];
	var bContainer,selectImg,normalImg,singleDigit,tempImg,hitShape,normalCont,selectedCont,sType,slide,obj,xElement,currentBtn;				
	//Mouse over event
	th.mouseOver = function(e)
	{
		if(e.target == currentBtn) return;
		document.body.style.cursor='pointer';
		e.target.normalCont.visible = true;
		e.target.selectedCont.visible = false;
		update = true;
	}	
	//Mouse out event
	th.mouseOut = function(e)
	{
		document.body.style.cursor='default';
		if(e.target == currentBtn) return;		
		e.target.selectedCont.visible = true;
		e.target.normalCont.visible = false;
		update = true;
	}	
	//Click event
	th.mouseClick = function(e)
	{		
		if(e.target == currentBtn) return;	
		currentBtn.selectedCont.visible = true;
		currentBtn.normalCont.visible = false;	
		slideArray[currentBtn.btnId].hide();	
		slideArray[currentBtn.btnId].visible = false;
		currentBtn = e.target;		
		th.slideHandler();		
	}		
	//Handle slide Events	
	th.slideHandler = function()
	{		
		currentBtn.selectedCont.visible = false;
		currentBtn.normalCont.visible = true;				
		slideArray[currentBtn.btnId].visible = true;
		slideArray[currentBtn.btnId].show();
		update = true;
	}			
	//For loading Slide Assets	
	th.loadSlideAssets = function()
	{			
		var slideCnt = 0;
		$(xml).children().each(function(index, element) {		
			//Find elements		
			xElement = $(this).find("element")[0];
			if(xElement)
			{
				//Slide content	
				slideCnt++;
				sType = $(this).attr("type") ? $(this).attr("type") : "SINGLE";
				$("#commonMediaText").append("<div id='slide_"+slideCnt+"'></div>");
				slide = getCJSElement(sType,element,"slide_"+slideCnt);
				th.addChild(slide);		
				slide.hide();		
				slide.visible = false;				
				slideArray[slideArray.length] = slide;							
			}
			else
			{
				//Element content
				obj = {};				
				$.each(this.attributes,function(i, at){
					obj[at.name] = at.value;		
				});				
				th.addChild(getCJSElement($(this).attr("type"),obj));			
			}
		});				
	}
	
	th.loadButtons = function(imgs)
	{		
		//load slides assets
		th.loadSlideAssets();
							
		tempImg = new createjs.Bitmap(imgs["btn_bar"]); //ImageComp({src:"../../../common/images/btn_bar.png",x:,y:1})
		tempImg.x = sWidth-30;
		tempImg.y = 1;
		th.addChild(tempImg);
		
		for(var i = 0;i<$(xml).find("slide").length;i++)
		{
			singleDigit = (i+1) < 10 ? "0"+(i+1) : i;
			singleDigit = i == 9 ? 10 : singleDigit;
			normalImg = imgs["btn"+singleDigit];
			selectImg = imgs["btn"+singleDigit+"_sel"];;	
			
			//Button container
			bContainer = new createjs.Container();	
			//Normal button image
			tempImg = new createjs.Bitmap(normalImg);	
			bContainer.addChild(tempImg);	
			bContainer.normalCont = tempImg;
			//Selected button image
			tempImg = new createjs.Bitmap(selectImg);
			bContainer.addChild(tempImg);	
			bContainer.selectedCont = tempImg;				
			//Button Hit area
			hitShape = new createjs.Shape()
			hitShape.graphics.beginFill().drawRect(0,0,26,36);			
			bContainer.addChild(hitShape);	
			//Button id		
			bContainer.btnId = i;
			//Mouse events
			bContainer.onMouseOver = th.mouseOver;
			bContainer.onMouseOut = th.mouseOut;
			bContainer.onClick = th.mouseClick;
			th.addChild(bContainer);		
			bContainer.x = sWidth-28;
			bContainer.y = 3+(i*36);		
			if(i==0 ) currentBtn = bContainer;
		}		
		//Load first slide assets
		th.slideHandler();	
	}
		
	//Loading Button Assets	 
	var manifest = [{id:"btn_bar", src:"../../../common/images/btn_bar.png"}];	
	
	for(var i = 0;i<$(xml).find("slide").length;i++)
	{
		singleDigit = i < 10 ? "0"+(i+1) : i;
		singleDigit = i == 9 ? 10 : singleDigit;
		normalImg = "../../../common/images/btn"+singleDigit+".png";
		selectImg = "../../../common/images/btn"+singleDigit+"_sel.png";	
		manifest.push({id:"btn"+singleDigit, src:normalImg});
		manifest.push({id:"btn"+singleDigit+"_sel", src:selectImg});					
	}	
	
	loadImages(manifest,th.loadButtons);
		
}).prototype = new createjs.Container();

/********************************************************************************************************************************
												Multiple Slides with Bar Button
*********************************************************************************************************************************/
(MButton = function(xml){
	this.initialize();
	
	
	
}).prototype = new createjs.Container();
/********************************************************************************************************************************
														Image Component
														---------------
<element type="IMAGE" subType="STD" src="" x="" y="" width="" height=""/>
*********************************************************************************************************************************/
(ImageComp = function (obj) {
	this.initialize();
	
	var th = this;	
	var img,bitmap,width,height;
		
		img = new Image();
	img.onload = function(ev){th.imageLoaded(ev)};
	//alert(pathh.substring(0, pathh.length-13))
	
	//alert(pathh+imagesource+obj.src);
	img.src = imagesource+obj.src;
	//img.src = pathh.substring(0, pathh.length-13)+obj.src;	
	
	th.imageLoaded = function(ev)
	{			
		obj.width = obj.width ? obj.width :ev.target.width;
		obj.height = obj.height ? obj.height :ev.target.height;		
		//Calculating Image size ratio
		obj.ratio = Math.min((obj.width/ev.target.width),(obj.height/ev.target.height));	
		//Check subtype	
		obj.subType = obj.subType ? obj.subType : "none";
		width = ev.target.width * obj.ratio;
		height = ev.target.height * obj.ratio;	
		//Bitmap
		bitmap = new createjs.Bitmap(ev.target);
		bitmap.scaleX = bitmap.scaleY = obj.ratio;
		th.addChild(bitmap);
		//Check subtype
		switch(obj.subType)
		{
			case "STD":
					th.std();	
				break;
			case "HTML":
					th.removeChild(bitmap);					
				break;
			case "HOTSPOT":
			
				break;
		}				
		if(obj.x) th.x = obj.x;
		if(obj.y) th.y = obj.y;				
		update = true;
	}
	th.std = function()
	{
		//Shadow shape
		var shadowShape = new createjs.Shape();				
		shadowShape.graphics.beginFill('rgba(0,0,0,1)').drawRoundRect(0,0,width,height,8);
		shadowShape.shadow = new createjs.Shadow("#000000",3,3,10);
		shadowShape.x = shadowShape.y = 0.5;
		shadowShape.scaleX = shadowShape.scaleY = 0.99;
		th.addChild(shadowShape);		
		th.swapChildren(bitmap,shadowShape);	
		//Mask shape
		var maskShape = new createjs.Shape();
		maskShape.graphics.beginFill().drawRoundRect(0,0,width,height,8);			
		th.addChild(maskShape);			
		bitmap.mask = maskShape;	
	}	
	
}).prototype = new createjs.Container();
/********************************************************************************************************************************
													Lazy Text Component
													-------------------
	Title 	-	<element type="TEXT" subType="TITLE" compId="ID_title"/>
	Table 	-	<element type="TEXT" subType="TABLE" compId="ID_table" x="" y="" width=""/>
	Label 	-	<element type="TEXT" compId="ID_s3_txt05" x="101.7" y="274.60" width="76" expand="down" align="center" bgColor="#FDE6D4" borderColor="#F68026" border="2" corner="5"/>
*********************************************************************************************************************************/
(TextComp = function (obj) {
    this.initialize();
    
    var th = this;    
    var divElement,width,height,widthStr;
        
    obj.color = obj.color ? obj.color : "#393536";
    obj.size = obj.size ? obj.size : 11;
    obj.align = obj.align ? obj.align : "left";
    obj.width = obj.width ? parseFloat(obj.width) : "auto";        
    obj.expand = obj.expand ? obj.expand : "undefined";        
    obj.style = obj.style ? obj.style : "";
    obj.div = obj.div ? obj.div : "commonMediaText";
    obj.subType = obj.subType ? obj.subType : "LABEL";
    obj.x = obj.x ? parseFloat(obj.x) : 0;
    obj.y = obj.y ? parseFloat(obj.y) : 0;
     
    if(obj.bug) obj.style +="border:0.5px solid #00FF00;";
            
    if(obj.subType == "TITLE")
    {    
        obj.align = "center";
        obj.size = 13;
        obj.x = 0;
        obj.y = 1;
        obj.expand = "down";
        if($($(canvasXML).find("slide")[0]).attr("type") == "MBAR")
        {        
            obj.width = sWidth-32;    
        }
        else
        {
            obj.width = sWidth-2;
        }
    }
    widthStr = obj.width+"px";
    //For table
   // obj.expand = obj.subType == "TABLE" ? "undefined" : obj.expand;    
   // if(obj.subType == "TABLE") obj.x = obj.x - 10;
   	if(obj.subType == "TABLE")
   	{
	   if(obj.height) obj.style += "max-height:"+parseFloat(obj.height)+"px;overflow:auto;";
	}
    //For label and title
    if((obj.subType == "TITLE") || (obj.subType == "LABEL"))
    {
      
    }
    //For static text
    if(obj.text)
    {         
                       
    }
    //Text from canvas xml
    if(obj.textId)
    {
        obj.id = obj.textId;
        widthStr = obj.width == "auto" ? "auto" : obj.width+"px";
        obj.text = $(canvasXML).find("text#"+obj.textId).text();    
    }
    //Text from media xml
    if(obj.compId)
    { 
        obj.id = obj.compId;
        obj.text = getMediaText(obj.compId);    
    }  
	//For bold text
	if(obj.bold && (obj.bold == "1")) obj.style += "font-weight:bold;";
        
    obj.size = obj.size / 12;
    obj.x = obj.x + 10;
	
    divElement = document.createElement("div");    
    if(obj.class) divElement.setAttribute("class",obj.class);    
    divElement.style.cssText = "top:0px;left:0px;width:"+widthStr+";text-align:"+obj.align+";font-size:"+obj.size+"em;color:"+obj.color+";"+obj.style+";visibility:hidden;";    
    if(obj.id) divElement.id = obj.id;    
    divElement.innerHTML = obj.text;    
    $("#"+obj.div).append(divElement);
	
    switch(obj.expand)
    {
        case "up+down":
			$(divElement).css('width', 'auto');
			var maxHeight = $(divElement).height();
			$(divElement).css('width', obj.width+'px');
			if(maxHeight < $(divElement).height()){
				obj.y = obj.y - ($(divElement).height()/2) + (maxHeight/2)+1;
			}
			
            break;                
        case "down":
                obj.y = obj.y;                
            break;                
        case "up":
				var maxHeight = $(divElement).height();
				if(maxHeight > parseInt($(divElement).css('line-height'))){
					obj.y = obj.y - ($(divElement).height()) + (maxHeight/2);
				}
            break;                
        case "left":
			$(divElement).css('width', 'auto');
			var maxWidth = obj.width;
			if(maxWidth < $(divElement).width()){
				maxWidth = $(divElement).width();
				obj.x = obj.x - (maxWidth - obj.width);
			}
			$(divElement).css('width', (maxWidth+1)+'px');
			
			
			/*var strArr1 = obj.text.split("<li>");
            var strArr = strArr1.toString().split("</li>");
			var maxWidth = 0;
			for(var i=0; i<strArr.length; i++){
				var csjText = new createjs.Text(strArr[i]);
				if(maxWidth < csjText.getMeasuredWidth()){
					maxWidth = csjText.getMeasuredWidth();
				}
			}
		
           
			if(obj.width < maxWidth){
				$(divElement).css('width', (maxWidth)+'px');
				obj.x = obj.x - (maxWidth - obj.width);
			}
			csjText = null;  */         
            break;            
        case "right":
		
			$(divElement).css('width', 'auto');
			var maxWidth = obj.width;
			if(maxWidth < $(divElement).width()){
				maxWidth = $(divElement).width();
			}
			
			$(divElement).css('width', (maxWidth+1)+'px');
		
		
            /*var strArr1 = obj.text.split("<li>");
            var strArr = strArr1.toString().split("</li>");
			
			var maxWidth = 0;
			for(var i=0; i<strArr.length; i++){
			
				//alert(textWidth(strArr[i]));
			
				if(maxWidth < textWidth(strArr[i]){
					maxWidth = textWidth(strArr[i]);
				}
			}
			alert(obj.width+":"+maxWidth);
            if(obj.width < maxWidth)
            $(divElement).css('width', (maxWidth)+'px');*/
                      
            break;            
        case "left+right":   
			
			$(divElement).css('width', 'auto');
			var maxWidth = obj.width;
			if(maxWidth < $(divElement).width()){
				maxWidth = $(divElement).width();
				obj.x = obj.x - (maxWidth/2) + (obj.width/2);
			}
			
			$(divElement).css('width', (maxWidth+1)+'px');
			
            /*var csjText = new createjs.Text(obj.text);
            //alert(obj.width +"::"+csjText.getMeasuredWidth());
			if(obj.width < csjText.getMeasuredWidth()){
				$(divElement).css('width', (csjText.getMeasuredWidth())+'px');
				obj.x = obj.x - (csjText.getMeasuredWidth()/2) + (obj.width/2);
			}
			csjText = null;*/
            break;                
        default:
			obj.x = obj.x;
			obj.y = obj.y;
            break;            
    }  


	var domElement = new createjs.DOMElement(divElement);    
        
    height = $(divElement).height();
    width = $(divElement).width();
            
    //background graphics    
    var bg = new createjs.Shape();    
    th.addChild(bg);
    
    th.drawBG = function(){
		if(obj.bgColor || obj.borderColor)
		{
			obj.bgColor = obj.bgColor ? obj.bgColor : "";            
			obj.corner = obj.corner ? parseInt(obj.corner) : 0;
			obj.border = obj.border ? parseInt(obj.border) : 1;
			obj.borderColor = obj.borderColor ? obj.borderColor : ""; 
			height = $(divElement).height();
			width = $(divElement).width();
		
			width = width + (2*obj.border);
			height = height + (2*obj.border);
			bg.graphics.clear();
			bg.graphics.setStrokeStyle(obj.border);
			bg.graphics.beginStroke(obj.borderColor);
			if(obj.subType == "BUBBLE")
       		{
				bg.graphics.beginFill(obj.bgColor).drawRoundRect(0,1,width+2,height,obj.corner);
				bg.y = -2;	
				domElement.x = 3;
				domElement.y = 2;
				obj.y = obj.y + 3;
			}
			else
			{
				bg.graphics.beginFill(obj.bgColor).drawRoundRect(-2.5-obj.border,-2.5,width+5,height+5,obj.corner);    
				bg.y = -2.5;	
			}
			bg.x = -10;
		}
    }
	
    th.drawBG();   
    
    if(obj.rotation) th.rotation = obj.rotation;
    th.x = obj.x;
    th.y = obj.y;
    th.addChild(domElement);        
}).prototype = new createjs.Container();
/********************************************************************************************************************************
														Graphic Element
														----------------
	Arrow 		-	<element type="SHAPE" subType="ARROW" x="272.45" y="205.4" length="120" thickness="3" color="#F68026" rotation="170"/>
	Line		-	<element type="SHAPE" subType="LINE" x="0" y="0" x1="10" y1="20" stroke="2" strokeColor="#000"/>
	Rectangle	-	<element type="SHAPE" subType="RECT" x="0" y="0" stroke="2" strokeColor="#000" color="#f36" corner="2" width="100" height="200"/>
	Circle		-	<element type="SHAPE" subType="CIRCLE" x="0" y="0" stroke="2" strokeColor="#000" color="#f36" corner="2" width="100" height="200"/>
*********************************************************************************************************************************/
function drawGraphics(obj)
{
	var shape = new createjs.Shape();
	obj.x = obj.x ? parseFloat(obj.x) : 0;
	obj.y = obj.y ? parseFloat(obj.y) : 0;
	
	switch(obj.subType)
	{
		case "ARROW":
				shape = new ArrowComp(obj);
			break;	
		case "LINE":
				obj.stroke = obj.stroke ? obj.stroke : 1;
				obj.strokeColor = obj.strokeColor ? obj.strokeColor : "#000";
				shape.graphics.setStrokeStyle(obj.stroke).beginStroke(obj.strokeColor).lineTo(obj.x,obj.y).lineTo(obj.x1,obj.y1).endStroke();
				obj.x = 0;
				obj.y = 0;
			break;	
		case "RECT":
				obj.stroke = obj.stroke ? obj.stroke : 0;
				obj.strokeColor = obj.strokeColor ? obj.strokeColor : "";
				obj.color = obj.color ? obj.color : "";
				obj.corner = obj.corner ? obj.corner : 0;
				shape.graphics.setStrokeStyle(obj.stroke).beginStroke(obj.strokeColor);					
				shape.graphics.beginFill(obj.color).drawRoundRect(0,0,parseFloat(obj.width),parseFloat(obj.height),obj.corner);	
			break;
		case "CIRCLE":
				var width,height,ratio;					
				width = parseFloat(obj.width);
				height = parseFloat(obj.height);
				ratio = width < height ? height/2 : width/2;
				obj.stroke = obj.stroke ? obj.stroke : 0;
				obj.strokeColor = obj.strokeColor ? obj.strokeColor : "";
				obj.color = obj.color ? obj.color : "";
				shape.graphics.setStrokeStyle(obj.stroke).beginStroke(obj.strokeColor);		
				shape.graphics.beginFill(obj.color).drawCircle(0,0,ratio);
				if(width<height)
				{							
					shape.scaleX = width/(ratio*2);	
				}
				else
				{					
					shape.scaleY = height/(ratio*2);
				}		
				obj.x = obj.x + ratio + 5;
				obj.y = obj.y + ratio -15;
				break;
		default:
			break;
	}	
	if(obj.rotation) shape.rotation = obj.rotation;	
	shape.x = obj.x;
	shape.y = obj.y;	
	return shape;	
}
/********************************************************************************************************************************
													Arrow Component
													---------------
	<element type="SHAPE" subType="ARROW" x="272.45" y="205.4" length="120" thickness="3" color="#F68026" rotation="170"/>
*********************************************************************************************************************************/
(ArrowComp = function (obj) {
	this.initialize();
	
	var th = this;	
	var arrow,length,thick,width,height,color;
	length = obj.length ? parseFloat(obj.length) : 10;
	color = obj.color ? obj.color : "#000";
	thick = obj.thickness ? parseInt(obj.thickness) : 2;
	width = thick == 2 ? 7 : 10;
	height = thick == 2 ? 3 : 4;
	height = height+0.5;
	arrow = new createjs.Shape();
	arrow.graphics.setStrokeStyle(thick/4);
	arrow.graphics.beginStroke(color);
	arrow.graphics.beginFill(color);
	arrow.graphics.moveTo(0,0);
	arrow.graphics.lineTo(0,0);
	arrow.graphics.lineTo(width,height);
	arrow.graphics.lineTo(width/2,0);
	arrow.graphics.lineTo(width,-height);
	arrow.graphics.lineTo(-1.5,0);
	arrow.graphics.setStrokeStyle(thick);
	arrow.graphics.moveTo(width/2,0);
	arrow.graphics.lineTo(length,0);
	arrow.graphics.endFill();	
	th.addChild(arrow);	
	if(obj.rotation) th.rotation = obj.rotation;		
	th.x = obj.x ? parseFloat(obj.x) : 0;
	th.y = obj.y ? parseFloat(obj.y) : 0;	
}).prototype = new createjs.Container();
/********************************************************************************************************************************
													Router Output Component
													-----------------------
	<element type="ROUTER" textId="ID_s1_txt04" x="0" y="250" width="450" height="100"/>


*********************************************************************************************************************************/
(RouterComp = function(obj){
	this.initialize();
	
	var th = this;
	
	obj.width = obj.width ? (parseFloat(obj.width) * 2)-60 : 50;
	obj.height = obj.height ? (parseFloat(obj.height)*2)-60 : 35;
	 
	var img = new Image();
	img.onload = function(e){th.imageLoaded(e);};
	img.src = "../../../common/images/Router.png";
	
	th.imageLoaded = function(ev)
	{		
		var textComp,container,shape,bitmapTop,bitmapDown,bitmapLeft,bitmapRight,cacheCont;		
		container = new createjs.Container();
		th.addChild(container);
		
		bitmapTop = new createjs.Bitmap(ev.target);
		bitmapDown = new createjs.Bitmap(ev.target);
		bitmapLeft = new createjs.Bitmap(ev.target);
		bitmapRight = new createjs.Bitmap(ev.target);
		
		//For background color
		shape = new createjs.Shape();
		shape.graphics.beginFill("#F2F2F2").drawRect(20,20,obj.width+40,obj.height+40);	
		container.addChild(shape);
		//For top left corner
		shape = new createjs.Shape();
		shape.graphics.beginBitmapFill(ev.target,"no-repeat").drawRect(0,0,40,40);			
		container.addChild(shape);
		//For top middle line
		bitmapTop.sourceRect = new createjs.Rectangle(40,0,40,40);
		bitmapTop.x = 39.1;
		bitmapTop.scaleX = obj.width/40;	
		container.addChild(bitmapTop);				
		//For top right corner
		shape = new createjs.Shape();
		shape.graphics.beginBitmapFill(ev.target,"no-repeat").drawRect(160,0,40,40);
		shape.x = obj.width - 122;	
		container.addChild(shape);		
		//For right line
		bitmapRight.sourceRect = new createjs.Rectangle(160,40,40,40);
		bitmapRight.x = obj.width+38;
		bitmapRight.y = 39.1;
		bitmapRight.scaleY = obj.height/40;	
		container.addChild(bitmapRight);	
		//For down left corner
		shape = new createjs.Shape();
		shape.graphics.beginBitmapFill(ev.target,"no-repeat").drawRect(0,80,40,40);	
		shape.y = -41.5+obj.height;
		container.addChild(shape);	
		//For down middle line
		bitmapDown.sourceRect = new createjs.Rectangle(40,80,40,40);
		bitmapDown.x = 39.1;
		bitmapDown.y = 38.3+obj.height;
		bitmapDown.scaleX = obj.width/40;	
		container.addChild(bitmapDown);			
		//For down right corner
		shape = new createjs.Shape();
		shape.graphics.beginBitmapFill(ev.target,"no-repeat").drawRect(160,80,40,40);
		shape.x = obj.width - 122;	
		shape.y = -41.5+obj.height;
		container.addChild(shape);
		//For left line
		bitmapLeft.sourceRect = new createjs.Rectangle(0,40,40,40);
		bitmapLeft.y = 39.1;
		bitmapLeft.scaleY = obj.height/40;	
		container.addChild(bitmapLeft);
					
		container.scaleX = container.scaleY = 0.5;
		container.x = -5;
		
		cacheCont = new createjs.Container();
		cacheCont = container.cache(0,0,obj.width/0.5,obj.height/0.1,0.5);		
		th.addChild(cacheCont);	
								
		if(obj.textId)
		{						
			obj.style = obj.style ? obj.style : "";	
			obj.size = obj.size ? obj.size : 11;
			obj.text = obj.text ? obj.text : $(canvasXML).find("text#"+obj.textId).text();	
			obj.div = obj.div ? obj.div : "commonMediaText";
			obj.textX = obj.textX ? obj.textX : 6.5;
			obj.style = "font-family: courier new;overflow:auto;padding-left:2px;padding-top:1px;height:"+((obj.height/2)+13)+"px";		
	        textComp = new TextComp({textId:obj.textId,subType:"ROUTER",text:obj.text,x:obj.textX,y:12,expand:"down",div:obj.div,width:((obj.width/2)+12),align:"left",style:obj.style,size:obj.size,color:"#000"});			
			th.addChild(textComp);	
		}	
		th.x = obj.x ? parseFloat(obj.x) : 0;
		th.y = obj.y ? parseFloat(obj.y)-5 : 0;	
		update = true;	
	}
	
}).prototype = new createjs.Container();
/********************************************************************************************************************************
														Bubble Component
														----------------
	Default	-	<element type="BUBBLE" compId="ID_bubble" x="100" y="70" width="200" height="100" size="11" align="center" tailPosition="2" tailFlip="1"/>
	Custom	-	<element type="BUBBLE" compId="ID_bubble" x="100" y="70" width="200" height="100" size="11" align="center" tailPosition="2" tailFlip="1" bgColor="#f45" borderColor="#3f6"/>
*********************************************************************************************************************************/
(BubbleComp = function (obj) {
	this.initialize();
	
	var th = this;	
	var width,height,textComp,bgColor,borderColor,shadowCont,shadowShape,shadowTail,tailShape;
	
	obj.width = obj.width ? parseFloat(obj.width) : 50;
	obj.height = obj.height ? parseFloat(obj.height) : 50;	
	obj.align = obj.align ? obj.align : "left";
	obj.x = obj.x ? parseFloat(obj.x) : 0;
	obj.y = obj.y ? parseFloat(obj.y) : 0;
	obj.size = obj.size ? obj.size : 11;
	obj.div = obj.div ? obj.div : "commonMediaText";
	obj.bgColor = obj.bgColor ? obj.bgColor : "#cce9e7";
	obj.borderColor = obj.borderColor ? obj.borderColor : "#67bdbc";
	
	width = obj.width;
	height = obj.height;
	
	if((obj.tailPosition == "2") || (obj.tailPosition == "3") ||(obj.tailPosition == "4") ||(obj.tailPosition == "8") ||(obj.tailPosition == "9") ||(obj.tailPosition == "10")) width = width-20;
	obj.wid = width;	
	textComp = new TextComp({subType:"BUBBLE",compId:obj.compId,x:0,y:0,size:obj.size,div:obj.div,width:width-6,height:height-6,align:obj.align,bgColor:obj.bgColor,borderColor:obj.borderColor,corner:2,border:3,expand:"down"});
			
	width = $("#"+obj.compId).width();
	height = $("#"+obj.compId).height() + 10;
	//Shadow container
	shadowCont = new createjs.Container();	
	shadowShape = new createjs.Shape();
	shadowShape.graphics.beginFill("#000").drawRoundRect(0,0,obj.wid,height-2,4);	
	
	width = width < 30 ? 30 : width;
	height = height < 30 ? 30 : height;
	obj.val = (obj.tailFlip && obj.tailFlip == "1") ? 15 : 0;
	//Shadow Tail shape
	shadowTail = new createjs.Shape();
	shadowTail.graphics.beginFill(obj.borderColor);
	shadowTail.graphics.lineTo(0,0).lineTo(15,0).lineTo(obj.val,-22).lineTo(0,0);
	shadowTail.graphics.endFill();
	
	shadowCont.addChild(shadowTail,shadowShape);
	shadowCont.shadow = new createjs.Shadow("#666263",0,1.5,5);
	shadowCont.y = 1;
	th.addChild(shadowCont);
	//Tail shape
	tailShape = new createjs.Shape();
	tailShape.graphics.beginFill(obj.borderColor);
	tailShape.graphics.lineTo(0,0).lineTo(15,0).lineTo(obj.val,-22).lineTo(0,0);
	tailShape.graphics.endFill();
	th.addChild(tailShape);
	th.addChild(textComp);	
	
	switch(obj.tailPosition)
	{
		case "1"://done
				obj.y = obj.y + 19;
				shadowTail.y = 1;
				shadowTail.x = width-13;
				obj.x = obj.x;
				obj.y = obj.y + 1;
			break;					
		case "2":
				shadowTail.rotation = 90;				
				shadowTail.x = width+5;
				shadowTail.y = 12;
				obj.x = obj.x - 3;
			break;								
		case "3":
				shadowTail.rotation = 90;	
				shadowTail.x = width+5;
				shadowTail.y = (height-15)/2;
				obj.x = obj.x - 3;
			break;							
		case "4"://done
				shadowTail.rotation = 90;	
				shadowTail.x = width+5;
				shadowTail.y = height-20;
				obj.x = obj.x - 3;	
			break;								
		case "5"://done
				shadowTail.rotation = 180;				
				shadowTail.x = width;
				shadowTail.y = height-1;	
				obj.x = obj.x - 1;		
								
			break;									
		case "6"://done
				shadowTail.rotation = 180;				
				shadowTail.x = (width+25)/2;
				shadowTail.y = height-4;
			break;										
		case "7"://done
				shadowTail.rotation = 180;				
				shadowTail.x = 20;
				shadowTail.y = height-4;
				obj.y = obj.y + 2;
			break;											
		case "8"://done
				shadowTail.rotation = 270;				
				textComp.x = textComp.x+5;
				shadowCont.x = shadowCont.x + 5;
				shadowTail.x = shadowTail.x + 5;
				shadowTail.y = height-7;
				obj.x = obj.x + 18;
			break;											
		case "9"://done
				shadowTail.rotation = 270;				
				textComp.x = textComp.x+5;
				shadowCont.x = shadowCont.x + 5;
				shadowTail.x = shadowTail.x + 5;
				shadowTail.y = (height+15)/2;
				obj.x = obj.x + 18;
			break;												
		case "10":
				shadowTail.rotation = 270;
				textComp.x = textComp.x+5;
				shadowTail.x = shadowTail.x;
				shadowTail.y = 28;
			break;			
		case "11"://done
				textComp.x = textComp.x-3;
				shadowTail.x = 5;
				shadowTail.y = 1;
				obj.y = obj.y + 20;
			break;		
		case "12":
				obj.y = obj.y + 19;
				shadowTail.x = (width-22)/2;
				shadowTail.y = 1;
			break;	
		
	}	
	if(obj.tailPosition == "11")
	{
		
	}
	if((obj.tailPosition == "5") || (obj.tailPosition == "6") || (obj.tailPosition == "7"))
	{
		if(obj.height > (height+12)) 
		{					
			obj.y = obj.y + (obj.height - height) - 19;
		}else
		{					
			obj.y = obj.y - ((height+ 21) - obj.height);						
		}
	}
	if((obj.tailPosition == "8") || (obj.tailPosition == "9") || (obj.tailPosition == "10") || (obj.tailPosition == "2") || (obj.tailPosition == "3") || (obj.tailPosition == "4"))
	{
		if(obj.height > height) 
		{					
			obj.y = obj.y + (obj.height - height) + 2;
		}else
		{				
			
			obj.y = obj.y - (height - obj.height);						
		}
	}
	
	tailShape.x = shadowTail.x;
	tailShape.y = shadowTail.y;
	tailShape.rotation = shadowTail.rotation;
	th.x = obj.x;
	th.y = obj.y;
		
}).prototype = new createjs.Container();
/********************************************************************************************************************************
										(TextBox) or (Purple Box) or (Feedback) Component
										 ------------------------------------------------
	<element type="TEXTBOX" subType="CLOSABLE" titleId="ID_s2_title" bodyId="ID_bubble" x="0" y="0" width="200" height="100" animated="1" visible="0"/>	
*********************************************************************************************************************************/
(TextBoxComp = function(obj){
	this.initialize();
		
	var th = this;
	var shape,tbCanvas,tbContainer,width,height,titleHeight,textComp,bodyTextY;
	
	width = obj.width ? parseFloat(obj.width) : 50;
	height = obj.height ? parseFloat(obj.height) : 50;
	obj.div = obj.div ? obj.div :"mediaContainer";
	obj.divId = "textBoxDiv_"+textBoxCount;
	//obj.divId = obj.divId  ? obj.divId : obj.div+"_textBoxDiv";
	$("#"+obj.div).append(('<div id="'+obj.divId+'"></div>'));
	//textbox canvas
	tbCanvas = document.createElement("canvas");
	tbCanvas.width = width+25;
	tbCanvas.height = height+20;
	tbCanvas.id = "textBoxCanvas";
	tbCanvas.style.cssText = "position:absolute;left:0px;top:0px;visibility:hidden;";
	$("#"+obj.divId).append(tbCanvas);
	//convert to createjs DOMElement
	var domElement = new createjs.DOMElement(tbCanvas);
	th.x = obj.x ? parseFloat(obj.x)-9 : 0;
	th.y = obj.y ? parseFloat(obj.y)-11 : 0;
	th.addChild(domElement);
	
	//For changing title text
	th.setTitleId = function(id)
	{		
		$("#"+obj.divId+'_title').remove();
		$("#"+obj.divId).append('<div id="'+obj.divId+'_title"></div>');
		textComp = new TextComp({compId:id,x:11,y:13,width:width-30,div:obj.divId+'_title',color:"#442557"});
		th.addChild(textComp);
		//$("#"+obj.titleId).text(getMediaText(id));
	}
	//For changing body text
	th.setBodyId = function(id)
	{
		//$("#"+obj.bodyId).text(getMediaText(id));
		$("#"+obj.divId+'_body').remove();
		$("#"+obj.divId).append('<div id="'+obj.divId+'_body"></div>');
		obj.style = "overflow:auto !important; height:"+(height-14)+"px;";
		textComp = new TextComp({compId:id,x:11,y:bodyTextY,width:width-11,style:obj.style,div:obj.divId+'_body'});
		th.addChild(textComp);
	}	
	
	//Textbox Stage
	var pStage = new createjs.Stage(tbCanvas);
	//Textbox container
	var tbContainer = new createjs.Container();	
	tbContainer.x = 15;
	tbContainer.y = 10;
	pStage.addChild(tbContainer);	
	//Background color
	shape = new createjs.Shape();
	shape.graphics.beginFill("#C1ABD1").drawRoundRect(0,0,width,height,4);	
	shape.shadow = new createjs.Shadow("#666263",0,3,7);
	tbContainer.addChild(shape);
	//Title line
	shape = new createjs.Shape();
	shape.graphics.beginFill("#462559").drawRect(2,0,width-4,2);	
	shape.y = 5;
	tbContainer.addChild(shape);
	titleHeight = 4;	
	height = height - 4;
	//Title text 
	if(obj.titleId)

	{				
		th.setTitleId(obj.titleId);	
		//textComp = new TextComp({compId:obj.titleId,x:11,y:13,width:width-30,div:obj.divId+'_title',color:"#442557"});
		//th.addChild(textComp);
		titleHeight = $("#"+obj.titleId).height()+4;
		shape.y = titleHeight;
		height = height-titleHeight+4;
	}
	//Body background
	shape = new createjs.Shape();
	shape.graphics.beginFill("#fff").drawRect(4,8,width-8,height-13);	
	shape.y = titleHeight ? titleHeight :0;
	tbContainer.addChild(shape);
	//Body text 
	if(obj.bodyId)
	{
		bodyTextY = (shape.y+18);
		th.setBodyId(obj.bodyId);		
		//obj.style = "overflow:auto !important; height:"+(height-14)+"px;";
		//textComp = new TextComp({compId:obj.bodyId,x:11,y:(shape.y+18),width:width-11,style:obj.style,div:obj.divId});
		//th.addChild(textComp);
	}			
	obj.subType = obj.subType ? obj.subType : "ROLLOVER";
	//For Close Button
	if(obj.subType == "CLOSABLE")
	{ 
		if (createjs.Touch.isSupported()) createjs.Touch.enable(pStage);
		pStage.enableMouseOver();
		var cImg = new Image();
		cImg.src = "../../../common/images/closeBtn.jpg";
		cImg.onload = function(ev)
		{			
			shape = new createjs.Bitmap(ev.target);//ImageComp({src:"../../../common/images/closeBtn.jpg",x:width-18,y:3});
			shape.cursor = "pointer";
			shape.x = width-19;
			shape.y = 1;
			shape.scaleX = shape.scaleY = 0.8;
			shape.onClick = function(ev)
			{
				if(obj.animated && obj.animated == "1")
				{
					$("#"+obj.divId).hide(2000);
				}
				else
				{
					th.visible = false;
				}
				update = true;
			}
			tbContainer.addChild(shape);
			pStage.update();
		}
	}	
	
	obj.visible = obj.visible ? obj.visible : "1";
	if(obj.visible == "0") th.visible = false;
	pStage.update();	
}).prototype = new createjs.Container();
/********************************************************************************************************************************
														Blue Button Component
														---------------------
	new BlueButton({x:18,y:o.height-37,width:126.6,height:20,id:"r",compId:"comp_text",callback:t.cb});
*********************************************************************************************************************************/
(BlueButton = function(obj){
	this.initialize();
	
	var th = this;	
	var normalCont,overCont,bgShape,selected;
	var minusfactor,plusfactor;
	obj.id = obj.id ? obj.id : "btn";
	obj.width = obj.width ? parseFloat(obj.width) : 100;
	obj.height = obj.height ? parseFloat(obj.height) : 40;	
	obj.div = obj.div ? obj.div : "commonMediaText";
	obj.bold = obj.bold ? obj.bold : "1";
	obj.bold = getMediaText(obj.compId).substr(0,3) == "<b>" ? "0" : obj.bold;
		
	//Default selected mode
	selected = false;
	//Set selected mode
	th.setSelected = function(mode)
	{
		selected = mode;
		if(selected)
		{
			$("#"+obj.compId).css("color","#0f668d");
			normalCont.visible = false;
			overCont.visible = true;
			update = true;
			if(th.getStage()) th.getStage().update = true;
		}				
	}
	//Mouse over function
	th.mouseOver = function()
	{
		th.cursor='pointer';
		if(selected) return;
		$("#"+obj.compId).css("color","#0f668d");
		normalCont.visible = false;
		overCont.visible = true;
		update = true;
		if(th.getStage()) th.getStage().update = true;
	}
	//Mouse out function
	th.mouseOut = function()
	{
		th.cursor='default';
		if(selected) return;
		$("#"+obj.compId).css("color","white");
		normalCont.visible = true;
		overCont.visible = false;
		if(th.getStage()) th.getStage().update = true;
	}
	//Mouse click function
	th.mouseClick = function()
	{
		if(selected) return;
		if(obj.callback) obj.callback(obj.id);
		update = true;
	}
	//Assign mouse events
	th.onMouseOver = th.mouseOver;
	th.onMouseOut = th.mouseOut;
	th.onClick = th.mouseClick;
	
	//For Blue Button Label
	var label = new TextComp({x:0,y:2,width:obj.width-2,compId:obj.compId,align:"center",color:"white",div:obj.div,bold:obj.bold,style:"pointer-events:none;cursor:pointer;"});
	th.addChild(label);	
	
	label.y = $("#"+obj.compId).height() < 20 ? (20-$("#"+obj.compId).height())/2 : (obj.height-$("#"+obj.compId).height())/2;
		
	obj.width = $("#"+obj.compId).width();
	obj.height = obj.height < $("#"+obj.compId).height() ? obj.height : $("#"+obj.compId).height()*1.5;
	
	//Normal stage container
	normalCont = new createjs.Container();		
	minusfactor= obj.height*60/100;
	plusfactor= obj.height*40/100;			  
	ya= parseInt(obj.height-minusfactor);
	yb= parseInt(obj.height+plusfactor); 	
	bgShape = new createjs.Shape();
	bgShape.graphics.beginLinearGradientFill(["#038BD1","#00A1E3"], [0.431,0.6],0, -ya, 0, yb).drawRoundRect(0, 0, obj.width, obj.height, 3);	
	bgShape.shadow = new createjs.Shadow("rgba(13,101,139,1)",0,0,3);
	normalCont.addChild(bgShape);	
	th.addChild(normalCont);
	
	//Over state container
	overCont = new createjs.Container();	
	minusfactor= obj.height*33/100; 
	plusfactor= obj.height*95/100;
	ya= parseInt(obj.height-minusfactor);
	yb= parseInt(obj.height+plusfactor);
	bgShape = new createjs.Shape();
	bgShape.graphics.lf(["#FFFFFF","#CDEAF8"],[0.396,0.663],-0.2, -ya,0.4, yb).drawRoundRect(0, 0, obj.width, obj.height, 3);
	bgShape.shadow = new createjs.Shadow("rgba(13,101,139,1)",0.2,-.02,3);	
	overCont.addChild(bgShape);	
	th.addChild(overCont);
	overCont.visible = false;
	
	th.x = obj.x ? parseFloat(obj.x) : 0;
	th.y = obj.y ? parseFloat(obj.y) : 0;
	
}).prototype = new createjs.Container();
/********************************************************************************************************************************
															Load Images 
*********************************************************************************************************************************/
function loadImages(manifest,callback)
{
	var th = this;
	var pjs = new createjs.LoadQueue(false);
	th.imgs = [];
					
	if(manifest.length == 0)
	{		
		if(callback)callback();	 
	}
	else
	{
		$("#preloader").show();		
		pjs.addEventListener("error", function(ev){th.errorHandler();});			
		pjs.addEventListener("fileload", function(ev){th.fileLoaded(ev);});
		pjs.addEventListener("complete", function(ev){
			$("#preloader").hide();		
			if(callback) callback(th.imgs);
			});
		pjs.loadManifest(manifest);		
	}	
	th.fileLoaded = function(ev)
	{
		if(ev.item.type == createjs.LoadQueue.JAVASCRIPT)
		{
			document.body.appendChild(ev.result);
		}	
		if(ev.item.type == createjs.LoadQueue.IMAGE)
		{
			th.imgs[ev.item.id] = ev.result;		
		}
	}
	th.errorHandler = function(ev)
	{
		//alert("Please check the image src");
		console.log("Please check the image src "+ ev);
	}
}
/********************************************************************************************************************************
													PesudoLocalization Process 
*********************************************************************************************************************************/
function translationProcess()
{	
	var pseudoChars = [];
	pseudoChars["a"] = "ā";
	pseudoChars["b"] = "þ";
	pseudoChars["c"] = "ć";
	pseudoChars["d"] = "đ";
	pseudoChars["e"] = "ē";
	pseudoChars["f"] = "子";
	pseudoChars["g"] = "g"
	pseudoChars["h"] = "ĥ";
	pseudoChars["i"] = "ï";
	pseudoChars["j"] = "ĵ";
	pseudoChars["k"] = "ķ";
	pseudoChars["l"] = "λ";
	pseudoChars["m"] = "μ";
	pseudoChars["n"] = "ñ";
	pseudoChars["o"] = "ð";
	pseudoChars["p"] = "ρ";
	pseudoChars["q"] = "ς";
	pseudoChars["r"] = "ř";
	pseudoChars["s"] = "š";
	pseudoChars["t"] = "ŧ";
	pseudoChars["u"] = "ů";
	pseudoChars["v"] = "υ";
	pseudoChars["w"] = "ŵ";
	pseudoChars["x"] = "文";
	pseudoChars["y"] = "ŷ";
	pseudoChars["z"] = "ž";
	var shortString = "-- 你好世 界 holamu ndo Hallo Welt にちは世界 привет мир 여보세요 세계 hello world Hej verden 789!@# $%^&*--";	
	
	$(mediaXML).find("component").each(function(index, element) {
        var content = $(element).text();
		var skipString = false;
		if(content.length <= 15 && (content.split(".").length ==4)){
			skipString = true;
		}		
		if(skipString == false)
		{
			// strip out HTML
			$("#flashContent").append("<div id='temp'>"+content+"</div>");
			content = $("#temp").text();
			$("#temp").remove();
			content = content.toLowerCase();			
			// find adjusted length - string will grow when localized  
			//  numbers and punctuation won't expand..			
			var noNumbers = content.replace(/[0-9]/g, '');
			noNumbers = noNumbers.split(".").join("");
			noNumbers = noNumbers.split(",").join("");
			
			var conLen = noNumbers.length;
			var pseudoLocalizeAmount = 1
			// we want short strings to have more room for expansion... they get 2x instead of 1.5
			if(conLen <35){
				pseudoLocalizeAmount = 2
			}
			
			var adjLen = conLen*pseudoLocalizeAmount;
			var newString = "";
			var junkString = ""
			for(var v=0;v<10;v++){
				junkString += shortString;
			}
			var localizedString = "";
			for (var j = 0; j<40; j++) {
				localizedString += junkString;
			}
			if (conLen>1) {
				newString = "";
				for (var b = 0; b<=conLen; b++) {
					if ((content.charCodeAt(b)>96) && (content.charCodeAt(b)<123)) {
						newString += pseudoChars[content.charAt(b)];
					} else {
						newString += content.charAt(b);
					}
				}
			}
			if(conLen ==0)newString = $(element).text();
			// add extra chars at the end..    
			if (adjLen>=2 && adjLen<4) {				
				content = newString+junkString.slice(0, (adjLen-conLen));				
			} else if (adjLen>4) {				
				newString += junkString.slice(0, (adjLen-conLen));				
				content = "<b>[</b>"+newString+"<b>]</b>";
			} else {
				content = newString;
			}
			$(element).text(content);
		}
    });
}
/********************************************************************************************************************************
														 Get URL Query
*********************************************************************************************************************************/
function getUrlVars() {
	var vars = {};
	var url = window.parent.parent.location.href;
	var parts = url.split("#")[0].replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}





















