// JavaScript Document for Syntax Checker

var str;
var Data;
var size;
var dObject;
var j=0;

var SyntaxChecker = function (_xmlData,_dataObject)
{
	var temp ='';
	if(_dataObject.texts.length!=0)
	{
		var heading = $(_xmlData).find("component#"+_dataObject.texts[0].compId).text();
		if(heading)
		{
			width = _dataObject.texts[0].width;
			height = _dataObject.texts[0].height;
			x = _dataObject.texts[0].x;
			y = _dataObject.texts[0].y;
			v = _dataObject.texts[0].size;
			al = _dataObject.texts[0].textAlign;
			title = heading;
			temp +='<div id="titleH" style="position:absolute;width:'+width+'px;height:'+height+'px;left:'+x+'px;top:'+y+	'px;text-align:'+al+	';font-size:'+v+	'px;">'+title+'</div>'
		}
	}
	
	
	Data = _xmlData;
	dObject = _dataObject;
	
	
	temp +='<div id="wrapper_syntaxcheck">';
	temp +='<div id="header_syntaxcheck"></div>';
	temp +='<div id="middle_syntaxcheck">';
	temp +='<div class="spacer_top_syntaxcheck"></div>';  	
	temp +='<div id="middle_F_syntaxcheck">';
	temp +='<div class="spacer_syntaxcheck"></div>';
	temp +='<div id="terminal_syntaxcheck">';
	temp +='<div id="main_syntaxcheck">';
	temp +='<div id="DivMain"></div>';
	temp +='</div>';
	temp +='</div>';
	temp +='</div>';
	temp +='<div class="spacer_new_syntaxcheck"></div>';
	temp +='<div id="footerbuttons_syntaxcheck">';    
	temp +='<div id="resetcontainer"><input type="reset" id="reset" value="Reset" /></div>';
	temp +='<div id="showcontainer"><input type="submit" id="show" value="Show Me" onclick="showMe();"/></div>';
	temp +='<div id="showallcontainer" rel="false"><input type="submit" id="showall" value="Show All" onclick="showAll();" /></div>';
	temp +='<div></div>';
	temp +='<div></div>';
	temp +='</div>';
	temp +='</div>';
	temp +='<div id="footer_syntaxcheck"></div>';
	temp +='</div>';
    $("#mainDiv").html(temp);
	
	if($(Data).find("existingcommands").length > 0)
	{
	var strq = "<div id='ec' class='txtareaLeft' style='padding-bottom:20px;'>"+$(_xmlData).find("existingcommands").text()+"</div>";
	$('#DivMain').html(strq);
	}
	str = '<input type="text" id="val_1" class="txtLeft" size="'+$(_xmlData).find("#cmd1").attr("prompt").length+'" readonly="readonly"/><input type="text" id="ans_1"  class="txtRight" autofocus="autofocus" onkeydown="findbuuton1(event,this.id,this.value)">';
	$("#ans_1").focus();
	$('#DivMain').append(str);
	size = $(_xmlData).find("component").children().size();
	$("#val_1").val($(_xmlData).find("#cmd1").attr("prompt"));
textboxsize(1);
resetFlags();
}

var _ans = '';
function findbuuton1(e,id,ans)
{ 
	if (e.keyCode == 13)
	{
	 
			Nid=id;
			id = id.split("_");
			var str = id[0];
			var i=id[1];			

			$("#ans_"+i).attr("readonly",true);
			$("#ans_"+i).removeClass("txtRight").addClass("txtRight1");
			
			$("#ans"+j+"_"+i).attr("readonly",true);
			$("#ans"+j+"_"+i).removeClass("txtRight").addClass("txtRight1");
			
			$("#Wans"+j+"_"+i).attr("readonly",true);
			$("#Wans"+j+"_"+i).removeClass("txtRight").addClass("txtRight1");
			
			$("#Wans_"+i).attr("readonly",true);
			$("#Wans_"+i).removeClass("txtRight").addClass("txtRight1");	
			j++;		

			
			if(ans=="")
			{ 
				str = '<input type="text" id="val'+j+'_'+i+'" class="txtLeft" size="'+$(Data).find("#cmd1").attr("prompt").length+'" readonly="readonly"/><input type="text" 			id="ans'+j+'_'+i+'" class="txtRight" autofocus="autofocus" onkeydown="findbuuton1(event,this.id,this.value)">';
				$("#ans"+j+"_"+i).focus();
				$('#DivMain').append(str);
				size = $(Data).find("component").children().size();
				$("#val"+j+"_"+i).val($(Data).find("#cmd"+i).attr("prompt"));
				empboxsize(i,j);
			}
			else
			{ 
				if(_ans == ans) return false;
				ans = rtrim(ans);
				id = id[1];				
				if (str.match("^ans"))
				 {   
  					$("input#ans_"+id+"[class=txtRight]").attr("value",ans); 
				 }
				 else if(str.match("^Wans"))
				 {  
					 var Nj = j
					  
					 $("input#Wans"+(--Nj)+"_"+id+"[class=txtRight]").attr("value",ans);
					  console.log("input#Wans"+Nj+"_"+id); 
					 $("input#Wans"+Nj+"_"+id).blur();
				 }
				
				action(id,ans);		
			}		
	}
	_ans = ans; 
}


