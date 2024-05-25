
	








function loadGenerator(){
	

	var flashvars = {};
	var params = { 
	base: ".",
	quality: "best",
	wmode: "transparent",
	allowfullscreen: "true"}
	swfobject.embedSWF("preview.swf", "preview", "450", "170", "9.0.0", false, flashvars, params);
	}
	
	

loadGenerator();