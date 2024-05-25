
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){
		
	
	var manifest = [
		{src:"images/_11123.jpg", id:"_11123"},
		{src:"images/Arrow.png", id:"Arrow"},
		{src:"images/Arrow1.png", id:"Arrow1"},
		{src:"images/smalltable.jpg", id:"smalltable"},
		{src:"images/router.png", id:"router"}
	];
	return manifest;			
});

(slideViewDidLoad = function(){
/*
	var cResize = function(){
				
		if(($("#flashContent").width() < 470) || ($("#flashContent").height() < 400))
		{
			document.body.style.width = "470px";	
			document.body.style.overflowX = "auto";			
		}
		else
		{
			document.body.style.overflowX = "hidden";	
			
		}
	}
	$(window).resize(cResize)
	
	cResize();
	*/
});
