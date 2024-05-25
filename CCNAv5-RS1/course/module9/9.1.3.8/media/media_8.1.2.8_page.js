function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
   
  	var textBox	= getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:"305.6",y:"306.9",width:"452.65",height:"75.9",titleId:"txt_incorrect",bodyId:"txt_incorrect_binary",animated:"0",visible:"0"});
		_container.addChild(textBox);
	
	
		btn = getCJSElement("BLUE_BUTTON",{x:303.65,y:275,width:105,height:21,size:12,id:"check",compId:"txt_check",callback:btnCheckClicked});
		_container.addChild(btn);
		
		btn = getCJSElement("BLUE_BUTTON",{x:450.4,y:275,width:120,height:21,size:12,id:"reset",compId:"txt_reset",callback:btnResetClicked});
		_container.addChild(btn);
		
		btn = getCJSElement("BLUE_BUTTON",{x:611.65,y:275,width:150,height:21,size:12,id:"newnumber",compId:"txt_newnumber",callback:btnNewNumberClicked});
		_container.addChild(btn);
   
   
   for(var i=1; i<=4 ;i++){
		var bitIn = document.createElement('input');
		bitIn.id = "firsthostipdeci"+i;
		bitIn.style.cssText = "position:absolute;width:69.3px;background-color:#66C0E5;color:#000000;";
		bitIn.className = "numberHostVal";
		bitIn.setAttribute('maxlength','3'); 
		$("#commonMediaText").append(bitIn);

		var _domBitIn = new createjs.DOMElement(bitIn);
		_domBitIn.x = 465 +(78*(i-1));
		_domBitIn.y = 160;   
		_container.addChild(_domBitIn); 
		$('#'+"firsthostipdeci"+i).keydown(function(event) {
		 restrictNonnumeric(event);});
		 $('#'+"firsthostipdeci"+i).focus(function(event){
					$('#'+event.target.id).css("color","black");	
					textBox.visible = false; 	
				 }); 
   }
      for(var i=1; i<=4 ;i++){
		var bitIn = document.createElement('input');
		bitIn.id = "lasthostipdeci"+i;
		bitIn.style.cssText = "position:absolute;width:69.3px;background-color:#66C0E5;color:#000000;";
		bitIn.className = "numberHostVal";
		bitIn.setAttribute('maxlength','3'); 
		$("#commonMediaText").append(bitIn);

		var _domBitIn = new createjs.DOMElement(bitIn); 
		_domBitIn.x = 465 +(78*(i-1));
		_domBitIn.y = 189;   
		_container.addChild(_domBitIn);
		$('#'+"lasthostipdeci"+i).keydown(function(event) {
		 restrictNonnumeric(event);});
		  $('#'+"lasthostipdeci"+i).focus(function(event){
					$('#'+event.target.id).css("color","black");	
					textBox.visible = false; 	
				 }); 
		 
   }
   
   for(var i=1; i<=4 ;i++){
		var bitIn = document.createElement('input');
		bitIn.id = "broaddecimal"+i;
		bitIn.style.cssText = "position:absolute;width:69.3px;background-color:#66C0E5;color:#000000;";
		bitIn.className = "numberHostVal";
		bitIn.setAttribute('maxlength','3'); 
		$("#commonMediaText").append(bitIn);

		var _domBitIn = new createjs.DOMElement(bitIn); 
		_domBitIn.x = 465 +(78*(i-1));
		_domBitIn.y = 215;   
		_container.addChild(_domBitIn);
		$('#'+"broaddecimal"+i).keydown(function(event) {
		 restrictNonnumeric(event);}); 
		  $('#'+"broaddecimal"+i).focus(function(event){
					$('#'+event.target.id).css("color","black");	
					textBox.visible = false; 	
				 });
   }
   
   for(var i=1; i<=4 ;i++){
		var bitIn = document.createElement('input');
		bitIn.id = "nextnetdeci"+i;
		bitIn.style.cssText = "position:absolute;width:69.3px;background-color:#66C0E5;color:#000000;";
		bitIn.className = "numberHostVal";
		bitIn.setAttribute('maxlength','3'); 
		$("#commonMediaText").append(bitIn);

		var _domBitIn = new createjs.DOMElement(bitIn); 
		_domBitIn.x = 465 +(78*(i-1));
		_domBitIn.y = 245;   
		_container.addChild(_domBitIn); 
		
			$('#'+"nextnetdeci"+i).keydown(function(event) {
				
				 restrictNonnumeric(event);});
				 $('#'+"nextnetdeci"+i).focus(function(event){
					$('#'+event.target.id).css("color","black");	
					textBox.visible = false; 	
				 });
   }

 
