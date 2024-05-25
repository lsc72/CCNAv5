
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

//Function triggers when all the slides/view contents are loaded
(slideViewDidLoad = function(container,id){	
	if(id==1){
		loadFirst();
	}else if(id==2){
		loadSecond();
	}
	function loadFirst(){
	//Create new div with scroll property into root container
	$("#slide_1").append("<div id='canvasId' style='top:0px;left:0px;position:absolute;width:446px; height:398px;overflow-x:auto;'></div>");	
	var canvasDOM = new createjs.DOMElement(document.getElementById("canvasId"));
	canvasDOM.x = 0;
	canvasDOM.y = 10;
	root.addChild(canvasDOM);
	
	//Create new canvas & stage into new div
	$("#canvasId").append("<canvas id='childCanvas' width='733' height='378'></canvas>");	
	var childStage = new createjs.Stage(document.getElementById("childCanvas"));	
	var im = new Image();
	
	//Create Flowchart IMAGE component
	im.onload = function()
	{		
		var _img = new createjs.Bitmap(this);
		_img.y = 36;
		_img.x = 21;
		childStage.addChild(_img);
		initSlide();	
	}
	im.src = "9.1.2.2.jpg";
	
	//Create Flowchart TEXT components using an array
	function initSlide(){
	var textArray = [
		{compId:"ID_s1_txt01", x:"14.2" ,y:"58", width:"100", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s1_txt09", x:"170" , y:"58.5", width:"100", expand:"up+down" ,align:"center", size:"10"},
		{compId:"ID_s1_txt02", x:"12.7", y:"158.45" ,width:"100.05", expand:"up+down", align:"center" ,size:"10"},
		{compId:"ID_s1_txt05", x:"176.85", y:"160.55", width:"92", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s1_txt06" ,x:"331.05", y:"155.45" ,width:"100", expand:"up+down" ,align:"center", size:"10"},
		{compId:"ID_s1_txt19", x:"305.95", y:"170.5", width:"26.1", expand:"down", align:"left" ,size:"10"},
		{compId:"ID_s1_txt07", x:"454.5", y:"155.45", width:"100.05", expand:"up+down", align:"left", size:"10"},
		{compId:"ID_s1_txt08", x:"577.5", y:"155.45", width:"100.05", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s1_txt12", x:"400.05", y:"256.55", width:"115", expand:"up+down" ,align:"center" ,size:"10"},
		{compId:"ID_s1_txt10", x:"568.35" ,y:"257.55", width:"126", expand:"up+down", align:"center" ,size:"10"},
		{compId:"ID_s1_txt17", x:"518.05", y:"267.5", width:"32.1", expand:"left", align:"right" ,size:"10"},
		{compId:"ID_s1_txt11", x:"575.55" ,y:"353.3" ,width:"118.05" ,expand:"up+down" ,align:"center" ,size:"10"},
		{compId:"ID_s1_txt18" ,x:"634.7", y:"322.5", width:"15" ,expand:"right", align:"left" ,size:"10"},
		{compId:"ID_s1_txt04", x:"4" ,y:"22.5", width:"73.15", expand:"up" ,align:"left", size:"10"},
		{compId:"ID_s1_txt03", x:"4", y:"121.5", width:"52.15" ,expand:"up" ,align:"left" ,size:"10"},
		{compId:"ID_s1_txt13", x:"180.95", y:"97.05", width:"36.15" ,expand:"right", align:"left" ,size:"10"},
		
		{compId:"ID_s1_txt16", x:"331.95" ,y:"121.05", width:"36.15", expand:"right" ,align:"left", size:"10"},
		{compId:"ID_s1_txt14", x:"454.95", y:"124.05", width:"36.15" ,expand:"right" ,align:"left" ,size:"10"},
		{compId:"ID_s1_txt15", x:"579.95", y:"123.05", width:"36.15" ,expand:"right", align:"left" ,size:"10"},
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
	function loadSecond(){
		
	//Create new div with scroll property into root container
	$("#slide_2").append("<div id='canvasId_' style='top:0px;left:0px;position:absolute;width:434px;overflow-x:hidden !important;overflow-y:hidden !important;'></div>");	
	var canvasDOM_ = new createjs.DOMElement(document.getElementById("canvasId_"));
	canvasDOM_.x = 0;
	canvasDOM_.y = 10;
	root.addChild(canvasDOM_);
	
	//Create new canvas & stage into new div
	$("#canvasId_").append("<canvas id='childCanvas_' width='830' height='335'></canvas>");	
	var childStage_ = new createjs.Stage(document.getElementById("childCanvas_"));	
	var im_ = new Image();
	
	//Create Flowchart IMAGE component
	im_.onload = function()
	{		
		var _imgs = new createjs.Bitmap(this);
		_imgs.y = 70;
		_imgs.x = 14;
		childStage_.addChild(_imgs);
		initSlide2();	
	}
	im_.src = "9_4_1_1B.png";
	
	//Create Flowchart TEXT components using an array
	function initSlide2(){
	var textArray = [];						
		
		//Add each text object into the new stage
		var tComp;				
		for(var i = 0;i<textArray.length;i++)
		{
			textArray[i].div = "canvasId_";
			tComp = getCJSElement("TEXT",textArray[i],"canvasId_");
			childStage_.addChild(tComp);
		}
		
		//Update stage for rendering new Image & Text objects
		update = true;
		childStage_.update();
	}	
	}
	
	
});
