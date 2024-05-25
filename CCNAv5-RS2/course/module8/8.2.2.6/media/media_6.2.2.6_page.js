
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(slideContainer){
	
	//
	var selection,prevSelection;
	var regExp;
	//
	var questions = [];
	questions[0] = ["192.168.100.0/24","255.255.255.0","0.0.0.255"];	
	questions[1] = ["192.168.226.96/27","255.255.255.224","0.0.0.31"];
	questions[2] = ["172.24.4.0/23","255.255.254.0","0.0.1.255"];
	questions[3] = ["172.30.0.0/16","255.255.0.0","0.0.255.255"];
	questions[4] = ["192.168.200.128/20","255.255.240.0","0.0.15.255"];
	questions[5] = ["10.1.1.16/28","255.255.255.240","0.0.0.15"];
	questions[6] = ["10.0.0.0/8","255.0.0.0","0.255.255.255"];
	questions[7] = ["172.17.2.128/25","255.255.255.128","0.0.0.127"];
	questions[8] = ["192.168.14.64/26","255.255.255.192","0.0.0.63"];
	questions[9] = ["10.100.200.53/30","255.255.255.252","0.0.0.3"];
	
	//purple component 	
	var fbComp = getCJSElement("TEXTBOX",{subType:"CLOSABLE", x:"359.15",y:"268.1",width:"368",height:"80.35",titleId:"txt_correct",bodyId:"txt_body_correct",visible:"0"});
	slideContainer.addChild(fbComp);
	//	
	
	//alert("media xml text "+getMediaText("txt_body_correct"));
	
	//adding buttons
	var showBtn = new BlueButton({x:619.6,y:225.55,width:108,height:21,id:"show",compId:"txt_show",callback:showAnsHandler});
	slideContainer.addChild(showBtn); 
	//
	var newNumberBtn = new BlueButton({x:489.2,y:225.55,width:108,height:21,id:"new_number",compId:"txt_newnumber",callback:newNumberHandler});
	slideContainer.addChild(newNumberBtn);
	//
	var checkBtn = new BlueButton({x:358.8,y:225.55,width:108,height:21,id:"check",compId:"txt_check",callback:checkHandler});
	slideContainer.addChild(checkBtn);
	
	//
	
	//
	function showAnsHandler(id)
	{
		//$("#network").val(questions[selection][0]);
		$("#decimal").val(questions[selection][1]);
		$("#wildcard").val(questions[selection][2]);
		checkBtn.mouseEnabled=false;
	}
	function newNumberHandler(id)
	{
		init();
		$('#wildcard, #decimal').css('color','#000');
		
	}
	
	
	//adding a text field  - dynamic

	$("#commonMediaText").append('<input id="network" readonly="true" style="background-color:transparent; border:none; color: #ffffff; font-size:11px; text-align:center;font-weight:bold; width:193px; left:45px; top:-10px; "/>');	
	var networkTxt=new createjs.DOMElement(document.getElementById("network"));
	slideContainer.addChild(networkTxt);
	networkTxt.x="520";
	networkTxt.y="122.6";
	networkTxt.width="204.55";
		
	//adding text field 
	$("#commonMediaText").append('<input id = "decimal"  style="background-color: #66C0E5; border:1px solid #FFFFFF; font-size:11px; text-align:center; width:164px; left:60px; top:-5px; height:16px; "/>');	
	var decimalTxt=new createjs.DOMElement(document.getElementById("decimal"));
	slideContainer.addChild(decimalTxt);
	decimalTxt.x="520";
	decimalTxt.y="150.2";
	decimalTxt.width="204.55";
	$("#decimal").focus();
		
	

//adding text field 
	$("#commonMediaText").append('<input id = "wildcard"  style="background-color: #66C0E5; border:1px solid #FFFFFF; font-size:11px; text-align:center; width:164px; left:60px; top:7px; height:16px;"/>');	
	
	var wildCardTxt=new createjs.DOMElement(document.getElementById("wildcard"));
	slideContainer.addChild(wildCardTxt);
	wildCardTxt.x="520";
	wildCardTxt.y="177.2";
	wildCardTxt.width="204.55";

	//
	init();
	function init()
	{
		prevSelection = selection;
		selection = Math.floor(Math.random() * questions.length);
		
		
		if(prevSelection == selection)
		{
			selection = Math.floor(Math.random() * questions.length);
			prevSelection = selection;
		}
		
		$("#network").val(questions[selection][0]);
		$("#decimal").val("");
		$("#wildcard").val("");
		checkBtn.mouseEnabled=true;
	}
	function checkHandler(id)
	{

		if($("#decimal").val() == questions[selection][1] && $("#wildcard").val()  == questions[selection][2])
		{
		
			fbComp.setTitleId("txt_correct");
			fbComp.setBodyId("txt_body_correct");	
			
		}
		else
		{
			fbComp.setTitleId("txt_incorrect");
			fbComp.setBodyId("txt_body_incorrect");
			$('#wildcard, #decimal').css('color','#dd0000');
		}
		
		fbComp.visible=true;
	
	}
	
	$("#decimal, #wildcard").keyup(function() {	
	 	var input = $(this),text = input.val().replace(/[^0-9-._\s]/g, "");
	    input.val(text);
		$(this).css('color','#000');
	});
	
});
 

     
	
