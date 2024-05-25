
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);


(slideViewDidLoad = function(slideContainer,id)
{	
	var whiteBg = new createjs.Shape();
	var textContArr = [];  // hold all text comps 
 	var imageManifest = [];
	var bodyTextCountArr = [];
 	var textObjArr = [];	
	var imgObjectArr = [];
	var slImageArr = [];
	var bitMapArr = [];
	var propW,propH;
	var textHeight=0;
	var imageArr = [],imageContArr=[];
	var mainImageContainer;
	var temp,countVal=0,btnArray=[];
	var buttonImages = {};
	var obj={};
	var legendObj={};
	var preloaderObj,maxVal,minVal,scaleVal,len,lineHeight=310,unitScale,x1=12,x2=28,x3=45,textHeight;
	var arrowImage,flag,bottomCont,topCont,titleText,whiteCont;
	var roundBtn,upArrowBtn,downArrowBtn;
	var xVal1=5,y1 = 68.4,	width=340,height=295,inital_height=295,br=0;
	var initial_y1=68.4;
//drawRect(legendObj.color,Number(legendObj.x),Number(legendObj.y),Number(legendObj.width),Number(legendObj.height),Number(legendObj.br));

	topCont = new createjs.Container();
	
	topCont=  drawRect("#33abdf",0,20,420,28.4,10); 
	topCont.name="topCont";
	topCont.cursor="null";	
	//topCont.alpha=0.5;
	slideContainer.addChild(topCont);
	//
	bottomCont = new createjs.Container();
	
    bottomCont = drawRect("#0197d6",0,358.2,420,28.4,10);
	bottomCont.name="bottomCont";
	bottomCont.cursor="pointer";		
	slideContainer.addChild(bottomCont);
	
   drawRect("#cccccc",10,38.4,410,330,0);//right side grey shape	
	

	drawRect("#4E4C4D",0,38.4,350,330.2,0);//black rectangle
		
	textHandler();
	
	var lineContainer = new createjs.Container();
	lineContainer.x=348;
	lineContainer.y=359;
	slideContainer.addChild(lineContainer);

  	drawline("#FFFFFF",0,0,0,310,3,20,-310);
	drawline("#FFFFFF",-3.5,0,20,0,3,12.5,-310);
	drawline("#FFFFFF",-3.5,0,20,0,3,12.5,0);
	

	function drawline(lineColor,startX,startY,endX,endY,strokeValue,xpos,ypos)
	{		
		var line = new createjs.Shape();
		line.graphics.setStrokeStyle(strokeValue);
		line.graphics.beginStroke(lineColor).moveTo(startX, startY).lineTo(endX, endY);	
		lineContainer.addChild(line);
		line.y=ypos;
		line.x=xpos;
		
	}
	function textHandler()
	{	 
 		//center whitebg resizing 	
		y1=initial_y1+(textHeight-6);		
		height=inital_height-(y1-initial_y1);	 
		whiteBg.graphics.clear();
		whiteBg.graphics.beginFill("#ffffff").drawRoundRect(xVal1,y1,width,height,br); 
		 
	}
 
	slideContainer.addChild(whiteBg);
	
	var tlManifest = [{id:"TimelineLayoutXml", src:'media_3.1.2.2_layout.xml'},
					{id:"TimelineImage1", src:'../../../common/images/Timeline_dot.png'},
					{id:"TimelineImage2", src:'../../../common/images/Timeline_Arrow.png'},
					{id:"TimelineImage3", src:'../../../common/images/up_arrow.jpg'},
					{id:"TimelineImage4", src:'../../../common/images/down_arrow.jpg'},
					{id:"TimelineImage5", src:'../../../common/images/Selected_dot.png'},
					{id:"TimelineImage6", src:'../../../common/images/Timeline_Arrow_1.png'},
					{id:"TimelineImage7", src:'../../../common/images/blue_dot.png'}];
					
	preloaderObj = new createjs.LoadQueue(false);
	preloaderObj.addEventListener("fileload", tlLoaded);
   	preloaderObj.addEventListener("error", tlLoaderError);	
	preloaderObj.addEventListener("complete", tlLoadComplete);
	preloaderObj.loadManifest(tlManifest);	
	
	function tlLoaded(event)
	{		
		switch (event.item.type)
		{	
			case createjs.LoadQueue.IMAGE:
				  buttonImages[event.item.id] = event.result;				 
				break;	
			case createjs.LoadQueue.JAVASCRIPT:
				document.body.appendChild(event.result);
				break;		
			case createjs.LoadQueue.XML:
		 		tlXmlObj = event.result;			
				break;	
		}
	}
	
	function tlLoaderError(event)
	{
	}
		
	var currentSlide;
	
	function tlLoadComplete(event)
	{			
		maxVal=Number($(tlXmlObj).find('timeline').attr('max'));
		minVal=Number($(tlXmlObj).find('timeline').attr('min'));		
		scaleVal=Number($(tlXmlObj).find('timeline').attr('scale'));
		
		len=$(tlXmlObj).find('event').length;
		unitScale=lineHeight/(maxVal-minVal); 	
		
		$(tlXmlObj).find('bodytext').each(function(index,element)
		{
			var textObj = {};
			textObj.src = ($(this).attr('src'));
			textObj.x = ($(this).attr('x'));
			textObj.y = ($(this).attr('y'));
			textObj.width = ($(this).attr('width'));
			textObj.height = ($(this).attr('height'));
			textObj.type = ($(this).attr('type'));	
			textObj.tailPos = ($(this).attr('tailPos'));	
			textObj.tailFlip = ($(this).attr('tailFlip'));	
			textObjArr.push(textObj);
					
		});
		
		$(tlXmlObj).find('img').each(function(index,element)
		{		 
			var imgObj = {};			
			imgObj.imgX=($(this).attr('x'));
			imgObj.imgY=($(this).attr('y'));
			imgObj.imgHeight=($(this).attr('height'));
			imgObj.imgWidth=($(this).attr('width'));
			imgObj.rel = ($(this).attr('rel'));	
			if(imgObj.rel  == "TEXT" )
			{
				imgObj.align = ($(this).attr('align'));
				imgObj.expand = ($(this).attr('expand'));
				
			}
			imgObj.imgSrc = ($(this).attr('src'));
			imgObj.slideVal = ($(this).attr('slideVal'));
			//
			imageManifest.push(imgObj.imgSrc);
			imgObjectArr.push(imgObj);			
		});
		
		loadImages();
		
		$(tlXmlObj).find('event').each(function(index,element)
		{			
			obj.date=($(this).attr("date"));			 
			obj.alt=($(this).attr("alt"));
			obj.compId=($(this).find('element').attr('compId'));
			//
			bodyTextCountArr.push($(this).find('bodytext').length);
 
			var alt=obj.alt;
			
			roundBtn=createBtn(buttonImages["TimelineImage7"],buttonImages["TimelineImage1"],buttonImages["TimelineImage5"],btnClickHandler);		
			roundBtn.name="roundBtn";
			roundBtn.no=index;
			roundBtn.date=obj.date;
			roundBtn.compId=obj.compId;
			//
		/*	roundBtn.imgX=obj.imgX;
			roundBtn.imgY=obj.imgY;
			roundBtn.imgHeight=obj.imgHeight;
			roundBtn.imgWidth=obj.imgWidth;
			roundBtn.rel = obj.rel;*/
			
			btnArray.push(roundBtn);
		 
			//FOR slide 
			var slid = new createjs.Container();
			slideContainer.addChild(slid);
			slid.visible = false;
			roundBtn.slide = slid;
						
			$("#commonMediaText").append("<div id='slide_1_"+index+"'></div>");
			
			$(this).find("element").each(function(_index, _element) {
                var ob = {};
				for(var i = 0;i<this.attributes.length;i++)
				{
					ob[this.attributes[i].name] = this.attributes[i].value;	
				}		
				var displayObject = getCJSElement($(this).attr("type"),ob,'slide_1_'+index);
				
				slid.addChild(displayObject);	
            });
			
			
			
			roundBtn.y=-(unitScale*(obj.date-minVal));
			//flag=roundBtn.y-=8;
			roundBtn.x=x1;		
			
			if(alt!=undefined)
			{
				if(alt.split("x")[1]==2)
				{
					roundBtn.x=x2;
				}
				if(alt.split("x")[1]==3)
				{
					roundBtn.x=x3;
				} 
			}
			
			lineContainer.addChild(roundBtn);
 			
		});
		
			titleText=getCJSElement("TEXT",{x:0,y:0,width:"350",align:"left",id:"title_text",text:"",expand:"down",color:"#ffffff",size:"15",bold:"1"});
			titleText.x=13;
			titleText.y=40;
			titleText.width="250";
			slideContainer.addChild(titleText);	
			
            upArrowBtn =createArrowBtn(buttonImages["TimelineImage3"],arrowUpHandler);
			upArrowBtn.name="upArrowBtn";
			upArrowBtn.x = 	195;
			upArrowBtn.y= 28;
			slideContainer.addChild(upArrowBtn);
			topCont.addEventListener("click",arrowUpHandler);
			
			downArrowBtn =createArrowBtn(buttonImages["TimelineImage4"],arrowDownHandler);
			downArrowBtn.name="downArrowBtn";
			downArrowBtn.x = 	195;
			downArrowBtn.y= 371;
			slideContainer.addChild(downArrowBtn);		
			bottomCont.addEventListener("click",arrowDownHandler);
			//
			//createImages();
			
		for(var i =0;i<=(maxVal-minVal);i+=scaleVal)
		{
			var text = new createjs.Text(String(minVal+i), "bold 13px Helvetica", "#393536");
			text.y=-(unitScale*i)-6;
			text.x=35;				
			lineContainer.addChild(text);
			
		}
		
		$(tlXmlObj).find('legend').each(function(index,element){
			
			legendObj.color=$(this).attr("color");
			legendObj.x=$(this).attr("x");		
			legendObj.y=$(this).attr("y");
			legendObj.width=$(this).attr("width");
			legendObj.height=$(this).attr("height");
			legendObj.br=$(this).attr("borderRadius");		
			
			 drawLegendRect(legendObj.color,Number(legendObj.x),Number(legendObj.y),Number(legendObj.width),Number(legendObj.height),Number(legendObj.br));	
			 
					
		});
		
		
		createArrowImage();
		preloaderObj = null;
		//btnSelectHandler(); 
		upArrowBtn.visible=false;
		//assignText();

	}	
	function drawLegendRect(rectCol,rectX,rectY,rectW,rectH,rectBr)
	{
		var cont = new createjs.Container();
		var rectangle = new createjs.Shape();
		rectangle.graphics.setStrokeStyle(2);
	 
    	rectangle.graphics.beginStroke("#000");
		rectangle.graphics.beginFill(rectCol).drawRoundRect(rectX,rectY,rectW,rectH,rectBr);
		
		cont.addChild(rectangle);
		cont.shape=rectangle;
		slideContainer.addChild(cont);
		return cont;
	}
	function drawRect(rectCol,rectX,rectY,rectW,rectH,rectBr)
	{
		var cont = new createjs.Container();
		var rectangle = new createjs.Shape();
		
		rectangle.graphics.beginFill(rectCol).drawRoundRect(rectX,rectY,rectW,rectH,rectBr);
		cont.addChild(rectangle);
		cont.shape=rectangle;
		slideContainer.addChild(cont);
		return cont;
	}
	function createArrowImage()
	{
		arrowImage=new createjs.Bitmap(buttonImages["TimelineImage6"]);
		lineContainer.addChild(arrowImage);		
		arrowImage.x=0;		
		//arrowImage.y=flag
	}
	
	function createArrowBtn(norm,callback)
	{
		var cont=new createjs.Container();
		var normalImage = new createjs.Bitmap(norm);
		cont.addChild(normalImage);
		cont.normal = normalImage;
		cont.onClick = function(ev)
		{						
			if(callback) callback(ev);	
		}
		cont.cursor = "pointer";
		
		return cont;		
	}
	
	function createBtn (norm,over,selected,callback)
	{		 
		var cont=new createjs.Container();
		var overImage = new createjs.Bitmap(over);		
		var normalImage = new createjs.Bitmap(norm);
		var selectedImage = new createjs.Bitmap(selected);
						
		cont.addChild(overImage,normalImage,selectedImage);
		
		cont.normal = normalImage;
		cont.over = overImage;
		cont.selected=selectedImage;

		selectedImage.visible = false;
		overImage.visible = false;			
		
		cont.onMouseOver=function(ev)
		{			
		    ev.target.over.visible = true;
			ev.target.normal.visible = false;			
			update = true;
		}
		cont.onMouseOut=function(ev)
		{
			ev.target.over.visible = false;
			ev.target.normal.visible = true;
			update = true;
		}		
		cont.onClick = function(ev)
		{
			arrowImage.y=ev.target.y;
				
			if(temp!=null)
			{								
				temp.over.visible = true;
				temp.normal.visible = true;
				temp.selected.visible=false;
				temp.mouseEnabled=true;
			}			
				ev.target.over.visible = false;
				ev.target.normal.visible = false;
				ev.target.selected.visible=true;
				ev.target.mouseEnabled=false;
				temp=ev.target;
			
			
			if(callback) callback(ev);	
		}
		
		cont.cursor = "pointer";
		return cont;		
	}

	function btnClickHandler(event)
	{	
		countVal=event.target.no; 

		$("#title_text").html(event.target.date);
 		
		 if(countVal==0)
		 {
			 upArrowBtn.visible=false;
    	     enableContainer(topCont,false);
			 
		 }
		 else
		 {
			  upArrowBtn.visible=true; 
			  enableContainer(topCont,true);
		 }
		 
		 if(countVal==len-1)
		 {
			 downArrowBtn.visible=false;			 
			 enableContainer(bottomCont,false);
		 }
		 else
		 {
			  downArrowBtn.visible=true;
			  enableContainer(bottomCont,true);
			
		 }
		 
		 btnSelectHandler();	
	}
	function enableContainer(cont,bool)
	{
		if(bool)
		{
			cont.cursor="pointer";
			cont.mouseEnabled=true;
 
			
			if(cont.name=="topCont")
			{
				cont.shape.graphics.beginFill("#0197d6").drawRoundRect(0,20,420,28.4,10);
				
			}
			else
			{
				bottomCont.shape.graphics.beginFill("#0197d6").drawRoundRect(0,358.2,420,28.4,10);				
			}
		}
		else
		{
			cont.cursor="null";
			cont.mouseEnabled=false;
			//cont.alpha=0.5;
			
			if(cont.name=="topCont")
			{
				cont.shape.graphics.beginFill("#33abdf").drawRoundRect(0,20,420,28.4,10);
				
			}
			else
			{
				bottomCont.shape.graphics.beginFill("#33abdf").drawRoundRect(0,358.2,420,28.4,10);				
			}
		}
		
		
	}
	function arrowUpHandler(event)
	{
		countVal--;
		
		downArrowBtn.visible = true;
		enableContainer(bottomCont,true);

 		
		if (countVal==0)
		{				 
			upArrowBtn.visible = false; 
			enableContainer(topCont,false);
		}
		btnSelectHandler();
	}
	
	function arrowDownHandler(event)
	{
		countVal++; 	 
		upArrowBtn.visible = true;		
 		enableContainer(topCont,true);
		
		if (countVal==len-1)
		{	
			 downArrowBtn.visible=false;
	 		 enableContainer(bottomCont,false);			 
		}
		btnSelectHandler();
	}

	function btnSelectHandler()
	{
		$("#title_text").html(btnArray[countVal].date);
		//
 		textHeight=$("#"+btnArray[countVal].compId).height();
		textHandler();			
		//
		if(currentSlide) currentSlide.slide.visible = false;
		btnArray[countVal].slide.visible = true;
		currentSlide = btnArray[countVal]; 
		//for images 
 
		imageContArr[countVal].x = imageContArr[countVal].x1;
		imageContArr[countVal].y = imageContArr[countVal].y1;	
	
		for(var i=0;i<btnArray.length;i++)
		{
			btnArray[i].over.visible = false;
			btnArray[i].normal.visible = true;
			btnArray[i].selected.visible = false;
			imageContArr[i].visible=false;
			textContArr[i].visible=false;
		}
			btnArray[countVal].over.visible = false;
			btnArray[countVal].normal.visible = false;
			btnArray[countVal].selected.visible = true;
			btnArray[countVal].mouseEnabled = true;
			//
			imageContArr[countVal].visible=true;
			textContArr[countVal].visible=true;
			arrowImage.y=btnArray[countVal].y;			 
			
		 	update=true;
	}
	
	function createImages()
	{		
		mainImageContainer=new createjs.Container();
		slideContainer.addChild(mainImageContainer);
		
		for(var i=0;i<imageArr.length;i++)
		{					
			if(i == 4)
			{			
				
			}
			else
			{
				var imageCont=new createjs.Container();	
				imageCont.x1 = imgObjectArr[i].imgX;
				imageCont.y1 = imgObjectArr[i].imgY;
				mainImageContainer.addChild(imageCont);
				imageContArr.push(imageCont);
				
			}
			if(imgObjectArr[i].rel == "STD")
			{			
				var image = getCJSElement("IMAGE",{x:0,y:0,src:imageManifest[i],subType:"STD", width:imgObjectArr[i].imgWidth, height:imgObjectArr[i].imgHeight});
				
			}
			else
			{
				var image = getCJSElement("IMAGE",{x:0,y:0,src:imageManifest[i],subType:"", width:imgObjectArr[i].imgWidth, height:imgObjectArr[i].imgHeight});

			}
			imageCont.addChild(image);
			//var image = new createjs.Bitmap(imageArr[i]);		
			//imageCont.addChild(image);
			
			
			bitMapArr.push(image);

			
			
			imageCont.visible=false;			
		}
		//positioning 2 image slide
		bitMapArr[4].x = imgObjectArr[4].imgX;//200;
		bitMapArr[4].y = imgObjectArr[4].imgY;
		
 
		
	}
	
	function loadImages()
	{

		var imgLoaderObj = new createjs.LoadQueue(false);
		imgLoaderObj.addEventListener("fileload", imageLoaded);
	   	imgLoaderObj.addEventListener("error", imageLoaderError);	
		imgLoaderObj.addEventListener("complete", imageLoadComplete);
		imgLoaderObj.loadManifest(imageManifest);
	}
			
	function imageLoaded(event)
	{		
		switch (event.item.type)
		{	
			case createjs.LoadQueue.IMAGE:
//				  [event.item.id] = event.result;				 
				   imageArr.push(event.result);
  				break;	
		}
	}
	
	function imageLoaderError(event)
	{
		
	}
	function imageLoadComplete(event)
	{
		createImages();
		assignText();
	}
	
	function assignText()
	{	 
		var k=0; 
			
		for (var i =0; i<bodyTextCountArr.length;i++)
		{
			var textContainer = new createjs.Container();
			mainImageContainer.addChild(textContainer);
			textContArr.push(textContainer);
			
			if(bodyTextCountArr[i]==0)
			{
				
			}
			else
			{
				for (var j=0; j<bodyTextCountArr[i];j++)
				{									
						if(textObjArr[k].type == "BUBBLE")
						{						
							var bubbleText = getCJSElement("BUBBLE",{x:textObjArr[k].x,y:textObjArr[k].y,width:textObjArr[k].width,compId:textObjArr[k].src,size:"11",align:"center",tailPosition:textObjArr[k].tailPos,tailFlip:textObjArr[k].tailFlip});
							//var bubbleText = getCJSElement("BUBBLE",{x:textObjArr[k].x,y:textObjArr[k].y,width:textObjArr[k].width,compId:textObjArr[k].src,size:"11",align:"center",tailPosition:"2",tailFlip:"1"});

						 	textContArr[i].addChild(bubbleText);
							//mainImageContainer.addChild(bubbleText);
						}
						else
						{
							 
							var textComp = getCJSElement("TEXT",{compId:textObjArr[k].src,x:textObjArr[k].x,y:textObjArr[k].y,width:textObjArr[k].width,expand:textObjArr[k].expand,align:textObjArr[k].align});
							textContArr[i].addChild(textComp);
						}
						k++;					
				}				
			}
		}
		
		 btnSelectHandler();

	}
		
	
	});
