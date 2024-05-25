

var popoverSlideJQ = function(_xmlData,_dataObject)
{	
		this.initiateComp(_xmlData,_dataObject);	
			
}

var _this = popoverSlideJQ.prototype;

_this.initiateComp = function(_xmlData,_dataObject)
{	
	var pos = new popover(_xmlData);
	this.buildTitle(_xmlData,_dataObject);
}

_this.buildTitle = function(_xmlData,_dataObject)
{
	if(_dataObject.texts == "undefined") return;
	
	var compId;	
	var _txt;
	
	compId = _dataObject.texts.compId;	
	var title = document.createElement('div');
	title.id = "title";	
	title.style.cssText = "position:absolute;top:"+_dataObject.texts.y+"px;left:"+_dataObject.texts.x+"px;width:"+_dataObject.			        texts.width+"px;height:"+_dataObject.texts.height+"px;font-size:"+_dataObject.texts.size+"px;text-align:"+_dataObject.        texts.textAlign+";";
	
	_txt = $(_xmlData).find("component#"+compId).text();
	$("#animDiv").append(title);
	this.puttitle(_txt);	
}

_this.puttitle = function(_txt)
{
	$("#title").html(_txt);
}

