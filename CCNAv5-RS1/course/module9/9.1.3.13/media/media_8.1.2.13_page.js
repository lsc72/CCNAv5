
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id){
 
 
	var btn = getCJSElement("BLUE_BUTTON",{x:303.45,y:231.3,width:105,height:21,size:12,id:"check",compId:"txt_check",
	callback:btnCheckClicked});
	_container.addChild(btn);
	

	btn = getCJSElement("BLUE_BUTTON",{x:450.25,y:231.3,width:120,height:21,size:12,id:"reset",compId:"txt_reset",callback:
	btnResetClicked});
	_container.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:611.65,y:231.3,width:150,height:21,size:12,id:"newnumber",compId:"txt_newnumber",
	callback:btnNewNumberClicked});
	_container.addChild(btn); 
  

	var textBox	= getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:"305.6",y:"265.9",width:"452.65",height:"75.9",titleId:
	"txt_incorrect",bodyId:"txt_body_incorrect",animated:"0",visible:"0"});
	_container.addChild(textBox);  

	for (var i=1;i<=4;i++){
			var bitIn = document.createElement('input');
			bitIn.id="netaddbin"+i;
			bitIn.style.cssText = "position:absolute;width:69.3px;background-color:#66C0E5;color:#000000;";
			bitIn.className = "numberHostVal";
			bitIn.setAttribute('maxlength','8'); 
			$("#commonMediaText").append(bitIn);
			 
			var _domBitIn = new createjs.DOMElement(bitIn);
			_domBitIn.x = (479.6+(73*(i-1)));
			_domBitIn.y = 158.7;  
			_container.addChild(_domBitIn);
	}
	
	for (var i=1;i<=4;i++){
			var bitIn = document.createElement('input');
			bitIn.id="netadddeci"+i;
			bitIn.style.cssText = "position:absolute;width:69.3px;background-color:#66C0E5;color:#000000;";
			bitIn.className = "numberHostVal";
			bitIn.setAttribute('maxlength','8'); 
			$("#commonMediaText").append(bitIn);
			 
			var _domBitIn = new createjs.DOMElement(bitIn);
			_domBitIn.x = (479.6+(73*(i-1)));
			_domBitIn.y = 185.7; 
			_container.addChild(_domBitIn);
	}
 
	var hostAddress,subnetMask,netAddress,netAddressbin = [];
	var Data;  
	 
	
	newBtnClickHandler();
	
	$('#netaddbin1,#netaddbin2,#netaddbin3,#netaddbin4,#netadddeci1,#netadddeci2,#netadddeci3,#netadddeci4').focus(function(){			
	
			textBox.visible = false;
			update = true; 
			$('#netaddbin1,#netaddbin2,#netaddbin3,#netaddbin4,#netadddeci1,#netadddeci2,#netadddeci3,#netadddeci4').css(
			"color",	
			"black");
	});		
	
	$('#netaddbin1,#netaddbin2,#netaddbin3,#netaddbin4').keypress(function(key){
		 
		textBox.visible = false;
		update = true; 
		$('#netaddbin1,#netaddbin2,#netaddbin3,#netaddbin4').css("color","black");
		var k = key.charCode;
		if(k == 48 || k == 49 || k == 0){
			return true;
		}else{			
			return false;
		}
	});

	$('#netadddeci1,#netadddeci2,#netadddeci3,#netadddeci4').keypress(function(key){ 
		textBox.visible = false;
		update = true; 
		var k = key.charCode;
		if(k == 48 || k == 49 ||k == 50 ||k == 51 || k == 52 || k == 53 || k == 54 || k == 55 || k == 56 || k == 57 || k == 0){
			return true;
		}else{			
			return false;
		}
	});

	function btnNewNumberClicked(){
		newBtnClickHandler();
	}
	
	function newBtnClickHandler(){	 
		
		textBox.visible = false;
		update = true; 
		
		$("input[id^=netaddbin]").attr("value","");
		$("input[id^=netadddeci]").attr("value","");  
		
		hostAddress = [];
		subnetMask = [];
	
		hostAddress[0] = Math.round(Math.random()*1) ? 10:172;
		hostAddress[1] = Math.round(Math.random()*255);
		if(hostAddress[0] == 172){
			hostAddress[1] = Math.round(Math.random()*(31-16)+16);
		}
		hostAddress[2] = Math.round(Math.random()*255);
		hostAddress[3] = Math.round(Math.random()*253)+1;
		
		var validMasks = new Array(255, 254, 252, 248, 240, 224, 192, 128, 0);
		subnetMask[0] = 255;
		subnetMask[1] = 255;
		var rand = Math.round(Math.random()*(validMasks.length+6));// Make it 8/16 chance for 255
		if (rand<=7) {
			rand = 0;
		} else {
			rand = rand-7;
		}
		// Adjust for everything else
		subnetMask[2] = validMasks[rand];
		
		// Ignore 255 for the last octet
		subnetMask[3] = (subnetMask[2] == 255 ? (validMasks[Math.round(Math.random()*(validMasks.length-2))+1]) : 0);
		
		$("#host1").html(hostAddress[0]);
		$("#host2").html(hostAddress[1]);
		$("#host3").html(hostAddress[2]);
		$("#host4").html(hostAddress[3]);
		
		$("#subnet1").html(subnetMask[0]);
		$("#subnet2").html(subnetMask[1]);
		$("#subnet3").html(subnetMask[2]);
		$("#subnet4").html(subnetMask[3]);	
		
		netAddress = [];
		// Calculate the network address
		for (var i = 0; i<4; i++) {
			netAddress[i] = ((hostAddress[i] & 0xFF) & (subnetMask[i] & 0xFF)) & 0xFF;
		}
		
			
		for(i=1;i<=4;i++){
			$("#hostbin"+i).html(dec2bin($("#host"+i).text()));
		}
		
		for(i=1;i<=4;i++){
			$("#subnetbin"+i).html(dec2bin($("#subnet"+i).text()));
		}
		
	}

	function btnResetClicked(){	
		
		textBox.visible = false;
		update = true; 
		$("input[id^=netaddbin]").attr("value","");
		$("input[id^=netadddeci]").attr("value","");  
	}
	

	function btnCheckClicked(){
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
		
		
		
			
		for (var i = 0; i<4; i++){
			if (bin2dec($("input#netaddbin"+(i+1)).attr("value")) != netAddress[i]){
				binCorrect = false;					
				$("input#netaddbin"+(i+1)).css("color","red");
			}else{
				$("input#netaddbin"+(i+1)).css("color","black");
			}
								
			if (parseInt($("input#netadddeci"+(i+1)).attr("value")) != netAddress[i]){
				decCorrect = false;
				$("input#netadddeci"+(i+1)).css("color","red")
			}else{
				$("input#netadddeci"+(i+1)).css("color","black");
			}
		}
					
		if (binCorrect && decCorrect){
			 
			textBox.setTitleId("txt_correct");
			textBox.setBodyId("txt_correct_body");
			textBox.visible = true; 
			update = true; 
			
		}else if (!binCorrect && !decCorrect){
			
			textBox.setTitleId("txt_incorrect");
			textBox.setBodyId("txt_incorrect_all");
			textBox.visible = true; 
			update = true; 
			$("input#numberHostVal").css("color","#DD0000"); 
			
		}else if (!binCorrect){		
			textBox.setTitleId("txt_incorrect");
			textBox.setBodyId("txt_incorrect_binary");
			textBox.visible = true; 
			update = true;
			$("input#numberHostVal").css("color","#DD0000"); 
			
		}else if (!decCorrect){
			
			textBox.setTitleId("txt_incorrect");
			textBox.setBodyId("txt_incorrect_decimal");
			textBox.visible = true; 
			update = true;
			$("input#numberHostVal").css("color","#DD0000");  
		}  
	}



	function dec2bin(val)
	{
		var result= "";
		while (val>0){
			if (val & 0x01){
				result = "1"+result;
			}else{
				result = "0"+result;
			}
			val = (val >> 1);
		}
		while (result.length%8 || result.length == 0){
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


