var hostAddress,subnetMask,netAddress,netAddressbin = [];
var Data;



var netaddressdeci,	subnetmaskdeci, netaddressbin,subnetmaskbin, fipaddress,netaddressbinand,broadcastadress,lastipaddress,nextnetaddress;


var success;






var Anding = function(data)
{
	Data = data;
	$("#title_sub").html($(data).find("component#txt_instructions").text());
	$("#netindeci").html($(data).find("component#txt_hostaddress").text());
	$("#subnetdeci").html($(data).find("component#txt_subnetmask").text());
	$("#netbin").html($(data).find("component#txt_hostaddrbin").text());
	$("#subnetbin").html($(data).find("component#txt_subnetbin").text());
	$("#firsthostipdeci").html($(data).find("component#txt_netbin").text());
	$("#lasthostipdeci").html($(data).find("component#txt_netdec").text());
	$("#broaddecimal").html($(data).find("component#txt_badec").text());
	$("#nextnetdeci").html($(data).find("component#txt_nnetdec").text());
}




var temp;
temp = '<table width="700" border="0" cellspacing="0" cellpadding="0" style="padding-left:9px;"> <tr> <td width="700" align="left" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="95%"><tr><td height="10"></td></tr><tr><td id="title_sub"></td></tr></table></td> <td width="500" align="center" valign="top"><table width="520" border="0" cellspacing="1" cellpadding="1" class="top_gap"> <tr> <td></td> <td colspan="13"></td> </tr><tr><td class="top_gap"></td><td colspan="5"></td></tr> <tr> <td height="26" class="align_right" id="decival"></td><td colspan="5"><table width="101%" border="0" id="title_bg" cellspacing="0" cellpadding="0"> <tr> <td width="100%" height="31"></td> </tr> </table></td> </tr> <tr height="30"> <td class="align_right"></td> <td class="exponent_bg" width="200" id="netindeci"></td> <td class="exponent_bg" width="63" id="netindeci1"></td> <td class="exponent_bg" width="63" id="netindeci2"></td> <td class="exponent_bg" width="63" id="netindeci3"></td> <td class="exponent_bg" width="63" id="netindeci4"></td> </tr> <tr height="30"> <td class="align_right"></td> <td class="position_bg" width="200" id="subnetdeci"></td> <td class="position_bg" width="63" id="subnetdeci1"></td> <td class="position_bg" width="63" id="subnetdeci2"></td> <td class="position_bg" width="63" id="subnetdeci3"></td> <td class="position_bg" width="63" id="subnetdeci4"></td> </tr><tr height="30"> <td class="align_right"></td> <td class="exponent_bg" width="200" id="netbin"></td> <td class="exponent_bg" width="63" id="netbin1"></td> <td class="exponent_bg" width="63" id="netbin2"></td> <td class="exponent_bg" width="63" id="netbin3"></td> <td class="exponent_bg" width="63" id="netbin4"></td> </tr> <tr height="30"> <td class="align_right"></td> <td class="position_bg" width="200" id="subnetbin"></td> <td class="position_bg" width="63" id="subnetbin1"></td> <td class="position_bg" width="63" id="subnetbin2"></td> <td class="position_bg" width="63" id="subnetbin3"></td> <td class="position_bg" width="63" id="subnetbin4"></td> </tr> <tr height="30"> <td class="align_right" id="bit"></td> <td class="exponent_bg" id="firsthostipdeci" width="200"></td> <td class="exponent_bg" width="63"><input name="firsthostipdeci1" type="text" id="firsthostipdeci1" size="8" maxlength="3"/></td> <td class="exponent_bg" width="63"><input name="firsthostipdeci2" type="text" id="firsthostipdeci2" size="8" maxlength="3"/></td> <td class="exponent_bg" width="63"><input name="firsthostipdeci3" type="text" id="firsthostipdeci3" size="8" maxlength="3"/></td> <td class="exponent_bg" width="63"><input name="firsthostipdeci4" type="text" id="firsthostipdeci4" size="8" maxlength="3"/></td> </tr> <tr height="30"> <td class="align_right" id="bit"></td> <td class="position_bg" id="lasthostipdeci" width="200"></td><td class="position_bg" width="63"><input name="lasthostipdeci1" type="text" id="lasthostipdeci1" size="8" maxlength="3" class="numbersOnly"/></td> <td class="position_bg" width="63"><input name="lasthostipdeci2" type="text" id="lasthostipdeci2" size="8" maxlength="3" class="numbersOnly"/></td> <td class="position_bg" width="63"><input name="lasthostipdeci3" type="text" id="lasthostipdeci3" size="8" maxlength="3" class="numbersOnly"/></td> <td class="position_bg" width="63"><input name="lasthostipdeci4" type="text" id="lasthostipdeci4" size="8" maxlength="3" class="numbersOnly"/></td> </tr><tr height="30"> <td class="align_right" id="bin"></td> <td class="exponent_bg" id="broaddecimal" width="200"></td> <td class="exponent_bg" width="63"><input name="broaddecimal1" type="text" id="broaddecimal1" size="8" maxlength="3" class="numbersOnly"/></td> <td class="exponent_bg" width="63"><input name="broaddecimal2" type="text" id="broaddecimal2" size="8" maxlength="3" class="numbersOnly"/></td> <td class="exponent_bg" width="63"><input name="broaddecimal3" type="text" id="broaddecimal3" size="8" maxlength="3" class="numbersOnly"/></td> <td class="exponent_bg" width="63"><input name="broaddecimal4" type="text" id="broaddecimal4" size="8" maxlength="3" class="numbersOnly"/></td> </tr><tr height="30"> <td class="align_right" id="bit"></td> <td class="position_bg" id="nextnetdeci" width="200"></td> <td class="position_bg" width="63"><input name="nextnetdeci1" type="text" id="nextnetdeci1" size="8" maxlength="3" class="numbersOnly"/></td> <td class="position_bg" width="63"><input name="nextnetdeci2" type="text" id="nextnetdeci2" size="8" maxlength="3" class="numbersOnly"/></td> <td class="position_bg" width="63"><input name="nextnetdeci3" type="text" id="nextnetdeci3" size="8" maxlength="3" class="numbersOnly"/></td> <td class="position_bg" width="63"><input name="nextnetdeci4" type="text" id="nextnetdeci4" size="8" maxlength="3" class="numbersOnly"/></td> </tr><tr><td>&nbsp;</td><td colspan="8" align="center"><table width="100%" border="0" cellspacing="0" cellpadding="0" class="shift_right"><tr><td colspan="2"><input type="submit" name="check" id="check" value="Check" /></td><td>&nbsp;</td><td colspan="2"><input type="submit" name="reset" id="reset" value="Reset" /></td><td>&nbsp;</td><td colspan="2"><input type="submit" name="new_nub" id="new_nub" value="New Number"/></td><td>&nbsp;</td></tr></table></td></tr></table></td></tr><div id="pannel" style="display:none;"><div class="cross"><span></span><a href="#" id="incorrect" ><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p></p></div></div><div id="pannel_2" style="display:none"><div class="cross_2"><span></span><a href="#" id="correct" ><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result_2"><p></p></div></div><script> $("a#incorrect").click(function ( event ) { $("#pannel").slideUp(1000); event.preventDefault(); $(this).hide(); });</script><script> $("a#correct").click(function ( event ) { $("#pannel_2").hide(); event.preventDefault(); $(this).hide(); });</script></table>';
$("#mainDiv").html(temp);






