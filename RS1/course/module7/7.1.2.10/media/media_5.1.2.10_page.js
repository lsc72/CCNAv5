loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


(slideViewDidLoad = function(_container,_id)
{
	
		var _canvas = $("#commonMediaText");
		
		_canvas.append('<div id="left_box"></div><div id="right_box"></div><div id="leftShow"><span id="arrowleft"></span><span id="contentleft"></span></div><div id="rightShow"><span id="arrowright"></span><span id="contentright"></span></div>');
		
		
		var _txt_01 = getMediaText("ID_txt13");
		var _txt_02 = getMediaText("ID_txt14");
		
			$("#contentleft").append(_txt_01);
			$("#contentright").append(_txt_02);
			
			$("#contentright, #contentleft").addClass('orangeCallOut');
		
		var domLeft = new createjs.DOMElement(document.getElementById("left_box"));
		var domRight = new createjs.DOMElement(document.getElementById("right_box"));
		var domLeftShow = new createjs.DOMElement(document.getElementById("leftShow"));
		var domRightShow = new createjs.DOMElement(document.getElementById("rightShow"));
		
		
		
		_container.addChild(domLeft);
		_container.addChild(domRight);
		_container.addChild(domLeftShow);
		_container.addChild(domRightShow);
		
		$('#arrowright, #contentright, #arrowleft, #contentleft').css('display','none');
		
		$("#left_box").click( function(){
			$('#arrowleft, #contentleft').css('display','block');		
			$('#arrowright, #contentright').css('display','none');
			
		});
		
		$("#right_box").click( function(){
		
			$('#arrowleft, #contentleft').css('display','none');		
			$('#arrowright, #contentright').css('display','block');
		});
				
});
