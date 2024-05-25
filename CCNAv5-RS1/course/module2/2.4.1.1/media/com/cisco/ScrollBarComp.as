package com.cisco 
{
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.geom.Rectangle;
	
	/**
	 * ...
	 * @author Ravi Kumar D
	 */
	public class ScrollBarComp extends MovieClip 
	{
		private var background:Sprite;
		private var dragger:Sprite;
		private var bounds:Rectangle;
		private var targetMc:MovieClip;
		private var scrollHeight:Number;
		private var initTargetMCYPos:Number;
		private var scrollRatio:Number;
		
		public function ScrollBarComp() 
		{
			this.addEventListener(Event.REMOVED_FROM_STAGE, removedFromStageHandler, false, 0, true);
		}
		
		public function setScroll(_target:MovieClip, _height:Number, _offsetY:Number = 0):void
		{
			for (var i:int = 0; i < this.numChildren; i++)
			{
				this.removeChildAt(0);
			}
			
			this.targetMc = _target;
			this.scrollHeight = _height;
			var draggerHeight:Number = _height - ((targetMc.height - _height) * (_height / targetMc.height));
			
			//Draw background Shape
			background = new Sprite();
			background.graphics.beginFill(0xD2D2D2);
			background.graphics.drawRect(0, 0, 15, _height);
			background.graphics.endFill();
			this.addChild(background);
			
			//Draw Dragger Shape
			dragger = new Sprite();
			dragger.graphics.beginFill(0xAAAAAA);
			dragger.graphics.drawRect(0, 0, 15, draggerHeight);
			dragger.graphics.endFill();
			this.addChild(dragger);
						
			bounds = new Rectangle(0, 0, 0, _height-dragger.height);
			dragger.buttonMode = true;
			dragger.addEventListener(MouseEvent.MOUSE_DOWN, mouseDownHandler, false, 0, true);
			
		}
		
		private function mouseDownHandler(ev:MouseEvent):void
		{
			stage.addEventListener(MouseEvent.MOUSE_UP, mouseUpHandler, false, 0, true);
			dragger.startDrag(false, bounds);
			
			dragger.addEventListener(Event.ENTER_FRAME, enterFrameHandler, false, 0, true);
		
		}
		
		private function enterFrameHandler(ev:Event):void
		{
			targetMc.y = -Math.round (dragger.y *((targetMc.height - scrollHeight + 25)/(scrollHeight-dragger.height)));
		}
		
		private function mouseUpHandler(ev:MouseEvent):void
		{
			stage.removeEventListener(MouseEvent.MOUSE_UP, mouseUpHandler);
			dragger.removeEventListener(Event.ENTER_FRAME, enterFrameHandler)
			dragger.stopDrag();
		}
		
		private function removedFromStageHandler(ev:Event):void
		{
			this.removeEventListener(Event.REMOVED_FROM_STAGE, removedFromStageHandler);
			stage.removeEventListener(MouseEvent.MOUSE_UP, mouseUpHandler);		
			dragger.removeEventListener(Event.ENTER_FRAME, enterFrameHandler)
		}
		
		
	}//end of class

}//enDate of package