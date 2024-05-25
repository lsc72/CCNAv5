
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

//Function triggers when all the slides/view contents are loaded
(slideViewDidLoad = function(container,id){	
	if(id==2){
		loadSecond();
	}
	function loadSecond(){
	//Create new div with scroll property into root container
	$("#slide_2").append("<div id='canvasId' style='top:10px;left:0px;position:absolute;width:450px;height:380px;overflow-y:auto;'></div>");	
	var canvasDOM = new createjs.DOMElement(document.getElementById("canvasId"));
	canvasDOM.x = 0;
	canvasDOM.y = 10;
	root.addChild(canvasDOM);
	
	//Create new canvas & stage into new div
	$("#canvasId").append("<canvas id='childCanvas' width='430' height='493'></canvas>");	
	var childStage = new createjs.Stage(document.getElementById("childCanvas"));	
	var im = new Image();
	
	//Create Flowchart IMAGE component
	im.onload = function()
	{		
		var _img = new createjs.Bitmap(this);
		_img.y = 35;
		_img.x = 95;
		childStage.addChild(_img);
		initSlide();	
	}
	im.src = "slide_2.png";
	
	//Create Flowchart TEXT components using an array
	function initSlide(){
	var textArray = [{compId:"ID_s2_txt01", x:"108", y:"44", width:"69.3", expand:"up+down" , align:"center",size:"10" },
					 {compId:"ID_s2_txt02", x:"55", y:"95", width:"183.85", expand:"up" , align:"center", size:"10" },
					{compId:"ID_s2_txt04", x:"55", y:"251", width:"183.85", expand:"up+down" , align:"center",size:"10" },
					{compId:"ID_s2_txt08", x:"250", y:"169", width:"164.8", expand:"up" , align:"center",size:"10" },
					{compId:"ID_s2_txt03", x:"108", y:"180", width:"79.3", expand:"up+down" , align:"center",size:"10" },					
					{compId:"ID_s2_txt07", x:"110", y:"464", width:"69.3", expand:"up+down" , align:"center",size:"10" },
					{compId:"ID_s2_txt10", x:"150", y:"224", width:"32", expand:"right", align:"left", size:"10" },
					{compId:"ID_s2_txt09", x:"213", y:"168", width:"32", expand:"up", align:"left", size:"10" },
					{compId:"ID_s2_txt12", x:"205", y:"323", width:"32", expand:"right", align:"left", size:"10" },
					{compId:"ID_s2_txt13", x:"153", y:"386", width:"32", expand:"right", align:"left", size:"10" },
					{compId:"ID_s2_txt06", x:"51", y:"406", width:"183.85", expand:"up+down" , align:"center",size:"10" },
					{compId:"ID_s2_txt05", x:"108", y:"333", width:"76.3", expand:"up+down" , align:"center",size:"10" },
		
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
