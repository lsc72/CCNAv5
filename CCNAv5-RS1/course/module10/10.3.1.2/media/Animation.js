var zoomImg;
var pause,play,restart;
var animation1 = function(data)
{
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

var temp = '';
temp +='<div id="main_wrapper"><div id="main_container"><div id="main_img"><img src="10_3_1_2.png" width="461" height="60" ></div><div id="box_1" style="opacity:0"><img src="box_1.png" width="165" height="45" ></div><div id="box_2" style="opacity:0"><img src="box_2.png" width="165" height="45" ></div><div id="box_3" style="opacity:0"><img src="box_3.png" width="165" height="45" ></div><div id="box_4" style="opacity:0"><img src="box_4.png" width="165" height="45" ></div><div id="glower"><img src="glower.png" width="148" height="61" ></div><div id="bloker"></div><div id="bloker_arrow"></div><div id="brick_top" style="opacity:0"><img src="bricks_top.png" width="95" height="48" ></div><div id="bricks_bottom" style="opacity:0"><img src="bricks_bottom.png" width="95" height="29" ></div><div id="arrow_top"><img src="arrow_top.png" width="10" height="66" ></div><div id="arrow_bottom"><img src="arrow_bottom.png" width="10" height="39" ></div><div id="h1"></div><div id="inter"></div><div id="server"></div><div id="application" style="opacity:0"></div><div id="trans" style="opacity:0"></div><div id="internet" style="opacity:0"></div><div id="netacct" style="opacity:0"></div><div id="strm" style="opacity:0"></div><div id="segment" style="opacity:0"></div><div id="org_box1" style="opacity:0"></div><div id="org_box2" style="opacity:0"></div></div><div id="org_box3" style="opacity:0"></div></div></div>';

$("#animDiv").html(temp);

$("#h1").html($(data).find("component#ID_txt01").text());
$("#inter").html($(data).find("component#ID_txt02").text());
$("#server").html($(data).find("component#ID_txt03").text());
$("#application").html($(data).find("component#ID_txt04").text());
$("#trans").html($(data).find("component#ID_txt05").text());
$("#internet").html($(data).find("component#ID_txt06").text());
$("#netacct").html($(data).find("component#ID_txt07").text());
$("#strm").html($(data).find("component#ID_txt08").text());
$("#segment").html($(data).find("component#ID_txt10").text());
$("#org_box1").html($(data).find("component#ID_txt11").text());
$("#org_box2").html($(data).find("component#ID_txt09").text());
$("#org_box3").html($(data).find("component#ID_txt12").text());
}
function animation()
	{ 
	
		box1          = $("#box_1");
		box2          = $("#box_2");
		box3          = $("#box_3");
		box4          = $("#box_4");
		glower        = $("#glower");
		bloker        = $("#bloker");
		brick_top     = $("#brick_top");
		bricks_bot    = $("#bricks_bottom");
		arrow_top     = $("#arrow_top");
		arrow_bot     = $("#arrow_bottom");
		appli         = $("#application");
		trans         = $("#trans");
		inter         = $("#internet");
		netacct       = $("#netacct");
		strm          = $("#strm");
		segm          = $("#segment");
		org_box1      = $("#org_box1");
		org_box2      = $("#org_box2");
		org_box3      = $("#org_box3");
		segm          = $("#segment");
		pause         = $("#pauseBtn");
		play          = $("#playBtn");
		restart       = $("#restartBtn"); 
	
	tl.append([
		new TweenLite(box1,.8,{css:{opacity:1}}),
		new TweenLite(appli,.8,{css:{opacity:1}})			 
		]) 
	.append([
		new TweenLite(box2,.8,{css:{opacity:1}}),
		new TweenLite(trans,.8,{css:{opacity:1}})			 
		])
	.append([
		new TweenLite(box3,.8,{css:{opacity:1}}),
		new TweenLite(inter,.8,{css:{opacity:1}})			 
		])
	.append([
		new TweenLite(box4,.8,{css:{opacity:1}}),
		new TweenLite(netacct,.8,{css:{opacity:1}})			 
		])
	.to(bloker,1,{css:{left:-2,top:167}})
	.to(brick_top,.4,{css:{opacity:1}})
	.to(strm,.4,{css:{opacity:1}})
	.append([
		new TweenLite(arrow_top,.1,{css:{opacity:1}}),
		new TweenLite(arrow_top,.6,{css:{left:212,top:6}}),
		])
	.to(org_box2,.4,{css:{opacity:1}})
	.to(brick_top,1.2,{css:{opacity:1}})
	.to(org_box2,.4,{css:{opacity:0}})
	.to(bricks_bot,.4,{css:{opacity:1}})
	.to(segm,.4,{css:{opacity:1}})
	.to(org_box1,.4,{css:{opacity:1}})
	.to(org_box2,1.2,{css:{opacity:0}})
	.to(org_box1,.4,{css:{opacity:0}})
	.to(arrow_bot,.6,{css:{left:212,top:101}})
	.to(org_box3,.4,{css:{opacity:1}})
	.to(pause,.05,{onComplete:myFunction});
	
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}


var animeArray = [{name:animation1,animFunction:animation}];