function registerSWF(){
swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){

var manifest = [
         {src:"images/redball.png", id:"redball"},
		  {src:"images/orangeball.png", id:"orangeBall"}
			
	];
return manifest;
});
