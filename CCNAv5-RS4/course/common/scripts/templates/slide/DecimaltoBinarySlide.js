/*var url=location.href;
url=url.split("/")
var module =url[url.length-4];
var folder =url[url.length-3];
loadScript("../../../"+module+"/"+folder+"/media/decitobin.js");*/


var DecimaltoBinarySlide = function(_xmlData,_dataObject)
{		
	
	this.initiateComp(_xmlData,_dataObject);	
	var dtoc = new decitobin(_xmlData);
}

var _this = DecimaltoBinarySlide.prototype;

_this.initiateComp = function(_xmlData,_dataObject)
{	
    //var decitobin = new decitobin(_xmlData);
	this.buildTitle(_xmlData,_dataObject);	
}
_this.buildTitle = function(_xmlData,_dataObject)
	{
		
		
		console.log(_dataObject.texts.compId);
		//alert(_dataObject.texts.compId);
if(_dataObject.texts == "undefined") return;

	var compId;
	var _txt;
	var _textComp;	
	compId = _dataObject.texts.compId;
	_txt = $(_xmlData).find("component#"+compId).text();			
	var title = document.createElement('div');
	title.id = "title";	
	$("#mainDiv").append(title);
	
	    title.style.cssText = "position:absolute;top:"+_dataObject.texts.y+"px;left:"+_dataObject.texts.x+"px;width:"+_dataObject.			        texts.width+"px;height:"+_dataObject.texts.height+"px;font-size:"+_dataObject.texts.size+"px;text-align:"+_dataObject.        texts.textAlign+";";
	    $("#title").html(_txt);
	}
	
		