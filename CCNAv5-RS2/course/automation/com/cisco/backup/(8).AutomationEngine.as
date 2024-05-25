package com.cisco
{
	import flash.display.MovieClip;
	import flash.display.DisplayObjectContainer;
	import flash.xml.XMLDocument;
	import flash.events.MouseEvent;
	import flash.display.Loader;
	import flash.net.URLRequest;
	import flash.net.URLLoader;
	import flash.events.Event;
	import flash.display.LoaderInfo;
	import flash.display.Sprite;
	import fl.controls.List;
	import flash.text.TextField;
	import flash.display.Stage;
	import flash.display.DisplayObject;
	import flash.external.ExternalInterface;
	import flash.text.TextFormat;
	import flash.system.System;
	import flash.events.KeyboardEvent;
	import flash.geom.Point;


	public class AutomationEngine extends MovieClip
	{
		public var stageRef:*;
		public var mediaElement:Object;
		public var componentType:String;
		public var totalbarButtons:Number;
		public var xmlContent:String;
		public var blank:String = "loading";
		private var selectedmodule:String;
		public var selectedpage:String;
		private var Main:Object;
		var loaderinfo:LoaderInfo;
		public var htmlData:String;
		public var unwantedtexts:Array = new Array();
		private var needstatus:String;
		public var routertextid:String;
		public var statictextid:String;
		public var routercount:int;
		public var staticidcount:int;
		var point:Point;

		
		public function AutomationEngine()
		{
			// constructor code
			this.addEventListener(Event.ADDED_TO_STAGE,getParent);
		}

		private function getParent(e:Event):void
		{
			stageRef = this.parent;
			loadSettings();


		}
		// get module informations from xml file 
		public function loadSettings():void
		{
			var xmlLoader:URLLoader = new URLLoader();
			xmlLoader.addEventListener(Event.COMPLETE, LoadXML);
			xmlLoader.load(new URLRequest("settings.xml"));

			function LoadXML(e:Event):void
			{
				var dataXml:XML = new XML(e.target.data);
				var firstmodule:int = int(dataXml.moduleinfo[0].attribute("firstmodule"));
				var lastmodule:int = int(dataXml.moduleinfo[0].attribute("lastmodule"));
				loadModules(firstmodule, lastmodule);

			}
			stageRef.generate.addEventListener(MouseEvent.CLICK, onGenerate);
			stageRef.pageinput.addEventListener(KeyboardEvent.KEY_DOWN, onEnter);

		}













		//loading module combobox
		public function loadModules(fisrtmodule, lastmodule):void
		{
			for (var i:int = fisrtmodule; i < lastmodule+1; i++)
			{
				stageRef.combomodule.modulesList.addItem({label:"module" + i, source:"module" + i});
				stageRef.combomodule.modulesList.addEventListener(Event.CHANGE, getModuleChapters);
			}
		}



		//loading index.html file for chapter details;
		private function getModuleChapters(e:Event):void
		{
			selectedmodule = e.target.selectedItem.label;
			var loader2:URLLoader = new URLLoader(new URLRequest((('../../../' + selectedmodule) + '/index.html')));
			loader2.addEventListener(Event.COMPLETE,HTMLLoaded);
		}

		private function HTMLLoaded(e:Event):void
		{
			stageRef.combopages.pagesList.removeAll();
			var s:String = String(e.target.data);
			//trace(s);
			var imgRegExp:RegExp = /<li>(.*?)<\/li>/gi;
			var r = new RegExp("<a[^>]*class=\"page-title\"[^>]*>(.*?)</a>","gis");
			var Listtags:Array = s.match(r);
			var newstring:String = String(Listtags);
			var imgRegExp2:RegExp = /href="(.*?)\"/gi;
			var hrefs:Array = newstring.match(imgRegExp2);
			var newstring2:String = String(hrefs);
			var imgRegExp3:RegExp = /href="(.*?)\"/gi;
			var folder:Array = newstring2.match(imgRegExp3);
			for (var xlength:int = 0; xlength < folder.length; xlength++)
			{
				var chapter:String = folder[xlength];
				chapter = chapter.split("/")[0].split('href="')[1];
				stageRef.combopages.pagesList.addItem({label:chapter,source:chapter});
			}


		}


		private function onEnter(event:KeyboardEvent):void
		{

			// if the key is ENTER
			if (event.charCode == 13)
			{

				loadSlides();
			}
		}


		private function onGenerate(event:MouseEvent):void
		{

			loadSlides();

		}









		//;
		private function loadSlides():void
		{
			totalbarButtons = 0;
			htmlData = "";
			if (stageRef.pageinput.text == "")
			{
				selectedpage = stageRef.combopages.pagesList.selectedItem.label;
				selectedmodule = stageRef.combomodule.modulesList.selectedItem.label;
			}
			else if (stageRef.pageinput.text!="")
			{	selectedpage = stageRef.pageinput.text;
				
				
				selectedmodule = "module" + String(stageRef.pageinput.text).split(".", 1);

			}


			xmlContent = "";
			unwantedtexts.push("R1","R2","R3","R4","R5","R6","PC1","PC2","PC3","PC4","PC5","S1","S2","S3","S4","S5","ISP");
			var loader:Loader = new Loader  ;
			routertextid = "ID_router_txt";
			routercount = 1;
			statictextid = "ID_static_";
			staticidcount = 1;

			loader.contentLoaderInfo.addEventListener(Event.COMPLETE,onLoadCompleteSWF);
			loader.load(new URLRequest("../../../"+selectedmodule+"/"+selectedpage+"/media/media_"+selectedpage+".swf"));
		}

		private function onLoadCompleteSWF(e:Event):void
		{
			loaderinfo = e.target as LoaderInfo;
			var swf:Object = loaderinfo.content;
			Main = swf.getChildAt(0);
			var ptype:String = "singleslide";
			for (var l:int = 0; l < Main.numChildren; l++)
			{

				var pagetype:String = String(Main.getChildAt(l));
				pagetype = pagetype.split(' ')[1].split(']')[0];
				//trace(pagetype);
				if ((pagetype == "ButtonBar"))
				{

					totalbarButtons = Main.getChildAt(l).totalButtons;
					//trace("THIS IS A MULTI BAR PAGE");
					ptype = "multislide";


				}

			}
			if ((ptype == "singleslide"))
			{
				//trace("THIS IS A SINGLE PAGE");
				initSinglePage();
			}
			else if ((ptype == "multislide"))
			{
				initMultiSlide(totalbarButtons);
			}
		}
		
		private function digIt(display : MovieClip) : void {
  if(display) {
    for (var i : int = 0;i < display.numChildren;i++) {
        var child : DisplayObject = display.getChildAt(i);		
		var childstring:String = String(display.getChildAt(i));
				componentType = childstring.split(' ')[1].split(']')[0];
				trace("THIS IS "+componentType )
				mediaElement = display.getChildAt(i);
				htmlData = getSlideElements(componentType,mediaElement);	
       // trace(mediaElement + "THIS IS TYPE" + componentType);
        if(child is MovieClip) {
			var clipName:String = String(child.name);
			if(clipName.substring(0, 6)!="slide0"){			
            digIt(MovieClip(child));}
        }
    }
}
}


private function global(clip):Point{
	point = localToGlobal(new Point(clip.x, clip.y)); 
point = clip.localToGlobal(new Point());	
return point;
}




		
		
		
		
		
		
		
		
		
		

		private function initSinglePage():void
		{
digIt(MovieClip(Main));
trace(htmlData);
			/*for (var elements:int =0; elements<Main.numChildren; elements++)
			{
				var pageelement:String = String(Main.getChildAt(elements));
				componentType = pageelement.split(' ')[1].split(']')[0];
				mediaElement = Main.getChildAt(elements);
				
				htmlData = getSlideElements(componentType,mediaElement);
			}*/

			htmlData = "&lt;slide&gt;" + htmlData + "</br>&lt;/slide&gt;";
			ExternalInterface.call("generateXML", selectedmodule, selectedpage, htmlData);
		}



		private function checkUnwanted(unwntds:String):String
		{
			for (var stx:int = 0; stx<unwantedtexts.length; stx++)
			{
				if (unwntds==unwantedtexts[stx])
				{
					needstatus = "notneeded";
				}

			}

			return needstatus;
		}





		private function getSlideElements(componentType, mediaElement):String
		{
			var elementProperties:Array = new Array();
			var propertyString:String = "";
			var pcount:int;
			needstatus = "needed";

			if (componentType=='LazyText')
			{
				if (String(mediaElement.labelID).substring(mediaElement.labelID.length - 5,mediaElement.labelID.length) != "title")
				{
					elementProperties = [];
					elementProperties.push({_property:"type", _value:"TEXT"});
					elementProperties.push({_property:"compId", _value:mediaElement.labelID});
					
					
					
					trace("THIS IS GLOBAL X"+ global(mediaElement));

					elementProperties.push({_property:"x", _value:global(mediaElement).x});
					elementProperties.push({_property:"y", _value:global(mediaElement).y});
					elementProperties.push({_property:"width", _value:mediaElement.width});
					//elementProperties.push({_property:"height", _value:mediaElement.height});
					elementProperties.push({_property:"expand", _value:mediaElement.expand});
					elementProperties.push({_property:"align", _value:mediaElement.align});
					if (mediaElement.size != 11)
					{
						elementProperties.push({_property:"size", _value:mediaElement.size});
					}

					var c = mediaElement.color;
					if (c.toString(16) != 393536)
					{
						elementProperties.push({_property:"color", _value:"#"+c.toString(16)});

					}
					var rad = mediaElement.radius;
					var brdcolor = mediaElement.borderColor;
					var bgcolor = mediaElement.bgcolor;


					if (mediaElement.border == true)
					{
						trace(mediaElement.bgcolor+" id is "+mediaElement.labelID);

						if (bgcolor==16639700)
						{
							elementProperties.push({_property:"class", _value:"orangeCallOut"});

						}
						else if (bgcolor==12692433)
						{
							elementProperties.push({_property:"class", _value:"purpleCallOut"});

						}
						else if (bgcolor==16774073)
						{
							elementProperties.push({_property:"class", _value:"yellowCallOut"});

						}
						else if (bgcolor==11917747)
						{
							elementProperties.push({_property:"class", _value:"lgreenCallOut"});

						}
						else if (bgcolor==15133608)
						{
							elementProperties.push({_property:"class", _value:"greenCallOut"});

						}
						else if (bgcolor==15133608)
						{
							elementProperties.push({_property:"class", _value:"greenCallOut"});

						}

					}
					propertyString = "";



					for (pcount=0; pcount<elementProperties.length; pcount++)
					{
						propertyString +=  elementProperties[pcount]._property + '="' + elementProperties[pcount]._value + '" ';
					}
				}
				else if (String(mediaElement.labelID).substring(mediaElement.labelID.length-5 , mediaElement.labelID.length)=="title")
				{
					propertyString +=  'type="TEXT" subType="TITLE" compId="' + mediaElement.labelID + '"';
				}

				xmlContent +=  '</br>' + '&lt;element ' + propertyString + '/&gt;';
			}

			if (componentType=='TextField')
			{
				elementProperties = [];
				var statictextId:String = statictextid + String(staticidcount++);
				elementProperties.push({_property:"type", _value:"TEXT"});
				elementProperties.push({_property:"id", _value:statictextId});
				elementProperties.push({_property:"text", _value:mediaElement.text});
				elementProperties.push({_property:"x", _value:global(mediaElement).x});
				elementProperties.push({_property:"y", _value:global(mediaElement).y});
				elementProperties.push({_property:"width", _value:mediaElement.width});
				//elementProperties.push({_property:"height", _value:mediaElement.height});
				var tFormat:TextFormat = mediaElement.getTextFormat();
				var mbold = tFormat.bold;
				var msize = tFormat.size;
				var mcolor = tFormat.color;
				var malign = tFormat.align;
				elementProperties.push({_property:"align", _value:malign});
				if (msize!=11)
				{
					elementProperties.push({_property:"size", _value:msize});
				}
				if (mcolor!=3749174)
				{
					elementProperties.push({_property:"color", _value:"#"+mcolor.toString(16)});
				}
				if (mbold)
				{
					elementProperties.push({_property:"bold", _value:"1"});
				}


				propertyString = "";


				for (pcount=0; pcount<elementProperties.length; pcount++)
				{
					propertyString +=  elementProperties[pcount]._property + '="' + elementProperties[pcount]._value + '" ';
				}

				//trace(propertyString);
				xmlContent +=  '</br>' + '&lt;element ' + propertyString + '/&gt;';

			}



			if (componentType=='StaticText')
			{

				var stext:String = String(mediaElement.text);
				if (checkUnwanted(stext)=="needed"&& mediaElement.text.length<40)
				{
					var statictextId2:String = statictextid + String(staticidcount++);
					elementProperties = [];
					elementProperties.push({_property:"type", _value:"TEXT"});
					elementProperties.push({_property:"id", _value:statictextId2});
					elementProperties.push({_property:"text", _value:mediaElement.text});
					elementProperties.push({_property:"x", _value:global(mediaElement).x});
					elementProperties.push({_property:"y", _value:global(mediaElement).y});
					elementProperties.push({_property:"align", _value:"center"});
					elementProperties.push({_property:"width", _value:mediaElement.width});
					//elementProperties.push({_property:"height", _value:mediaElement.height});;
					propertyString = "";
					for (pcount=0; pcount<elementProperties.length; pcount++)
					{
						propertyString +=  elementProperties[pcount]._property + '="' + elementProperties[pcount]._value + '" ';
					}

					xmlContent +=  '</br>' + '&lt;element ' + propertyString + '/&gt;';

				}
				else if (mediaElement.text.length>40)
				{
					var rtextId:String = routertextid + String(routercount++);
					xmlContent +=  '</br>' + '&lt;element type="ROUTER" textId="' + rtextId + '" x="' + global(mediaElement).x + '" y="' + global(mediaElement).y + '" width="' + String(int(mediaElement.width + 16.55)) + '"  height="' + mediaElement.height + '"  /&gt;';

					xmlContent +=  '</br><font color="red">' + '&lt;!--&lt;text id="' + rtextId + '"&gt;&lt;![CDATA[&lt;pre&gt;' + mediaElement.text + '&lt;/pre&gt;]]&gt;&lt;/text&gt;--&gt;</font>';
				}




			}



			if (componentType=='ImageLoader')
			{




				elementProperties = [];
				elementProperties.push({_property:"type", _value:"IMAGE"});
				elementProperties.push({_property:"x", _value:global(mediaElement).x});
				elementProperties.push({_property:"y", _value:global(mediaElement).y});
				elementProperties.push({_property:"width", _value:mediaElement.width});
				elementProperties.push({_property:"height", _value:mediaElement.height});
				elementProperties.push({_property:"type", _value:mediaElement.type});
				elementProperties.push({_property:"src", _value:mediaElement.file});
				propertyString = "";
				for (pcount=0; pcount<elementProperties.length; pcount++)
				{
					propertyString +=  elementProperties[pcount]._property + '="' + elementProperties[pcount]._value + '" ';
				}

				xmlContent +=  '</br>' + '&lt;element ' + propertyString + '/&gt;';

			}



			if (componentType=='FlashTable')
			{

				elementProperties = [];
				elementProperties.push({_property:"type", _value:"TEXT"});
				elementProperties.push({_property:"compId", _value:mediaElement.layoutTextID});
				elementProperties.push({_property:"x", _value:global(mediaElement).x});
				elementProperties.push({_property:"y", _value:global(mediaElement).y});
				elementProperties.push({_property:"width", _value:mediaElement.width});
				elementProperties.push({_property:"height", _value:mediaElement.height});
				propertyString = "";
				for (pcount=0; pcount<elementProperties.length; pcount++)
				{
					propertyString +=  elementProperties[pcount]._property + '="' + elementProperties[pcount]._value + '" ';
				}

				xmlContent +=  '</br>' + '&lt;element ' + propertyString + '/&gt;';

			}






if (componentType=='DropTarget')
			{

				elementProperties = [];
				elementProperties.push({_property:"type", _value:"DROP"});
				elementProperties.push({_property:"compId", _value:mediaElement.textID});
				elementProperties.push({_property:"x", _value:global(mediaElement).x});
				elementProperties.push({_property:"y", _value:global(mediaElement).y});
				propertyString = "";
				for (pcount=0; pcount<elementProperties.length; pcount++)
				{
					propertyString +=  elementProperties[pcount]._property + '="' + elementProperties[pcount]._value + '" ';
				}

				xmlContent +=  '</br>' + '&lt;subelement ' + propertyString + '/&gt;';

			}

if (componentType=='DragSource')
			{

				elementProperties = [];
				elementProperties.push({_property:"type", _value:"DRAG"});
				elementProperties.push({_property:"compId", _value:mediaElement.textID});
				elementProperties.push({_property:"x", _value:global(mediaElement).x});
				elementProperties.push({_property:"y", _value:global(mediaElement).y});
				propertyString = "";
				for (pcount=0; pcount<elementProperties.length; pcount++)
				{
					propertyString +=  elementProperties[pcount]._property + '="' + elementProperties[pcount]._value + '" ';
				}

				xmlContent +=  '</br>' + '&lt;subelement ' + propertyString + '/&gt;';

			}














			if (componentType=='TextBox')
			{
				//trace(mediaElement.titleTextId);
				elementProperties = [];
				elementProperties.push({_property:"type", _value:"TEXTBOX"});
				elementProperties.push({_property:"titleId", _value:mediaElement.titleTextId});
				elementProperties.push({_property:"bodyId", _value:mediaElement.bodyTextId});
				elementProperties.push({_property:"x", _value:global(mediaElement).x});
				elementProperties.push({_property:"y", _value:global(mediaElement).y});
				elementProperties.push({_property:"width", _value:mediaElement.width});
				elementProperties.push({_property:"height", _value:mediaElement.height});
				propertyString = "";
				for (pcount=0; pcount<elementProperties.length; pcount++)
				{
					propertyString +=  elementProperties[pcount]._property + '="' + elementProperties[pcount]._value + '" ';
				}

				xmlContent +=  '</br>' + '&lt;element ' + propertyString + '/&gt;';

			}






			if (componentType=='Bubble')
			{

				elementProperties = [];
				elementProperties.push({_property:"type", _value:"BUBBLE"});
				elementProperties.push({_property:"compId", _value:mediaElement.textID});
				elementProperties.push({_property:"x", _value:global(mediaElement).x});
				elementProperties.push({_property:"y", _value:global(mediaElement).y});
				elementProperties.push({_property:"width", _value:mediaElement.width});
				elementProperties.push({_property:"height", _value:mediaElement.height});
				elementProperties.push({_property:"align", _value:mediaElement.align});
				elementProperties.push({_property:"tailPosition", _value:mediaElement.position});

				var flipstatus:String;
				if (mediaElement.flip)
				{
					flipstatus = "1";
				}
				else
				{
					flipstatus = "0";
				}

				elementProperties.push({_property:"tailFlip", _value:flipstatus});

				propertyString = "";
				for (pcount=0; pcount<elementProperties.length; pcount++)
				{
					propertyString +=  elementProperties[pcount]._property + '="' + elementProperties[pcount]._value + '" ';
				}
				xmlContent +=  '</br>' + '&lt;element ' + propertyString + '/&gt;';

			}
			return xmlContent;

		}


		private function initMultiSlide(totbtns:int):void
		{
			var totalelements = Main.numChildren;
			for (var childindex:int =0; childindex<totalelements; childindex++)
			{
				var elementtype:String = String(Main.getChildAt(childindex));
				var slidename:String = String(Main.getChildAt(childindex).name);

				for (var xi:int=1; xi<totbtns+1; xi++)
				{

					if (slidename=="slide0"+xi)
					{
						xmlContent +=  "&lt;slide&gt;";
						var currentObject  = Main.getChildAt(childindex)
						
						digIt(MovieClip(currentObject));
						
						
						
						
						/*for (var x:int=0; x<Main.getChildAt(childindex).numChildren; x++)
						{
							var pageelement1:String = String(Main.getChildAt(childindex).getChildAt(x));
							componentType = pageelement1.split(' ')[1].split(']')[0];
							mediaElement = Main.getChildAt(childindex).getChildAt(x);
							htmlData = getSlideElements(componentType,mediaElement);
						}*/

						xmlContent +=  "</br>&lt;/slide&gt;</br></br></br>";

					}

				}

			}

			htmlData = htmlData + "</br>&lt;/slide&gt;</br></br></br>";
			
			digIt(MovieClip(Main));
			/*for (var elements:int =0; elements<Main.numChildren; elements++)
			{
				var pageelement:String = String(Main.getChildAt(elements));
				componentType = pageelement.split(' ')[1].split(']')[0];
				mediaElement = Main.getChildAt(elements);
				htmlData = getSlideElements(componentType,mediaElement);

			}*/
trace(htmlData);
			ExternalInterface.call("generateXML", selectedmodule, selectedpage, htmlData);
		}



	}
}