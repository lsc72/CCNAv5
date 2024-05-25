
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);


//Function triggers when all the slides/view contents are loaded
(slideViewDidLoad = function(container,id){	
	
	if(id ==3)
	{
	//Create new div with scroll property into root container
	$("#slide_3").append("<div id='canvasId' style='top:0px;left:0px;position:absolute;width:445px;height:320px;overflow-y:auto;'>      </div>");	
	var canvasDOM = new createjs.DOMElement(document.getElementById("canvasId"));
	canvasDOM.x = 0;
	canvasDOM.y = 50.9;
	root.addChild(canvasDOM);
	
	//Create new canvas & stage into new div
	$("#canvasId").append("<canvas id='childCanvas' width='350' height='554'></canvas>");	
	var childStage = new createjs.Stage(document.getElementById("childCanvas"));	
	var im = new Image();
	
	//Create Flowchart IMAGE component
	im.onload = function()
	{		
		var _img = new createjs.Bitmap(this);
		_img.y = 50.9;
		_img.x = 28;
		childStage.addChild(_img);
		initSlide();	
	}
	im.src = "9.1.1.4_C.png";
	
	//Create Flowchart TEXT components using an array
	function initSlide()
	{
		var textArray = [
		{compId:"ID_txt01_03",x:"32",y:"27.6",width:"380",expand:"up+down",align:"left",bold:1},
		{compId:"ID_txt03_03",x:"4",y:"125",width:"89.15",expand:"up+down",align:"left",size:"10",bold:1,rotation:270.0001},
		{compId:"ID_txt05_03", x:"32", y:"141.9", width:"380", expand:"down", align:"left", size:"10"},
		
		{compId:"ID_txt07_03",x:"32",y:"167.7",width:"380",expand:"up+down",align:"left",bold:1},
		{compId:"ID_txt04_03",x:"4",y:"263",width:"89.15",expand:"up+down",align:"left",size:"10",bold:1,rotation:270.0001},
		{compId:"ID_txt06_03", x:"32", y:"275.7", width:"380", expand:"down", align:"left", size:"10"},
		
		{compId:"ID_txt02_03",x:"32",y:"301.8",width:"380",expand:"up+down",align:"left",bold:1},
		{compId:"ID_txt09_03",x:"4",y:"392",width:"89.15",expand:"up+down",align:"left",size:"10",bold:1,rotation:270.0001},
		{compId:"ID_txt11_03", x:"32", y:"400.8", width:"380", expand:"down", align:"left", size:"10"},
		
		{compId:"ID_txt08_03",x:"32",y:"423.8",width:"380",expand:"up+down",align:"left",bold:1},
		{compId:"ID_txt10_03",x:"4",y:"517",width:"89.15",expand:"up+down",align:"left",size:"10",bold:1,rotation:270.0001},
		{compId:"ID_txt12_03", x:"32", y:"530.4", width:"380", expand:"down", align:"left", size:"10"},
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
	}
});