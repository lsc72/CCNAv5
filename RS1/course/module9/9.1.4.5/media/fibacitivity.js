var fibacitivity = function(data)
{
	$("#title").html($(data).find("component#ID_title").text());
	$("#ID_txt02").html($(data).find("component#ID_txt02").text());
	$("#ID_txt03").html($(data).find("component#ID_txt03").text());
	$("#ID_txt04").html($(data).find("component#ID_txt04").text());
	$("#ID_txt05").html($(data).find("component#ID_txt05").text());
	$(".cross span").html($(data).find("component#ID_CORRECT_TITLE").text());
	$(".result p").html($(data).find("component#ID_CORRECT_BODY").text());
	$(".cross_2 span").html($(data).find("component#ID_INCORRECT_TITLE").text());
	$(".result_2 p").html($(data).find("component#ID_INCORRECT_BODY").text());
	//var check=($(data).find("component#ID_btn01").text());
	//$("#check").attr("value",check);
	//var resetbut=($(data).find("component#ID_btn02").text());
	//$("#reset").attr("value",resetbut);

	
}




var temp='';
temp +='<div id="title"></div>';
temp +='<table border="0" cellspacing="0" cellpadding="2" valign="top" style="color:#ffffff;" id="title_bg"  ><tr ><td width="49" id="ID_txt02"></td><td width="200" id="ID_txt03"></td><td width="100" id="ID_txt04"></td><td width="72" id="ID_txt05"><b>Prefix Notation(/x)</b></td></tr></table>';

temp +='<table border="0" cellspacing="0" cellpadding="0" valign="top" id="subtable"><tr style="background-color:#E9E7E8;color:#000000;height:30px;"><td width="49">250</td> <td width="200"><b>11111111.11111111.11111111.00000000</b></td><td width="100"><b>255.255.255.0</b></td> <td width="72"><b>/24</b></td></tr>   <tr style="background-color:#D3D1D2;color:#000000;height:30px;" ><td>25</td> <td><input type="text" id="subnetMaskBin1" class="subnetMaskBin" maxlength="35" onkeypress="subnetMaskBin(event)" /></td> <td><input type="text"  maxlength="15"   id="subnetMaskDec1" class="subnetMaskDec" onkeypress="subnetMaskDec(event)" /></td> <td><input type="text" maxlength="3" id="prefixNotation1" onkeypress="prefixNotation(event)" class="prefixNotation"/></td></tr> <tr style="background-color:#E9E7E8;color:#000000;height:30px;"><td>1000</td> <td><input type="text" id="subnetMaskBin2" class="subnetMaskBin" maxlength="35" onkeypress="subnetMaskBin(event)" /></td> <td><input type="text"  id="subnetMaskDec2" class="subnetMaskDec" maxlength="15" onkeypress="subnetMaskDec(event)"  /></td> <td><input type="text" maxlength="3" class="prefixNotation" id="prefixNotation2" onkeypress="prefixNotation(event)"/></td></tr>  <tr style="background-color:#D3D1D2;color:#000000;height:30px;"><td>75</td> <td><input type="text" id="subnetMaskBin3" class="subnetMaskBin" maxlength="35" onkeypress="subnetMaskBin(event)" /></td> <td><input type="text" maxlength="15" class="subnetMaskDec" id="subnetMaskDec3"onkeypress="subnetMaskDec(event)" /></td> <td><input type="text" maxlength="3" class="prefixNotation" id="prefixNotation3" onkeypress="prefixNotation(event)"/></td></tr>  <tr style="background-color:#E9E7E8;color:#000000;height:30px;"><td>10</td> <td><input type="text" id="subnetMaskBin4" class="subnetMaskBin" maxlength="35" onkeypress="subnetMaskBin(event)" /></td> <td><input type="text"  maxlength="15" onkeypress="subnetMaskDec(event)" id="subnetMaskDec4" class="subnetMaskDec"/></td> <td><input type="text" maxlength="3" id="prefixNotation4" class="prefixNotation" onkeypress="prefixNotation(event)"/></td></tr>  <tr style="background-color:#D3D1D2;color:#000000;height:30px;"><td>500</td> <td><input type="text" id="subnetMaskBin5" class="subnetMaskBin" maxlength="35" onkeypress="subnetMaskBin(event)" /></td> <td><input type="text" maxlength="15" class="subnetMaskDec"id="subnetMaskDec5" onkeypress="subnetMaskDec(event)" /></td> <td><input type="text" maxlength="3" class="prefixNotation" id="prefixNotation5" onkeypress="prefixNotation(event)"/></td></tr></table>';

