/*var url=location.href;
url=url.split("/")
var module =url[url.length-4];
var folder =url[url.length-3];
loadScript("../../../"+module+"/"+folder+"/media/clickacitivity.js");*/


var ClickActivitySlide = function(_xmlData,_dataObject)
{	 
	this.initiateComp(_xmlData,_dataObject);	
	var dtoc = new clickacitivity(_xmlData,_dataObject);
	
}

var _this = ClickActivitySlide.prototype;

_this.initiateComp = function(_xmlData,_dataObject)
{	
	 
	this.buildTitle(_xmlData,_dataObject);	
}
_this.buildTitle = function(_xmlData,_dataObject)
{
	 
	if(_dataObject.texts == "undefined") return;

	var compId;
	var _txt;
	var _textComp;	

	compId = _dataObject.texts.compId;

	_txt = $(_xmlData).find("component#"+compId).text();			
	var title = document.createElement('div');
	title.id = "title";	
	//$("#mainDiv").append(title);	
	//title.style.cssText = "position:absolute;top:"+_dataObject.texts[0].y+"px;left:"+_dataObject.texts[0].x+"px;width:"+_dataObject.			        texts[0].width+"px;height:"+_dataObject.texts[0].height+"px;font-size:"+_dataObject.texts[0].size+"px;text-align:"+_dataObject.texts[0].textAlign+";";
	//document.getElementById("title").value = _txt;
	//$("#title").html(_txt);
}

	
		