/* Create MovieClips - Syntax Checker */
/*****************************************************************************************/
package classes.media.Utils {
	import flash.display.MovieClip;
	public class GenerateClips {

		public function GenerateClips() 
		{
			// constructor code
		}
		// Create a movieclip
		public function createMovieClip(obj):MovieClip
		{
			// create a movieclip
			var mc = new MovieClip();
			mc.graphics.beginFill(obj.fillColor, 0);			
			mc.graphics.drawRect(0, 0, obj.width,obj.height);
			mc.graphics.endFill();
			mc.x = obj.x;
			mc.y = obj.y;
			mc.name = obj.name;
			obj.targ.addChild(mc);
			return mc;
		}
		// Create a Line for blinking cursor
		public function createLine(obj):MovieClip
		{
			// create a line
			var mc = new MovieClip();
			mc.graphics.lineStyle(obj.lineStyle);
			mc.graphics.moveTo(obj.sx,obj.sy);
			mc.graphics.lineTo(obj.ex,obj.ey);
			mc.alpha = obj.alpha;
			mc.name = obj.name;
			obj.targ.addChild(mc);
			return mc;						
		}
		//
	}	
}
/*****************************************************************************************/