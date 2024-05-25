$('head').append('<link rel="stylesheet" href="../../../common/js/jquery/css/ui-lightness/jquery-ui-1.9.1.custom.css" type="text/css" />')

/*loadScript("../../../common/js/jquery/jquery-ui-1.9.1.custom.min.js");
loadScript("../../../common/js/greensock/TweenMax.min.js");
*/
var t1;

var AnimationControlComp = function(_id)
{	
	this.id = _id; 

	var temp ='<div id="dvSliderContainer">';
	temp+='<div class="sbut" title="Play">';
	temp+='<img src="../../../common/images/animation-controller/play.png" width="33" height="27" alt="Play" id="startBtn"/></div>';
	temp+='<div class="pause" title="Pause"><img src="../../../common/images/animation-controller/pause.png" width="33" height="27" alt="Pause" id="pauseBtn"/></div>';

	temp+='<div class="resbut" title="Play"><img src="../../../common/images/animation-controller/play.png" width="33" height="27" alt="Play" id="restartBtn"/></div>';
	temp+='<div class="start" title="Start"><img src="../../../common/images/animation-controller/start.png" width="27" height="27" alt="First" id="firstBtn" /></div>';
	temp+='<div class="rewind" title="Rewind"><img src="../../../common/images/animation-controller/rewind.png" width="27" height="27" alt="Revind" id="rewindBtn" /></div>';
	temp+='<div class="forward" title="Fast Forward"><img src="../../../common/images/animation-controller/forward.png" width="27" height="27" id="forwardBtn" alt="Forward" /></div>';
	temp+='<div class="end" title="End"><img src="../../../common/images/animation-controller/end.png" width="27" height="27" alt="End" id="endBtn" /></div>';
	temp+='<div id="slider">';
	temp+='</div>';
	temp+='</div>';


	$("#animDiv").append(temp);
	 
	var startBtn= $("#startBtn"),
		//playBtn = $("#playBtn"),
		pauseBtn = $("#pauseBtn"),
		forwardBtn = $("#forwardBtn"),
		rewindBtn = $("#rewindBtn"),
		resumeBtn = $("#resumeBtn"), 
		restartBtn = $("#restartBtn"),
		firstBtn= $("#firstBtn"),
		endBtn = $("#endBtn"),
		ball = $(".ball"),

		playerContainer = $("#playerContainer"); 
		
		tl = new TimelineMax({onUpdate:updateSlider});	

		function updateSlider() {
			$("#slider").slider("value", tl.progress() * 100);
		} 
			  
		$( "#slider").slider({
	            range: false,
	            min: 0,
	            max: 100,
				step:.1,
	            slide: function ( event, ui ) {
	                tl.progress( ui.value/100 ).pause();
	            }
	    });	
	
	var _this = this;
	
	(function() {
	    animeArray[_this.id].animFunction();
	    tl.pause();
	})();

	startBtn.click(function(){		
		$(".sbut").css("z-index","0");
		$(".pause").css("z-index","1");
		tl.play(); 
	});
 
	pauseBtn.click(function(){
		tl.pause();

		$(".pause").css("z-index","0");
		$(".sbut").css("z-index","1");

	});

	forwardBtn.click(function(){  
		tl.pause(); //pause it once, then use seek()
		tl.seek( tl.time() + .25); //goes forward one frame
		$("#slider").slider("value", tl.progress() * 100);
		 
	});
	rewindBtn.click(function(){  
		var startTime = tl.time();
		if(startTime != 0){
			tl.pause(); //pause it once, then use seek()
			tl.seek( tl.time() - .25); //goes forward one frame 
			$("#slider").slider("value", tl.progress() * 100);
		}
	});
 
	restartBtn.click(function(){
		//Start playing from a progress of 0.
		tl.restart();

		$(".resbut").css("z-index","-1");
		$(".pause").css("z-index","1");
		$(".play").css("z-index","0"); 
	});

	firstBtn.click(function(){ 
		var startTime = tl.time();
		if(startTime != 0){
			tl.pause(); //pause it once, then use seek()
			 tl.time(0);

			$(".resbut").css("z-index","1");
			$(".pause").css("z-index","0");
			$(".play").css("z-index","-1");   
		}
	});
	endBtn.click(function(){  
		tl.pause();
		var endTime = tl.totalDuration();
		tl.time(endTime);  
	});
	
	
	startBtn.mouseover(function(){	 

	$(".sbut img").attr("src","../../../common/images/animation-controller/paly_hover.png");

	});
	
	startBtn.mouseout(function(){	 
	$('lblSbut').prop('visibility','hidden');	
	$(".sbut img").attr("src","../../../common/images/animation-controller/play.png")
	});
	
	
	pauseBtn.mouseover(function(){		
	$(".pause img").attr("src","../../../common/images/animation-controller/pause_over.png")
	});
	
	pauseBtn.mouseout(function(){		
	$(".pause img").attr("src","../../../common/images/animation-controller/pause.png")
	});
	
	
	forwardBtn.mouseover(function(){		
	$(".forward img").attr("src","../../../common/images/animation-controller/forward_over.png")
	});
	
	forwardBtn.mouseout(function(){		
	$(".forward img").attr("src","../../../common/images/animation-controller/forward.png")
	});
	
	
	rewindBtn.mouseover(function(){		
	$(".rewind img").attr("src","../../../common/images/animation-controller/rewind_over.png")
	});
	
	rewindBtn.mouseout(function(){		
	$(".rewind img").attr("src","../../../common/images/animation-controller/rewind.png")
	});
	
	firstBtn.mouseover(function(){		
	$(".start img").attr("src","../../../common/images/animation-controller/start_over.png")
	});
	
	firstBtn.mouseout(function(){		
	$(".start img").attr("src","../../../common/images/animation-controller/start.png")
	});
	
	endBtn.mouseover(function(){		
	$(".end img").attr("src","../../../common/images/animation-controller/end_hover.png")
	});
	
	endBtn.mouseout(function(){		
	$(".end img").attr("src","../../../common/images/animation-controller/end.png")
	});
	
	restartBtn.mouseover(function(){		
	$(".resbut img").attr("src","../../../common/images/animation-controller/paly_hover.png")
	});
	
	restartBtn.mouseout(function(){		
	$(".resbut img").attr("src","../../../common/images/animation-controller/play.png")
	});
	
/*	$("a.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default").mousedown(function()
	{	
	$("a.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default>img").css(	
	{"background-image": "url(../../../common/images/animation-controller/play_ball_glow.png)"})	
	})	*/

}

