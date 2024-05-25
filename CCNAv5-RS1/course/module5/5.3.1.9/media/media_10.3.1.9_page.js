//loadScript("../../../common/scripts/templates/slide/InteractiveSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var actContainer;
var pacArray = [];
var macArray = [];
var chkArray = [];
var answerKey = [];
var responseKey = [];
var macAddsPosted = [];

var possPorts = [1, 3, 5, 7, 9];
var sourceMac, destMac;

var MAC_0A,MAC_0B,MAC_0C,MAC_0D,MAC_0E,MAC_0F;
var isPacLoaded = false;
var isChkLoaded = false;
var helpFB,feedback;

function newProblem()
{
	initiateAct();
	assignSrcDest();
	populateMacTable();
	findCorrectAnswer();
	helpFB.visible = false;
	update = true;
}
function initiateAct(){		
	//turn off packet visibility
	
	var i;
	
	for(i = 0;i<pacArray.length;i++)
	{
		pacArray[i].visible = false;
	}
	//turn off MAC addresses in table
	for(i = 0;i<macArray.length;i++)
	{
		macArray[i].visible = false;
	}
	for(var i = 0; i< chkArray.length; i++){
		//Reset the check boxes 
		chkArray[i].reset();
	}	
	//Reset answer/response keys
	 answerKey = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
	 responseKey = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];	
	//Clear the macAddsPosted array
	macAddsPosted = [];
	
	clearFeedback();
}

function assignSrcDest()
{	
	var possibleAdds = ["0A", "0B", "0C", "0D", "0E", "0F"];	
	//Select a random source MAC, populate the Frame table, turn on the corresponding packet icon
	var randomSource = Math.round(Math.random()*6 - 0.5)
	sourceMac = possibleAdds[randomSource];
	$("#sourceMac").html("<b>"+sourceMac+"</b>");
	//sourceMacText.text = sourceMac;

	getContainerByName(pacArray,"packet"+sourceMac).visible = true;	
	//Remove the selected source MAC address from the array so it won't be duplicated, add "FF" as a possible destination MAC
	possibleAdds.splice(randomSource, 1)
	possibleAdds.push("FF");	
	var randomDest = Math.round(Math.random()*6 - 0.5)
	destMac = possibleAdds[randomDest];
	$("#destMac").html("<b>"+destMac+"</b>");
	//destMacText.text = destMac;
}

function populateMacTable()
{	
	var macAddsPoss = ["0A", "0B", "0C", "0D", "0E", "0F"];
	//There are six possible values, randomly select how many will be populated
	var numRandMacItems = Math.round(Math.random()*6 - 0.5) +1;	
	//Based on this ^^^^^^ number, randomly select which of these addresses will be populated
	
	var showMac;
	var randomMac;
	for(var i = 0; i<numRandMacItems; i++){		
		//pick a random array position - zero thru macAddsPoss.length
		randomMac = Math.round(Math.random()*macAddsPoss.length - 0.5);
		
		showMac = macAddsPoss[randomMac];
		getContainerByName(macArray,showMac).visible = true;	
		//this["MAC_"+showMac].visible = true;		
		//post the value to the array holding the selected MAC addresses
		macAddsPosted[i] = showMac;
		macAddsPoss.splice(randomMac, 1);
	}
	
}

function giveFeedback()
{
	clearFeedback();
	var allCorrect = true;

	//alert("Anser key "+answerKey+"<br/> Response key "+responseKey)
		
	for(var i=0 ; i<answerKey.length; i++){
				
		if (responseKey[i] != answerKey[i]){			
			if(i <= 11){
				feedback.setTitleId("ID_feedback1Header");
				feedback.setBodyId("ID_feedback1");
				allCorrect = false;
				break;
			}
			else if(i == 12){
				feedback.setTitleId("ID_feedback2Header");
				feedback.setBodyId("ID_feedback2");
				allCorrect = false;
				break;
			}
			else if(i >= 13){
				feedback.setTitleId("ID_feedback3Header");
				feedback.setBodyId("ID_feedback3");
				allCorrect = false;				
				break;
			}
		}
	}
	
	if(allCorrect){				
		feedback.setTitleId("ID_correctHeader");
		feedback.setBodyId("ID_correct");	
	}
	feedback.visible = true;
	update = true;	
}

