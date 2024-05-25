var describe,ans01,ans02,ans03,ans04,ans05,ans06,numCorrect,field01,field02,field03,field04,field05,field06,labelID,answerTxt;
var fields =[];
var totalQ,Data;
var tempArray = new Array();

var clickacitivity = function(data)
{
	 Data = data;
	$("#ID_s1_inst").html($(data).find("component#ID_s1_inst").text());
	$("#ID_s1_txt01").html($(data).find("component#ID_s1_txt01").text());
	$("#ID_s1_txt02").html($(data).find("component#ID_s1_txt02").text());

	field01=($(Data).find("component#ID_s1_ans01").text());
	field02=($(Data).find("component#ID_s1_ans02").text());
	field03=($(Data).find("component#ID_s1_ans03").text());
	field04=($(Data).find("component#ID_s1_ans04").text());
	field05=($(Data).find("component#ID_s1_ans05").text());
	field06=($(Data).find("component#ID_s1_ans06").text());
	
	$('#ansHeader01').html(($(data).find("component#ID_s1_field01").text()));
	$('#ansHeader02').html(($(data).find("component#ID_s1_field02").text()));
	$('#ansHeader03').html(($(data).find("component#ID_s1_field03").text()));
	$('#ansHeader04').html(($(data).find("component#ID_s1_field04").text()));
	$('#ansHeader05').html(($(data).find("component#ID_s1_field05").text()));
	$('#ansHeader06').html(($(data).find("component#ID_s1_field06").text()));
	
	numCorrect = 0;
	tempArray = "";
	showRandom();
	resetFun();
	clickFunc();
}

var temp;

