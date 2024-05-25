/* Validation - Syntax Checker */
/*****************************************************************************************/
package classes.media.SyntaxChecker {
	
	import flash.events.*;
	import flash.text.*;
	
	public class Validation {
		private var _currentCommandStr:String = '';
		//
		public function Validation() {
			// constructor code			
		}
		// Vaidate the Key events
		public function validateKey(event:KeyboardEvent, pobj):void
		{			
			var type = pobj.xmlLoader.mediaXML.component.(@id==pobj.compID).command[pobj.commandNo].@type
			var par = event.target.parent.parent.parent.parent;
			if(type == 'password'){
				var lineMc = pobj.holder.getChildByName('lineMc');				
				lineMc.x = event.target.x + Math.round(event.target.getLineMetrics(event.target.numLines-1).width)+2;
				lineMc.y = event.target.y + 2;
			}
			if(Math.floor((event.target.width * par.scaleX) - 15) < Math.round(event.target.getLineMetrics(event.target.numLines-1).width))
		    {
				pobj.controlTxtObj.resetTextStyle(event.target, pobj);
				_currentCommandStr += event.target.text.toString();
				pobj.showNext(2);
			}			 
			if(event.charCode == 13){				
				//Check the slide visibility
				var _pt = (pobj.parent.name.substr(0,5) == "slide") ? pobj.parent : pobj.parent;
				_pt = (pobj.parent.parent.name.substr(0,5) == "slide") ? pobj.parent.parent : _pt;
				_pt = (pobj.parent.parent.parent.name.substr(0,5) == "slide") ? pobj.parent.parent.parent : _pt;
				if(_pt.visible == false) return;				
				pobj.controlTxtObj.resetTextStyle(event.target, pobj);
				var userAns = _currentCommandStr+event.target.text.toString();
				validateCommand(userAns, pobj);
			}
			if(event.charCode == 8 && Math.round(event.target.getLineMetrics(event.target.numLines-1).width) == 0){
				pobj.clearCommandText(event.target);
			}			
			pobj.updateScrollPane();
		}
		// Validate user answer against the correct answer from xml
		private function validateCommand(txt, pobj):void
		{			
			var corAns = pobj.xmlLoader.mediaXML.component.(@id==pobj.compID).command[pobj.commandNo].correctresponse;
			var ignoreCase = pobj.xmlLoader.mediaXML.component.(@id==pobj.compID).command[pobj.commandNo].correctresponse.@ignoreCase;
			var whitespace:RegExp = /(\s{1,})/g;
			var userAns = txt;
			var trimmedStr:String = userAns.replace(whitespace, "");
			corAns = corAns.toString().replace(/^\s+|\s+$/g,'')
			var userAns_trim = userAns.toString().replace(/^\s+|\s+$/g,'')
			
			var corAns_trim = corAns.toString().replace(/\s{2,}/g, ' ');			
			userAns_trim = userAns_trim.toString().replace(/\s{2,}/g, ' ');
			
			if(ignoreCase.length()>0)
			{
				if(ignoreCase == true || ignoreCase == ''){
					corAns_trim = corAns_trim.toLowerCase();
					userAns_trim = userAns_trim.toLowerCase();
				}
			}
			else
			{
				corAns_trim = corAns_trim.toLowerCase();
				userAns_trim = userAns_trim.toLowerCase();
			}
			if(trimmedStr.length == 0)
			{
				pobj.showNext(-1);
			}
			else if(corAns_trim == userAns_trim)
			{
				pobj.showNext(1);
			}
			else
			{
				pobj.showNext(0);
			}
			resetField();
		}
		// Reset the string once validation is done
		private function resetField():void
		{
			_currentCommandStr = "";
		}
		//
	}	
}
/*****************************************************************************************/