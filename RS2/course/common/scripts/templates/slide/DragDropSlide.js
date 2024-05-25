/*loadScript("../../../common/scripts/templates/comp/DragDropComp.js");*/

var DragDropSlide = function(_xmlData,_dataObject)
{		
	this.initiateComp(_xmlData,_dataObject);	
}
var _thisRef = DragDropSlide.prototype;


_thisRef.initiateComp = function(_xmlData,_dataObject)
{	
	_thisRef.dataObject = _dataObject;
	_thisRef.xmlData = _xmlData;
	_thisRef.cont = this;
	_thisRef.groupArr = [];
	_thisRef.groupAnsCount = [];
	_thisRef.groupDropCount = [];
	_thisRef.dragIndex = 10;
	_thisRef.style = _dataObject.buttonObject.style;	
	_thisRef.dataObject.slideNo = _thisRef.dataObject.slideNo ? _thisRef.dataObject.slideNo:1;
		
	_thisRef.buildPageAssets();
	_thisRef.buildDropItems();
	_thisRef.buildDragItems();
	
	if(_dataObject.instobj.helpObj != undefined && _dataObject.isViewDD == 1)
	{
		_thisRef.ddComp.showHelp();
	}
}
_thisRef.buildDragItems = function()
{
	var mainDiv = document.getElementById("mainDiv");
	
	var dragDropDiv = document.getElementById("dragDropDiv");
	if(dragDropDiv == null){
			dragDropDiv = document.createElement('div');
			dragDropDiv.id = "dragDropDiv";			
			mainDiv.appendChild(dragDropDiv);
	}
	
	var contentDiv = document.getElementById("contentDiv_s"+_thisRef.dataObject.slideNo);
	if(contentDiv == null){
			contentDiv = document.createElement('div');
			contentDiv.id = "contentDiv_s"+_thisRef.dataObject.slideNo;
			dragDropDiv.appendChild(contentDiv);
	}	
	var itemLen = 0;
	_thisRef.snapResArr = [];
	if(_thisRef.dataObject.instobj.ansType == 'one-many' || _thisRef.dataObject.instobj.ansType == 'one-many-group')
	{		
		_thisRef.drags = [];
		var len = _thisRef.dataObject.buttonObject.buttons.length;
		for(var k=0;k<len;k++)
		{
			for(var j=(k*30);j<((k+1)*30);j++)
			{			
				_thisRef.dataObject.buttonObject.buttons[k].tag = (k+1);
				_thisRef.drags[j] = _thisRef.dataObject.buttonObject.buttons[k];			
			}
		}
	}else if(_thisRef.dataObject.instobj.ansType == 'snap-back' && (typeof _thisRef.dataObject.instobj.isDragSets != undefined && _thisRef.dataObject.instobj.isDragSets == true)){
		var dragSetsLen = _thisRef.dataObject.buttonObject.buttons.length;
		var random = Math.floor(Math.random()*dragSetsLen);
		_thisRef.drags = _thisRef.dataObject.buttonObject.buttons[random];
	}else if(_thisRef.dataObject.instobj.ansType == 'many-one' && (typeof _thisRef.dataObject.instobj.isDragSets != undefined && _thisRef.dataObject.instobj.isDragSets == true)){
		var dragSetsLen = _thisRef.dataObject.buttonObject.buttons.length;
		var random = Math.floor(Math.random()*dragSetsLen);
		_thisRef.drags = _thisRef.dataObject.buttonObject.buttons[random];
	}
	else{
		_thisRef.drags = _thisRef.dataObject.buttonObject.buttons;
	}
	itemLen = _thisRef.drags.length;
	console.log("LLLLLLL::::::"+itemLen);
	for(var i=0;i<itemLen;i++)
	{
		var compId = _thisRef.drags[i].compId;
		_thisRef.snapResArr[i] = 0;
		
		var dragDiv = document.createElement('div');		
		$(dragDiv).attr('id',"drag"+i);
				
		dragDiv.style.cssText = "position:absolute;top:"+_thisRef.drags[i].y+"px;left:"+_thisRef.drags[i].x+"px;width:auto;height:auto;cursor:pointer;";
		contentDiv.appendChild(dragDiv);
		
		dragDiv.y = _thisRef.drags[i].y;
		dragDiv.x = _thisRef.drags[i].x;
		
		$(dragDiv).data('tag',_thisRef.drags[i].tag);
		$(dragDiv).data('groups',_thisRef.drags[i].groups);	
		$(dragDiv).data('x',dragDiv.x);
		$(dragDiv).data('y',dragDiv.y);
		
		if(_thisRef.dataObject.instobj.ansType == 'one-many-group')
		{
			var ansLen = _thisRef.drags[i].groups.length;
			for(var l=0;l<ansLen;l++)
			{			
				var gtag = _thisRef.groupAnsCount[l];		
				if(_thisRef.drags[i].groups[l] == 1)
				{
					_thisRef.groupAnsCount[l] = (gtag == undefined)?1:(gtag+1)					
				}
			}
		}
		else
		{
			var gtag = _thisRef.groupAnsCount[_thisRef.drags[i].tag - 1];
			
			_thisRef.groupAnsCount[_thisRef.drags[i].tag - 1] = (gtag == undefined) ? 1 : (gtag+1);
		}
		
		var imgDiv = document.createElement('img');
		if(typeof _thisRef.style.normalSkinImage != 'string')
			imgDiv.src = _thisRef.style.normalSkinImage[i];
		else
			imgDiv.src = _thisRef.style.normalSkinImage;
			
		$(imgDiv).width(_thisRef.drags[i].width);
		$(imgDiv).height(_thisRef.drags[i].height);
		dragDiv.appendChild(imgDiv);
		
		_thisRef.setLabel({i:i, btnDiv:dragDiv, imgDiv:imgDiv, compId:compId, image: _thisRef.drags[i].image});
				
		_thisRef.setLabel({i:i, btnDiv:dragDiv, imgDiv:imgDiv, compId:compId});
		
		imgDiv.onload = function(evt)
		{
			_thisRef.imageLoaded(evt, {i:i, btnDiv:dragDiv, imgDiv:imgDiv, compId:compId});
		}

        $(dragDiv).mouseover(function()
        {
            //$(this).css("box-shadow","0 5px 6px 4px #038BD1");
        }) ;
        $(dragDiv).mouseout(function(){
           // $(this).css("box-shadow","");
        });

		_thisRef.enableDrag(dragDiv);		
	}
}


