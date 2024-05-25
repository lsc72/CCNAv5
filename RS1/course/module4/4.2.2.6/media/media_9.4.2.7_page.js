
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(DragnDrop = function(container,manifest){

	var stage = container.getStage();
	var mouseTarget;	// the display object currently under the mouse, or being dragged
	var dragStarted;	// indicates whether we are currently in a drag operation
	var offset;
	update = true;
	var correctAnswersArr=[["bmp_0","bmp_13"],["bmp_1","bmp_12"],["bmp_4","bmp_15"],["bmp_5","bmp_8"],["bmp_2","bmp_9"],["bmp_3","bmp_14"],["bmp_6","bmp_11"],["bmp_7","bmp_10"]];
	
	
	function stop() {
		createjs.Ticker.removeEventListener("tick", tick);
	}

	function imageLoaded(imgs) {
		// create and populate the screen with random daisies:
		for(var i = 0; i < manifest.length; i++){
			if(i<17){
			var bitmap = new createjs.Bitmap(imgs[String(manifest[i].id)]);
			
			bitmap.x = manifest[i].x;
			bitmap.y = manifest[i].y;
			bitmap.regX = bitmap.image.width/2|0;
			bitmap.regY = bitmap.image.height/2|0;
			bitmap.name = "bmp_"+i;
			bitmap.cursor="pointer";
			container.addChild(bitmap);
			
			
			if(i<16 && i>=8){
				// wrapper function to provide scope for the event handlers:
				(function(target) {
				
					bitmap.onPress = function(evt) {
						// bump the target in front of it's siblings:
						//container.addChild(target);
						
						getHitTarget(evt.target);
						
						ansPopupWindow.visible=0;
						container.setChildIndex(target, stage.getNumChildren() - 2);
						//var offset = {x:target.x-evt.stageX, y:target.y-evt.stageY};
						var point2 = container.globalToLocal(evt.stageX, evt.stageY);
						var offset = {x:evt.target.x-point2.x, y:evt.target.y-point2.y};	

						// add a handler to the event object's onMouseMove callback
						// this will be active until the user releases the mouse button:
						evt.onMouseMove = function(ev) {
							var point = container.globalToLocal(ev.stageX, ev.stageY);
							ev.target.x =(point.x + offset.x);
							ev.target.y = (point.y + offset.y);	
		
							//target.x = ev.stageX+offset.x;
							//target.y = ev.stageY+offset.y;
							// indicate that the stage should be updated on the next tick:
							update = true;
						}
						evt.onMouseUp = function(ev){
							getHitTarget(ev.target);
							align(ev.target);
						}
					}
					bitmap.onMouseOver=function(evt){
					
						evt.target.shadow = new createjs.Shadow("#038BD1", 0, 0, 10);
					}
					bitmap.onMouseOut=function(evt){
						evt.target.shadow = new createjs.Shadow("#038BD1", 0, 0, 0);
					}
				})(bitmap);
			}
			if(i<8){
				bitmap.alpha=0;
				
				
				var bitmap = new createjs.Bitmap("../../../common/images/tick.png");
				container.addChild(bitmap);
				bitmap.x=manifest[i].x-8;
				bitmap.y=manifest[i].y+64;
				bitmap.name="tick_"+i;
				bitmap.visible=0;
				
				//wrong image
				bitmap = new createjs.Bitmap("../../../common/images/wrong.png");
				container.addChild(bitmap);
				bitmap.x=manifest[i].x-8;
				bitmap.y=manifest[i].y+64;
				bitmap.name="wrong_"+i;
				bitmap.visible=0;
			}
		}

		createjs.Ticker.addEventListener("tick", tick);
		}
	}
	
	
	
	function getHitTarget(o){
	
		for(var p=0; p<8; p++){
			hitO=container.getChildByName("bmp_"+p);
			collision = ndgmr.checkPixelCollision(o,hitO,0,true);
			if(collision){
				container.getChildByName("tick_"+p).visible=0;
				container.getChildByName("wrong_"+p).visible=0;
				break;
			}
		}
	
	}
	
	function align(o){
	
	
		var num=o.name.split("bmp_")[1];
		
	
		var hitO;
		var collision=false;
		for(var p=0; p<8; p++){
			hitO=container.getChildByName("bmp_"+p);
			collision = ndgmr.checkPixelCollision(o,hitO,0,true);
			if(collision){
				break;
			}
		}
		if(collision){
			o.x=hitO.x;
			o.y=hitO.y;
		}else{
			
			//alert(num);
			createjs.Tween.get(o,{override:true}).to({x:manifest[num].x, y:manifest[num].y}, 500,createjs.Ease.sineInOut);
		}
		
		
		for(var m=8; m<17; m++){
			if(num==m){
				continue;
			}else{
				hitSibling = container.getChildByName("bmp_"+m);
				collision = ndgmr.checkPixelCollision(o,hitSibling,0,true);
				if(collision){
					createjs.Tween.get(hitSibling,{override:true}).to({x:manifest[m].x, y:manifest[m].y}, 500,createjs.Ease.sineInOut);
				}
			}
		}
	
	}

	function tick(event) {
		// this set makes it so the stage only re-renders when an event handler indicates a change has happened.
		if (update) {
			update = false; // only update once
			stage.update(event);
		}
	}
		
	function checkHandler(){
		
		var allcorrect=true;
		for(var k=0; k<8; k++){
			var o1=container.getChildByName(correctAnswersArr[k][0]);
			var o2=container.getChildByName(correctAnswersArr[k][1]);
			collision = ndgmr.checkPixelCollision(o1,o2,0,true);
			if(collision){
				container.getChildByName("tick_"+correctAnswersArr[k][0].split("_")[1]).visible=1;
			}else{
				for(var j=0; j<8; j++){
					var o1=container.getChildByName(correctAnswersArr[k][0]);
					var o2=container.getChildByName(correctAnswersArr[j][1]);
					collision2 = ndgmr.checkPixelCollision(o1,o2,0,true);
					if(collision2){
					
						container.getChildByName("wrong_"+correctAnswersArr[k][0].split("_")[1]).visible=1;
					//allcorrect=false;
					}
				}
				//container.getChildByName("wrong_"+k).visible=1;
				allcorrect=false;
			}
		}
		
		ansPopupWindow.visible=1;
		if(allcorrect){
			ansPopupWindow.setTitleId("ID_s1_CORRECT_TITLE");
			ansPopupWindow.setBodyId("ID_s1_CORRECT_BODY");
		}else{
			ansPopupWindow.setTitleId("ID_s1_INCORRECT_TITLE");
			ansPopupWindow.setBodyId("ID_s1_INCORRECT_BODY");
		}
		
		stage.update();
		
	}		
	function undoHandler()
	{
		
	}		
	function resetHandler(){
	
		for(var l=0; l<8; l++){
			container.getChildByName("tick_"+l).visible=0;
			container.getChildByName("wrong_"+l).visible=0;
		}
		
		ansPopupWindow.visible=0;
		for(var i = 8;i<17;i++)
		{
			createjs.Tween.get(container.getChildByName("bmp_"+i),{override:true}).to({x:manifest[i].x, y:manifest[i].y}, 500,createjs.Ease.sineInOut);
			//container.getChildByName("bmp_"+i).x=manifest[i].x;
			//container.getChildByName("bmp_"+i).y=manifest[i].y;
		}
	}
	
	function answerHandler(){
		
		update = true;
	}
	
	
	
	var btn;
	
	btn = getCJSElement("BLUE_BUTTON",{x:670,y:340,width:100,height:21,compId:"ID_CHECK",id:"check",callback:checkHandler});
	container.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:670,y:370,width:100,height:21,compId:"ID_RESET",id:"reset",callback:resetHandler});
	container.addChild(btn);
	
	ansPopupWindow = getCJSElement("TEXTBOX",{x:170,y:140,width:200,height:150,subType:"CLOSABLE",titleId:"ID_s1_CORRECT_TITLE",bodyId:"ID_s1_CORRECT_BODY",visible:"0"});
	container.addChild(ansPopupWindow);
		
	var imgArr = [];
	for(var i = 0;i<manifest.length;i++)
	{
		imgArr.push({src:manifest[i].src, id:manifest[i].id});
	}
	loadImages(imgArr,imageLoaded);
	
});

