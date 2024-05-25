var asciitobin = function(data)
{
	
var asciidiv = document.createElement("div");
asciidiv.id="asciidiv";
mainDiv.appendChild(asciidiv);	


var temp='';

temp +='<div id="ID_s1_title"></div>'
temp +='<table width="26%" border="0" id="title_bg" cellspacing="0" cellpadding="0"> <tr> <td height="40" id="ID_s1_txt01"></td> </tr> </table>';
temp +='<table width="73%" border="0" id="title_bg2" cellspacing="0" cellpadding="0"> <tr> <td height="40" id="ID_s1_txt02"></td> </tr> </table>';
temp += '<table width="26%" border="0" id="textbox" cellspacing="0" cellpadding="0"> <tr> <td height="40"><input id="key" type="text" maxlength="5" /></td> </tr> </table>';
temp +='<table width="73%" border="0" id="textbox1" cellspacing="0" cellpadding="0"> <tr> <td height="40"><input id="valuePair" type="text"  readonly="readonly" /></td> </tr> </table>'; 
temp +='<input  type="button" value="" id="translate" class="button_add"  style="margin-left:10px;padding-bottom:4px;"/>';
temp +='<input type="button" id="clear" value="" class="button_add" style="margin-left:50px;padding-bottom:4px;" />';
temp +='<div id="ID_s1_inst"></div>';
$("#asciidiv").html(temp);
$("#ID_s1_title").html($(data).find("component#ID_s1_title").text());
$("#ID_s1_inst").html($(data).find("component#ID_s1_inst").text());
$("#ID_s1_txt01").html($(data).find("component#ID_s1_txt01").text());
$("#ID_s1_txt02").html($(data).find("component#ID_s1_txt02").text());

var clear=($(data).find("component#ID_s1_btn02").text());
clear = clear.split("<b>");
clear = clear[1].split("</b>");

$("#clear").attr("value",clear[0]);

var translate=($(data).find("component#ID_s1_btn01").text());
translate = translate.split("<b>");
translate = translate[1].split("</b>");

$("#translate").attr("value",translate[0]);
}

$(function(){$("#translate").live("click",function(){asciitobinary();});});

function asciitobinary()
{
	
	var bin = "";
	var binCon = "";
	var iNumber;
	var valuePair;
	key=document.getElementById("key");
	value=key.value;

		
	for(var i=0;i<value.length;i++){
		
			//var inputValue = value.substr(i,1);
		
			//iNumber=inputValue.charCodeAt(i);
		iNumber=value.charCodeAt(i);
			
				while (iNumber>0) {
						if (iNumber%2) {
							
							bin = "1"+bin;
							
						} else {
							bin = "0"+bin;
						}
						iNumber = Math.floor(iNumber/2);
				}
			
			// left pad with zeros 
			while (bin.length<8) { 
			bin = "0"+bin; 
			}
			binCon=binCon+bin;
			bin="";
	
			}
		
		
		$("#valuePair").attr("value",binCon);
		//$("#valuePair").style.cursor = "";
		
		$(function(){$("#clear").click(function()
		{
			$("#key").attr("value","");
			$("#valuePair").attr("value","");
			});
			});
}

	
var buildTitle = function(_xmlData,_dataObject)
	{
		
	
	}