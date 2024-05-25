loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(_container,_id)
{
		var answerObj;
		
		//CREATE INPUT TEXT FIELDS
		var y1 = 119;
		for(var i=1;i<=4;i++)
		{
			var x1 = 339.5;
			var width1 = 134;
			
			for(var j=1;j<=3;j++)
			{				
				var bitIn = document.createElement('input');
				bitIn.type = "text";
				bitIn.id = "iTxt0"+i+"_0"+j;
				bitIn.className="inputText";
				bitIn.style.cssText = "position:absolute;width:"+width1+"px";
				
			    bitIn.onkeypress = function(event) {
			    if(event.target.id.charAt(8)=='1')
				{
					event.target.setAttribute('maxlength','8'); 
					event = (event) ? event : window.event;
					var charCode = (event.which) ? event.which : event.keyCode;

			 		 if(charCode == 48 || charCode == 49 || charCode == 8 || charCode == 9 || charCode == 0){
			  			  return true;
		           	 }else{			
			  			  return false;
		         	 }
				}
				else
				{
					event.target.setAttribute('maxlength','15'); 
					 	return isNumber(event);
				}
				}
				$("#commonMediaText").append(bitIn);
				
				var _domBitIn = new createjs.DOMElement(document.getElementById(bitIn.id));
				_domBitIn.x = x1 ;
				_domBitIn.y = y1;				
			
				x1 = x1 + 151;
				_container.addChild(_domBitIn);				
			}
			y1 = y1+36;
		}
		
		
		//VALIDATE FOR NUMBER INPUT
		function isNumber(evt) {
			
			evt = (evt) ? evt : window.event;
			var charCode = (evt.which) ? evt.which : evt.keyCode;
			if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode!=46 && charCode!=44) {
				return false;
			}
			return true;
		
			
		}


		//CREATE FEEDBACK TEXTBOX		
		var textBox;
		textBox = getCJSElement("TEXTBOX",{x:247.6,y:309.85,width:450.05,height:79, subType:"CLOSABLE", titleId:"ID_CORRECT_TITLE", bodyId:"ID_CORRECT_BODY"});
		textBox.visible = false;
		_container.addChild(textBox);

	
		var network1 = new Array();
		var hostAddress = new Array();
		var subnetMask = new Array();
		var netAddress = new Array();
		var fipAddress = new Array();
		var lipAddress = new Array();
		var baAddress = new Array();
		var showMeMode = false;	
			
		function newNumber() {
		hostAddress = new Array(4);
		subnetMask  = new Array(4);
		netAddress  = new Array(4);
		fipAddress = new Array(4);
		lipAddress = new Array(4);
		baAddress = new Array(4);
	
		// First octet is always 10
		hostAddress[0] = Math.round(Math.random() * 63)+ 129;
		hostAddress[1] = Math.round(Math.random() * 255);
		hostAddress[2] = Math.round(Math.random() * 255);
		hostAddress[3] = Math.round(Math.random() * 253) + 1; // Don't consume 10.0.0.0 or 10.255.255.255
	
		// First two octets are always 255
		var validMasks = new Array(255, 254, 252, 248, 240, 224, 192, 128, 0);
		subnetMask[0] = 255;
		subnetMask[1] = 255;
	
		var rand = Math.round(Math.random() * (validMasks.length + 6)); // Make it 8/16 chance for 255
		if (rand <= 7) rand = 0;
		else           rand = rand - 7; // Adjust for everything else
		subnetMask[2] = validMasks[rand];
		
	
		// Ignore 255 for the last octet		
		subnetMask[3] = (subnetMask[2] == 255 ? (validMasks[Math.round(Math.random() * (validMasks.length - 2)) + 2]) : 0);
	
		// Calculate the network address
		for (var i = 0; i < 4; i++) {
			netAddress[i] = ((hostAddress[i] & 0xFF) & (subnetMask[i] & 0xFF)) & 0xFF;
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
	}

	
		//NOTE:
		// AS it has only one IP Address for checking
		// hard coded the answers, instead of writing the algorithm for quick delivery....
		// BITS WILL BE ONLY 27, 28, and 29...

		function RowAnswer() { 
			var binary = "";
			var decimal = "";
			var fullAddress = "";
		} 

		function initializeAnswers(){
			// for nework1 address in last octet in binary, in decimal , full address, 
			var rowAnswer = new RowAnswer();
			rowAnswer.binary = dec2bin(netAddress[3]);
			rowAnswer.decimal =netAddress[3];
			rowAnswer.fullAddress = joinAddress(netAddress);
			network1.push(rowAnswer);
		
			// for nework1 = broad cast address
			rowAnswer = new RowAnswer();
			rowAnswer.binary = dec2bin(baAddress[3]);;
			rowAnswer.decimal =baAddress[3];
			rowAnswer.fullAddress =joinAddress(baAddress);
			network1.push(rowAnswer);
			
			// for nework1 = B=27 row 3
			rowAnswer = new RowAnswer();
			rowAnswer.binary = dec2bin(fipAddress[3]);
			rowAnswer.decimal =fipAddress[3];
			rowAnswer.fullAddress =joinAddress(fipAddress);
			network1.push(rowAnswer);
			
			// for nework1 = B=27 row 4
			rowAnswer = new RowAnswer();
			rowAnswer.binary = dec2bin(lipAddress[3]);
			rowAnswer.decimal =lipAddress[3];
			rowAnswer.fullAddress =joinAddress(lipAddress);
			network1.push(rowAnswer);
		}

		function onShow(e){
			showMeMode = true;
			hideFeedbackTxt();
			
			// display all answers
			answerObj = network1[0];	
			$("#iTxt01_01").val(answerObj.binary);
			$("#iTxt01_02").val(answerObj.decimal);
			$("#iTxt01_03").val(answerObj.fullAddress);
			
			answerObj = network1[1];
			$("#iTxt02_01").val(answerObj.binary);
			$("#iTxt02_02").val(answerObj.decimal);
			$("#iTxt02_03").val(answerObj.fullAddress);
			
			answerObj = network1[2];
			$("#iTxt03_01").val(answerObj.binary);
			$("#iTxt03_02").val(answerObj.decimal);
			$("#iTxt03_03").val(answerObj.fullAddress);
			
			answerObj =  network1[3];
			$("#iTxt04_01").val(answerObj.binary);
			$("#iTxt04_02").val(answerObj.decimal);
			$("#iTxt04_03").val(answerObj.fullAddress);
			
			for(var j =1;j<=4;j++)
			{
				for(var k=1;k<=3;k++)
				{					
					$('#iTxt0'+j+'_0'+k).attr("disabled",true);
				}
			}
		}

		function hideFeedbackTxt(){
			textBox.visible = false;
			
		}
		
		function onCheck() {
			if (!showMeMode) {
				validateAnswer();
			}else {
				hideFeedbackTxt();
				showMeMode = false;
			}
		}

		function validateAnswer() {
			// check for first row
			
			var row1 = false;
			var row2 = false;
			var row3 = false;
			var row4 = false; 
			
			answerObj = network1[0];		
			var t1_1 = $("#iTxt01_01").val();
			var t1_2 = $("#iTxt01_02").val();
			var t1_3 = $("#iTxt01_03").val();		
			if (t1_1 == answerObj.binary && t1_2 == answerObj.decimal && t1_3 == answerObj.fullAddress){
				row1 = true;
			}else {		
			}
			
			answerObj = network1[1];
			var t2_1 = $("#iTxt02_01").val();
			var t2_2 = $("#iTxt02_02").val();
			var t2_3 = $("#iTxt02_03").val();	
			if (t2_1 == answerObj.binary && t2_2 == answerObj.decimal && t2_3 == answerObj.fullAddress){
				row2 = true;
			}else {	
			}
			
			answerObj =  network1[2];
			var t3_1 = $("#iTxt03_01").val();
			var t3_2 = $("#iTxt03_02").val();
			var t3_3 = $("#iTxt03_03").val();
			if (t3_1 == answerObj.binary && t3_2 == answerObj.decimal && t3_3 == answerObj.fullAddress){
				row3 = true;
			}else {		
			}
			
			answerObj =  network1[3];
			var t4_1 = $("#iTxt04_01").val();
			var t4_2 = $("#iTxt04_02").val();
			var t4_3 = $("#iTxt04_03").val();
			if (t4_1 == answerObj.binary && t4_2 == answerObj.decimal && t4_3 == answerObj.fullAddress){
				row4 = true;
			}else {		
			}
			
			textBox.visible = true;	
			if (row1 == true && row2 == true && row3 == true && row4 == true) {
				textBox.setBodyId("ID_CORRECT_BODY");
				textBox.setTitleId("ID_CORRECT_TITLE");
			}else {		
				textBox.setBodyId("ID_INCORRECT_BODY");
				textBox.setTitleId("ID_INCORRECT_TITLE");		
			}
		
		}

		function resetQuestion() {
			onReset();
			network1 = new Array()
			newNumber();
			ipAddress_txt.htmlText  = "<b>"+ joinAddress(hostAddress)+"/" + getMaskBits(joinAddress(subnetMask)) +"</b>";
			initializeAnswers();
			$("#ipAddress_txt").html(ipAddress_txt.htmlText);
		}

		function onReset() {
			
			$("input").attr("value","");
			$("input").empty();
			
			for(var j =1;j<=4;j++)
			{
				for(var k=1;k<=3;k++)
				{					
					$('#iTxt0'+j+'_0'+k).attr("disabled",false);
				}
			}
			$('#iTxt01_01').focus();
			hideFeedbackTxt();			
		
		}

		function onNew(e) {
			this.focusRect = false;
			resetQuestion();
		}

		function dec2bin(val) {
			var result = "";
		
			while (val > 0) {
				if (val & 0x01) result = "1" + result;
				else            result = "0" + result;
				val = (val >> 1);
			}
		
			while (result.length % 8 || result.length == 0) {
				result = "0" + result;
			}
		
			return result;
		}

		function bin2dec(val) {
			var result = 0;
		
			while (val.length != 0) {
				if (val.substr(0, 1) == "1") result = result | 0x1;
				result = result << 1;
				val = val.substr(1);
			}
		
			result = result >> 1;
		
			return result;
		}
	
		function joinAddress(array) {
			var ipAddress = "";
			for (var i=1;i< array.length+1;i++) {
				ipAddress += array[i-1] + (i== array.length ? "" : ".");
			}
			return ipAddress;
		}

		function getMaskBits(mask) {
			var submask = mask + ".";
			var k = 0;
			var smn = 0;
			for (var j= 0; j < submask.length; j++) {
				if (submask.charAt(j) == '.') {
					var oc = submask.substr(k, j-k);
					k = j+1;
					if (oc == "255") smn += 8;
					else if (oc == "254") smn += 7;
					else if (oc == "252") smn += 6;
					else if (oc == "248") smn += 5;
					else if (oc == "240") smn += 4;
					else if (oc == "224") smn += 3;
					else if (oc == "192") smn += 2;
					else if (oc == "128") smn += 1;
				}
			}
		
			return smn;
		}

		function hideFeedback(evt){	
			responseTry.visible = false;
			responseCorrect.visible = false;
		}

		function init() {
			network1 = new Array()
			newNumber();
			ipAddress_txt.htmlText  = "<b>"+ joinAddress(hostAddress)+"/" + getMaskBits(joinAddress(subnetMask)) +"</b>";
			
			$("#ipAddress_txt").html(ipAddress_txt.htmlText);
			initializeAnswers();
		}

		//CREATE BUTTONS
		var btn;
		
		btn = getCJSElement("BLUE_BUTTON",{x:218.4,y:275.7,width:108,height:21,size:12,id:"check",compId:"ID_btn01", callback:buttonHandler});
		_container.addChild(btn);
		
		btn = getCJSElement("BLUE_BUTTON",{x:354.8,y:275.7,width:108,height:21,size:12,id:"reset",compId:"ID_btn02", callback:buttonHandler});
		_container.addChild(btn);
	
		btn = getCJSElement("BLUE_BUTTON",{x:491.2,y:275.7,width:108,height:21,size:12,id:"newNum",compId:"ID_btn03", callback:buttonHandler});
		_container.addChild(btn);
		
		btn = getCJSElement("BLUE_BUTTON",{x:627.7,y:275.7,width:108,height:21,size:12,id:"showMe",compId:"ID_btn04", callback:buttonHandler});
		_container.addChild(btn);

		//BUTTON HANDLERS CALLBACK	
		function buttonHandler(id){			
			switch(id)
			{
				case "check":
					onCheck();
				break;
				
				case "reset":				
					onReset();
				break;
				
				case "newNum":
					resetQuestion();
				break;
				
				case "showMe":										
					onShow();
				break;
			}
		
		}
		init();		
});