$(function(){
newBtnClickHandler();
$("#new_nub").click(function(){newBtnClickHandler();})

});


$(".position_bg input").focus(function() {
	var fieldid= this.id;	
	$('#'+fieldid).css("color","black");
	$('#'+fieldid).keydown(function(event) { restrictNonnumeric(event);});
	$("#pannel").css("display","none");
	
	
});




$(".exponent_bg input").focus(function() {
	var fieldid= this.id;	
	$('#'+fieldid).css("color","black");
	$('#'+fieldid).keydown(function(event) { restrictNonnumeric(event);});
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





$("#reset").click(function(){resetHandler();})

function resetHandler()
{
	
$(".exponent_bg input").attr("value","");
$(".position_bg input").attr("value","");
$("#pannel").css("display","none");}



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

$("#reset").live("click",function(){	
	
	$("input#netaddbin1").attr("value","");
	$("input#netaddbin2").attr("value","");
	$("input#netaddbin3").attr("value","");
	$("input#netaddbin4").attr("value","");	
	$("input#netadddeci1").attr("value","");
	$("input#netadddeci2").attr("value","");
	$("input#netadddeci3").attr("value","");
	$("input#netadddeci4").attr("value","");	
	
	});
	

$("#check").click(function(){
	
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

		if($("#nextnetdeci"+newcount).attr("value") != nextnetaddress[i]){	
			$("#nextnetdeci"+newcount).css("color","red");	
		}

		else
		{success++;	
			$("#nextnetdeci"+newcount).css("color","black");	
		}
		
		
		
		}
	
	
	if(success==16){

	$(".cross span").html($(Data).find("component#txt_correct").text());
	$(".result p").html($(Data).find("component#txt_correct").text());
	$("#pannel").css("display","block");}
	else{$(".cross span").html($(Data).find("component#txt_incorrect").text());
	$(".result p").html($(Data).find("component#txt_incorrect_all").text());
	$("#pannel").css("display","block");}	
	
	
		
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




