
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
var describe,ans01,ans02,ans03,ans04,ans05,ans06,ans07,ans08,ans09,numCorrect,field01,field02,field03,field04,field05,field06,field07,field08,field09,labelID,answerTxt;
var fields =[];
var totalB = 3;
var totalQ,Data,ctr1=0,ctr2=0,ctr3=0;
var tempArray = new Array();
var ansLazytxt;


(slideViewDidLoad = function(container,id){
	
	if(id==2)
	{
	$("#slide_2").append("<div id='canvasId' style='top:0px;left:0px;position:absolute;width:756px;height:386px;'></div>");	
	var canvasDOM = new createjs.DOMElement(document.getElementById("canvasId"));
	canvasDOM.x = 0;
	canvasDOM.y = 10;
	root.addChild(canvasDOM);
	
	console.log("Answer : "+$(mediaXML).find("component#ID_s2_txt01").text());
	
	
	
	
	temp = '<div id="ID_inst"></div><div id="dvHeading"/><div id="background"><div id="ansElements"><div id="ansHeader01" class="Questions"></div><div id="ansHeader02" class="Questions"></div><div id="ansHeader03" class="Questions"></div><div id="ans01"></div><div id="ans02"></div><div id="ans03"></div></div>';
temp += '</div>';
temp +='<div id="description"><div id="ID_txt01"></div><div id="descText"></div><div><input type="submit" name="reset" class="button_add" id="reset" value="Réinitialiser" /><div id="pannel" style="display:none;"><div class="cross"><span></span><a href="#" id="incorrect"><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p></p></div></div><div id="pannel_2" style="display:none"><div class="cross_2"><span></span><a href="#" id="correct"><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result_2"><p></p></div></div><script>$("a#incorrect").click(function (event) {$("#pannel").hide();event.preventDefault();$(this).hide();});</script></div>';

$("#canvasId").html(temp);
	
$("#ID_txt01").html($(mediaXML).find("component#ID_s2_txt01").text());
$('#ansHeader01').html(($(mediaXML).find("component#ID_s2_term01").text()));
$('#ansHeader02').html(($(mediaXML).find("component#ID_s2_term02").text()));
$('#ansHeader03').html(($(mediaXML).find("component#ID_s2_term03").text()));
	
	field01=($(mediaXML).find("component#ID_s2_ans01").text());
	field02=($(mediaXML).find("component#ID_s2_ans02").text());
	field03=($(mediaXML).find("component#ID_s2_ans03").text());
	field04=($(mediaXML).find("component#ID_s2_ans04").text());
	field05=($(mediaXML).find("component#ID_s2_ans05").text());
	field06=($(mediaXML).find("component#ID_s2_ans06").text());
	field07=($(mediaXML).find("component#ID_s2_ans07").text());
	field08=($(mediaXML).find("component#ID_s2_ans08").text());
	field09=($(mediaXML).find("component#ID_s2_ans09").text());
	
	numCorrect = 0;
	showRandom();
	resetFun();
	clickFunc();
			
	}
	
function showRandom(){
	
	fields= [field01,field02,field03,field04,field05,field06,field07,field08,field09];	
	totalQ= fields.length;
	var ranNum;
	if(tempArray.length == 0){
		tempArray = fields.concat();
	}
	ranNum = Math.floor((Math.random()*tempArray.length));
	labelID = tempArray[ranNum];
	$('#descText').html(labelID);
	tempArray.splice(ranNum,1);
}

function clickFunc(){ 
$("#ansElements>div").click(function(){		
	if(numCorrect<9){
		var matches = [];
		var answ =this.id;
		
		switch (answ) {
			case "ans01":
				matches.push(field01, field02,field09);
				var answer1=$("div#descText").text();
				if(ctr1<3){
					
				if((field01==answer1) ||((field02==answer1)) ||((field09==answer1))){
					ctr1=ctr1+1;
					$('#ans01').append(answer1).append($(mediaXML).find("component#ID_break").text());
					checkAnswer(matches,ansLazytxt);
					
				}
				else{
					$(".cross span").html($(mediaXML).find("component#ID_s2_titleIncorrect").text());
					$(".result p").html($(mediaXML).find("component#ID_s2_incorrectText").text());
					$("#pannel").css("display","block");
					}
				}
				break;
				case "ansHeader01":
				matches.push(field01, field02,field09);
				var answer1=$("div#descText").text();
				if(ctr1<3){
				if((field01==answer1) ||((field02==answer1)) ||((field09==answer1))){
					ctr1=ctr1+1;
					$('#ans01').append(answer1).append($(mediaXML).find("component#ID_break").text());
					checkAnswer(matches,ansLazytxt);
				}
				else{
					$(".cross span").html($(mediaXML).find("component#ID_s2_titleIncorrect").text());
					$(".result p").html($(mediaXML).find("component#ID_s2_incorrectText").text());
					$("#pannel").css("display","block");
					}
				}
				break;
			case "ans02":
				matches.push(field03, field04, field08, field05);
				var answer2=$("div#descText").text();
				if(ctr2<4){
				if((field03==answer2) ||((field04==answer2)) ||((field08==answer2)) ||((field05==answer2))){
					ctr2=ctr2+1;
					$('#ans02').append(answer2).append($(mediaXML).find("component#ID_break").text());
					checkAnswer(matches,ansLazytxt);
				}
				else{
					$(".cross span").html($(mediaXML).find("component#ID_s2_titleIncorrect").text());
					$(".result p").html($(mediaXML).find("component#ID_s2_incorrectText").text());
					$("#pannel").css("display","block");
					}
				}
				break;
				case "ansHeader02":
				matches.push(field03, field04, field08, field05);
				var answer2=$("div#descText").text();
				if(ctr2<4){
				if((field03==answer2) ||((field04==answer2)) ||((field08==answer2)) ||((field05==answer2))){
					ctr2=ctr2+1;
					$('#ans02').append(answer2).append($(mediaXML).find("component#ID_break").text());
					checkAnswer(matches,ansLazytxt);
					alert("ctr2");
				}
				else{
					$(".cross span").html($(mediaXML).find("component#ID_s2_titleIncorrect").text());
					$(".result p").html($(mediaXML).find("component#ID_s2_incorrectText").text());
					$("#pannel").css("display","block");
				 }
				}
				break;
			case "ans03":
				matches.push(field06, field07);
				var answer3=$("div#descText").text();
				if(ctr3<2){
				if(((field06==answer3)) ||((field07==answer3))){
					ctr3=ctr3+1;
					$('#ans03').append(answer3).append($(mediaXML).find("component#ID_break").text());
				
					checkAnswer(matches,ansLazytxt);
				}
				else{
					$(".cross span").html($(mediaXML).find("component#ID_s2_titleIncorrect").text());
					$(".result p").html($(mediaXML).find("component#ID_s2_incorrectText").text());
					$("#pannel").css("display","block");
					}
				}
				break;
				case "ansHeader03":
				matches.push(field06, field07);
				var answer3=$("div#descText").text();
				if(ctr2<3){
				if(((field06==answer3)) ||((field07==answer3))){
					ctr3=ctr3+1;
					$('#ans03').append(answer3).append($(mediaXML).find("component#ID_break").text());
					checkAnswer(matches,ansLazytxt);
				}
				else{
					$(".cross span").html($(mediaXML).find("component#ID_s2_titleIncorrect").text());
					$(".result p").html($(mediaXML).find("component#ID_s2_incorrectText").text());
					$("#pannel").css("display","block");
					}
				}
				break;
			default:
			
		}
	}
	else{
		$("#descText").empty();
		return false;
		}
		
		
	
});
}
function checkAnswer(matches,ansLazytxt)
{
	$("#pannel").css("display","none");
	var correct= false;
	var lText= ansLazytxt;
	
	for(var i=0; i<matches.length;i++){
		if (matches[i] == labelID){
			numCorrect++
			correct = true;
			
			break;
		}
	}
	
		if(correct){

		if (numCorrect>=totalQ){
			
			$(".cross span").html($(mediaXML).find("component#ID_s2_titleCorrect").text());
			$(".result p").html($(mediaXML).find("component#ID_s2_correctText").text());
			$("#pannel").css("display","block");
			$('#descText').html("");
			} else {
			showRandom();
		    }
	} else {
		
			$(".cross span").html($(mediaXML).find("component#ID_s2_titleIncorrect").text());
			$(".result p").html($(mediaXML).find("component#ID_s2_incorrectText").text());
			$("#pannel").css("display","block");
	}
}

function resetFun(){
$("#reset").click(function()
{
	tempArray=[];
	for(var i=1;i<=3;i++){
	$('div#ans0'+i).text("");
	}
	$('#descText').text("");
	showRandom();
	$("#pannel").css("display","none");
	numCorrect = 0;
	ctr1=0;
	ctr2=0;
	ctr3=0;
	
});
}
$(function(){

	$("a#incorrect").click(function(){
		
		$("#pannel").css("display","none");		
	})	

})



})	