_thisRef.buildDropItems = function()
{
	var mainDiv = document.getElementById("mainDiv");
	var dragDropDiv = document.getElementById("dragDropDiv");
	if(dragDropDiv == null){
			dragDropDiv = document.createElement('div');
			dragDropDiv.id = "dragDropDiv";			
			mainDiv.appendChild(dragDropDiv);	
	}
	var contentDiv = document.getElementById("contentDiv_s"+_thisRef.dataObject.slideNo);
	if(contentDiv == null){
			contentDiv = document.createElement('div');
			contentDiv.id = "contentDiv_s"+_thisRef.dataObject.slideNo;			
			dragDropDiv.appendChild(contentDiv);
	}	
	_thisRef.drops = _thisRef.dataObject.dropObject.dropBox;	
	 
	for(var i=0;i<_thisRef.drops.length;i++)
	{
		var compId = _thisRef.drops[i].compId;
		
		var dropDiv = document.createElement('div');		
		$(dropDiv).attr('id',"drop"+i);
		$(dropDiv).data('contains',0);
		
		dropDiv.style.cssText = "position:absolute;top:"+_thisRef.drops[i].y+"px;left:"+_thisRef.drops[i].x+"px;width:auto;height:auto;font-size:11px;";
		contentDiv.appendChild(dropDiv);
		$(dropDiv).data('answer',_thisRef.drops[i].answer);
		
		var gtag = _thisRef.groupDropCount[_thisRef.drops[i].answer - 1];
		_thisRef.groupDropCount[_thisRef.drops[i].answer - 1] = (gtag == undefined) ? 1 : (gtag+1);
		
		_thisRef.checkGroup(_thisRef.drops[i].answer);
		dropDiv.y = _thisRef.drops[i].y;
		dropDiv.x = _thisRef.drops[i].x;

		var imgDiv = document.createElement('img');
		imgDiv.src = _thisRef.style.dropNormalSkinImage;
		dropDiv.appendChild(imgDiv);
		
		$(imgDiv).width(_thisRef.drops[i].width);
		$(imgDiv).height(_thisRef.drops[i].height);
		
		var tempDiv = document.createElement('img');
		tempDiv.src = "../../../common/images/tick.png";
		tempDiv.src = "../../../common/images/wrong.png";

		var tickDiv = document.createElement('img');
		$(tickDiv).attr('id',"tick"+i);
		tickDiv.style.cssText = "position:absolute;display:none;";
		dropDiv.appendChild(tickDiv);
		
		if(_thisRef.dataObject.instobj.isDropLabel)
		{
			_thisRef.setLabel({i:i, btnDiv:dropDiv, imgDiv:imgDiv, compId:compId, droppable:true});
		}
		
		imgDiv.onload = function(evt)
		{
			_thisRef.imageLoaded(evt, {i:i, btnDiv:dropDiv, imgDiv:imgDiv, compId:compId});
		}
		_thisRef.enableDrop(dropDiv);		
	}
}

