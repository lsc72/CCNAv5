/*var url=location.href;
url=url.split("/")
var module =url[url.length-4];
var folder =url[url.length-3];
loadScript("../../../"+module+"/"+folder+"/media/asciitobin.js");*/


var AsciiToBinSlide = function(_xmlData,_dataObject)
{		
	this.initiateComp(_xmlData,_dataObject);	
	var dtoc = new asciitobin(_xmlData,_dataObject);
}

var _this = AsciiToBinSlide.prototype;

_this.initiateComp = function(_xmlData,_dataObject)
{	
    	buildTitle(_xmlData,_dataObject);	
}

