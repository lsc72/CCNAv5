loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
(slideViewDidLoad = function(_container,_id)
{
	var btn;
	var feedback;
		
	var host1 = document.createElement('input');
	host1.id = "host1";
	host1.setAttribute("disabled", true);
	$("#commonMediaText").append(host1);
	var _domhost1 = new createjs.DOMElement(host1);
	_domhost1.x = 479.55;
	_domhost1.y = 91.9;
	_container.addChild(_domhost1);
	
	var host2 = document.createElement('input');
	host2.id = "host2";
	host2.setAttribute("disabled", true);
	$("#commonMediaText").append(host2);
	var _domhost2 = new createjs.DOMElement(host2);
	_domhost2.x = 553.4;
	_domhost2.y = 91.9;
	_container.addChild(_domhost2);
	
	var host3 = document.createElement('input');
	host3.id = "host3";
	host3.setAttribute("disabled", true);
	$("#commonMediaText").append(host3);
	var _domhost3 = new createjs.DOMElement(host3);
	_domhost3.x = 627.35;
	_domhost3.y = 91.9;
	_container.addChild(_domhost3);
	
	var host4 = document.createElement('input');
	host4.id = "host4";
	host4.setAttribute("disabled", true);
	$("#commonMediaText").append(host4);
	var _domhost4 = new createjs.DOMElement(host4);
	_domhost4.x = 700;
	_domhost4.y = 91.9;
	_container.addChild(_domhost4);
	
	var subnet1 = document.createElement('input');
	subnet1.id = "subnet1";
	subnet1.setAttribute("disabled", true);
	$("#commonMediaText").append(subnet1);
	var _domsubnet1 = new createjs.DOMElement(subnet1);
	_domsubnet1.x = 479.55;
	_domsubnet1.y = 118.8;
	_container.addChild(_domsubnet1);
	
	var subnet2 = document.createElement('input');
	subnet2.id = "subnet2";
	subnet2.setAttribute("disabled", true);
	$("#commonMediaText").append(subnet2);
	var _domsubnet2 = new createjs.DOMElement(subnet2);
	_domsubnet2.x = 553.4;
	_domsubnet2.y = 118.8;
	_container.addChild(_domsubnet2);
	
	var subnet3 = document.createElement('input');
	subnet3.id = "subnet3";
	subnet3.setAttribute("disabled", true);
	$("#commonMediaText").append(subnet3);
	var _domsubnet3 = new createjs.DOMElement(subnet3);
	_domsubnet3.x = 627.35;
	_domsubnet3.y = 118.8;
	_container.addChild(_domsubnet3);
	
	var subnet4 = document.createElement('input');
	subnet4.id = "subnet4";
	subnet4.setAttribute("disabled", true);
	$("#commonMediaText").append(subnet4);
	var _domsubnet4 = new createjs.DOMElement(subnet4);
	_domsubnet4.x = 700;
	_domsubnet4.y = 118.8;
	_container.addChild(_domsubnet4);
	
	
	var hostbin1 = document.createElement('input');
	hostbin1.id = "hostbin1";
	hostbin1.setAttribute("disabled", true);
	$("#commonMediaText").append(hostbin1);
	var _domhostbin1 = new createjs.DOMElement(hostbin1);
	_domhostbin1.x = 479.55;
	_domhostbin1.y = 146.7;
	_container.addChild(_domhostbin1);
	
	
	var hostbin2 = document.createElement('input');
	hostbin2.id = "hostbin2";
	hostbin2.setAttribute("disabled", true);
	$("#commonMediaText").append(hostbin2);
	var _domhostbin2 = new createjs.DOMElement(hostbin2);
	_domhostbin2.x = 553.4;
	_domhostbin2.y = 146.7;
	_container.addChild(_domhostbin2);
	
	var hostbin3 = document.createElement('input');
	hostbin3.id = "hostbin3";
	hostbin3.setAttribute("disabled", true);
	$("#commonMediaText").append(hostbin3);
	var _domhostbin3 = new createjs.DOMElement(hostbin3);
	_domhostbin3.x = 627.35;
	_domhostbin3.y = 146.7;
	_container.addChild(_domhostbin3);
	
	var hostbin4 = document.createElement('input');
	hostbin4.id = "hostbin4";
	hostbin4.setAttribute("disabled", true);
	$("#commonMediaText").append(hostbin4);
	var _domhostbin4 = new createjs.DOMElement(hostbin4);
	_domhostbin4.x = 700;
	_domhostbin4.y = 146.7;
	_container.addChild(_domhostbin4);
	
	
	
	var subnetbin1 = document.createElement('input');
	subnetbin1.id = "subnetbin1";
	subnetbin1.setAttribute("disabled", true);
	$("#commonMediaText").append(subnetbin1);
	var _domsubnetbin1 = new createjs.DOMElement(subnetbin1);
	_domsubnetbin1.x = 479.55;
	_domsubnetbin1.y = 172.6;
	_container.addChild(_domsubnetbin1);
	
	
	var subnetbin2 = document.createElement('input');
	subnetbin2.id = "subnetbin2";
	subnetbin2.setAttribute("disabled", true);
	$("#commonMediaText").append(subnetbin2);
	var _domsubnetbin2 = new createjs.DOMElement(subnetbin2);
	_domsubnetbin2.x = 553.4;
	_domsubnetbin2.y = 172.6;
	_container.addChild(_domsubnetbin2);
	
	var subnetbin3 = document.createElement('input');
	subnetbin3.id = "subnetbin3";
	subnetbin3.setAttribute("disabled", true);
	$("#commonMediaText").append(subnetbin3);
	var _domsubnetbin3 = new createjs.DOMElement(subnetbin3);
	_domsubnetbin3.x = 627.35;
	_domsubnetbin3.y = 172.6;
	_container.addChild(_domsubnetbin3);
	
	var subnetbin4 = document.createElement('input');
	subnetbin4.id = "subnetbin4";
	subnetbin4.setAttribute("disabled", true);
	$("#commonMediaText").append(subnetbin4);
	var _domsubnetbin4 = new createjs.DOMElement(subnetbin4);
	_domsubnetbin4.x = 700;
	_domsubnetbin4.y = 172.6;
	_container.addChild(_domsubnetbin4);
	
	var netaddbin1 = document.createElement('input');
	netaddbin1.id = "netaddbin1";
	//netaddbin1.setAttribute("disabled", true);
	$("#commonMediaText").append(netaddbin1);
	var _domnetaddbin1 = new createjs.DOMElement(netaddbin1);
	_domnetaddbin1.x = 479.55;
	_domnetaddbin1.y = 199.7;
	_container.addChild(_domnetaddbin1);
	
	var netaddbin2 = document.createElement('input');
	netaddbin2.id = "netaddbin2";
	//netaddbin2.setAttribute("disabled", true);
	$("#commonMediaText").append(netaddbin2);
	var _domnetaddbin2 = new createjs.DOMElement(netaddbin2);
	_domnetaddbin2.x = 553.4;
	_domnetaddbin2.y = 199.7;
	_container.addChild(_domnetaddbin2);
	
	var netaddbin3 = document.createElement('input');
	netaddbin3.id = "netaddbin3";
	//netaddbin3.setAttribute("disabled", true);
	$("#commonMediaText").append(netaddbin3);
	var _domnetaddbin3 = new createjs.DOMElement(netaddbin3);
	_domnetaddbin3.x = 627.35;
	_domnetaddbin3.y = 199.7;
	_container.addChild(_domnetaddbin3);
	
	var netaddbin4 = document.createElement('input');
	netaddbin4.id = "netaddbin4";
	//netaddbin4.setAttribute("disabled", true);
	$("#commonMediaText").append(netaddbin4);
	var _domnetaddbin4 = new createjs.DOMElement(netaddbin4);
	_domnetaddbin4.x = 700;
	_domnetaddbin4.y = 199.7;
	_container.addChild(_domnetaddbin4);
	
	
	var netadddeci1 = document.createElement('input');
	netadddeci1.id = "netadddeci1";
	//netadddeci1.setAttribute("disabled", true);
	$("#commonMediaText").append(netadddeci1);
	var _domnetadddeci1 = new createjs.DOMElement(netadddeci1);
	_domnetadddeci1.x = 479.55;
	_domnetadddeci1.y = 224.7;
	_container.addChild(_domnetadddeci1);
	
	var netadddeci2 = document.createElement('input');
	netadddeci2.id = "netadddeci2";
	//netadddeci2.setAttribute("disabled", true);
	$("#commonMediaText").append(netadddeci2);
	var _domnetadddeci2 = new createjs.DOMElement(netadddeci2);
	_domnetadddeci2.x = 553.4;
	_domnetadddeci2.y = 224.7;
	_container.addChild(_domnetadddeci2);
	
	var netadddeci3 = document.createElement('input');
	netadddeci3.id = "netadddeci3";
	//netadddeci3.setAttribute("disabled", true);
	$("#commonMediaText").append(netadddeci3);
	var _domnetadddeci3 = new createjs.DOMElement(netadddeci3);
	_domnetadddeci3.x = 627.35;
	_domnetadddeci3.y = 224.7;
	_container.addChild(_domnetadddeci3);
	
	var netadddeci4 = document.createElement('input');
	netadddeci4.id = "netadddeci4";
	//netadddeci4.setAttribute("disabled", true);
	$("#commonMediaText").append(netadddeci4);
	var _domnetadddeci4 = new createjs.DOMElement(netadddeci4);
	_domnetadddeci4.x = 700;
	_domnetadddeci4.y = 224.7;
	_container.addChild(_domnetadddeci4);

	function newBtnClickHandler()
	{
		
		$("input#netaddbin1").attr("value","");
		$("input#netaddbin2").attr("value","");
		$("input#netaddbin3").attr("value","");
		$("input#netaddbin4").attr("value","");	
		$("input#netadddeci1").attr("value","");
		$("input#netadddeci2").attr("value","");
		$("input#netadddeci3").attr("value","");
		$("input#netadddeci4").attr("value","");
		
		$("input#netaddbin1").attr("maxlength","8");	
		$("input#netaddbin2").attr("maxlength","8");	
		$("input#netaddbin3").attr("maxlength","8");	
		$("input#netaddbin4").attr("maxlength","8");	
		$("input#netadddeci1").attr("maxlength","8");	
		$("input#netadddeci2").attr("maxlength","8");	
		$("input#netadddeci3").attr("maxlength","8");	
		$("input#netadddeci4").attr("maxlength","8");	
		
	
		hostAddress = [];
		subnetMask = [];
	
		hostAddress[0] = 192;
		hostAddress[1] = 168;
		hostAddress[2] = Math.round(Math.random()*255);
		hostAddress[3] = Math.round(Math.random()*255);	
		
		var validMasks = new Array(0, 128, 192, 224, 240, 248, 252);
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

		feedback.visible = false;
		update = true;
		
	}
	
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
		
	var getNewNumber = function()	{
		newBtnClickHandler();		
	}
			
	var check_txt = function()	{			
			var binCorrect=true;
	var decCorrect=true;

	val1 = $("input#netaddbin1").attr("value");
	val2 = $("input#netaddbin2").attr("value");
	val3 = $("input#netaddbin3").attr("value");
	val4 = $("input#netaddbin4").attr("value");
	
	val5 = $("input#netadddeci1").attr("value");
	val6 = $("input#netadddeci2").attr("value");
	val7 = $("input#netadddeci3").attr("value");
	val8 = $("input#netadddeci4").attr("value");
	
	
	
		
			for (var i = 0; i<4; i++)
				 {
					 
					 					
						if (bin2dec($("input#netaddbin"+(i+1)).attr("value")) != netAddress[i]) 
						{							
							binCorrect = false;	
							$("input#netaddbin"+(i+1)).css("color","red");
						} 
						else
						{
							$("input#netaddbin"+(i+1)).css("color","black");
						}
						if (parseInt($("input#netadddeci"+(i+1)).attr("value")) != netAddress[i])
						{							
							decCorrect = false;
							$("input#netadddeci"+(i+1)).css("color","red")
						}
						else
						{
							$("input#netadddeci"+(i+1)).css("color","black");
						}
				}
					
					
					if (binCorrect && decCorrect)
					 {
					 	feedback.setTitleId("ID_CORRECT_TITLE");
					 	feedback.setBodyId("ID_CORRECT_BODY");
					 	feedback.visible = true;
					 	update = true;
					}
					 else if (!binCorrect && !decCorrect) 
					{
						feedback.setTitleId("ID_INCORRECT_TITLE");
					 	feedback.setBodyId("ID_INCORRECT_BODY");
					 	feedback.visible = true;
					 	update = true;						
					}
					 else if (!binCorrect)
					{		
						feedback.setTitleId("ID_INCORRECT_TITLE");
					 	feedback.setBodyId("ID_INCORRECT_BODY");
					 	feedback.visible = true;
					 	update = true;						
					} 
					
					else if (!decCorrect)
					{	
						feedback.setTitleId("ID_INCORRECT_TITLE");
					 	feedback.setBodyId("ID_INCORRECT_BODY");
					 	feedback.visible = true;
					 	update = true;						
					}
					
	
						
	}
	
	var reset_txt = function()	{			
		$("input#netaddbin1").attr("value","");
		$("input#netaddbin2").attr("value","");
		$("input#netaddbin3").attr("value","");
		$("input#netaddbin4").attr("value","");	
		$("input#netadddeci1").attr("value","");
		$("input#netadddeci2").attr("value","");
		$("input#netadddeci3").attr("value","");
		$("input#netadddeci4").attr("value","");
		feedback.visible = false;
		update = true;
	}
	
$('#netaddbin1,#netaddbin2,#netaddbin3,#netaddbin4,#netadddeci1,#netadddeci2,#netadddeci3,#netadddeci4').focus(function()
	{
		feedback.visible = false;
		update = true;
		$('#netaddbin1,#netaddbin2,#netaddbin3,#netaddbin4,#netadddeci1,#netadddeci2,#netadddeci3,#netadddeci4').css("color","black");
	}
);	
$('#netaddbin1,#netaddbin2,#netaddbin3,#netaddbin4').keypress(function(key)
 {
	$('#netaddbin1,#netaddbin2,#netaddbin3,#netaddbin4').css("color","black");
	var k = key.charCode;
	if(k == 48 || k == 49 || k == 0)  
	{
	return true;
	}
	else
	{			
	return false;
	}
	feedback.visible = false;
	update = true;
});


$('#netadddeci1,#netadddeci2,#netadddeci3,#netadddeci4').keypress(function(key)
 {	 
	var k = key.charCode;
	if(k == 48 || k == 49 ||k == 50 ||k == 51 || k == 52 || k == 53 || k == 54 || k == 55 || k == 56 || k == 57 || k == 0)  
	{
	return true;
	}
	else
	{			
	return false;
	}
	feedback.visible = false;
	update = true;
});


	
	btn = getCJSElement("BLUE_BUTTON",{x:303.65,y:272.3,width:105,height:21,size:12,id:"check",compId:"txt_check",callback:check_txt});
	_container.addChild(btn);
	btn = getCJSElement("BLUE_BUTTON",{x:450.4,y:272.3,width:120,height:21,size:12,id:"reset",compId:"txt_reset",callback:reset_txt});
	_container.addChild(btn);
	btn = getCJSElement("BLUE_BUTTON",{x:611.65,y:272.3,width:150,height:21,size:12,id:"new_nub",compId:"txt_newnumber",callback:getNewNumber});
	_container.addChild(btn);

	feedback = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:305.6,y:309.9,width:452.65,height:75.9,titleId:"ID_INCORRECT_TITLE",bodyId:"ID_INCORRECT_BODY"});
	_container.addChild(feedback);
	feedback.visible = false;
	update = true;	

	newBtnClickHandler();

});