_thisRef.buildPageAssets = function()
{
	_thisRef.dataObject.curObj = _thisRef;
	_thisRef.ddComp = new DragDropComp(_thisRef.xmlData, _thisRef.dataObject);	 
	_thisRef.ddComp.buildImages();
	_thisRef.ddComp.buildTextItems();
	_thisRef.ddComp.buildSubmitButtons();
	
}

_thisRef.checkAnswers = function()
{
	var ansGroupArr = [], resultArr = [], dropObjectArr = [];
	var correctCnt = 0, totalAnswers = 0, isStarted = false, isCorrect = false;
	var len = _thisRef.dataObject.buttonObject.buttons.length;
	var ansType = _thisRef.dataObject.instobj.ansType;
	var clue = _thisRef.dataObject.instobj.clue;
    _thisRef.groupAnswered = [];
	for(var j=0;j<len;j++)
	{
		if(!isNaN(_thisRef.groupAnsCount[j])) { totalAnswers += (_thisRef.groupAnsCount[j]/30); }
		_thisRef.groupAnswered[j] = [];
	}
	for(var k=0;k<_thisRef.groupArr.length;k++)
	{
		dropObjectArr[k] = [];
	}
	for(var i=0;i<_thisRef.drops.length;i++)
    {
		var corAns = _thisRef.drops[i].answer-1;
		var dropItem = $("#drop"+i).data('dropped');
        var actAns = ($("#drop"+i).data('dropped')==undefined)?"drag-1":$("#drop"+i).data('dropped').num;
		
        actAns = actAns.split("drag")[1];
		if(ansType == 'one-many')
		{		
			actAns = (dropItem==undefined || dropItem.dragItem == undefined)?"drag-1":$(dropItem.dragItem).data("tag");
			corAns = _thisRef.drops[i].answer;		
		}
		else if(ansType == 'one-many-group')
		{		
			actAns = (dropItem==undefined || dropItem.dragItem == undefined)?"drag-1":$(dropItem.dragItem).data("groups");
			corAns = _thisRef.drops[i].answer;
		}
		else if(ansType == 'many-one')
		{
			actAns = (dropItem==undefined || dropItem.dragItem == undefined)?"drag-1":$(dropItem.dragItem).data("tag");
			corAns = $("#drop"+i).data('answer');
		}
		if(_thisRef.dataObject.instobj.ansType == 'one-many-group' && actAns != 'drag-1')
		{			
			var isFound = false;
			var ans, isSame=false;
			var ctag = $($("#drop"+i).data('dropped').dragItem).data("tag")-1;
			for(var t=0;t<actAns.length;t++)
			{
				ans = actAns[t];
				if(actAns[t] == 1 && t == corAns-1)
				{					
					var answered = _thisRef.groupAnswered[ctag][corAns-1];
					if(answered == undefined)
					{
						_thisRef.groupAnswered[ctag][corAns-1] = answered == undefined? 1:answered;
						isFound = true;						
						break;
					}
					else
					{						
						isSame = true;
					}					
				}
				
			}
			if(isFound)
			{
				isStarted = true;
				resultArr[i] = 1;
				$("#tick"+i).attr('src', '../../../common/images/tick.png');
				var gtag = ansGroupArr[corAns-1];
				ansGroupArr[corAns - 1] = (gtag == undefined) ? 1 : (gtag+1);
				if(clue == 1) {
				dropObjectArr[corAns - 1].push(1);}
				correctCnt++;
			}
			else
			{
				resultArr[i] = 0;
				$("#tick"+i).attr('src', '../../../common/images/wrong.png');
				isStarted = true;
				if(isSame || actAns != 'drag-1')
				{
					var gtag = ansGroupArr[corAns - 1];
					ansGroupArr[corAns - 1] = (gtag == undefined) ? 1 : (gtag+1);
					dropObjectArr[corAns - 1].push(2);
				}
				else
					dropObjectArr[corAns - 1].push(0);
			}
		}
		else if(parseInt(corAns,10) == parseInt(actAns,10))
		{			
			isStarted = true;
			resultArr[i] = 1;
			$("#tick"+i).attr('src', '../../../common/images/tick.png');
			var gtag = ansGroupArr[actAns - 1];
			ansGroupArr[actAns - 1] = (gtag == undefined) ? 1 : (gtag+1);
			if(clue== 1) {
			dropObjectArr[actAns - 1].push(1);}
			correctCnt++;
		}
		else if(clue == 1)
		{
			resultArr[i] = 0;	
			$("#tick"+i).attr('src', '../../../common/images/wrong.png');
		
			if(actAns != "drag-1"){
				isStarted = true;
				var gtag = ansGroupArr[corAns - 1];
				ansGroupArr[corAns - 1] = (gtag == undefined) ? 1 : (gtag+1);
				dropObjectArr[corAns - 1].push(2);
			}
			else
			{
				dropObjectArr[corAns - 1].push(0);
			}
		}
		else
		{			
			resultArr[i] = 0;	
			$("#tick"+i).attr('src', '../../../common/images/wrong.png');		
		}
		
		$("#tick"+i).css("display","block");
		$("#tick"+i).css("left",$("#drop"+i+" img").width()+2);
		$("#tick"+i).css("top",($("#drop"+i+" img").height()/2 - 7));
		$("#tick"+i).show();
	}

	if(clue == 1 && isStarted)
	{
		for(var k=0;k<_thisRef.groupArr.length;k++)
		{
			ansGroupArr[k] = (ansGroupArr[k] == undefined) ? 0: ansGroupArr[k]
			var ansCnt = ansType == 'one-many-group' ? _thisRef.groupAnsCount[k]/30:_thisRef.groupAnsCount[k];	
			
			var eLen = (ansCnt - ansGroupArr[k]);
			var sLen = ((k+1)*_thisRef.groupDropCount[k])-1			
			var cnt = 0, s=0;
			for(var j=sLen;j>=(sLen+1-_thisRef.groupDropCount[k]);j--)
			{					
				cnt++;
				if(s < eLen && dropObjectArr[k][_thisRef.groupDropCount[k]-cnt] == 0)
				{
					s++;
					$("#tick"+j).attr('src', '../../../common/images/wrong.png');
				}
				else if(dropObjectArr[k][_thisRef.groupDropCount[k]-cnt] != 2)
				{
					$("#tick"+j).attr('src', '../../../common/images/tick.png');
				}					
						
			}	
		}
	}
	
	if(correctCnt == _thisRef.drops.length || (clue == 1 && correctCnt == _thisRef.drags.length) || (ansType == 'one-many-group' && clue == 1 && correctCnt == totalAnswers))
	{
		isCorrect = true;
	}
	else
	{
		isCorrect = false;
	}
	$("#drop"+i).data('dropped', {num:"drag-1", dragItem:null});
	
	_thisRef.ddComp.showFeedback({correctCnt:correctCnt, resultArr:resultArr, isCorrect:isCorrect});
		
}

