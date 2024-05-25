	var url=location.href;	
	var mediaPath = url.substr(0, url.lastIndexOf('/'));	
	url=url.split("/");
	url=url[url.length-3];
	var xmlFile='media_'+url+'.xml';
	var data, rootContainer, stage, dataObject;
  
	function init()
	{
		if(!swfobject.hasFlashPlayerVersion("1")){ 
		
			xmlFile = document.getElementsByName("movie").item(0).value;
			xmlFile = xmlFile.split("swf")[0]+"xml";
			
			$.ajaxSetup({
				cache: true
			});
			createjs.Ticker.addListener(this);   // ???
				$.ajax({
					type: "GET",
					crossDomain:false, //edit 24/01 : this property must be set to false
					url: xmlFile,
					dataType: "xml",
					success: initHTMLPage,
					error: erFun
				});
		}
	}
	function initHTMLPage(xmlData)
	{ 
		data = xmlData;
		loadJSFiles(["../../../common/scripts/templates/RootContainer.js"],initTemplate, this);		
	}	

	function loadJSFiles (scripts, callback, _this)
	{	 
		var loadCount = scripts.length;

		function done(){
			loadCount -=1; 
			if (loadCount==0){ 
				callback(_this); 
			}
		}

		for ( var i=0; i<scripts.length; i++){
			$.getScript(scripts[i], done);
		} 
	} 
		
	function initTemplate(data)
	{	  
		var _slide, _scripts;				
		var canvas = document.getElementById("canvas");
		dataObject = getData();
		stage = new createjs.Stage(canvas);	
		rootContainer = new RootContainer();	
		stage.addChild(rootContainer);
		
		if (createjs.Touch.isSupported()) { createjs.Touch.enable(stage); }
 
		switch(dataObject.templateType)
		{  		
			case "IMAGE": 
					_scripts = ["../../../common/scripts/templates/slide/ImageSlideNew.js","../../../common/scripts/templates/comp/MultipleImageComp.js", "../../../common/scripts/templates/comp/TextComp.js","../../../common/scripts/templates/comp/ImageComp.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);	
			break;
				
			case "MULTI_BUTTON": 
 					_scripts = ["../../../common/scripts/templates/slide/MultiButtonSlide.js","../../../common/scripts/templates/comp/ImageComp.js","../../../common/scripts/templates/comp/MultipleImageComp.js","../../../common/scripts/templates/comp/ButtonComp.js","../../../common/scripts/templates/comp/TextComp.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);
			break;
				
			case "MULTI_BAR":	
					_scripts = ["../../../common/scripts/templates/slide/MultiBarSlide.js"]
					loadJSFiles(_scripts, onLoadJavascript, this); 
			break;
				
			case "TABLE": 
					_scripts = ["../../../common/scripts/templates/slide/TableSlideNew.js","../../../common/scripts/templates/comp/TableComp.js","../../../common/scripts/templates/comp/TextComp.js","../../../common/scripts/templates/comp/MultipleImageComp.js","../../../common/scripts/templates/comp/ImageComp.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);
			break;
			
			case "DESCRIPTION":	 
					_scripts = ["../../../common/scripts/templates/slide/DescriptionSlide.js","../../../common/scripts/templates/comp/MultipleImageComp.js","../../../common/scripts/templates/comp/TextBoxComp.js","../../../common/scripts/templates/comp/DraggableTextBoxComp.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);
			break;
			
			case "ANIMATION": 
					 _scripts = ["../../../common/scripts/templates/slide/AnimationSlide.js","../../../common/scripts/templates/comp/ImageComp.js","../../../common/scripts/templates/comp/TextComp.js","../../../common/scripts/templates/comp/MultipleImageComp.js","../../../common/scripts/templates/comp/AnimationComp.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);	
			break;

			case "VIDEO": 
				_scripts = ["../../../common/scripts/templates/slide/VideoSlide.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this); 
			break;
			

			case "DRAG_DROP": 
					_scripts = ["../../../common/scripts/jquery-ui.js","../../../common/scripts/templates/comp/DragDropComp.js","../../../common/scripts/templates/slide/DragDropSlide.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);	 
			break;
			case "INTERACTIVE":	 
					_scripts = ["../../../common/scripts/templates/slide/InteractiveSlide.js",//"../../../common/scripts/templates/slide/MultiButtonSlide.js",
								"../../../common/scripts/templates/comp/TextComp.js","../../../common/scripts/templates/comp/ImageComp.js",
								"../../../common/scripts/templates/comp/MultipleImageComp.js","../../../common/scripts/templates/comp/OnOff.js"
								]
					loadJSFiles(_scripts, onLoadJavascript, this);
			break;			
			case "TIMELINE_ANIMATION": 
					_scripts = ["../../../common/scripts/templates/slide/TimeLineSlide.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);	
			break;
				
			case "POP_OVER_SLIDE": 	
					_scripts = ["../../../common/scripts/templates/slide/PopOverSlide.js","../../../common/scripts/templates/comp/ImageComp.js",
					"../../../common/scripts/templates/comp/MultipleImageComp.js","../../../common/scripts/templates/comp/TextComp.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);	
			break;
				
			case "INTERACTIVEANIM": 
				var animPath = mediaPath+'/Animation.js';						
				_scripts = ["../../../common/scripts/templates/slide/InteractiveAnimSlide.js","../../../common/scripts/templates/comp/AnimationControlComp.js","../../../common/js/jquery/jquery-ui-1.9.1.custom.min.js","../../../common/js/greensock/TweenMax.min.js",animPath]
				loadJSFiles(_scripts, onLoadJavascript, this);	
			break;
				
			case "DECITOBINARY": 
				var decitobin = mediaPath+'/decitobin.js';
					_scripts = ["../../../common/scripts/templates/slide/DecimaltoBinarySlide.js",decitobin]
					loadJSFiles(_scripts, onLoadJavascript, this);
			break;
				
			case "BINARYTODECI":
					var bintodeci = mediaPath+'/bintodeci.js';
					_scripts = ["../../../common/scripts/templates/slide/BinarytoDecimalSlide.js",bintodeci]
					loadJSFiles(_scripts, onLoadJavascript, this);	 				
			break;			
				
			case "ASCIITOBIN":
				_slide = new AsciiToBinSlide(data,dataObject.slideObject);	
			break;
						
			case "FIBACTIVITY": 
				 	var fibacitivity = mediaPath+'/fibacitivity.js';
					_scripts = ["../../../common/scripts/templates/slide/FibActivitySlide.js",fibacitivity]
					loadJSFiles(_scripts, onLoadJavascript, this);
			break;	

	        case "UBM": 				
					var castdetection = mediaPath+'/castdetection.js';
					_scripts = ["../../../common/scripts/templates/slide/UniMultiBroadcastSlide.js",castdetection]
					loadJSFiles(_scripts, onLoadJavascript, this);
			break;
				
			case "ANI-ACTIVITY":
				_slide = new AnimationActivitySlide(data,dataObject.slideObject);					
			break;
				
			case "ANDING": 					
					var anding = mediaPath+'/Anding.js';
					_scripts = ["../../../common/scripts/templates/slide/AndingSlide.js",anding]
					loadJSFiles(_scripts, onLoadJavascript, this);	
			break;
		
			case "FIBHOSTACTIVITY":	 
					var fibhostacitivity = mediaPath+'/fibhostacitivity.js';
					_scripts = ["../../../common/scripts/templates/slide/FibActivityHostSlide.js",fibhostacitivity]
					loadJSFiles(_scripts, onLoadJavascript, this);
			break;	

			case "HOSTADDRESS":  /*Its not working as per requirment*/ 
					var activity = mediaPath+'/Activity.js';
					_scripts = ["../../../common/scripts/templates/slide/HostAddressSlide.js",activity]
					loadJSFiles(_scripts, onLoadJavascript, this);	
			break;
				 
			case "PABA":
				var mediaApp = mediaPath+'/MediaApp.js';
				_scripts = ["../../../common/scripts/templates/slide/PassAndBlockAction.js",mediaApp]
				loadJSFiles(_scripts, onLoadJavascript, this);	
			break;	

			case "CLICKACTIVITY": 
				var clickacitivity = mediaPath+'/clickacitivity.js';
				_scripts = ["../../../common/scripts/templates/slide/ClickActivitySlide.js",clickacitivity]
				loadJSFiles(_scripts, onLoadJavascript, this);	
				//_slide = new ClickActivitySlide(data,dataObject.slideObject);
				break;


			case "CONVERSION": 
				var clickacitivity = mediaPath+'/conversion.js';
				_scripts = ["../../../common/scripts/templates/slide/conversionActivitySlide.js",conversion]
				loadJSFiles(_scripts, onLoadJavascript, this);	
				//_slide = new ClickActivitySlide(data,dataObject.slideObject);
				break;
				
				case "SYNTAX_CHECKER": 
				_scripts = ["../../../common/scripts/templates/slide/SyntaxCheckerSlide.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);
				break;
				
				/*case "HOT_SPOT":
				_slide = new hotspotSlide(data,dataObject.slideObject);					
				break;*/
				
			case "HOT_SPOT":
		 
				//console.log("------->"+$(data).find("component#ID_btn01").text());
				var hotspotactivity = mediaPath+'/hotspotactivity.js';
				_scripts = ["../../../common/scripts/templates/slide/hotspotSlide.js",hotspotactivity]
				loadJSFiles(_scripts, onLoadJavascript, this);	
				
				//_slide = new hotspotmultibarSlide(data,dataObject.slideObject);					
				break;

			case "HOT_SPOT_MULTIBAR":
		 
				//console.log("------->"+$(data).find("component#ID_btn01").text());
				var hotspotmultibar = mediaPath+'/hotspotmultibar.js';
				_scripts = ["../../../common/scripts/templates/slide/hotspotmultibarSlide.js",hotspotmultibar]
				loadJSFiles(_scripts, onLoadJavascript, this);	
				
				//_slide = new hotspotmultibarSlide(data,dataObject.slideObject);					
				break;
				
				case "POPOVER": 
				var poper = mediaPath+'/pop.js';
				_scripts = ["../../../common/scripts/templates/slide/popoverSlideJQ.js",poper]
					loadJSFiles(_scripts, onLoadJavascript, this);
				break;
							
			case undefined:
					alert("I think you forgot to update the template type in getData().. Please check..");
			break;				
			
		}
	}

 function erFun(e){
        alert("Error"+e);
    }

function onLoadJavascript(_this)
{
	var _slide;
	switch(dataObject.templateType) 
		{  		
			case "IMAGE":
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

			case "DRAG_DROP":
				if(typeof dataObject.instobj.noDefaultHelp == 'undefined' && dataObject.instobj.noDefaultHelp != true)						
						dataObject.isViewDD = 1;
					_slide = new DragDropSlide(data,dataObject);				
				break; 
			
			case "VIDEO":
				_slide = new VideoSlide(data,dataObject);
				
			break;
			
			case "INTERACTIVE": 
					stage.enableMouseOver();		
					_slide = new InteractiveSlide(data,dataObject);	
					rootContainer.addChild(_slide);
					stage.update();
				break;
				
				case "INTERACTIVEANIM":					
						_slide = new InteractiveAnimSlide(data,dataObject.slideObject);
			    break;

				case "TIMELINE_ANIMATION":	
						bindTimeLine.initTimeLine(data,dataObject.sort_type);
				break;

				case "POP_OVER_SLIDE":
					stage.enableMouseOver();		
					_slide = new PopOverSlide(data, dataObject.slideObject);	
					rootContainer.addChild(_slide);
					stage.update();			
				break;

				case "BINARYTODECI":
					_slide = new BinarytoDecimalSlide(data,dataObject.slideObject);					
				break;

				case "DECITOBINARY":
					_slide = new DecimaltoBinarySlide(data,dataObject.slideObject);	 
				break;
				case "ANDING":
				  _slide = new AndingSlide(data,dataObject.slideObject);					
				break;
				case "UBM":
					_slide = new UniMultiBroadcastSlide(data);					
				break;
				case "HOSTADDRESS": 
					_slide = new HostAddressSlide(data,dataObject.slideObject);
				break;
				case "FIBHOSTACTIVITY":				
					_slide = new FibActivityHostSlide(data,dataObject.slideObject);
				break;
				
			case "CLICKACTIVITY":
				_slide = new ClickActivitySlide(data,dataObject.slideObject);
				break;
				
				case "CONVERSION":
					alert(dataObject.slideObject);
				_slide = new conversionActivitySlide(data,dataObject.slideObject);
				break;

				case "FIBACTIVITY":			
				_slide = new FibActivitySlide(data,dataObject.slideObject);
				break;
			
			case "SYNTAX_CHECKER":
	            _slide = new SyntaxChecker(data,dataObject);
                break;
				
			 case "PABA":
				_slide = new PassAndBlockAction(data);					
				break;	
					
			case "HOT_SPOT"://this is not using createJS
				//console.log("------->"+$(data).find("component#ID_btn01").text());
				 
				_slide = new hotspotSlide(data,dataObject.slideObject);					
				break;
				
			case "HOT_SPOT_MULTIBAR"://this is not using createJS
				//console.log("------->"+$(data).find("component#ID_btn01").text());
				 
				_slide = new hotspotmultibarSlide(data,dataObject.slideObject);					
				break;
				
				case "POPOVER":
	            _slide = new popoverSlideJQ(data,dataObject.slideObject);
                break;
				
			case undefined:
					alert("I think you forgot to update the template type in getData().. Please check..");
				break;	
		}
}	
