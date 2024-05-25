
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
	var btn;
	var dom;
	/* Subnet Mask Bin */
		$("#commonMediaText").append('<input id="subnetMaskBin1" mode="subnetMaskBin" class="bluebox" maxlength="35" style="width:272px" />');		
			dom = new createjs.DOMElement(document.getElementById("subnetMaskBin1"));
			dom.x = 285;
			dom.y = 147;		
			_container.addChild(dom);
			
		$("#commonMediaText").append('<input id="subnetMaskBin2" mode="subnetMaskBin" class="bluebox" maxlength="35" style="width:272px" />');		
			dom = new createjs.DOMElement(document.getElementById("subnetMaskBin2"));
			dom.x = 285;
			dom.y = 174.8;		
			_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="subnetMaskBin3" mode="subnetMaskBin" class="bluebox" maxlength="35" style="width:272px" />');		
			dom = new createjs.DOMElement(document.getElementById("subnetMaskBin3"));
			dom.x = 285;
			dom.y = 202;		
			_container.addChild(dom);
			
		$("#commonMediaText").append('<input id="subnetMaskBin4" mode="subnetMaskBin" class="bluebox" maxlength="35" style="width:272px" />');		
			dom = new createjs.DOMElement(document.getElementById("subnetMaskBin4"));
			dom.x = 285;
			dom.y = 229;		
			_container.addChild(dom);
			
		$("#commonMediaText").append('<input id="subnetMaskBin5" mode="subnetMaskBin" class="bluebox" maxlength="35" style="width:272px" />');		
			dom = new createjs.DOMElement(document.getElementById("subnetMaskBin5"));
			dom.x = 285;
			dom.y = 255.8;		
			_container.addChild(dom);
			
	/* Subnet Mask Dec */
		$("#commonMediaText").append('<input id="subnetMaskDec1" mode="subnetMaskDec" class="bluebox" maxlength="16" style="width:120px" />');		
			dom = new createjs.DOMElement(document.getElementById("subnetMaskDec1"));
			dom.x = 567;
			dom.y = 147;		
			_container.addChild(dom);
			
		$("#commonMediaText").append('<input id="subnetMaskDec2" mode="subnetMaskDec" class="bluebox" maxlength="16" style="width:120px" />');		
			dom = new createjs.DOMElement(document.getElementById("subnetMaskDec2"));
			dom.x = 567;
			dom.y = 174.8;		
			_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="subnetMaskDec3" mode="subnetMaskDec" class="bluebox" maxlength="16" style="width:120px" />');		
			dom = new createjs.DOMElement(document.getElementById("subnetMaskDec3"));
			dom.x = 567;
			dom.y = 202;		
			_container.addChild(dom);
			
		$("#commonMediaText").append('<input id="subnetMaskDec4" mode="subnetMaskDec" class="bluebox" maxlength="16" style="width:120px" />');		
			dom = new createjs.DOMElement(document.getElementById("subnetMaskDec4"));
			dom.x = 567;
			dom.y = 229;		
			_container.addChild(dom);
			
		$("#commonMediaText").append('<input id="subnetMaskDec5" mode="subnetMaskDec" class="bluebox" maxlength="16" style="width:120px" />');		
			dom = new createjs.DOMElement(document.getElementById("subnetMaskDec5"));
			dom.x = 567;
			dom.y = 255.8;		
			_container.addChild(dom);
		
	/* Prefix Notation */
		$("#commonMediaText").append('<input id="prefixNotation1" mode="prefixNotation" class="bluebox" maxlength="3" style="width:68px" />');		
			dom = new createjs.DOMElement(document.getElementById("prefixNotation1"));
			dom.x = 697;
			dom.y = 147;		
			_container.addChild(dom);
			
		$("#commonMediaText").append('<input id="prefixNotation2" mode="prefixNotation" class="bluebox" maxlength="3" style="width:68px" />');		
			dom = new createjs.DOMElement(document.getElementById("prefixNotation2"));
			dom.x = 697;
			dom.y = 174.8;		
			_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="prefixNotation3" mode="prefixNotation" class="bluebox" maxlength="3" style="width:68px" />');		
			dom = new createjs.DOMElement(document.getElementById("prefixNotation3"));
			dom.x = 697;
			dom.y = 202;		
			_container.addChild(dom);
			
		$("#commonMediaText").append('<input id="prefixNotation4" mode="prefixNotation" class="bluebox" maxlength="3" style="width:68px" />');		
			dom = new createjs.DOMElement(document.getElementById("prefixNotation4"));
			dom.x = 697;
			dom.y = 229;		
			_container.addChild(dom);
			
		$("#commonMediaText").append('<input id="prefixNotation5" mode="prefixNotation" class="bluebox" maxlength="3" style="width:68px" />');		
			dom = new createjs.DOMElement(document.getElementById("prefixNotation5"));
			dom.x = 697;
			dom.y = 255.8;		
			_container.addChild(dom);
		
	
		
