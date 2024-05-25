
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
	var btn;
	var dom;
	/* host */
		$("#commonMediaText").append('<input id="host1" style="background-color:#E9E7E8;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("host1"));
		dom.x = 478;
		dom.y = 48;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="host2" style="background-color:#E9E7E8;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("host2"));
		dom.x = 553;
		dom.y = 48;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="host3" style="background-color:#E9E7E8;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("host3"));
		dom.x = 627.35;
		dom.y = 48;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="host4" style="background-color:#E9E7E8;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("host4"));
		dom.x = 700;
		dom.y = 48;		
		_container.addChild(dom);
		
	/* Subnet */	
		$("#commonMediaText").append('<input id="subnet1" style="background-color:#D3D1D2;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("subnet1"));
		dom.x = 478;
		dom.y = 83;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="subnet2" style="background-color:#D3D1D2;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("subnet2"));
		dom.x = 553;
		dom.y = 83;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="subnet3" style="background-color:#D3D1D2;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("subnet3"));
		dom.x = 627.35;
		dom.y = 83;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="subnet4" style="background-color:#D3D1D2;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("subnet4"));
		dom.x = 700;
		dom.y = 83;		
		_container.addChild(dom);
		
	/* Host bin */	
		$("#commonMediaText").append('<input id="hostbin1" style="background-color:#E9E7E8;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("hostbin1"));
		dom.x = 478;
		dom.y = 110;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="hostbin2" style="background-color:#E9E7E8;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("hostbin2"));
		dom.x = 553;
		dom.y = 110;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="hostbin3" style="background-color:#E9E7E8;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("hostbin3"));
		dom.x = 627.35;
		dom.y = 110;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="hostbin4" style="background-color:#E9E7E8;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("hostbin4"));
		dom.x = 700;
		dom.y = 110;		
		_container.addChild(dom);
		
	/* Subnet bin */	
		$("#commonMediaText").append('<input id="subnetbin1" style="background-color:#D3D1D2;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("subnetbin1"));
		dom.x = 478;
		dom.y = 140;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="subnetbin2" style="background-color:#D3D1D2;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("subnetbin2"));
		dom.x = 553;
		dom.y =140;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="subnetbin3" style="background-color:#D3D1D2;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("subnetbin3"));
		dom.x = 627.35;
		dom.y = 140;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="subnetbin4" style="background-color:#D3D1D2;" disabled="true" />');		
		dom = new createjs.DOMElement(document.getElementById("subnetbin4"));
		dom.x = 700;
		dom.y = 140;		
		_container.addChild(dom);
	
	/* Fip Address */	
		$("#commonMediaText").append('<input id="fipAddress1" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("fipAddress1"));
		dom.x = 479;
		dom.y = 167;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="fipAddress2" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("fipAddress2"));
		dom.x = 553;
		dom.y = 167;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="fipAddress3" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("fipAddress3"));
		dom.x = 627.35;
		dom.y = 167;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="fipAddress4" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("fipAddress4"));
		dom.x = 700;
		dom.y = 167;		
		_container.addChild(dom);
		
	/* Lip Address */	
		$("#commonMediaText").append('<input id="lipAddress1" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("lipAddress1"));
		dom.x = 479;
		dom.y = 194;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="lipAddress2" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("lipAddress2"));
		dom.x = 553;
		dom.y = 194;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="lipAddress3" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("lipAddress3"));
		dom.x = 627.35;
		dom.y = 194;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="lipAddress4" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("lipAddress4"));
		dom.x = 700;
		dom.y = 194;		
		_container.addChild(dom);
		
	/* Ba Address */	
		$("#commonMediaText").append('<input id="baAddress1" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("baAddress1"));
		dom.x = 479;
		dom.y = 222;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="baAddress2" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("baAddress2"));
		dom.x = 553;
		dom.y = 222;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="baAddress3" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("baAddress3"));
		dom.x = 627.35;
		dom.y = 222;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="baAddress4" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("baAddress4"));
		dom.x = 700;
		dom.y = 222;		
		_container.addChild(dom);
	
	/* Nnet Address */	
		$("#commonMediaText").append('<input id="nnetAddress1" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("nnetAddress1"));
		dom.x = 479;
		dom.y = 256;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="nnetAddress2" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("nnetAddress2"));
		dom.x = 553;
		dom.y = 256;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="nnetAddress3" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("nnetAddress3"));
		dom.x = 627.35;
		dom.y = 256;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="nnetAddress4" class="bluebox" />');		
		dom = new createjs.DOMElement(document.getElementById("nnetAddress4"));
		dom.x = 700;
		dom.y = 256;		
		_container.addChild(dom);
		
	/* input limit and validation */
		$(".bluebox").attr('maxlength','3');
		$(".bluebox").keypress(function (evt) {
				evt = (evt) ? evt : window.event;
				var charCode = (evt.which) ? evt.which : evt.keyCode;
				if (charCode > 31 && (charCode < 48 || charCode > 57)) {
					return false;
				}
			return true;
		});
		$("input[maxlength=3]").click(function (ev){
			var th = ev.target.id; 
			$('#'+th).css('color','#000');
			 update=true;
		});
/* feedback */
	feeback = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:305.6,y:318,width:452.65,height:75.9,titleId:"txt_incorrect",bodyId:"txt_incorrect_all",visible:"0"});			  
	_container.addChild(feeback);
		
