
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

//Function triggers when all the slides/view contents are loaded
(slideViewDidLoad = function(){	
	
	isResize = false;
	
	//Create new div with scroll property into root container
	$("#commonMediaText").append("<div id='canvasId' style='top:0px;left:0px;position:absolute;width:470px;overflow-x:auto;'>      </div>");	
	var canvasDOM = new createjs.DOMElement(document.getElementById("canvasId"));
	canvasDOM.x = 5;
	canvasDOM.y = 10;
	root.addChild(canvasDOM);
	
	//Create new canvas & stage into new div
	$("#canvasId").append("<canvas id='childCanvas' width='1450' height='378'></canvas>");	
	var childStage = new createjs.Stage(document.getElementById("childCanvas"));	
	var im = new Image();
	
	//Create Flowchart IMAGE component
	im.onload = function()
	{		
		var _img = new createjs.Bitmap(this);
		_img.y = 5;
		_img.x = 10;
		childStage.addChild(_img);
		initSlide();	
	}
	im.src = "9_4_1_4.jpg";
	
	//Create Flowchart TEXT components using an array
	function initSlide()
	{
		var textArray = [{compId:"ID_txt01", x:"53", y:"141", width:"90", expand:"up+down", align:"center", size:"9" },
						{compId:"ID_txt02", x:"102", y:"90", width:"34.2", expand:"right", align:"left", size:"10" },
						{compId:"ID_txt03", x:"164", y:"128", width:"34.2", expand:"right", align:"left", size:"10" },
						{compId:"ID_txt04", x:"32", y:"333", width:"132.6", expand:"right", align:"left", size:"10" },
						{compId:"ID_txt05", x:"231", y:"145", width:"95", expand:"up+down", align:"center", size:"9" },
						{compId:"ID_txt07", x:"344", y:"129", width:"34.2", expand:"right", align:"left", size:"10" },
						{compId:"ID_txt08", x:"284", y:"197", width:"34.2", expand:"right", align:"left", size:"10" },
						{compId:"ID_txt09", x:"211", y:"272", width:"134.6", expand:"up+down", align:"center", size:"9" },
						{compId:"ID_txt10", x:"414", y:"146", width:"90", expand:"up+down", align:"center", size:"9" },
						{compId:"ID_txt11", x:"525", y:"128", width:"34.2", expand:"right", align:"left", size:"10" },
						{compId:"ID_txt12", x:"463", y:"196", width:"34.2", expand:"right", align:"left", size:"10" },
						{compId:"ID_txt15", x:"705", y:"129", width:"34.2", expand:"right", align:"left", size:"10" },
						{compId:"ID_txt16", x:"643", y:"197", width:"34.2", expand:"right", align:"left", size:"10" },
						{compId:"ID_txt13", x:"593", y:"141", width:"90", expand:"up+down", align:"center", size:"9" },
						{compId:"ID_txt14", x:"506", y:"274", width:"90", expand:"up+down", align:"center", size:"9" },
						{compId:"ID_txt17", x:"468", y:"264", width:"34.2", expand:"right", align:"left", size:"9" },
						{compId:"ID_txt18", x:"615", y:"260", width:"34.2", expand:"right", align:"left", size:"9" },
						{compId:"ID_txt19", x:"789", y:"144", width:"76.4", expand:"up+down", align:"center", size:"9" },
						{compId:"ID_txt20", x:"895", y:"130", width:"34.2", expand:"right", align:"left", size:"10" },
						{compId:"ID_txt21", x:"367", y:"196", width:"34.2", expand:"right", align:"right", size:"10" },
						{compId:"ID_txt22", x:"968", y:"142", width:"83.4", expand:"up+down", align:"center", size:"9" },
						{compId:"ID_txt23", x:"1075", y:"130", width:"38.15", expand:"right", align:"left", size:"10" },
						{compId:"ID_txt24", x:"1012", y:"196", width:"46.2", expand:"right", align:"left", size:"10" },
						{compId:"ID_txt25", x:"1141", y:"141", width:"96.3", expand:"up+down", align:"center", size:"9" },
						{compId:"ID_txt26", x:"1254", y:"131", width:"38.15", expand:"right", align:"left", size:"10" },
						{compId:"ID_txt27", x:"1191", y:"196", width:"46.2", expand:"right", align:"left", size:"10" },
						{compId:"ID_txt28", x:"944", y:"345", width:"128.6", expand:"up+down", align:"center", size:"9" },
						{compId:"ID_txt29", x:"1311", y:"143", width:"117.6", expand:"up+down", align:"center", size:"9" },
						 ];						
		
		//Add each text object into the new stage
		var tComp;				
		for(var i = 0;i<textArray.length;i++)
		{
			textArray[i].div = "canvasId";
			tComp = getCJSElement("TEXT",textArray[i],"canvasId");
			childStage.addChild(tComp);
		}
		
		//Update stage for rendering new Image & Text objects
		update = true;
		childStage.update();
	}	
});