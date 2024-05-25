var _data;
var val1,val2,val3,val4,val5,val6,val7,val8;

var decitobin = function(data)
{
	$("#title").html($(data).find("component#ID_title").text());
	$("#sub_title").html($(data).find("component#ID_txt01").text());
	$("#decival").html($(data).find("component#ID_txt02").text());
	$("#radix").html($(data).find("component#ID_txt07").text());
	$("#expo").html($(data).find("component#ID_txt03").text());
	$("#pos").html($(data).find("component#ID_txt04").text());
	$("#bit").html($(data).find("component#ID_txt05").text());
	$("#enter").html($(data).find("component#ID_txt06").text());
	
	$(".cross_2 span").html($(data).find("component#ID_CORRECT_TITLE").text());
	$(".result_2 p").html($(data).find("component#ID_CORRECT_BODY").text());
	
	$(".cross span").html($(data).find("component#ID_INCORRECT_TITLE").text());
	$(".result p").html($(data).find("component#ID_INCORRECT_BODY").text());
	
}




var temp;
temp = '<table width="704" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="715" align="left" id="title" valign="top"></td> <td width="500" align="center"><table width="452" border="0" cellspacing="1" cellpadding="1" class="top_gap"> <tr> <td></td> <td colspan="13"></td> </tr><tr><td class="top_gap"></td><td colspan="8"></td></tr> <tr> <td height="26" class="align_right" id="decival"></td><td colspan="8"><table width="101%" border="0" id="title_bg" cellspacing="0" cellpadding="0"> <tr> <td width="100%" height="31"><input type="text" name="show" id="show" readonly="readonly" /></td> </tr> </table></td> </tr> <tr><tr><td class="align_right" id="radix"></td> <td class="exponent_bg">2</td> <td class="exponent_bg">2</td> <td class="exponent_bg">2</td> <td class="exponent_bg">2</td> <td class="exponent_bg">2</td> <td class="exponent_bg">2</td> <td class="exponent_bg">2</td> <td class="exponent_bg">2</td></tr> <td class="align_right" id="expo"></td> <td class="position_bg">7</td> <td class="position_bg">6</td> <td class="position_bg">5</td> <td class="position_bg">4</td> <td class="position_bg">3</td> <td class="position_bg">2</td> <td class="position_bg">1</td> <td class="position_bg">0</td> </tr> <tr> <td class="align_right" id="pos"></td> <td class="exponent_bg">128</td> <td class="exponent_bg">64</td> <td class="exponent_bg">32</td> <td class="exponent_bg">16</td> <td class="exponent_bg">8</td> <td class="exponent_bg">4</td> <td class="exponent_bg">2</td> <td class="exponent_bg">1</td> </tr> <tr> <td class="align_right" id="bit"></td> <td class="input_bg"><input name="val1" type="text" id="val1" accesskey="1" size="2" maxlength="1"/></td> <td class="input_bg"><input name="val2" type="text" id="val2" accesskey="1" size="2" maxlength="1"/></td> <td class="input_bg"><input name="val3" type="text" id="val3" accesskey="1" size="2" maxlength="1"/></td> <td class="input_bg"><input name="val4" type="text" id="val4" accesskey="1" size="2" maxlength="1"/></td> <td class="input_bg"><input name="val5" type="text" id="val5" accesskey="1" size="2" maxlength="1"/></td> <td class="input_bg"><input name="val6" type="text" id="val6" accesskey="1" size="2" maxlength="1"/></td> <td class="input_bg"><input name="val7" type="text" id="val7" accesskey="1" size="2" maxlength="1"/></td> <td class="input_bg"><input name="val8" type="text" id="val8" accesskey="1" size="2" maxlength="1"/></td> </tr> <tr> <td>&nbsp;</td> <td colspan="8" class="align_center" id="enter"></td> </tr> <tr><td>&nbsp;</td><td colspan="8" align="center"><table width="100%" border="0" cellspacing="0" cellpadding="0" class="shift_right"> <tr> <td colspan="2"><input type="submit" name="check" id="check" value="Check" /></td> <td>&nbsp;</td> <td colspan="2"><input type="submit" name="reset" id="reset" value="Reset" /></td> <td>&nbsp;</td> <td colspan="2"><input type="submit" name="new_nub" id="new_nub" value="New Number" onclick="generaterandom(256)"/></td> <td>&nbsp;</td> </tr> </table></td></tr> </table></td> </tr><div id="pannel" style="display:none"><div class="cross"><span></span><a href="#" id="incorrect" ><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p></p></div></div><div id="pannel_2" style="display:none"><div class="cross_2"><span></span><a href="#" id="correct" ><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result_2"><p></p></div></div><script> $("a#incorrect").click(function ( event ) { $("#pannel").hide(); event.preventDefault(); $(this).hide(); });</script><script> $("a#correct").click(function ( event ) { $("#pannel_2").hide(); event.preventDefault(); $(this).hide(); });</script></table>';


