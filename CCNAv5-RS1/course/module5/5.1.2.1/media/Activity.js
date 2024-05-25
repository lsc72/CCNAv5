var Activity = function(data)
{
	this.initialize();	
	
	var div = document.createElement("div");
	div.id = "animDiv";
	div.style.cssText = "position:absolute;top:0;left:0;visibility:hidden;";
	$('#flashContent').append(div);
	var dom = new createjs.DOMElement(div);
	this.addChild(dom);
	var temp;
	temp = '<div id="wrapper"><div id="slidetitile">></div><div id="flowbg"><img width="297" height="35" src="flowbg.png"></div><div id="imageflow"></div><div id="year"></div><div id="standard"></div><div id="description"></div><div id="tablediv" onscroll="OnScrollDiv2()" ><table cellspacing="0" cellpadding="0"><tr><td><span id="year1" class="row1"></span></td><td><span id="year2" class="row1"></span></td><td><span id="year3" class="row1"></span></td><td><span id="year4" class="row1"></span></td><td><span id="year5" class="row1"></span></td><td><span id="year6" class="row1"></span></td><td><span id="year7" class="row1"></span></td><td><span id="year8" class="row1"></span></td><td><span id="year9" class="row1"></span></td><td><span id="year10" class="row1"></span></td><td><span id="year11" class="row1"></span></td></tr><tr><td><span id="C1R1" class="row2"></span></td><td><span id="C1R2" class="row2"></span></td><td><span id="C1R3" class="row2"></span></td><td><span id="C1R4" class="row2"></span></td><td><span id="C1R5" class="row2"></span></td><td><span id="C1R6" class="row2"></span></td><td><span id="C1R7" class="row2"></span></td><td><span id="C1R8" class="row2"></span></td><td><span id="C1R9" class="row2"></span></td><td><span id="C1R10" class="row2"></span></td><td><span id="C1R11" class="row2"></span></td></tr><tr><td><span id="C1R12" class="row3"></span></td><td><span id="C1R13" class="row3"></span></td><td><span id="C1R14" class="row3"></span></td><td><span id="C1R15" class="row3"></span></td><td><span id="C1R16" class="row3"></span></td><td><span id="C1R17" class="row3"></span></td><td><span id="C1R18" class="row3"></span></td><td><span id="C1R19" class="row3"></span></td><td><span id="C1R20" class="row3"></span></td><td><span id="C1R21" class="row3"></span></td><td><span id="C1R22" class="row3"></span></td></tr></table></div><div id="slidebar"><div id="pointer"></div></div><div id="yeardiv"><span><b>1973 &nbsp; 1980 &nbsp; 1983 &nbsp; 1985&nbsp; 1990&nbsp; 1993&nbsp; 1995&nbsp; 1998&nbsp; 1999&nbsp; 2002&nbsp; 2006</b></span></div><div id="wrapper1" onscroll="OnScrollDiv()"><div id="div1"></div></div><div id="ID_instruction"></div></div>';
	$("#animDiv").html(temp);
	$("#slidetitile").html($(data).find("component#ID_title").text());
	$("#year").html($(data).find("component#ID_year").text());
	$("#standard").html($(data).find("component#ID_standard").text());
	$("#description").html($(data).find("component#ID_description").text());
	$("#year1").html($(data).find("component#yr1").text());
	$("#year2").html($(data).find("component#yr2").text());
	$("#year3").html($(data).find("component#yr3").text());
	$("#year4").html($(data).find("component#yr4").text());
	$("#year5").html($(data).find("component#yr5").text());
	$("#year6").html($(data).find("component#yr6").text());
	$("#year7").html($(data).find("component#yr7").text());
	$("#year8").html($(data).find("component#yr8").text());
	$("#year9").html($(data).find("component#yr9").text());
	$("#year10").html($(data).find("component#yr10").text());
	$("#year11").html($(data).find("component#yr11").text());	
	$("#C1R1").html($(data).find("component#ID_C1R1").text());
	$("#C1R2").html($(data).find("component#ID_C1R2").text());
	$("#C1R3").html($(data).find("component#ID_C1R3").text());
	$("#C1R4").html($(data).find("component#ID_C1R4").text());
	$("#C1R5").html($(data).find("component#ID_C1R5").text());
	$("#C1R6").html($(data).find("component#ID_C1R6").text());
	$("#C1R7").html($(data).find("component#ID_C1R7").text());
	$("#C1R8").html($(data).find("component#ID_C1R8").text());
	$("#C1R9").html($(data).find("component#ID_C1R9").text());
	$("#C1R10").html($(data).find("component#ID_C1R10").text());
	$("#C1R11").html($(data).find("component#ID_C1R11").text());	
	$("#C1R12").html($(data).find("component#ID_C1R12").text());
	$("#C1R13").html($(data).find("component#ID_C1R13").text());
	$("#C1R14").html($(data).find("component#ID_C1R14").text());
	$("#C1R15").html($(data).find("component#ID_C1R15").text());
	$("#C1R16").html($(data).find("component#ID_C1R16").text());
	$("#C1R17").html($(data).find("component#ID_C1R17").text());
	$("#C1R18").html($(data).find("component#ID_C1R18").text());
	$("#C1R19").html($(data).find("component#ID_C1R19").text());
	$("#C1R20").html($(data).find("component#ID_C1R20").text());
	$("#C1R21").html($(data).find("component#ID_C1R21").text());
	$("#C1R22").html($(data).find("component#ID_C1R22").text());
	$("#ID_instruction").html($(data).find("component#ID_inst").text());



}

