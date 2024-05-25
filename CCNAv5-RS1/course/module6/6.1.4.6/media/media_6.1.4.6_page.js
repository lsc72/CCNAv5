loadScript("../../../common/scripts/swfobject.js", registerSWF); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
 

(slideViewDidLoad = function(_container,_id){
	
(ClickActivity = function(obj,xmlNode){
	this.initialize();
	this.bindList = [];
	this.descObj={};
	this.elements={
		btns:[],
		texts:[],
		currDescID:''
	};
	
	 
	var th = this;		
	var textBox; 
	
	function init(){  
		th.renderElement();
		th.bindList = th.descObj.descList;   
	}
	
	this.resetActivity = function(){ 
	
  		removeAns();
  		th.elements.btns=[];
		th.elements.texts=[];
		th.elements.currDescID='';
		textBox.visible = false;
		
		init(); 
		update = true;
	} 
	this.createElement = function(compObj) {
		
		obj.width = obj.width ? parseFloat(obj.width) : 444;
		obj.height = obj.height ? parseFloat(obj.height) : 165;  
	
		var bgShape = new createjs.Shape();
		bgShape.graphics.beginFill("#CDEAF8").drawRect(compObj.x ,compObj.y,obj.width,obj.height); 
		bgShape.name = compObj.compId;
		bgShape.opacity=0.1;
		bgShape.onClick = function(e){th.btnClicked(e);}		
		th.addChild(bgShape);	
    }
	 
	this.generateDesc = function() {
		
		var index = Math.floor(Math.random() * th.bindList.length);
		console.log(index + " " + th.bindList[index]);	
		th.currDescID = th.bindList[index]+"";
		
		var element = getCJSElement("TEXT",{compId:th.currDescID,x:th.descObj.x,y:th.descObj.y,width:th.descObj.width,expand:th
		.descObj.expand,align:th.descObj.align});		
		
		th.addChild(element); 
		
    } 
	
	this.displayAnswer = function(obj) {
		
		if(th.bindList.length > 1) {
			$('#'+th.currDescID).remove();
			
			textBox.setTitleId(obj.correct_title);
			textBox.setBodyId(obj.correct_body);
			textBox.visible = true; 
		}
		
		var element = getCJSElement("TEXT",{compId:obj.compId,x:obj.x,y:obj.y,width:obj.width,expand:obj.expand,align:obj.
		align});		
		
		th.addChild(element); 
    } 
	
	this.createTxtBox = function(txtComp){  
	
		textBox = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:parseFloat(txtComp.x),y:txtComp.y,width:txtComp.width,
		height:parseFloat(txtComp.height),titleId:txtComp.titleId,bodyId:txtComp.bodyId,animated:txtComp.animated,
		visible:txtComp.visible});
		 
		th.addChild(textBox); 
	}

	this.createBlueBtn = function(bBtn){  
	 
		var	blueBtn = getCJSElement("BLUE_BUTTON",{compId:bBtn.compId, x:bBtn.x, y:bBtn.y, width:bBtn.width ,height:bBtn.height
		, size:bBtn.size , callback:bBtn.callback});
			
		th.addChild(blueBtn);
	}
	
	this.renderElement = function(){
	
		$(xmlNode).find('subelement').each(function(){
			
			var type = $(this).attr('type');
			var compObj = {};
			
			switch(type){				
					case "BTN": 
						compObj.compId = $(this).attr('compId') ? $(this).attr('compId') : 0;		
						compObj.quesID = $(this).attr('quesID')? $(this).attr('quesID') : 0;
						compObj.ansId = $(this).attr('ansId') ? $(this).attr('ansId') : 0;							 
						compObj.x = $(this).attr('x') ? $(this).attr('x') : 0;		
						compObj.y = $(this).attr('y')? $(this).attr('y') : 0; 
	
						th.elements.btns.push(compObj);
						th.createElement(compObj);						
					break;			
						
					case "DESC":
						th.descObj.x = $(this).attr('x') ? $(this).attr('x') : 0;		
						th.descObj.y = $(this).attr('y')? $(this).attr('y') : 0;
						th.descObj.width = $(this).attr('width') ? $(this).attr('width') : 0;	 
						th.descObj.expand = $(this).attr('expand') ? $(this).attr('expand') : "down";		
						th.descObj.align = $(this).attr('align')? $(this).attr('align') : "left";
						th.bindList = th.descObj.descList = $(this).attr('descList').split(',');
	
						th.generateDesc(compObj);				 			
					break;
					
					case "TEXT": 
						compObj.compId = $(this).attr('compId') ? $(this).attr('compId') : 0;		
						compObj.width = $(this).attr('width') ? $(this).attr('width') : 60;	 
						compObj.expand = $(this).attr('expand') ? $(this).attr('expand') : "down";		
						compObj.align = $(this).attr('align')? $(this).attr('align') : "left";						 
						compObj.x = $(this).attr('x') ? $(this).attr('x') : 0;		
						compObj.y = $(this).attr('y')? $(this).attr('y') : 0;
	
						th.elements.texts.push(compObj);				 			
					break;
					
					case "TEXTBOX": 						
						
						compObj.width = $(this).attr('width') ? $(this).attr('width') : 60;	 
						compObj.height = $(this).attr('height') ? $(this).attr('height') : 160;	 
						compObj.x = $(this).attr('x') ? $(this).attr('x') : 0;		
						compObj.y = $(this).attr('y')? $(this).attr('y') : 0;
						compObj.titleId = $(this).attr('titleId') ? $(this).attr('titleId') : obj.correct_title;		
						compObj.bodyId = $(this).attr('bodyId') ? $(this).attr('bodyId') : obj.correct_body; 
						compObj.visible = $(this).attr('visible')? $(this).attr('visible') : 0;  
						
						th.createTxtBox(compObj);						
						break;
						 
					case "BLUE_BUTTON":  
						compObj.compId = $(this).attr('compId') ? $(this).attr('compId') : "ID_btn01";	
						compObj.width = $(this).attr('width') ? $(this).attr('width') : 60;	
						compObj.height = $(this).attr('height') ? $(this).attr('height') : 60; 
						compObj.x = $(this).attr('x') ? $(this).attr('x') : 0;		
						compObj.y = $(this).attr('y')? $(this).attr('y') : 0; 	 
						compObj.callback = th.resetActivity;  
						
						th.createBlueBtn(compObj);						
						break;
				}
		});
	}
	
	th.btnClicked = function(e){ 
	
		if(th.bindList.length == 0) return false;
		//1) get the btn Object
		var btnObj = th.getButton(e.target.name); 
		
		//2) compare with the desc
		if(th.currDescID === btnObj.ansId){
			//3)get the Obj
			var txtObj = th.getTextComp(th.currDescID);
			//4) if true show answer			
			th.displayAnswer(txtObj);
			//5) remove from list 
			th.bindList = updateDesc(th.bindList,th.currDescID);
			console.log(th.bindList + " New list" );
			//6)and generate the next desc
			th.generateDesc();	
			
			textBox.visible = false;
			if(th.bindList.length === 0 )showTextBox(true);
				
		}else{ showTextBox(false);} 
		
		update = true;
	}
	
	this.getButton = function(id){ 
		var myObj;
		th.elements.btns.filter(function (btnObj) { 
			if(btnObj.compId === id) myObj = btnObj;
		});
		return myObj;
	}
	this.getTextComp = function(id){ 
		var myObj;
		th.elements.texts.filter(function (txtObj) { 
			if(txtObj.compId === id) myObj = txtObj;
		});
		return myObj;
	}
	
	function showTextBox(flag){
		if(flag){
			textBox.setTitleId(obj.correct_title); 
			textBox.setBodyId(obj.correct_body);
			textBox.visible = true; 
		}else{
			textBox.setTitleId(obj.inCorrect_title);
			textBox.setBodyId(obj.inCorrect_body);
			textBox.visible = true; 
		} 
	}
		
		
	function updateDesc (arr, val){
		var newArry = [];
			  
		for (var i = 0, j = 0, l = arr.length; i < l; i++) {
			if (arr[i] !== val) {
				newArry[j++] = arr[i];
			}
		}
		newArry.length = j;
		return newArry;
	}
	
	function removeAns(){
		for(var i=0;i < th.elements.texts.length; i++)
		{
			if( $('#'+th.elements.texts[i].compId).length > 0)
					$('#'+th.elements.texts[i].compId).remove(); 
		}
	}  
	init();
	   
}).prototype = new createjs.Container();
 
	$(canvasXML).find("element").each(function(index, element) {
		if($(this).attr("type") == "ACTIVITY"){
			var obj = {};
			for(var i = 0;i<this.attributes.length;i++)
			{
				obj[this.attributes[i].name] = this.attributes[i].value;			
			}
			
			var act = new ClickActivity(obj,this);
			_container.addChild(act);	
		}
	});		 

});