function action(id,ans)
{
	
	var i=id
	
	$("#ans"+j+"_"+i).attr("readonly",true);
	$("#ans"+j+"_"+i).removeClass("txtRight").addClass("txtRight1");
			

		$("#ans_"+i).attr("readonly",true);
		$("#Wans_"+i).attr("readonly",true);
		
		$("#ans_"+i).removeClass("txtRight").addClass("txtRight1");
		
		$("#Wans"+j+"_"+i).attr("readonly",true);
		$("#Wans"+j+"_"+i).removeClass("txtRight").addClass("txtRight1");
		
		if(ans==$(Data).find("correctresponse#cr"+i).text())
			{
				if($(Data).find("#dr"+i).length > 0)
				{
					var strq ='<div id="deresp'+i+'">'+$(Data).find('#dr'+i).text()+'</div>';
					$('#DivMain').append(strq);

				}	
				if($(Data).find("#ins"+i).length > 0)
				{
					var strq ='<div id="inst'+i+'">'+$(Data).find('#ins'+i).text()+'</div>';
					$('#DivMain').append(strq);

				}			
				if($(Data).find("#cmd"+i).attr("node")!="end")
				{
					$("#DivMain").append('<input type="text" size="'+$(Data).find("#cmd"+(++i)).attr("prompt").length+'" id="val_'+(i)+'" class="txtLeft" readonly="readonly"/>																																									  					 <input type="text" id="ans_'+(i)+'" class="txtRight" autofocus="autofocus" 																																																											                     onkeydown="findbuuton1(event,this.id,this.value)">');
					$("#val_"+i).val($(Data).find("#cmd"+i).attr("prompt"));
					$("#ans"+i).focus();
					textboxsize(i);
				}
				
				else
				{
					if($('#DivMain > #instruction').length == 0 && $(Data).find("instruction#last").length > 0)
					{ 
						var strq ='<div id="instruction">'+$(Data).find('instruction#last').text()+'</div>';
						$('#DivMain').append(strq);
					}
				}
				
							
			}
			else
			{  
				var strq ='<div id="fb">'+$(Data).find('feedback#fb').text()+'</div>';
				strq +='<input type="text" id="Wval'+j+'_'+i+'" class="txtLeft" size="'+$(Data).find("#cmd1").attr("prompt").length+'" readonly="readonly"/>';
				strq +='<input type="text" id="Wans'+j+'_'+i+'" class="txtRight" autofocus="autofocus" onkeydown="findbuuton1(event,this.id,this.value)">';
				$('#DivMain').append(strq);
				$("#Wans"+j+"_"+i).focus();
				size = $(Data).find("component").children().size();
				$("#Wval"+j+"_"+i).val($(Data).find("#cmd"+i).attr("prompt")); 
				Wempboxsize(i,j);
			}
}



$("#reset").live("click",function(){
	$("#DivMain").html("");	
	resetFlags();
	if($(Data).find("existingcommands").length > 0)
	{
		var strq = "<div id='ec' class='txtareaLeft' style='padding-bottom:20px;'>"+$(Data).find("existingcommands").text()+"</div>";
		$('#DivMain').html(strq);
	}
		str = '<input type="text" id="val_1" class="txtLeft" size="'+$(Data).find("#cmd1").attr("prompt").length+'" readonly="readonly"/><input type="text" id="ans_1"            class="txtRight" autofocus="autofocus" onkeydown="findbuuton1(event,this.id,this.value)">';
		$("#ans_1").focus();
		$('#DivMain').append(str);
		size = $(Data).find("component").children().size();
		$("#val_1").val($(Data).find("#cmd1").attr("prompt"));
	textboxsize(1);
})

function resetFlags()
{
	counter = 0;
	_showAllFlag= _showMeFlag = false;
}

function textboxsize(i)
{
var boxValue = $("#val_"+i).val().length;
var boxSize = 7;
var maxNum = 155;
var NewSize = boxValue;
if (boxValue > boxSize)
{
$("#val_"+i).attr("size",NewSize);
}
if(NewSize==7)
{
$("#ans_"+i).attr("size","45");
}
else
{
NewSize1 = 53-NewSize;
$("#ans_"+i).attr("size",NewSize1);
}
}

function Wtextboxsize(i)
{
var WboxValue = $("#val_"+i).val().length;
var WboxSize = 7;
var WmaxNum = 155;
var WNewSize = WboxValue;
if (WboxValue > WboxSize)
{
$("#Wval_"+i).attr("size",WNewSize);
}
if(WNewSize==7)
{
$("#Wans_"+i).attr("size","45");
}
else
{
WNewSize1 = 53-WNewSize;
$("#Wans_"+i).attr("size",WNewSize1);
}
}


