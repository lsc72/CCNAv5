 
loadScript("../../../common/scripts/swfobject.js", registerSWF); 
loadScript("../../../common/js/jquery/jquery-ui-1.9.1.custom.min.js");
loadScript("../../../common/js/greensock/TweenMax.min.js"); 
$('head').append('<link rel="stylesheet" href="../../../common/js/jquery/css/ui-lightness/jquery-ui-1.9.1.custom.css" type="text/css" />')

var animation;
(slideViewDidLoad = function(container,id){ 
  
  	$('#ID_txt04,#ID_txt05,#ID_txt06,#ID_txt07,#ID_txt08').css('opacity','0');
	$('#ID_txt09,#ID_txt10,#ID_txt11,#ID_txt12').css('opacity','0');
  
	globalAnim.animSlide[0].initTemp("animationID");
	globalAnim.animSlide[0].initFuncArray(animation); 
	
  	// add this code for mouse over text
	$('.sbut').attr('rev',(getMediaText("play")));
	$('.pause').attr('rev',(getMediaText("pause")));
	$('.forward').attr('rev',(getMediaText("fforward")));
	$('.rewind').attr('rev',(getMediaText("rewind")));
	$('.start').attr('rev',(getMediaText("start")));
	$('.end').attr('rev',(getMediaText("end"))); 
	
});
 
animation = function()
{
	var tl = globalAnim.animSlide[0].tl;
			 
		box1          = $("#box_1");
		box2          = $("#box_2");
		box3          = $("#box_3");
		box4          = $("#box_4");
		glower        = $("#glower");
		imgGlower     = $("#imgGlower");
		brick_top     = $("#brick_top");
		bricks_bot    = $("#bricks_bottom");
		arrow_top     = $("#arrow_top");
		arrow_bot     = $("#arrow_bottom");
		ID_txt04      = $("#ID_txt04");
		ID_txt05      = $("#ID_txt05");
		ID_txt06      = $("#ID_txt06");
		ID_txt07      = $("#ID_txt07");
		ID_txt08      = $("#ID_txt08"); 
		ID_txt11      = $("#ID_txt11");
		ID_txt09      = $("#ID_txt09");
		ID_txt12      = $("#ID_txt12");
		ID_txt10      = $("#ID_txt10");
		pause         = $("#pauseBtn");
		play          = $("#playBtn");
		restart       = $("#restartBtn"); 
	 
	tl.to([box1,ID_txt04],.8,{css:{opacity:1}}) 
	.to([box2,ID_txt05],.8,{css:{opacity:1}})
	.to([box3,ID_txt06],.8,{css:{opacity:1}}) 
	.to([box4,ID_txt07],.8,{css:{opacity:1}})  
	.to(imgGlower,1,{css:{clip:"rect(0px, 148px, 77px, 0px)"}}) 
	.to(brick_top,.4,{css:{opacity:1}})
	.to(ID_txt08,.4,{css:{opacity:1}})
	.append([
		new TweenLite(arrow_top,.1,{css:{opacity:1}}),
		new TweenLite(arrow_top,.6,{css:{left:212,top:6}}),
		]) 
	.to(ID_txt09,.4,{css:{opacity:1}}) 
	.to(ID_txt09,.4,{css:{opacity:0},delay:6})
	.to(bricks_bot,.4,{css:{opacity:1}})
	 .to(ID_txt10,.4,{css:{opacity:1}})
	.to(ID_txt11,.4,{css:{opacity:1}})
	.to(ID_txt09,.4,{css:{opacity:0}})
	.to(ID_txt11,.4,{css:{opacity:0},delay:6})
	.to(arrow_bot,.6,{css:{left:212,top:101}})
	.to(ID_txt12,.4,{css:{opacity:1}}) 
	.to(pause,.05,{onComplete:myFunction});
	
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

 


