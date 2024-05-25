	loadScript("../../../common/scripts/templates/RootContainer.js");
		
	var url=location.href;
	url=url.split("/")
	url=url[url.length-3];
	var xmlFile='media_'+url+'.xml';

	function init(){
		
		if(!swfobject.hasFlashPlayerVersion("1")){
			createjs.Ticker.addListener(this);
			$.ajax({
				type: "GET",
				crossDomain:false, //edit 24/01 : this property must be set to false
				url: xmlFile,
				dataType: "xml",
				success: initTemplate,
				error: erFun
			});
		}
	}
		
	function initTemplate(data)
	{		
		var dataObject = getData();
		var _slide;
		
		var canvas = document.getElementById("canvas");
		var stage = new createjs.Stage(canvas);	
		var rootContainer = new RootContainer();	
		stage.addChild(rootContainer);
		if (createjs.Touch.isSupported()) { createjs.Touch.enable(stage); }
		switch(dataObject.templateType)
		{  		
			case "IMAGE":
					stage.enableMouseOver();		
					_slide = new ImageSlideNew(data, dataObject.slideObject);	
					rootContainer.addChild(_slide);
					stage.update();			
				break;
				
			case "MULTI_BUTTON":		
					stage.enableMouseOver();		
					_slide = new MultiButtonSlide(data,dataObject);					
					rootContainer.addChild(_slide);
					stage.update();
				break;
				
			case "MULTI_BAR":		
					stage.enableMouseOver();		
					_slide = new MultiBarSlide(data,dataObject);					
					rootContainer.addChild(_slide);
					stage.update();
				break;
				
			case "TABLE":	
					_slide = new TableSlideNew(data,dataObject);
					rootContainer.addChild(_slide);
					stage.update();
				break;
			
			case "DESCRIPTION":				
					_slide = new DescriptionSlide(data,dataObject);	
					rootContainer.addChild(_slide);
					stage.update();
				break;
			
			case "ANIMATION":	
					_slide = new AnimationSlide(data,dataObject);	
					rootContainer.addChild(_slide);
					stage.update();
				break;

			/* Lakshmi */
				case "VIDEO":
					_slide = new VideoSlide(data,dataObject);
					
				break;
/* Lakshmi */
			case "DRAG_DROP":
					dataObject.isViewDD = 1;
					_slide = new DragDropSlide(data,dataObject);	
					//rootContainer.addChild(_slide);
					//stage.update();
				break;
			case "INTERACTIVE":	
					
				break;			
			case "TIMELINE_ANIMATION":	 
			
					bindTimeLine.initTimeLine(data);

				break;
			case undefined:
					alert("I think you forgot to update the template type in getData().. Please check..");
				break;				
			
		}
	}

 function erFun(e){
        alert("Error"+e);
    }