//$("#show").live("click",function(){	
function showMe()	{
	_showMe = true;
	var show = ($(".txtRight").attr("id"));
	
	if(typeof show==='undefined')  return false;

	var showM = show.split("_");

	$("input#"+show).val($(Data).find("#cr"+showM[1]).text());
	counter =id = parseInt(showM[1]);
	var ans = $("input#"+show).attr("value");
	action(id,ans)
}
//});

function checkUserEnteredData(){  
		var $lastAns = $('input[class = txtRight]');
		if($lastAns.length > 0){
			$lastAns.prev().remove();
			$lastAns.remove();
		} 
}

function getCurrentID(){ 
	var show= 0; 
	var arrID = [];
 
 	if($('input[class = txtRight]').length > 0){
		show = $('input[class = txtRight]').attr("id");
		if(typeof show ==='undefined')  return -1;
 	} 
 	 
	arrID = show.split("_"); 
	return arrID[1];
}

var counter = 0;
var _showAllFlag,_showMeFlag = false;

//$("#showall").live("click",function(){
function showAll(){

	if(_showAllFlag) return false;
		_showAllFlag = true;

	 counter = getCurrentID();
		if(counter < 0) return false;

	 

	checkUserEnteredData(); 
 
	var strq; 
	var ques = [];
	var answer = [];
	var deviceR = [];
	var ins = [];
	var insL = [];
	
	var a =$(Data).find("command").length;
	var b =$(Data).find("correctresponse").length;
	var c =$(Data).find("deviceresponse").length;
	var d =$(Data).find("instruction:not(#last)").length;
	var e =$(Data).find("instruction#last").length;
	var ans,i;
	
	for(i = 0;i<a;i++)
	{		
		ans = $(Data).find("command#cmd"+(i+1)).attr("prompt");		
		if(ans)	ques[i] = ans;
		console.log("ques["+i+"] --------------> "+ques[i] );		
	}	
	
	for(i =0;i<b;i++)
	{		
		ans = $(Data).find("correctresponse#cr"+(i+1)).text();
		if(ans)	answer[i] = ans;
		console.log("answer["+i+"] --------------> "+answer[i] );	
	}
	
	for(i =0;i<c;i++)
	{
		ans = $(Data).find("deviceresponse#dr"+(i+1)).text();
		if(ans)	deviceR[i] = ans;
		console.log("deviceR["+i+"] --------------> "+deviceR[i]);
	}	
	
	for(i =0;i<d;i++)
	{
		ans = $(Data).find("instruction#ins"+(i+1)).text();
		if(ans) ins[i]=ans;
		//console.log("ins["+i+"] --------------> "+deviceR[i]);
	}
	
	for(i =0;i<e;i++)
	{
		ans = $(Data).find("instruction#last").text();
		if(ans) insL.push(ans);
		//console.log("insL --------------> "+insL);
	}
 
	var i=0;
	 if(_showMeFlag === true || _showAllFlag === true) i = counter-1; 

	 //alert(i + " : id");
	for(i; i<b; i++)
	{
		
		strq = '<input type="text" class="txtLeft" size="'+ques[i].length+'"  value="'+ques[i]+'" readonly="readonly"/><input type="text"  size="'+answer[i].length+'"  value="'+answer[i]+'" class="txtRight" readonly="readonly">';		
		
		if(deviceR.length>0)
		{
		strq +='<div class="DR">'+deviceR[i]+'</div>';
		}	
		if(ins.length>0)
		{
			if(ins[i]) strq +='<div class="inst">'+ins[i]+'</div>';
		}	
		//console.log(strq);
		$('#DivMain').append(strq);
	}
	
	 
	if($('#DivMain > #instruction').length == 0 && $(Data).find("instruction").length > 0)
		{
		 str = "<div class='ins' class='txtareaLeft'>"+$(Data).find("instruction#last").text()+"</div>";
		}
	 
		$('#DivMain').append(str);
	
	
}	
//});

function empboxsize(i,j)
{
var boxValue = $("#val"+j+"_"+i).val().length;
var boxSize = 7;
var maxNum = 155;
var NewSize = boxValue;
if (boxValue > boxSize)
{
$("#val"+j+"_"+i).attr("size",NewSize);
}
if(NewSize==7)
{
$("#ans"+j+"_"+i).attr("size","45");
}
else
{
NewSize1 = 53-NewSize;
var a = $("#ans"+j+"_"+i);
$("#ans"+j+"_"+i).attr("size",NewSize1);
}
}

function Wempboxsize(i,j)
{
var boxValue = $("#Wval"+j+"_"+i).val().length;
var boxSize = 7;
var maxNum = 155;
var NewSize = boxValue;
if (boxValue > boxSize)
{
$("#Wval"+j+"_"+i).attr("size",NewSize);
}
if(NewSize==7)
{
$("#Wans"+j+"_"+i).attr("size","45");
}
else
{
NewSize1 = 53-NewSize;
var a = $("#Wans"+j+"_"+i);
$("#Wans"+j+"_"+i).attr("size",NewSize1);
}
}
function rtrim(str)
{
    return str.replace(/\s+$/,"");
}	


