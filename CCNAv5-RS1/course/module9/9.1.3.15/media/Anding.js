var netAddress,subnetMask,fipAddress,lipAddress,baAddress,nnetAddress,netAddressbin = [];
var Data;

var Anding = function(data)
{
	Data = data;
	/*$("#title").html($(data).find("component#ID_title").text());*/
	$("#title_sub").html($(data).find("component#txt_instructions").text());
	$("#host").html($(data).find("component#txt_hostaddress").text());
	$("#subnet").html($(data).find("component#txt_subnetmask").text());
	$("#hostbin").html($(data).find("component#txt_hostaddrbin").text());
	$("#subnetbin").html($(data).find("component#txt_subnetbin").text());
	$("#fipAddress").html($(data).find("component#txt_netbin").text());
    $("#lipAddress").html($(data).find("component#txt_netdec").text());
	$("#baAddress").html($(data).find("component#txt_badec").text());
	$("#nnetAddress").html($(data).find("component#txt_nnetdec").text());
}




var temp;
temp = '<table width="700" border="0" cellspacing="0" cellpadding="0" style="padding-left:9px;"> <tr> <td width="700" align="left" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td id="title"></td></tr><tr><td height="10"></td></tr><tr><td id="title_sub"></td></tr></table></td> <td width="500" align="center" valign="top"><table width="520" border="0" cellspacing="1" cellpadding="1" class="top_gap"> <tr> <td class="compross"></td> <td colspan="13"></td> </tr><tr><td class="top_gap"></td><td colspan="5"></td></tr> <tr> <td height="26" class="align_right" id="decival"></td><td colspan="5"><table width="101%" border="0" id="title_bg" cellspacing="0" cellpadding="0"> <tr> <td width="100%" height="31"></td> </tr> </table></td> </tr> <tr height="30"> <td class="align_right"></td> <td class="exponent_bg" width="200" id="host"></td> <td class="exponent_bg" width="63" id="host1"></td> <td class="exponent_bg" width="63" id="host2"></td> <td class="exponent_bg" width="63" id="host3"></td> <td class="exponent_bg" width="63" id="host4"></td> </tr> <tr height="30"> <td class="align_right"></td> <td class="position_bg" width="200" id="subnet"></td> <td class="position_bg" width="63" id="subnet1"></td> <td class="position_bg" width="63" id="subnet2"></td> <td class="position_bg" width="63" id="subnet3"></td> <td class="position_bg" width="63" id="subnet4"></td> </tr><tr height="30"> <td class="align_right"></td> <td class="exponent_bg" width="200" id="hostbin"></td> <td class="exponent_bg" width="63" id="hostbin1"></td> <td class="exponent_bg" width="63" id="hostbin2"></td> <td class="exponent_bg" width="63" id="hostbin3"></td> <td class="exponent_bg" width="63" id="hostbin4"></td> </tr> <tr height="30"> <td class="align_right"></td> <td class="position_bg" width="200" id="subnetbin"></td> <td class="position_bg" width="63" id="subnetbin1"></td> <td class="position_bg" width="63" id="subnetbin2"></td> <td class="position_bg" width="63" id="subnetbin3"></td> <td class="position_bg" width="63" id="subnetbin4"></td> </tr> <tr height="30"> <td class="align_right" id="bit"></td> <td class="exponent_bg" id="fipAddress" width="200"></td> <td class="exponent_bg" width="63"><input name="fipAddress1" type="text" id="fipAddress1" size="8" maxlength="3"/></td> <td class="exponent_bg" width="63"><input name="fipAddress2" type="text" id="fipAddress2" size="8" maxlength="3"/></td> <td class="exponent_bg" width="63"><input name="fipAddress3" type="text" id="fipAddress3" size="8" maxlength="3"/></td> <td class="exponent_bg" width="63"><input name="fipAddress4" type="text" id="fipAddress4" size="8" maxlength="3"/></td> </tr> <tr height="30"> <td class="align_right" id="bit"></td> <td class="position_bg" id="lipAddress" width="200"></td> <td class="position_bg" width="63"><input name="lipAddress1" type="text" id="lipAddress1" size="8" maxlength="3" class="numbersOnly"/></td> <td class="position_bg" width="63"><input name="lipAddress2" type="text" id="lipAddress2" size="8" maxlength="3" class="numbersOnly"/></td> <td class="position_bg" width="63"><input name="lipAddress3" type="text" id="lipAddress3" size="8" maxlength="3" class="numbersOnly"/></td> <td class="position_bg" width="63"><input name="lipAddress4" type="text" id="lipAddress4" size="8" maxlength="3" class="numbersOnly"/></td> </tr> <tr height="30"> <td class="align_right" id="bit"></td> <td class="exponent_bg" id="baAddress" width="200"></td> <td class="exponent_bg" width="63"><input name="baAddress1" type="text" id="baAddress1" size="8" maxlength="3" class="numbersOnly"/></td> <td class="exponent_bg" width="63"><input name="baAddress2" type="text" id="baAddress2" size="8" maxlength="3" class="numbersOnly"/></td> <td class="exponent_bg" width="63"><input name="baAddress3" type="text" id="baAddress3" size="8" maxlength="3" class="numbersOnly"/></td> <td class="exponent_bg" width="63"><input name="baAddress4" type="text" id="baAddress4" size="8" maxlength="3" class="numbersOnly"/></td> </tr> <tr height="30"> <td class="align_right" id="bit"></td> <td class="position_bg" id="nnetAddress" width="200"></td> <td class="position_bg" width="63"><input name="nnetAddress1" type="text" id="nnetAddress1" size="8" maxlength="3" class="numbersOnly"/></td> <td class="position_bg" width="63"><input name="nnetAddress2" type="text" id="nnetAddress2" size="8" maxlength="3" class="numbersOnly"/></td> <td class="position_bg" width="63"><input name="nnetAddress3" type="text" id="nnetAddress3" size="8" maxlength="3" class="numbersOnly"/></td> <td class="position_bg" width="63"><input name="nnetAddress4" type="text" id="nnetAddress4" size="8" maxlength="3" class="numbersOnly"/></td> </tr><tr><td>&nbsp;</td><td colspan="8" align="center"><table width="100%" border="0" cellspacing="0" cellpadding="0" class="shift_right"><tr><td colspan="2"><input type="submit" name="check" id="check" value="Check" /></td><td>&nbsp;</td><td colspan="2"><input type="submit" name="reset" id="reset" value="Reset" /></td><td>&nbsp;</td><td colspan="2"><input type="submit" name="new_nub" id="new_nub" value="New Number"/></td><td>&nbsp;</td></tr></table></td></tr> </table></td> </tr><div id="pannel" style="display:none;"><div class="cross"><span></span><a href="#" id="incorrect" ><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p></p></div></div><div id="pannel_2" style="display:none"><div class="cross_2"><span></span><a href="#" id="correct" ><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result_2"><p></p></div></div><script> $("a#incorrect").click(function ( event ) { $("#pannel").slideUp(1000); event.preventDefault(); $(this).hide(); });</script><script> $("a#correct").click(function ( event ) { $("#pannel_2").hide(); event.preventDefault(); $(this).hide(); });</script></table>';
$("#mainDiv").html(temp);

