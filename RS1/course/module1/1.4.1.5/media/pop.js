
var popover = function(data)
{
	
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	$("#mainDiv").append(animDiv);	
	
	var temp = "";
	temp ='<div id="maincontainer" ><div id="imagecontainer">';
	temp +='<div id="polygon"><img src="1.4.1.5.jpg" width="400" height="390" usemap="#map" border="0"/>'
	temp +='<map id="map" name="map"><area shape="poly" coords="169,187,157,158,167,147,174,145,186,148,192,155,202,162,212,171,230,172,234,182,235,195,233,207,223,214,214,221,196,229,180,221,171,225,162,225,153,226,141,227,129,221,117,213,107,203,105,187,110,174,122,169,129,163,135,156,145,153,151,153,158,157,188,178" href="#" id="btn7" />'
	temp +='<area shape="poly"  coords="66,101,79,91,91,88,98,94,108,102,119,110,126,116,136,116,142,122,144,134,144,143,133,147,122,154,112,160,97,169,86,164,77,170,68,168,55,172,44,168,37,163,25,157,18,149,12,139,13,125,22,117,30,113,38,105,51,95" href="#" id="btn6" />'
	temp +='<area shape="poly" coords="91,249,80,220,87,214,96,208,105,212,113,222,124,231,136,238,149,238,157,242,159,253,158,269,149,277,139,284,123,294,107,289,97,286,85,289,76,291,64,294,54,289,48,281,39,275,29,265,26,248,33,236,47,230,53,224,58,218,71,217,80,219" href="#" id="btn5" />'
	temp +='<area shape="poly" coords="203,329,191,300,198,294,205,288,216,289,224,295,233,301,245,311,254,315,270,324,269,345,263,357,248,364,236,374,219,369,208,368,196,370,183,373,165,373,154,362,146,357,137,344,136,328,144,317,156,311,165,300,182,295,192,299" href="#" id="btn4" />'
	temp +='<area shape="poly" coords="290,248,230,249,241,229,254,225,261,215,276,210,285,214,291,210,302,205,316,210,324,216,330,222,340,229,356,233,363,243,364,260,358,271,345,279,331,289,315,288,306,282,296,290,285,285,269,289,257,281,245,274,233,264,231,255,231,251,232,246,232,249" href="#" id="btn3" />'
	temp +='<area shape="poly" coords="281,169,300,169,312,173,321,170,325,165,336,168,348,173,361,168,368,159,380,155,382,145,386,130,381,117,365,114,354,108,343,99,334,90,324,85,313,91,303,99,292,93,280,100,272,111,260,114,250,127,251,145" href="#" id="btn2" />'
	temp +='<area shape="poly" coords="161,35,140,51,146,79,156,85,166,93,177,99,192,95,203,95,213,90,225,96,235,99,248,96,256,86,267,81,272,69,276,56,270,43,254,41,246,34,236,25,227,20,214,13,180,21,169,25" href="#" id="btn1" /></map><img src="textbox.png" width="272" height="150" id="textbox"/><img src="closeBtn.jpg" width="20" height="20" id="closeBtn"/>';
	temp +='<div id="ID_txt01"></div>';
	temp +='<div id="ID_txt02"></div>';
	temp +='<div id="ID_txt03"></div>';
	temp +='<div id="ID_txt04"></div>';
	temp +='<div id="ID_txt05"></div>';
	temp +='<div id="ID_txt06"></div>';
	temp +='<div id="ID_txt07"></div>';
	temp +='<div id="ID_btn01_body"></div><div id="ID_btn01_header"></div>';
	temp +='<div id="ID_btn02_body"></div><div id="ID_btn02_header"></div>';
	temp +='<div id="ID_btn03_body"></div><div id="ID_btn03_header"></div>';
	temp +='<div id="ID_btn04_body"></div><div id="ID_btn04_header"></div>';
	temp +='<div id="ID_btn05_body"></div><div id="ID_btn05_header"></div>';
	temp +='<div id="ID_btn06_body"></div><div id="ID_btn06_header"></div>';
	temp +='<div id="ID_btn07_body"></div><div id="ID_btn07_header"></div>';
	temp +='<img src="btn01.png"  id="btn1glow"/><img src="btn01.png"  id="btn2glow"/><img src="btn01.png"  id="btn3glow"/><img src="btn01.png"  id="btn4glow"/><img src="btn01.png"  id="btn5glow"/><img src="btn01.png"  id="btn6glow"/><img src="btn01.png"  id="btn7glow"/>';
	temp +='</div></div>';
	
	$("#animDiv").append(temp)
	$("#ID_txt01").html($(data).find("component#ID_txt01").text());
	$("#ID_txt02").html($(data).find("component#ID_txt02").text());
	$("#ID_txt03").html($(data).find("component#ID_txt03").text());
	$("#ID_txt04").html($(data).find("component#ID_txt04").text());
	$("#ID_txt05").html($(data).find("component#ID_txt05").text());
	$("#ID_txt06").html($(data).find("component#ID_txt06").text());
	$("#ID_txt07").html($(data).find("component#ID_txt07").text());
	$("#ID_btn01_body").html($(data).find("component#ID_btn01_body").text());
	$("#ID_btn01_header").html($(data).find("component#ID_btn01_header").text());
	$("#ID_btn02_body").html($(data).find("component#ID_btn02_body").text());
	$("#ID_btn02_header").html($(data).find("component#ID_btn02_header").text());
	$("#ID_btn03_body").html($(data).find("component#ID_btn03_body").text());
	$("#ID_btn03_header").html($(data).find("component#ID_btn03_header").text());
	$("#ID_btn04_body").html($(data).find("component#ID_btn04_body").text());
	$("#ID_btn04_header").html($(data).find("component#ID_btn04_header").text());
	$("#ID_btn05_body").html($(data).find("component#ID_btn05_body").text());
	$("#ID_btn05_header").html($(data).find("component#ID_btn05_header").text());
	$("#ID_btn06_body").html($(data).find("component#ID_btn06_body").text());
	$("#ID_btn06_header").html($(data).find("component#ID_btn06_header").text());
	$("#ID_btn07_body").html($(data).find("component#ID_btn07_body").text());
	$("#ID_btn07_header").html($(data).find("component#ID_btn07_header").text());
}

