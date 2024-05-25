
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
 
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
	//alert(_id);
	
	var correctAns = [0, 2, 5, 1, 3, 4, 3];
	
	//alert(getMediaText("ID_s"+_id+"_check"));
	
	if(_id > 0)
	{
		$("#slide_"+_id).append('<div id="radioHolder'+_id+'" style="width: 500px;"></div>');
		var rh = new createjs.DOMElement(document.getElementById("radioHolder"+_id));
		rh.x = 300;
		rh.y = 290;
		var bb_chk = getCJSElement("BLUE_BUTTON",{x:520,y:363.8,width:100,height:21,size:12,id:("bb_chk"+parseInt(_id)),compId:"ID_s"+parseInt(_id)+"_check",callback:checkAns});
		var bb_rst = getCJSElement("BLUE_BUTTON",{x:645,y:363.8,width:100,height:21,id:"bb_rst"+parseInt(_id),compId:"ID_s"+parseInt(_id)+"_reset",callback:reset});
		
		_container.addChild(bb_chk);
		_container.addChild(bb_rst);
		_container.addChild(rh);
		
		var str_m = "margin-bottom:12.5px;";
		
		for(var k = 1; k<7; k++){
			if(k==5 || k==6)
			str_m = "margin-bottom:0px;";
			$("#radioHolder"+_id).append('<div style="float:left; width:220px;'+str_m+ '"><input type="radio" id="ch'+k+'_'+parseInt(_id)+'" value='+k+' name="grp'+_id+'"/><label for="ch'+k+'_'+parseInt(_id)+'">&nbsp;</label></div>');
		}
		var divId = "slide_"+parseInt(_id);
		var feedback = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:"16",y:"230",width:"200",height:"100",titleId:"ID_blankTitle",bodyId:"ID_blankBody",visible:"0"});
		var correct_img = getCJSElement("IMAGE",{src:"correct.png",x:"275",y:"282",width:"12",height:"12"});
		var wrong_img = getCJSElement("IMAGE",{src:"wrong.png",x:"275",y:"282",width:"12",height:"12"});
		
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
		
		for(var k = 1; k<7; k++){
			$("#ch"+k+"_"+parseInt(_id)).attr('checked', false);
		}
	}
	function checkAns(){
	
		if( $('input[name=grp'+_id+']').is(':checked') ){
		
		
			correct_img.x = 275;
			correct_img.y = 282;
			wrong_img.x = 275;
			wrong_img.y = 282;
			
			if($('input[name=grp'+_id+']:checked').val() == correctAns[_id]){
			
				feedback.visible = true;
				correct_img.visible = true;
				wrong_img.visible = false;
				//correct_img.y = 153.5 + ($('input[name=grp'+_id+']:checked').val()* 36);
				//alert(($('input[name=grp'+_id+']:checked').val() % 2 ));
				
				
				if(($('input[name=grp'+_id+']:checked').val()  % 2 == 0))
				correct_img.x = 495;
				if(($('input[name=grp'+_id+']:checked').val()) == 3 || ($('input[name=grp'+_id+']:checked').val()) == 4)
				correct_img.y = 282 + 27;
				if(($('input[name=grp'+_id+']:checked').val()) == 5 || ($('input[name=grp'+_id+']:checked').val()) == 6)
				correct_img.y = 282 + 54;
			
				feedback.setTitleId("ID_s"+_id+"_correctTitle");
				feedback.setBodyId("ID_s"+_id+"_correctBody");
			} else {
				feedback.visible = true;
				correct_img.visible = false;
				wrong_img.visible = true;
				//wrong_img.y = 153.5 + ($('input[name=grp'+_id+']:checked').val()* 36);
				//alert(($('input[name=grp'+_id+']:checked').val() % 2 ));
				if(($('input[name=grp'+_id+']:checked').val() % 2 == 0))
				wrong_img.x = 495;
				if(($('input[name=grp'+_id+']:checked').val()) == 3 || ($('input[name=grp'+_id+']:checked').val()) == 4)
				wrong_img.y = 282 + 27;
				if(($('input[name=grp'+_id+']:checked').val()) == 5 || ($('input[name=grp'+_id+']:checked').val()) == 6)
				wrong_img.y = 282 + 54;
				
				feedback.setTitleId("ID_s"+_id+"_incorrectTitle");
				feedback.setBodyId("ID_s"+_id+"_incorrectBody");
			}
		} else {
			feedback.visible = true;
			feedback.setTitleId("ID_blankTitle");
			feedback.setBodyId("ID_blankBody");
		}
			
	}
	
});

 