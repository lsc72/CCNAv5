var numCorrect,field01,field02,field03,field04,field05,field06,labelID;
var fields,fields2 =[];
var totalQ,Data,totalQ2;
var tempArray = new Array();
var tempArray2 =[];
var fields01,fields02,fields03,numCorrect2,labelID2;
var temp;
var clickacitivity = function(data,slideObj)
{
if(slideObj.slideID == 1){
	
temp = '<div id="ID_s1_inst"></div><div id="background"><div id="ansElements"><div id="ansHeader01" class="Questions"></div><div id="ansHeader02" class="Questions"></div><div id="ansHeader03" class="Questions"></div><div id="ansHeader04" class="Questions"></div><div id="ansHeader05" class="Questions"></div><div id="ansHeader06" class="Questions"></div><div id="ansHeader07"></div><div id="ans01"></div><div id="ans02"></div><div id="ans03"></div><div id="ans04"></div><div id="ans05"></div><div id="ans06"></div></div></div><div id="description"><div id="ID_s1_txt01"></div><div id="descText"></div><div><input type="submit" name="reset" class="button_add" id="reset" value="Reset" /><div id="pannel" style="display:none;"><div class="cross"><span></span><a href="#" id="incorrect"><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p></p></div></div><div id="pannel_2" style="display:none"><div class="cross_2"><span></span><a href="#" id="correct"><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result_2"><p></p></div></div><script>$("a#incorrect").click(function (event) {$("#pannel").hide();event.preventDefault();$(this).hide();});</script><script>$("a#correct").click(function (event) {$("#pannel_2").hide();event.preventDefault();$(this).hide();});</script></div>';
$("#mainDiv").html(temp);

	 Data = data;
	$("#ID_s1_inst").html($(data).find("component#ID_s1_inst").text());
	$("#ID_s1_txt01").html($(data).find("component#ID_s1_txt01").text());
	
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
	$('#ansHeader07').html(($(data).find("component#ID_s1_txt02").text()));
	
	numCorrect = 0;
	tempArray = "";
	showRandom();
	resetFun();
	clickFunc();
	
	}
else{
	
	temp = '<div id="ID_s2_inst"></div><div id="BackColor"><div id="ansElements2"><div id="ansHeader201" class="Questions2"></div><div id="ansHeader202" class="Questions2"></div><div id="ansHeader203" class="Questions2"></div><div id="ansHeader204"></div><div id="ans201"></div><div id="ans202"></div><div id="ans203"></div></div></div><div id="description2"><div id="ID_s2_txt01"></div><div id="descText2"></div><div><input type="submit" name="reset" class="button_add" id="reset2" value="Reset" /><div id="pannel" style="display:none;"><div class="cross"><span></span><a href="#" id="incorrect"><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p></p></div></div><div id="pannel_2" style="display:none"><div class="cross_2"><span></span><a href="#" id="correct"><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result_2"><p></p></div></div><script>$("a#incorrect").click(function (event) {$("#pannel").hide();event.preventDefault();$(this).hide();});</script><script>$("a#correct").click(function (event) {$("#pannel_2").hide();event.preventDefault();$(this).hide();});</script></div>';
	
	$("#mainDiv").html(temp);
	$("#ID_s2_inst").html($(Data).find("component#ID_s2_inst").text());
	$("#ID_s2_txt01").html($(data).find("component#ID_s2_txt01").text());
	
	fields01=($(Data).find("component#ID_s2_ans01").text());
	fields02=($(Data).find("component#ID_s2_ans02").text());
	fields03=($(Data).find("component#ID_s2_ans03").text());
		
	$('#ansHeader201').html(($(data).find("component#ID_s2_field01").text()));
	$('#ansHeader202').html(($(data).find("component#ID_s2_field02").text()));
	$('#ansHeader203').html(($(data).find("component#ID_s2_field03").text()));
	$('#ansHeader204').html(($(data).find("component#ID_s2_txt02").text()));
	
	numCorrect2 = 0;
	tempArray2 = "";
	showRandom2();
	resetFun2();
	clickFunc2();
	}
}

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