temp +='<input  type="submit" id="check" value="Check" class="button_add" style="margin-left:249px;"/>';
temp +='<input type="submit" id="reset"  value="Reset" class="button_add" style="margin-left:50px;" />';

temp +='<div id="pannel" style="display:none"><div id="ID_CORRECT_TITLE"></div><div id="ID_CORRECT_BODY"></div><div class="cross"><span></span><a href="#" id="incorrect" ><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p></p></div></div><div id="pannel2" style="display:none"><div id="ID_INCORRECT_TITLE"></div><div id="ID_INCORRECT_BODY"></div><div class="cross_2"><span></span><a href="#" id="correct" ><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result_2"><p></p></div></div><script> $("a#incorrect").click(function ( event ) { $("#pannel").hide(); event.preventDefault(); $(this).hide(); });</script><script> $("a#correct").click(function ( event ) { $("#pannel2").hide(); event.preventDefault(); $(this).hide(); });</script>';


$("#mainDiv").html(temp);

function subnetMaskBin(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-1\b\t]|\./;
  if( !regex.test(key) && (!(key == 8  ||  key == 27  || key == 46  || key == 37 || key == 39 )) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
function subnetMaskDec(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9\b\t]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

function prefixNotation(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /^[//0-9\b\t]/;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
$(function(){$("#check").live("click",function(){ansArray();});});
$(function(){$("#reset").live("click",function(){resetFunc();});});


 $("#reset,.subnetMaskBin,.subnetMaskDec,.prefixNotation").click(function ( event ) {
    $("#pannel").hide();
    });
	
$("#reset,.subnetMaskBin,.subnetMaskDec,.prefixNotation").click(function ( event ) {
    $("#pannel2").hide();
     });



function ansArray(){
	var input =new Array();
	var answers = new Array(  ["11111111.11111111.11111111.00000000", "255.255.255.0", "/24"],
							  ["11111111.11111111.11111111.11100000", "255.255.255.224", "/27"],
							  ["11111111.11111111.11111100.00000000", "255.255.252.0", "/22"],
							  ["11111111.11111111.11111111.10000000", "255.255.255.128", "/25"],
							  ["11111111.11111111.11111111.11110000", "255.255.255.240", "/28"],
							  ["11111111.11111111.11111110.00000000", "255.255.254.0", "/23"]);
		for(var m=1;m<6;m++){
			var subnetBin=$("#subnetMaskBin"+m).val();
			var subnetDec=$("#subnetMaskDec"+m).val();
			var prefixNotation=$("#prefixNotation"+m).val();
			if((subnetBin==answers[m][0])&&(subnetDec==answers[m][1])&&(prefixNotation==answers[m][2])){
				  	$("#pannel").show();
					$("#pannel2").hide();
					var subnetBin="";
					var subnetDec="";
					var prefixNotation="";
				}
		   else{
				    $("#pannel2").show();
					$("#pannel").hide();
				   return false;
		       }
		}
	}
	
function resetFunc(){
		for(var m=1;m<6;m++){
			$("#subnetMaskBin"+m).attr("value","");
			$("#subnetMaskDec"+m).attr("value","");
			$("#prefixNotation"+m).attr("value","");
		}
	}
		


