/* function for IP Address with pass and block status*/
	/*************************************************************/
		
	//Variables declaration
	var octNum1;
	var octNum2;
	var octNum3;
	var octNum4;
	var correctAnswer;
	var userAnswer;
	var btnClicked;
	var stopGame;
	var count;
	var IPaddress;
	var curRouterStatus = 'CLEAR';
	function getOctect1() {
		octNum1=Number(Math.random()*223);
		if (octNum1==0) {
			octNum1=Number(Math.random()*223);
		}
	}
	function getOctect2() {
		octNum2=Number(Math.random()*255);
		if (octNum2==0) {
			octNum2=Number(Math.random()*255);
		}
	}
	function getOctect3() {
		octNum3=Number(Math.random()*255);
		if (octNum3==0) {
			octNum3=Number(Math.random()*255);
		}
	}
	function getOctect4() {
		octNum4=Number(Math.random()*254);
		if (octNum4==0) {
			octNum4=Number(Math.random()*254);
		}
	}
	
	/* function for check IP address*/
	
	function chkValidity() {
		if ((octNum1 ==10) || ((octNum1 ==192) && (octNum2 ==168) ) || ( (octNum1 ==172) && ((octNum2 >15) && (octNum2 <32) )) ) {
			
			correctAnswer="BLOCK"; 
			
		} else {
			
			correctAnswer="PASS";
			
		}
	}
	

	function getOctet() {
		getOctect1();
		getOctect2();
		getOctect3();
		getOctect4();
		if ( (octNum1 > 3) && (octNum1 < 14)) {
			octNum1=10;
		}
		if ( (octNum1 > 26) && (octNum1 < 34)) {
			octNum1=10;
		}
		if ( (octNum1 > 56) && (octNum1 < 64)) {
			octNum1=10;
		}
		if ( (octNum1 > 183) && (octNum1 < 194)) {
			octNum1=192;
			octNum2=168;
		}
		if ( (octNum1 > 205) && (octNum1 < 208)) {
			octNum1=192;
			octNum2=168;
		}
		if ( (octNum1 > 155) && (octNum1 < 168)) {
			octNum1=192;
			octNum2=168;
		}
		if ( (octNum1 > 170) && (octNum1 < 176)) {
			octNum1=172;
			octNum2=Number(Math.random()*31);
			if ((octNum2 >15) && (octNum2 < 31)) {
				octNum2=octNum2+Number(Math.random()*15);
			}
		}
		if ( (octNum1 > 150) && (octNum1 < 156)) {
			octNum1=172;
			octNum2=Number(Math.random()*31);
			if ((octNum2 >15) && (octNum2 < 31)) {
				octNum2=octNum2+Number(Math.random()*15);
			}
		}
		if ( (octNum1 > 80) && (octNum1 < 86)) {
			octNum1=172;
			octNum2=Number(Math.random()*31);
			if ((octNum2 >15) && (octNum2 < 31)) {
				octNum2=octNum2+Number(Math.random()*15);
			}
		}
		IPaddress=Math.round(octNum1) + "."+Math.round(octNum2) +"."+Math.round(octNum3)+"."+Math.round(octNum4);
		
		chkValidity();//Give value in PASS and BLOCK
		}


var BtnHover = function(BtnId){
		$(BtnId).hover(function() {
			
			if (createjs.Touch.isSupported()) { return }
				$(this)
					.addClass("btn_hover");
		});
		$(BtnId).mouseleave(function() {
				$(this)
					.removeClass("btn_hover");
		});
	}

/* Function for blink element*/
function blink(idp,loop)
{
	j=0;
	
	$(idp).css("display","block");
	$(idp).focus();
	
	setInterval(function(){
	j++;
	if(j>loop)
		{ 
			$(idp).css("display","none");
			return false;
		}
			$(idp).css("display","block");
			setTimeout(function(){
			$(idp).css("display","none");
		},100);
	},
	400);
}
/*Function for Active and Deactive button class*/

var buttonActive = function (btnIdAct){
		$(btnIdAct).removeClass('btn_default');
		$(btnIdAct).removeClass('btn_hover');
		$(btnIdAct).addClass('btn_active');	
	}

var buttonDeactive = function (btnIdDet) {
		$(btnIdDet).removeClass('btn_active');
		$(btnIdDet).removeClass('btn_hover');
		$(btnIdDet).addClass('btn_default');
	}

