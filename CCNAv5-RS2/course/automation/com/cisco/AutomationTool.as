package com.cisco
{
	import flash.display.MovieClip;
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
	import fl.controls.ComboBox;
	


	public class AutomationTool extends MovieClip
	{
		public var stageRef:*;
		public var mediaElement:Object;
		public var componentType:String;
		public var xmlContent:String;
		public var blank:String="loading";
		private var selectedmodule:String;
		public var selectedpage:String;
		private var Main:Object;
		private var pageList:List = new List;
		
		
		
		var loaderinfo:LoaderInfo;
		
		
		public function AutomationTool()
		{
			// constructor code
			this.addEventListener(Event.ADDED_TO_STAGE,getParent);
			
			


		}

		private function getParent(e:Event):void
		{
			stageRef = this.parent;
			generateButtons();
		}

		public function generateButtons():void
		{
			
			
			
			for (var i:int = 1; i < 11; i++)
			{
				var btn:moduleButton = new moduleButton  ;
				btn.x = 20;
				btn.y = i * 35;
				btn.dt.text = String(i);
				btn.name = "module" + i;
				btn.buttonMode = true;
				addChild(btn);
				btn.addEventListener(MouseEvent.CLICK,getMuduleChapters);
				
			}
		}


		private function getMuduleChapters(e:MouseEvent):void
		{
			trace(e.target.name);
			selectedmodule = e.currentTarget.name;
			//trace(e.currentTarget.name);
			/*loadHTMLFile();*/
			var loader2:URLLoader = new URLLoader(new URLRequest((('../../../' + e.currentTarget.name) + '/index.html')));
			loader2.addEventListener(Event.COMPLETE,HTMLLoaded);
		}


		private function HTMLLoaded(e:Event):void
		{

			pageList.removeAll();
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
			{	var mylink:String = folder[xlength];				
				mylink = mylink.split("/")[0].split('href="')[1];				
				pageList.addItem({label:mylink,source:mylink});
			}
			pageList.x = 120;
			pageList.y = 20;
			pageList.width = 200;
			pageList.height = 450;
			stageRef.addChild(pageList);
			
			
			
			
			
			pageList.addEventListener(MouseEvent.CLICK,loadSlides);
		}
		//trace(chapters);


		private function loadSlides(e:MouseEvent):void
		{
			selectedpage=pageList.selectedItem.source;
			xmlContent="";
			stageRef.datas.text=xmlContent;
			var loader:Loader = new Loader;
			loader.contentLoaderInfo.addEventListener(Event.COMPLETE,onLoadCompleteSWF);
			loader.load(new URLRequest("../../../"+selectedmodule+"/"+pageList.selectedItem.source+"/media/media_"+pageList.selectedItem.source+".swf"));
			//loader.load(new URLRequest((((((("../../../" + selectedmodule) + "/") + pageList.selectedItem.source) + "/media/media_") + pageList.selectedItem.source) + ".swf")));
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
				trace(pagetype);
				if ((pagetype == "ButtonBar"))
				{
					trace("THIS IS A MULTI BAR PAGE");
					ptype = "multislide";


				}

			}



			if ((ptype == "singleslide"))
			{
				initSinglePage();
				trace("THIS IS A SINGLE  PAGE");
			}
			else if ((ptype == "multislide"))
			{
				initMultiSlide(Main.getChildAt(l).totalButtons);
			}
		}

		private function initSinglePage():void
		{
			for (var elements:int =0; elements<Main.numChildren; elements++)
			{
				var pageelement:String = String(Main.getChildAt(elements));
				componentType = pageelement.split(' ')[1].split(']')[0];
				mediaElement = Main.getChildAt(elements);	
				var htmlData:String=getSlideElements(componentType, mediaElement);


				
			}
			
			ExternalInterface.call("generateXML", selectedmodule, selectedpage, htmlData);
		}
		
		private function getSlideElements(componentType, mediaElement):String
		{	
		if (componentType=='LazyText')
				{
					xmlContent +=  '</br>' + '&lt;element type="TEXT" compId="' + mediaElement.labelID + '" x="' + mediaElement.x + '" y="' + mediaElement.y + '" width="' + mediaElement.width + '" height="' + mediaElement.height + '"  expand="' + mediaElement.expand + '"  align="' + mediaElement.align +'"  size="' + mediaElement.size + '"  /&gt;';
				}
				
		if (componentType=='StaticText')
				{
					
					xmlContent +=  '</br>' + '&lt;element type="TEXT" text="' + mediaElement.text +'" x="' + mediaElement.x + '" y="' + mediaElement.y + '" width="' + mediaElement.width + '" height="' + mediaElement.height + '"  /&gt;';
				}
				
				if (componentType=='Bubble')
				{
					xmlContent +=  '</br>' + '&lt;element type="BUBBLE" compId="' + mediaElement.textID +'" x="' + mediaElement.x +'" y="' + mediaElement.y +'" width="' + mediaElement.width +'" height="' + mediaElement.height +'" align="' + mediaElement.align +'" tailPosition="' + mediaElement.position ;
					var flipstatus:String;
					if (mediaElement.flip){
                                    flipstatus="1"
                                } else {
                                    flipstatus="0"
									}
					
					
					
					
					xmlContent +='" tailFlip="' + flipstatus + '"  /&gt;'
				}
				
				
		

return xmlContent;

		}


		private function initMultiSlide(num:int):void
		{
			ExternalInterface.call("generateXML", selectedmodule, selectedpage, String(num));
		}



	}
}