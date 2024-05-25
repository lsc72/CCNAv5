/*var url=location.href;
url=url.split("/")
var module =url[url.length-4];
var folder =url[url.length-3];
loadScript("../../../"+module+"/"+folder+"/media/castdetection.js");*/


var UniMultiBroadcastSlide = function(_xmlData)
{		
	//this.initiateComp(_xmlData);	
	var dtoc = new castdetection(_xmlData);
}

 var _this = UniMultiBroadcastSlide.prototype;
//_this.initiateComp = function(){}
	