function clearFeedback(){	
	feedback.visible = false;
	update = true;
}
function findCorrectAnswer()
{	
	//default to true (address is added), if a match is found, turn to false since address is already there
	answerKey[12] = true;
	
	for(var i=0; i<macAddsPosted.length; i++){
	
		if(sourceMac == macAddsPosted[i]){
			answerKey[12] = false;
		}
	}	
	//Select ports 1, 3, 5, 7, 9, then deselect the sourceMAC
	if(destMac == "FF"){			
			answerKey[13] = true;
			floodPorts();
	}		
	//Are both addresses on the same port?
	else if( (sourceMac=="0E" && destMac=="0F") || (sourceMac=="0F" && destMac=="0E")){			
			answerKey[16] = true;
	}
	//Frame is unicast, check if destination address is in table, send to specific port
	else if(this.destInMacTable()){			
			answerKey[14] = true;			
			//set destination port checkbox to true
				 if(destMac=="0A"){answerKey[0] = true;}
			else if(destMac=="0B"){answerKey[2] = true;}
			else if(destMac=="0C"){answerKey[4] = true;}
			else if(destMac=="0D"){answerKey[6] = true;}
			else if(destMac=="0E"){answerKey[8] = true;}
			else if(destMac=="0F"){answerKey[8] = true;}
	}
	//Frame is unicast, no address, flood to all ports
	else{ 
			answerKey[15] = true;
			floodPorts();
	}
}
function floodPorts(){	

	for(var j=0; j<possPorts.length; j++){				
		answerKey[possPorts[j]-1] = true;				
	}
			
	if(sourceMac == "0A") answerKey[0] = false;
	else if(sourceMac == "0B"){answerKey[2] = false;}
	else if(sourceMac == "0C"){answerKey[4] = false;}
	else if(sourceMac == "0D"){answerKey[6] = false;}
	else if(sourceMac == "0E"){answerKey[8] = false;}
	else if(sourceMac == "0F"){answerKey[8] = false;}		
}
function destInMacTable(){
	
	 var destInMac = false;
	
	for(var i=0; i<macAddsPosted.length; i++){
		if(destMac == macAddsPosted[i]){			
			destInMac = true;
		}
	}
	
	if(destInMac){return true;}
	else{return false;}
}

function getContainerByName(_arr,_str)
{
	for(var i = 0;i<_arr.length;i++)
	{
		if(_arr[i].name == _str)
		{
			return _arr[i];
		}
	}
}

