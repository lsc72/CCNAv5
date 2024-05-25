/* Text Operations - Syntax Checker */
/*****************************************************************************************/
package classes.media.SyntaxChecker{
	import flash.events.*;
	import flash.text.*;
	import flash.display.MovieClip;
	
	public class TextManipulation {
		
		private var blinkCount:Number = 0;
		private var _pobj:Object;
		private var lineMc:MovieClip;
		
		public function TextManipulation() {
			// constructor code
		}
		// Set focus for the first command text field
		public function setTxtFocus(txt):void
		{		
				txt.text = " ";
				txt.stage.focus = txt;
				txt.setSelection(txt.text.length,txt.text.length);
				txt.text = "";
		}
		// Reset the text field and associated listeners
		public function resetTextStyle(txt, pobj):void
		{
			txt.stage.removeEventListener(KeyboardEvent.KEY_UP, pobj.validateObj.validateKey);
			txt.stage.removeEventListener(Event.ENTER_FRAME,blinkCursor);
			//lineMc.alpha = 0;
			txt.selectable = false;
			txt.type = TextFieldType.DYNAMIC;
		}
		// Set focus for any text field
		public function resetFocus(txt):void
		{
			txt.selectable = true;
			txt.type = TextFieldType.INPUT;
			txt.stage.focus = txt;
			txt.setSelection(txt.text.length,txt.text.length);
		}
		// Blink cursor for password field
		private function blinkCursor(evt:Event):void
		{			
			if(blinkCount == 10)
			{
				blinkCount = 0;
				lineMc.alpha = (lineMc.alpha == 1)?0:1;
			}
			blinkCount++;
		}
		// Check for password type and blink cursor
		public function checkPasswordType(cmd, pobj):void
		{
			_pobj = pobj;
			var type = _pobj.xmlLoader.mediaXML.component.(@id==_pobj.compID).command[_pobj.commandNo].@type
			lineMc = _pobj.holder.getChildByName('lineMc');
			var par = cmd.parent.parent.parent.parent;
			if(type == 'password'){
				lineMc.x = cmd.x + 3;
				lineMc.y = cmd.y + 2;
				lineMc.alpha = 1;
				cmd.alpha = 0;
				cmd.stage.addEventListener(Event.ENTER_FRAME,blinkCursor);
			}
			else
			{
				cmd.stage.removeEventListener(Event.ENTER_FRAME,blinkCursor);
				lineMc.alpha = 0;
			}
		}
		//
	}	
}
/*****************************************************************************************/