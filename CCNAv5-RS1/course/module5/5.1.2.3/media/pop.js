
var popover = function(data)
{

	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	
	
	var temp = "";
	temp +='<div id="maincontainer"><div id="imagecontainer">';
	temp +='<div id="background"><img src="10_1_2_3.jpg" width="470" height="105" border="0"usemap="#Map" /><map name="Map"><area id="rect" shape="rect" coords="4,5,66,100" href="#"><area id="rect1" shape="rect" coords="65,6,131,100" href="#"><area id="rect2" shape="rect" coords="131,6,195,100" href="#"><area id="rect3" shape="rect" coords="195,5,260,100" href="#"><area id="rect4" shape="rect" coords="261,5,324,100" href="#"><area id="rect5" shape="rect" coords="325,5,391,100" href="#"> <area id="rect6" shape="rect" coords="391,5,464,100" href="#"></map><img id="textbox" src="textbox.jpg" width="465.05" height="83.7"/><img id="highlight" src="highlights.png" width="89" height="121"/><img id="highlight1" src="highlight.png" width="101" height="121"/></div>';
	temp +='<div id="ID_title"></div>';
	temp +='<div id="ID_txt01"></div>';
	temp +='<div id="ID_txtTitle1"></div><div id="ID_txtBody1"></div>';
	temp +='<div id="ID_txtTitle2"></div><div id="ID_txtBody2"></div>';
	temp +='<div id="ID_txtTitle3"></div><div id="ID_txtBody3"></div>';
	temp +='<div id="ID_txtTitle4"></div><div id="ID_txtBody4"></div>';
	temp +='<div id="ID_txtTitle5"></div><div id="ID_txtBody5"></div>';
	temp +='<div id="ID_txtTitle6"></div><div id="ID_txtBody6"></div>';
	temp +='<div id="ID_txtTitle7"></div><div id="ID_txtBody7"></div>';
	temp +='<div id="ID_txt02"></div><div id="ID_txt03"></div>';
	temp +='<div id="ID_txt04"></div><div id="ID_txt05"></div>';
	temp +='<div id="ID_txt06"></div><div id="ID_txt07"></div><div id="ID_txt08"></div>';
	temp +='<div id="ID_inst"></div>';
	temp +='</div></div>';	
	$("#animDiv").append(temp)
	$("#ID_title").html($(data).find("component#ID_title").text());
	$("#ID_txt01").html($(data).find("component#ID_txt01").text());
	$("#ID_txtTitle1").html($(data).find("component#ID_txtTitle1").text());
	$("#ID_txtTitle2").html($(data).find("component#ID_txtTitle2").text());
	$("#ID_txtTitle3").html($(data).find("component#ID_txtTitle3").text());
	$("#ID_txtTitle4").html($(data).find("component#ID_txtTitle4").text());
	$("#ID_txtTitle5").html($(data).find("component#ID_txtTitle5").text());
	$("#ID_txtTitle6").html($(data).find("component#ID_txtTitle6").text());
	$("#ID_txtTitle7").html($(data).find("component#ID_txtTitle7").text());
	$("#ID_txtBody1").html($(data).find("component#ID_txtBody1").text());
	$("#ID_txtBody2").html($(data).find("component#ID_txtBody2").text());
	$("#ID_txtBody3").html($(data).find("component#ID_txtBody3").text());
	$("#ID_txtBody4").html($(data).find("component#ID_txtBody4").text());
	$("#ID_txtBody5").html($(data).find("component#ID_txtBody5").text());
	$("#ID_txtBody6").html($(data).find("component#ID_txtBody6").text());
	$("#ID_txtBody7").html($(data).find("component#ID_txtBody7").text());
	$("#ID_txt02").html($(data).find("component#ID_txt02").text());
	$("#ID_txt03").html($(data).find("component#ID_txt03").text());
	$("#ID_txt04").html($(data).find("component#ID_txt04").text());
	$("#ID_txt05").html($(data).find("component#ID_txt05").text());
	$("#ID_txt06").html($(data).find("component#ID_txt06").text());
	$("#ID_txt07").html($(data).find("component#ID_txt07").text());
	$("#ID_txt08").html($(data).find("component#ID_txt08").text());
	$("#ID_inst").html($(data).find("component#ID_inst").text());
}

$("#rect,#rect1,#rect2,#rect3,#rect4,#rect5,#rect6").live("mouseover",function(){
	$("#rect,#rect1,#rect2,#rect3,#rect4,#rect5,#rect6").css("cursor","pointer");
	$("#ID_txt02,#ID_txt03,#ID_txt04,#ID_txt05,#ID_txt06,#ID_txt07,#ID_txt08").css("cursor","pointer")	
});
$("#ID_txt02,#rect").live("click",function(){
	clearText();
	$("#textbox,#ID_txtTitle1,#ID_txtBody1").css("display","block");
	$("#highlight").css("display","block");
	$("#highlight1").css("display","none");
	$("#highlight").css("left","-6px");
});
$("#ID_txt03,#rect1").live("click",function(){
	clearText();
	$("#textbox,#ID_txtTitle2,#ID_txtBody2").css("display","block");
	$("#highlight").css("display","block");
	$("#highlight1").css("display","none");
	$("#highlight").css("left","56px");
});
$("#ID_txt04,#rect2").live("click",function(){
	clearText();
	$("#textbox,#ID_txtTitle3,#ID_txtBody3").css("display","block");
	$("#highlight").css("display","block");
	$("#highlight1").css("display","none");
	$("#highlight").css("left","120px");
});
$("#ID_txt05,#rect3").live("click",function(){
	clearText();
	$("#textbox,#ID_txtTitle4,#ID_txtBody4").css("display","block");
	$("#highlight").css("display","block");
	$("#highlight1").css("display","none");
	$("#highlight").css("left","186px");
});
$("#ID_txt06,#rect4").live("click",function(){
	clearText();
	$("#textbox,#ID_txtTitle5,#ID_txtBody5").css("display","block");
	$("#highlight").css("display","block");
	$("#highlight1").css("display","none");
	$("#highlight").css("left","250px");
});
$("#ID_txt07,#rect5").live("click",function(){
	clearText();
	$("#textbox,#ID_txtTitle6,#ID_txtBody6").css("display","block");
	$("#highlight").css("display","block");
	$("#highlight1").css("display","none");
	$("#highlight").css("left","316px");
});
$("#ID_txt08,#rect6").live("click",function(){
	clearText();
	$("#textbox,#ID_txtTitle7,#ID_txtBody7").css("display","block");
	$("#highlight1").css("display","block");
	$("#highlight").css("display","none");
	$("#highlight1").css("left","381px");
});

function clearText(){
	for(i=1; i<8; i++){
	$("#ID_txtTitle"+i+",#ID_txtBody"+i).css("display","none");
	}
}