$(function(){
newBtnClickHandler();

$('#fipAddress1,#fipAddress2,#fipAddress3,#fipAddress4,#lipAddress1,#lipAddress2,#lipAddress3,#lipAddress4,#baAddress1,#baAddress2,#baAddress3,#baAddress4,#nnetAddress1,#nnetAddress2,#nnetAddress3,#nnetAddress4').focus(function(){

$("#pannel").css("display","none");
$('#fipAddress1,#fipAddress2,#fipAddress3,#fipAddress4,#lipAddress1,#lipAddress2,#lipAddress3,#lipAddress4,#baAddress1,#baAddress2,#baAddress3,#baAddress4,#nnetAddress1,#nnetAddress2,#nnetAddress3,#nnetAddress4').css("color","black");	

	
})



/*$('#netaddbin1,#netaddbin2,#netaddbin3,#netaddbin4').keypress(function(key)
 {
	 $("#pannel").css("display","none");
	var k = key.charCode;
	if(k == 48 || k == 49 || k == 0)  
	{
	return true;
	}
	else
	{			
	return false;
	}
});*/


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

$(".position_bg").focus(function() {
	var fieldid2= this.id;	
	$('#'+fieldid2).css("color","black");
	$('#'+fieldid2).keydown(function(event) { restrictNonnumeric(event);});
	$("#pannel").css("display","none");
	
	
});


$(".exponent_bg input").focus(function() {
	var fieldid= this.id;	
	$('#'+fieldid).css("color","black");
	$('#'+fieldid).keydown(function(event) { restrictNonnumeric(event);});
	$("#pannel").css("display","none");
	
});


$('#fipAddress1,#fipAddress2,#fipAddress3,#fipAddress4,#lipAddress1,#lipAddress2,#lipAddress3,#lipAddress4,#baAddress1,#baAddress2,#baAddress3,#baAddress4,#nnetAddress1,#nnetAddress2,#nnetAddress3,#nnetAddress4').keypress(function(key)
 {
	 $("#pannel").css("display","none");
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
	$("#pannel").css("display","none");
	/*$("input#netaddbin1").attr("value","");
	$("input#netaddbin2").attr("value","");
	$("input#netaddbin3").attr("value","");
	$("input#netaddbin4").attr("value","");	
	$("input#netadddeci1").attr("value","");
	$("input#netadddeci2").attr("value","");
	$("input#netadddeci3").attr("value","");
	$("input#netadddeci4").attr("value","");	*/
	netAddress = [];
	subnetMask = [];
	hostbin = [];
	subnetbin = [];
	fipAddress = [];
	lipAddress = [];
	baAddress = [];
	nnetAddress = [];

	/*//var randomTwo = new Array (10,172);
	//var hostrandom = Math.round(Math.random()*(randomTwo.length+6));// Make it 8/16 chance for 255
	if (hostrandom==172) {
		hostAddress[1] = Math.round(Math.random()*(31-16)+16);
	} else {
		
		hostAddress[1] = Math.round(Math.random()*255);
	
	}*/
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
	/*if (rand<=7) {
		rand = 0;
	} else {
		rand = rand-7;
	}*/
	// Adjust for everything else
	subnetMask[2] = validMasks[rand];
	
	// Ignore 255 for the last octet
	
	var rand2 = Math.round(Math.random()*6);
	subnetMask[3] = subnetMask[2] == 255 ? validMasks[rand2] : 0;
	
	$("#host1").html(netAddress[0]);
	$("#host2").html(netAddress[1]);
	$("#host3").html(netAddress[2]);
	$("#host4").html(netAddress[3]);
	
	$("#subnet1").html(subnetMask[0]);
	$("#subnet2").html(subnetMask[1]);
	$("#subnet3").html(subnetMask[2]);
	$("#subnet4").html(subnetMask[3]);	
	
/*	netAddress = [];
	// Calculate the network address
	for (var i = 0; i<4; i++) {
		netAddress[i] = ((netAddress[i] & 0xFF) & (subnetMask[i] & 0xFF)) & 0xFF;
	}
	*/
		
	for(i=1;i<=4;i++)
	{
	$("#hostbin"+i).html(dec2bin($("#host"+i).text()));
	}
	for(i=1;i<=4;i++)
	{
	$("#subnetbin"+i).html(dec2bin($("#subnet"+i).text()));
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


$("#reset,#new_nub").live("click",function(){	
	
	$("input#fipAddress1").attr("value","");
	$("input#fipAddress2").attr("value","");
	$("input#fipAddress3").attr("value","");
	$("input#fipAddress4").attr("value","");	
	$("input#baAddress1").attr("value","");
	$("input#baAddress2").attr("value","");
	$("input#baAddress3").attr("value","");
	$("input#baAddress4").attr("value","");
	$("input#lipAddress1").attr("value","");
	$("input#lipAddress2").attr("value","");
	$("input#lipAddress3").attr("value","");
	$("input#lipAddress4").attr("value","");	
	$("input#nnetAddress1").attr("value","");
	$("input#nnetAddress2").attr("value","");
	$("input#nnetAddress3").attr("value","");
	$("input#nnetAddress4").attr("value","");	
	
	});

$("#reset").click(function(){resetHandler();})

function resetHandler()
{
	
$(".exponent_bg input").attr("value","");
$(".position_bg input").attr("value","");}


	

$("#check").click(function(){
			success=0;
	for (var i = 0; i<4; i++){
		var newcount=i+1;
		if($("#fipAddress"+newcount).attr("value") != fipAddress[i]){	
		$("#fipAddress"+newcount).css("color","red");	
			}
		
		else
						{
							$("#fipAddress"+newcount).css("color","black");

							success++;				
							
						}


		if($("#lipAddress"+newcount).attr("value") != lipAddress[i]){	
			$("#lipAddress"+newcount).css("color","red");	
		}

		else
		{success++;	
			$("#lipAddress"+newcount).css("color","black");	
		}


		if($("#baAddress"+newcount).attr("value") != baAddress[i]){	
			$("#baAddress"+newcount).css("color","red");	
		}

		else
		{success++;	
			$("#baAddress"+newcount).css("color","black");	
		}

		if($("#nnetAddress"+newcount).attr("value") != nnetAddress[i]){	
			$("#nnetAddress"+newcount).css("color","red");	
		}

		else
		{success++;	
			$("#nnetAddress"+newcount).css("color","black");	
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


$("#reset").live("click",function(){	
	
	$("#pannel").hide();
	$("#pannel_1").hide();	
	
	});


