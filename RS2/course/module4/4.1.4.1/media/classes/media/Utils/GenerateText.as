/* TextField Creation - Syntax Checker */
/*****************************************************************************************/
package classes.media.Utils {
	import flash.text.*;
	public class GenerateText {

		public function GenerateText() 
		{
			// constructor code
		}
		// Create a text field
		public function createText(obj):TextField
		{
			// create text field
			var txt:TextField = new TextField();
			obj.targ.addChild(txt);				
			txt.multiline = obj.multiline;		
			txt.htmlText = obj.text;	
			txt.type = obj.type;
			txt.name = obj.name;
			txt.y = obj.y;
			txt.x = obj.x;
			txt.width = obj.width * obj.targ.parent.parent.parent.scaleX;
			txt.height = obj.height;
			txt.autoSize = obj.autoSize;
			txt.selectable = obj.selectable;
			txt.wordWrap = obj.wordWrap;
			txt.condenseWhite = true;
			txt.mouseWheelEnabled = obj.mouseWheel;
			//txt.border = true;
			
			// set text format
			
			var textFormat:TextFormat = new TextFormat();
			textFormat.leading = obj.leading;
			textFormat.size = obj.size;
			textFormat.font = obj.font;
			
			var scalex = obj.targ.parent.parent.parent.scaleX;
			var scaley = obj.targ.parent.parent.parent.scaleY;
			
			if(obj.type == TextFieldType.INPUT)
			{
				txt.defaultTextFormat = textFormat;
			}
			else
			{
				txt.setTextFormat(textFormat);
			}
			txt.scaleX = 1/scalex;
			txt.scaleY = 1/scaley;
			return txt;
		}
	}	
}
/*****************************************************************************************/