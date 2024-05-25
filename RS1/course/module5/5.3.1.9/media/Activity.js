
(iButton = function(_img,_txt,_p){
	this.initialize();
	
	var t = this;
	var _n = new createjs.Shape();
	_n.graphics.beginBitmapFill(_img,"no-repeat").drawRect(0,0,_img.width,29);
	this.addChild(_n);
	this.n = _n;
	
	_n = new createjs.Shape();
	_n.graphics.beginBitmapFill(_img,"no-repeat").drawRect(0,29,_img.width,29);
	_n.y = -29;
	this.addChild(_n);
	_n.visible = false;
	this.r = _n;
	
	var _fo = {};
	_fo.size = 12;
	_fo.x = 25;
	_fo.y = 5;
	_fo.expand = "up+down"
	_fo.textAlign = "center";
	_fo.width = 100;
	_fo.color = "#fff"
	_fo.divId = "commonInterText";
	_fo.compId = _txt;
	_fo.text = $(_p.xml).find("component#"+_txt).text();	;
	var _textComp = new TextComp(_fo);
    this.addChild(_textComp);
	
	this.txtId = _txt;
	
	var btnOver = function(th)
	{
		if(createjs.Touch.isSupported()) return;
		document.body.style.cursor='pointer';
		$("#"+th.txtId).css("color","#006699");
		th.n.visible = false;
		th.r.visible = true;
		if(th.getStage()) th.getStage().update();
	};
	var btnOut = function(th)
	{
		document.body.style.cursor='default';
		$("#"+th.txtId).css("color","#FFF");
		th.n.visible = true;
		th.r.visible = false;
		if(th.getStage()) th.getStage().update();
	};
	var btnClick = function(th)
	{
		_p.callbackFunction(th.id);
	}
	
	this.onMouseOver = function(ev){if(createjs.TouchEnabled) return;btnOver(ev.target)};
	this.onMouseOut = function(ev){btnOut(ev.target)};
	this.onClick = function(ev){btnClick(ev.target)};
	$("#"+_txt).click(function(ev){btnClick(t)});
	
}).prototype = new createjs.Container();

(cBox = function(_img,_ob,_p)
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
	
	var _fo = {};
	var _tId;
	if(_ob.compId)
	{
		_tId = $(_p.xml).find("component#"+_ob.compId).text();	
		_fo.compId = _ob.compId;	
	}
	else
	{
		_tId = _ob.txtId;
		_fo.compId = _ob.txtId;		
	}
	_fo.x = 34;
	_fo.y = 2;
	_fo.size = 11;
	_fo.divId = "commonInterText";
	_fo.text = _tId;
	var _textComp = new TextComp(_fo);
    this.addChild(_textComp);
	
	this.s = false;
	this.name = _ob.id;
	
	this.onMouseOver = function(){document.body.style.cursor='pointer';};
	this.onMouseOut = function(){document.body.style.cursor='default';};
	this.onClick = function(ev)
	{		
		if(this.t.visible)
		{
			this.s = false;
			this.t.visible = false;	
			_p.responseKey[this.name] = false;
			//alert(_p.responseKey);
		}
		else
		{
			this.s = false;
			this.t.visible = true;
			_p.responseKey[this.name] = true;
		}
		_p.clearFeedback();
		if(this.getStage()) this.getStage().update();
	};
	
	this.reset = function()
	{
		this.s = false;
		this.t.visible = false;	
		if(this.getStage()) this.getStage().update();
	}
	
}).prototype = new createjs.Container();

var Activity = function(_xmlData,_dataObject)
{
	this.initialize();
		
	var t = this;
	this.name = "Activity";
	this.xml = _xmlData;
	
	this.pacArray = [];
	this.macArray = [];
	this.chkArray = [];
	this.answerKey = [];
	this.responseKey = [];
	this.macAddsPosted = [];
	
	this.possPorts = [1, 3, 5, 7, 9];
	var sourceMac, destMac;

	var MAC_0A,MAC_0B,MAC_0C,MAC_0D,MAC_0E,MAC_0F;
	var isPacLoaded = false;
	var isChkLoaded = false;
	
	this.getContainerByName = function(_arr,_str)
	{
		for(var i = 0;i<_arr.length;i++)
		{
			if(_arr[i].name == _str)
			{
				return _arr[i];
			}
		}
	}
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
		this.macArray[i] = mac;
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
	//Load Buttons
	var btnImage = new Image();
	btnImage.src = "btn.jpg";
	btnImage.onload = function(ev)
	{
		t.btnImageLoaded(this);
	}
	
	this.btnImageLoaded = function(_img)
	{
		var btn;
		var btnId;
		//Check 
		btnId = "ID_CHECK";
		btn = new iButton(_img,btnId,this)
		btn.x = 730;
		btn.y = 318;
		btn.id = "Check";
		this.addChild(btn);
		//New
		btnId = "ID_NEW" //$(this.xml).find("component#ID_CHECK").text();	
		btn = new iButton(_img,btnId,this)
		btn.x = 730;
		btn.y = 345;
		btn.id = "New";
		this.addChild(btn);
		//Help
		btnId = "ID_HELP" //$(this.xml).find("component#ID_CHECK").text();	
		btn = new iButton(_img,btnId,this)
		btn.x = 730;
		btn.y = 373;
		btn.id = "Help";
		this.addChild(btn);		
		
		if(this.getStage()) this.getStage().update();
	}
	this.callbackFunction = function(_id)
	{
		if(_id == "Check")
		{
			this.giveFeedback();
		}
		else if(_id == "New")
		{
			 this.newProblem();
		}
		else
		{
			this.helpFB.visible = true;
			if(this.getStage()) this.getStage().update();	
		}
		
	}
	
	if(this.getStage()) this.getStage().update();	
}

