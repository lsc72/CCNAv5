package com.cisco 
{
	import flash.events.Event;
	
	/**
	 * ...
	 * @author Ravi Kumar D
	 */
	public class TimelineEvent extends Event 
	{
		public static const TIMELINE_EVENT_CLICK = "eventCLicked";
		
		public function TimelineEvent(type:String,bubbles:Boolean = false,cancelable:Boolean = false) 
		{
			super(type, bubbles, cancelable);
		}
		
		override public function clone():Event {
			
			return new TimelineEvent(type, bubbles, cancelable);
		}
		
	}

}