function resetpoup(){
	for(i=0;i<7;i++)
	{
		$("#ID_btn0"+i+"_body").css("display","none");
		$("#ID_btn0"+i+"_header").css("display","none");
	}
	}

$("#btn1,#ID_txt01,#btn1glow").live("click",function(){
	resetpoup();
	$("#textbox,#closeBtn,#btn1glow").css("display","block");
	$("#ID_btn01_body").css("display","block");
	$("#ID_btn01_header").css("display","block");
	
});
$("#btn2,#ID_txt02,#btn2glow").live("click",function(){
	resetpoup();
	$("#textbox,#closeBtn,#btn2glow").css("display","block");
	$("#ID_btn02_body").css("display","block");
	$("#ID_btn02_header").css("display","block");
	
});
$("#btn3,#ID_txt03,#btn3glow").live("click",function(){
	resetpoup();
	$("#textbox,#closeBtn,,#btn3glow").css("display","block");
	$("#ID_btn05_body").css("display","block");
	$("#ID_btn05_header").css("display","block");
	
});
$("#btn4,#ID_txt04,#btn4glow").live("click",function(){
	resetpoup();
	$("#textbox,#closeBtn,#btn4glow").css("display","block");
	$("#ID_btn03_body").css("display","block");
	$("#ID_btn03_header").css("display","block");
	
});
$("#btn5,#ID_txt05,#btn5glow").live("click",function(){
	resetpoup();
	$("#textbox,#closeBtn,#btn5glow").css("display","block");
	$("#ID_btn06_body").css("display","block");
	$("#ID_btn06_header").css("display","block");
	
});
$("#btn6,#ID_txt06,#btn6glow").live("click",function(){
	resetpoup();
	$("#textbox,#closeBtn,#btn6glow").css("display","block");
	$("#ID_btn03_body").css("display","block");
	$("#ID_btn03_header").css("display","block");
	
});
$("#btn7,#ID_txt07,#btn7glow").live("click",function(){
	resetpoup();
	$("#textbox,#closeBtn,#btn7glow").css("display","block");
	$("#ID_btn04_body").css("display","block");
	$("#ID_btn04_header").css("display","block");
	
});
$("#closeBtn").live("click",function(){
	for(i=1;i<8;i++)
	{
	$("#textbox,#closeBtn,#btn"+i+"glow").css("display","none");
	}
	resetpoup();
	
	});