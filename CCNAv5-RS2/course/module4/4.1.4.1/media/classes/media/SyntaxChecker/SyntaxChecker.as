/* Syntax Checker */
/*****************************************************************************************/
package classes.media.SyntaxChecker {
	
	import flash.display.MovieClip;
	import flash.events.*;
	import flash.display.Loader;
	import flash.net.*;
	import flash.text.*;
	import fl.containers.ScrollPane;
	import fl.controls.ScrollPolicy;
	import flash.utils.*;
	import flash.external.ExternalInterface;
	import classes.media.Utils.*;
	import classes.media.Utils.Logger;

	public class SyntaxChecker extends MovieClip{
		//
		Logger.info("syntax checker 4/29/13");
		public var xmlLoader;
		public var holder;
		private var maskMc:MovieClip;
		private var _commandNo:Number = 0;
		private var _sp:ScrollPane;
		private var _compID:String = "ID_SC";
		private var _width:Number;
		private var _height:Number;
		private var _fontFace:String;
		private var _fontSize:Number;
		private var lineMc:MovieClip;
		private var clipObj:GenerateClips;
		private var textObj:GenerateText;
		public var controlTxtObj:TextManipulation;
		public var validateObj:Validation;
		public var btnObj:ButtonEvents;
		private var _groupNo:Number = 0;
		private var cmdCnt:Number = 0;
		//
		public function SyntaxChecker() {
			// constructor code
			loaderInfo.addEventListener(Event.INIT, init);
		}
		
		private function init(evt:Event):void
		{
			// Create a scrollpane and add the content
			_sp = new ScrollPane();
			this.addChild(_sp);						
			var emptyMc = new MovieClip();			
			_sp.setStyle( "upSkin", emptyMc);
			_sp.horizontalScrollPolicy = ScrollPolicy.OFF;			
			_width = this.width/this.scaleX;
			_height = this.height/this.scaleY;
			_sp.setSize(_width,_height);
			// Create an instance for the supported classes
			clipObj = new GenerateClips();
			textObj = new GenerateText();
			controlTxtObj = new TextManipulation();
			validateObj = new Validation();
			btnObj = new ButtonEvents();
			// Create a mask
			createMask();
			// Loading XML
			loadXML();
			
			try{
				ExternalInterface.addCallback("setSCFocus", setTxtFocus);
			}
			catch(e){				
			}
		}
		// Component parameters
		[Inspectable (name = "compID", variable = "compID", type = "String", defaultValue = "ID_SC")]		
		public function get compID():String {return _compID;}
		public function set compID(value:String):void {_compID = value;}
		//
		public function get commandNo():Number {return _commandNo;}
		public function set commandNo(value:Number):void{ _commandNo = value;}
		public function get groupNo():Number {return _groupNo;}
		public function set groupNo(value:Number):void{ _groupNo = value;}
		// Load XML
		private function loadXML():void
		{
			var currentPage = stage.loaderInfo.url;
			var mediaRoot = currentPage.substring(0, currentPage.lastIndexOf("/")+1);
			var xmlFile:String = unescape(currentPage.substring(currentPage.lastIndexOf("/")+1, currentPage.lastIndexOf(".")) + ".xml");
			xmlLoader = new XMLLoader();
			
			xmlLoader.addEventListener("xmlLoaded", processXML);
			
			xmlLoader.loadXML({fileName:xmlFile, filePath:mediaRoot});
		}
		// Handle XML
		private function processXML(e:Event):void
		{			
			initSyntaxChecker();
		}
		// Create a mask
		private function createMask():void
		{
			maskMc = clipObj.createMovieClip({targ:this, name:'mask', fillColor:'0xFF22CC', width:_width, height:_height, x:0, y:0});
		}		
		// Create holder, line
		private function initSyntaxChecker():void
		{			
			// create a holder, line
			holder = clipObj.createMovieClip({targ:this, name:'holder', fillColor:'0xFF0000', width:_width-10, height:_height-10, x:0, y:0});
			lineMc = clipObj.createLine({targ:holder, name:'lineMc', alpha:0, lineStyle:1, sx:0, sy:0, ex:0, ey:14});
			lineMc.scaleX = lineMc.scaleX/this.scaleX;
			lineMc.scaleY = lineMc.scaleY/this.scaleY;
			_sp.source=holder;


			_fontFace = xmlLoader.mediaXML.component.(@id==_compID).@fontFace;
			_fontSize = xmlLoader.mediaXML.component.(@id==_compID).@fontSize;
			holder.mask = maskMc;
			createExistingCommands();
			btnObj.initButtonEvents(this);
		}
		// Create first text field if it exists in the xml
		private function createExistingCommands()
		{			
			var txt = xmlLoader.mediaXML.component.(@id==_compID).existingcommands;
			if(txt != "")
			{			
				textObj.createText({targ:holder,
								    multiline:true, 
								    name:"prompt"+groupNo,
								    text:"<font face='"+_fontFace+"'"+" size='"+_fontSize+"'"+">"+txt+"</font>",
								    x:0,
								    y:0, 
								    width:_width - 15,
								    autoSize:TextFieldAutoSize.CENTER,
								    selectable:false,
								    wordWrap:true,
								    type:TextFieldType.DYNAMIC,
								    mouseWheel:false, 
								    leading:2});
			}
			createPromptText({isStart:1});
		}
		// Create prompt text, feedback text, instruction and deviceresponse text
		private function createPromptText(obj:Object):void
		{
			var ypos:Number = 0;
			var txt = "";
			var styleObj ={};
			var prevCmd;
			
			if(obj.wrong == 1)
			{				
				groupNo++;
				txt = xmlLoader.mediaXML.component.(@id==_compID).feedback;
				prevCmd = holder.getChildByName("cmd"+(groupNo-1)+(cmdCnt-1));
				cmdCnt = 0;
				ypos = prevCmd.y + prevCmd.height;
				styleObj = {wordWrap:true, width:_width-15}
			}			
			else if(obj.correct == 1)
			{				
				var len = xmlLoader.mediaXML.component.(@id==_compID).command[_commandNo-1].children().length();
				prevCmd = holder.getChildByName("cmd"+(groupNo)+(cmdCnt-1));
				cmdCnt = 0;
				
				for(var i=1;i<len;i++)
				{
					groupNo++;
					txt = xmlLoader.mediaXML.component.(@id==_compID).command[_commandNo-1].children()[i];
					var gap = (i>1)?0:4;
					ypos = (prevCmd.y + prevCmd.height)-gap;
					styleObj = {wordWrap:true, width:_width-15};
					prevCmd = createTextField(ypos, txt, styleObj);
				}
				if(len > 1)
					createPromptText({fb:1});
				else
					createPromptText({});
			}			
			else
			{
				groupNo++;
				txt = xmlLoader.mediaXML.component.(@id==_compID).command[_commandNo].@prompt;
				var prev = holder.getChildByName("cmd"+(groupNo-1)+(cmdCnt-1));
				var prevPrompt = (obj.showAns == 1 && prev!= null)?prev:holder.getChildByName("prompt"+(groupNo-1));
				ypos = prevPrompt.y + prevPrompt.height;
			}
			
			//ypos = (obj.isStart == 1 || obj.fb == 1)?ypos:(ypos-4);
			if(obj.correct != 1)
			{				
				createTextField(ypos, txt, styleObj);
				if(obj.wrong != 1)
					createCommandText(0, obj.showAns);
				else if(obj.wrong == 1)
					createPromptText({});
			}
			updateScrollPane();
		}
		// Create a text field for prompt text, feedback, instruction and deviceresponse text
		private function createTextField(ypos, txt, styleObj):TextField
		{
			var txt = textObj.createText({targ:holder,
								multiline:true,
							    name:"prompt"+groupNo,
								text:"<font face='"+_fontFace+"'"+" size='"+_fontSize+"'"+">"+txt+"</font>",
							    x:0,
							    y:ypos,
								wordWrap:styleObj.wordWrap,
								width:styleObj.width,
							    autoSize:TextFieldAutoSize.LEFT, 
							    selectable:false,
								type:TextFieldType.DYNAMIC,
								mouseWheel:false,
								leading:2});
			return txt;
		}
		// Create command text 
		private function createCommandText(nline, showAns):void
		{			
			var promptField = (nline == 1)?holder.getChildByName("cmd"+groupNo+(cmdCnt-1)):holder.getChildByName('prompt'+(groupNo));
			var xpos = (nline == 1)?0:(promptField.x + promptField.width);
			var ypos = (nline == 1)?(promptField.y+promptField.height):promptField.y;
			var w = (nline == 1)?(_width-15):(_width - (promptField.width + 15));
			var prev = holder.getChildByName("cmd"+(groupNo-1)+(cmdCnt-1));
			ypos = (showAns == 1 && prev!= null)?(prev.y+prev.height-4):ypos;
			
			var txt = textObj.createText({targ:holder,
								multiline:false, 
							    name:"cmd"+groupNo+cmdCnt,
							    text:'',
							    x:xpos,
							    y:ypos,
							    width:w,
								height:(promptField.height/promptField.scaleY),
							    autoSize:TextFieldAutoSize.NONE, 
							    selectable:true,
							    type:TextFieldType.INPUT,
							    size:_fontSize,
							    font:_fontFace,
							    mouseWheel:false,
							    leading:2});
			controlTxtObj.setTxtFocus(txt);
			controlTxtObj.checkPasswordType(txt, this);
			cmdCnt++;
			if(showAns == 1)
			{
				var corAns = xmlLoader.mediaXML.component.(@id==_compID).command[_commandNo].correctresponse;				
				txt.text = corAns;
				controlTxtObj.resetTextStyle(txt, this)
				if(_commandNo < xmlLoader.mediaXML.component.(@id==compID).command.length()-1)
				{
					showNext(1);
				}
			}			
			txt.stage.addEventListener(KeyboardEvent.KEY_UP, onKeyUPHandler);
			if(_commandNo == xmlLoader.mediaXML.component.(@id==_compID).command.length()-1)
			{
				controlTxtObj.resetTextStyle(txt, this)
			}			
			updateScrollPane();
			
		}
		// Event handler to handle the command text field key events
		private function onKeyUPHandler(event:KeyboardEvent):void
		{
			if(event.target.toString() == '[object TextField]')
			{	
				this.compID = _compID;
				this.commandNo = _commandNo;			
				validateObj.validateKey(event, this);			
			}
		}
		// Show next text field based on the flag
		public function showNext(flag):void
		{
			switch(flag)
			{
				case -1:
					createPromptText({});
					break;
				case 0:
					createPromptText({wrong:1});
					break;
				case 1:
					_commandNo++;
					createPromptText({correct:1});
					break;
				case 2:					
					createCommandText(1, 0);
					break;
				case 3:
					createPromptText({showAns:1});
			}
		}
		// Update scrollpane whenever a text update occurs
		public function updateScrollPane():void
		{			
			_sp.verticalScrollPosition = this.scaleX * holder.height;
			_sp.refreshPane();
			_sp.update();
			
		}
		// Reset the text on click of the Reset button
		public function resetText():void
		{
			holder = null;
			_sp.source= null;
			commandNo = 0;
			groupNo = 0;
			cmdCnt = 0;
			initSyntaxChecker();
		}
		// Return the current command text field
		public function getCommandField()
		{
			return holder.getChildByName("cmd"+groupNo+(cmdCnt-1));
		}
		// Set the Focus for the first command text field
		private function setTxtFocus():void
		{			
			controlTxtObj.setTxtFocus(holder.getChildByName("cmd"+groupNo+(cmdCnt-1)));
		}
		// Set the Focus when removing the text using backspace key
		public function clearCommandText(cmd):void
		{			
			if(cmdCnt-1 > 0)
			{
				controlTxtObj.resetTextStyle(cmd, this);
				holder.removeChild(cmd);
				cmdCnt--;
				var fcmd = holder.getChildByName("cmd"+groupNo+(cmdCnt-1));
				controlTxtObj.resetFocus(fcmd);
			}
		}
		//
	}
}
/*****************************************************************************************/