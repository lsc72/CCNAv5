loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(_container,_id)
{
	var dom;
	$("#commonMediaText").append('<input id="numberHostVal" style="width:283.7px;"/>');		
		dom = new createjs.DOMElement(document.getElementById("numberHostVal"));
		dom.x = 480;
		dom.y = 214.5;		
		_container.addChild(dom);
		
	$("#commonMediaText").append('<input id="host1" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("host1"));
		dom.x = 479.55;
		dom.y = 107.15;		
		_container.addChild(dom);
		
	$("#commonMediaText").append('<input id="host2" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("host2"));
		dom.x = 553.4;
		dom.y = 107.15;		
		_container.addChild(dom);
	$("#commonMediaText").append('<input id="host3" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("host3"));
		dom.x = 627.35;
		dom.y = 107.15;		
		_container.addChild(dom);
	$("#commonMediaText").append('<input id="host4" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("host4"));
		dom.x = 700;
		dom.y = 107.15;		
		_container.addChild(dom);
		
	$("#commonMediaText").append('<input id="subnet1" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("subnet1"));
		dom.x = 479.55;
		dom.y = 134.05;		
		_container.addChild(dom);
		
	$("#commonMediaText").append('<input id="subnet2" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("subnet2"));
		dom.x = 553.4;
		dom.y = 134.05;		
		_container.addChild(dom);
	
	$("#commonMediaText").append('<input id="subnet3" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("subnet3"));
		dom.x = 627.35;
		dom.y = 134.05;		
		_container.addChild(dom);
	
	$("#commonMediaText").append('<input id="subnet4" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("subnet4"));
		dom.x = 700;
		dom.y = 134.05;		
		_container.addChild(dom);
		
	$("#commonMediaText").append('<input id="hostbin1" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("hostbin1"));
		dom.x = 479.55;
		dom.y = 160.95;		
		_container.addChild(dom);
		
	$("#commonMediaText").append('<input id="hostbin2" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("hostbin2"));
		dom.x = 553.4;
		dom.y = 160.95;		
		_container.addChild(dom);
	$("#commonMediaText").append('<input id="hostbin3" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("hostbin3"));
		dom.x = 627.35;
		dom.y = 160.95;		
		_container.addChild(dom);
	$("#commonMediaText").append('<input id="hostbin4" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("hostbin4"));
		dom.x = 700;
		dom.y = 160.95;		
		_container.addChild(dom);
		
	$("#commonMediaText").append('<input id="subnetbin1" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("subnetbin1"));
		dom.x = 479.55;
		dom.y = 188.85;		
		_container.addChild(dom);
		
	$("#commonMediaText").append('<input id="subnetbin2" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("subnetbin2"));
		dom.x = 553.4;
		dom.y = 188.85;		
		_container.addChild(dom);
	$("#commonMediaText").append('<input id="subnetbin3" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("subnetbin3"));
		dom.x = 627.35;
		dom.y = 188.85;		
		_container.addChild(dom);
	$("#commonMediaText").append('<input id="subnetbin4" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("subnetbin4"));
		dom.x = 700;
		dom.y = 188.85;		
		_container.addChild(dom);
		
		
	function newBtnClickHandler()
	{
	$("#numberHostVal").attr("value","");
	$("input#numberHostVal").attr("maxlength","8");
	feeback.visible=0;
	//update = true;	
	hostAddress = [];
	subnetMask = [];

	hostAddress[0] = 192;
	hostAddress[1] = 168;
	hostAddress[2] = Math.round(Math.random()*255);
	hostAddress[3] = Math.round(Math.random()*255);	
	
	var validMasks = new Array(0,128,192,224,240,248,252);
	subnetMask[0] = 255;
	subnetMask[1] = 255;
	subnetMask[2] = 255;
	var rand = Math.round(Math.random()*6);
	subnetMask[3] = validMasks[rand];
	
	
	
	$("#host1").attr("value",hostAddress[0]);
	$("#host2").attr("value",hostAddress[1]);
	$("#host3").attr("value",hostAddress[2]);
	$("#host4").attr("value",hostAddress[3]);
	
	$("#subnet1").attr("value",subnetMask[0]);
	$("#subnet2").attr("value",subnetMask[1]);
	$("#subnet3").attr("value",subnetMask[2]);
	$("#subnet4").attr("value",subnetMask[3]);	
	
	netAddress = [];
	// Calculate the network address
	for (var i = 0; i<4; i++) {
		netAddress[i] = ((hostAddress[i] & 0xFF) & (subnetMask[i] & 0xFF)) & 0xFF;
	}
	
		
	for(i=1;i<=4;i++)
	{
	$("#hostbin"+i).attr("value",dec2bin($("#host"+i).val()));
	}
	for(i=1;i<=4;i++)
	{
	$("#subnetbin"+i).attr("value",dec2bin($("#subnet"+i).val()));
	}	
	}
	var getNewNumber = function()	{
		newBtnClickHandler();		
	}
	
	feeback = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:305.6,y:298.4,width:452.65,height:75.9,titleId:"txt_incorrect",bodyId:"txt_body_incorrect",visible:"0"});			  
		_container.addChild(feeback);
	
	
	
	var check_txt = function()	{
	var netAddress = new Array(4);
	// Calculate the network address
	var i;
	for (i = 0; i<4; i++)
	{	
		netAddress[i] = ((hostAddress[i] & 0xFF) & (subnetMask[i] & 0xFF)) & 0xFF;
	}
	
	// Calculate the number of hosts
	var bits = 0;
	for (i = 0; i<4; i++)
	{
		var mask = 0x80;
		for (var j = 0; j<8; j++)
		{
			if (subnetMask[i] & mask)
			{
				bits++;
			}
			else
			{
				break;
			}
			mask = mask >> 1;
			
		}
		if (!(subnetMask[i] & mask) && mask != 0)
		{
			break;
		}
	}
	var n= 32 - bits;
	var numHosts = Math.pow(2,n) - 2;
	var hostcount = document.getElementById("numberHostVal");
	
	if((hostcount.value)==numHosts){
		feeback.setTitleId("txt_correct");
		feeback.setBodyId("txt_body_correct");	
		}
	else{
		feeback.setTitleId("txt_incorrect");
		feeback.setBodyId("txt_body_incorrect");	
		$("input#numberHostVal").css("color","#DD0000");
		}	
		feeback.visible=1;
		update = true;	
	}
	
	var reset_txt = function()	{	
	$("#numberHostVal").attr("value","");
	feeback.visible=0;
		
	}
	
	 
	$("#numberHostVal").keypress(function (evt) {
		evt = (evt) ? evt : window.event;
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
		}
		return true;
	});


	$("#numberHostVal").focus(function () {
		$("#numberHostVal").css("color","#000");
		feeback.visible=0;
	});

	
function dec2bin(val)
{
	var result= "";
	while (val>0) 
	{
		if (val & 0x01) 
			{
			result = "1"+result;
			} 
			else
			{
			result = "0"+result;
			}
		val = (val >> 1);
	}
	while (result.length%8 || result.length == 0) 
	{
		result = "0"+result;
	}
	return result;
}

function bin2dec(val) {
	var result = 0;

	while (val.length != 0) {
		if (val.substr(0, 1) == "1") {
			result = result | 0x1;
		}
		result = result << 1;
		val = val.substr(1);
	}

	result = result >> 1;
	return result;
}

	
	newBtnClickHandler();
	
	btn = getCJSElement("BLUE_BUTTON",{x:303.65,y:272.3,width:105,height:21,size:12,id:"check",compId:"txt_check",callback:check_txt});
	_container.addChild(btn);
	btn = getCJSElement("BLUE_BUTTON",{x:450.4,y:272.3,width:120,height:21,size:12,id:"reset",compId:"txt_reset",callback:reset_txt});
	_container.addChild(btn);
	btn = getCJSElement("BLUE_BUTTON",{x:611.65,y:272.3,width:150,height:21,size:12,id:"new_nub",compId:"txt_newnumber",callback:getNewNumber});
	_container.addChild(btn);	
});