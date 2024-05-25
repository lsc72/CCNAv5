loadScript("../../../common/scripts/templates/comp/DragDropComp.js");
var VideoSlide = function(_xmlData,_dataObject)
{		
	this.initiateComp(_xmlData,_dataObject);	
}

var _this = VideoSlide.prototype;

_this.initiateComp = function(_xmlData,_dataObject)
{	
	_this.dataObject = _dataObject;
	_this.xmlData = _xmlData;
	//var videoTag = "<iframe id='ytplayer' type='text/html' width='640' height='390' src='http://www.youtube.com/v/qgRAm7QMtmg?version=3&fs=1&modestbranding=1&rel=0&color=white&theme=light&autoplay=0&autohide=0&frameborder=0&allowfullscreen' frameborder='0'/>"
	
	var videoTag = "<object width='640' height='390'><param name='youtube' value='http://www.youtube.com/v/qgRAm7QMtmg?version=3&fs=1&modestbranding=1&rel=0&color=white&theme=light&autoplay=0&autohide=0&frameborder=0&allowfullscreen'></param><param name='allowScriptAccess' value='always'></param><embed src='http://www.youtube.com/v/qgRAm7QMtmg?version=3&fs=1&modestbranding=1&rel=0&color=white&theme=light&autoplay=0&autohide=0&frameborder=0&allowfullscreen'type='application/x-shockwave-flash' allowscriptaccess='always' width='640' height='390'></embed></object>"
	$('#videoDiv1').html(videoTag);
}