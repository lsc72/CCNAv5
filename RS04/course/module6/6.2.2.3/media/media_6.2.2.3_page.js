
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
 
loadScript("../../../common/scripts/swfobject.js", registerSWF);

 
(slideViewDidLoad = function(sc,id){

	 
	if(id == "2_canvas_div_1")
	{ 
		$("#textBoxDiv_1").append("<div id='div1'><img src='6_2_2_3.jpg' /></div>");

	}
	 
	if(id == "3_canvas_div_1")
	{
		$("#textBoxDiv_2").append("<div id='div2'><img src='img3_Body.png' /></div>");
		
		$("#textBoxDiv_2").append("<div id='txt5'>"+getMediaText('ID_s2_txt05')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt6'>"+getMediaText('ID_s2_txt06')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt7'>"+getMediaText('ID_s2_txt07')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt8'>"+getMediaText('ID_s2_txt08')+"</div>");

		$("#textBoxDiv_2").append("<div id='txt9'>"+getMediaText('ID_s2_txt09')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt10'>"+getMediaText('ID_s2_txt10')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt11'>"+getMediaText('ID_s2_txt11')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt12'>"+getMediaText('ID_s2_txt12')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt13'>"+getMediaText('ID_s2_txt13')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt14'>"+getMediaText('ID_s2_txt14')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt15'>"+getMediaText('ID_s2_txt15')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt16'>"+getMediaText('ID_s2_txt16')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt17'>"+getMediaText('ID_s2_txt17')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt18'>"+getMediaText('ID_s2_txt18')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt19'>"+getMediaText('ID_s2_txt19')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt20'>"+getMediaText('ID_s2_txt20')+"</div>");
		$("#textBoxDiv_2").append("<div id='txt21'>"+getMediaText('ID_s2_txt21')+"</div>"); /**/

	}
	
	/*if(id == "1_canvas_div_3")
		{
		var div = document.getElementById("textBoxDiv_3");
		$("#textBoxDiv_3").append("<div id='ID_s1_pop03A'>"+getMediaText('ID_s1_pop03A')+"</div>");
		$("#textBoxDiv_3").append("<div id='arrow3'><img src='arrow3.png' /></div>");

	}*/
	

});
