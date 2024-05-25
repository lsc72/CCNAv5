var yellow_Image,yellow_second,yellow_third,yellow_fourth;
var firstbox,secondbox,thirdbox;
var arow1,arow2,qMark;
var pause,play,restart;

	
	var url=location.href;
	url=url.split("/")
	url=url[url.length-3];
	var xmlFile='media_'+url+'.xml';
	
	$.ajax({
	type: "GET",
	crossDomain:false, //edit 24/01 : this property must be set to false
	url: xmlFile,
	dataType: "xml",
	success: getXMLdata,
	error: erFun
	});
	

var animation1 = function()
{

var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';
	/*var temp = '<div id="main_wrapper"><div id="main_container"><div id="envelop_Yellow"><img src="envelope_closed_static.png"id="yellow_1"style="position:relative;opacity:0"/><img src="envelope_closed_static.png" id="yellow_2" style="position:relative;opacity:0"/><img src="envelope_closed_static.png"id="yellow_3"style="position:relative;opacity:0"/><img src="envelope_closed_static.png"id="yellow_4"style="position:relative;opacity:0"/><img src="arrows.png"id="arrow1" style="position:relative;opacity:0" width="103" height="74"/><img src="arrow2.png"id="arrow2" style="position:relative;opacity:0"/><img src="questionmark.png"id="questionmark" style="position:relative;opacity:0"/><div id="ID_txt01" style="position:absolute;opacity:0;" ></div><div id="ID_txt02" style="position:absolute;opacity:0;" ></div><div id="ID_txt03"  style="position:absolute;opacity:0;" ></div></div>';*/
	var temp = '<div id="main_wrapper"><div id="main_container"><div id="main"><div id="ID_txt01"></div><div id="ID_txt02"></div><div id="ID_txt03"></div><div id="ID_txt04"></div><div id="ID_txt05"></div><div id="ID_txt06"></div><div id="ID_bubble01"></div><div id="ID_bubble02"></div><img src="bubble1.png" id="bubble1" style="display:none;position:absolute;left:13.9px;top:33.95px;width:186px;height:82px;z-index:0;"/><img src="bubble2.png" id="bubble2" style="display:none;position:absolute;left:316.45px;top:239.05px;width:151px;height:88px;z-index:0;"/><img src="line.png" id="line" style="position:absolute;top:155.7px;left:57.45px;width:331.75px!important;height:173.9px!important;z-index:0" /><img src="1.png" id="pic1"  style="position:absolute;top:119px;left:7.65px;width:70.6px!important;height:72px!important;z-index:2"/><img src="4.png" id="pic4"  style="position:absolute;top:133px;left:189.8px;width:70.8px!important;height:34.1px!important;z-index:2"/><img src="3.png" id="pic3"  style="position:absolute;top:137px;left:379.4px;width:50.95px!important;height:36.7px!important;z-index:2"/><img src="1.png" id="pic4"  style="position:absolute;top:298.5px;left:122.15px;width:70.6px!important;height:72px!important;z-index:2"/><img src="2.png" id="pic2"  style="position:absolute;top:330.25px;left:308.65px;width:40.65px!important;height:57.2px!important;z-index:2"/> <div id="envelop_Yellow" style="display:none;position:relative;left:20px;top:0px;"><img src="envelope.png"id="yellow_1"style="position:absolute;display:block;left:-45px;top:140px;z-index:1"/><div id="ID_txt07" style="z-index:1"></div></div><div id="envelope_1" style="position:absolute;left:159.8px;top:138px;display:none;z-index:-1;"><img src="envelope.png" id="envelope1_1" style="position:absolute;"/><div id="ID_txt10"></div></div><div id="envelope_2" style="position:absolute;left:159.8px;top:138px;display:none;z-index:-1"><img src="envelope.png" id="envelope2_2" style="position:absolute;"/><div id="ID_txt11"></div></div><div id="envelope_3" style="position:absolute;left:159.8px;top:138px;display:none;z-index:-1"><img src="envelope.png" id="envelope3_3" style="position:absolute;"/><div id="ID_txt12"></div></div><div id="envelope_4" style="display:none;position:absolute;left:265px;top:345px;z-index:1;"><img src="envelope.png" id="envelope4_4" style="position:absolute;"/><div id="ID_txt08"></div></div> </div></div>';
temp += '</div></div>';

temp += '<div id="inetbox" ></div>'
temp += '<div id="captiontext"></div>'
			
		$("#animDiv").html(temp);

}

function getXMLdata(data)
{
	$("#inetbox").html($(data).find("component#ID_txt04").text());
	$("#captiontext").html($(data).find("component#ID_caption").text());
	$("#ID_txt01").html($(data).find("component#ID_txt01").text());	
	$("#ID_txt02").html($(data).find("component#ID_txt02").text());
	$("#ID_txt03").html($(data).find("component#ID_txt03").text());
}
	function animation()
	{   
	yellow_Image  = $("#envelop_Yellow")
	firstbox	  = $("#ID_txt01"); 
	secondbox	  = $("#ID_txt02");
	thirdbox      = $("#ID_txt03");
	yellow_second = $("#yellow_2"); 
	yellow_third  = $("#yellow_3");
	yellow_fourth = $("#yellow_4");
	arow1		  = $("#arrow1");
	arow2		  = $("#arrow2");
	qMark         = $("#questionmark");
	pause         = $("#pauseBtn");
    play          = $("#playBtn")
	restart       = $("#restartBtn"); 
	
	tl.to(yellow_Image, .9, {css:{opacity:"1"}})
	.to(firstbox, 1.5, {css:{opacity:"1"}})
	.to(yellow_Image, 2.5 ,{css:{left:"266px"}})
	.to(firstbox,.05,{css:{opacity:"0"}})
	.to(yellow_Image,.8,{css:{opacity:"0"}})
	.to(yellow_second,.9,{css:{opacity:"1"}})
	.to(yellow_second, 2.5,{css:{left:"41px",top:"-5px"}})
	.to(secondbox,1.5, {css:{opacity:"1"}})
	.to(yellow_second,.9,{css:{opacity:"0"}})
	.to(yellow_second, 2.5,{css:{left:"111px",top:"-26px"}})
	.to(yellow_second,.9,{css:{opacity:"1"}})
	.to(yellow_second, 2.5,{css:{left:"-24px",top:"39px"}})
	.to(secondbox,.05,{css:{opacity:"0"}})
	.to(yellow_second,.01,{css:{opacity:"0"}})
	.to(yellow_third,.01,{css:{opacity:"1"}})
	.to(yellow_third, 2.5,{css:{left:"109px",top:"80px"}})
	.to(arow1, 1.5,{css:{opacity:"1"}})
	.to(arow1, .9,{css:{opacity:"0"}})
	.to(arow1, .9,{css:{opacity:"1"}})
	.to(arow1, .9,{css:{opacity:"0"}})
	.to(arow1, .9,{css:{opacity:"1"}})
	.to(qMark,.9,{css:{opacity:"1"}})
	.to(thirdbox,1.2,{css:{opacity:"1"}})
	.to(arow2, .05,{css:{opacity:"1"}})
	.to(arow1, .9,{css:{opacity:"0"}})	
	.to(qMark, .9,{css:{opacity:"0"}})
	.to(yellow_third,.001,{css:{opacity:"0"}})
	.to(yellow_fourth,.001,{css:{opacity:"1"}})
	.to(yellow_fourth,2.5,{css:{left:"263px",top:"-20px"}})
	.to(pause,.05,{onComplete:myFunction})
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

var animeArray = [animation1];