var p = Activity.prototype = new createjs.Container();



function DisplayCurrentScroll () 
{
	var div = document.getElementById ("wrapper1");	
	var divwidth = $("#tablediv")[0].scrollWidth;
	
	$("#div1").css("width", divwidth);
	
	var scroll_percentage = div.scrollLeft * 100 / divwidth;
	var pointer_left=380*scroll_percentage/100;
	var envelop_hight=100*scroll_percentage/100;
	var floebgheight=104*scroll_percentage/100;
	
	 $("#tablediv").scrollLeft($("#wrapper1").scrollLeft());
	 //$("#wrapper1").scrollLeft($("#tablediv").scrollLeft());
	
	
	$("#pointer").css("left", pointer_left);
	if(envelop_hight>8)
	{
		$("#imageflow").css("height", envelop_hight);
		$("#imageflow").css("top", 85-envelop_hight/2);
	}
	
	if(floebgheight>20)
	{	
		$("#flowbg").css("height", floebgheight+20);
		$("#flowbg").css("top", 77-floebgheight/2);
		$("#flowbg img").css("height", floebgheight+20);	
	}
	    
}


function DisplayCurrentScroll2 () 
{
	var div = document.getElementById ("tablediv");	
	var divwidth = $("#tablediv")[0].scrollWidth;
	
	$("#div1").css("width", divwidth);
	
	var scroll_percentage = div.scrollLeft * 100 / divwidth;
	var pointer_left=380*scroll_percentage/100;
	var envelop_hight=100*scroll_percentage/100;
	var floebgheight=104*scroll_percentage/100;
	
	 //$("#tablediv").scrollLeft($("#wrapper1").scrollLeft());
	// $("#wrapper1").scrollLeft($("#tablediv").scrollLeft());
	
	
	$("#pointer").css("left", pointer_left);
	if(envelop_hight>8)
	{
		$("#imageflow").css("height", envelop_hight);
		$("#imageflow").css("top", 85-envelop_hight/2);
	}
	
	if(floebgheight>20)
	{	
		$("#flowbg").css("height", floebgheight+20);
		$("#flowbg").css("top", 77-floebgheight/2);
		$("#flowbg img").css("height", floebgheight+20);	
	}
	    
}




function OnScrollDiv () 
{
	DisplayCurrentScroll ();
}

function OnScrollDiv2 () 
{
	DisplayCurrentScroll2 ();
}