/*Function for Reset element*/	
var resetAligement = function () {
		$('#ID_btn01').removeClass('btn_active');
		$('#ID_btn02').removeClass('btn_active');
		$('#ID_btn01').addClass('btn_default');
		$('#ID_btn02').addClass('btn_default');
		$('.ball_bg').css('display','none');
		$('.ball_bg').css('top', '330px');
		$('.mail_slide').css('left','50px');
		$('.mail_slide').css('top','175px');
		$('.ball_bg span').empty();
		$('#router').removeClass('PASS');
		$('#router').removeClass('BLOCK');
		$('#router').addClass('CLEAR');
		$('.ball_block').css('display','none');
	}
	
	
/* Content Add in Main Div*/
var MediaApp = function(data)
{

	$("#ID_btn01").html($(data).find("component#ID_btn01").text());
	$("#ID_btn02").html($(data).find("component#ID_btn02").text());
	$("#ID_btn03").html($(data).find("component#ID_btn03").text());
	$("#ID_btn04").html($(data).find("component#ID_btn04").text());
	$("#ID_title").html($(data).find("component#ID_title").text());
	$("#ID_txt02").html($(data).find("component#ID_txt02").text());
	$("#ID_txt03").html($(data).find("component#ID_txt03").text());
	$("#ID_txt04").html($(data).find("component#ID_txt04").text());
	$("#ID_MsgBadBody").html($(data).find("component#ID_MsgBadBody").text());
	$("#ID_MsgBadTitle").html($(data).find("component#ID_MsgBadTitle").text());
	$("#ID_MsgGoodBody").html($(data).find("component#ID_MsgGoodBody").text());
	$("#ID_MsgGoodTitle").html($(data).find("component#ID_MsgGoodTitle").text());
}

function initMedia(){
var temp;
temp = '<div id="wrapper"><input type="button" id="ID_btn01" class="btn_default" value="Pass" /><input type="button" id="ID_btn02" class="btn_default" value="Block" /><input type="button" id="ID_btn03" class="btn_default" value="Start" /><input type="button" id="ID_btn04" class="btn_default" value="Reset" /><span id="ID_title"></span><span id="ID_txt02"></span><span id="ID_txt03"></span><span id="ID_txt04"></span><span id="ID_MsgBadBody"></span><span id="ID_MsgBadTitle"></span><span id="ID_MsgGoodBody"></span><span id="ID_MsgGoodTitle"></span><input id="counter_count" value="5" readonly /><div id="router" class="CLEAR"></div><div class="cloud"></div><div class="line"></div><div class="mail_slide"><span id="IPaddress"></span></div><div class="ball_bg"></div><div class="ball_block"></div><div id="explo" class="explosion"></div><span id="close_btn"></span></div>';
$("#mainDiv").html(temp);
}
initMedia();
function closePopUp(str){
	$("#close_btn").click(function(){
		$("#close_btn").css('display','none');
		if(str == 1){
			$("#ID_MsgBadTitle, #ID_MsgBadBody").css('display','none');
		}else{
			$("#ID_MsgGoodTitle, #ID_MsgGoodBody").css('display','none');
			}
		});
	}
/* Msg Content */
$("#ID_MsgBadTitle, #ID_MsgBadBody, #ID_MsgGoodBody, #ID_MsgGoodTitle, #close_btn").hide();
BtnHover('#ID_btn01');
BtnHover('#ID_btn02');
BtnHover('#ID_btn03');
BtnHover('#ID_btn04');
/* Action for Pass and Block Button*/

	 $('#ID_btn01').click(function() {
		 buttonActive(this);//call button active function
		 $('#router').removeClass('CLEAR');
		 $('#router').removeClass('BLOCK');
		 $('#router').addClass('PASS');
		 curRouterStatus = 'BLOCK';
		 buttonDeactive('#ID_btn02'); //Deactive block class
		 $('.ball_block').css('display','none');
	});
		
	 $('#ID_btn02').click(function (){
			 buttonActive(this); //call button active function
			 $('#router').removeClass('CLEAR');
			 $('#router').removeClass('PASS');
			 $('#router').addClass('BLOCK');
			 buttonDeactive('#ID_btn01'); //Deactive Pass class
			 curRouterStatus = 'PASS';
			 $('.ball_block').css('display','block');
		});

