
function registerSWF(){
swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){

var manifest = [
		{src:"images/Router.png", id:"Router"},
		{src:"images/Switch_workgroup.png", id:"Switch_workgroup"}
	];
return manifest;
});