_thisRef.resetAnswers = function()
{
    _thisRef.snapResArr = [];
	if(_thisRef.dataObject.instobj.ansType == 'many-one' &&(typeof _thisRef.dataObject.instobj.isDragSets != undefined && _thisRef.dataObject.instobj.isDragSets == true))
	_thisRef.groupAnsCount = [];
	_thisRef.dragIndex = 10;
    for(var i=0;i<_thisRef.drags.length;i++)
    {
        var element = "#drag"+i;
		var id = $(element).attr('id');
        $(element).animate({"left": +$(element).data('x')+"px", "top": +$(element).data('y')+"px"}, "slow", function(){_thisRef.resetDrags($(this));});
		$(element).data("isDropped", {});
		$(element).data('dItem', null) 
		$(element).css('z-index',_thisRef.dragIndex);
    }
	for(var j=0;j<_thisRef.drops.length;j++)
	{
		var dropElement = "#drop"+j;
        $(dropElement).data('dropped', {num:"drag-1", dragItem:null});
        $(dropElement).data('test', null);
		$(dropElement).data('contains',0);
		 
		$("#tick"+j).hide();
		$("#tick"+j).css("display","none");
	}
    $("#ID_FEEDBACK").animate({"height":"0px"},"slow",function(){$("#ID_FEEDBACK").remove()});	
}