(slideViewDidLoad = function(container){
	
	var manifest;
		
		manifest = [{src:"graphicwirecoverblank.png", id:"w9",x:439,y:142},
				{src:"graphicwirecoverblank.png", id:"w10",x:464,y:142},
				{src:"graphicwirecoverblank.png", id:"w11",x:489,y:142},
				{src:"graphicwirecoverblank.png", id:"w12",x:514,y:142},
				{src:"graphicwirecoverblank.png", id:"w13",x:540,y:142},
				{src:"graphicwirecoverblank.png", id:"w14",x:565,y:142},
				{src:"graphicwirecoverblank.png", id:"w15",x:591,y:142},
				{src:"graphicwirecoverblank.png", id:"w16",x:617,y:142},
				{src:"1.png", id:"w1",x:99.1,y:164.85},
				{src:"2.png", id:"w2",x:129.1,y:164.85},
				{src:"3.png", id:"w3",x:159.1,y:164.85},
				{src:"4.png", id:"w4",x:189.1,y:164.85},
				{src:"5.png", id:"w5",x:99.1,y:300},
				{src:"6.png", id:"w6",x:129.1,y:300},
				{src:"7.png", id:"w7",x:159.1,y:300},
				{src:"8.png", id:"w8",x:189.1,y:300},
				{src:"top.png", id:"w17",x:526,y:68},
				{src:"ndgmr.Collision.js", id:"colldet"}
            ];			
		var act = new DragnDrop(container,manifest);

	
	
}); 