(slideViewDidLoad = function(container,id){

	actContainer = container;

	function callbackFunction(_id)
	{
		if(_id == "Check")
		{
			giveFeedback();
		}
		else if(_id == "New")
		{
			 newProblem();
		}
		else
		{
			helpFB.visible = true;
			update = true;
		}		
	}

	function initAct(imgs){

		helpFB = getCJSElement("TEXTBOX",{x:238.2, y:52.9, width:470.4, height:301.25, subType:"CLOSABLE", titleId:"ID_HELP_TITLE", bodyId:"ID_HELP_BODY"});
		helpFB.visible = false;
		container.addChild(helpFB);

		feedback = getCJSElement("TEXTBOX",{x:365.35, y:104.25, width:201.05, height:150, subType:"CLOSABLE", titleId:"ID_feedback1Header", bodyId:"ID_feedback1"});
		feedback.visible = false;
		container.addChild(feedback);

		var btn = getCJSElement("BLUE_BUTTON",{x:730,y:300,compId:"ID_CHECK", id:"Check",callback:callbackFunction});
		container.addChild(btn);

		btn = getCJSElement("BLUE_BUTTON",{x:730,y:352,compId:"ID_NEW",id:"New",callback:callbackFunction});
		container.addChild(btn);

		btn = getCJSElement("BLUE_BUTTON",{x:730,y:326,compId:"ID_HELP",id:"Help",callback:callbackFunction});
		container.addChild(btn);

		//Load Source & Dest text
		var tComp;
		tComp = getCJSElement("TEXT",{x:79,y:162,size:11,align:"center",width:70,color:"#000",text:("<b></b>"),id:"destMac"});
		container.addChild(tComp);		
		tComp = getCJSElement("TEXT",{x:148,y:162,size:11,align:"center",width:70,color:"#000",text:("<b></b>"),id:"sourceMac"});
		container.addChild(tComp);

		//Load MAC Address
		var mArray = [{name:"0A",x:1,y:224,width:33},{name:"0B",x:119,y:224,width:33},{name:"0C",x:161,y:224,width:33},{name:"0D",x:240,y:224,width:33},{name:"0E",x:314.6,y:224,width:20},{name:"0F",x:335.5,y:224,width:23}];
		var mac;
		
		for(var i = 0;i<mArray.length;i++)
		{
			mac = new createjs.Container();
			mac.x = mArray[i].x;
			mac.y = mArray[i].y;
			container.addChild(mac);
			tComp = getCJSElement("TEXT",{x:8,y:1,size:11,align:"center",width:mArray[i].width,color:"#000",text:("<b>"+mArray[i].name+"</b>"),id:("MAC_"+mArray[i].name)});
			mac.addChild(tComp);
			mac.name = mArray[i].name;
			macArray[i] = mac;
		}

		//Load Pockets
		var pArray = [{name:"packet0A",x:549,y:75},{name:"packet0B",x:598.5,y:75},{name:"packet0C",x:650,y:74.5},{name:"packet0D",x:699,y:74.5},{name:"packet0E",x:749,y:162},{name:"packet0F",x:799,y:161}];
		var po;
		for(var i = 0;i<pArray.length;i++)
		{
			po = new createjs.Container();
			po.addChild(new createjs.Bitmap(imgs["packet"]));
			po.x = pArray[i].x;
			po.y = pArray[i].y;
			po.scaleX = po.scaleY = .5;
			po.name = pArray[i].name;
			container.addChild(po);
			pacArray[i] = po;
		}		
		
		//Load check boxes
		var checkBox = [{txtId:"Fa1",x:18,y:268},{txtId:"Fa2",x:75,y:268},{txtId:"Fa3",x:132,y:268},{txtId:"Fa4",x:189,y:268},
					{txtId:"Fa5",x:245,y:268},{txtId:"Fa6",x:302,y:268},{txtId:"Fa7",x:359,y:268},{txtId:"Fa8",x:415,y:268},
					{txtId:"Fa9",x:472,y:268},{txtId:"Fa10",x:530,y:268},{txtId:"Fa11",x:586,y:268},{txtId:"Fa12",x:643,y:268},
					{compId:"ID_Q2_choice1",x:18,y:308},{compId:"ID_Q2_choice2",x:18,y:327},{compId:"ID_Q2_choice3",x:18,y:346},
					{compId:"ID_Q2_choice4",x:18,y:365},{compId:"ID_Q2_choice5",x:18,y:384}];
		var _c;
		for(var i = 0;i<checkBox.length;i++)
		{
			checkBox[i].id = i;
			_c = new cBox(imgs["cbox"],checkBox[i]);
			_c.x = checkBox[i].x;
			_c.y = checkBox[i].y;		
			container.addChild(_c);	
			chkArray[i] = _c;	
		}	
		update = true;
		
		newProblem();
	}//initAct ends here

	loadImages([{src:"packet.png",id:"packet"},{src:"cbox.jpg",id:"cbox"}],initAct)

	//Load Checkboxs
	var cBox = function(_img,_ob)
	{
		this.initialize();

		var _t;
		_t = new createjs.Shape();
		_t.graphics.beginBitmapFill(_img,"no-repeat").drawRect(0,0,21,19);
		this.addChild(_t);
		this.s = _t;
		
		_t = new createjs.Shape();
		_t.graphics.beginBitmapFill(_img,"no-repeat").drawRect(0,19,21,19);
		_t.y = -20;
		this.addChild(_t);
		_t.visible = false;
		this.t = _t;		
		this.s = false;
		this.name = _ob.id;

		this.cursor = "pointer";
		this.onClick = function(ev)
		{		
			if(this.t.visible)
			{
				this.s = false;
				this.t.visible = false;	
				//_p.responseKey[this.name] = false;
				responseKey[this.name] = false;
			}
			else
			{
				this.s = false;
				this.t.visible = true;
				//_p.responseKey[this.name] = true;
				responseKey[this.name] = true;
			}
			//_p.clearFeedback();
			if(this.getStage()) this.getStage().update();
		};
		
		this.reset = function()
		{
			this.s = false;
			this.t.visible = false;	
			if(this.getStage()) this.getStage().update();
		}
		
	};
	cBox.prototype = new createjs.Container();

	

	/*
	//Load Source & Dest text
	var tComp;
	tComp = new TextComp({x:94,y:162,size:11,textAlign:"center",width:70,color:"#000",divId:"commonInterText",text:("<b></b>"),compId:"destMac"});
	this.addChild(tComp);
	
	tComp = new TextComp({x:171,y:162,size:11,textAlign:"center",width:70,color:"#000",divId:"commonInterText",text:("<b></b>"),compId:"sourceMac"});
	this.addChild(tComp);
	
	//Load MAC Address
	var mArray = [{name:"0A",x:7,y:224,width:33},{name:"0B",x:85,y:224,width:33},{name:"0C",x:163,y:224,width:33},{name:"0D",x:240,y:224,width:33},{name:"0E",x:315,y:224,width:20},{name:"0F",x:335,y:224,width:23}];
	var mac;
	
	for(var i = 0;i<mArray.length;i++)
	{
		mac = new createjs.Container();
		mac.x = mArray[i].x;
		mac.y = mArray[i].y;
		this.addChild(mac);
		tComp = new TextComp({x:8,y:1,size:11,textAlign:"center",width:mArray[i].width,color:"#000",divId:"commonInterText",text:("<b>"+mArray[i].name+"</b>"),compId:("MAC_"+mArray[i].name)});
		mac.addChild(tComp);
		mac.name = mArray[i].name;
		macArray[i] = mac;
	}
	
	//Load Pockets
	var pArray = [{name:"packet0A",x:546,y:73},{name:"packet0B",x:595,y:73},{name:"packet0C",x:643,y:73},{name:"packet0D",x:689,y:73},{name:"packet0E",x:736,y:156},{name:"packet0F",x:784,y:156}];
	
	var pImage = new Image();
	pImage.src = "packet.png";
	pImage.onload = function(){t.pocketLoaded(this)};
	this.pocketLoaded = function(_i)
	{
		isPacLoaded = true;
		var po;
		for(var i = 0;i<pArray.length;i++)
		{
			po = new createjs.Container();
			po.addChild(new createjs.Bitmap(_i));
			po.x = pArray[i].x;
			po.y = pArray[i].y;
			po.scaleX = po.scaleY = .5;
			po.name = pArray[i].name;
			this.addChild(po);
			this.pacArray[i] = po;
		}		
		if(isChkLoaded) this.loadFeedBack();
		if(this.getStage()) this.getStage().update();		
	}
	
	//Load Checkboxs
	var checkBox = [{txtId:"Fa1",x:18,y:268},{txtId:"Fa2",x:75,y:268},{txtId:"Fa3",x:132,y:268},{txtId:"Fa4",x:189,y:268},
					{txtId:"Fa5",x:245,y:268},{txtId:"Fa6",x:302,y:268},{txtId:"Fa7",x:359,y:268},{txtId:"Fa8",x:415,y:268},
					{txtId:"Fa9",x:472,y:268},{txtId:"Fa10",x:530,y:268},{txtId:"Fa11",x:586,y:268},{txtId:"Fa12",x:643,y:268},
					{compId:"ID_Q2_choice1",x:18,y:311},{compId:"ID_Q2_choice2",x:18,y:330},{compId:"ID_Q2_choice3",x:18,y:349},
					{compId:"ID_Q2_choice4",x:18,y:368},{compId:"ID_Q2_choice5",x:18,y:387}];
	var cboxImage = new Image();
	cboxImage.src = "cbox.jpg";
	cboxImage.onload = function(){t.cboxImageLoaded(this);};
	this.cboxImageLoaded = function(_img)
	{
		isChkLoaded = true;
		var _c;
		for(var i = 0;i<checkBox.length;i++)
		{
			checkBox[i].id = i;
			_c = new cBox(_img,checkBox[i],this);
			_c.x = checkBox[i].x;
			_c.y = checkBox[i].y;		
			this.addChild(_c);	
			this.chkArray[i] = _c;	
		}
		if(isPacLoaded) this.loadFeedBack();
		if(this.getStage()) this.getStage().update();
	}	
	
	
	*/
})