_thisRef.resetDrags = function(element)
{
	var len = _thisRef.drags.length;
	if(element.attr('id').split('drag')[1] == (len-1) && _thisRef.dataObject.instobj.ansType == 'snap-back' && (typeof _thisRef.dataObject.instobj.isDragSets != undefined && _thisRef.dataObject.instobj.isDragSets == true)){
		for(var i=0;i<len;i++)
		{
			var element = "#drag"+i;
			$(element).remove();
		}
		_thisRef.buildDragItems();
	}
	
	if(element.attr('id').split('drag')[1] == (len-1) && _thisRef.dataObject.instobj.ansType == 'many-one' && (typeof _thisRef.dataObject.instobj.isDragSets != undefined && _thisRef.dataObject.instobj.isDragSets == true)){
		for(var i=0;i<len;i++)
		{
			var element = "#drag"+i;
			$(element).remove();
		}
		_thisRef.buildDragItems();
	}
}

_thisRef.checkGroup = function(ans)
{
	var isFound = false;
	for(var i=0;i<_thisRef.groupArr.length;i++)
	{
		if(ans == _thisRef.groupArr[i])
		{
			isFound = true;
			break;
		}
	}
	if(!isFound)
	{
		_thisRef.groupArr.push(ans);
	}
}

_thisRef.touchHandler = function(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";

    switch(event.type)
    {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type="mousemove"; break;
        case "touchend":   type="mouseup"; break;
        default: return;
    }
    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1,
                              first.screenX, first.screenY,
                              first.clientX, first.clientY, false,
                              false, false, false, 0/*left*/, null);
 
    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}
 
_thisRef.initTouch = function()
{
   document.addEventListener("touchstart", _thisRef.touchHandler, true);
   document.addEventListener("touchmove", _thisRef.touchHandler, true);
   document.addEventListener("touchend", _thisRef.touchHandler, true);
   document.addEventListener("touchcancel", _thisRef.touchHandler, true);
}

