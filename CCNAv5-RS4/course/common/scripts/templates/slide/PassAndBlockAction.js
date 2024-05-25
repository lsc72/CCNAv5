/*var url=location.href;
url=url.split("/")
var module =url[url.length-4];
var folder =url[url.length-3];
loadScript("../../../"+module+"/"+folder+"/media/MediaApp.js");*/


var PassAndBlockAction = function(_xmlData)
{		
	this.initiateComp(_xmlData);	
	var dtoc = new MediaApp(_xmlData);
}

 var _this = PassAndBlockAction.prototype;
_this.initiateComp = function(){}
	