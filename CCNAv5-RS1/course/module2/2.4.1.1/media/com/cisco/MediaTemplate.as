package com.cisco 
{	
	import flash.display.MovieClip;
	
	public class MediaTemplate extends MovieClip
	{		
		public function MediaTemplate() 
		{			
			//Hide all Movieclips
			for (var i:int = 0; i < this.numChildren; i++)
			{
				if (this.getChildAt(i) as MovieClip) {
					this.getChildAt(i).visible = false;
				}
			}
		}
		
		
	}//end of class

}//end of package