var p = Activity.prototype = new createjs.Container();

p.loadFeedBack = function()
{
	var checkFB = document.createElement("div");
	checkFB.id = "helpDiv";
	checkFB.style.cssText = "left:0;top:0;position:absolute;";
	checkFB.innerHTML = "<div id='Checkfeedback'><img id='ccloseBtn' src='closeBtn.png' width=19 height=19/><p id='ctitle'>"+$(this.xml).find("component#ID_feedback1Header").text()+ "</p><p id='cbody'>"+$(this.xml).find("component#ID_feedback1").text()+"</p></div>";
	$("#commonInterText").append(checkFB);
	var t = this;
	$("#ccloseBtn").click(function(){t.closeBtnClicked("Check")});
	
	this.checkFB = new createjs.Container();
	this.checkFB.x = (STAGE_WIDTH-180)/2;
	this.checkFB.y = (STAGE_HEIGHT-104)/2;
	this.addChild(this.checkFB);
		
	var checkD = new createjs.DOMElement(checkFB);	
	this.checkFB.addChild(checkD);
	this.checkFB.visible = false;
	
	var helpDiv = document.createElement("div");
	helpDiv.id = "helpDiv";
	helpDiv.style.cssText = "left:0;top:0;position:absolute;"
	helpDiv.innerHTML = "<div id='Helpfeedback'><img id='hcloseBtn' src='closeBtn.png' width=19 height=19/><p style='margin-top:-30px;'>"+$(this.xml).find("component#ID_HELP_TITLE").text()+ "</p><p id='ID_HELP_BODY' style='padding:5px 0 0 11px;width:457px;'>"+$(this.xml).find("component#ID_HELP_BODY").text()+"</p></div>";
	$("#commonInterText").append(helpDiv);
	$("#hcloseBtn").click(function(){t.closeBtnClicked("Help")});
	
	this.helpFB = new createjs.DOMElement(helpDiv);
	this.helpFB.x = (STAGE_WIDTH-476)/2;
	this.helpFB.y = (STAGE_HEIGHT-309)/2;
	this.addChild(this.helpFB);
	this.helpFB.visible = false;
	
	this.newProblem()
}
p.closeBtnClicked = function(_id)
{
	if(_id == "Check") 
	{
		this.checkFB.visible = false;
	}
	else
	{
		this.helpFB.visible = false;
	}
	if(this.getStage()) this.getStage().update();
}
p.newProblem = function()
{
	this.initiateAct();
	this.assignSrcDest();
	this.populateMacTable();
	this.findCorrectAnswer();
	this.helpFB.visible = false;
	if(this.getStage()) this.getStage().update();
}
p.initiateAct = function(){		
	//turn off packet visibility
	
	var i;
	
	for(i = 0;i<this.pacArray.length;i++)
	{
		this.pacArray[i].visible = false;
	}
	//turn off MAC addresses in table
	for(i = 0;i<this.macArray.length;i++)
	{
		this.macArray[i].visible = false;
	}
	for(var i = 0; i< this.chkArray.length; i++){
		//Reset the check boxes 
		this.chkArray[i].reset();
	}	
	//Reset answer/response keys
	 this.answerKey = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
	 this.responseKey = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];	
	//Clear the this.macAddsPosted array
	this.macAddsPosted = [];
	
	this.clearFeedback();
}

p.assignSrcDest = function()
{	
	var possibleAdds = ["0A", "0B", "0C", "0D", "0E", "0F"];	
	//Select a random source MAC, populate the Frame table, turn on the corresponding packet icon
	var randomSource = Math.round(Math.random()*6 - 0.5)
	sourceMac = possibleAdds[randomSource];
	$("#sourceMac").html("<b>"+sourceMac+"</b>");
	//sourceMacText.text = sourceMac;
	this.getContainerByName(this.pacArray,"packet"+sourceMac).visible = true;	
	//Remove the selected source MAC address from the array so it won't be duplicated, add "FF" as a possible destination MAC
	possibleAdds.splice(randomSource, 1)
	possibleAdds.push("FF");	
	var randomDest = Math.round(Math.random()*6 - 0.5)
	destMac = possibleAdds[randomDest];
	$("#destMac").html("<b>"+destMac+"</b>");
	//destMacText.text = destMac;
}