$("#mainDiv").html(temp);


$(function(){
	
	generaterandom(256)
	

	$("#new_nub").click(function(){
		
		$("#val1").attr("value","");
		$("#val2").attr("value","");
		$("#val3").attr("value","");
		$("#val4").attr("value","");
		$("#val5").attr("value","");
		$("#val6").attr("value","");
		$("#val7").attr("value","");
		$("#val8").attr("value","");
		});


	$("#check").click(function(){
	
   val1 = $("input#val1").attr("value");
   val2 = $("input#val2").attr("value");
   val3 = $("input#val3").attr("value");
   val4 = $("input#val4").attr("value");
   val5 = $("input#val5").attr("value");
   val6 = $("input#val6").attr("value");
   val7 = $("input#val7").attr("value");
   val8 = $("input#val8").attr("value");
   
   if(val1&&val2&&val3&&val4&&val5&&val6&&val7&&val8!="")
   {
   
   var user = val1+val2+val3+val4+val5+val6+val7+val8;
   }
   else
   {
	
   }
   
   if(mainresult==user)
   {
	$("#pannel_2").show();
    }
	else
	{
	$("#pannel").show();
    }
	
	})
	
	$("#reset").click(function(){
		
 $("input#val1").attr("value","");
  $("input#val2").attr("value","");
   $("input#val3").attr("value","");
 $("input#val4").attr("value","");
  $("input#val5").attr("value","");
    $("input#val6").attr("value","");
   $("input#val7").attr("value","");
  $("input#val8").attr("value","");
		
		})
		

	
	
	});
	
	


var mainresult;

function generaterandom(limit)
{

var randomNumber = Math.floor(Math.random()*(limit+1));	
$("#show").attr("value",randomNumber);
change(randomNumber);
}

function isNum(args)
{
	args = args.toString();
	if (args.length == 0)
		return false;

	for (var i = 0;i<args.length;i++)
	{
		if (args.substring(i,i+1) < "0" || args.substring(i, i+1) > "9")
		{
			return false;
		}
	}

	return true;
}
function deciToBin(arg)
{
	
	var res1 = 999;
	var args = arg;
	while(args>1)
	{
		var arg1 = parseInt(args/2);
		var arg2 = args%2;
		args = arg1;
		if(res1 == 999)
		{
			res1 = arg2.toString();
		}
		else
		{
			res1 = arg2.toString()+res1.toString();
		}
	}
	if(args == 1 && res1 != 999)
	{
		res1 = args.toString()+res1.toString();
	}
	else if(args == 0 && res1 == 999)
	{
		res1 = 0;
	}
	else if(res1 == 999)
	{
		res1 = 1;
	}
	var ll = res1.length;
	
	while(ll%8 != 0)
	{
		res1 = "0"+res1;
		ll = res1.length;
	}	
	
	/*alert(res1);*/
	
		
	mainresult = res1;
	
}


function change(randomNumber)
{
	if(isNum(randomNumber))
	{
		var result = deciToBin(randomNumber);
		
	}
	
}


 $("#reset").click(function ( event ) {
    $("#pannel").hide();
    });
	
$("#reset").click(function ( event ) {
    $("#pannel_2").hide();
     });


 $("#new_nub").click(function ( event ) {
    $("#pannel").hide();
    });
	
$("#new_nub").click(function ( event ) {
    $("#pannel_2").hide();
     });


 $("#val1,#val2,#val3,#val4,#val5,#val6,#val7,#val8").click(function ( event ) {
    $("#pannel").hide();
    });
	
$("#val1,#val2,#val3,#val4,#val5,#val6,#val7,#val8").click(function ( event ) {
    $("#pannel_2").hide();
    });


$(document).ready(function() {
	
    $('#val1,#val2,#val3,#val4,#val5,#val6,#val7,#val8').keypress(function(key) {
		var k = key.charCode;
        //if(key.charCode < 48 || key.charCode  > 49 || key.charCode == 0) return false;
		//1alert(key.charCode);
		
		
		if(k == 48 || k == 49 || k == 0)  
		{
			
			return true;
		}
		else
		{			
			return false;
		}
		
	});
});
/*document.getElementById('val1').onkeypress = function(e){
  var c = e.which || e.keyCode;
  if((c < 48 || c > 49))
    return false;
	else if (c == 8)              // Catch IE backspace
        c.returnValue = true; 
};*/

