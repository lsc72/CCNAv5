loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(FIBActivity = function(container,id,answerArr){
	for(var i=0;i<8;i++)
	{				
		var bitIn = document.createElement('input');
		bitIn.id = "iTxt0"+id+"_0"+i;
		
		bitIn.data = i;
		bitIn.style.cssText = "position:absolute;width:40px";
		bitIn.onchange = function(event) {
			validateThis(this.value,this.data,this.id);
		}
		$("#slide_"+id).append(bitIn);
		
		var _domBitIn = new createjs.DOMElement(document.getElementById(bitIn.id));
		_domBitIn.x = i*49.7+350 ;
		_domBitIn.y = 184;				

		container.addChild(_domBitIn);		
		
		
		
		
		var bitmap = new createjs.Bitmap("../../../common/images/tick.png");
		container.addChild(bitmap);
		bitmap.x=i*49.7+358;
		bitmap.y=202;
		bitmap.name="tick_"+i;
		bitmap.visible=0;
		
		//wrong image
		bitmap = new createjs.Bitmap("../../../common/images/wrong.png");
		container.addChild(bitmap);
		bitmap.x=i*49.7+358;
		bitmap.y=202;
		bitmap.name="wrong_"+i;
		bitmap.visible=0;
	}
	
	
	bitIn = document.createElement('input');
	bitIn.id = "iTxt0"+id+"_08";
	
	bitIn.data = 8;
	bitIn.style.cssText = "position:absolute;width:380px;text-align:left;";
	bitIn.onchange = function(event) {
		validateThis(this.value,this.data,this.id);
	}
	$("#commonMediaText").append(bitIn);
	
	var _domBitIn = new createjs.DOMElement(document.getElementById(bitIn.id));
	_domBitIn.x = 350 ;
	_domBitIn.y = 234;				

	container.addChild(_domBitIn);
	
	
	bitmap = new createjs.Bitmap("../../../common/images/tick.png");
	container.addChild(bitmap);
	bitmap.x=530;
	bitmap.y=252;
	bitmap.name="tick_8";
	bitmap.visible=0;
	
	//wrong image
	bitmap = new createjs.Bitmap("../../../common/images/wrong.png");
	container.addChild(bitmap);
	bitmap.x=530;
	bitmap.y=252;
	bitmap.name="wrong_8";
	bitmap.visible=0;
		
	
	
	function validateThis(val, i, id){
		
		var tf = $("#"+id);
		
		container.getChildByName("wrong_"+i).visible=0;
		container.getChildByName("tick_"+i).visible=0;
		//alert(val + "   " + i);
		if(answerArr[i]!=val){
			container.getChildByName("wrong_"+i).visible=1;
			tf.css( "color", "#E31C23" );
		}else{
			container.getChildByName("tick_"+i).visible=1;
			tf.css( "color", "#46A040" );
		}
		
	}
	
	
	function checkHandler(){
		hideAll();
		var allCorrect=true;
		for(var i=0;i<9;i++)
		{
			var tf = $("#iTxt0"+id+"_0"+i);
			var txt=tf.val();
			
			if(answerArr[i]!=txt){
				allCorrect=false;
				container.getChildByName("wrong_"+i).visible=1;
				tf.css( "color", "#E31C23" );
			}else{
				container.getChildByName("tick_"+i).visible=1;
				tf.css( "color", "#46A040" );
			}
		}
		
		
		
		
		if(allCorrect){
			ansPopupWindow.visible=1;
		}else{
			
		}
		update=true;

	}
	
	
	function resetHandler(){
		for(var i=0;i<9;i++)
		{
			var tf = $("#iTxt0"+id+"_0"+i);
			tf.css( "color", "#393536" );
			tf.val("");
		}
		hideAll();
		
	}

	function hideAll(){
		ansPopupWindow.visible=0;
		for(var i=0;i<9;i++)
		{
			container.getChildByName("wrong_"+i).visible=0;
			container.getChildByName("tick_"+i).visible=0;
		}
	}
	
	
	var btn;
	
	btn = getCJSElement("BLUE_BUTTON",{x:514.05,y:291,width:100,height:21,compId:"ID_s1_check",id:"check",callback:checkHandler});
	container.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:640.05,y:291,width:100,height:21,compId:"ID_s1_reset",id:"reset",callback:resetHandler});
	container.addChild(btn);
	
	var ansPopupWindow = getCJSElement("TEXTBOX",{x:250,y:288.75,width:250,height:90,subType:"CLOSABLE",titleId:"ID_correctTitle",bodyId:"ID_correctBody",visible:"0"});
	container.addChild(ansPopupWindow);

	
});









(slideViewDidLoad = function(container,id){
	if(id == 1)
	{	
		var answerArr = ["2001","0","DB8","1111","0","0","0","200","2001:0:DB8:1111::200"];
		var act = new FIBActivity(container,1,answerArr);
	}
	
	if(id == 2)
	{	
		var answerArr = ["2013","0","123","4567","89AB","CDEF","0","1","2013:0:123:4567:89AB:CDEF::1"];
		var act = new FIBActivity(container,2,answerArr);
	}
	
	if(id == 3)
	{	
		var answerArr = ["0","0","0","0","0","0","0","1","::1"];
		var act = new FIBActivity(container,3,answerArr);
	}
	
	if(id == 4)
	{	
		var answerArr = ["2012","ABCD","EF01","2345","678","910","AAAA","BBBB","2012:ABCD:EF01:2345:678:910:AAAA:BBBB"];
		var act = new FIBActivity(container,4,answerArr);
	}
	
	if(id == 5)
	{	
		var answerArr = ["AB1E","2B00","0","1234","5678","9101","1112","1113","AB1E:2B00::1234:5678:9101:1112:1113"];
		var act = new FIBActivity(container,5,answerArr);
	}
	
	if(id == 6)
	{	
		var answerArr = ["BB2B","EF12","BFF3","9125","1111","101","1111","101","BB2B:EF12:BFF3:9125:1111:101:1111:101"];
		var act = new FIBActivity(container,6,answerArr);
	}
	
	
	if(id == 7)
	{	
		var answerArr = ["1129","1984","2233","4455","6677","0","0","101","1129:1984:2233:4455:6677::101"];
		var act = new FIBActivity(container,7,answerArr);
	}
	
	
	if(id == 8)
	{	
		var answerArr = ["1111","0","0","0","0","0","101","1111","1111::101:1111"];
		var act = new FIBActivity(container,8,answerArr);
	}
	
	
	if(id == 9)
	{	
		var answerArr = ["1031","1976","1","2","3","4","0","101","1031:1976:1:2:3:4::101"];
		var act = new FIBActivity(container,9,answerArr);
	}
	
	
	if(id == 10)
	{	
		var answerArr = ["0","0","0","1234","6678","9101","0","34AB","::1234:6678:9101:0:34AB"];
		var act = new FIBActivity(container,10,answerArr);
	}
	
}); 