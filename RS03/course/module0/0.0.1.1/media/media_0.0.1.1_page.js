loadScript("../../../common/scripts/swfobject.js", registerSWF); 
loadScript("../../../common/js/jquery/jquery-ui-1.9.1.custom.min.js");
loadScript("../../../common/js/greensock/TweenMax.min.js"); 
$('head').append('<link rel="stylesheet" href="../../../common/js/jquery/css/ui-lightness/jquery-ui-1.9.1.custom.css" type="text/css" />')

var animation;
(slideViewDidLoad = function(container,id){ 
  
	globalAnim.animSlide[0].initTemp("animationID");
	globalAnim.animSlide[0].initFuncArray(animation);  
   
})
 
animation = function()
{ 
		img1= $("#img1");	 
		img2= $("#img2");	 
		img3= $("#img3");	 	 
		img4= $("#img4");	 
		img5= $("#img5");	 
	  
	t_anim = new TimelineMax({repeat:-1});
	t_anim.to(img2,2,{css:{clip:"rect(0px 460px 400px 0px)"},delay:4});
	t_anim.to(img3,2,{css:{clip:"rect(0px 460px 400px 0px)"},delay:4}); 
	t_anim.to(img4,2,{css:{clip:"rect(0px 460px 400px 0px)"},delay:4});
	t_anim.to(img5,2,{css:{clip:"rect(0px 460px 400px 0px)"},delay:4}); 
	t_anim.play();
	 
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	} 

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

 


