var _data,randomNumber;
var host1,host2,host3,host4,host5,host6,correct_unicast, incorrect_unicast, correct_multicast, incorrect_multicast, correct_broadcast, incorrect_broadcast,end_game;
var counter=10;
var resultcounter=0;
var count_Timer;
var result_Timer;
var ipArray;
var selectedIp;
var arraycount;
var newxmlnode;
var showResult;

var castdetection = function(data)
{

	$("#timeremaining").html($(data).find("component#ID_txt03").text());
	$("#titleinstruction").html($(data).find("component#ID_title").text());
	$("#destination").html($(data).find("component#ID_txt01").text());
	$("#correct_unicast").html($(data).find("component#ID_cUni").text());
	$("#incorrect_unicast").html($(data).find("component#ID_iUni").text());
	$("#correct_multicast").html($(data).find("component#ID_cMulti").text());
	$("#incorrect_multicast").html($(data).find("component#ID_iMulti").text());
	$("#correct_broadcast").html($(data).find("component#ID_cBroad").text());
	$("#incorrect_broadcast").html($(data).find("component#ID_iBroad").text());
	$("#end_game").html($(data).find("component#ID_endGame").text());
	$("#ip6").html($(data).find("component#ID_txt02").text());
	$("#start span").html($(data).find("component#ID_start").text());
	$("#stop span").html($(data).find("component#ID_stop").text());
	$("#reset span").html($(data).find("component#ID_reset").text());


}




function resetComputers(){

	var totalcomputers=7;
	for(compcount=1; compcount<totalcomputers; compcount++){
		$('#pc'+compcount+'_glow').hide();
		$('#pc'+compcount).show();


	}}

function countTimer(){
	$("#countertext").html('10');
	//alert(newxmlnode);
	clearSelections();
	resetComputers();
	$("#popup").hide();
	if(ipArray.length>0){
		counter=10;
		count_Timer = window.setInterval(function() {
			if (counter>0){counter--;
			$("#countertext").html(counter);
			}

			if (counter==0){
				$("#countertext").html('--');
				resultcounter=0;
				stopCountTimer();
				resultTimer();
			}


		}, 1000);

	}
	else if(ipArray.length==0){
		text_id="end_game";
		showFeedback(text_id);
		$("#stop").hide();



	}

}



function resultTimer(){
	checkAns(selectedIp);	
	result_Timer = window.setInterval(function() {
		if (resultcounter<4){resultcounter++;



		}


		if (resultcounter==2){if(ipArray.length==0){

			text_id="end_game";
			showFeedback(text_id);
		}}





		if (resultcounter==3){
			selectIp();
			stopresultTimer()
					countTimer();

		}


	}, 1500);



}	


function stopCountTimer(){
	window.clearInterval(count_Timer);	
	//counter=10;   
	$("#countertext").html(counter);
}	


function stopresultTimer(){
	window.clearInterval(result_Timer);
	resetComputers();
	$("#countertext").html(10);
	resultcounter=0;}

function setIps(){
	ipArray=[];
	ipArray.push("192.168.100.5");
	ipArray.push("192.168.100.2");
	ipArray.push("237.192.126.17");
	ipArray.push("192.168.100.255");
	ipArray.push("225.5.77.126");}


function selectIp(){
	var rNum = Math.floor(Math.random()*(ipArray.length));
	arraycount=rNum;
	selectedIp=ipArray[rNum];
	$("#destinationtext").html(ipArray[rNum]);


}



function checkAns(selectedIp){
		//alert('host1 :'+host1+'host2 :'+host2+'host3 :'+host3+'host4 :'+host4+'host5 :'+host5+'host6 :'+host6);
	switch (selectedIp) {




		case "192.168.100.5":
			if (host6!="selected" && host1!="selected" && host2!="selected" && host3!="selected" && host4!="selected" && host5=="selected") {
				text_id="correct_unicast"
					  showFeedback(text_id);	
				ipArray.splice(arraycount, 1);	



			} else {
				text_id="incorrect_unicast"
					  showFeedback(text_id);	
			}
			break;	

		case "192.168.100.2":
			if (host6!="selected" && host1!="selected" && host2=="selected" && host3!="selected" && host4!="selected" && host5!="selected") {
				text_id="correct_unicast"
					  showFeedback(text_id);	
				ipArray.splice(arraycount, 1);


			} else {
				text_id="incorrect_unicast"
					  showFeedback(text_id);	
			}
			break;	


		case "237.192.126.17":
			if (host6!="selected" && host1!="selected" && host2=="selected" && host3!="selected" && host4=="selected" && host5!="selected") {
				text_id="correct_multicast"
					  showFeedback(text_id);	
				ipArray.splice(arraycount, 1);	   



			} else {
				text_id="incorrect_multicast"
					  showFeedback(text_id);	
			}
			break;	


		case "192.168.100.255":
			if (host6!="selected" && host1=="selected" && host2=="selected" && host3=="selected" && host4=="selected" && host5=="selected") {
				text_id="correct_broadcast"
					  showFeedback(text_id);	ipArray.splice(arraycount, 1);


			} else {
				text_id="incorrect_broadcast"
					  showFeedback(text_id);	
			}
			break;	


		case "225.5.77.126":
			if (host6!="selected" && host1=="selected" && host2!="selected" && host3!="selected" && host4!="selected" && host5=="selected") {
				text_id="correct_multicast"
					  showFeedback(text_id);	
				ipArray.splice(arraycount, 1);	  



			} else {
				text_id="incorrect_multicast"
					  showFeedback(text_id);	
			}
			break;	

	}




}