_thisRef.enableDrag = function(dragDiv)
{
    _thisRef.dragItem = null;
        
    $(function() {
       _thisRef.initTouch();
        var pointerY;
        var pointerX;
        var diff;
		var scaleVal;
        $(dragDiv).draggable({
            revert: false,			
			start:function(evt, ui){
				$(this).css('z-index',_thisRef.dragIndex++);
                _thisRef.dropItem = null;
                _thisRef.dragItem = this;
				scaleVal = $('#mainDiv').data('scaleVal');
				diff = (evt.pageY - $('#canvas').offset().top) / parseInt($(evt.target).css('top'));
				pointerY = parseInt($(evt.target).css('top')) / evt.pageY;		
				pointerX = (evt.pageX - $('#canvas').offset().left) / 1 - parseInt($(evt.target).css('left'));
		
				diff = (evt.pageY - $('#canvas').offset().top) / (1) - parseInt($(evt.target).css('top'));
			},
			drag : function(evt, ui) {	    
				 $("#ID_FEEDBACK").remove();
		
				 if($(this).data('dItem') != undefined && $(this).data('dItem') != null)
				 {
					  $($(this).data('dItem')).data('contains',0);
					  $(this).data('dItem', null)
				 }
				 if($(this).data("isDropped")!= undefined && $(this).data("isDropped").flag == 1)
				 {			 
					 var id = $(this).data("isDropped").drop.attr('id').split('drop')[1];			
					 $("#tick"+id).hide();			 
					 $(this).data("isDropped").drop.data('dropped', {num:"drag-1", dragItem:null});
					 $(this).data("isDropped").drop.data('test', null);			 
				 }		      
		    
				/*if (!createjs.Touch.isSupported()) { 				
					ui.position.top = (evt.pageY * pointerY);
					ui.position.left = Math.round((evt.pageX - $('#canvas').offset().left) / scaleVal - pointerX);
				}
				else
				{
					ui.position.top = Math.round((evt.pageY - $('#canvas').offset().top) / (scaleVal) - diff); 
					ui.position.left = Math.round((evt.pageX - $('#canvas').offset().left) / scaleVal - pointerX);				
				}*/
				if (ui.position.left < -100) 
					ui.position.left = -100;
				if (ui.position.left + $(this).width() > $('#mainDiv').width())
					ui.position.left = $('#mainDiv').width() - $(this).width();  
				if (ui.position.top < 0)
					ui.position.top = 0;
				if (ui.position.top + $(this).height() > $('#mainDiv').height())
					ui.position.top = $('#mainDiv').height() - $(this).height(); 
			
			},
            stop:function(){
					if(_thisRef.dropItem == null){
						$(this).data("isDropped", {});		    
						_thisRef.snapResArr[$(_thisRef.dragItem).attr('id').split('drag')[1]] = 0;
						$(this).animate({"left": +this.x+"px", "top": +this.y+"px"}, "slow");
					}
            }
        });
    });
}
_thisRef.enableDrop = function(dropDiv)
{
    $(dropDiv).droppable({
        out:function() {           
            $(this).data('test', null);	    
        },
        drop: function() {	    
				var tID = $(this).attr('id').split('drop')[1];
				
				$("#tick"+tID).hide();
				if(_thisRef.dataObject.instobj.ansType == 'snap-back')
				{
					_thisRef.dropItem = this;
							
					var tag = $(_thisRef.dragItem).data('tag');
					var ans = $(this).data('answer');
					
					if(tag == ans)
					{			
						if($(this).data('contains') == 1)
						{
							var prevDrag = $(this).data('dropped').dragItem;				
							$(prevDrag).data('dItem', null);
							$(prevDrag).animate({"left": +prevDrag.x+"px", "top": +prevDrag.y+"px"}, "slow");
							_thisRef.snapResArr[$(prevDrag).attr('id').split('drag')[1]] = 0;
						}
						
						$(_thisRef.dragItem).data('dItem', this);
						$(this).data('contains', 1);			
						$(_thisRef.dragItem).css("left", this.x);
						$(_thisRef.dragItem).css("top", this.y);
						$(this).data('dropped', {num: $(_thisRef.dragItem).attr('id'), dragItem:_thisRef.dragItem});
						_thisRef.snapResArr[$(_thisRef.dragItem).attr('id').split('drag')[1]] = 1;
					}
					else
					{			
						_thisRef.snapResArr[$(_thisRef.dragItem).attr('id').split('drag')[1]] = 0;
						$(_thisRef.dragItem).animate({"left": +$(_thisRef.dragItem).data('x')+"px", "top": +$(_thisRef.dragItem).data('y')+"px"}, "slow");
					}
					_thisRef.validateAnswers();
				}
				else{
					_thisRef.dropItem = this;				
					if($(this).data('contains') == 1)
					{
						var prevDrag = $(this).data('dropped').dragItem;
						$(prevDrag).data("isDropped", {});
						$(prevDrag).data('dItem', null);		
						$(prevDrag).animate({"left": +prevDrag.x+"px", "top": +prevDrag.y+"px"}, "slow");
					}
							
					$(_thisRef.dragItem).data('dItem', this);
					$(this).data('contains', 1);
					$(_thisRef.dragItem).css("left", this.x);
					$(_thisRef.dragItem).css("top", this.y);
					$(this).data('dropped', {num: $(_thisRef.dragItem).attr('id'), dragItem:_thisRef.dragItem});
					$(this).data('test', _thisRef.dragItem);
					$(_thisRef.dragItem).data("isDropped", {flag:1, drop:$(this)});
				}
        }
    });
}

