loadScript("../../../common/js/jquery/jquery-ui-1.9.1.custom.min.js");
loadScript("../../../common/js/greensock/TweenMax.min.js"); 
$('head').append('<link rel="stylesheet" href="../../../common/js/jquery/css/ui-lightness/jquery-ui-1.9.1.custom.css" type="text/css" />')
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(container,id){
	
		$("#ID_txt10").css("opacity",'0');
	$("#ID_txt09").css("opacity",'0');

globalAnim.animSlide[0].initTemp("animationID");  
globalAnim.animSlide[0].initFuncArray(animation)


// add this code for mouse over text
$('.sbut').attr('rev',(getMediaText("play")));
$('.pause').attr('rev',(getMediaText("pause")));
$('.forward').attr('rev',(getMediaText("fforward")));
$('.rewind').attr('rev',(getMediaText("rewind")));
$('.start').attr('rev',(getMediaText("start")));
$('.end').attr('rev',(getMediaText("end")));


})

 
animation = function()
{
	var tl = globalAnim.animSlide[0].tl;

		zoomImg       = $("#zoomImg")
		pause         = $("#pauseBtn");
		play          = $("#playBtn")
		restart       = $("#restartBtn");
		ID_static    = $("#ID_static");
		ID_txt10	  = $("#ID_txt10");
		ID_txt09	  = $("#ID_txt09");
	
	tl.to(ID_txt10,.1,{css:{autoAlpha:0}})
	.to(ID_txt09,.1,{css:{autoAlpha:0}})
	.to(ID_static,.2,{css:{opacity:0}})
	.append([new TweenLite(ID_static,.4,{css:{opacity:1}}),
			 new TweenLite(ID_txt09,.4,{css:{autoAlpha:1,display:"block"}})])
	.to(ID_static,.4,{css:{opacity:0}})
	.to(ID_static,.4,{css:{opacity:1}})
	.to(ID_static,.4,{css:{opacity:0}})
	.to(ID_static,.4,{css:{opacity:1}})
	.to(ID_static,1,{css:{opacity:1}})
	.to(ID_txt10,.6,{css:{autoAlpha:1,display:"block"}})
	
	
	
	.to(pause,.05,{onComplete:myFunction});
	
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}



 


