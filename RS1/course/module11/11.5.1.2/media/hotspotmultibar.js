var hotspotmultibar = function(_xmlData)
{
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';
	var temp = '<div id="main_wrapper"><div id="main_container"><div class="main_bg_1"><img src="11_5_1_2A.jpg" width="400" height="159" style="position:relative;"/></div><div class="main_bg_2"><img src="11_5_1_2B.jpg" width="400" height="159" style="position:relative;"/></div><div class="box"><img src="box.png" id="box"  width="418" height="130" style="position:relative;"/></div><div class="mark_a"><img src="marker_A.png" id="box"  width="109" height="18" /></div><div class="mark_b"><img src="marker_B.png" id="box"  width="109" height="24"/></div><div class="mark_B1"></div><div class="mark_B11"></div><div class="mark_B2"></div><div class="mark_B22"></div><div id="front_box"><div class="title"></div><div class="matter"><p></p></div></div><div id="front_box_hotspot"><div class="title_1"></div><div class="matter_1"><p></p></div></div><div id="rear_box"><div class="title_2"></div><div class="matter_2"><p></p></div></div><div id="internet_box"><div class="title_3"></div><div class="matter_3"><p></p></div></div><div id="ethernet_box"><div class="title_4"></div><div class="matter_4"><p></p></div></div></div></div>';
temp += '</div></div>';

temp += '<div id="front" ></div>'
temp += '<div id="rear"></div>'
			
			
				
		$("#animDiv").html(temp);
			$(".title").html($(_xmlData).find("component#ID_s1_title").text());
			$(".matter p").html($(_xmlData).find("component#ID_s1_txt").text());
			$(".title_1").html($(_xmlData).find("component#ID_LED_HOTSPOT_T").text());
			$(".matter_1 p").html($(_xmlData).find("component#ID_LED_HOTSPOT").text());
			$(".title_2").html($(_xmlData).find("component#ID_s2_title").text());
			$(".matter_2 p").html($(_xmlData).find("component#ID_s2_txt").text());
			$(".title_3").html($(_xmlData).find("component#ID_INTERNET_HOTSPOT_T").text());
			$(".matter_3 p").html($(_xmlData).find("component#ID_INTERNET_HOTSPOT").text());
			$(".title_4").html($(_xmlData).find("component#ID_ETHERNET_HOTSPOT_T").text());
			$(".matter_4 p").html($(_xmlData).find("component#ID_ETHERNET_HOTSPOT").text());
			$("#front").html($(_xmlData).find("component#ID_btn01").text());
			$("#rear").html($(_xmlData).find("component#ID_btn02").text());
						
}


