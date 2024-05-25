package com.cisco 
{
	import com.cisco.TimelineSlider;
	import com.cisco.MediaTemplate;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.events.IOErrorEvent;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.text.TextField;
	import flash.utils.setInterval;
	import flash.utils.clearInterval;
	
	import flash.display.GradientType;
	import flash.geom.Matrix;
	
	
	/**
	 * ...
	 * @author Ravi Kumar D
	 */
	public class TimeLineSlide extends MovieClip 
	{
		private var layoutXML:XML;
		private var mediaXML:XML;
		private var xmlPathPrefix:String;
		
		public var up_panel:MovieClip;
		public var down_panel:MovieClip;
		public var titleTxt:TextField;
		public var slideTitleTxt:TextField;
		public var arrow_mc:MovieClip;
		
		private var direction:String = "UP";
		private var interval:Number;
		private var sliderYValue:Number;
		private var tweenYValue:Number;
		private var heightRatio:Number;
		private var xmlLoader:URLLoader;
				
		private var timeLineSlider:TimelineSlider;
		private var eventSlideBG:Sprite;
		public var eventSlideMask:Sprite;
		private var scrollBarComp:ScrollBarComp;
		
		public function TimeLineSlide() 
		{
			up_panel.visible = false;
			down_panel.visible = false;
			this.addEventListener(Event.ADDED_TO_STAGE, addedToStageHandler, false, 0, true);
			
		}	
		
		private function addedToStageHandler(ev:Event):void
		{
				
			ev.target.removeEventListener(Event.ADDED_TO_STAGE, addedToStageHandler);
			
			var swfPath:String = stage.loaderInfo.url;
			xmlPathPrefix =  String(swfPath.slice(0, swfPath.length - 4));	
						
			xmlLoader = new URLLoader();
			xmlLoader.addEventListener(Event.COMPLETE, xmlLoaderCompleted, false, 0, true);
			xmlLoader.addEventListener(IOErrorEvent.IO_ERROR, errorHandler, false, 0, true);
			xmlLoader.load(new URLRequest(String(xmlPathPrefix + "_layout.xml")));
			
			this.addEventListener(Event.REMOVED_FROM_STAGE, removedFromStageHandler, false, 0, true);
			
		}
		
		private function errorHandler(ev:Event):void
		{
			ev.target.removeEventListener(IOErrorEvent.IO_ERROR, errorHandler);
			ev.target.removeEventListener(Event.COMPLETE, xmlLoaderCompleted);
		}
		
		private function xmlLoaderCompleted(ev:Event):void
		{			
			
			if (this.layoutXML == null)
			{
				layoutXML = new XML(ev.target.data);
				xmlLoader.load(new URLRequest(String(xmlPathPrefix + ".xml")));
			}
			else
			{
				this.mediaXML = new XML(ev.target.data);
				ev.target.removeEventListener(Event.COMPLETE, xmlLoaderCompleted);			
				xmlLoader = null;
			
				this.visible = true;
				this.initiate();
			}
					
		}
		
		
		public function initiate():void
		{
			//Event slide BG
			drawEventSlideBG();
			
			//Event slide Mask
			drawEventSlideMask()
			
			//Scroll Bar
			scrollBarComp = new ScrollBarComp();
			scrollBarComp.x = 377;
			this.addChild(scrollBarComp);
						
			timeLineSlider = new TimelineSlider(this.layoutXML.timeline,MovieClip(this.parent));
			timeLineSlider.x = 405;
			timeLineSlider.y = 13;
			this.addChild(timeLineSlider);
			
			var _sprite:Sprite = new Sprite();
			_sprite.graphics.beginFill(0xFFFFFF);
			_sprite.graphics.drawRect(0, 0, 68, 337);
			_sprite.graphics.endFill();
			
			this.addChild(_sprite);
			_sprite.x = 396;
			_sprite.y = 15;
			
			timeLineSlider.mask = _sprite;
					
			up_panel.visible = true;
			down_panel.visible = true;
			heightRatio = (timeLineSlider.height - 100 - 330);
			tweenYValue = timeLineSlider.y;
			
			up_panel.gotoAndStop(2);
			up_panel.buttonMode = true;
			down_panel.buttonMode = true;
			up_panel.addEventListener(MouseEvent.CLICK, mouseEventHandler, false, 0, true);
			down_panel.addEventListener(MouseEvent.CLICK, mouseEventHandler, false, 0, true);
						
			//Bring Arrow Point to front of all clips
			this.setChildIndex(arrow_mc, this.numChildren - 1);
			
		}
		
		private function mouseEventHandler(ev:MouseEvent):void
		{
			
			var _type:String = (ev.currentTarget == up_panel) ? "UP" : "DOWN";
			timeLineSlider.timelineEventChangeFromUpDown(_type);			
			
		}
		
		public function changeNavigationStatus(_type:String,_status:Boolean):void
		{
			
			if (_type == "UP")
			{
				if (_status)
				{
					up_panel.gotoAndStop(1);
				}
				else
				{
					up_panel.gotoAndStop(2);
				}
			}
			else
			{
				if (_status)
				{
					down_panel.gotoAndStop(1);
				}
				else
				{
					down_panel.gotoAndStop(2);
				}
			}
		}
		
		public function updatedEventSlide(_id:int,_mc:MovieClip):void
		{
			slideTitleTxt.htmlText = "";
			var _txt:String = "";
			var compId:String = String(this.layoutXML.timeline.event[_id].titletext.@src);
			
			for (var i:int = 0; i < this.mediaXML.component.length(); i++)
			{
				if (compId == String(this.mediaXML.component[i].@id))
				{
					_txt =   this.mediaXML.component[i].text;
				}
			}
			
			slideTitleTxt.htmlText = _txt;
			
			if (_txt == "" || _txt == " ")
			{				
				eventSlideBG.y = 45;
				eventSlideBG.height = 302;
				eventSlideMask.y = 45;
				eventSlideMask.height = 302;
			}
			else
			{
				eventSlideBG.y = 63;
				eventSlideBG.height = 284;
				
				eventSlideMask.y = 63;
				eventSlideMask.height = 284;
			}			
			
			updateScrollBarComp(_mc);
		}		
		
		private function updateScrollBarComp(_mc:MovieClip):void
		{
			if (_mc.height+15 > eventSlideMask.height)
			{
				_mc.y = 0;
				eventSlideMask.width = eventSlideMask.width - 15;
				scrollBarComp.visible = true;
				scrollBarComp.y = eventSlideBG.y;
				scrollBarComp.setScroll(_mc, eventSlideBG.height);
			}
			else
			{
				eventSlideMask.width = eventSlideMask.width + 13;
				scrollBarComp.visible = false;
			}
			
		}
		
		private function drawEventSlideMask():void
		{
			eventSlideMask = new Sprite();
			eventSlideMask.x = 5;
			this.addChild(eventSlideMask);
			eventSlideMask.graphics.beginFill(0xFFFFFF);
			eventSlideMask.graphics.drawRect(0, 0, 386, 302);
			eventSlideMask.graphics.endFill();
			
		}
		
		private function drawEventSlideBG():void
		{			
			eventSlideBG = new Sprite();
			eventSlideBG.x = 5;
			this.addChild(eventSlideBG);
			
			var _matrix:Matrix = new Matrix();
			_matrix.createGradientBox(386,302,90*Math.PI/180);
			eventSlideBG.graphics.beginGradientFill(GradientType.LINEAR, [0xFFFFFF,0xE9E7E8], [1, 1], [0, 225],_matrix);
			eventSlideBG.graphics.drawRect(0, 0, 386, 302);
			eventSlideBG.graphics.endFill();			
		}
		
		private function removedFromStageHandler(ev:Event):void
		{
			
			this.layoutXML = null;
			ev.target.removeEventListener(Event.REMOVED_FROM_STAGE, removedFromStageHandler);
		}
		
		
	}//end of class

}//enD of package