/* Core function */

	function newBtnClickHandler(){

		netAddress = [];
		subnetMask = [];
		hostbin = [];
		subnetbin = [];
		fipAddress = [];
		lipAddress = [];
		baAddress = [];
		nnetAddress = [];

		netAddress[0] = Math.round(Math.random()*1) ? 10:172;
		netAddress[1] = Math.round(Math.random()*255);
		
		if(netAddress[0] == 172){
			netAddress[1] = Math.round(Math.random()*(31-16)+16);
		}
		
		netAddress[2] = Math.round(Math.random()*255);
		netAddress[3] = Math.round(Math.random()*253)+1;	
		
		var validMasks = new Array(0, 128, 192, 224, 240, 248, 252, 255);
		subnetMask[0] = 255;
		subnetMask[1] = 255;
		var rand =  Math.round(Math.random()*7);

	// Adjust for everything else
		subnetMask[2] = validMasks[rand];
		
	// Ignore 255 for the last octet	
		var rand2 = Math.round(Math.random()*6);
		subnetMask[3] = subnetMask[2] == 255 ? validMasks[rand2] : 0;
		
		$("#host1").attr("value",netAddress[0]);
		$("#host2").attr("value",netAddress[1]);
		$("#host3").attr("value",netAddress[2]);
		$("#host4").attr("value",netAddress[3]);
		
		$("#subnet1").attr("value",subnetMask[0]);
		$("#subnet2").attr("value",subnetMask[1]);
		$("#subnet3").attr("value",subnetMask[2]);
		$("#subnet4").attr("value",subnetMask[3]);	
		
			
		for(i=1;i<=4;i++)
		{			
			$("#hostbin"+i).attr("value",dec2bin($("#host"+i).val()));
		}
		for(i=1;i<=4;i++)
		{
			$("#subnetbin"+i).attr("value",dec2bin($("#subnet"+i).val()));
		}

	// Now, find the actual network address for the random netAddress earlier
		for (var i = 0; i < 4; i++) {
			netAddress[i] = netAddress[i] & subnetMask[i];
		}
	// Find the first host address
		for (i = 0; i < 4; i++) {
			fipAddress[i] = netAddress[i];
			if (i == 3) fipAddress[i]++;
		}

		// Invert the subnetmask, and OR it with the host address for the broadcast address
		for (i = 0; i < 4; i++) {
			baAddress[i] = netAddress[i] | ((~subnetMask[i]) & 0xFF);
		}

		// Calculate the last address from the BA address
		for (i = 0; i < 4; i++) {
			lipAddress[i] = baAddress[i];
			if (i == 3) lipAddress[i]--;
		}

		// Calculate the next net address from the ba address
		for (i = 0; i < 4; i++) {
			nnetAddress[i] = baAddress[i];
			if (i == 3) nnetAddress[i]++;
		}
		
	// Adjust the nnetAddress for octect pushes (note that the [0] address will never reach > 255)
		for (i = 3; i >= 0; i--) {
				if (nnetAddress[i] > 255) {
					nnetAddress[i] = 0;
					nnetAddress[i-1]++;
				}
			}

		}
	function dec2bin(val){
		var result= "";
			while (val>0){
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

	
	/* check function */	
		var checkBit = function(){
		success=0;
		for (var i = 0; i<4; i++){
			var newcount=i+1;
			
			if($("#fipAddress"+newcount).attr("value") != fipAddress[i]){	
				$("#fipAddress"+newcount).css("color","#dd0000");	
			}
			
			else{
				$("#fipAddress"+newcount).css("color","#000000");
				success++;				
			}

			if($("#lipAddress"+newcount).attr("value") != lipAddress[i]){	
				$("#lipAddress"+newcount).css("color","#dd0000");	
			}

			else{
				success++;	
				$("#lipAddress"+newcount).css("color","#000000");	
			}

			if($("#baAddress"+newcount).attr("value") != baAddress[i]){	
				$("#baAddress"+newcount).css("color","#dd0000");	
			}

			else{
				success++;	
				$("#baAddress"+newcount).css("color","#000000");	
			}

			if($("#nnetAddress"+newcount).attr("value") != nnetAddress[i]){	
				$("#nnetAddress"+newcount).css("color","#dd0000");	
			}

			else{
				success++;	
				$("#nnetAddress"+newcount).css("color","#000000");
			}
		}
	
	if(success==16)  {
				feeback.setTitleId("txt_correct");
				feeback.setBodyId("txt_correct_body");
			}
			else{
				feeback.setTitleId("txt_incorrect");
				feeback.setBodyId("txt_incorrect_all");
			}
			feeback.visible=1;
			update = true;
	
		}
		
	/* Reset function */
		var resetBit = function(){
			feeback.visible=0;
			
			for(k=1;k<=5;k++){
				$("input#fipAddress"+k).attr("value","");
				$("input#baAddress"+k).attr("value","");
				$("input#lipAddress"+k).attr("value","");
				$("input#nnetAddress"+k).attr("value","");
			}
		}
	/* New number function */	
		var newBit = function(){
		newBtnClickHandler();
			feeback.visible=0;
			for(k=1;k<=5;k++){
				$("input#fipAddress"+k).attr("value","");
				$("input#baAddress"+k).attr("value","");
				$("input#lipAddress"+k).attr("value","");
				$("input#nnetAddress"+k).attr("value","");
			}
		}
	newBtnClickHandler();
	//alert(mediaStage);
	btn = getCJSElement("BLUE_BUTTON",{x:303.65,y:290,width:105,height:21,size:12,compId:"txt_check",callback:checkBit});
	_container.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:450.4,y:290,width:120,height:21,size:12,compId:"txt_reset",callback:resetBit});
	_container.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:611.65,y:290,width:150,height:21,size:12,compId:"txt_newnumber",callback:newBit});
	_container.addChild(btn);
	

});