_thisRef.validateAnswers = function()
{
		var cnt = 0;
		for(var j=0;j<_thisRef.snapResArr.length;j++)
		{			
			if(_thisRef.snapResArr[j] == 1){
				cnt++;
			}
		}
		if(_thisRef.drags.length == cnt)
		{
			_thisRef.ddComp.showFeedback({isCorrect:true});
		}

}

_thisRef.imageLoaded = function(evt, data)
{		
}

_thisRef.setLabel = function(data)
{
	
	if(data.image)
	{
		
		var iconimageDiv = document.createElement('img');
		iconimageDiv.id="iconimageDiv";
		iconimageDiv.src = data.image;
		var top = $(data.imgDiv).offset().top;
		var left = $(data.imgDiv).offset().left;
	
		if(data.droppable)
			iconimageDiv.style.cssText = "position:absolute;font-size:10px;top:0;height:auto;text-align:center;left:0;color:#A7A5A6";
		else
			iconimageDiv.style.cssText = "position:absolute;font-size:11px;top:0;height:auto;text-align:center;left:0;color:#0D658B";
	
		data.btnDiv.appendChild(iconimageDiv);

		$(iconimageDiv).width($(data.imgDiv).width());
		return;	
	}
	
		var labelDiv = document.createElement('div');
        labelDiv.id = "text"+data.compId;
		labelDiv.innerHTML = $(_thisRef.xmlData).find("component#"+data.compId).text();	
	
		var top = $(data.imgDiv).offset().top;
		var left = $(data.imgDiv).offset().left;
	
		if(data.droppable)
			labelDiv.style.cssText = "position:absolute;font-size:10px;top:0;height:auto;text-align:center;left:0;color:#A7A5A6";
		else
			labelDiv.style.cssText = "position:absolute;font-size:11px;top:0;height:auto;text-align:center;left:0;color:#0D658B";
	
		data.btnDiv.appendChild(labelDiv);

		$(labelDiv).css('margin-top', + ($(data.imgDiv).height() - $(labelDiv).height())/ 2 + "px");
		$(labelDiv).width($(data.imgDiv).width());
}


_thisRef.cleanUp = function()
{
	
}