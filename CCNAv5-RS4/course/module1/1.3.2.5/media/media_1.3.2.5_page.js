loadScript("../../../common/scripts/swfobject.js", registerSWF); 
loadScript("../../../common/js/jquery/jquery-ui-1.9.1.custom.min.js");
loadScript("../../../common/js/greensock/TweenMax.min.js"); 
$('head').append('<link rel="stylesheet" href="../../../common/js/jquery/css/ui-lightness/jquery-ui-1.9.1.custom.css" type="text/css" />')

/*var animation;
(slideViewDidLoad = function(container,id){ 

	globalAnim.animSlide[0].initTemp("animationID");
	globalAnim.animSlide[0].initFuncArray(animation); 
	
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

		pause = $("#pauseBtn");  
		
		ID_txt01 = $("#ID_txt01 span");
		ID_txt02 = $("#ID_txt02 span");
		ID_txt03 = $("#ID_txt03 span");
		ID_txt04 = $("#ID_txt04 span");
		ID_txt05 = $("#ID_txt05 span");
		ID_txt06 = $("#ID_txt06 span");


		img2 = $("#img2");
		img3 = $("#img3");
		img4 = $("#img4");
		img5 = $("#img5");
		img6 = $("#img6");
		imgLines1 = $("#imgLines1");
		imgLines2 = $("#imgLines2");
	 
	tl.to(img2,.8,{css:{autoAlpha:1}})
	.to([img3,ID_txt02],.8,{css:{autoAlpha:1}})
	.to([img4,ID_txt03],.8,{css:{autoAlpha:1}})
	.to([img5,ID_txt04],.8,{css:{autoAlpha:1}})
	.to([img6,ID_txt05],.8,{css:{autoAlpha:1}}) 
	.to([imgLines1,ID_txt01],.8,{css:{autoAlpha:1}})
	.to(imgLines1,.8,{css:{autoAlpha:0},delay:1})
	.to([imgLines2,ID_txt06],.8,{css:{autoAlpha:1}})
	.to(pause,.05,{onComplete:myFunction});
	 
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}*/
/*var animeArray = [{animFunction:animation}];*/

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

 


