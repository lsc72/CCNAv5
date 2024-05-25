package com.cisco 
{
	import com.cisco.TimeLineSlide;
	import flash.display.DisplayObject;
	import flash.display.MovieClip;
	import flash.display.Shape;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.geom.Rectangle;
	import flash.text.TextField;
	import flash.text.TextFormat;	
	import com.cisco.TimelineEvent;
	
	/**
	 * ...
	 * @author Ravi Kumar D
	 */
	public class TimelineSlider extends MovieClip
	{
		private var mXmlData:XMLList;
		private var mlineHeight:Number;
		private var mStartValue:int;
		private var mEndValue:int;
		private var mScaleValue:int;
		public var mGap:Number;
		private var mCurrentEventBtn:TimelineEventButton;
		private var mCurrentEventSlide:MovieClip;
		private var mSlideHolder:MovieClip;
		private var mEventBtnArray:Array;
		private var mCurrentEventBtnId:int;
		private var _parent:TimeLineSlide
		
		public function TimelineSlider(_xml,_holder:MovieClip) 
		{
			this.mXmlData = _xml;
			this.mSlideHolder = _holder;
			this.addEventListener(Event.ADDED_TO_STAGE, addedToStageHandler, false, 0, true);
		}
		
		private function initiate():void
		{			
			createLabelAndLine();			
			createEventButtons();						
		}
		
		private function createEventButtons():void
		{
			
			var _eventValue:int;
			var _ratio:Number = (mGap / mScaleValue);
			var _lastIndex:int;
			var _timelineEBtn:TimelineEventButton;
			
			mEventBtnArray = [];
			
			for (var i:int = 0; i < mXmlData.event.length(); i++)
			{
				_eventValue = int(mXmlData.event[i].@date);
				_lastIndex = int(_eventValue % mScaleValue); //int(String(_eventValue).substr(String(_eventValue).length - 1, 1));
				
				_timelineEBtn = new TimelineEventButton();
				_timelineEBtn.eventValue = String(_eventValue);
				//_timelineEBtn.name = String(_eventValue);
				_timelineEBtn.eventId = i;
				_timelineEBtn.y = 13 + (Math.floor((_eventValue - mStartValue)/mScaleValue) * mGap) + (_lastIndex*_ratio);
				//_timelineEBtn.x = 7.5;
				
				var _boo = checkExistingEvent(_timelineEBtn);
				if (!_boo)
				{
					_timelineEBtn.name = String(_eventValue+"_0");
					_timelineEBtn.x = 7.5;
				}
				
				_timelineEBtn.addEventListener(TimelineEvent.TIMELINE_EVENT_CLICK, timelineEventClicked, false, 0, true);				
				this.addChild(_timelineEBtn);
				
				mEventBtnArray.push(_timelineEBtn);
			}
			
			timelineEventChange(this.getChildByName(String(mXmlData.event[0].@date + "_0")) as TimelineEventButton);
			mCurrentEventBtnId = 0;
		}
		
		private function checkExistingEvent(_btn:TimelineEventButton):Boolean
		{
			var _boo:Boolean = false;
			var _tempBtn:*;
			
			for (var i:int = 0; i < this.numChildren; i++)
			{
				_tempBtn = this.getChildAt(i);
				
				if (_tempBtn as TimelineEventButton)
				{
					if (_tempBtn.eventValue == _btn.eventValue)
					{
						var _cnt:Number= ((_tempBtn.x+5.5)/13);
						_boo = true;
						_btn.x = (_cnt + 1) * 13;
						_btn.name = String(_btn.eventValue+"_"+int(_cnt));
					}
					
				};
			}
			
			return _boo; 
		}
		
		public function timelineEventChangeFromUpDown(_type:String):void
		{
			if (_type == "UP")
			{
				if (mCurrentEventBtnId > 0)
				{
					mCurrentEventBtnId--;
					timelineEventChange(mEventBtnArray[mCurrentEventBtnId]);					
				}
			}
			else
			{
				if (mCurrentEventBtnId < mEventBtnArray.length-1)
				{
					mCurrentEventBtnId++;
					timelineEventChange(mEventBtnArray[mCurrentEventBtnId]);					
				}				
			}			
			
		}
		
		private function timelineEventClicked(ev:TimelineEvent):void
		{
			if (mCurrentEventBtn) mCurrentEventBtn.gotoAndStop(1);
			
			mCurrentEventBtnId = mEventBtnArray.indexOf(ev.target);
			
			timelineEventChange(ev.target as TimelineEventButton);
		}
		
		private function timelineEventChange(_btn:TimelineEventButton):void
		{
			var instName:String;
			
			//Hide Previous slide items
			if (mCurrentEventBtn)
			{
				
				
				if (mCurrentEventBtn.name.split("_")[1] == 0)
				{
					instName = "event_" + mCurrentEventBtn.eventValue;
				}
				else
				{
					instName = "event_" + mCurrentEventBtn.eventValue+"_"+mCurrentEventBtn.name.split("_")[1];
				}
				this.mSlideHolder[instName].visible = false;
				mCurrentEventBtn.gotoAndStop(1);
			}
			
			mCurrentEventBtn = _btn as TimelineEventButton;
			mCurrentEventBtn.gotoAndStop(3);
			
			//instName = "event_" + _btn.eventValue;//this.mXmlData.event[mCurrentEventBtn.eventId].@id;
			if (_btn.name.split("_")[1] == 0)
			{
				instName = "event_" + _btn.eventValue;
			}
			else
			{
				instName = "event_" + _btn.eventValue+"_"+_btn.name.split("_")[1];
			}
			
			_parent.titleTxt.text = _btn.eventValue;
			
			mCurrentEventSlide = this.mSlideHolder[instName];
			this.mSlideHolder[instName].visible = true;
						
			mCurrentEventSlide.mask = _parent.eventSlideMask;
			
			//Update the Up and Down Navigation Controller
			if(mCurrentEventBtnId == 0)
			{
				_parent.changeNavigationStatus("DOWN", true);
				_parent.changeNavigationStatus("UP", false);
			}
			else if(mCurrentEventBtnId == mEventBtnArray.length-1)
			{
				_parent.changeNavigationStatus("UP", true);
				_parent.changeNavigationStatus("DOWN", false);
			}
			else
			{
				_parent.changeNavigationStatus("UP", true);
				_parent.changeNavigationStatus("DOWN", true);
			}
			
			//Update the Arrow Point
			_parent.arrow_mc.y = (this.y + _btn.y - 3);
			
			//Update Event slide BG
			_parent.updatedEventSlide(_btn.eventId,mCurrentEventSlide)
			
			//Update the Slide ScrollBar
			//_parent.updateScrollBarComp(mCurrentEventSlide)
		}
		
		
		private function createLabelAndLine()
		{
			var labelHolder = new Sprite();
			labelHolder.y = 5;
			this.addChild(labelHolder);
						
			var lineShape:Shape = new Shape();
			lineShape.y = 13;
			this.addChild(lineShape);			
			
			mStartValue = int(this.mXmlData.@min);
			mEndValue =  int(this.mXmlData.@max);
			mScaleValue = int(this.mXmlData.@scale);
			
			var totalLabel:int = int((mEndValue - mStartValue) / mScaleValue);
			mGap = Number(315 / totalLabel);
				
			var _tf:TextField;
			var textFormat:TextFormat = new TextFormat();
			textFormat.font = "Arial";
			textFormat.bold = true;
			textFormat.size = 12;
			
			lineShape.graphics.lineStyle(3, 0xffffff);
			lineShape.graphics.moveTo(0, 0);
			lineShape.graphics.lineTo(15, 0);
			lineShape.graphics.moveTo(7.5, 0);
			
			var cnt:int = 0;
			for (var i:int = mStartValue; i <= mEndValue;i+=mScaleValue )
			{	
				
				_tf = createTextLabel(String(i));	
				_tf.x = 17;
				_tf.y = (cnt * mGap);				
				_tf.setTextFormat(textFormat);
				
				labelHolder.addChild(_tf);					
				cnt++;				
			}
			lineShape.graphics.lineTo(7.5, ((cnt-1) * mGap));
			
			mlineHeight = ((cnt - 1) * mGap);
			
			lineShape.graphics.moveTo(0, ((cnt-1) * mGap));
			lineShape.graphics.lineTo(15, ((cnt - 1) * mGap));
			
			labelHolder = null;
			lineShape = null;
			
		}
		
		private function createTextLabel(_text:String):TextField
		{
			var textField:TextField = new TextField();
			textField.embedFonts = true;
			textField.text = _text;
			textField.textColor = 0x393536;
			textField.selectable = false;			
			return textField;
		}
		
		private function addedToStageHandler(ev:Event):void
		{
			ev.target.removeEventListener(Event.ADDED_TO_STAGE, addedToStageHandler);
			
			this._parent = TimeLineSlide(this.parent);
			this.initiate();
			
			this.addEventListener(Event.REMOVED_FROM_STAGE, removedFromStageHandler, false, 0, true);
		}
		
		private function removedFromStageHandler(ev:Event):void
		{
			this.mXmlData = null;
			
			ev.target.removeEventListener(Event.REMOVED_FROM_STAGE, removedFromStageHandler);
			
		}
		
	}//end of class

}//enDate of package