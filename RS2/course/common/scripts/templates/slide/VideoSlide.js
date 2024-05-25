
var VideoSlide = function(_xmlData,_dataObject)
{		
	this.initiateComp(_xmlData,_dataObject);	
}

var _this = VideoSlide.prototype;

_this.initiateComp = function(_xmlData,_dataObject) 
{	
	_this.dataObject = _dataObject;
	_this.xmlData = _xmlData;
	
	//var videoTag = "<iframe id='ytplayer' type='text/html' width='340' height='390' src='"+videoURL+"' frameborder='0'/>"	
	//var videoTag = "<object width='640' height='390'><param name='youtube' value='http://www.youtube.com/v/qgRAm7QMtmg?version=3&fs=1&modestbranding=1&rel=0&color=white&theme=light&autoplay=0&autohide=0&frameborder=0&allowfullscreen'></param><param name='allowScriptAccess' value='always'></param><embed src='http://www.youtube.com/v/qgRAm7QMtmg?version=3&fs=1&modestbranding=1&rel=0&color=white&theme=light&autoplay=0&autohide=0&frameborder=0&allowfullscreen'type='application/x-shockwave-flash' allowscriptaccess='always' width='640' height='390'></embed></object>"
	//$('#videoDiv').html(videoTag);
	$("#mainDiv").append('<div id="videoDiv"></div>');

	if( _this.dataObject.videoObject &&  _this.dataObject.videoObject.length != 0 &&_this.dataObject.videoObject[0].url != undefined && _this.dataObject.videoObject[0].url != '')
	{
		var videoURL = _this.dataObject.videoObject[0].url;	
		var videoTag = document.createElement('div');
		videoTag.id = "videoTag"+_this.dataObject.slideNum;
		videoTag.innerHTML=' <iframe id="ytplayer" width='+_this.dataObject.videoObject[0].width+' height='+_this.dataObject.videoObject[0].height+' frameborder="0" src="'+videoURL+'" type="text/html">';
		$("#videoDiv").append(videoTag);
		videoTag.style.cssText = "position:absolute; top:0px;left:0px;width:"+_this.dataObject.videoObject[0].width+ "px;height:"+_this.dataObject.videoObject[0].height+"px;";
	}else $("#videoDiv").append('Please embed a video link.');
}

