
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
 {	
	$("#ID_score").html("5");
		
	//Variables
	var pass_btn, block_btn, reset_btn, start_btn;
	var _data, randomNumber, feeback, feeback2, dom;
	var access = "none", isStart = false, isFirst = true, inc = 0, packetCont, rtr;

	var octNum1;
	var octNum2;
	var octNum3;
	var octNum4;
	var correctAnswer;
	var userAnswer;
	var count = 0;
	var IPaddress;
	
	rootCont = new createjs.Container();
	scoreCont = new createjs.Container();
	
	
	/////////////////////////////////////////////////////////
	function getOctect1() {
		octNum1=parseInt(Math.random()*223);
		if (octNum1==0) {
			octNum1=parseInt(Math.random()*223);
		}
	}
	function getOctect2() {
		octNum2=parseInt(Math.random()*255);
		if (octNum2==0) {
			octNum2=parseInt(Math.random()*255);
		}
	}
	function getOctect3() {
		octNum3=parseInt(Math.random()*255);
		if (octNum3==0) {
			octNum3=parseInt(Math.random()*255);
		}
	}
	function getOctect4() {
		octNum4=parseInt(Math.random()*254);
		if (octNum4==0) {
			octNum4=parseInt(Math.random()*254);
		}
	}

	function chkValidity() {
		if ((octNum1 ==10) || ((octNum1 ==192) && (octNum2 ==168) ) || ( (octNum1 ==172) && ((octNum2 >15) && (octNum2 <32) )) ) {
			correctAnswer="block";
			//trace("correct answer is::"+correctAnswer);
		} else {
			//trace("correct answer is::"+correctAnswer);
			correctAnswer="pass";
		}
	}

	function getOctet() {
		getOctect1();
		getOctect2();
		getOctect3();
		getOctect4();
		if ( (octNum1 > 3) && (octNum1 < 14)) {
			octNum1=10;
		}
		if ( (octNum1 > 26) && (octNum1 < 34)) {
			octNum1=10;
		}
		if ( (octNum1 > 56) && (octNum1 < 64)) {
			octNum1=10;
		}
		if ( (octNum1 > 183) && (octNum1 < 194)) {
			octNum1=192;
			octNum2=168;
		}
		if ( (octNum1 > 205) && (octNum1 < 208)) {
			octNum1=192;
			octNum2=168;
		}
		if ( (octNum1 > 155) && (octNum1 < 168)) {
			octNum1=192;
			octNum2=168;
		}
		if ( (octNum1 > 170) && (octNum1 < 176)) {
			octNum1=172;
			octNum2=parseInt(Math.random()*31);
			if ((octNum2 >15) && (octNum2 < 31)) {
				octNum2=octNum2+parseInt(Math.random()*15);
			}
		}
		if ( (octNum1 > 150) && (octNum1 < 156)) {
			octNum1=172;
			octNum2=parseInt(Math.random()*31);
			if ((octNum2 >15) && (octNum2 < 31)) {
				octNum2=octNum2+parseInt(Math.random()*15);
			}
		}
		if ( (octNum1 > 80) && (octNum1 < 86)) {
			octNum1=172;
			octNum2=parseInt(Math.random()*31);
			if ((octNum2 >15) && (octNum2 < 31)) {
				octNum2=octNum2+parseInt(Math.random()*15);
			}
		}
		IPaddress=octNum1+"."+octNum2+"."+octNum3+"."+octNum4;
		//trace(IPaddress);
		$("#ipAdrs").html(IPaddress);
		chkValidity();//pass or block
		//trace(correctAnswer);
		update = true;
	}
	
	
	
	var img = new Image();
	img.onload = function(ev){
		$("#commonMediaText").append('<div id="envImg" style="visibility:hidden;width:300px;height:200px;overflow:auto;"></div>');
		$("#envImg").append(ev.target);
		$("#envImg").append('<div id="ipAdrs" style="left: 141px;position: absolute;text-align: center;top: 30px;width: 120px;font-size:15px; font-weight:bold;"></div>');
		
		packetCont = new createjs.DOMElement(document.getElementById("envImg"));
		packetCont.scaleX = packetCont.scaleY = 0.68;
		packetCont.x = 110 + 40;
		packetCont.y = 249 - 80;
		packetCont.visible = false;
		_container.addChild(packetCont);
		
		img2.src = "Router.png";

	}
	img.src = "../../../common/images/html/envelope_closed_action.png";
	
	var img2 = new Image();
	img2.onload = function(ev){
		$("#commonMediaText").append('<div id="rtrImg" style="width:300px;height:200px;overflow:auto;"></div>');
		$("#rtrImg").append(ev.target);
		
		rtr = new createjs.DOMElement(document.getElementById("rtrImg"));
		rtr.scaleX = rtr.scaleY = 0.3;
		rtr.x = 618;
		rtr.y = 183;
		
		
		fire = new createjs.Bitmap("explosion.png"); 
		fire.scaleX = fire.scaleY = 0.5;
		fire.x = 560;
		fire.y = 162;
		fire.visible = false;
		
		_container.addChild(fire);
		_container.addChild(rtr);
		
		bubble = new createjs.Bitmap("block_ball.png"); 
		bubble.scaleX = bubble.scaleY = 0.3;
		bubble.x = rtr.x-20;
		bubble.y = rtr.y - 13;
		bubble.visible = false;
		
		_container.addChild(bubble);
		
		getOctet();
		createjs.Ticker.setFPS(60);
		createjs.Ticker.addEventListener("tick", handleTick);
	}
	

	scr_bubble1 = new createjs.Bitmap("ball1.png"); 
	scr_bubble2 = new createjs.Bitmap("ball2.png"); 
	//scr_bubble1.scaleX = scr_bubble1.scaleY = 0.3;
	//scr_bubble2.scaleX = scr_bubble2.scaleY = 0.3;
	
	
	scoreCont.addChild(scr_bubble1);
	scoreCont.addChild(scr_bubble2);
	
	scoreCont.alpha = 0;
	scoreCont.x = 425;
	scoreCont.y = 300;
	
	rootCont.addChild(scoreCont);
	_container.addChild(rootCont);
	
	// FOR Feedback 

	feeback = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:22,y:139.75,width:169,height:109,titleId:"ID_MsgBadTitle",bodyId:"ID_MsgBadBody",visible:"0"});			  
	_container.addChild(feeback);
	
	feeback2 = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:22,y:139.75,width:169,height:109,titleId:"ID_MsgGoodTitle",bodyId:"ID_MsgGoodBody",visible:"0"});			  
	_container.addChild(feeback2); 

	//images...
		
	pass_btn = getCJSElement("BLUE_BUTTON",{x:565,y:98.75,width:108,height:21,size:12,id:"pass",compId:"ID_btn01",callback:toggleBlock});
	_container.addChild(pass_btn);
		
	block_btn = getCJSElement("BLUE_BUTTON",{x:565,y:126.65,width:108,height:21,size:12,id:"block",compId:"ID_btn02",callback:toggleBlock});
	_container.addChild(block_btn);

	start_btn = getCJSElement("BLUE_BUTTON",{x:550,y:375,width:108,height:21,size:12,id:"new_nub2",compId:"ID_btn03",callback:startGame});
	_container.addChild(start_btn);
		
	reset_btn = getCJSElement("BLUE_BUTTON",{x:666.75,y:375,width:108,height:21,size:12,id:"new_nub",compId:"ID_btn04",callback:resetGame});
	_container.addChild(reset_btn);

	function startGame(){
		isStart = true;
		packetCont.visible = true;
		start_btn.setSelected(true);
	}
	function resetGame(){
		isStart = false;
		start_btn.setSelected(false);
		reset();
	}
	function reset(){
		count = 0;
		$("#ID_score").html("5");
		feeback.visible = false;
		feeback2.visible = false;
		packetCont.visible = false;
		packetCont.x = 110 + 40;
		packetCont.y = 249 - 80;
		isFirst = true;
		scoreCont.y = 300;
		scoreCont.alpha = 0;
		
		bubble.visible = false;
		pass_btn.setSelected(false);
		block_btn.setSelected(false);
	}
	function toggleBlock(id){
		if(id=="block"){
			access = "block";
			bubble.visible = true;
			pass_btn.setSelected(false);
			block_btn.setSelected(true);
		}else if(id=="pass"){
			access = "pass";
			bubble.visible = false;
			pass_btn.setSelected(true);
			block_btn.setSelected(false);
		}else {
			access = "pass";
			bubble.visible = false;
		}
		
		update = true;;
	}


	function createButton(text, color, width){
		var btn = new createjs.Bitmap("images/btn_normal.jpg");
		var txt = new createjs.Text(text, "bold 13px Arial", color);
		txt.lineWidth = 200;
		txt.textAlign = "left";
		txt.x = 85;
		txt.y = 10;
		
		var cont = new createjs.Container();
		cont.addChild(btn);
		cont.addChild(txt);
		return cont;
	}

	function getTextNode(id, text, color, width){
		var domel = new createjs.Text(text, "bold 12px Arial", color);
		return domel;
	}

	function drawLine(x,y){
		line.graphics.lineTo(rtr.x-x, rtr.y+27);
		update = true;;
	}
	function movePakt(){
		//createjs.Tween.get(packetCont).to({x:rtr.x - 140}, 500, createjs.Ease.linear).call(movePaktComplete);
		inc +=0.05; 
		packetCont.x += (1+inc);
		if(access=="block" && (packetCont.x > (rtr.x - 140) ))packetCont.y += 5;
		update = true;;
		//console.log(packetCont.x);
	}

	function movePaktComplete(){
		//createjs.Tween.get(packetCont).to({x:450,y:350}, 500, createjs.Ease.linear);
		
		//createjs.Tween.get(packetCont).to({x:650}, 800, createjs.Ease.linear).call(movePaktComplete2);
	}
	function movePaktComplete2(){
		//console.log(packetCont.x);
	}

	function updatePacket(){
		
		createjs.Ticker.setPaused(false);
		packetCont.visible = true;
		packetCont.x = 110 + 40;
		packetCont.y = 249 - 80;
		isFirst = true;
		scoreCont.y = 300;
		scoreCont.alpha = 0;
		
		bubble.visible = false;
		pass_btn.setSelected(false);
		block_btn.setSelected(false);
		
		if(correctAnswer == access){
			$("#ID_score").html(String(parseInt($("#ID_score").html())+1));
			//points.text = parseInt(points.text)+1;
		}else{
			$("#ID_score").html(String(parseInt($("#ID_score").html())-1));
			//points.text = parseInt(points.text)-1;
		}
		
		access = "none";
		getOctet();
		update = true;
	}

	function handleTick(e){
		
		var maxX = access == "none"?rtr.x - 140:(access == "pass"?580:615);
		var maxY = access == "block"?200:packetCont.y;
		if(isStart){
			if (!(parseInt($("#ID_score").html()) == 10 || parseInt($("#ID_score").html()) == 0)) {
				if(packetCont.x < maxX){
					movePakt();
					if(packetCont.x > maxX - (access == "none"?10:120)){
						scoreCont.alpha = 1;
						if(isFirst){
							createjs.Tween.get(scoreCont).to({y:15}, 1000, createjs.Ease.linear).wait(1000).call(updatePacket);
							isFirst = false;
							count++;
							if(correctAnswer == access){
								scoreCont.getChildAt(0).visible = true;
								scoreCont.getChildAt(1).visible = false;
								//$("#ID_score").html(String(parseInt($("#ID_score").html())+1));
								//points.text = parseInt(points.text)+1;
							}else{
								scoreCont.getChildAt(0).visible = false;
								scoreCont.getChildAt(1).visible = true;
								//$("#ID_score").html(String(parseInt($("#ID_score").html())-1));
								//points.text = parseInt(points.text)-1;
							}
						}
					
					}
				}else {
					//createjs.Ticker.setPaused(true);
					inc = 0;
					if(access=="none"){
						access = "";
						packetCont.visible = false;
						//setTimeout(function(){fire.visible = true;},0);
						fire.visible = true;
						createjs.Tween.get(fire).to({alpha:0}, 20, createjs.Ease.linear).wait(20).
												to({alpha:1}, 20, createjs.Ease.linear).wait(20).
												to({alpha:0}, 20, createjs.Ease.linear).wait(20).
												to({alpha:1}, 20, createjs.Ease.linear).wait(20).
												to({alpha:0}, 20, createjs.Ease.linear).wait(20).
												to({alpha:1}, 20, createjs.Ease.linear).wait(20).
												to({alpha:0}, 20, createjs.Ease.linear);
					}
				}
				update = true;
				//update = true;;
			}else{
				//createjs.Ticker.setPaused(true);
				isStart = false;
				packetCont.visible = false;
				feeback.visible = true;
				if(parseInt($("#ID_score").html()) > 8){
					feeback.visible = false;
					feeback2.visible = true;
				}
				update = true;
			}
		}
	}
});