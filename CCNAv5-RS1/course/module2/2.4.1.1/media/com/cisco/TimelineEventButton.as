package com.cisco 
{
	import com.cisco.TimelineEvent;
	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	
	/**
	 * ...
	 * @author Ravi Kumar D
	 */
	public class TimelineEventButton extends MovieClip 
	{
		public var eventValue:String;
		public var eventId:int;
		
		public function TimelineEventButton() 
		{			
			this.buttonMode = true;		
			this.addEventListener(MouseEvent.ROLL_OUT, mouseEventHandler, false, 0, true);
			this.addEventListener(MouseEvent.ROLL_OVER, mouseEventHandler, false, 0, true);
			this.addEventListener(MouseEvent.CLICK, mouseEventHandler, false, 0, true);
		}
		
		
		private function mouseEventHandler(ev:MouseEvent):void
		{
			
			switch(ev.type)
			{				
				case MouseEvent.ROLL_OUT:
						if (currentFrame == 3) return;
						gotoAndStop(1);
					
					break;
					
				case MouseEvent.ROLL_OVER:
						if (currentFrame == 3) return;
						gotoAndStop(2);
					break;
					
				case MouseEvent.CLICK:
						dispatchEvent(new TimelineEvent(TimelineEvent.TIMELINE_EVENT_CLICK));
						
					break;
			}
		}
		
	}//emd of class

}//enDate of package