p.populateMacTable = function()
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
		this.getContainerByName(this.macArray,showMac).visible = true;	
		//this["MAC_"+showMac].visible = true;		
		//post the value to the array holding the selected MAC addresses
		this.macAddsPosted[i] = showMac;
		macAddsPoss.splice(randomMac, 1);
	}
	
}
p.giveFeedback = function()
{
	this.clearFeedback();
	var allCorrect = true;
		
	for(var i=0 ; i<this.answerKey.length; i++){
				
		if (this.responseKey[i] != this.answerKey[i]){			
			if(i <= 11){
				this.checkFB.visible = true;
				$("#ctitle").html($(this.xml).find("component#ID_feedback1Header").text());
				$("#cbody").html($(this.xml).find("component#ID_feedback1").text());
				if(this.getStage()) this.getStage().update();
				/*feedbackPop.visible = true;
				feedbackPop.titleTextId = "ID_feedback1Header";
				feedbackPop.bodyTextId = "ID_feedback1";*/
				allCorrect = false;
				break;
			}
			else if(i == 12){
				this.checkFB.visible = true;
				$("#ctitle").html($(this.xml).find("component#ID_feedback2Header").text());
				$("#cbody").html($(this.xml).find("component#ID_feedback2").text());
				if(this.getStage()) this.getStage().update();
				/*
				feedbackPop.visible = true;
				feedbackPop.titleTextId = "ID_feedback2Header";
				feedbackPop.bodyTextId = "ID_feedback2";*/
				allCorrect = false;
				break;
			}
			else if(i >= 13){
				this.checkFB.visible = true;
				$("#ctitle").html($(this.xml).find("component#ID_feedback3Header").text());
				$("#cbody").html($(this.xml).find("component#ID_feedback3").text());
				if(this.getStage()) this.getStage().update();
				/*
				feedbackPop.visible = true;
				feedbackPop.titleTextId = "ID_feedback3Header";
				feedbackPop.bodyTextId = "ID_feedback3";*/
				allCorrect = false;
				
				break;
			}
		}
	}
	
	if(allCorrect){		
		this.checkFB.visible = true;
		$("#ctitle").html($(this.xml).find("component#ID_correctHeader").text());
		$("#cbody").html($(this.xml).find("component#ID_correct").text());
		if(this.getStage()) this.getStage().update();
		/*feedbackPop.visible = true;
		feedbackPop.titleTextId = "ID_correctHeader";
		feedbackPop.bodyTextId = "ID_correct";*/
	}
	
	//alert(allCorrect);
	
}

p.clearFeedback = function(){	
	this.checkFB.visible = false;
	if(this.getStage()) this.getStage().update();
}
p.findCorrectAnswer = function()
{	
	//default to true (address is added), if a match is found, turn to false since address is already there
	this.answerKey[12] = true;
	
	for(var i=0; i<this.macAddsPosted.length; i++){
	
		if(sourceMac == this.macAddsPosted[i]){
			this.answerKey[12] = false;
		}
	}	
	//Select ports 1, 3, 5, 7, 9, then deselect the sourceMAC
	if(destMac == "FF"){			
			this.answerKey[13] = true;
			this.floodPorts();
	}		
	//Are both addresses on the same port?
	else if( (sourceMac=="0E" && destMac=="0F") || (sourceMac=="0F" && destMac=="0E")){			
			this.answerKey[16] = true;
	}
	//Frame is unicast, check if destination address is in table, send to specific port
	else if(this.destInMacTable()){			
			this.answerKey[14] = true;			
			//set destination port checkbox to true
				 if(destMac=="0A"){this.answerKey[0] = true;}
			else if(destMac=="0B"){this.answerKey[2] = true;}
			else if(destMac=="0C"){this.answerKey[4] = true;}
			else if(destMac=="0D"){this.answerKey[6] = true;}
			else if(destMac=="0E"){this.answerKey[8] = true;}
			else if(destMac=="0F"){this.answerKey[8] = true;}
	}
	//Frame is unicast, no address, flood to all ports
	else{ 
			this.answerKey[15] = true;
			this.floodPorts();
	}
}
p.floodPorts = function(){	

	for(var j=0; j<this.possPorts.length; j++){				
		this.answerKey[this.possPorts[j]-1] = true;				
	}
			
	if(sourceMac == "0A") this.answerKey[0] = false;
	else if(sourceMac == "0B"){this.answerKey[2] = false;}
	else if(sourceMac == "0C"){this.answerKey[4] = false;}
	else if(sourceMac == "0D"){this.answerKey[6] = false;}
	else if(sourceMac == "0E"){this.answerKey[8] = false;}
	else if(sourceMac == "0F"){this.answerKey[8] = false;}		
}
p.destInMacTable = function(){
	
	 var destInMac = false;
	
	for(var i=0; i<this.macAddsPosted.length; i++){
		if(destMac == this.macAddsPosted[i]){			
			destInMac = true;
		}
	}
	
	if(destInMac){return true;}
	else{return false;}
}