/* XMLLoader - Syntax Checker */
/*****************************************************************************************/
package classes.media.Utils {
	import flash.events.*;
	import flash.net.*;
	import flash.display.MovieClip;
	
	public class XMLLoader extends MovieClip{		
		public var mediaXML:XML;
		public function XMLLoader() {
			// constructor code			
		}
		// Load XML
		public function loadXML(fileInfo)
		{
			var xmlLoader:URLLoader = new URLLoader();
			xmlLoader.addEventListener(Event.COMPLETE, processXML);
			xmlLoader.addEventListener(IOErrorEvent.IO_ERROR, ioErrorHandler);
			xmlLoader.load(new URLRequest(fileInfo.filePath + fileInfo.fileName));
		}
		// Dispatch onload event
		private function processXML(e:Event):void
		{
			mediaXML = XML(e.target.data);
			dispatchEvent( new Event("xmlLoaded") );
		}
		// Track for error event
		private function ioErrorHandler(e:Event):void
		{
			trace(e.toString());
		}
		//
	}	
}
/*****************************************************************************************/