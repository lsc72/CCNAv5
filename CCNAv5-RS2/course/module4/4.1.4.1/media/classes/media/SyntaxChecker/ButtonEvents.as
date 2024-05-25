/* Button Events - Syntax Checker */
/*****************************************************************************************/
package classes.media.SyntaxChecker {
	import flash.events.*;
	public class ButtonEvents {
		private var _pobj:Object;
		public function ButtonEvents() {
			// constructor code
		}
		// Event Handler for all the buttons
		public function initButtonEvents(pobj):void
		{
			_pobj = pobj;
			if(pobj.parent.getChildByName("reset") != null)
			{
				var reset = pobj.parent.getChildByName("reset");
				reset.addEventListener(MouseEvent.CLICK, resetText);
			}
			if(pobj.parent.getChildByName("showMe") != null)
			{
				var showMe = pobj.parent.getChildByName("showMe");
				showMe.addEventListener(MouseEvent.CLICK, showAnswer);
			}
			if(pobj.parent.getChildByName("showAll") != null)
			{
				var showAll = pobj.parent.getChildByName("showAll");
				showAll.addEventListener(MouseEvent.CLICK, showAllAnswers);
			}
		}
		// Reset button event handler
		private function resetText(evt:MouseEvent):void
		{
			_pobj.resetText();
		}
		// ShowMe button event handler
		private function showAnswer(evt:MouseEvent):void
		{
			var corAns = _pobj.xmlLoader.mediaXML.component.(@id==_pobj.compID).command[_pobj.commandNo].correctresponse;
			var cmdTxt = _pobj.getCommandField();
			var whitespace:RegExp = /(\s{1,})/g;
			var trimmedStr:String = cmdTxt.text.toString().replace(whitespace, "");
			var type = _pobj.xmlLoader.mediaXML.component.(@id==_pobj.compID).command[_pobj.commandNo].@type;
			_pobj.controlTxtObj.resetTextStyle(cmdTxt, _pobj);	
			
			if(trimmedStr.length > 0 && type != 'password')
			{
				_pobj.showNext(3);
			}
			else
			{
				cmdTxt.text = corAns;				
				if(_pobj.commandNo < _pobj.xmlLoader.mediaXML.component.(@id==_pobj.compID).command.length()-1)
				{
					_pobj.showNext(1);
				}
			}
		}
		// ShowAll button event handler
		private function showAllAnswers(evt:MouseEvent):void
		{
			var cLen = _pobj.xmlLoader.mediaXML.component.(@id==_pobj.compID).command.length();
			for(var j=_pobj.commandNo;j<cLen;j++)
			{
				showAnswer(evt);
			}
		}
		//
	}	
}
/*****************************************************************************************/