loadScript("../../../common/js/jquery/jquery-ui-1.9.1.custom.min.js");
loadScript("../../../common/js/greensock/TweenMax.min.js"); 
$('head').append('<link rel="stylesheet" href="../../../common/js/jquery/css/ui-lightness/jquery-ui-1.9.1.custom.css" type="text/css" />')
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(container,id){

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

	env1 = $("#env1");
	env2 = $("#env2");
	env3 = $("#env3");
	env4 = $("#env4");
	env5 = $("#env5");
	env6 = $("#env6");
	env7 = $("#env7");
	env8 = $("#env8");
	env9 = $("#env9");
	env10 = $("#env10");
	env11 = $("#env11");
	env12 = $("#env12");
	env13 = $("#env13");
	env14 = $("#env14");
	env15 = $("#env15");
	env16 = $("#env16");
	
	
	pause   = $("#pauseBtn");
	play    = $("#playBtn")
	restart = $("#restartBtn");
	
	tl.to(env1,.2,{css:{opacity:1}})
	  .to(env1,1.3,{css:{top:90}})
	  .to([env2,env3,env4,env5],.3,{css:{display:"block"}})	
	  .to(env1,.01,{css:{display:"none"}})  
	   tl.append
	  ([
			new TweenLite(env2,1.9,{css:{left:18}}),
			new TweenLite(env3,1.9,{css:{left:181}}),
			new TweenLite(env4,1.9,{css:{left:51,top:149}}),
			new TweenLite(env5,1.9,{css:{left:138,top:146}}),
		])
		.to([env2,env3,env4,env5],.01,{css:{display:"none"}})
		.to([env2,env3,env4,env5],1.6,{css:{display:"none"}})
		.to(env6,.2,{css:{opacity:1}})
		.to(env6,.9,{css:{top:264}})
		.to([env7,env8,env9,env10],.3,{css:{display:"block"}})	
	    .to(env6,.01,{css:{display:"none"}})  
		tl.append
	  ([
			new TweenLite(env7,1,{css:{left:19}}),
			new TweenLite(env8,1,{css:{left:181}}),
			new TweenLite(env9,1,{css:{left:55,top:306}}),
			new TweenLite(env10,1,{css:{left:143,top:308}}),
			new TweenLite(env11,1,{css:{display:"block"},delay:.99}),
			new TweenLite([env7,env8,env9,env10],.01,{css:{display:"none"},delay:1}),
			new TweenLite(env11, 4 ,{css:{bezier:[{left:165, top:221},{left:214, top:207},{left:289, top:230},{left:330, top:267}]},delay:1}),
			new TweenLite(env11,.01,{css:{display:"none"},delay:5}),
			new TweenLite([env12,env13,env14,env15,env16],.01,{css:{display:"block"},delay:5}),
			new TweenLite(env12,1.1,{css:{left:253},delay:5}),
			new TweenLite(env13,1.1,{css:{left:411},delay:5.01}),
			new TweenLite(env14,1.1,{css:{left:282,top:310},delay:5.02}),
			new TweenLite(env15,1.1,{css:{left:377,top:306},delay:5.03}),
			new TweenLite(env16,1.1,{css:{top:212},delay:5.04}),
			new TweenLite([env12,env13,env14,env15,env16],.01,{css:{display:"none"},delay:6.05})			
		])
		
		
		.to(pause,.05,{onComplete:myFunction});
	}

function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
