function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	var manifest = [
		{src:"images/boygirlpic.png", id:"boygirlpic"},
		{src:"images/computer.png", id:"computer"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/sunset8.jpg", id:"sunset8"},
		{src:"images/WhiteShade.png", id:"WhiteShade"}
	];
	return manifest;			
});

(slideViewDidLoad = function(slide,id){
	if(id == 1)
	{		
		var resiz = function()
		{			
			if(($("#flashContent").width() < 470))
			{
				document.body.style.cssText = "overflow-x:auto;"
				//$("body").css("overflow-x","auto");
			}
			else
			{
				document.body.style.cssText = "overflow-x:hidden;"
				//$("body").css("overflow-x","hidden");
			}
			
		}
		$(window).resize(resiz);	
		resiz();
	}
});