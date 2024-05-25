var hostAddress,subnetMask,netAddress,netAddressbin = [];

var fibhostacitivity = function(data)
{
	Data = data;
	$("#title").html($(data).find("component#txt_instructions").text());
	$("#host").html($(data).find("component#txt_hostaddress").text());
	$("#subnet").html($(data).find("component#txt_subnetmask").text());
	$("#hostbin").html($(data).find("component#txt_hostaddrbin").text());
	$("#subnetbin").html($(data).find("component#txt_subnetbin").text());
	$("#numberHost").html($(data).find("component#txt_nhost").text());
	$("#txt_correct").html($(data).find("component#txt_correct").text());
	$("#txt_body_correct").html($(data).find("component#txt_body_correct").text());
	$("#txt_incorrect").html($(data).find("component#txt_incorrect").text());
	$("#txt_body_incorrect").html($(data).find("component#txt_body_incorrect").text());
}




var temp;
temp +='';
temp = '<table  width="600" border="0" cellspacing="0" cellpadding="0" style="padding-left:9px;" id="subtable"><tr><td width="700" align="left" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="95%"><tr><td id="title"></td></tr><tr><td height="10"></td></tr><tr><td id="title_sub"></td></tr></table></td><td width="500" align="center" valign="top"><table width="520" border="0" cellspacing="1" cellpadding="1" class="top_gap"><tr><td></td><td colspan="13"></td></tr><tr><td class="top_gap"></td><td colspan="5"></td></tr><tr><td height="26" class="align_right" id="decival"></td><td colspan="5"><table width="101%" border="0" id="title_bg" cellspacing="0" cellpadding="0"><tr><td width="100%" height="31"></td></tr></table></td></tr><tr height="30"><td class="align_right"></td><td class="exponent_bg" width="200" id="host"></td><td class="exponent_bg" width="63" id="host1"></td><td class="exponent_bg" width="63" id="host2"></td><td class="exponent_bg" width="63" id="host3"></td><td class="exponent_bg" width="63" id="host4"></td></tr><tr height="30"><td class="align_right"></td><td class="position_bg" width="200" id="subnet"></td><td class="position_bg" width="63" id="subnet1"></td><td class="position_bg" width="63" id="subnet2"></td><td class="position_bg" width="63" id="subnet3"></td><td class="position_bg" width="63" id="subnet4"></td></tr><tr height="30"><td class="align_right"></td><td class="exponent_bg" width="200" id="hostbin"></td><td class="exponent_bg" width="63" id="hostbin1"></td><td class="exponent_bg" width="63" id="hostbin2"></td><td class="exponent_bg" width="63" id="hostbin3"></td><td class="exponent_bg" width="63" id="hostbin4"></td></tr><tr height="30"><td class="align_right"></td><td class="position_bg" width="200" id="subnetbin"></td><td class="position_bg" width="63" id="subnetbin1"></td><td class="position_bg" width="63" id="subnetbin2"></td><td class="position_bg" width="63" id="subnetbin3"></td><td class="position_bg" width="63" id="subnetbin4"></td></tr><tr height="30"><td class="align_right"></td><td class="exponent_bg" width="200" id="numberHost"></td><td class="exponent_bg" width="252" colspan="4"><input type="text" id="numberHostVal" class="numberHostVal" maxlength="8" onkeypress="numberHostVal(event)" style="background-color:#66C0E5;color:#000000;"/></td></td></tr><tr><td>&nbsp;</td><td colspan="8" class="align_center" id="enter"></td></tr><tr><td>&nbsp;</td><td colspan="8" align="center"><table width="100%" border="0" cellspacing="0" cellpadding="0" class=shift_right"><tr><td colspan="2"><input type="submit" class="button_add" name="check" id="check" value="Check" /></td><td>&nbsp;</td><td colspan="2"><input type="submit" name="reset" class="button_add" id="reset" value="Reset" /></td><td>&nbsp;</td><td colspan="2"><input type="submit" name="new_nub" class="button_add" id="new_nub" value="New Number" /></td><td>&nbsp;</td></tr></table></td></tr></table></td></tr><div id="pannel" style="display:none;"><div class="cross"><span></span><a href="#" id="incorrect"><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p></p></div></div><div id="pannel_2" style="display:none"><div class="cross_2"><span></span><a href="#" id="correct"><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result_2"><p></p></div></div><script>$("a#incorrect").click(function (event) {$("#pannel").slideUp(1000);event.preventDefault();$(this).hide();});</script><script>$("a#correct").click(function (event) {$("#pannel_2").hide();event.preventDefault();$(this).hide();});</script></table>';
$("#mainDiv").html(temp);

$(function(){
newBtnClickHandler();
$('#numberHostVal').focus(function(){ $("#pannel").css("display","none");$("input#numberHostVal").css("color","black");});	
$('#netaddbin1,#netaddbin2,#netaddbin3,#netaddbin4').keypress(function(key)
 {
	var k = key.charCode;
	if(k == 48 || k == 49 || k == 0)  
	{
	return true;
	}
	else
	{			
	return false;
	}
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
});

$("#new_nub").click(function(){newBtnClickHandler();})

});



function newBtnClickHandler()
{
	$("#numberHostVal").attr("value","");
	$("#pannel").css("display","none");
	$("input#netaddbin1").attr("value","");
	$("input#netaddbin2").attr("value","");
	$("input#netaddbin3").attr("value","");
	$("input#netaddbin4").attr("value","");	
	$("input#netadddeci1").attr("value","");
	$("input#netadddeci2").attr("value","");
	$("input#netadddeci3").attr("value","");
	$("input#netadddeci4").attr("value","");	
	
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
	
		
	for(i=1;i<=4;i++)
	{
	$("#hostbin"+i).html(dec2bin($("#host"+i).text()));
	}
	for(i=1;i<=4;i++)
	{
	$("#subnetbin"+i).html(dec2bin($("#subnet"+i).text()));
	}
	
}

$("#reset").live("click",function(){	
	
	$("#numberHostVal").attr("value","");
	
	$("#pannel").css("display","none");	
	
	});
	

$("#check").click(function(){
	
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
		$(".cross span").html($(Data).find("component#txt_correct").text());
		$(".result p").html($(Data).find("component#txt_body_correct").text());
		$("#pannel").css("display","block");
		
		}
	else{
		
		$(".cross span").html($(Data).find("component#txt_incorrect").text());
		$(".result p").html($(Data).find("component#txt_body_incorrect").text());
		$("#pannel").css("display","block");
		$("input#numberHostVal").css("color","#DD0000");
		
		}
});

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