temp = '<div id="ID_s1_inst"></div><div id="background"><div id="ansElements"><div id="ansHeader01" class="Questions"></div><div id="ansHeader02" class="Questions"></div><div id="ansHeader03" class="Questions"></div><div id="ansHeader04" class="Questions"></div><div id="ansHeader05" class="Questions"></div><div id="ansHeader06" class="Questions"></div><div id="ans01"></div><div id="ans02"></div><div id="ans03"></div><div id="ans04"></div><div id="ans05"></div><div id="ans06"></div></div>';
temp += '</div>';
temp +='<div id="description"><div id="ID_s1_txt01"></div><div id="ID_s1_txt02"></div><div id="descText"></div><div><input type="submit" name="reset" class="button_add" id="reset" value="Reset" /><div id="pannel" style="display:none;"><div class="cross"><span></span><a href="#" id="incorrect"><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p></p></div></div><div id="pannel_2" style="display:none"><div class="cross_2"><span></span><a href="#" id="correct"><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result_2"><p></p></div></div><script>$("a#incorrect").click(function (event) {$("#pannel").hide();event.preventDefault();$(this).hide();});</script><script>$("a#correct").click(function (event) {$("#pannel_2").hide();event.preventDefault();$(this).hide();});</script></div>';
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
if(numCorrect<6)
	{	
	var answer="";
	var answ =this.id;
	switch (answ) {
		case "ans01":
		$("#pannel").css("display","none");
			answer = field01;
			var answer1=$("div#descText").text();
	 		if(answer==answer1){
				$('#ans01').text(answer1);
				checkAnswer(answer);
			}
			else{
				$(".cross span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel").css("display","block");
				}
			break;
		case "ansHeader01":
		$("#pannel").css("display","none");
			answer = field01;
			var answer1=$("div#descText").text();
	 		if(answer==answer1){
				$('#ans01').text(answer1);
				checkAnswer(answer);
			}
			else{
				$(".cross span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel").css("display","block");
				}
			break;
		case "ans02":
		$("#pannel").css("display","none");
			answer = field02;
			var answer2=$("div#descText").text();
			if(answer==answer2){
				$('#ans02').text(answer2);
				checkAnswer(answer);
			}
			else{
				$(".cross span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel").css("display","block");
				}
			break;
		case "ansHeader02":
		$("#pannel").css("display","none");
		answer = field02;
		var answer2=$("div#descText").text();
		if(answer==answer2){
			$('#ans02').text(answer2);
			checkAnswer(answer);
		}
		else{
				$(".cross span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel").css("display","block");
				}
		break;
		case "ans03":
		$("#pannel").css("display","none");
			answer = field03
			var answer3=$("div#descText").text();
	 		if(answer==answer3){
				$('#ans03').text(answer3);
				checkAnswer(answer);
			}
			else{
				$(".cross span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel").css("display","block");
				}
			break;
		case "ansHeader03":
		$("#pannel").css("display","none");
			answer = field03
			var answer3=$("div#descText").text();
	 		if(answer==answer3){
				$('#ans03').text(answer3);
				checkAnswer(answer);
			}
			else{
				$(".cross span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel").css("display","block");
				}
			break;
		case "ans04":
		$("#pannel").css("display","none");
			answer = field04
			var answer4=$("div#descText").text();
	 		if(answer==answer4){
				$('#ans04').text(answer4);
				checkAnswer(answer);
			}
			else{
				$(".cross span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel").css("display","block");
				}
			break;
		case "ansHeader04":
		$("#pannel").css("display","none");
			answer = field04
			var answer4=$("div#descText").text();
	 		if(answer==answer4){
				$('#ans04').text(answer4);
				checkAnswer(answer);
			}
			else{
				$(".cross span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel").css("display","block");
				}
			break;
		case "ans05":
			answer = field05
			$("#pannel").css("display","none");
			var answer5=$("div#descText").text();
	 		if(answer==answer5){
				$('#ans05').text(answer5);
				checkAnswer(answer);
			}
			else{
				$(".cross span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel").css("display","block");
				}
			break;
		case "ansHeader05":
		$("#pannel").css("display","none");
			answer = field05
			var answer5=$("div#descText").text();
	 		if(answer==answer5){
				$('#ans05').text(answer5);
				checkAnswer(answer);
			}
			else{
				$(".cross span").html($(Data).find("component#ID_s1_titleIncorrect").text());
				$(".result p").html($(Data).find("component#ID_s1_incorrectText").text());
				$("#pannel").css("display","block");
				}
			break;
		case "ans06":
		$("#pannel").css("display","none");
			answer = field06
			var answer6=$("div#descText").text();
	 		if(answer==answer6){
				$('#ans06').text(answer6);
				checkAnswer(answer);
			}
			else{
				$(".cross span").html($(Data).find("component#ID_s1_titleIncorrect").text());
				$(".result p").html($(Data).find("component#ID_s1_incorrectText").text());
				$("#pannel").css("display","block");
				}
			break;
		case "ansHeader06":
		$("#pannel").css("display","none");
			answer = field06
			var answer6=$("div#descText").text();
	 		if(answer==answer6){
				$('#ans06').text(answer6);
				checkAnswer(answer);
			}
			else{
				$(".cross span").html($(Data).find("component#ID_s1_titleIncorrect").text());
				$(".result p").html($(Data).find("component#ID_s1_incorrectText").text());
				$("#pannel").css("display","block");
				}
			break;
		default:
		
	}
}
else
	{
		return false;	
	}
});
}

function checkAnswer(ans)
{
	var correct= false;
	if (ans == labelID){
		numCorrect++
			correct = true;
			
		
    }
      if(correct){	
		if (numCorrect>=totalQ){
			$(".cross span").html($(Data).find("component#ID_s1_titleCorrect").text());
			$(".result p").html($(Data).find("component#ID_s1_correctText").text());
			$("#pannel").css("display","block");
			//$("#ansElements>div").unbind();
		} else {
			showRandom();
		}
		
	  }
	  else {
		
			$(".cross span").html($(Data).find("component#ID_titleIncorrect").text());
			$(".result p").html($(Data).find("component#ID_incorrectText").text());
			$("#pannel").css("display","block");
	}
}

function resetFun(){
$("#reset").click(function()
{
	tempArray = "";
	for(var i=1;i<=6;i++){
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