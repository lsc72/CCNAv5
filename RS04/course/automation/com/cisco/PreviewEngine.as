package com.cisco
{
	import flash.display.MovieClip;
	import flash.xml.XMLDocument;
	import flash.events.MouseEvent;
	import flash.display.Loader;
	import flash.net.URLRequest;
	import flash.net.URLLoader;
	import flash.net.navigateToURL;
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


	public class PreviewEngine extends MovieClip
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
		var chapterArray:Array = new Array();
		private var needstatus:String;
		public var routertextid:String;
		public var statictextid:String;
		public var routercount:int;
		public var staticidcount:int;
		public function PreviewEngine()
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
			stageRef.nextButton.addEventListener(MouseEvent.CLICK, nextPage);
			stageRef.prveButton.addEventListener(MouseEvent.CLICK, previousPage);
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
			
			Listtags=[];
			hrefs=[];
			folder=[];
			chapterArray=[];
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
				chapterArray.push(chapter);
			}
trace(chapterArray);

		}


		private function onEnter(event:KeyboardEvent):void
		{

			// if the key is ENTER
			if (event.charCode == 13)
			{
            selectedpage=stageRef.pageinput.text;
			var url:String = "htmlflash.html?pagenumber="+selectedpage;
			ExternalInterface.call("openUrl", url);	
			}
		}


		private function nextPage(event:MouseEvent):void
		{
	
var nowPage:int = findInArray(stageRef.pageinput.text);
stageRef.pageinput.text=chapterArray[nowPage+1];
selectedpage=stageRef.pageinput.text;		
var url:String = "htmlflash.html?pagenumber="+selectedpage;
		ExternalInterface.call("openUrl", url);	
		
		
		}
		
		
		private function previousPage(event:MouseEvent):void
		{
var nowPage:int = findInArray(stageRef.pageinput.text);
stageRef.pageinput.text=chapterArray[nowPage-1];
selectedpage=stageRef.pageinput.text;
var url:String = "htmlflash.html?pagenumber="+selectedpage;
ExternalInterface.call("openUrl", url);	
		}



private function findInArray(str:String):int {
    for(var i:int = 0; i < chapterArray.length; i++){
        if(chapterArray[i] == str){
            trace("found it at index: " + i);
            return i;
        }
    }
    return -1; //If not found
}





		



	}
}