function pcClickhandler(){
	$('.computer').click(function() {
		var selected_id= this.id;	
		var selected_computer = selected_id.substring(2,3);
		window["host"+selected_computer]="selected";



//alert("you selected :PC "+selected_computer);
		var selected_id= this.id;
		$('#'+selected_id).hide();
		$('#'+selected_id+'_glow').show();}); }

function pcglowClickhandler(){

	$('.computer_glow').click(function() {
		var selected_id= this.id;				
		var selected_computer= selected_id.substring(2,3);
		window["host"+selected_computer]="removed";
		$('#'+selected_id).hide();
		$('#pc'+selected_computer).show();
	}); }		




function clearSelections(){host1=host2=host3=host4=host5=host6="notselected";}




var temp;
temp = '<div id="wrapper"><div id="destinationbg"></div><div id="bg" style="margin-left:270px"><img src="7_1_3_6.jpg"></div><div style="position:absolute; width:200px; top:5px; left:25px; size:11px;"><span id="titleinstruction"></span></div><span id="timeremaining"></span><span id="countertext"><b>10</b></span><div class="computer_glow" id="pc1_glow"><img src="computer2.png"></div><div class="computer_glow" id="pc2_glow"><img src="computer2.png"></div><div class="computer_glow" id="pc3_glow"><img src="computer2.png"></div><div class="computer_glow" id="pc4_glow"><img src="computer2.png"></div><div class="computer_glow" id="pc5_glow"><img src="computer2.png"></div><div class="computer_glow" id="pc6_glow"><img src="computer2.png"></div><div class="computer" id="pc1"><img src="computer.png"></div><div class="computer" id="pc2"><img src="computer.png"></div><div class="computer" id="pc3"><img src="computer.png"></div><div class="computer" id="pc4"><img src="computer.png"></div><div class="computer" id="pc5"><img src="computer.png"></div><div class="computer" id="pc6"><img src="computer.png"></div><div id="stop"><span>Stop</span></div><div id="start"><span>Start</span></div><div id="reset"><span>Reset</span></div><div id="destination"><b></b></div><div id="destinationtext"><b></b></div><div id="popup"><img width="150"  src="result_popup.jpg"><span class="popups" id="correct_multicast"></span><span class="popups" id="incorrect_multicast"></span><span class="popups" id="correct_unicast"></span><span class="popups" id="incorrect_unicast"></span><span class="popups" id="correct_broadcast"></span><span class="popups" id="incorrect_broadcast"></span><span class="popups" id="end_game"></span></div><div id="ip1">192.168.100.1 <br/>225.5.77.126 group</div><div id="ip2">192.168.100.2 <br/>237.192.126.17 group</div><div id="ip3">192.168.100.3</div><div id="ip4">192.168.100.4 <br/>237.192.126.17 group</div><div id="ip5">192.168.100.5 <br/>225.5.77.126 group</div><div id="ip6"></div></div>';


$("#mainDiv").html(temp);

pcClickhandler();
pcglowClickhandler();
resetComputers();
$("#popup").hide();

function showFeedback(text_id){
	$("#popup").show();
	$(".popups").hide();
	$("#"+text_id).show();}





function resetTimers(){
	if(counter==0){
		stopresultTimer();}

	if(counter>0){
		stopCountTimer();}
	
	setIps();
	$('#stop').hide();
	$('#popup').hide();
	$('#start').show();
	$('#destinationtext').html('');			
	clearSelections();
	resetComputers();		
	$("#countertext").html(10);
	


}

$('#reset').click(function() {resetTimers()});
$('#start').click(function() {
	$('#start').hide();
	$('#stop').show();
	selectIp();
	countTimer();})

			$('#stop').click(function() {
				if(counter>0){
				$('#stop').hide();
				$('#start').show();		
				stopCountTimer();}})

						setIps();