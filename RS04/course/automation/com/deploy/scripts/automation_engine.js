
	

function generateXML(selectedmodule, swfdata, htmldata) {
	$("#moviewindow").show();
	$('#xmlwindow').html('<code>'+htmldata+'</code>'); 
	var flashvars = {};
	var params = { 
	base: ".",
	quality: "best",
	wmode: "transparent",
	allowfullscreen: "true"}
	var windowurl = window.location.href;
	var courseurl = windowurl.substring(0, windowurl.length-22)
	var swfsource=courseurl+selectedmodule+"/"+swfdata+"/media/media_"+swfdata+".swf";	
	swfobject.embedSWF(swfsource, "flashwindow", "470", "400", "9.0.0", false, flashvars, params);
	$('#pagetitle span').html('Create Switched Networks Media Chapter :<b> '+swfdata+'</b>'); 
	
	hideGenerator();
}



function copyToClipboard(text)
{
	

}



function hideGenerator(){
var flashvars = {};
	var params = { 
	base: ".",
	quality: "best",
	wmode: "transparent",
	allowfullscreen: "true"}
	swfobject.embedSWF("XMLGenerator-v2.swf", "flashcontent", "450", "252", "9.0.0", false, flashvars, params);
}


function loadGenerator(){
	var flashvars = {};
	var params = { 
	base: ".",
	quality: "best",
	wmode: "transparent",
	allowfullscreen: "true"}
	swfobject.embedSWF("XMLGenerator-v2.swf", "flashcontent", "450", "252", "9.0.0", false, flashvars, params);
	}
	
	
function loadIntro(){
	var flashvars = {};
	var params = { 
	base: ".",
	quality: "best",
	wmode: "transparent",
	allowfullscreen: "true"}
	var swfsource="introduction.swf";	
	swfobject.embedSWF(swfsource, "flashwindow", "470", "400", "9.0.0", false, flashvars, params);
	hideGenerator();}
	
		
loadIntro();
loadGenerator();
  