newBtnClickHandler();

function btnNewNumberClicked(){
	newBtnClickHandler();
}

$(".position_bg input").focus(function() {
	var fieldid= this.id;	
	$('#'+fieldid).css("color","black");
	$('#'+fieldid).keydown(function(event) {
		
		restrictNonnumeric(event);});
	$("#pannel").css("display","none");
	
});

$(".exponent_bg input").focus(function() {
	var fieldid= this.id;	
	$('#'+fieldid).css("color","black");
	$('#'+fieldid).keydown(function(event) {
		 restrictNonnumeric(event);});
	$("#pannel").css("display","none");
	
});


function restrictNonnumeric(event){
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
             // Allow: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) || 
             // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return false;
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault(); 
            } }}

function newBtnClickHandler()
{

	
	$(".exponent_bg input").attr("value","");
	$(".position_bg input").attr("value","");
	$("#pannel").css("display","none");
	
	netaddressdeci=[];	
	subnetmaskdeci=[];	
	netaddressbin=[];
	subnetmaskbin=[];	
	fipaddress=[];	
	netaddressbinand=[];	
	broadcastadress=[];
	lastipaddress=[];	
	nextnetaddress=[];	
	
	netaddressdeci[0] = 192;
	netaddressdeci[1] = 168;
	netaddressdeci[2] = Math.round(Math.random() * 255);
	netaddressdeci[3] = Math.round(Math.random() * 255);
	
	$("#netindeci1").html(netaddressdeci[0]);
	$("#netindeci2").html(netaddressdeci[1]);
	$("#netindeci3").html(netaddressdeci[2]);
	$("#netindeci4").html(netaddressdeci[3]);	
	

	var validMasks = new Array(0,128,192,224,240,248,252);
	subnetmaskdeci[0] = 255;
	subnetmaskdeci[1] = 255;
	subnetmaskdeci[2] = 255;
	var rand = Math.round(Math.random()*6);
	subnetmaskdeci[3] = validMasks[rand];

	if(subnetmaskdeci[3]==0){netaddressdeci[3]=0}
	
	$("#subnetdeci1").html(subnetmaskdeci[0]);
	$("#subnetdeci2").html(subnetmaskdeci[1]);
	$("#subnetdeci3").html(subnetmaskdeci[2]);
	$("#subnetdeci4").html(subnetmaskdeci[3]);

	$("#netindeci1").html(netaddressdeci[0]);
	$("#netindeci2").html(netaddressdeci[1]);
	$("#netindeci3").html(netaddressdeci[2]);
	$("#netindeci4").html(netaddressdeci[3]);

	for(i=1;i<=4;i++)
	{
	$("#netbin"+i).html(dec2bin($("#netindeci"+i).text()));
	netaddressbin[i-1]=dec2bin($("#netindeci"+i).text());
	}
	for(i=1;i<=4;i++)
	{
	$("#subnetbin"+i).html(dec2bin($("#subnetdeci"+i).text()));
	subnetmaskbin[i-1]=dec2bin($("#subnetdeci"+i).text());
	//alert(subnetmaskbin[i-1]);
	}
	
for (var i = 0; i < 4; i++) {
	   		netaddressbinand[i] = netaddressdeci[i] & subnetmaskdeci[i];		

		}
	
	for (var i = 0; i < 4; i++) {
	   		broadcastadress[i] = netaddressdeci[i] | ((~subnetmaskdeci[i]) & 0xFF);
				
		}
		
		for (var i = 0; i < 4; i++) {
	   		nextnetaddress[i] = broadcastadress[i];
				
		}
	
	for (i = 0; i < 4; i++) {
		fipaddress[i] = netaddressbinand[i];
		
	}
	
	for (i = 0; i < 4; i++) {
		lastipaddress[i] = broadcastadress[i];
		
	}
	
	fipaddress[3]=fipaddress[3]+1;
	lastipaddress[3]=lastipaddress[3]-1;
	nextnetaddress[3] = nextnetaddress[3]+1;

	if(subnetmaskdeci[3]==0){
		nextnetaddress[3]=0;
		nextnetaddress[2]=broadcastadress[2]+1;
	}
	
for (i = 0; i < 4; i++) {
	//alert("FIRST IP: "+ fipaddress[i]);
	//alert("BROADCAST ADDRESS: "+ broadcastadress[i]);
	//alert("LAST IP: " +lastipaddress[i]);	
	//alert("NEXT NETIP: "+ nextnetaddress[i]);
	}	
}

