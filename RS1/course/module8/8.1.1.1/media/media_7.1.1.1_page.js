
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{


	var btn;
	if(_id == 1)
	{	
		var getTrans = function()
		{
			var bin = "";
			var binCon = "";
			var iNumber;
			var valuePair;
			key = document.getElementById("bitInput");
			value=key.value;
			
				
				
			for(var i=0;i<value.length;i++){
				iNumber=value.charCodeAt(i);					
						while (iNumber>0) {
								if (iNumber%2) {
									
									bin = "1"+bin;
									
								} else {
									bin = "0"+bin;
								}
								iNumber = Math.floor(iNumber/2);
						}
						
					while (bin.length<8) { 
						bin = "0"+bin; 
					}
					
					binCon=binCon+bin;
					bin="";			
					}				
								
			$("#bitOutput").append(binCon);	
		}
		
		var clearArea = function(){
		
			$("#bitInput").attr("value","");
			$("#bitOutput").empty();
		}

	//put bit
	var bitIn = document.createElement('input');
		bitIn.id = "bitInput";
		bitIn.style.cssText = "position:absolute;width:63.95px;";
		$("#slide_1").append(bitIn);

		var _domBitIn = new createjs.DOMElement(bitIn);
		_domBitIn.x = 45.65;
		_domBitIn.y = 159;
		
		_container.addChild(_domBitIn);
		
	//get bit ans
	var bitOut = document.createElement('div');
		bitOut.id = "bitOutput";
		bitOut.style.cssText = "position:absolute;width:281.1px;";
		$("#slide_1").append(bitOut);

		var _domBitOut = new createjs.DOMElement(bitOut);
		_domBitOut.x = 139.8;
		_domBitOut.y = 159;
		
		_container.addChild(_domBitOut);
	
	$('#bitInput').attr('maxlength','5');
	//alert(mediaStage);
	btn = getCJSElement("BLUE_BUTTON",{x:18.7,y:202.5,width:195,height:21,size:12,id:"trans",compId:"ID_s1_btn01",callback:getTrans});
	_container.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:227.65,y:202.5,width:195,height:21,size:12,id:"clear",compId:"ID_s1_btn02",callback:clearArea});
	_container.addChild(btn);
	
			
	}
});
