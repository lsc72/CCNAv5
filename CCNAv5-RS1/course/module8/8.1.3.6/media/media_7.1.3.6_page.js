loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(_container,_id)
{
		//CREATE PC IMAGES		
		var pcImgArray = [
				{id:"host6", x:"410", y:"80"},
				{id:"host5", x:"546", y:"122"},
				{id:"host4", x:"546", y:"251"},
				{id:"host3", x:"410", y:"295"},
				{id:"host2", x:"261", y:"255"},
				{id:"host1", x:"261", y:"120"}
		];
		
		//ADD EACH PC IMAGE OBJECT TO CONTAINER
		for(var i = 0;i<pcImgArray.length;i++){
				var pcImg = document.createElement('img');
				pcImg.id = pcImgArray[i].id;
				pcImg.src = "computer.png";
				pcImg.className = "pcIMG";							
				$("#commonMediaText").append(pcImg);					
				var _domPcImg = new createjs.DOMElement(document.getElementById(pcImg.id));
				_domPcImg.x = pcImgArray[i].x ;
				_domPcImg.y = pcImgArray[i].y;				
				_container.addChild(_domPcImg);			
		}
		
		//ADD CLICK EVENT FOR PC IMAGE
		$('.pcIMG').click(function(){			
			togglePCImg(this);
		});
		
		//TOGGLE FUNCTION FOR PC IMAGE GLOW AND NORMAL
		function togglePCImg(obj){			
			var src = obj.src;
			var imgname = src.replace(/^.*[\\\/]/, '');
				if (imgname == "computer.png") {
					obj.src = "computer2.png";
				}else{
					obj.src = "computer.png";
				}
		}
		
		//CREATE BUTTONS			
		var stopbtn;
		var startbtn;
		var resetbtn;	
		stopbtn = getCJSElement("BLUE_BUTTON",{x:547.8,y:374.1,width:108,height:21,size:12, id:"stopBtn",compId:"ID_stop", callback:buttonHandler});			
		startbtn = getCJSElement("BLUE_BUTTON",{x:547.8,y:374.1,width:108,height:21,size:12,id:"startBtn",compId:"ID_start", callback:buttonHandler});			
		resetbtn = getCJSElement("BLUE_BUTTON",{x:666.05,y:374.1,width:108,height:21,size:12,id:"resetBtn",compId:"ID_reset", callback:buttonHandler});
		_container.addChild(stopbtn);
		_container.addChild(startbtn);
		_container.addChild(resetbtn);
		stopbtn.visible = false;
		$("#host1").attr('src','computer2.png');
		
		//CREATE FEEDBACK TEXTBOX		
		var textBox = getCJSElement("TEXTBOX",{x:340.05,y:139.2,width:177.55,height:123, bodyId:"ID_cBroad", visible:"0", animate:"0" });
		_container.addChild(textBox);
		
		
		var _data,randomNumber;
		
		var counter=10;
		var resultcounter=0;
		var count_Timer;
		var result_Timer;
		var ipArray;
		var selectedIp;
		var arraycount;
		var showResult;
		
		function resetComputers(){
			$('.pcIMG').attr('src', 'computer.png');
		}
		
		function countTimer(){
			$("#timer_txt").html('10');
			resetComputers();
			textBox.visible = false;
			
			if(ipArray.length>0){
				counter=10;
				count_Timer = window.setInterval(function() {
					if (counter>0){counter--;
					$("#timer_txt").html(counter);
					}		
					if (counter==0){
						$("#timer_txt").html('--');
						resultcounter=0;
						stopCountTimer();
						resultTimer();
					}
				}, 1000);		
			}
			
			if(ipArray.length==0){
				text_id="end_game";
				//showFeedback("ID_endGame");
				textBox.visible = true;
			}
			
		}
		
		function resultTimer(){
			checkAns(selectedIp);				
			result_Timer = window.setInterval(function() {
				if (resultcounter<4){
					resultcounter++;
				}
				if (resultcounter==2){if(ipArray.length==0){
					text_id="end_game";
					showFeedback("ID_endGame");
					stopbtn.visible = false;
					startbtn.visible = false;
				}}
				if (resultcounter==3){
					selectIp();
					stopresultTimer()
					countTimer();
				}
				}, 3000);
		}
		
		function stopCountTimer(){
			window.clearInterval(count_Timer);
			$("#timer_txt").html(counter);
		}
		
		function stopresultTimer(){
			window.clearInterval(result_Timer);
			resetComputers();
			$("#timer_txt").html(10);
			resultcounter=0;
		}
		
		function setIps(){
			ipArray=[];
			ipArray.push("192.168.100.5");
			ipArray.push("192.168.100.2");
			ipArray.push("237.192.126.17");
			ipArray.push("192.168.100.255");
			ipArray.push("225.5.77.126");
		}
		
		function selectIp(){
			var rNum = Math.floor(Math.random()*(ipArray.length));
			arraycount=rNum;
			selectedIp=ipArray[rNum];
			$("#ipAddress_txt").html(ipArray[rNum]);
		}
		
		function checkSelected(hostId){
			var hostSrc = $("#"+hostId).attr('src');
			if(hostSrc == 'computer2.png')
				return true;
			else
				return false;	
		}
		
		function checkAns(selectedIp){
			
			var host1 = checkSelected('host1');
			var host2 = checkSelected('host2');
			var host3 = checkSelected('host3');
			var host4 = checkSelected('host4');
			var host5 = checkSelected('host5');
			var host6 = checkSelected('host6');
			var titleId ="";
			var bodyId = "";
			
			switch (selectedIp) {	
				case "192.168.100.5":			
				if ( (!host6) && (host5) && (!host4) && (!host3) && (!host2) && (!host1)) {	
						bodyId = "ID_cBroad";
						ipArray.splice(arraycount, 1);
				} 
				else{
						bodyId = "ID_iBroad";	
				}
				break;	
				case "192.168.100.2":
				if ((!host6) && (!host5) && (!host4) && (!host3) && (host2) && (!host1)) {
						bodyId = "ID_cBroad";	
						ipArray.splice(arraycount, 1);
				} 
				else{
						bodyId = "ID_iBroad";	
				}
				break;	
				case "237.192.126.17":
				if ((!host6) && (!host5) && (host4) && (!host3) && (host2) && (!host1)) {
						bodyId = "ID_cMulti";	
						ipArray.splice(arraycount, 1);
				}
				else {
						bodyId = "ID_iMulti";	
				}
				break;	
				case "192.168.100.255":
				if ((!host6) && (host5) && (host4) && (host3) && (host2) && (host1)) {
						bodyId = "ID_cBroad";	
						ipArray.splice(arraycount, 1);
				}
				else{
						bodyId = "ID_iBroad";		
				}
				break;
				case "225.5.77.126":
				if ((!host6) && (host5) && (!host4) && (!host3) && (!host2) && (host1)) {
						bodyId = "ID_cMulti";	
						ipArray.splice(arraycount, 1);
				} 
				else{
						bodyId = "ID_iMulti";	
				}
				break;
			}
				
			textBox.setBodyId(bodyId);
			textBox.visible = true;
			update = true;
		}	
		
		function showFeedback(text_id){
			textBox.setBodyId(text_id);
			textBox.visible = true;
			update = true;
		}
		
		function resetTimers(){
			if(counter==0){
				stopresultTimer();}
		
			if(counter>0){
				stopCountTimer();}
			
			setIps();
			stopbtn.visible = false;
			startbtn.visible = true;
			textBox.visible = false;	
			$('#start').show();
			$('#ipAddress_txt').html('');			
			resetComputers();	
			$("#timer_txt").html(10);
		}
			
			
		//BUTTON HANDLERS CALLBACK	
		function buttonHandler(id){		
			switch(id)
			{
				case "startBtn":
					stopbtn.visible = true;
					startbtn.visible = false;	
					selectIp();
					countTimer();
				break;
				
				case "stopBtn":
					if(counter>0){
					stopbtn.visible = false;
					startbtn.visible = true;	
					stopCountTimer();}
				break;
				
				case "resetBtn":				
					 resetTimers();
				break;
			}	
		}
		
		$("#timer_txt").html(10);		
		setIps();
		
});