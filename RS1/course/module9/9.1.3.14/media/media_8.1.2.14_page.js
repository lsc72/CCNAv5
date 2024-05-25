
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
   
		var bitIn = document.createElement('input');
		bitIn.id = "numberHostVal";
		bitIn.style.cssText = "position:absolute;width:284.2px;background-color:#66C0E5;color:#000000;";
		bitIn.className = "numberHostVal";
		bitIn.setAttribute('maxlength','8');
		bitIn.addEventListener('keydown', numberHostVal);
		$("#commonMediaText").append(bitIn);

		var _domBitIn = new createjs.DOMElement(bitIn);
		_domBitIn.x = 479.25;
		_domBitIn.y = 216.05;
		
		_container.addChild(_domBitIn); 
	 
	
		var textBox	= getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:"305.6",y:"306.9",width:"452.65",height:"75.9",titleId:"txt_incorrect",bodyId:"txt_body_incorrect",animated:"0",visible:"0"});
		_container.addChild(textBox);
	
	
		btn = getCJSElement("BLUE_BUTTON",{x:303.45,y:263.3,width:105,height:21,size:12,id:"check",compId:"txt_check",callback:btnCheckClicked});
		_container.addChild(btn);
		
		btn = getCJSElement("BLUE_BUTTON",{x:450.25,y:263.3,width:120,height:21,size:12,id:"reset",compId:"txt_reset",callback:btnResetClicked});
		_container.addChild(btn);
		
		btn = getCJSElement("BLUE_BUTTON",{x:611.65,y:263.3,width:150,height:21,size:12,id:"newnumber",compId:"txt_newnumber",callback:btnNewNumberClicked});
		_container.addChild(btn); 
	
	
	var hostAddress,subnetMask,netAddress,netAddressbin = [];
 
 
	newBtnClickHandler();
	$('#numberHostVal').focus(function(){ 
	 
		//$("#pannel").css("display","none");
		textBox.visible = false;
		update = true;
		$("input#numberHostVal").css("color","black");});	
		 
		function btnNewNumberClicked(){
		//$("#new_nub").click(function(){
			newBtnClickHandler();
		//})
		}
 
function newBtnClickHandler()
{
	$("#numberHostVal").attr("value","");
	 
	hostAddress = [];
	subnetMask = [];

	hostAddress[0] = Math.round(Math.random()*1) ? 10:172;
	hostAddress[1] = 0;
	if(hostAddress[0] == 172){
		hostAddress[1] = Math.round(Math.random()*(31-16)+16);
	}
	hostAddress[2] = 0;
	hostAddress[3] = 0;
	
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
	//$("#reset").live("click",function(){		
		$("#numberHostVal").attr("value","");	
		textBox.visible = false;
		update = true;	
	//});
	}
	

	function btnCheckClicked(){
	//$("#check").click(function(){
		
			var netAddress = new Array(4);
		// Calculate the network address
		var i;
		for (i = 0; i<4; i++){	
			netAddress[i] = ((hostAddress[i] & 0xFF) & (subnetMask[i] & 0xFF)) & 0xFF;
		}
		
		// Calculate the number of hosts
		var bits = 0;
		for (i = 0; i<4; i++){
			var mask = 0x80;
			for (var j = 0; j<8; j++){
				if (subnetMask[i] & mask){
					bits++;
				}
				else{
					break;
				}
				mask = mask >> 1;
				
			}
			if (!(subnetMask[i] & mask) && mask != 0){
				break;
			}
		}
		var n= 32 - bits;
		var numHosts = Math.pow(2,n) - 2;
		var hostcount = document.getElementById("numberHostVal");
		
		if((hostcount.value)==numHosts){ 
			textBox.setTitleId("txt_correct");
			textBox.setBodyId("txt_body_correct");
			textBox.visible = true; 
			update = true; 
			
		}else{ 
			textBox.setTitleId("txt_incorrect");
			textBox.setBodyId("txt_body_incorrect");
			textBox.visible = true; 
			update = true; 
			$("input#numberHostVal").css("color","#DD0000"); 
		}
	//});
	}

	function numberHostVal(evt) {
	  var theEvent = evt || window.event;
	  var key = theEvent.keyCode || theEvent.which;
	  key = String.fromCharCode( key );
	  var regex = /[0-9\b\t]|\./;
	  if( !regex.test(key) ) {
		theEvent.returnValue = false;
		if(theEvent.preventDefault) theEvent.preventDefault();
	  }
	}
	
	function dec2bin(val){
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


