
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
	$("#canvasId").append("<canvas id='childCanvas' width='900' height='365'></canvas>");	
	var childStage = new createjs.Stage(document.getElementById("childCanvas"));	
	var im = new Image();
	
	//Create Flowchart IMAGE component
	im.onload = function()
	{		
		var _img = new createjs.Bitmap(this);
		_img.y = 5;
		_img.x = 14;
		childStage.addChild(_img);
		initSlide();	
	}
	im.src = "9_4_1_3.png";
	
	//Create Flowchart TEXT components using an array
	function initSlide()
	{
		var textArray = [{compId:"ID_txt05",x:"828",y:"89.45",width:"128.4",expand:"up+down",align:"center",size:"10",class:         "seagreenCallOut"},
		{compId:"ID_txt01",x:"31.05",y:"100.45",width:"96.45",expand:"up+down",align:"center",size:"9"},
		{compId:"ID_txt02", x:"240.55", y:"96.45", width:"85.35", expand:"up+down", align:"center", size:"9"},
		{compId:"ID_txt04", x:"652.8" ,y:"96.05", width:"84.8" ,expand:"up+down" ,align:"center" ,size:"9"},
		{compId:"ID_txt03", x:"449.55" ,y:"90.45", width:"84.6" ,expand:"up+down", align:"center" ,size:"9"},
		{compId:"ID_txt06" ,x:"117.6" ,y:"176.45" ,width:"128.4" ,expand:"up", align:"center" ,size:"9",class:"seagreenCallOut"},
		{compId:"ID_txt07" ,x:"226.55" ,y:"261.45" ,width:"113.45", expand:"up+down" ,align:"center" ,size:"9"},
		{compId:"ID_txt08", x:"410.55" ,y:"341.45" ,width:"161.4" ,expand:"down" ,align:"center" ,size:"9",class:"seagreenCallOut"},
		{compId:"ID_txt11", x:"159.15" ,y:"82.45" ,width:"50.65" ,expand:"up", align:"left" ,size:"9"},
		{compId:"ID_txt12" ,x:"364.05" ,y:"81" ,width:"47.8" ,expand:"up" ,align:"left" ,size:"9"},
		{compId:"ID_txt13" ,x:"568.95" ,y:"81", width:"45.75" ,expand:"up" ,align:"left" ,size:"9"},
		{compId:"ID_txt14" ,x:"775.1" ,y:"81", width:"48.75", expand:"up" ,align:"left" ,size:"9"},
		{compId:"ID_txt15" ,x:"364.05" ,y:"245", width:"70.2", expand:"up" ,align:"left" ,size:"9"},
		{compId:"ID_txt16" ,x:"181.25" ,y:"245" ,width:"30.8" ,expand:"up" ,align:"right" ,size:"9"},
		{compId:"ID_txt17" ,x:"287.95" ,y:"141.35" ,width:"80.65" ,expand:"right", align:"left" ,size:"9"},
		{compId:"ID_txt18" ,x:"697.7" ,y:"141.35" ,width:"80.65" ,expand:"right" ,align:"left" ,size:"9"},
		{compId:"ID_txt19" ,x:"494.15" ,y:"141.35" ,width:"80.65" ,expand:"right" ,align:"left" ,size:"9"},
		{compId:"ID_txt20" ,x:"4" ,y:"311.45" ,width:"128.4" ,expand:"down" ,align:"left" ,size:"9"},
		{compId:"ID_txt21" ,x:"86" ,y:"39.45" ,width:"80.65" ,expand:"right" ,align:"left" ,size:"9"},
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