
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
	var btn;
	var _data,randomNumber;
	var feeback;
	
	var dom;
		$("#commonMediaText").append('<input id="show" style="width:67.7px; padding:4px 0px;"/>');		
		dom = new createjs.DOMElement(document.getElementById("show"));
		dom.x = 520;
		dom.y = 64;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="val1" style="width:30px;" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("val1"));
		dom.x = 375;
		dom.y = 177;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="val2" style="width:30px;" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("val2"));
		dom.x = 420;
		dom.y = 177;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="val3" style="width:30px;" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("val3"));
		dom.x = 468;
		dom.y = 177;		
		_container.addChild(dom);
	
		$("#commonMediaText").append('<input id="val4" style="width:30px;" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("val4"));
		dom.x = 513;
		dom.y = 177;		
		_container.addChild(dom);
	
		$("#commonMediaText").append('<input id="val5" style="width:30px;" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("val5"));
		dom.x = 558;
		dom.y = 177;		
		_container.addChild(dom);
		
		$("#commonMediaText").append('<input id="val6" style="width:30px;" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("val6"));
		dom.x = 605;
		dom.y = 177;
		_container.addChild(dom);
	
		$("#commonMediaText").append('<input id="val7" style="width:30px;" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("val7"));
		dom.x = 653;
		dom.y = 177;
		_container.addChild(dom);
		
			
		$("#commonMediaText").append('<input id="val8" style="width:30px;" disabled="true"/>');	
		dom = new createjs.DOMElement(document.getElementById("val8"));
		dom.x = 698;
		dom.y = 177;
		_container.addChild(dom);
	
	
	
	
	var mainresult;

	function generaterandom(limit)
	{
		randomNumber = Math.floor(Math.random()*(limit+1));	
		change(randomNumber);
	}

	function isNum(args)
	{
		args = args.toString();
		if (args.length == 0)
			return false;

		for (var i = 0;i<args.length;i++)
		{
			if (args.substring(i,i+1) < "0" || args.substring(i, i+1) > "9")
			{
				return false;
			}
		}

		return true;
	}
	function binToDeci(arg)
	{
		
		var res1 = 999;
		var args = arg;
		while(args>1)
		{
			var arg1 = parseInt(args/2);
			var arg2 = args%2;
			args = arg1;
			if(res1 == 999)
			{
				res1 = arg2.toString();
			}
			else
			{
				res1 = arg2.toString()+res1.toString();
			}
		}
		if(args == 1 && res1 != 999)
		{
			res1 = args.toString()+res1.toString();
		}
		else if(args == 0 && res1 == 999)
		{
			res1 = 0;
		}
		else if(res1 == 999)
		{
			res1 = 1;
		}
		var ll = res1.length;
		
		while(ll%8 != 0)
		{
			res1 = "0"+res1;
			ll = res1.length;
		}
		
		for(i=0;i<=ll;i++)
		{
			$("input#val"+(i+1)).attr("value",res1[i]);
		}
			
		mainresult = res1;	
	}

		function change(randomNumber)
		{
			if(isNum(randomNumber))
			{
				var result = binToDeci(randomNumber);	
			}	
		}
		$("#show").attr('maxlength','3');
		$("#show").keyup(function (event) {
			this.value = this.value.replace(/[^0-9\.]/g,'');
		});
		
		feeback = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:359.15,y:269.1,width:368,height:83,titleId:"ID_INCORRECT_TITLE",bodyId:"ID_INCORRECT_BODY",visible:"0"});			  
		_container.addChild(feeback); 
	
		function checkBit(){
			var user = $("#show").attr("value");
		  if(user==randomNumber)  {		 
				feeback.setTitleId("ID_CORRECT_TITLE");
				feeback.setBodyId("ID_CORRECT_BODY");				
			}
			else{
				feeback.setTitleId("ID_INCORRECT_TITLE");
				feeback.setBodyId("ID_INCORRECT_BODY");
			}	
			feeback.visible=1;
			update = true;			
		}
		//reset function
		function resetBit(){
			$("#show").attr("value","");
			feeback.visible=0;
		}
		
		function newBit(){
			$("#show").attr("value","");
			feeback.visible=0;	
			for(var k=1; k<=9; k++){
				$("input#val"+k).attr("value","");
			}			
			generaterandom(256);
		}
	generaterandom(256);
	//alert(mediaStage);
	btn = getCJSElement("BLUE_BUTTON",{x:362.05,y:236.55,width:108,height:21,size:12,compId:"ID_btn01",callback:checkBit});
	_container.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:489,y:236.55,width:108,height:21,size:12,compId:"ID_btn02",callback:resetBit});
	_container.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:617,y:236.55,width:108,height:21,size:12,compId:"ID_btn03",callback:newBit});
	_container.addChild(btn);
	
});
