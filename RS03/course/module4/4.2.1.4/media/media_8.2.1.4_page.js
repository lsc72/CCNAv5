
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
(slideViewDidLoad = function(container,id){	
	isResize = false;
	if(id==1){
		loadFirst();
	}
	
	function loadFirst(){
		//Create new div with scroll property into root container
	$("#slide_1").append("<div id='canvasId' style='top:0px;left:0px;position:absolute;width:437px;overflow-x:auto;'></div>");	
	var canvasDOM = new createjs.DOMElement(document.getElementById("canvasId"));
	canvasDOM.x = 10;
	canvasDOM.y = 6;
	root.addChild(canvasDOM);
	//Create new canvas & stage into new div
	$("#canvasId").append("<canvas id='childCanvas' width='1102' height='89' style='position:absolute;top:181px;left:0px;'></canvas>");	
	var childStage = new createjs.Stage(document.getElementById("childCanvas"));	
	var im = new Image();
	
	//Create Flowchart IMAGE component
	im.onload = function()
	{		
		var _img = new createjs.Bitmap(this);
		_img.y = 0;
		_img.x = 0;
		childStage.addChild(_img);
		initSlide();	
	}
	im.src = "frameControlSubFields.png";	
	function initSlide(){
	var textArray = [
		{compId:"ID_s1_txt13", x:"-4" ,y:"200", width:"98", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s1_txt14", x:"94" , y:"200", width:"98", expand:"up+down" ,align:"center", size:"10"},
		{compId:"ID_s1_txt15", x:"194", y:"200" ,width:"98", expand:"up+down", align:"center" ,size:"10"},
		{compId:"ID_s1_txt16", x:"294", y:"200", width:"98", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s1_txt17" ,x:"394", y:"200" ,width:"98", expand:"up+down" ,align:"center", size:"10"},
		{compId:"ID_s1_txt18", x:"494", y:"200", width:"98", expand:"up+down", align:"center" ,size:"10"},
		{compId:"ID_s1_txt19", x:"594", y:"200", width:"98", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s1_txt20", x:"694", y:"200", width:"98", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s1_txt21", x:"792", y:"200", width:"98", expand:"up+down" ,align:"center" ,size:"10"},
		{compId:"ID_s1_txt22", x:"894" ,y:"200", width:"98", expand:"up+down", align:"center" ,size:"10"},
		{compId:"ID_s1_txt23", x:"994", y:"200", width:"98", expand:"up+down", align:"center" ,size:"10"},
		{compId:"ID_s1_txt24", x:"130", y:"250", width:"180", expand:"right", align:"left" ,size:"10" ,class:"orangeCallOut"}
		
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