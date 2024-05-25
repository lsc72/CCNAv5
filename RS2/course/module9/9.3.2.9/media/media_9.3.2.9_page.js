
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
 
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
	//alert(_id);
	
	var correctAns = [0, 0, 2, 3, 3, 3, 2];
	
	//alert(getMediaText("ID_s"+_id+"_check"));
	
	if(_id > 1)
	{
		$("#slide_"+_id).append('<div id="radioHolder'+_id+'"></div>');
		var rh = new createjs.DOMElement(document.getElementById("radioHolder"+_id));
		rh.x = 50;
		rh.y = 198;
		var bb_chk = getCJSElement("BLUE_BUTTON",{x:520,y:363.8,width:100,height:21,size:12,id:("bb_chk"+parseInt(_id)),compId:"ID_s"+parseInt(_id)+"_check",callback:checkAns});
		var bb_rst = getCJSElement("BLUE_BUTTON",{x:645,y:363.8,width:100,height:21,id:"bb_rst"+parseInt(_id),compId:"ID_s"+parseInt(_id)+"_reset",callback:reset});
		
		_container.addChild(bb_chk);
		_container.addChild(bb_rst);
		_container.addChild(rh);
		
		for(var k = 1; k<5; k++){
			$("#radioHolder"+_id).append('<div style="margin-bottom:20.5px;"><input type="radio" id="ch'+k+'_'+parseInt(_id)+'" value='+k+' name="grp'+_id+'"/><label for="ch'+k+'_'+parseInt(_id)+'">&nbsp;</label></div>');
		}
		var divId = "slide_"+parseInt(_id);
		var feedback = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:"274.5",y:"35",width:"200",height:"100",titleId:"ID_blankTitle",bodyId:"ID_blankBody",visible:"0"});
		var correct_img = getCJSElement("IMAGE",{src:"correct.png",x:"25",y:"190",width:"12",height:"12"});
		var wrong_img = getCJSElement("IMAGE",{src:"wrong.png",x:"25",y:"190",width:"12",height:"12"});
		
		correct_img.visible = false;
		wrong_img.visible = false;
		_container.addChild(correct_img);
		_container.addChild(wrong_img);
		_container.addChild(feedback);
		
		
		$('#radioHolder'+_id+' input:radio').change(function() {
			feedback.visible = false;
			correct_img.visible = false;
			wrong_img.visible = false;
		});
	}
		
		
	
	
	function reset(){
		feedback.visible = false;
		correct_img.visible = false;
		wrong_img.visible = false;
		
		for(var k = 1; k<5; k++){
			$("#ch"+k+"_"+parseInt(_id)).attr('checked', false);
		}
	}
	function checkAns(){
	
		if( $('input[name=grp'+_id+']').is(':checked') ){
			if($('input[name=grp'+_id+']:checked').val() == correctAns[_id]){
			
				feedback.visible = true;
				correct_img.visible = true;
				wrong_img.visible = false;
				correct_img.y = 153.5 + ($('input[name=grp'+_id+']:checked').val()* 36);
			
				feedback.setTitleId("ID_correctTitle");
				feedback.setBodyId("ID_s"+_id+"_correctBody");
			} else {
				feedback.visible = true;
				correct_img.visible = false;
				wrong_img.visible = true;
				wrong_img.y = 153.5 + ($('input[name=grp'+_id+']:checked').val()* 36);
				feedback.setTitleId("ID_incorrectTitle");
				feedback.setBodyId("ID_incorrectBody");
			}
		} else {
			feedback.visible = true;
			feedback.setTitleId("ID_blankTitle");
			feedback.setBodyId("ID_blankBody");
		}
			
	}
	
});

 