function showRandom2(){
	fields2= [fields01,fields02,fields03];
	totalQ2= fields2.length;
	var ranNum2;
	if(tempArray2.length == 0){
		tempArray2 = fields2.concat();
		}
	ranNum2 = Math.floor((Math.random()*tempArray2.length));
	labelID2 = tempArray2[ranNum2];
	$('#descText2').html(labelID2);
	tempArray2.splice(ranNum2,1);
	
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

function clickFunc2(){ 
$("#ansElements2>div").click(function(){
if(numCorrect2<6)
	{	
	var answer="";
	var answ =this.id;
	switch (answ) {
		case "ans201":
		$("#pannel_2").css("display","none");
			answer = fields01;
			var answer1=$("div#descText2").text();
	 		if(answer==answer1){
				$('#ans201').text(answer1);
				checkAnswer2(answer);
			}
			else{
				$(".cross_2 span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result_2 p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel_2").css("display","block");
				}
			break;
		case "ansHeader201":
		$("#pannel_2").css("display","none");
			answer = fields01;
			var answer1=$("div#descText2").text();
	 		if(answer==answer1){
				$('#ans201').text(answer1);
				checkAnswer2(answer);
			}
			else{
				$(".cross_2 span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result_2 p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel_2").css("display","block");
				}
			break;
		case "ans202":
		$("#pannel_2").css("display","none");
			answer = fields02;
			var answer2=$("div#descText2").text();
			if(answer==answer2){
				$('#ans202').text(answer2);
				checkAnswer2(answer);
			}
			else{
				$(".cross_2 span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result_2 p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel_2").css("display","block");
				}
			break;
		case "ansHeader202":
		$("#pannel_2").css("display","none");
		answer = fields02;
		var answer2=$("div#descText2").text();
		if(answer==answer2){
			$('#ans202').text(answer2);
			checkAnswer2(answer);
		}
		else{
				$(".cross_2 span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result_2 p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel_2").css("display","block");
				}
		break;
		case "ans203":
		$("#pannel_2").css("display","none");
			answer = fields03
			var answer3=$("div#descText2").text();
	 		if(answer==answer3){
				$('#ans203').text(answer3);
				checkAnswer2(answer);
			}
			else{
				$(".cross_2 span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result_2 p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel_2").css("display","block");
				}
			break;
		case "ansHeader203":
		$("#pannel_2").css("display","none");
			answer = fields03
			var answer3=$("div#descText2").text();
	 		if(answer==answer3){
				$('#ans203').text(answer3);
				checkAnswer2(answer);
			}
			else{
				$(".cross_2 span").html($(Data).find("component#ID_s1_titleIncorrect").text());
		$(".result_2 p").html($(Data).find("component#ID_s1_incorrectText").text());
		$("#pannel_2").css("display","block");
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

function checkAnswer2(answ)
{
	var correct2= false;
	
	if (answ == labelID2){
		numCorrect2++
		correct2 = true;
   }
      if(correct2){	
		if (numCorrect2>=totalQ2){
			$(".cross_2 span").html($(Data).find("component#ID_s1_titleCorrect").text());
			$(".result_2 p").html($(Data).find("component#ID_s1_correctText").text());
			$("#pannel_2").css("display","block");
			} else {
			showRandom2();
		}
  }
	  else {
		
			$(".cross_2 span").html($(Data).find("component#ID_titleIncorrect").text());
			$(".result_2 p").html($(Data).find("component#ID_incorrectText").text());
			$("#pannel_2").css("display","block");
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
	
});
}
function resetFun2(){
$("#reset2").click(function()
{
	tempArray2 = "";
	for(var i=1;i<=3;i++){
	$('div#ans20'+i).text("");
	}
	$('#descText2').text("");
	$("#pannel").css("display","none");
	$("#pannel_2").css("display","none");
	showRandom2();
	numCorrect2 = 0;
	
	
});
}