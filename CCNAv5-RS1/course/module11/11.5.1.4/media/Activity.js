
var Activity = function(data,slide)
{
	this.initialize();
	
 	var exportRoot = new lib.animation();
	this.addChild(exportRoot);

	createjs.Ticker.setFPS(24);
	createjs.Ticker.addListener(stage);
	var activityDiv = document.createElement('div');
	activityDiv.id = "activityDiv";			
	$('#mainDiv').append(activityDiv);	
	var temp1 ='';
	temp1 +='<div id="box_text"></div>';
	temp1 +='<div id="moreinfotip"></div>';
	temp1 +='<div id="moreinfo"><img src="moreInfo_bg.png" width="35" height="43" /></div>';
	temp1 +='<div id="feedback"><div id="feedbacktit"></div><div id="feedbacktext"></div><div id="cross"></div></div></div></div>';
	
$("#activityDiv").html(temp1);
$("#moreinfotip").html($(data).find("component#ID_TipText").text());
$("#feedbacktext").html($(data).find("component#ID_InfoBody").text());
$("#feedbacktit").html($(data).find("component#ID_InfoTitle").text());
$("#box_text").html($(data).find("component#box_text").text());
$(function(){
	$("#moreinfo").mouseover(function(){$("#moreinfotip").css("display","block")});
	$("#moreinfo").mouseleave(function(){$("#moreinfotip").css("display","none")});
	$("#moreinfo").click(function(){if ($("#feedback").is(":hidden")) {	$("#feedback").show();}});
	$("#cross").click(function(){$("#feedback").css("display","none")})
});	

}


var p = Activity.prototype = new createjs.Container();