function getActiveMedia(funact){
	

		var curt = $('#counter_count').val(); //get counter value
		
		getOctet(); //correctAnswer, IPaddress;
		
		//alert('Router status'+ros+'Pass Status'+correctAnswer);
		$('#IPaddress').text(IPaddress);

			//Condition for crrect or in correct popup
			if(curt == 0){
				$("#ID_MsgBadTitle, #ID_MsgBadBody, #close_btn").show();
				closePopUp(1);
				resetAligement();
				return false;
			}
			else if(curt == 5 && funact == 5){
				$("#ID_MsgBadTitle, #ID_MsgBadBody, #close_btn").hide();
				$("#ID_MsgGoodBody, #ID_MsgGoodTitle, #close_btn").hide();
				resetAligement();
				return false;
				}	
			else if(curt == 10){
				$('.mail_slide').css('display','none');
				$("#ID_MsgGoodBody, #ID_MsgGoodTitle, #close_btn").show();
				closePopUp(2);
				resetAligement();
				return false;
			}
			else{
		
	//Media function
	$('.mail_slide').css('display','block').animate({
			left: 345
		  	}, 3000, function() {
				var ros = $('#router').attr('class'); // get router status
				//For router status pass
				if(ros == "PASS"){
					$('.mail_slide').animate({
							left: 479
							}, 700, function() {
								
									//check with IP status
									if(ros == "PASS" && correctAnswer == "PASS"){
										$('.ball_bg').css('display','block').append('<span class="increase">+1</span>').animate({
										  left:350,
										  top:18				  
										  }, 4000, function () {
												var elm = $('#counter_count');
												var val = elm.val();
												val = Number(val) == NaN ? 0 : Number(val);
												elm.val(val + 1);
												resetAligement();
												getActiveMedia(1);
												
											 });//END:PLUS
										}//Add by 1
										else{
											$('.ball_bg').css('display','block').append('<span class="decrease">-1</span>').animate({
											  left:350,
											  top:18				  
											  }, 4000, function () {
													var elm = $('#counter_count');
													var val = elm.val();
													val = Number(val) == NaN ? 0 : Number(val);
													elm.val(val - 1);

													resetAligement();
													getActiveMedia(1);
												  });
											}//Minus by 1
								});
					}//END:PASS
					
				else if(ros == "BLOCK"){
					
					$('.mail_slide').animate({
							left: 526,
							top:270
							}, 700, function() {
								$(this).css('display','none');
									//check with IP status
									if(ros == "BLOCK" && correctAnswer == "BLOCK"){
										$('.ball_bg').css('display','block').append('<span class="increase">+1</span>').animate({
										  left:350,
										  top:18				  
										  }, 4000, function () {
												var elm = $('#counter_count');
												var val = elm.val();
												val = Number(val) == NaN ? 0 : Number(val);
												elm.val(val + 1);

												resetAligement();
												getActiveMedia(1);
											 });//END:PLUS
										}//Add by 1
										else{
											$('.ball_bg').css('display','block').append('<span class="decrease">-1</span>').animate({
											  left:350,
											  top:18				  
											  }, 4000, function () {
													var elm = $('#counter_count');
													var val = elm.val();
													val = Number(val) == NaN ? 0 : Number(val);
													elm.val(val - 1);
													
													resetAligement();
													getActiveMedia(1);
												  });
											}//Minus by 1
								});
					}//END:BLOCK
					
				else{
					blink('#explo',3);
					$(this).css('display','none');
					$('.ball_bg').css('display','block').append('<span class="decrease">-1</span>').animate({
					  left:350,
					  top:10				  
					  }, 4000, function () {
							var elm = $('#counter_count');
							var val = elm.val();
							val = Number(val) == NaN ? 0 : Number(val);
							elm.val(val - 1);								
							resetAligement();
							getActiveMedia(1);
						  });
						}//END:CLEAR
				
					});//END: mail slide start
				}

	}
/* Default action block all the IP address*/
 $('#ID_btn03').click(function (e){
		buttonActive(this); //call button active function
		$(this).attr('disabled','disabled');
		buttonDeactive('#ID_btn04'); //Deactive Pass class	 
		 	getActiveMedia(1);
		 });

	$('#ID_btn04').click(function() { //part done
		 buttonDeactive('#ID_btn03'); //Deactive Pass class
		 $('#ID_btn03').removeAttr('disabled','enabled');
		 $('#counter_count').val(5);
		 resetAligement();
		 $('.ball_bg').stop();
		 $('.mail_slide').stop();
		 $('#explo').hide();
		 $(".mail_slide, .ball_bg, #ID_MsgBadTitle, #ID_MsgBadBody, #close_btn").hide();
		 $("#ID_MsgGoodBody, #ID_MsgGoodTitle, #close_btn").hide();
		 return false;
	});
	