$(function(){	
	
		
$("#front").live("click",function() {
   $(this).css("background-image", "url(button_after.jpg)");
   $(this).css("background-repeat","repeat-x");
   $(this).css("color","#3B66B2");
   $("#rear").css("background-image", "url(button_before.jpg)");
   $("#rear").css("background-repeat","repeat-x");
   $("#rear").css("color","#ffffff");
   $("#front_box").css("opacity","1"); 
   $(".main_bg_1").css("opacity","1");
   $(".mark_a").css("opacity","1");
   $("#front_box_hotspot").css("opacity","0");
   $("#rear_box").css("opacity","0");
   $("#internet_box").css("opacity","0");
   $("#ethernet_box").css("opacity","0");
   $(".main_bg_2").css("opacity","0");
   $(".mark_b").css("opacity","0");
   $(".mark_a").removeClass("glow_a");
   $(".mark_a.glow_a > img").removeClass("img_a");
   $(".mark_B1").removeClass("glow_b");
   $(".mark_b.glow_b > img").removeClass("img_b");
   $(".mark_B11").removeClass("glow_b1");
   $(".mark_B2").removeClass("glow_c");
   $(".mark_B22").removeClass("glow_b2");
   });
	
$(".mark_a").live("click",function() {
   $("#front_box_hotspot").css("opacity","1");
   $("#front_box").css("opacity","0"); 
   $("#rear_box").css("opacity","0");
   $("#internet_box").css("opacity","0");
   $("#ethernet_box").css("opacity","0");
   $(".main_bg_2").css("opacity","0");
   $(".mark_b").css("opacity","0");
   $(".matter_1").css("z-index","1");
   $(".matter").css("z-index","-1");
   $(".matter_2").css("z-index","-1");
   $(".matter_3").css("z-index","-1");
   $(".matter_4").css("z-index","-1");
   $(".mark_a").addClass("glow_a");
   $(".mark_a.glow_a > img").addClass("img_a");
   $(".mark_B1").removeClass("glow_b");
   $(".mark_b.glow_b > img").removeClass("img_b");
   $(".mark_B11").removeClass("glow_b1");
   $(".mark_B2").removeClass("glow_c");
   $(".mark_B22").removeClass("glow_b2");
   });	

$("#rear").live("click",function() {
   $(this).css("background-image", "url(button_after.jpg)");
   $(this).css("background-repeat","repeat-x");
   $(this).css("color","#3B66B2");
   $("#front").css("background-image", "url(button_before.jpg)");
   $("#front").css("background-repeat","repeat-x");
   $("#front").css("color","#ffffff");
   $("#rear_box").css("opacity","1");
   $(".main_bg_2").css("opacity","1");
   $(".mark_b").css("opacity","1");
   $("#front_box_hotspot").css("opacity","0");
   $("#front_box").css("opacity","0"); 
   $("#internet_box").css("opacity","0");
   $("#ethernet_box").css("opacity","0");
   $(".main_bg_1").css("opacity","0");
   $(".mark_a").css("opacity","0");
   $(".mark_a").removeClass("glow_a");
   $(".mark_a.glow_a > img").removeClass("img_a");
   $(".mark_B1").removeClass("glow_b");
   $(".mark_b.glow_b > img").removeClass("img_b");
   $(".mark_B11").removeClass("glow_b1");
   $(".mark_B2").removeClass("glow_c");
   $(".mark_B22").removeClass("glow_b2");
   });
   
$(".mark_B1,.mark_B11").live("click",function() {
   $("#internet_box").css("opacity","1");
   $(".main_bg_2").css("opacity","1");
   $(".mark_b").css("opacity","1");
   $("#front_box_hotspot").css("opacity","0");
   $("#front_box").css("opacity","0");
   $("#rear_box").css("opacity","0"); 
   $("#ethernet_box").css("opacity","0");
   $(".main_bg_1").css("opacity","0");
   $(".mark_a").css("opacity","0");
   $(".mark_B1").addClass("glow_b");
   $(".mark_b.glow_b > img").addClass("img_b");
   $(".mark_B11").addClass("glow_b1");
   $(".mark_a").removeClass("glow_a");
   $(".mark_a.glow_a > img").removeClass("img_a");
   $(".mark_B2").removeClass("glow_c");
   $(".mark_B22").removeClass("glow_b2");
   });
   
$(".mark_B2,.mark_B22").live("click",function() {
   $("#ethernet_box").css("opacity","1");
   $(".main_bg_2").css("opacity","1");
   $(".mark_b").css("opacity","1");
   $("#front_box_hotspot").css("opacity","0");
   $("#front_box").css("opacity","0");
   $("#rear_box").css("opacity","0"); 
   $("#internet_box").css("opacity","0");
   $(".main_bg_1").css("opacity","0");
   $(".mark_a").css("opacity","0");
   $(".mark_B2").addClass("glow_c");
   $(".mark_B22").addClass("glow_b2");
   $(".mark_B1").removeClass("glow_b");
   $(".mark_b.glow_b > img").removeClass("img_b");
   $(".mark_B11").removeClass("glow_b1");
   $(".mark_a").removeClass("glow_a");
   $(".mark_a.glow_a > img").removeClass("img_a");
   });

});



