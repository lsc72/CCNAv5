//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF()
{
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(slideContainer){
	
	var preloaderObj;
	var roundBtnArray = []; 
	var mainCon;
	
	var tbComp = getCJSElement("TEXTBOX",{subType:"ROLLOVER", x:"9",y:"291",width:"444.1",height:"77",bodyId:"ID_s1_txt01",visible:"0",size:"10"});
	slideContainer.addChild(tbComp);
	
	
	function clickHandler(event)
	{
		tbComp.visible=true;
		
		if(event.target.id==1)
		{		
			tbComp.setBodyId("ID_s1_txt01");
			roundBtnArray[0].img1.visible=roundBtnArray[0].img2.visible=true;
		
			
		}
		else if(event.target.id==2)
		{
		 	
			roundBtnArray[0].img1.visible=roundBtnArray[0].img2.visible=false;
			tbComp.setBodyId("ID_s2_txt01");	
		}
		else
		{	
			roundBtnArray[0].img1.visible=roundBtnArray[0].img2.visible=false; 
			tbComp.setBodyId("ID_s3_txt01");	
		}		
	}
 
	
	// 			url # height and width # x postion # y position	
	
	imgArr = ['OuterCircle.png#273#11#36','MiddleCircle.png#211#41#67','CenterCircle.png#150#72#97'];	
	
	loadImages();
	 
	function loadImages()
	{
		mainCont=new createjs.Container();		
		slideContainer.addChild(mainCont);
		
		for(var i=0;i<imgArr.length;i++)
		{
			var image = getCJSElement("IMAGE",{x:imgArr[i].split("#")[2],y:imgArr[i].split("#")[3],src:imgArr[i].split("#")[0],subType:"", width:imgArr[i].split("#")[1], height:imgArr[i].split("#")[1]});
		
			var roundBtn=createBtn(image,clickHandler);
			roundBtn.id=i+1;	
			mainCont.addChild(roundBtn);
			roundBtnArray.push(roundBtn);
		}		
 
		loadShellImages();
		
		createCircleText();
	 
	}
	
	function createCircleText()
	{
		
		var circleText1 = getCJSElement("TEXT",{compId:"ID_txt01",x:"106",y:"39",width:"84",expand:"down",align:"center",id:"1",size:"10"});	
		roundBtnArray[0].addChild(circleText1);
		
		var circleText2 = getCJSElement("TEXT",{compId:"ID_txt02",x:"106",y:"75",width:"84",expand:"down",align:"center",id:"2",size:"10"});
		roundBtnArray[1].addChild(circleText2);
		
		var circleText3 = getCJSElement("TEXT",{compId:"ID_txt03",x:"106",y:"110",width:"84",expand:"down",align:"center",id:"3",size:"10"});
		roundBtnArray[2].addChild(circleText3);
	}
	
	function loadShellImages()
	{
		var cont1=new createjs.Container();
		
		var sideImage1 = getCJSElement("IMAGE",{x:290,y:70,src:"2_1_1_1_B.jpg",subType:"STD", width:122.75, height:87.9});
		
		var textElement1 = getCJSElement("TEXT",{compId:"ID_s1_txt02",x:"410",y:"22",width:"25",expand:"down",align:"center",size:"10"});
		
		cont1.addChild(sideImage1);
		cont1.addChild(textElement1);
		
		roundBtnArray[0].addChild(cont1);
		roundBtnArray[0].img1=cont1;
		//
		var cont2=new createjs.Container();
		var sideImage2 = getCJSElement("IMAGE",{x:290,y:0,src:"2_1_1_1_A.jpg",subType:"STD", width:125, height:63});
		
		var textElement2 = getCJSElement("TEXT",{compId:"ID_s1_txt03",x:"415",y:"110",width:"25",expand:"down",align:"center",size:"10"});
		
		cont2.addChild(textElement2);
		cont2.addChild(sideImage2);
		
		roundBtnArray[0].addChild(cont2);
		roundBtnArray[0].img2=cont2;	
		//
		roundBtnArray[0].img1.visible=roundBtnArray[0].img2.visible=false;
	}
	
	function createBtn (normalImg,callback)
	{		 
		var cont=new createjs.Container();
		cont.addChild(normalImg);
		
		cont.onClick = function(ev)
		{
			if(callback) callback(ev);	
		}
		
		cont.cursor = "pointer";
		return cont;
	}
})