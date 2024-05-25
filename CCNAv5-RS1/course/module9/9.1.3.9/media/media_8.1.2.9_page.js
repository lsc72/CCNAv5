function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{


var textBox	= getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:"359.15",y:"268.1",width:"368",height:"75.35",titleId:"txt_incorrect",bodyId:"txt_body_incorrect",animated:"0",visible:"0"});
		_container.addChild(textBox);

btn = getCJSElement("BLUE_BUTTON",{x:358.8,y:225.55,width:108,height:21,size:12,id:"check",compId:"txt_check",callback:btnCheckClicked});
		_container.addChild(btn);
		
		btn = getCJSElement("BLUE_BUTTON",{x:489.6,y:225.55,width:108,height:21,size:12,id:"reset",compId:"txt_reset",callback:btnResetClicked});
		_container.addChild(btn);
		
		btn = getCJSElement("BLUE_BUTTON",{x:620.45,y:225.55,width:108,height:21,size:12,id:"newnumber",compId:"txt_newnumber",
		callback:btnNewNumberClicked});
		_container.addChild(btn);

for(var i=0; i<4 ;i++){
		var bitIn = document.createElement('input');
		bitIn.id = "subnetbin"+i;
		bitIn.style.cssText = "position:absolute;width:87px;background-color:#66C0E5;color:#000000; border:1px solid #66C0E5";
		bitIn.className = "subnetbin";
		bitIn.setAttribute('maxlength','8'); 
		$("#commonMediaText").append(bitIn);

		var _domBitIn = new createjs.DOMElement(bitIn);
		_domBitIn.x = 368 +(93.5*(i));
		_domBitIn.y = 151.05;   
		_container.addChild(_domBitIn); 
   }
   
		var bitIn = document.createElement('input');
		bitIn.id = "prefixNotation";
		bitIn.style.cssText = "position:absolute;width:87px;background-color:#66C0E5;color:#000000; border:1px solid #66C0E5";
		bitIn.className = "prefixNotation";
		bitIn.setAttribute('maxlength','4'); 
		$("#commonMediaText").append(bitIn);

		var _domBitIn = new createjs.DOMElement(bitIn);
		_domBitIn.x = 507.7;
		_domBitIn.y = 177.7;   
		_container.addChild(_domBitIn);
		
		
var hostAddress,subnetMask,netAddress,netAddressbin = [];
var incTF,corTF;
var fibhostacitivity;


$("a#incorrect").click(function (event) {
	$("#pannel").hide();event.preventDefault();$(this).hide();
});
$("a#correct").click(function (event) {
	$("#pannel_2").hide();event.preventDefault();$(this).hide();
});

newBtnClickHandler();	

$('#subnetbin0,#subnetbin1,#subnetbin2,#subnetbin3').focus(function(){ $("#pannel").css("display","none");for(var i = 0;i<4;i++){$("input#subnetbin"+(i)).css("color","black");}
						});
$('#prefixNotation').focus(function(){ $("#pannel").css("display","none");$("input#prefixNotation").css("color","black");});
$('#subnetbin0,#subnetbin1,#subnetbin2,#subnetbin3').keypress(function(key)
 {
	 $("#pannel").css("display","none");
	 
	var k = key.charCode;
	if(k == 48 || k == 49 ||k == 0)
	{
	return true;
	}
	else
	{			
	return false;
	}
});

$('#prefixNotation').keypress(function(key)
 {
	 $("#pannel").css("display","none");
	 var k = key.charCode;
	 if(k == 48 || k == 49 ||k == 50 ||k == 51 || k == 52 || k == 53 || k == 54 || k == 55 || k == 56 || k == 57 || k == 0 || k == 47)
	{
	return true;
	}
	else
	{			
	return false;
	}
});


function btnNewNumberClicked(){
	newBtnClickHandler();
} 