function btnResetClicked(){
	$(".exponent_bg input").attr("value","");
	$(".position_bg input").attr("value","");
	//$("#pannel").css("display","none");
	
	/*$("input#netaddbin1").attr("value","");
	$("input#netaddbin2").attr("value","");
	$("input#netaddbin3").attr("value","");
	$("input#netaddbin4").attr("value","");	
	$("input#netadddeci1").attr("value","");
	$("input#netadddeci2").attr("value","");
	$("input#netadddeci3").attr("value","");
	$("input#netadddeci4").attr("value","");*/
	
	$("input#firsthostipdeci1").attr("value","");
	$("input#firsthostipdeci2").attr("value","");
	$("input#firsthostipdeci3").attr("value","");
	$("input#firsthostipdeci4").attr("value","");
	$("input#lasthostipdeci1").attr("value","");
	$("input#lasthostipdeci2").attr("value","");
	$("input#lasthostipdeci3").attr("value","");
	$("input#lasthostipdeci4").attr("value","");
	$("input#broaddecimal1").attr("value","");
	$("input#broaddecimal2").attr("value","");
	$("input#broaddecimal3").attr("value","");
	$("input#broaddecimal4").attr("value","");
	$("input#nextnetdeci1").attr("value","");
	$("input#nextnetdeci2").attr("value","");
	$("input#nextnetdeci3").attr("value","");
	$("input#nextnetdeci4").attr("value","");	
	textBox.visible = false; 
}
	

//$("#check").click(function(){
	function btnCheckClicked(){
	
		success=0;
	for (var i = 0; i<4; i++){
		var newcount=i+1;
		if($("#firsthostipdeci"+newcount).attr("value") != fipaddress[i]){	
		$("#firsthostipdeci"+newcount).css("color","red");	
			}
		
		else
						{
							$("#firsthostipdeci"+newcount).css("color","black");

							success++;				
							
						}


		if($("#lasthostipdeci"+newcount).attr("value") != lastipaddress[i]){	
			$("#lasthostipdeci"+newcount).css("color","red");	
		}

		else
		{success++;	
			$("#lasthostipdeci"+newcount).css("color","black");	
		}


		if($("#broaddecimal"+newcount).attr("value") != broadcastadress[i]){	
			$("#broaddecimal"+newcount).css("color","red");	
		}

		else
		{success++;	
			$("#broaddecimal"+newcount).css("color","black");	
		}
		
		var n = $("#nextnetdeci"+newcount).attr("value")
	

		if($("#nextnetdeci"+newcount).attr("value") != nextnetaddress[i]){	
			$("#nextnetdeci"+newcount).css("color","red");	
		}

		else
		{success++;	
			$("#nextnetdeci"+newcount).css("color","black");	
		} 
		
		}
	
		if(success==16){ 
			textBox.setTitleId("txt_correct");
			textBox.setBodyId("txt_correct_body");
			textBox.visible = true; 
			update = true; 
			
		}else{ 
			textBox.setTitleId("txt_incorrect");
			textBox.setBodyId("txt_incorrect_binary");
			textBox.visible = true; 
			update = true; 
			$("input#numberHostVal").css("color","#DD0000"); 
		}
	/*
	if(success==16){ 
		$(".cross span").html($(Data).find("component#txt_correct").text());
		$(".result p").html($(Data).find("component#txt_correct").text());
		$("#pannel").css("display","block");
	}else{
		$(".cross span").html($(Data).find("component#txt_incorrect").text());
		$(".result p").html($(Data).find("component#txt_incorrect_all").text());
		$("#pannel").css("display","block");
	}	
	*/
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

});