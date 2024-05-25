
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){
		
	
	var manifest = [
		{src:"images/_1841a.jpg", id:"_1841a"},
		{src:"images/_1841t.jpg", id:"_1841t"},
		{src:"images/media_1112_Animation.jpg", id:"media_1112_Animation"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/routerhigh.png", id:"routerhigh"}
	];
	return manifest;			
});