function newBtnClickHandler()
{
	$("#pannel").css("display","none");
	$("input#subnetbin0").attr("value","");
	$("input#subnetbin1").attr("value","");
	$("input#subnetbin2").attr("value","");
	$("input#subnetbin3").attr("value","");	
	
	hostAddress = [];
	subnetMask = [];

	subnetMask = new Array(4);
	numHosts = 0;
	// First two octets are always 255
	var validMasks = new Array(255, 254, 252, 248, 240, 224, 192, 128, 0);
	subnetMask[0] = 255;
	subnetMask[1] = 255;

	var rand = Math.round(Math.random()*(validMasks.length+6));// Make it 8/16 chance for 255
	if (rand<=7) {
		rand = 0;
	} else {
		rand = rand-7;
	}// Adjust for everything else
	subnetMask[2] = validMasks[rand];

	// Ignore 255 for the last octet
	subnetMask[3] = (subnetMask[2] == 255 ? (validMasks[Math.round(Math.random()*(validMasks.length-2))+1]) : 0);
	// Calculate the number of hosts
	var bits = 0;
	for (var i = 0; i<4; i++) {
		var mask = 0x80;
		for (var j = 0; j<8; j++) {
			if (subnetMask[i] & mask) {
				bits++;
			} else {
				break;
			}
			mask = mask >> 1;
		}
		if (!(subnetMask[i] & mask) && mask != 0) {
			break;
		}
	}
	var n = 32-bits;
	var numHosts = Math.pow(2, n)-2;	
		
	$("#subnet1").html(subnetMask[0]);
	$("#subnet2").html(subnetMask[1]);
	$("#subnet3").html(subnetMask[2]);
	$("#subnet4").html(subnetMask[3]);	
	
	netAddress = [];
	// Calculate the network address
	for (var i = 0; i<4; i++) {
		netAddress[i] = ((hostAddress[i] & 0xFF) & (subnetMask[i] & 0xFF)) & 0xFF;
	}
	
	for(i=1;i<=4;i++)
	{
	$("#hostbin"+i).html(dec2bin($("#host"+i).text()));
	}
	for(i=0;i<=4;i++)
	{
	$("#subnetbin"+i).html(dec2bin($("#subnet"+i).text()));
	}
	
	$("input#prefixNotation").attr("value","");
	
}




						
function btnResetClicked(){	

	textBox.visible = false; 
	update = true;
	
	for(var i = 0;i<4;i++){$("input#subnetbin"+(i)).css("color","black");}
		$("input#prefixNotation").css("color","black");
		$("input[id^=subnetbin]").attr("value","");
		$("input#prefixNotation").attr("value",""); 
}



//$("#check").click(function(){
function btnCheckClicked(){ 

	textBox.visible = true; 
	update = true;  
			
	val1 = $("input#subnetbin0").attr("value");
	val2 = $("input#subnetbin1").attr("value");
	val3 = $("input#subnetbin2").attr("value");
	val4 = $("input#subnetbin3").attr("value");
	for(var i = 0;i<4;i++){$("input#subnetbin"+(i)).css("color","black");}
	$("input#prefixNotation").css("color","black");
	var prefixTrue= false;
	if (document.getElementById("prefixNotation").value == ("/"+findPrefix())) {
				
		$("input#prefixNotation").css("color","black");
		prefixTrue = true;
	} else {
		
		$("input#prefixNotation").css("color","#DD0000")
		prefixTrue = false;
	}
	var cnt= 0;
	for(var i = 0;i<4;i++)
	{	
		

		if(document.getElementById("subnetbin"+i).value == dec2bin(subnetMask[i]))
		{
			$("input#subnetbin"+(i)).css("color","black");
			cnt++;
		}
		else
		{
			$("input#subnetbin"+(i)).css("color","#DD0000");
			
		}
	}

	if(cnt == 4 && prefixTrue){ 
			textBox.setTitleId("txt_correct");
			textBox.setBodyId("txt_body_correct");
			textBox.visible = true; 
			update = true; 
			
		}else{  
			textBox.setTitleId("txt_incorrect");
			textBox.setBodyId("txt_body_incorrect");
			textBox.visible = true; 
			update = true;  
		} 
}

function findPrefix()
{
	var cnt = 0;
	
	for (var i = 0; i<4; i++) {
		var _bin= String(dec2bin(subnetMask[i])).split("");		
		for (var j = 0; j<8; j++) {
			if(_bin[j] == 1)
			{
				cnt++;
			}
		}		
	}
	return cnt;
}

function dec2bin(val) {
	var result= "";

	while (val>0) {
		if (val & 0x01) {
			result = "1"+result;
		} else {
			result = "0"+result;
		}
		val = (val >> 1);
	}
	while (result.length%8 || result.length == 0) {
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
});