/* input limit and validation */

/* feedback */
	feeback = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:230.15,y:326.65,width:531,height:60.35,titleId:"ID_INCORRECT_TITLE",bodyId:"ID_INCORRECT_BODY",visible:"0"});			  
	_container.addChild(feeback);
		
/* Core function */
$("input[mode=subnetMaskBin]").keypress(function (evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-1\b\t]|\./;
  if( !regex.test(key) && (!(key == 8  ||  key == 27  || key == 46  || key == 37 || key == 39 )) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
});
$("input[mode=subnetMaskDec]").keypress(function (evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9\b\t]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
});

$("input[mode=prefixNotation]").keypress(function (evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /^[//0-9\b\t]/;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
});
/* check function */	
		var checkBit = function(){
		var input =new Array();
		var answers = new Array(  ["11111111.11111111.11111111.00000000", "255.255.255.0", "/24"],
								  ["11111111.11111111.11111111.11100000", "255.255.255.224", "/27"],
								  ["11111111.11111111.11111100.00000000", "255.255.252.0", "/22"],
								  ["11111111.11111111.11111111.10000000", "255.255.255.128", "/25"],
								  ["11111111.11111111.11111111.11110000", "255.255.255.240", "/28"],
								  ["11111111.11111111.11111110.00000000", "255.255.254.0", "/23"]);
			for(var m=1;m<6;m++){
				var subnetBin=$("#subnetMaskBin"+m).val();
				var subnetDec=$("#subnetMaskDec"+m).val();
				var prefixNotation=$("#prefixNotation"+m).val();
				if((subnetBin==answers[m][0])&&(subnetDec==answers[m][1])&&(prefixNotation==answers[m][2])){
					feeback.setTitleId("ID_CORRECT_TITLE");
					feeback.setBodyId("ID_CORRECT_BODY");
						var subnetBin="";
						var subnetDec="";
						var prefixNotation="";
					}
			   else{
					feeback.setTitleId("ID_INCORRECT_TITLE");
					feeback.setBodyId("ID_INCORRECT_BODY");
				   
				   }
				   feeback.visible=1;
					update = true;
				}
	
			}
		
	/* Reset function */
		var resetBit = function(){
			feeback.visible=0;
			for(var m=1;m<6;m++){
				$("#subnetMaskBin"+m).attr("value","");
				$("#subnetMaskDec"+m).attr("value","");
				$("#prefixNotation"+m).attr("value","");
			}
		}
	
	//alert(mediaStage);
	btn = getCJSElement("BLUE_BUTTON",{x:368.35,y:292.85,width:108,height:21,size:12,compId:"ID_btn01",callback:checkBit});
	_container.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:508.55,y:292.85,width:120,height:21,size:12,compId:"ID_btn02",callback:resetBit});
	_container.addChild(btn);
	

});
