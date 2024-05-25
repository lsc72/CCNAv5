
var animactivity = function(_xmlData)
{

var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';
	var temp = '<div id="main_wrapper"><div id="main_container"><div class="main_bg"><img src="1_1_2_2.png" id="main_bg" style="position:relative;"/></div><div id="comblur_1"><img src="comp_envelop_blur.png" id="main_bg" style="position:relative;"/></div><div id="comblur_2"><img src="comp_cloud_white_blur.png" id="main_bg" style="position:relative;"/></div><div id="comblur_3"><img src="comp_folder_blur.png" id="main_bg" style="position:relative;"/></div><div id="comblur_4"><img src="cpu_floder_blur.png" id="main_bg" style="position:relative;"/></div><div id="comblur_5"><img src="cpu_cloud_blur.png" id="main_bg" style="position:relative;"/></div><div id="comblur_6"><img src="cpu_envelop_blur.png" id="main_bg" style="position:relative;"/></div><a href="#" ><div id="com_1"><img src="comp_envelop.png" id="main_bg" style="position:relative;"/></div></a><div id="com_2"><img src="comp_cloud_white.png" id="main_bg" style="position:relative;"/></div><div id="com_3"><img src="comp_folder.png" id="main_bg" style="position:relative;"/></div><div id="com_4"><img src="cpu_floder.png" id="main_bg" style="position:relative;"/></div><div id="com_5"><img src="cpu_cloud.png" id="main_bg" style="position:relative;"/></div><div id="com_6"><img src="cpu_envelop.png" id="main_bg" style="position:relative;"/></div><div id="text_4"></div><div id="text_5"></div><div id="text_6"></div><div id="text_7"></div><div id="text_8"></div><div id="text_9"></div><div id="text_10"></div><div id="text_11">Click the different client and server services for a brief description.</div><div id="pannel" style="display:none;"><span id="title_1"></span><div class="cross"><span></span><a href="#" id="incorrect" ><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p id="text_1"></p></div></div><div id="panne2" style="display:none;"><span id="title_2"></span><div class="cross"><span></span><a href="#" id="incorrect" ><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p id="text_2"></p></div></div><div id="panne3" style="display:none;"><span id="title_3"></span><div class="cross"><span></span><a href="#" id="incorrect" ><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p id="text_3"></p></div></div><script> $("a#incorrect").click(function ( event ) { $("#pannel,#pannel2,#pannel3").hide(); event.preventDefault(); $(this).hide(); });</script></div></div>';
temp += '</div></div>';

temp += '<div id="inetbox" ></div>'
temp += '<div id="captiontext"></div>'
			
				
		$("#animDiv").html(temp);
			$("#title_1").html($(_xmlData).find("component#ID_set03_header").text());
			$("#text_1").html($(_xmlData).find("component#ID_set03_body").text());
			$("#title_2").html($(_xmlData).find("component#ID_set02_header").text());
			$("#text_2").html($(_xmlData).find("component#ID_set02_body").text());
			$("#title_3").html($(_xmlData).find("component#ID_set01_header").text());
			$("#text_3").html($(_xmlData).find("component#ID_set01_body").text());
			$("#text_4").html($(_xmlData).find("component#ID_txt01").text());
			$("#text_5").html($(_xmlData).find("component#ID_txt02").text());
			$("#text_6").html($(_xmlData).find("component#ID_txt03").text());
			$("#text_7").html($(_xmlData).find("component#ID_txt04").text());
			$("#text_8").html($(_xmlData).find("component#ID_txt05").text());
			$("#text_9").html($(_xmlData).find("component#ID_txt06").text());
			$("#text_10").html($(_xmlData).find("component#ID_txt07").text());
						
}


$(function(){	
	
		
$("#com_1,#com_6").live("click",function() {
   $("#comblur_1").css("opacity","1");
   $("#comblur_6").css("opacity","1"); 
   $("#comblur_2").css("opacity","0");
   $("#comblur_3").css("opacity","0");
   $("#comblur_4").css("opacity","0");
   $("#comblur_5").css("opacity","0");
   $("#com_1,#com_6").css("z-index","-1");
   $("#com_2,#com_5").css("z-index","1");
   $("#com_3,#com_4").css("z-index","1");
   $("#pannel").show();
   $("#panne2").hide();
	  $("#panne3").hide();
    });
	
$("#com_2,#com_5").live("click",function() {
   $("#comblur_2").css("opacity","1");
   $("#comblur_5").css("opacity","1");
   $("#comblur_1").css("opacity","0");
   $("#comblur_6").css("opacity","0");
   $("#comblur_3").css("opacity","0");
   $("#comblur_4").css("opacity","0");
    $("#com_2,#com_5").css("z-index","-1");
	$("#com_3,#com_4").css("z-index","1");
	$("#com_1,#com_6").css("z-index","1");
    $("#panne2").show();
	 $("#pannel").hide();
	  $("#panne3").hide();
    });
	
$("#com_3,#com_4").live("click",function() {
   $("#comblur_2").css("opacity","0");
   $("#comblur_5").css("opacity","0");
   $("#comblur_1").css("opacity","0");
   $("#comblur_6").css("opacity","0");
   $("#comblur_3").css("opacity","1");
   $("#comblur_4").css("opacity","1");
   $("#com_3,#com_4").css("z-index","-1");
   $("#com_2,#com_5").css("z-index","1");
   $("#com_1,#com_6").css("z-index","1");
   $("#panne3").show();
	 $("#pannel").hide();
	  $("#panne2").hide();
    });

});



