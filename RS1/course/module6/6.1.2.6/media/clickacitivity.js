var describe,ans01,ans02,ans03,ans04,ans05,ans06,numCorrect,field01,field02,field03,field04,field05,field06,labelID,answerTxt;
var fields =[];
var totalB = 3;
var totalQ,Data,ctr1=0,ctr2=0,ctr3=0;
var tempArray = new Array();
var ansLazytxt;
var clickacitivity = function(data)
{
	 Data = data;
	$("#ID_inst").html($(data).find("component#ID_inst").text());
	$("#dvHeading").html($(data).find("component#ID_txt02").text());
	$("#ID_txt01").html($(data).find("component#ID_txt01").text());
	
	field01=($(Data).find("component#ID_ans01").text());
	field02=($(Data).find("component#ID_ans02").text());
	field03=($(Data).find("component#ID_ans03").text());
	field04=($(Data).find("component#ID_ans04").text());
	field05=($(Data).find("component#ID_ans05").text());
	field06=($(Data).find("component#ID_ans06").text());
	
	$('#ansHeader01').html(($(data).find("component#ID_term01").text()));
	$('#ansHeader02').html(($(data).find("component#ID_term02").text()));
	$('#ansHeader03').html(($(data).find("component#ID_term03").text()));
	
	
	numCorrect = 0;
	tempArray = [];
	showRandom();
	resetFun();
	clickFunc();
	
}

var temp;

temp = '<div id="ID_inst"></div><div id="dvHeading"/><div id="background"><div id="ansElements"><div id="ansHeader01" class="Questions"></div><div id="ansHeader02" class="Questions"></div><div id="ansHeader03" class="Questions"></div><div id="ans01"></div><div id="ans02"></div><div id="ans03"></div></div>';
temp += '</div>';
temp +='<div id="description"><div id="ID_txt01"></div><div id="descText"></div><div><input type="submit" name="reset" class="button_add" id="reset" value="Reset" /><div id="pannel" style="display:none;"><div class="cross"><span></span><a href="#" id="incorrect"><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p></p></div></div><div id="pannel_2" style="display:none"><div class="cross_2"><span></span><a href="#" id="correct"><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result_2"><p></p></div></div><script>$("a#incorrect").click(function (event) {$("#pannel").hide();event.preventDefault();$(this).hide();});</script></div>';
$("#mainDiv").html(temp);


function showRandom(){
	
	fields= [field01,field02,field03,field04,field05,field06];
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
	
	if(numCorrect<6){
		var matches = [];
		var answ =this.id;
		
		switch (answ) {
			case "ans01":
				matches.push(field01, field02);
				var answer1=$("div#descText").text();
				if(ctr1<2){
					
				if((field01==answer1) ||((field02==answer1))){
					ctr1=ctr1+1;
					$('#ans01').append(answer1).append($(Data).find("component#ID_break").text());
					checkAnswer(matches,ansLazytxt);
					
				}
				else{
					$(".cross span").html($(Data).find("component#ID_titleIncorrect").text());
					$(".result p").html($(Data).find("component#ID_incorrectText").text());
					$("#pannel").css("display","block");
					}
				}
				break;
				case "ansHeader01":
				matches.push(field01, field02);
				var answer1=$("div#descText").text();
				if(ctr1<2){
				if((field01==answer1) ||((field02==answer1))){
					ctr1=ctr1+1;
					$('#ans01').append(answer1).append($(Data).find("component#ID_break").text());
					checkAnswer(matches,ansLazytxt);
				}
				else{
					$(".cross span").html($(Data).find("component#ID_titleIncorrect").text());
					$(".result p").html($(Data).find("component#ID_incorrectText").text());
					$("#pannel").css("display","block");
					}
				}
				break;
			case "ans02":
				matches.push(field03, field04);
				var answer2=$("div#descText").text();
				if(ctr2<2){
				if((field03==answer2) ||((field04==answer2))){
					ctr2=ctr2+1;
					$('#ans02').append(answer2).append($(Data).find("component#ID_break").text());
					checkAnswer(matches,ansLazytxt);
				}
				else{
					$(".cross span").html($(Data).find("component#ID_titleIncorrect").text());
					$(".result p").html($(Data).find("component#ID_incorrectText").text());
					$("#pannel").css("display","block");
					}
				}
				break;
				case "ansHeader02":
				matches.push(field03, field04);
				var answer2=$("div#descText").text();
				if(ctr2<2){
				if((field03==answer2) ||((field04==answer2))){
					ctr2=ctr2+1;
					$('#ans02').append(answer2).append($(Data).find("component#ID_break").text());
					checkAnswer(matches,ansLazytxt);
				}
				else{
					$(".cross span").html($(Data).find("component#ID_titleIncorrect").text());
					$(".result p").html($(Data).find("component#ID_incorrectText").text());
					$("#pannel").css("display","block");
				 }
				}
				break;
			case "ans03":
				matches.push(field05, field06);
				var answer3=$("div#descText").text();
				if(ctr3<2){
				if((field05==answer3) ||((field06==answer3))){
					ctr3=ctr3+1;
					$('#ans03').append(answer3).append($(Data).find("component#ID_break").text());
				
					checkAnswer(matches,ansLazytxt);
				}
				else{
					$(".cross span").html($(Data).find("component#ID_titleIncorrect").text());
					$(".result p").html($(Data).find("component#ID_incorrectText").text());
					$("#pannel").css("display","block");
					}
				}
				break;
				case "ansHeader03":
				matches.push(field05, field06);
				var answer3=$("div#descText").text();
				if(ctr3<2){
				if((field05==answer3) ||((field06==answer3))){
					ctr3=ctr3+1;
					$('#ans03').append(answer3).append($(Data).find("component#ID_break").text());
					checkAnswer(matches,ansLazytxt);
				}
				else{
					$(".cross span").html($(Data).find("component#ID_titleIncorrect").text());
					$(".result p").html($(Data).find("component#ID_incorrectText").text());
					$("#pannel").css("display","block");
					}
				}
				break;
			default:
			
		}
	}
	else{
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

		//lText= lText.label+GlobalVarContainer.vars.mediaStringArray[labelID]+GlobalVarContainer.vars.mediaStringArray["ID_break"];
		if (numCorrect>=totalQ){
			
			$(".cross span").html($(Data).find("component#ID_titleCorrect").text());
			$(".result p").html($(Data).find("component#ID_correctText").text());
			$("#pannel").css("display","block");
			} else {
			showRandom();
		    }
	} else {
		
			$(".cross span").html($(Data).find("component#ID_titleIncorrect").text());
			$(".result p").html($(Data).find("component#ID_incorrectText").text());
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